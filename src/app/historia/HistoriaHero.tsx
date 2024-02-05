import { Hepta_Slab, Lexend } from "next/font/google";
import React from "react";

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
      className={`${lexend.className} bg-historiaHero h-full w-full px-28 py-44 text-white`}
    >
      <h1 className="font-bold text-[55px] w-[450px] leading-[50px] pb-3 ">
        Somos Péndulo una escuela
      </h1>
      <p className="font-light text-[55px] w-[403px] leading-[60px] pb-6 ">
        fundada por dos fotógrafas y educadoras
      </p>
      <p className={`${hepta_slab.className} w-[463px] text-xl pb-9`}>
      que después de <span className="font-bold"> 10 años de experiencia </span> dictando cursos decidimos crear nuestra propia academia con el propósito de <span className="font-bold"> humanizar la educación profesional. </span> 
      </p>
      <button className="bg-accent py-3 px-5 rounded-full ">CONOCENOS</button>
    </div>
  );
};

export default HistoriaHero;