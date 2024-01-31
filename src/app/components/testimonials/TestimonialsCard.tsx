import Image from "next/image";
import React from "react";
import { Star } from "../svg/Star";
import { card } from "./Data";

export const TestimonialsCard = ({ pic, name, course, testimonial }: card) => {
  //un for del 1 al 5 para poner estrellas

  return (
    <article className="bg-yellow flex flex-col py-6 px-9 rounded-[40px] justify-start items-center gap-7">
      <header className="flex flex-col items-center gap-6 ">
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
      </header>

      <footer>
        <p className="w-80 text-center text-xl">{testimonial}</p>
      </footer>
    </article>
  );
};
