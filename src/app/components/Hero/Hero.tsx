import { hepta_slab } from "@/app/layout";
import React from "react";
import { Button } from "../atoms/Button";

export const Hero = () => {
  return (
    <section className="bg-hero-bg w-full bg-cover">
      <div className="backdrop-brightness-50 h-full w-full flex items-center">
        <div className=" relative p-36">
          <p className="  text-white text-5xl font-bold  l  drop-shadow-md opacity-100">
            Ampliá tu horizonte
          </p>
          <p className="drop-shadow-md text-white text-4xl font-thin w-[40.93rem]  ">
            de posibilidades personales <br /> & profesionales
          </p>
          <p
            className={`${hepta_slab.className} text-white w-[41.5rem] text-xl pt-4 `}
          >
            En nuestra{" "}
            <span className="font-extrabold">
              academia educativa 100% online en vivo
              <br />
            </span>{" "}
            podrás descubrir una nueva área del conocimiento, aprender <br />{" "}
            una herramienta o desarrollar tu potencial creativo en un <br />{" "}
            entorno agradable.{" "}
            <span className="font-extrabold">Nosotras te acompañamos.</span>
          </p>
          <Button extraclassname="mt-14 relative">
            INSCRIBITE EN NUESTROS CURSOS
          </Button>
        </div>
        <div className="w-full h-32 lg:h-24 bg-violet opacity-80 brightness-[.35]  absolute bottom-0"></div>
      </div>
    </section>
  );
};
