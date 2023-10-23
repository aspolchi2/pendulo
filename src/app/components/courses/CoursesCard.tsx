import React from "react";
import Image from "next/image";
import { hepta_slab } from "@/app/layout";
import { cardsProps } from ".";

export const CoursesCard = ({id, title, description, image}: cardsProps ) => {
  return (
    <article className="bg-white md:w-[308px] md:h-[42rem] shadow-md flex flex-col  flex-shrink-0 justify-center p-9 ">
      <header>
        <p
          className={`${hepta_slab.className} font-semibold text-[90px] text-gray`}
        >
          0{id}.
        </p>
      </header>
      <main>
        <h2 className="font-semibold text-primary text-[45px] leading-[45px] w-64" >{title}</h2>
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
          className="pb-7 w-60"
        />
      </main>
      <footer>
        <button className="flex-shrink-0 bg-primary text-white font-bold w-60 h-11 rounded-lg   ">
          +INFORMACION
        </button>
      </footer>
    </article>
  );
};
