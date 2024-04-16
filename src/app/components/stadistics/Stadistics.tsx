"use client";
import React from "react";
import Counter from "./Counter";
import { lexend } from "@/app/asesoriadeimagen/components/joinUs/JoinUs";
import { hepta_slab } from "@/app/asesoriadeimagen/components/price/PriceOutside";

export const Stadistics = () => {
  return (
    <section
      className={`${lexend.className} md:bg-mundi bg-mundiMobile w-full  border-red-400   sm:bg-[#D9D9DD]  flex justify-center items-center bg-no-repeat bg-center bg-cover py-20  `}
    >
      <div className="container mx-auto flex flex-col gap-12 h-full justify-center  w-10/12 ">
        <p className="flex items-center sm:gap-5 gap-2 sm:text-2xl text-base font-medium max-w-4xl flex-col sm:flex-row text-center">
          <span
            className={`${hepta_slab.className} text-primary md:text-6xl sm:text-3xl text-2xl font-semibold `}
          >
            +<Counter value={7} /> AÑOS
          </span>
          {"    "}
          EN ACTIVIDAD
        </p>
        <p className="flex items-center sm:gap-5 gap-2 sm:text-2xl text-base font-medium max-w-4xl flex-col sm:flex-row">
          <span
            className={`${hepta_slab.className} text-primary md:text-6xl sm:text-3xl text-2xl font-semibold`}
          >
            +<Counter value={200} />
          </span>{" "}
          CURSOS DICTADOS
        </p>

        <p className="flex items-center sm:gap-5 gap-2 sm:text-2xl text-base font-medium max-w-4xl flex-col sm:flex-row text-center sm:text-left">
          <span
            className={`${hepta_slab.className} text-primary md:text-6xl sm:text-3xl text-2xl font-semibold`}
          >
            +<Counter value={2000} />
          </span>{" "}
          ESTUDIANTES SE CAPACITARON <br /> EN NUESTRA ESCUELA
        </p>

        <p className="flex items-center sm:gap-5 gap-2 sm:text-2xl text-base font-medium max-w-4xl flex-col sm:flex-row text-center sm:text-left">
          <span
            className={`${hepta_slab.className} text-primary md:text-6xl sm:text-3xl text-2xl font-semibold`}
          >
            +<Counter value={33} />
          </span>{" "}
          PROFESORES TRABAJARON <br /> EN PENDULO
        </p>

        <p className="flex items-center sm:gap-5 gap-2 sm:text-2xl text-base font-medium max-w-4xl flex-col sm:flex-row text-center sm:text-left">
          <span
            className={`${hepta_slab.className} text-primary md:text-6xl sm:text-3xl text-2xl font-semibold`}
          >
            +<Counter value={10} /> PAÍSES
          </span>{" "}
          NOS ELIGEN PARA <br /> SU FORMACIÓN
        </p>
        <p className="flex items-center sm:gap-5 gap-2 sm:text-2xl text-base font-medium max-w-4xl flex-col sm:flex-row text-center sm:text-left">
          <span
            className={`${hepta_slab.className} text-primary md:text-6xl sm:text-3xl text-2xl font-semibold`}
          >
            +1.000.000
          </span>{" "}
          DE PERSONAS ALCANZADAS <br /> EN NUESTRAS REDES SOCIALES
        </p>
      </div>
    </section>
  );
};
