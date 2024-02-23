import { Hepta_Slab } from "next/font/google";
import React from "react";

const hepta_slab = Hepta_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const HistoriaSep = () => {
  return (
    <section
      className={`bg-historiaSep bg-cover h-[60vh] justify-center py-48 px-28 text-white ${hepta_slab.className} flex flex-col gap-8`}
    >
      <p className="w-[790px] text-2xl">
        <span className="font-bold ">
          Péndulo surge con la firme intención de compartir las herramientas
        </span>
        que nos han permitido llegar hasta donde nos encontramos hoy
        <span className="font-bold ">
          acercándonos cada vez más a nuestro objetivos personales y
          profesionales.
        </span>
      </p>
      <p className="w-[790px] text-2xl">
        <span className="font-bold ">
          {" "}
          Nuestro compromiso es ofrecer un enfoque integral{" "}
        </span>{" "}
        que capacite a las personas para enfrentar desafíos,{" "}
        <span className="font-bold ">
          {" "}
          aprovechar oportunidades y alcanzar objetivos con confianza y
          determinación.
        </span>
      </p>
    </section>
  );
};

export default HistoriaSep;
