import { CoursesCardList } from "@/app/components";
import { hepta_slab } from "@/app/layout";
import React from "react";

export const Interesed = ({
  filter,
  isFilter,
}: {
  filter: number;
  isFilter: boolean;
}) => {
  return (
    <section className=" bg-primary p-24 flex flex-col gap-8 justify-center items-center">
      <div className=" flex flex-col justify-center items-center text-white gap-4">
        <h2 className="text-4xl">TAMBIÉN TE PUEDE INTERESAR</h2>
        <p
          className={`${hepta_slab.className} text-2xl font-medium text-center`}
        >
          Si querés seguir formándote en nuestro espacio{" "}
          <span className="font-extrabold">
            tenemos <br /> cursos complementarios{" "}
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
