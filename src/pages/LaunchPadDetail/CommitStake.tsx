import {
  getContract,
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from '@wagmi/core';
import { useWeb3Modal } from '@web3modal/react';
import { IDO_ABI } from 'abi/ido-abi';
import { idoAbi } from 'abi/ido-abi-ethers';
import BigNumber from 'bignumber.js';
import { getErrorMessage } from 'components/ErrorMessage/getErrorMessage';
import { Loading } from 'components/Loading/Loading';
import { ViewTransaction } from 'components/ViewTransaction/ViewTransaction';
import { ethers } from 'ethers';
import bgStar from 'images/background/bg-star.png';
import matic from 'images/logo/matic.png';
import { useProjectData } from 'pages/LaunchpadExplore/data';
import { useCallback, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useRefLinkStore from 'store/ref-link-store';
import { AppConstant, CHAIN, TOKEN_CONTRACT } from 'util/constant';
import { floorNumber, formatDisplay } from 'util/format-number';
import { getExplorerUrl } from 'util/get-explore-url';
import { toastMes } from 'util/toast-mess';
import { parseUnits } from 'viem';
import {
  useAccount,
  useBalance,
  useChainId,
  useContractRead,
  useContractReads,
  useContractWrite,
} from 'wagmi';

export interface FormValueProps {
  value: string;
}

function CommitStakeCommit() {
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    watch,
  } = useForm<FormValueProps>({
    defaultValues: {
      value: '',
    },
  });

  const chainId = useChainId();
  const { address } = useAccount();
  const { data, refetch: refetchBalance } = useBalance({
    address: address,
  });
  const { open } = useWeb3Modal();
  const [isLoading, setIsLoading] = useState(false);

  const walletRefInfo = useRefLinkStore((state) => state.walletRefInfo);
  const rpcUrl = CHAIN[chainId].rpcUrl;
  const idoAddress = TOKEN_CONTRACT[chainId].IDO_ADDRESS;

  const { writeAsync } = useContractWrite({
    address: idoAddress as `0x${string}`,
    abi: IDO_ABI as any,
    functionName: 'stakeByNative',
  });

  const balanceNativeValue = useMemo(() => {
    if (!data) {
      return 0;
    }

    return (
      Math.round(
        new BigNumber(Number(data.value))
          .dividedBy(Math.pow(10, 18))
          .toNumber() * Math.pow(10, 6)
      ) / Math.pow(10, 6)
    );
  }, [data]);

  const { refetch: refetchStakers } = useContractRead({
    address: idoAddress,
    abi: IDO_ABI,
    functionName: 'stakers',
    args: [address as `0x${string}`],
  });

  /* Minimum staking amount*/
  const { data: minimumStakingAmount } = useContractRead({
    address: idoAddress,
    abi: IDO_ABI as any,
    functionName: 'minimumStakingAmount',
  });
  const minValueNative = useMemo(() => {
    if (!minimumStakingAmount) {
      return 0;
    }

    const res = new BigNumber(Number(minimumStakingAmount))
      .dividedBy(Math.pow(10, 18))
      .toNumber();

    return res;
  }, [minimumStakingAmount]);

  const referrerAddress = useMemo(() => {
    if (!walletRefInfo || !walletRefInfo.refCode) {
      return '0x0000000000000000000000000000000000000000';
    }

    if (walletRefInfo.userId.toLowerCase() === address?.toLowerCase()) {
      return '0x0000000000000000000000000000000000000000';
    }

    return walletRefInfo.userId;
  }, [address, walletRefInfo]);

  const handleSubmitData = useCallback(
    async (val: FormValueProps) => {
      if (!address || !rpcUrl) {
        return;
      }
      setIsLoading(true);
      try {
        const amount_deposit = `0x${new BigNumber(val.value)
          .multipliedBy(Math.pow(10, 18))
          .toString(16)}`;
        const { hash } = await writeAsync({
          args: [parseUnits(val.value, 18), referrerAddress as `0x${string}`],
          value: parseUnits(val.value, 18),
        });

        if (hash) {
          toast.dismiss();
          refetchStakers();
          refetchBalance();
          // toastMes.success(messageSuccess, { autoClose: 5000 });
        }
      } catch (error) {
        console.error('Error in call contract submit Ido', error);
        const errorMes = getErrorMessage(error);
        toastMes.error(errorMes, { autoClose: 5000 });
      } finally {
        setIsLoading(false);
      }
    },
    [
      address,
      idoAddress,
      referrerAddress,
      refetchBalance,
      refetchStakers,
      rpcUrl,
    ]
  );

  /* Validate when submit form */
  const validate = useCallback(
    (val: string) => {
      // if (!isStartTime) {
      //   return '';
      // }

      // if (isEndTime) {
      //   return '';
      // }

      if (balanceNativeValue < Number(val)) {
        return 'Value is greater than your balance';
      }

      if (Number(val) >= minValueNative) {
        return true;
      }

      return `Minimum contribution is ${minValueNative} ${AppConstant.NATIVE_TOKEN.SYMBOL}`;
    },
    [balanceNativeValue, minValueNative]
  );
  /* The condition for visible button: Commit or Claim */
  const inputValue = watch('value');
  const isHiddenButton = useMemo(() => {
    if (!address) {
      return false;
    }

    // if (!isStartTime) {
    //   return true;
    // }
    if (balanceNativeValue < Number(inputValue)) {
      return true;
    }
    return false;
    // if (isStartTime && !isEndTime) {
    //   return false;
    // }

    return true;
  }, [address, balanceNativeValue, inputValue]);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex items-center self-stretch gap-2 border border-solid bg-black rounded-full px-3 py-2 max-w-[264px]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6  rounded-full">
              <img src={matic} alt="IMG" className="w-full h-full" />
            </div>
            <p className="text-lg font-medium">MATIC</p>
          </div>

          <div className="flex-1 flex items-center gap-2">
            <Controller
              control={control}
              name="value"
              rules={{
                validate: validate,
              }}
              render={({ field: { value, onChange } }) => (
                <input
                  value={value}
                  placeholder={String(minValueNative)}
                  className="text-xl text-right w-full min-w-10"
                  onChange={onChange}
                  required
                />
              )}
            />

            <button
              className="text-sm px-[10px] py-[6px] rounded-full bg-[#121212] cursor-pointer"
              onClick={() => {
                if (balanceNativeValue < AppConstant.NATIVE_TOKEN.GAS_SUB) {
                  return;
                }

                setValue(
                  'value',
                  floorNumber(
                    balanceNativeValue - AppConstant.NATIVE_TOKEN.GAS_SUB,
                    AppConstant.NATIVE_TOKEN.DECIMAL_TO_SHOW
                  ).toString()
                );
              }}
            >
              Max
            </button>
          </div>
        </div>

        <button
          className="bg-[#5EA3A2] drop-shadow4 w-full max-w-[150px] h-[49px] rounded-full"
          onClick={async (e) => {
            if (!address) {
              return await open();
            }

            handleSubmit(handleSubmitData)(e);
          }}
          disabled={isHiddenButton}
        >
          {!address && 'Connect Wallet'}

          {!!address && !isLoading && 'Commit'}
          {!!address && isLoading && <Loading />}
        </button>
      </div>
      {/* <p className="text-xs text-red h-4">{errors.value?.message}</p> */}
      {/* <div className="w-full h-[1px] bg-gray9 my-6 md:my-7" /> */}
    </div>
  );
}

