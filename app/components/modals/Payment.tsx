"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import clsx from "clsx";
import Input from "../Input";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import Textarea from "../users/Textarea";

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  description: string;
  success: boolean;
  setSuccess: (success: boolean) => void;
}

const Model: React.FC<ModalProps> = ({
  open,
  setOpen,
  title,
  description,
  success,
  setSuccess,
}) => {
  const cancelButtonRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const isBuyButtonDisabled =
      !name ||
      /\d/.test(name) ||
      !address ||
      !phone ||
      !city ||
      !postcode ||
      !email ||
      !email.includes("@") ||
      !message ||
      !captcha;
    setDisabled(isBuyButtonDisabled);
  }, [name, address, phone, email, captcha, city, postcode, message]);

  const sendEmail = async () => {
    try {
      const response = await axios.post("/api/cart", {
        name,
        address,
        phone,
        email,
        postcode,
        city,
        message,
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
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{description}</p>
                  </div>
                </div>
                <div className="justify-center mt-10">
                  <Input
                    id="name"
                    label="Vollständiger Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <Input
                    id="address"
                    label="Adresse"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                  <Input
                    id="postcode"
                    label="Postleitzahl"
                    onChange={(e) => {
                      setPostcode(e.target.value);
                    }}
                  />
                  <Input
                    id="city"
                    label="Wohnort"
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                  <Input
                    id="phone"
                    label="Telefonnummer"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                  <Input
                    id="email"
                    label="Email Adresse"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <Textarea
                    label="Teilen Sie mir Ihre wünsche mit"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    id="message"
                  />
                </div>
              </div>
              <div>
                <ReCAPTCHA
                  sitekey={process.env.CAPTCHA_SITEKEY || ""}
                  onChange={(value) => setCaptcha(value || "")}
                  className="mt-2"
                />
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  disabled={disabled}
                  onClick={() => {
                    setLoading(true);
                    sendEmail();
                    setCaptcha("");
                  }}
                  title={
                    disabled
                      ? "Bitte füllen Sie alle Felder aus"
                      : "Jetzt kaufen"
                  }
                  className={clsx(
                    "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:col-start-2 sm:text-sm",
                    disabled && "opacity-60 cursor-not-allowed"
                  )}
                >
                  {loading ? "Laden..." : "Jetzt kaufen"}
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

export default Model;
