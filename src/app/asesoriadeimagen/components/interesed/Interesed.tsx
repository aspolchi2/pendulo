import { CoursesCardList } from "@/app/components/courses/CoursesCardList";
import React from "react";
import { Hepta_Slab } from "next/font/google";

const hepta_slab = Hepta_Slab({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const Interesed = ({ filter }: { filter?: number }) => {
  return (
    <section
      className=" bg-primary p-12 py-24 flex flex-col gap-8 justify-center items-center scroll-m-11 overflow-x-hidden"
      id="cursos"
    >
      <div className=" flex flex-col justify-center items-center text-white gap-4">
        <h2 className="sm:text-4xl text-balance text-center text-base">
          TAMBIÉN TE PUEDE INTERESAR
        </h2>
        <p
          className={`${hepta_slab.className} sm:text-2xl text-center text-balance text-sm`}
        >
          Si querés seguir formándote en nuestro espacio{" "}
          <span className="font-bold">
            tenemos <br className="hidden sm:block" /> cursos complementarios{" "}
          </span>{" "}
          que también te pueden interesar:
        </p>
      </div>
      <div className="">
        <CoursesCardList filter={filter} isFilter />
      </div>
    </section>
  );
};
