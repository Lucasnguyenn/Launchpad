import BigNumber from 'bignumber.js';
import { ModalTransition } from 'components/ModalTransition';
import iconClose from 'images/icon/icon-close.svg';
import iconCopy from 'images/icon/icon-copy.svg';
import iconRight from 'images/referral/icon-right.svg';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { AppConstant } from 'util/constant';
import { formatDisplay } from 'util/format-number';
import { formatAddress } from 'util/formatAddress';
import { useChainId } from 'wagmi';
import { useReferralLink } from './useReferral';

function formatAmount(amount: number) {
  return new BigNumber(amount).dividedBy(Math.pow(10, 18)).toNumber();
}

export function LaunchPadReferral() {
  const [isOpen, setIsOpen] = useState(false);
  const chainId = useChainId();

  const { data } = useReferralLink(chainId);
  return (
    <>
      <div
        onClick={() => setIsOpen((v) => !v)}
        className="flex justify-between cursor-pointer mb-[104px]"
      >
        <p className="text-[35px] font-semibold leading-[48px]">
          Your Referral
        </p>

        <button className="w-[45px] h-[45px] flex items-center justify-center">
          <img src={iconRight} alt="RIGHT" />
        </button>
      </div>

      <ModalTransition
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        className="max-w-[448px] w-full"
      >
        <div className=" bg-primary7 p-8 rounded-2xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-medium">Your Referral</h2>

            <button className="w-8 h-8" onClick={() => setIsOpen((v) => !v)}>
              <img src={iconClose} alt="IMG" />
            </button>
          </div>

          <div className="flex items-center justify-between mb-3">
            <p className="text-sm">User</p>
            <p className="text-sm">Committed Amount</p>
          </div>

          <ul className="flex flex-col gap-1">
            {!!data?.data &&
              data?.data.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="flex justify-between items-center gap-2 px-4 py-5 bg-gray9 rounded-xl"
                  >
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray">
                        {formatAddress(item.userId)}
                      </p>
                      <button
                        data-tooltip-id={`copy-referral-${idx}`}
                        data-tooltip-content="Copied"
                        data-tooltip-delay-hide={1000}
                        className="w-5 h-5"
                      >
                        <img src={iconCopy} alt="COPY" />

                        <Tooltip id={`copy-referral-${idx}`} />
                      </button>
                    </div>

                    <p className="text-sm text-gray">
                      {formatDisplay(formatAmount(item.amount), {
                        decimalToShow: 18,
                      })}{' '}
                      {AppConstant.NATIVE_TOKEN.SYMBOL}
                    </p>
                  </li>
                );
              })}
          </ul>
        </div>
      </ModalTransition>
    </>
  );
}
