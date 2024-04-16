"use client";
import React from "react";
import { MyData } from "./OfferingCardList";
import { motion } from "framer-motion";

export const OfferingCard = ({ svg, title, description }: MyData) => {
  return (
    <motion.article
      className="bg-white text-black  flex flex-col h-80 justify-center items-center gap-6 rounded-3xl max-w-96  m-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.275 }}
    >
      <header className="text-pink flex flex-col md:gap-5 justify-center items-center sm:pt-7 ">
        {svg}
        <p
          className="lg:text-3xl  text-xl font-black text-center"
          dangerouslySetInnerHTML={{ __html: title }}
        ></p>
      </header>
      <main className="w-9/12">
        <p className="text-center text-sm  m-auto">
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </p>
      </main>
    </motion.article>
  );
};
