import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

interface VideoplayerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const VideoplayerProps: React.FC<VideoplayerProps> = ({ open, setOpen }) => {
  return (
    <div>
      <div>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="fixed z-10 inset-0 overflow-y-auto"
            onClose={setOpen}
          >
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500/70 transition-opacity" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="relative inline-block align-bottom text-left sm:my-8 sm:align-middle sm:max-w-7xl sm:w-full sm:p-6">
                  <div className="block absolute pt-4 pr-4 z-10 top-4 right-4">
                    <button
                      type="button"
                      className="text-slate-950 hover:text-slate-800 z-10"
                      onClick={() => setOpen(false)}
                    >
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <video
                        autoPlay
                        controlsList="nodownload"
                        loop
                        muted
                        className="rounded-md"
                      >
                        <source src="/videos/Background.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
};

export default VideoplayerProps;
