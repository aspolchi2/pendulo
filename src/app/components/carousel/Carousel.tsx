"use client";
import React, { useState, useEffect } from "react";
import ArrowSmall from "../svg/ArrowSmall";

const Carousel = ({
  //@ts-ignore
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
  color = "text-black",
  fill = "fill-black",
  text = "Conoce más cursos",
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative flex flex-col gap-12">
      <div className="flex transition-transform ease-out duration-500">
        {slides[curr]}
      </div>
      <button
        onClick={next}
        className={`w-full m-auto flex justify-center items-center gap-4 ${color}`}
      >
        {text} <ArrowSmall fill={fill} />
      </button>
    </div>
  );
};

export default Carousel;
