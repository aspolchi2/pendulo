import { Hepta_Slab, Lexend } from "next/font/google";
import React from "react";
import { Button } from "../components/atoms/Button";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "500", "900"],
});
const hepta_slab = Hepta_Slab({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "500", "900"],
});

const HistoriaHero = () => {
  return (
    <>
      <div
        className={`${lexend.className} sm:bg-historiaHero  bg-historiaMobileHero bg-center w-full xl:p-28 sm:p-8 sm:h-lvh  lg:h-[700px] xl:h-lvh h-[529px] text-white bg-cover bg-no-repeat sm:flex flex-col sm:justify-center justify-end p-4 hidden`}
      >
        <h1 className="font-bold lg:text-[55px] lg:w-[450px] lg:leading-[50px] pb-3 lg:text-4xl sm:text-2xl sm:w-3/6 text-xl">
          Somos Péndulo <br /> una escuela
        </h1>
        <p className="font-light ld:text-[55px] ld:w-[403px] ld:leading-[60px] pb-6  xl:text-2xl sm:text-xl">
          fundada por dos fotógrafas y educadoras
        </p>
        <p
          className={`${hepta_slab.className} lg:w-[463px] lg:text-xl pb-9 max-w-prose w-3/4 text-xs`}
        >
          que después de{" "}
          <span className="font-bold"> 10 años de experiencia </span> dictando
          cursos decidimos crear nuestra propia academia con el propósito de{" "}
          <span className="font-bold">
            {" "}
            humanizar la educación profesional.{" "}
          </span>
        </p>
        <Button
          extraclassname="xl:w-40 sm:w-40 w-28 h-10 text-sm sm:h-10 lg:h-12 lg:text-base flex justify-center"
          goto={"#conocenos"}
        >
          <p className="text-center m-auto">CONOCENOS</p>
        </Button>
      </div>
      <div
        className={`${lexend.className} w-full h-[529px] bg-historiaMobileHero bg-cover bg-no-repeat sm:hidden p-2`}
      >
        <p className="text-white drop-shadow-md text-balance text-center text-2xl ">
          <span className="font-bold">Somos Péndulo,</span> una escuela fundada
          por dos fotógrafas y educadoras
        </p>
        <div className="">
          <p>
            que después de 10 años de experiencia dictando cursos decidimos
            crear nuestra propia academia con el propósito de humanizar la
            educación profesional.
          </p>
          <Button extraclassname={"px-4 py-2 text-xs"}>CONOCENOS</Button>
        </div>
      </div>
    </>
  );
};

export default HistoriaHero;
