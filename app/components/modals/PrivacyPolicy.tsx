import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { TbLicense } from "react-icons/tb";
import Link from "next/link";
import axios from "axios";

const PrivacyPolicy = () => {
  const [open, setOpen] = useState(false);
  const [access, setAccess] = useState(false);
  let hasUpdatedVisitors = false;

  const checkAccess = async () => {
    if (!hasUpdatedVisitors) {
      hasUpdatedVisitors = true;
      await axios.get("/api/accept").then((response) => {
        if (response.status === 200) {
          setOpen(false);
        } else {
          if (!access) {
            setOpen(true);
            setAccess(true);
          }
        }
      });
    }
  };

  const handleAccess = async () => {
    await axios.patch("/api/accept");
  };

  const addIP = async () => {
    await axios
      .post("/api/ip")
      .then((response) => {
        handleAccess();
        setOpen(false);
      })
      .catch((error) => {
        if (error.response) {
          console.error("Server responded with an error:", error.response.data);
        }
      });
  };

  useEffect(() => {
    checkAccess();
  }, []);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-slate-100 sm:mx-0 sm:h-10 sm:w-10">
                  <TbLicense
                    className="h-6 w-6 text-emerald-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Akzeptieren der Datenschutzerklärung
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Mit dem Klick auf den Button Annehmen akzeptieren Sie
                      meine{" "}
                      <Link
                        className="underline outline-none focus:outline-none"
                        href="/datenschutzerklaerung"
                      >
                        Datenschutzerklärung
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-600 text-base font-medium text-white hover:bg-emerald-700  sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => addIP()}
                >
                  Akzeptieren
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  Ablehnen
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PrivacyPolicy;
