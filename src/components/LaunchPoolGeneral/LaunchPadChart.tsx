// import { useEffect } from 'react';
import BigNumber from 'bignumber.js';
import { useStakers } from 'components/LaunchPoolGeneral/ws-price';
import { useMemo } from 'react';
import useProjectStore from 'store/project-store';
import { AppConstant } from 'util/constant';
import { formatDisplay } from 'util/format-number';
import SemiCircleProgress from './SemiCircleProgress';
import { useHardCapData } from './useHardCapData';

export function LaunchPadChart() {
  const { stakeRatio, totalStakeAmount } = useStakers();
  const { data } = useHardCapData();
  const { data: projectDetail } = useProjectStore();

  const hardCap = new BigNumber(Number(data?.[0].result))
    .dividedBy(Math.pow(10, 18))
    .toNumber();

  const stakeValue = useMemo(() => {
    const res = new BigNumber(totalStakeAmount)
      .dividedBy(Math.pow(10, 18))
      .toNumber();

    const percent = new BigNumber(totalStakeAmount)
      .dividedBy(Math.pow(10, 18))
      .dividedBy(hardCap)
      .multipliedBy(100)
      .toNumber();

    return {
      value: res,
      hardCap: hardCap,
      percentage: Number(stakeRatio),
    };
  }, [hardCap, stakeRatio, totalStakeAmount]);

  return (
    <div className="p-4 md:p-10 flex flex-col gap-4 items-center md:border-r border-gray9">
      <SemiCircleProgress percentage={stakeValue.percentage} />

      <div className="px-6 py-3 rounded-full bg-gray9 w-full md:w-fit">
        <p className="text-2xl text-yellow text-center">
          {`${formatDisplay(stakeValue.value, {
            decimalToShow: AppConstant.NATIVE_TOKEN.DECIMAL_TO_SHOW,
          })} ${AppConstant.NATIVE_TOKEN.SYMBOL}`}
          <span className="text-sm text-gray">
            /{' '}
            {`${formatDisplay(stakeValue.hardCap, {
              decimalToShow: AppConstant.NATIVE_TOKEN.DECIMAL_TO_SHOW,
            })} ${AppConstant.NATIVE_TOKEN.SYMBOL}`}
          </span>
        </p>
      </div>

      <div className="max-w-[284px] mx-auto  mt-2">
        <p className="text-sm text-[#666666] text-left mb-1">
          <span className="text-white">Hardcap surpassed!</span>
          {` 🎉 The more ${AppConstant.NATIVE_TOKEN.SYMBOL}
          you subscribe now, the more share of `}
          <span className="text-yellow">{`$${projectDetail.tokenIssue}`}</span>
        </p>

        <p className="text-sm text-[#666666] text-left mb-1">
          Price:{' '}
          <span className="text-yellow">{`${formatDisplay(projectDetail.price, {
            decimalToShow: 0,
          })}${projectDetail.tokenRaise}/${projectDetail.tokenIssue}`}</span>
        </p>
        <p className="text-sm text-[#666666] text-left">
          Public Allocation:{' '}
          <span className="text-yellow">{`${formatDisplay(hardCap, {
            decimalToShow: 0,
          })} ${projectDetail.tokenIssue}`}</span>
        </p>
      </div>
    </div>
  );
}
