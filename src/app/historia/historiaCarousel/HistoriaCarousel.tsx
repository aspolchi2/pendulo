import ArrowSmall from "@/app/components/svg/ArrowSmall";
import React, { useEffect, useState } from "react";

const HistoriaCarousel = ({
  // @ts-ignore
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
  color = "text-black",
  goTo = "",
}) => {
  const [curr, setCurr] = useState(0);

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
    <div className="overflow-hidden relative flex flex-col mt-4">
      <div className="flex justify-center items-center mb-2">
        <div className="h-px bg-primary w-full"></div>
        <button
          onClick={next}
          className={` flex justify-center items-center gap-4 w-8 ${color}`}
        >
          <ArrowSmall fill="fill-primary" />
        </button>
      </div>
      <div className="flex transition-transform ease-out duration-500">
        {slides[curr]}
      </div>
    </div>
  );
};

export default HistoriaCarousel;
