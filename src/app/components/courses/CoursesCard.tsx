"use client";
import React from "react";
import Image from "next/image";
import { cardsProps } from "./CoursesCardList";
import Link from "next/link";
import { motion } from "framer-motion";
import { hepta_slab } from "@/app/asesoriadeimagen/components/price/PriceOutside";
import { lexend } from "@/app/asesoriadeimagen/components/joinUs/JoinUs";

export const CoursesCard = ({
  id,
  title,
  description,
  image,
  href,
  isFilter,
}: cardsProps) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 100,
      }}
      transition={{ duration: 0.275 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white shadow-md flex flex-col justify-center  p-4 sm:p-5 lg:w-72 max-w-[481px] h-[600px]  "
    >
      <header>
        <p
          className={`${hepta_slab.className} font-semibold sm:text-[5vw] xl:text-[3vw] text-gray leading-none text-5xl`}
        >
          0{id}.
        </p>
      </header>
      <main className="flex flex-col gap-1">
        <h2 className="font-semibold text-primary md:text-4xl sm:text-4xl text-2xl   text-balance h-20 w-10/12">
          {title}
        </h2>
        <p
          className={`${hepta_slab.className} font-normal  pt-3 h-50 text-sm leading-4`}
        >
          {description}
        </p>
        <Image
          src={image}
          alt="image"
          width={300}
          height={224}
          className=" w-full sm:h-52 object-cover pt-4"
        />
      </main>
      <footer className=" h-20   w-full flex justify-center items-center">
        <div className="flex-shrink-0 bg-primary text-white font-bold text-sm sm:text-xl w-full  rounded-lg h-11 flex justify-center items-center ">
          <Link href={`/${href}`} className={`${lexend.className} `}>
            +INFORMACIÓN
          </Link>
        </div>
      </footer>
    </motion.article>
  );
};
