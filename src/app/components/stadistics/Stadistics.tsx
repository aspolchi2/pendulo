"use client";
import { hepta_slab } from "@/app/layout";
import React from "react";
import Counter from "./Counter";

export const Stadistics = () => {
  return (
    <section className="bg-mundi bg-[#D9D9DD] h-[1078px] flex justify-center items-center bg-no-repeat bg-center">
      <div className="container mx-auto flex flex-col gap-12 h-full justify-center  w-10/12 ">
        <p className="flex items-center gap-5 text-2xl font-medium max-w-4xl ">
          <span
            className={`${hepta_slab.className} text-primary text-6xl font-semibold`}
          >
            + <Counter value={7} /> AÑOS
          </span>
          {"    "}
          en actividad
        </p>
        <p className="flex items-center gap-5 text-2xl font-medium max-w-4xl">
          <span
            className={`${hepta_slab.className} text-primary text-6xl font-semibold`}
          >
            + <Counter value={200} />
          </span>{" "}
          CURSOS DICTADOS
        </p>

        <p className="flex items-center gap-5 text-2xl font-medium max-w-4xl">
          <span
            className={`${hepta_slab.className} text-primary text-6xl font-semibold`}
          >
            +<Counter value={2000} />
          </span>{" "}
          ESTUDIANTES SE CAPACITARON <br /> EN NUESTRA ESCUELA
        </p>

        <p className="flex items-center gap-5 text-2xl font-medium max-w-4xl">
          <span
            className={`${hepta_slab.className} text-primary text-6xl font-semibold`}
          >
            +<Counter value={33} />
          </span>{" "}
          PROFESORES TRABAJARON <br /> EN PENDULO
        </p>

        <p className="flex items-center gap-5 text-2xl font-medium max-w-4xl">
          <span
            className={`${hepta_slab.className} text-primary text-6xl font-semibold`}
          >
            + <Counter value={10} /> PAÍSES
          </span>{" "}
          NOS ELIGEN PARA <br /> SU FORMACIÓN
        </p>
        <p className="flex items-center gap-5 text-2xl font-medium max-w-4xl">
          <span
            className={`${hepta_slab.className} text-primary text-6xl font-semibold`}
          >
            +1.000.000
          </span>{" "}
          DE PERSONAS ALCANZADAS <br /> EN NUESTRAS REDES SOCIALES
        </p>
      </div>
    </section>
  );
};
