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
    <div
      className={`${lexend.className} bg-historiaHero  w-full p-28 lg:h-[700px] xl:h-lvh max-h-[920px] text-white bg-cover bg-no-repeat flex flex-col justify-center`}
    >
      <h1 className="font-bold lg:text-[55px] lg:w-[450px] lg:leading-[50px] pb-3 sm:text-4xl sm:w-3/6">
        Somos Péndulo <br /> una escuela
      </h1>
      <p className="font-light ld:text-[55px] ld:w-[403px] ld:leading-[60px] pb-6  sm:text-2xl">
        fundada por dos fotógrafas y educadoras
      </p>
      <p
        className={`${hepta_slab.className} lg:w-[463px] lg:text-xl pb-9 max-w-prose w-3/4`}
      >
        que después de{" "}
        <span className="font-bold"> 10 años de experiencia </span> dictando
        cursos decidimos crear nuestra propia academia con el propósito de{" "}
        <span className="font-bold"> humanizar la educación profesional. </span>
      </p>
      <Button
        extraclassname="w-[250px] flex justify-center"
        goto={"#conocenos"}
      >
        CONOCENOS
      </Button>
    </div>
  );
};

export default HistoriaHero;
