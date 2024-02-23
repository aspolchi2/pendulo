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
      className={`${lexend.className} bg-historiaHero  w-full px-28 lg:h-[700px] xl:h-screen text-white bg-cover bg-no-repeat flex flex-col justify-center`}
    >
      <h1 className="font-bold text-[55px] w-[450px] leading-[50px] pb-3 ">
        Somos Péndulo una escuela
      </h1>
      <p className="font-light text-[55px] w-[403px] leading-[60px] pb-6 ">
        fundada por dos fotógrafas y educadoras
      </p>
      <p className={`${hepta_slab.className} w-[463px] text-xl pb-9`}>
        que después de{" "}
        <span className="font-bold"> 10 años de experiencia </span> dictando
        cursos decidimos crear nuestra propia academia con el propósito de{" "}
        <span className="font-bold"> humanizar la educación profesional. </span>
      </p>
      <Button extraclassname="w-[250px]">CONOCENOS</Button>
    </div>
  );
};

export default HistoriaHero;
