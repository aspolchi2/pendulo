"use client";
import React from "react";
import { MyData } from "./OfferingCardList";
import { motion } from "framer-motion";

export const OfferingCard = ({ svg, title, description }: MyData) => {
  return (
    <motion.article
      className="bg-white text-black lg:w-[400px] flex flex-col h-96 justify-center items-center gap-6 rounded-3xl sm:max-h-[350px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.275 }}
    >
      <header className="text-pink flex flex-col gap-5 justify-center items-center mt-[56px]">
        {svg}
        <p
          className="text-3xl font-black text-center"
          dangerouslySetInnerHTML={{ __html: title }}
        ></p>
      </header>
      <main className="w-9/12">
        <p className="text-center h-[131px]  m-auto">
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </p>
      </main>
    </motion.article>
  );
};
