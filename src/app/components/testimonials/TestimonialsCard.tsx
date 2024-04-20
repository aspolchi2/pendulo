"use client";
import Image from "next/image";
import React from "react";
import { Star } from "../svg/Star";
import { card } from "./Data";
import { motion } from "framer-motion";

export const TestimonialsCard = ({ pic, name, course, testimonial }: card) => {
  return (
    <motion.article
      className="bg-yellow flex flex-col md:py-4 md:px-3 py-6 px-9 rounded-[40px] justify-start items-center gap-7  h-96 "
      initial={{ transform: "scale(0)" }}
      animate={{ transform: "scale(1)" }}
      viewport={{ once: true }}
      exit={{}}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-2 ">
        <Image src={pic} alt="" width={107} height={107} className="w-28" />
        <div className="flex flex-col items-center">
          <h3 className="text-2xl">{name}</h3>
          <p className="text-base">{course}</p>
          <div className="flex mt-2">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>

      <div>
        <p className="lg:w-80 w-72 text-center text-sm">{testimonial}</p>
      </div>
    </motion.article>
  );
};
