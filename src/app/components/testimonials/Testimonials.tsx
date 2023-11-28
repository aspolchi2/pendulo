import React from "react";
import { TestimonialsCardList } from "./TestimonialsCardList";
import { hepta_slab } from "@/app/layout";
import Link from "next/link";
import { Arrow } from "../svg/Arrow";

export const Testimonials = () => {
  return (
    <section className="flex flex-col items-center gap-8 p-28">
      <h3 className="text-[55px]">¿QUIENES NOS ELIGEN?</h3>
      <p
        className={`${hepta_slab.className} w-[94ch] text-center text-[18px] leading-6`}
      >
        Desde el 2017 nos eligen para capacitarse aficionados y profesionales
        del área del diseño, comunicación, marketing, publicidad, tecnología,
        moda, arquitectura, artes visuales, fotografía y emprendedores de
        diversos rubros.
      </p>
      <h4 className="text-3xl">
        Conocé la experiencia de nuestros estudiantes:
      </h4>
      <TestimonialsCardList />
      <Link
        href={"#"}
        className="flex gap-2 text-3xl justify-center items-center"
      >
        Conoce más experiencias <Arrow />
      </Link>
    </section>
  );
};
