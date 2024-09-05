"use client";

import React from "react";
import Image from "next/image";
import Picture from "@/public/images/BlackSky.jpg";
import Link from "next/link";

interface HeroProps {
  heading: string;
  message?: string;
  button: string;
  link: string;
  active?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  heading,
  message,
  button,
  link,
  active = "true",
}) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover">
      <Image
        src={Picture}
        alt="adw"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem] animate-fade-in-down">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        {active && (
          <Link className="px-8 py-3 border rounded-md" href={link}>
            {button}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
