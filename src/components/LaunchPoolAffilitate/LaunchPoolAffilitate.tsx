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
import classNames from 'classnames';
import { getErrorMessage } from 'components/ErrorMessage/getErrorMessage';

import { ViewTransaction } from 'components/ViewTransaction/ViewTransaction';
import { ethers } from 'ethers';
import threeBox from 'images/details/three-box.png';
import iconCopy from 'images/icon/icon-copy.svg';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { AppConstant, CHAIN, TOKEN_CONTRACT } from 'util/constant';
import { formatDisplay } from 'util/format-number';
import { getExplorerUrl } from 'util/get-explore-url';
import { toastMes } from 'util/toast-mess';
import {
  useAccount,
  useChainId,
  useContractReads,
  useContractWrite,
  useWalletClient,
} from 'wagmi';
import { LaunchPadReferral } from './LaunchPadReferral';
import { YourReferral } from './api';

function LaunchPadAffilitateLink() {
  const [affiliateLink, setAffiliateLink] = useState('');

  const { address } = useAccount();
  const { open } = useWeb3Modal();

  const handleOpenWalletConnect = useCallback(async () => {
    await open();
  }, [open]);

  useEffect(() => {
    if (!address) {
      return;
    }

    async function createWallet() {
      if (!address) {
        return;
      }

      try {
        const { data } = await YourReferral.createAffiliate(address);

        setAffiliateLink(data.refCode);
      } catch (error) {
        setAffiliateLink('');
        console.error('Error in create link');
      }
    }

    createWallet();
  }, [address]);

  return (
    <div className="relative">
      <h3 className="font-russo text-[40px] leading-[54px] explore-title mb-[12px]">
        Affiliate Program
      </h3>

      <p className="text-[30px] leading-[40px] mb-[54px]">Affiliate Link</p>

      {address && (
        <div className="flex justify-between items-center gap-2 bg-gray9 p-2 pl-6 rounded-full mb-6">
          <p className="text-sm text-primary5 text-ellipsis overflow-hidden whitespace-nowrap">
            {affiliateLink}
          </p>

          <button
            className="p-[10px] rounded-full bg-darkGray flex-shrink-0"
            data-tooltip-id={`tooltip-copy`}
            data-tooltip-content="Copied"
            data-tooltip-delay-hide={1000}
            onClick={() => {
              navigator.clipboard.writeText(affiliateLink);
            }}
          >
            <img src={iconCopy} alt="COPY" />
            <Tooltip id={`tooltip-copy`} openOnClick />
          </button>
        </div>
      )}

      {!address && (
        <button
          onClick={handleOpenWalletConnect}
          className="text-[35px] px-[21px] min-h-[75px] connect-wallet box-shadow4 hover:hover:text-[#1FBEE5] hover:bg-black"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}

function LaunchPadClaimReward() {
  const { address } = useAccount();
  const chainId = useChainId();
  const { data: walletClient } = useWalletClient();
  const idoAddress = TOKEN_CONTRACT[chainId].IDO_ADDRESS;

  const { writeAsync } = useContractWrite({
    address: idoAddress as `0x${string}`,
    abi: IDO_ABI as any,
    functionName: 'claimReward',
  });
  // const { data: referralData } = useReferralLink(chainId);

  const { data, refetch } = useContractReads({
    contracts: [
      {
        address: idoAddress,
        abi: IDO_ABI as any,
        functionName: 'userReward',
        args: [address as `0x${string}`],
      },
      {
        address: idoAddress,
        abi: IDO_ABI as any,
        functionName: 'rewardP',
      },
    ],
  });

  const value = useMemo(() => {
    if (!data) {
      return {
        userReward: 0,
        rewardP: 0,
      };
    }

    return {
      userReward:
        new BigNumber(Number(data[0].result))
          .dividedBy(Math.pow(10, 18))
          .toNumber() || 0,
      rewardP: new BigNumber(Number(data[1].result)).toNumber(),
    };
  }, [data]);

  // const idoContract = getContract({
  //   address: idoAddress as `0x${string}`,
  //   abi: IDO_ABI as any,
  // });

  const handleClaimReward = useCallback(async () => {
    if (!address) {
      return toastMes.error('Please connecting wallet', { autoClose: 5000 });
    }

    // if (!idoContract || value.userReward === 0 || !walletClient) {
    //   return;
    // }

    // const provider = new ethers.providers.JsonRpcProvider(
    //   CHAIN[chainId].rpcUrl
    // );
    // const contract = new ethers.Contract(idoAddress, idoAbi, provider);

    // TODO:
    try {
      // const gasLimit = await contract.estimateGas.claimReward({
      //   from: address,
      // });

      // const { request } = await prepareWriteContract({
      //   address: idoAddress,
      //   abi: IDO_ABI,
      //   functionName: 'claimReward',
      //   gas: BigInt(gasLimit.toHexString()),
      //   gasPrice: BigInt(250_000_000),
      //   type: 'legacy',
      // });
      const { hash } = await writeAsync({
        args: [],
      });
      // const data = await writeContract(request);
      // const hash = data.hash;

      // const receipt = await waitForTransaction({
      //   hash: hash,
      // });

      if (hash) {
        const txUrl = getExplorerUrl(chainId) + 'tx/' + hash;
        const messageSuccess = (
          <ViewTransaction txUrl={txUrl} title="Claim Successful" action="" />
        );

        refetch();
        toastMes.success(messageSuccess, { autoClose: 5000 });
      }
    } catch (error) {
      console.log('Error in claim reward', error);
      const errorMes = getErrorMessage(error);
      toastMes.error(errorMes, { autoClose: 5000 });
    }
  }, [address, chainId, refetch, writeAsync]);

  return (
    <div className="p-6 rounded-[40px] box-shadow5">
      <div className="absolute w-full h-full box-shadow8 top-0 left-0" />

      <p className="text-[30px] leading-[40px] font-semibold mb-[18px]">
        Your Rewards
      </p>

      <div className="flex items-center justify-between border border-solid border-transparent8 gap-2 bg-transparent7 p-2 pl-4 rounded-full mb-7">
        <div className="flex items-center gap-2">
          <p className="text-lg font-medium">
            {formatDisplay(value.userReward, { decimalToShow: 6 })}{' '}
            {AppConstant.NATIVE_TOKEN.SYMBOL}
          </p>
        </div>

        <button
          onClick={handleClaimReward}
          className={classNames(
            'text-sm px-4 py-[10px] bg-[#1F1F1F] rounded-full',
            {
              'opacity-30': value.userReward === 0,
            }
          )}
        >
          Claim
        </button>
      </div>

      <ul className="flex flex-col gap-[12px]">
        <li className="flex items-center justify-between gap-2">
          <p className="text-[25px] leading-[34px] text-transparent9">
            Referral Count
          </p>
          <p className="text-yellow">
            {/* {referralData?.data &&
              formatDisplay(referralData?.data?.length || 0, {
                decimalToShow: 0,
              })}

            {!referralData?.data && '--'} */}
          </p>
        </li>

        <li className="flex items-center justify-between gap-2">
          <p className="text-[25px] leading-[34px] text-transparent9">
            Reward Percentage
          </p>
          {/* <p className="text-sm text-greenYellow px-2 py-[2px] rounded-full bg-transparent2">
            {value.rewardP} %
          </p> */}
        </li>
      </ul>
    </div>
  );
}

export function LaunchPoolAffilitate() {
  return (
    <section className="relative max-w-[1202px] 2xl:max-w-full px-4 mx-auto 2xl:mx-[128px] mt-[160px]">
      <div className="box-shadow7 absolute inset-0 w-full h-full -z-10" />

      <img src={threeBox} alt="threeBox" className="absolute -z-20" />
      <div className="grid grid-cols-1 md:grid-cols-[4fr_7fr] gap-[74px]">
        <LaunchPadAffilitateLink />

        <LaunchPadClaimReward />
      </div>

      <div className="w-full h-[1px] bg-[#1FBEE5] my-[30px]" />

      <LaunchPadReferral />
    </section>
  );
}
