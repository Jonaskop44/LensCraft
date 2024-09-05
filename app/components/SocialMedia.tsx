"use client";

import React from "react";
import SocialMediaImg from "./SocialMediaImg";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import picture1 from "@/public/images/ig-img-1.jpeg";
import picture2 from "@/public/images/ig-img-2.jpeg";
import picture3 from "@/public/images/ig-img-4.jpeg";
import Link from "next/link";

const socialMediaData = [
  {
    src: picture1,
    link: "https://www.instagram.com/",
    hoverIcon: <FaInstagram size={30} className="z-10" />,
  },
  {
    src: picture2,
    link: "https://www.youtube.com/",
    hoverIcon: <FaYoutube size={30} className="z-10" />,
  },
  {
    src: picture3,
    link: "https://twitter.com/",
    hoverIcon: <FaTwitter size={30} className="z-10" />,
  },
];

const SocialMedia = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold mb-10">
        Besuchen Sie meine sozialen Medien
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 p-4">
        {socialMediaData.map((item, index) => (
          <Link href={item.link} key={index}>
            <SocialMediaImg src={item.src} hoverIcon={item.hoverIcon} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