// TODO fix cung
const isClaimable = true;
function CommitStakeClaim() {
  const [isLoading, setIsLoading] = useState(false);

  const { address } = useAccount();
  const chainId = useChainId();

  const rpcUrl = CHAIN[chainId].rpcUrl;
  const idoAddress = TOKEN_CONTRACT[chainId].IDO_ADDRESS;

  const { data, refetch } = useContractReads({
    contracts: [
      {
        address: idoAddress,
        abi: IDO_ABI as any,
        functionName: 'userEarn',
        args: [address as `0x${string}`],
      },
      {
        address: idoAddress,
        abi: IDO_ABI as any,
        functionName: 'getRefundingAmount',
        args: [address as `0x${string}`],
      },
    ],
  });

  // const { data: userEarn } = useContractRead({
  //   address: idoAddress,
  //   abi: IDO_ABI as any,
  //   functionName: 'userEarn',
  //   args: [address as `0x${string}`],
  //   watch: false,
  // });

  // const userEarnData = new BigNumber(Number(userEarn) || 0)
  //   .dividedBy(Math.pow(10, 18))
  //   .toNumber();

  const value = useMemo(() => {
    if (!data) {
      return {
        userEarn: 0,
        getRefundingAmount: 0,
      };
    }

    const res1 = new BigNumber(Number(data?.[0].result) || 0)
      .dividedBy(Math.pow(10, 18))
      .toNumber();

    const res2 = new BigNumber(Number(data?.[1].result) || 0)
      .dividedBy(Math.pow(10, 18))
      .toNumber();

    return {
      userEarn: res1,
      getRefundingAmount: res2,
    };
  }, [data]);

  const handleClaim = useCallback(async () => {
    if (!address || isLoading || !rpcUrl || !isClaimable) {
      return;
    }

    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const contract = new ethers.Contract(idoAddress, idoAbi, provider);

    if (value.userEarn === 0 && value.getRefundingAmount === 0) {
      return;
    }

    setIsLoading(true);

    try {
      let hash;

      const gasLimit = await contract.estimateGas.claim({
        from: address,
      });

      const { request } = await prepareWriteContract({
        address: idoAddress,
        abi: IDO_ABI,
        functionName: 'claim',
        gas: BigInt(gasLimit.toHexString()),
        gasPrice: BigInt(250_000_000),
        type: 'legacy',
      });
      const data = await writeContract(request);
      hash = data.hash;

      const receipt = await waitForTransaction({
        hash: hash,
      });

      if (receipt.status === 'success') {
        refetch();
      } else {
        const txUrl = getExplorerUrl(chainId) + 'tx/' + hash;
        const messageSuccess = (
          <ViewTransaction txUrl={txUrl} title="Commit Failed" action="" />
        );

        toastMes.success(messageSuccess, { autoClose: 5000 });
      }
    } catch (error) {
      console.error('Error in claim ido', error);
      const errorMes = getErrorMessage(error);
      toastMes.error(errorMes, { autoClose: 5000 });
    } finally {
      setIsLoading(false);
    }
  }, [
    address,
    chainId,
    idoAddress,
    isLoading,
    refetch,
    rpcUrl,
    value.getRefundingAmount,
    value.userEarn,
  ]);

  return (
    <div className="grid grid-cols-2 items-center mb-[42px]">
      <div>
        <p className="text-[26px] leading-[36px] font-anek">
          {`${formatDisplay(value.userEarn, { decimalToShow: 2 })} TREK`}
        </p>
        <p className="text-[26px] leading-[36px] font-anek">{`${formatDisplay(
          value.getRefundingAmount,
          {
            decimalToShow: AppConstant.NATIVE_TOKEN.DECIMAL_TO_SHOW,
          }
        )} ${AppConstant.NATIVE_TOKEN.SYMBOL}`}</p>
      </div>
      <button
        className="bg-[#5EA3A2] drop-shadow4 max-w-[150px] h-[49px] rounded-full"
        onClick={handleClaim}
      >
        Claim
      </button>
    </div>
  );
}

