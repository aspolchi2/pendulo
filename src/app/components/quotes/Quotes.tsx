"use client";
import Image from "next/image";
import React from "react";
import leftCoute from "@/../public/images/leftcoutes.png";
import rightCoute from "@/../public/images/rightcuotes.png";
import { motion } from "framer-motion";

export const Quotes = ({ bg, children }: { bg: string; children?: any }) => {
  return (
    <section className={`${bg}`}>
      <div className="sm:py-72 py-32  w-10/12 m-auto">
        <div className="w-full relative flex sm:flex-row flex-col items-start justify-center ">
          <Image
            src={leftCoute}
            alt="leftCoute "
            className="sm:absolute -left-10 -top-10 w-28 sm:w-auto"
          />
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="z-10"
          >
            {children}
          </motion.span>

          <Image
            src={rightCoute}
            alt="leftCoute "
            className="sm:absolute -right-10 -top-10 self-end w-28 sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
};
