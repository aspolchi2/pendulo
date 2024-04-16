"use client";

import Image from "next/image";
import React from "react";
import { Propuesta } from "./AchievedCardList";
import { useElementOnScreen } from "../hook/useElementOnScreen";
import { motion } from "framer-motion";
import { lexend } from "@/app/layout";

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
      className={` m-auto flex justify-center xl:h-[350px] lg:h-64 ${lexend.className} `}
      initial={isEven ? { x: 100 } : { x: -100 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div
        className={`flex gap-10 flex-col sm:flex-row ${
          isEven && "sm:flex-row-reverse text-right justify-end "
        }`}
      >
        <div
          className={`bg-black w-0.5  h-full ${id == 10 && "hidden"}
        ${isEven ? "xl:mr-20 lg:mr-10" : "xl:ml-20 lg:mr-10"} `}
        ></div>
        <div
          className={`flex flex-col md:gap-20 sm:gap-12 gap-2 lg:w-3/6 xl:w-3/6 md:w-5/6`}
        >
          <div
            className={`flex items-center w-full gap-4  ${
              isEven
                ? "justify-end  flex-row sm:flex-row"
                : "justify-end flex-row-reverse"
            }`}
          >
            <h2
              className={` text-primary xl:text-6xl  lg:text-4xl font-black  md:text-2xl `}
            >
              {title}
            </h2>
            <p className={` sm:hidden`}>{id}.</p>
          </div>
          <p
            className={` md:text-sm  lg:text-base  font-normal xl:w-8/12  sm:text-xs ${
              isEven && "text-right self-end"
            } `}
          >
            {description}
          </p>
        </div>
        <div className={`flex gap-3 ${isEven && "flex-row-reverse "}`}>
          <p className={`pt-3 hidden sm:block`}>{id}</p>
          <Image
            src={validImage}
            alt=""
            width={455}
            height={312}
            className="xl:h-80 xl:w-auto sm:h-56 sm:min-w-64 w-auto"
          ></Image>
        </div>
      </div>
    </motion.article>
  );
};