export function CommitStake() {
  const chainId = useChainId();
  const { address } = useAccount();

  const { data: projectData } = useProjectData();
  const data = projectData?.project;

  const idoAddress = TOKEN_CONTRACT[chainId].IDO_ADDRESS;
  const { data: dataStakers } = useContractRead({
    address: idoAddress,
    abi: IDO_ABI,
    functionName: 'stakers',
    args: [address as `0x${string}`],
  });

  /* Contribution amount*/
  const contributionAmount = useMemo(() => {
    if (!dataStakers) {
      return 0;
    }

    return new BigNumber(Number(dataStakers))
      .dividedBy(Math.pow(10, 18))
      .toNumber();
  }, [dataStakers]);
  if (!data) {
    return <></>;
  }

  return (
    <section className="relative">
      {/* absolute */}
      <img
        src={bgStar}
        alt="IMG"
        className="absolute -z-10 inset-0 w-full h-full"
      />

      <div className="relative max-w-[1202px] 2xl:max-w-full px-4 mx-auto 2xl:mx-[128px] mb-[40px]">
        <h2 className="uppercase text-[40px] leading-[54px] font-russo explore-title mb-[75px]">
          COMMIT STAKE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          <div className="relative">
            <div className="relative h-[37px] w-full box-shadow12 rounded-full mb-[28px]">
              <div className="absolute w-full h-full" />
            </div>

            <div className="drop-shadow6 flex items-center justify-center h-[42px] px-[9px] w-fit mx-auto mb-[24px]">
              <p className="text-[25px] leading-[37px] text-[#9CD9D8] font-semibold">
                0 MATIC{' '}
                <span className="text-[20px] text-[#A8A7A7]">
                  / 100.000 MATIC
                </span>
              </p>
            </div>

            <h4 className="text-[26px] leading-[1.38] text-[#9CD9D8]">
              HARDCAP NEARLY PASSS.
            </h4>
            <br />
            <p className="text-[24px] leading-[1.38] text-white mb-[8px]">
              The more MATIC you subcribe now, the more share of TREK{' '}
            </p>

            <ul className="flex flex-col gap-2 md:items-center w-full max-w-[440px] mx-auto border-t border-[#4C4C4C] pt-[16px] mt-[32px] px-[16px]">
              <li className="w-full flex justify-between items-center gap-1">
                <p className="text-[20px] md:text-[22px] leading-[30px] text-white">
                  Price:{' '}
                </p>
                <p className="text-[20px] md:text-[22px] leading-[30px] font-semibold text-[#9CD9D8]">
                  {formatDisplay(data.price || 0, { decimalToShow: 2 })}{' '}
                  MATIC/TREK
                </p>
              </li>

              <li className="w-full flex justify-between items-center gap-1">
                <p className="text-[20px] md:text-[22px] leading-[30px] text-white">
                  Public Allocation:
                </p>
                <p className="text-[20px] md:text-[22px] leading-[30px] font-semibold text-[#9CD9D8]">
                  1.000.000.000 TREK
                </p>
              </li>
            </ul>
          </div>

          {/* commit and stake */}

          <div className="md:pl-[74px]">
            <h4 className="text-[30px] leading-[40px] mb-[35px]">
              Allocation & Refund
            </h4>

            {data.status === 'upcoming' && <CommitStakeCommit />}

            {data.status !== 'upcoming' && <CommitStakeClaim />}

            <div className="px-[28px] py-[31px] box-shadow11 mt-[43px]">
              <div className="drop-shadow4 px-[13px] py-[15px] rounded-[15px] flex items-center justify-between">
                <p className="text-[20px] leading-[27px] font-anek text-[#A8A7A7]">
                  Your contribution amount
                </p>

                <p className="text-[20px] leading-[27px] font-anek">{`${formatDisplay(
                  contributionAmount,
                  { decimalToShow: AppConstant.NATIVE_TOKEN.DECIMAL_TO_SHOW }
                )} ${AppConstant.NATIVE_TOKEN.SYMBOL}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
