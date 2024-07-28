import { Dialog, Transition } from '@headlessui/react';
import iconClose from 'images/icon/icon-close.svg';
import { Fragment, useCallback } from 'react';
import { Link } from 'react-router-dom';

export function ModalDownLoadApp({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) {
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
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
          <div className="fixed inset-0 bg-black bg-opacity-25" />
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
              <Dialog.Panel className="w-full max-w-[600px] overflow-hidden rounded-2xl bg-[#121212] px-8 py-6">
                <div className="flex flex-row justify-end mb-4">
                  <button
                    className="bg-[#1C1C1C] rounded-xl p-2"
                    onClick={closeModal}
                  >
                    <div className="w-6 h-6">
                      <img src={iconClose} alt="IMG" width={24} height={24} />
                    </div>
                  </button>
                </div>

                <div className="flex flex-row gap-4 justify-between items-center w-full p-4 rounded-2xl border-[2px] border-white mb-10">

                  <div className="p-1 rounded-lg bg-white w-[160px] aspect-square">
                  </div>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
