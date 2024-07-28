import { LoaderAnimation } from 'components/LoaderAnimation';
import { ModalTransition } from 'components/ModalTransition';
import { AnimatePresence, motion } from 'framer-motion';
import iconClose from 'images/icon/icon-close.svg';
import iconTerms from 'images/icon/icon-terms.svg';
import { isEqual } from 'lodash';
import { memo, useState } from 'react';

function ParticipateTitle({
  setIsOpen,
  title,
}: {
  setIsOpen: any;
  title: string;
}) {
  return (
    <div className="flex-between mb-6">
      <div className="w-8 h-8" />

      <h1 className="text-[20px] leading-[30px] text-white font-medium">
        {title}
      </h1>

      <button className="w-8 h-8" onClick={() => setIsOpen((v) => !v)}>
        <img src={iconClose} alt="IMG" />
      </button>
    </div>
  );
}

function ModalParticipateComponent({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <ModalTransition isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="bg-primary px-4 pt-6 pb-10 rounded-3xl w-full min-w-[400px] max-w-[400px]">
        <AnimatePresence key={isVisible ? 'isVisible' : 'nonIsVisible'}>
          {isVisible && (
            <>
              <ParticipateTitle
                title="Term and conditions"
                setIsOpen={setIsOpen}
              />

              <div className="p-4 rounded-full bg-[#1E162D] mb-8 inline-block mx-auto">
                <img src={iconTerms} alt="IMG" />
              </div>

              <h4 className="text-semiCommon font-normal mb-4">
                Please read & accept term before using this site
              </h4>

              <ul className="flex flex-col gap-3 mb-8">
                <li className="flex-start gap-2">
                  <input type="checkbox" className="input-checkbox" id="3" />

                </li>

                <li className="flex-start gap-2">
                  <input type="checkbox" className="input-checkbox" id="2" />

                </li>
              </ul>

              <button
                onClick={() => setIsVisible((v) => !v)}
                className="text-semiCommon font-medium bg-blue rounded-full px-4 py-[2px] w-full h-12 grid place-items-center"
              >
                Continue
              </button>
            </>
          )}

          {!isVisible && (
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
            >
              <ParticipateTitle
                title="Waiting for comfirmation"
                setIsOpen={setIsOpen}
              />

              <LoaderAnimation />

              <div className="mt-8">
                <h4 className="text-semiCommon font-medium mb-2">
                  Deposit 50 ZKS
                </h4>

                <p className="text-common text-purpleLight">
                  Confirm this transaction in your wallet
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ModalTransition>
  );
}

export const ModalParticipate = memo(ModalParticipateComponent, isEqual);
