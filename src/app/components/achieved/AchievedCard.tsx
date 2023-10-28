"use client";

import Image from "next/image";
import React from "react";
import { Propuesta } from "./AchievedCardList";
import { useElementOnScreen } from "../hook/useElementOnScreen";

export const AchievedCard: React.FC<Propuesta> = ({
  title,
  description,
  id,
  image,
  reappear,
}: Propuesta) => {
  const isEven = id % 2 === 0;
  //@ts-ignore
  const [containerRef, isVisible] = useElementOnScreen({
    reappear: reappear,
    threshold: 0.5,
  });

  return (
    <article
      ref={containerRef}
      className={`w-[1115px] m-auto flex justify-center gap-10 h-[350px] 
      ${
        isVisible
          ? `opacity-100 blur-none translate-x-0 ${
              isEven ? "animate-fade-left" : "animate-fade-right"
            }`
          : `opacity-0 blur-lg `
      } motion-reduce:transition-none motion-reduce:hover:transform-none`}
    >
      <header
        className={`flex gap-10 ${
          isEven && "flex-row-reverse text-right justify-end "
        }`}
      >
        <div
          className={`bg-black w-0.5  h-full ${id == 10 && "hidden"}
        ${isEven ? "mr-20" : "ml-20"} `}
        ></div>
        <div className={`flex flex-col gap-20 `}>
          <h2 className={` text-primary text-6xl font-black `}>{title}</h2>
          <p
            className={`w-96 text-base font-normal ${
              isEven && "text-right self-end"
            } `}
          >
            {description}
          </p>
        </div>
        <main className={`flex gap-3 ${isEven && "flex-row-reverse "}`}>
          <p className={`pt-3`}>{id}</p>
          <Image
            src={image}
            alt=""
            width={455}
            height={312}
            className="h-80 min-w-[455px]"
          ></Image>
        </main>
      </header>
    </article>
  );
};
