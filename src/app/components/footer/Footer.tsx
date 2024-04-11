import React from "react";
import { Header } from "../header/Header";
import { hepta_slab } from "@/app/asesoriadeimagen/components/price/PriceOutside";
import { lexend } from "@/app/asesoriadeimagen/components/joinUs/JoinUs";

export const Footer = () => {
  return (
    <section className="bg-black text-white">
      <div className="sm:grid lg:grid-cols-2 md:grid-cols-3 sm:h-[500px] place-content-center w-10/12 m-auto flex pt-20">
        <div className=""></div>
        <div className={`flex flex-col gap-16`}>
          <div className="flex flex-col gap-5 ml-6 sm:ml-0">
            <p className={`${lexend.className} sm:text-2xl text-xs font-bold`}>
              TRABAJA CON NOSOTRAS
            </p>
            <p className={`${hepta_slab.className} sm:w-96 `}>
              Envíanos tu curriculum y <br /> motivación por correo electrónico
              a:
              <span>trabajo@pendulo.com.ar</span>
            </p>
          </div>
          <div
            className={`${hepta_slab.className} flex flex-col gap-1 ml-6 sm:ml-0 text-xs w-full`}
          >
            <p className="">CONSULTANOS</p>
            <div className="flex sm:gap-20 gap-2 items-center">
              <p className="">BASES Y CONDICIONES</p>
              <p className="text-pink sm:text-xl font-extrabold text-xs">
                cursos@pendulo.com.ar
              </p>
            </div>
          </div>
        </div>
      </div>
      <Header bg="bg-black" isFooter position="" />
      <div
        className={`${hepta_slab.className} flex bg-primary h-24 sm:justify-around sm:items-center font-medium sm:flex-row flex-col  justify-center p-4 text-xs sm:text-base`}
      >
        <p className="">Péndulo Escuela Creativa marca registrada</p>
        <p className="">Todos los derechos reservados.</p>
      </div>
    </section>
  );
};
