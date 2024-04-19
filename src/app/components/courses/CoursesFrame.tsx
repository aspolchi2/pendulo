import React from "react";
import { CoursesCardList } from "./CoursesCardList";
import { hepta_slab } from "@/app/asesoriadeimagen/components/price/PriceOutside";
import { Divider } from "@/app/asesoriadeimagen/components/modality/Modality";

export const CoursesFrame = ({ historia }: { historia: boolean }) => {
  return (
    <section
      className="bg-gray flex-col flex sm:gap-8  justify-center items-center pt-12 sm:pb-20 scroll-m-11 pb-24 overflow-x-hidden"
      id="cursos"
    >
      <CoursesCardList isFilter={false} historia={historia} />

      <p
        className={`${hepta_slab.className} xl:text-3xl lg:text-2xl text-center w-11/12 text-balance`}
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
