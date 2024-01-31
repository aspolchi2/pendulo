import React from "react";
import { TestimonialsCardList } from "./TestimonialsCardList";
import { hepta_slab } from "@/app/layout";
import Link from "next/link";
import { Arrow } from "../svg/Arrow";

export const Testimonials = () => {
  return (
    <section className="flex flex-col items-center gap-8 p-28">
      <h3 className="text-[55px]">¿QUIENES NOS ELIGEN?</h3>
      <p className="text-3xl font-medium">
        Conocé la experiencia de nuestros estudiantes:
      </p>
      <div className={`${hepta_slab.className} flex gap-9 text-base `}>
        <p className="">
          Durante los últimos 7 años que contamos con esta capacitación han
          ampliado sus herramientas personales y laborales estudiantes y
          profesionales del área del estilismo, producción de moda, diseño de
          indumentaria, maquillaje profesional, emprendedores
        </p>
        <p className="">
          y comerciantes del rubro de la moda y belleza y amantes de la moda y
          la imagen personal que han querido incursionar en esta disciplina
          tanto para trabajar su propia imagen como para incursionar en una
          nueva profesión.
        </p>
      </div>
      <TestimonialsCardList />
      <Link
        href={"#"}
        className="flex gap-2 text-3xl justify-center items-center pt-14"
      >
        Conoce más experiencias <Arrow />
      </Link>
    </section>
  );
};
