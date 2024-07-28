import { Dialog, Transition } from '@headlessui/react';
import * as htmlToImage from 'html-to-image';
import logoMatic from 'images/logo/logo-matic.svg';
import { isEqual } from 'lodash';
import { Fragment, memo, useCallback, useRef } from 'react';
import { AppConstant } from 'util/constant';
import { formatDisplay } from 'util/format-number';
import { toastMes } from 'util/toast-mess';

function ModalSuccessCommitComponent(props: {
  setIsVisibleModal: any;
  isVisibleModal: boolean;
  inputValue: string;
}) {
  const { isVisibleModal, setIsVisibleModal, inputValue } = props;

  const screenRef = useRef<HTMLDivElement>(null);

  const closeModal = useCallback(() => {
    setIsVisibleModal(false);
  }, [setIsVisibleModal]);

  const handleCapture = async () => {
    if (!screenRef.current) {
      return;
    }
    try {
      const dataUrl = await htmlToImage.toPng(screenRef.current);
      const link = document.createElement('a');
      link.download = 'share.png';
      link.href = dataUrl;
      link.click();
    } catch {}
  };

  const handleCopyImage = async () => {
    if (!screenRef.current) {
      return;
    }

    try {
      screenRef.current.style.borderRadius = 0 + 'px';
      const dataUrl = await htmlToImage.toPng(screenRef.current);
      const fetchedImageData = await fetch(dataUrl);
      const blob = await fetchedImageData.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      toastMes.success('Image copied', { autoClose: 2000 });
    } catch (err) {
      toastMes.error('Error copy', { autoClose: 2000 });
    } finally {
      screenRef.current.style.borderRadius = 20 + 'px';
    }
  };

  return (
    <Transition appear show={isVisibleModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[440px]">
                <button
                  onClick={closeModal}
                  className="ml-auto mb-2 block relative z-30"
                ></button>

                <div
                  ref={screenRef}
                  className="banner-ido w-full  overflow-hidden rounded-2xl px-6 py-4"
                >
                  <div className="flex items-center justify-between">
                    <img src={logoMatic} alt="LOGO" className="h-[40px]" />

                    <p className="text-base text-black rounded-full border border-solid border-black px-2 h-[28px]">
                      HUB IDO
                    </p>
                  </div>

                  <div className="relative flex items-center justify-center mb-2">
                    <div className="rotate-img absolute pointer-events-none"></div>

                    <div className="w-[160px] h-[160px] mt-10 mb-5 relative z-10">
                      <img
                        src={logoMatic}
                        alt="MATIC"
                        className="w-full h-full"
                      />
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM13.5354 6.38136L8.5856 11.3311L6.46431 9.2098C6.07379 8.8193 5.44063 8.8193 5.0501 9.2098C4.65958 9.6003 4.65958 10.2335 5.0501 10.624L7.80782 13.3817C8.2374 13.8113 8.9339 13.8113 9.3635 13.3817L14.9496 7.79557C15.3401 7.40505 15.3401 6.77188 14.9496 6.38136C14.5591 5.99083 13.9259 5.99083 13.5354 6.38136Z"
                        fill="black"
                      />
                    </svg>

                    <p className="text-[24px] leading-[28px] font-medium text-black">
                      Congrats!
                    </p>
                  </div>

                  <p className="relative z-10 text-[24px] leading-[28px] font-medium text-black mb-2">
                    You had committed
                  </p>

                  <div className="w-fit mx-auto flex justify-center items-center gap-2 px-6 py-4 rounded-full bg-white mb-[56px]">
                    <p className="text-[32px] leading-[32px] text-black font-semibold">
                      {`${formatDisplay(Number(inputValue), {
                        decimalToShow: AppConstant.NATIVE_TOKEN.DECIMAL_TO_SHOW,
                      })} ${AppConstant.NATIVE_TOKEN.SYMBOL}`}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 mt-4">
                  <button
                    onClick={handleCapture}
                    className="flex items-center gap-2 text-base font-medium h-[48px] px-6 rounded-full bg-gray9"
                  >
                    <span>Download</span>
                  </button>

                  <button
                    onClick={handleCopyImage}
                    className="flex items-center gap-2 text-base font-medium h-[48px] px-6 rounded-full bg-gray9"
                  >
                    <span>Copy</span>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export const ModalSuccessCommit = memo(ModalSuccessCommitComponent, isEqual);
