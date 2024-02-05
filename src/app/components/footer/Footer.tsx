import { hepta_slab, lexend } from "@/app/layout";
import React from "react";
import { Header } from "..";

export const Footer = () => {
  return (
    <section className="bg-black text-white">
      <div className="grid grid-cols-2 h-[500px] place-content-center">
        <div className=""></div>
        <div className={`flex flex-col gap-16`}>
          <div className="flex flex-col gap-5">
            <p className={`${lexend.className} text-2xl`}>TRABAJA CON NOSOTRAS</p>
            <p className={`${hepta_slab.className} w-96`}>
              Envíanos tu curriculum y <br /> motivación por correo electrónico
              a:
              <span>trabajo@pendulo.com.ar</span>
            </p>
          </div>
          <div className={`${hepta_slab.className} flex flex-col gap-1`}>
            <p className="">CONSULTANOS</p>
            <div className="flex gap-20 items-center">
              <p className="">BASES Y CONDICIONES</p>
              <p className="text-pink text-xl font-extrabold">
                cursos@pendulo.com.ar
              </p>
            </div>
          </div>
        </div>
      </div>
      <Header bg="bg-black" position="" />
      <div
        className={`${hepta_slab.className} flex bg-primary h-24 justify-around items-center font-medium`}
      >
        <p className="">Péndulo Escuela Creativa marca registrada</p>
        <p className="">Todos los derechos reservados.</p>
      </div>
    </section>
  );
};
