import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from '@wagmi/core';
import { IDO_ABI } from 'abi/ido-abi';
import { idoAbi } from 'abi/ido-abi-ethers';
import BigNumber from 'bignumber.js';
import classNames from 'classnames';
import { getErrorMessage } from 'components/ErrorMessage/getErrorMessage';
import { Loading } from 'components/Loading/Loading';
import { ViewTransaction } from 'components/ViewTransaction/ViewTransaction';
import { ethers } from 'ethers';
import logo from 'images/logo/logo-matic.svg';
import { useCallback, useMemo, useState } from 'react';
import { AppConstant, CHAIN, TOKEN_CONTRACT } from 'util/constant';
import { formatDisplay } from 'util/format-number';
import { getExplorerUrl } from 'util/get-explore-url';
import { toastMes } from 'util/toast-mess';
import {
  useAccount,
  useChainId,
  useContractRead,
  useContractReads,
  useWalletClient,
} from 'wagmi';
import { ModalSuccessClaim } from './ModalSuccessClaim';

export function LaunchPadCommited({ isClaimable }: { isClaimable: boolean }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const { address } = useAccount();
  const chainId = useChainId();
  const { data: walletClient } = useWalletClient();

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

  const { data: userEarn } = useContractRead({
    address: idoAddress,
    abi: IDO_ABI as any,
    functionName: 'userEarn',
    args: [address as `0x${string}`],
    watch: false,
  });

  const userEarnData = new BigNumber(Number(userEarn) || 0)
    .dividedBy(Math.pow(10, 18))
    .toNumber();

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
    if (!address || isLoading || !walletClient || !rpcUrl || !isClaimable) {
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
        setIsVisibleModal(true);

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
    isClaimable,
    isLoading,
    refetch,
    rpcUrl,
    value.getRefundingAmount,
    value.userEarn,
    walletClient,
  ]);

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <ul className="flex flex-col gap-6">
          <li className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full">
              <img src={logo} alt="HUB" />
            </div>
            <p className="text-base text-white">
              {formatDisplay(value.userEarn, { decimalToShow: 2 })} HUB
            </p>
          </li>
          <li className="flex items-center gap-2">
            <p className="text-base text-white">
              {`${formatDisplay(value.getRefundingAmount, {
                decimalToShow: AppConstant.NATIVE_TOKEN.DECIMAL_TO_SHOW,
              })} ${AppConstant.NATIVE_TOKEN.SYMBOL}`}
            </p>
          </li>
        </ul>

        <button
          onClick={handleClaim}
          disabled={!isClaimable}
          className={classNames(
            'px-5 py-[18px] rounded-full bg-linear text-sm text-black font-medium min-w-[140px] max-h-14',
            {
              'opacity-30':
                isLoading ||
                !address ||
                (!isClaimable && Date.now() < 1701086400000),
            },
            {
              'opacity-30':
                value.userEarn === 0 && value.getRefundingAmount === 0,
            }
          )}
        >
          {!isLoading && 'Claim'}

          {isLoading && <Loading />}
        </button>
      </div>

      <ModalSuccessClaim
        setIsVisibleModal={setIsVisibleModal}
        isVisibleModal={isVisibleModal}
        nativeClaim={value.getRefundingAmount}
        tokenClaim={userEarnData}
      />
    </>
  );
}
