"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface SocialMediaImgProps {
  src: string | StaticImport;
  hoverIcon: React.ReactNode;
}

const SocialMediaImg: React.FC<SocialMediaImgProps> = ({ src, hoverIcon }) => {
  return (
    <div>
      <div className="relative">
        <Image src={src} alt="Image" layout="responsive" />
        <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 group bg-black/50 lg:hover:bg-black/50 lg:bg-black/0">
          <p className="text-gray-300 lg:hidden group-hover:block">
            {hoverIcon}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaImg;
