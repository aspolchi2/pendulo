"use client";
import Image from "next/image";
import React from "react";
import { Star } from "../svg/Star";
import { card } from "./Data";
import { motion } from "framer-motion";

export const TestimonialsCard = ({ pic, name, course, testimonial }: card) => {
  return (
    <motion.article
      className="bg-yellow flex flex-col md:py-4 md:px-3 py-6 px-9 rounded-[40px] justify-center items-center gap-7  h-80  w-full min-w-60 max-w-72 "
      initial={{ transform: "scale(0)" }}
      animate={{ transform: "scale(1)" }}
      viewport={{ once: true }}
      exit={{}}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-2 ">
        <Image src={pic} alt="" width={107} height={107} className="w-20" />
        <div className="flex flex-col items-center">
          <h3 className="text-xl">{name}</h3>
          <p className="text-sm">{course}</p>
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
        <p className="  text-center text-xs">{testimonial}</p>
      </div>
    </motion.article>
  );
};
