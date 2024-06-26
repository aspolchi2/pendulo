import React from "react";
import { Button } from "../atoms/Button";
import { hepta_slab } from "@/app/asesoriadeimagen/components/price/PriceOutside";
import { lexend } from "@/app/asesoriadeimagen/components/joinUs/JoinUs";

export const Hero = () => {
  return (
    <section
      className={`${lexend.className} sm:bg-hero-bg bg-homeHeroMobile sm:bg-center  w-full h-[700px]  bg-cover  sm:h-screen overflow-x-hidden`}
    >
      <div className="backdrop-brightness-50 h-full w-full flex items-center">
        <div className=" relative sm:p-12 p-6 pt-56 sm:pt-0">
          <p className="  text-white lg:text-4xl 2xl:text-5xl font-bold  text-2xl drop-shadow-md opacity-100">
            Ampliá tu horizonte
          </p>
          <p className="drop-shadow-md text-white md:text-2xl 2xl:text-5xl leading-none font-thin sm:w-[40.93rem] text-xl ">
            de posibilidades personales <br /> & profesionales
          </p>
          <p
            className={`${hepta_slab.className} text-white max-w-prose sm:text-sm lg:text-2xl pt-4 leading-4 text-sm w-8/12`}
          >
            En nuestra{" "}
            <span className="font-extrabold">
              academia educativa 100% online en vivo
            </span>{" "}
            podrás descubrir una nueva área del conocimiento, aprender una
            herramienta o desarrollar tu potencial creativo en un entorno
            agradable.{" "}
            <span className="font-extrabold">Nosotras te acompañamos.</span>
          </p>
          <div className="mt-14">
            <Button extraclassname=" relative sm:p-4 p-2">
              INSCRIBITE EN NUESTROS CURSOS
            </Button>
          </div>
        </div>
        <div className="w-full h-32 lg:h-24 bg-violet opacity-80 brightness-[.35]  absolute bottom-0 hidden sm:block"></div>
      </div>
    </section>
  );
};
