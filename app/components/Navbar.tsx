"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiListFill } from "react-icons/pi";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Galarie", href: "/gallery" },
  { name: "Dienstleistung", href: "/service" },
  { name: "Über mich", href: "/service/#aboutme" },
  { name: "Preise", href: "/service/#price" },
];
interface NavbarProps {
  color: string;
}

const Navbar: React.FC<NavbarProps> = ({ color }) => {
  const [nav, setNav] = useState(false);
  const [bgColor, setbgColor] = useState("transparent");
  const [textColor, setTextColor] = useState(color);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setbgColor("#FFFFFF");
        setTextColor("#000000");
        document.documentElement.classList.add("scrolling");
      } else {
        setbgColor("transparent");
        setTextColor(color);
        if (color === "#FFFFFF") {
          document.documentElement.classList.remove("scrolling");
        } else {
          document.documentElement.classList.add("scrolling");
        }
      }
    };

    window.addEventListener("scroll", changeColor);
    window.addEventListener("load", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
      window.removeEventListener("load", changeColor);
    };
  }, [color]);

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <h1 style={{ color: textColor }} className="font-bold text-4xl">
          LensCraft
        </h1>
        <ul style={{ color: textColor }} className="hidden sm:flex ">
          {navigation.map((item, index) => (
            <li key={index} className="p-4">
              <Link
                href={item.href}
                className="link-underline link-underline:hover"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} className="text-white" />
          ) : (
            <PiListFill size={20} style={{ color: textColor }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute -top-[900px] left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            {navigation.map((item, index) => (
              <li key={index} onClick={handleNav} className="p-4 text-4xl">
                <Link
                  href={item.href}
                  className="link-underline link-underline:hover"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
