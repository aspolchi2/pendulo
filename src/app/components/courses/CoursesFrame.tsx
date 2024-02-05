import React from "react";
import { CoursesCardList } from "./CoursesCardList";
import { hepta_slab } from "@/app/layout";

export const CoursesFrame = () => {
  return (
    <section
      className="bg-gray flex-col flex gap-24 w-full justify-center items-center pt-32 pb-40 scroll-m-11"
      id="cursos"
    >
      <div>
        <CoursesCardList isFilter={false} />
      </div>
      <p className={`${hepta_slab.className} text-3xl text-center`}>
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
