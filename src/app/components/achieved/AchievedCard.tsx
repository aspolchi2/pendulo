"use client";

import Image from "next/image";
import React from "react";
import { Propuesta } from "./AchievedCardList";
import { useElementOnScreen } from "../hook/useElementOnScreen";
import { motion } from "framer-motion";

export const AchievedCard: React.FC<Propuesta> = ({
  title,
  description,
  id,
  image,
  reappear,
}: Propuesta) => {
  const isEven = id % 2 === 0;

  const validImage = image || "/default-image.jpg";

  return (
    <motion.article
      className=" m-auto flex justify-center gap-10 xl:h-[350px] lg:h-64 "
      initial={isEven ? { opacity: 0, x: 100 } : { opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <header
        className={`flex gap-10 ${
          isEven && "flex-row-reverse text-right justify-end "
        }`}
      >
        <div
          className={`bg-black w-0.5  h-full ${id == 10 && "hidden"}
        ${isEven ? "xl:mr-20 lg:mr-10" : "xl:ml-20 lg:mr-10"} `}
        ></div>
        <div className={`flex flex-col gap-20  lg:w-3/6 xl:w-3/6 md:w-5/6`}>
          <h2 className={` text-primary xl:text-6xl  lg:text-4xl font-black `}>
            {title}
          </h2>
          <p
            className={` xl:text-base  font-normal xl:w-8/12  lg:text-sm ${
              isEven && "text-right self-end"
            } `}
          >
            {description}
          </p>
        </div>
        <main className={`flex gap-3 ${isEven && "flex-row-reverse "}`}>
          <p className={`pt-3`}>{id}</p>
          <Image
            src={validImage}
            alt=""
            width={455}
            height={312}
            className="xl:h-80 xl:w-auto lg:h-64 lg:w-auto w-auto"
          ></Image>
        </main>
      </header>
    </motion.article>
  );
};
