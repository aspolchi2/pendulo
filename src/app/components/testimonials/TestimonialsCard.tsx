"use client";
import Image from "next/image";
import React from "react";
import { Star } from "../svg/Star";
import { card } from "./Data";
import { motion } from "framer-motion";

export const TestimonialsCard = ({ pic, name, course, testimonial }: card) => {
  return (
    <motion.article
      className="bg-yellow flex flex-col py-6 px-9 rounded-[40px] justify-start items-center gap-7 h-[475px]"
      initial={{ transform: "scale(0)" }}
      animate={{ transform: "scale(1)" }}
      viewport={{ once: true }}
      exit={{}}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-6 ">
        <Image src={pic} alt="" width={107} height={107} className="" />
        <div className="flex flex-col items-center">
          <h3 className="text-3xl">{name}</h3>
          <p className="text-xl">{course}</p>
          <div className="flex">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>

      <div>
        <p className="w-80 text-center text-xl">{testimonial}</p>
      </div>
    </motion.article>
  );
};
