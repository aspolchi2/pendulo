import React from "react";
import { CoursesCardList } from "./CoursesCardList";
import { hepta_slab } from "@/app/asesoriadeimagen/components/price/PriceOutside";

export const CoursesFrame = () => {
  return (
    <section
      className="bg-gray flex-col flex sm:gap-24  justify-center items-center sm:pt-32 sm:pb-40 scroll-m-11 pb-24 overflow-x-hidden"
      id="cursos"
    >
      <CoursesCardList isFilter={false} />

      <p
        className={`${hepta_slab.className} xl:text-3xl lg:text-2xl text-center w-10/12`}
      >
        Descubrir una nueva disciplina te puede permitir{" "}
        <span className="font-extrabold">
          empezar <br /> un trabajo que ames, estimular tu creatividad,
          despegarte de <br /> tu rutina
        </span>{" "}
        o incluso identificar una nueva faceta tuya que desconocías.
      </p>
    </section>
  );
};
