import { useWeb3Modal } from '@web3modal/react';
import { IDO_ABI } from 'abi/ido-abi';
import { idoAbi } from 'abi/ido-abi-ethers';
import BigNumber from 'bignumber.js';
import classNames from 'classnames';
import { getErrorMessage } from 'components/ErrorMessage/getErrorMessage';
import { Loading } from 'components/Loading/Loading';
import { ModalSuccessCommit } from 'components/ModalSuccessCommit';
import { ethers } from 'ethers';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useRefLinkStore from 'store/ref-link-store';
import { AppConstant, CHAIN, TOKEN_CONTRACT } from 'util/constant';
import { formatDisplay } from 'util/format-number';
import { toastMes } from 'util/toast-mess';
import { parseUnits } from 'viem';
import {
  useAccount,
  useBalance,
  useChainId,
  useContractRead,
  useContractWrite,
  useWalletClient,
} from 'wagmi';
import { LaunchPadCommited } from './LaunchPadCommited';
import { FormValueProps } from './type';

const decimalToShow = 6;

export function LaunchPadForm() {
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

  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const { data: walletClient } = useWalletClient();
  // const { isEndTime, isStartTime, isClaimable } = {
  //   isEndTime: true,
  //   isStartTime: false,
  //   isClaimable: false,
  // };

  const [isEndTime, setIsEndTime] = useState(false);
  const [isStartTime, setIsStartTime] = useState(true);
  const [isClaimable, setIsClaimable] = useState(false);

  const walletRefInfo = useRefLinkStore((state) => state.walletRefInfo);
  const [isLoading, setIsLoading] = useState(false);
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  const chainId = useChainId();
  const rpcUrl = CHAIN[chainId].rpcUrl;

  const idoAddress = TOKEN_CONTRACT[chainId].IDO_ADDRESS;

  const { data, refetch: refetchBalance } = useBalance({
    address: address,
  });

  const { writeAsync } = useContractWrite({
    address: idoAddress as `0x${string}`,
    abi: IDO_ABI as any,
    functionName: 'stakeByNative',
  });

  const { data: startTime } = useContractRead({
    address: idoAddress,
    abi: IDO_ABI,
    functionName: 'startTime',
  });

  const { data: claimable } = useContractRead({
    address: idoAddress,
    abi: IDO_ABI,
    functionName: 'claimable',
  });

  const { data: endTime } = useContractRead({
    address: idoAddress,
    abi: IDO_ABI,
    functionName: 'endTime',
  });

  const { data: minimumStakingAmount1 } = useContractRead({
    address: idoAddress,
    abi: IDO_ABI,
    functionName: 'minimumStakingAmount',
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

  const { data: dataStakers, refetch: refetchStakers } = useContractRead({
    address: idoAddress,
    abi: IDO_ABI,
    functionName: 'stakers',
    args: [address as `0x${string}`],
  });

  const minValueNative = useMemo(() => {
    if (!minimumStakingAmount1) {
      return 0;
    }

    const res = new BigNumber(Number(minimumStakingAmount1))
      .dividedBy(Math.pow(10, 18))
      .toNumber();
    console.log('minValueNative', res, minimumStakingAmount1);
    return res;
  }, [minimumStakingAmount1]);

  /* Contribution amount*/
  const contributionAmount = useMemo(() => {
    if (!dataStakers) {
      return 0;
    }

    return new BigNumber(Number(dataStakers))
      .dividedBy(Math.pow(10, 18))
      .toNumber();
  }, [dataStakers]);

  /* Referral address */
  const referrerAddress = useMemo(() => {
    if (!walletRefInfo || !walletRefInfo.refCode) {
      return '0x0000000000000000000000000000000000000000';
    }

    if (walletRefInfo.userId.toLowerCase() === address?.toLowerCase()) {
      return '0x0000000000000000000000000000000000000000';
    }

    return walletRefInfo.userId;
  }, [address, walletRefInfo]);

  /* submit form commit*/
  const handleSubmitData = useCallback(
    async (val: FormValueProps) => {
      if (!address || !walletClient || !rpcUrl) {
        return;
      }
      setIsLoading(true);
      try {
        const amount_deposit = `0x${new BigNumber(val.value)
          .multipliedBy(Math.pow(10, 18))
          .toString(16)}`;

        // zero address : "0x0000000000000000000000000000000000000000"
        // const { request } = await prepareWriteContract({
        //   address: idoAddress,
        //   abi: IDO_ABI,
        //   functionName: 'stakeByNative',
        //   args: [parseUnits(val.value, 18), referrerAddress as `0x${string}`],
        //   value: parseUnits(val.value, 18),
        //   gas: BigInt(gasLimit.toHexString()),
        //   gasPrice: BigInt(250_000_000),
        //   type: 'legacy',
        // });

        const { hash } = await writeAsync({
          args: [parseUnits(val.value, 18), referrerAddress as `0x${string}`],
          value: parseUnits(val.value, 18),
        });

        // const data = await writeContract(request);
        // hash = data.hash;

        if (hash) {
          setIsVisibleModal(true);
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
      walletClient,
    ]
  );

  /* Validate when submit form */
  const validate = useCallback(
    (val: string) => {
      if (!isStartTime) {
        return '';
      }

      if (isEndTime) {
        return '';
      }

      if (balanceNativeValue < Number(val)) {
        return 'Value is greater than your balance';
      }

      if (Number(val) >= minValueNative) {
        return true;
      }

      return `Minimum contribution is ${minValueNative} ${AppConstant.NATIVE_TOKEN.SYMBOL}`;
    },
    [balanceNativeValue, isEndTime, isStartTime, minValueNative]
  );
  /* The condition for visible button: Commit or Claim */
  const inputValue = watch('value');
  const isHiddenButton = useMemo(() => {
    if (!address) {
      return false;
    }

    if (!isStartTime) {
      return true;
    }

    if (balanceNativeValue < Number(inputValue)) {
      return true;
    }

    if (isStartTime && !isEndTime) {
      return false;
    }

    return true;
  }, [address, balanceNativeValue, inputValue, isEndTime, isStartTime]);

  return (
    <>
      <div className="pt-4 md:pt-10 mb-4 md:pb-8">
        <div className="flex flex-col gap-4 px-4 md:px-10">
          <h3 className="text-xl">
            {!isEndTime ? 'Participate' : 'Allocation & Refunds'}
          </h3>

          {/* submit form commit participate ido */}
          {true && (
            <>
              <div className="flex items-center gap-2">
                <p className="text-sm text-gray">
                  Balance:{' '}
                  <span className="text-white opacity-80">
                    {`${formatDisplay(balanceNativeValue, {
                      decimalToShow: decimalToShow,
                    })} ${AppConstant.NATIVE_TOKEN.SYMBOL}`}
                  </span>
                </p>

                {balanceNativeValue < minValueNative && (
                  <Link
                    to="https://app.xy.finance"
                    target="_blank"
                    className="text-xs text-yellow border border-solid border-yellow rounded-xl px-2"
                  >
                    + Deposit
                  </Link>
                )}
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex items-center self-stretch gap-2 bg-black rounded-full px-3 py-2 max-w-[264px]">
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
                          className="text-xl text-right w-full"
                          onChange={onChange}
                          required
                        />
                      )}
                    />

                    <button
                      onClick={() =>
                        setValue(
                          'value',
                          balanceNativeValue.toFixed(decimalToShow)
                        )
                      }
                      className="text-sm px-[10px] py-[6px] rounded-full bg-[#121212]"
                    >
                      Max
                    </button>
                  </div>
                </div>

                <button
                  onClick={async (e) => {
                    if (!address) {
                      return await open();
                    }

                    handleSubmit(handleSubmitData)(e);
                  }}
                  disabled={isHiddenButton}
                  className={classNames(
                    'min-w-[140px] text-black text-sm font-medium bg-white px-5 py-[18px] rounded-full whitespace-nowrap h-[56px]',
                    { 'opacity-30': isHiddenButton }
                  )}
                >
                  {!address && 'Connect Wallet'}

                  {!!address && !isLoading && 'Commit'}
                  {!!address && isLoading && <Loading />}
                </button>
              </div>

              <p className="text-xs text-red h-4">{errors.value?.message}</p>
            </>
          )}

          {isEndTime && <LaunchPadCommited isClaimable={isClaimable} />}
        </div>

        <div className="w-full h-[1px] bg-gray9 my-6 md:my-7" />

        <div className="flex justify-between flex-wrap items-center gap-2 py-[18px] px-6 mx-4 md:mx-10 bg-black rounded-full">
          <p className="text-sm text-gray font-medium text-selection">
            Your Contribution Amount
          </p>
          <p className="text-sm">
            {`${formatDisplay(contributionAmount, {
              decimalToShow: decimalToShow,
            })} ${AppConstant.NATIVE_TOKEN.SYMBOL}`}
          </p>
        </div>
      </div>

      <ModalSuccessCommit
        isVisibleModal={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
        inputValue={inputValue}
      />
    </>
  );
}
