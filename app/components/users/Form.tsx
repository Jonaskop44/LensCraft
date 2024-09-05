"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import clsx from "clsx";
import Textarea from "./Textarea";
import axios from "axios";
import Input from "../Input";

interface FormProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  success: boolean;
  setSuccess: (success: boolean) => void;
}

const Form: React.FC<FormProps> = ({ open, setOpen, success, setSuccess }) => {
  const cancelButtonRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isBuyButtonDisabled = !message || !subject;
    setDisabled(isBuyButtonDisabled);
  }, [message, subject]);

  const sendEmail = async () => {
    try {
      const response = await axios.post("/api/users", {
        message,
        subject,
      });
      if (response.status === 200) {
        setLoading(false);
        setOpen(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
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
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                  <AiOutlineShoppingCart
                    className="h-6 w-6 text-blue-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Newsletter senden
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Es wird eine Email an alle Abonnenten der Newsletter
                      gesendet
                    </p>
                  </div>
                </div>
                <div className="justify-center mt-10">
                  <Input
                    label="Betreff"
                    autoComplete="off"
                    id="subject"
                    disabled={loading}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                  />
                  <Textarea
                    label="Nachricht"
                    id="message"
                    disabled={loading}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  disabled={disabled}
                  onClick={() => {
                    setLoading(true);
                    sendEmail();
                  }}
                  title={
                    disabled ? "Bitte fülle das Feld aus" : "Jetzt absenden"
                  }
                  className={clsx(
                    "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:col-start-2 sm:text-sm",
                    disabled && "opacity-60 cursor-not-allowed"
                  )}
                >
                  {loading ? "Laden..." : "Absenden"}
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none sm:mt-0 sm:col-start-1 sm:text-sm"
                >
                  Abbrechen
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Form;
