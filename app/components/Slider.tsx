"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import sliderdata from "../utils/sliderdata";

interface SliderProps {
  slides: any[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Galerie</h1>
      <div className="relative flex justify-center p-4">
        {sliderdata.map((item, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-500"
                  : "opacity-0"
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={40}
              />
              {index === current && (
                <Image
                  src={item.image}
                  alt="/"
                  width="1440"
                  height="600"
                  objectFit="cover"
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={40}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
