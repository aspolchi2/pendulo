"use client";
import React from "react";
import { card } from "../nuevaHistoria/NuevaHistoria";
import { motion } from "framer-motion";

export const HistoriaCarouselItem = ({ year, title, point }: card) => {
  const container = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.275,
        staggerChildren: 1,
        delayChildren: 1,
      },
    },
  };
  return (
    <div className="rounded-lg w-full max-w-md">
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="list-disc space-y-4 pl-5 "
      >
        <li className=" font-bold text-base text-primary">
          <span className="block text-xl">{year}</span>
          {title}
        </li>
        {point.map((point, index) => (
          <motion.li
            variants={container}
            initial="hidden"
            animate="show"
            key={index}
            className="text-xs text-primary"
          >
            <span className="text-black"> {point.title}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
