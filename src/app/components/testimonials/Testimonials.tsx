"use client";
import React, { useState } from "react";
import { TestimonialsCardList } from "./TestimonialsCardList";
import Link from "next/link";
import { Arrow } from "../svg/Arrow";
import { hepta_slab } from "@/app/asesoriadeimagen/components/price/PriceOutside";

export const Testimonials = () => {
  const [filter, setFilter] = useState(3);
  const handleAdd = () => {
    setFilter(filter + 3);
    if (filter >= 8) {
      setFilter(3);
    }
  };
  return (
    <section
      className="flex flex-col items-center gap-9 lg:p-28   xl:scale-100 max-xl:scale-75"
      id="testimonios"
    >
      <h3 className="lg:text-[55px] sm:text-5xl text-3xl ">
        ¿QUIENES NOS ELIGEN?
      </h3>
      <p className="sm:text-3xl font-medium text-xl text-center sm:text-left">
        Conocé la experiencia de nuestros estudiantes:
      </p>
      <div
        className={`${hepta_slab.className} flex sm:gap-9 text-base sm:flex-row flex-col gap-0 text-center sm:text-left`}
      >
        <p className="lg:w-[601px] ">
          Durante los últimos 7 años que contamos con esta capacitación han
          ampliado sus herramientas personales y laborales estudiantes y
          profesionales del área del estilismo, producción de moda, diseño de
          indumentaria, maquillaje profesional, emprendedores
        </p>
        <p className="lg:w-[601px] ">
          y comerciantes del rubro de la moda y belleza y amantes de la moda y
          la imagen personal que han querido incursionar en esta disciplina
          tanto para trabajar su propia imagen como para incursionar en una
          nueva profesión.
        </p>
      </div>
      <TestimonialsCardList filter={filter} />
      <button
        className="sm:flex gap-2 text-3xl justify-center items-center mt-14 hidden"
        onClick={() => handleAdd()}
      >
        Conoce más experiencias <Arrow />
      </button>
    </section>
  );
};
