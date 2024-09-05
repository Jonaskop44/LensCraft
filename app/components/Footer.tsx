"use client";

import Link from "next/link";
import Contact from "./modals/Contact";
import { useState } from "react";
import Picture from "@/public/images/logo.png";
import Image from "next/image";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <Image
              src={Picture}
              alt="log"
              className=""
              width={40}
              height={40}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              LensCraft
            </span>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 ">
            <li>
              <Link
                href="/service/#aboutme"
                className="mr-4 hover:underline md:mr-6"
              >
                Über mich
              </Link>
            </li>
            <li>
              <Link href="/impressum" className="mr-4 hover:underline md:mr-6">
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutzerklaerung"
                className="mr-4 hover:underline md:mr-6"
              >
                Datenschutzerklärung
              </Link>
            </li>
            <li>
              <button
                onClick={handleOpen}
                className="mr-4 hover:underline md:mr-6"
              >
                Kontakt
              </button>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <p className="block text-sm text-black sm:text-center">
          © 2024 Captur™ . All Rights Reserved.
        </p>
      </div>
      <Contact open={open} setOpen={setOpen} />
    </div>
  );
};

export default Footer;
