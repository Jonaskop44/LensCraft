import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import { ExclamationIcon } from "@heroicons/react/solid";

interface WarningProps {
  show: boolean;
  setShow: (show: boolean) => void;
  text: string;
}

const Warning: React.FC<WarningProps> = ({ show, setShow, text }) => {
  return (
    <>
      <div
        aria-live="assertive"
        className="fixed inset-0 z-20 flex px-4 py-6 pointer-events-none p-6 items-start"
      >
        <div className="w-full flex flex-col space-y-4 items-end">
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="max-w-sm w-full bg-yellow-50 border-l-4 border-yellow-400 p-4 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <ExclamationIcon
                      className="h-6 w-6 text-yellow-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-yellow-700">
                      {text}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex">
                    <button
                      className="inline-flex text-gray-400 hover:text-gray-500 z-30"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <XIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
};

export default Warning;
