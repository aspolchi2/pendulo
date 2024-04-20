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
  dotsColor = "bg-white",
  goTo = "",
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  function irAId(id: string) {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  const next = () => {
    irAId(goTo);
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

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
      <div className="flex items-center justify-center gap-2">
        {slides.map((_: any, i: any) => (
          <div
            key={i}
            className={`
              transition-all w-3 h-3 ${dotsColor} rounded-full
              ${curr === i ? "" : "bg-opacity-50"}
            `}
          />
        ))}
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
