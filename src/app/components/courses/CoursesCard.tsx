"use client";
import React from "react";
import Image from "next/image";
import { cardsProps } from "./CoursesCardList";
import Link from "next/link";
import { motion } from "framer-motion";
import { hepta_slab } from "@/app/asesoriadeimagen/components/price/PriceOutside";

export const CoursesCard = ({
  id,
  title,
  description,
  image,
  href,
  filter,
  isFilter,
}: cardsProps) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 100,
      }}
      transition={{ duration: id * 0.3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white shadow-md flex flex-col w-80 justify-center p-9 flex-grow"
    >
      <header>
        {!isFilter && (
          <p
            className={`${hepta_slab.className} font-semibold sm:text-[5vw] xl:text-[3vw] text-gray leading-none`}
          >
            0{id}.
          </p>
        )}
      </header>
      <main>
        <h2 className="font-semibold text-primary md:text-4xl sm:text-2xl  w-60">
          {title}
        </h2>
        <p
          className={`${hepta_slab.className} font-normal  text-[13px] w-[228px]  leading-4 h-36  pb-36  pt-[14px]`}
        >
          {description}
        </p>
        <Image
          src={image}
          alt="image"
          width={230}
          height={170}
          className="pb-7"
        />
      </main>
      <footer>
        <Link
          href={`/${href}`}
          className="flex-shrink-0 bg-primary text-white font-bold text-xl w-full h-11 rounded-lg px-7 py-3   "
        >
          +INFORMACIÓN
        </Link>
      </footer>
    </motion.article>
  );
};
