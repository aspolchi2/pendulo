import React from "react";
import { Divider } from "../modality/Modality";
import claudia from "@/../public/images/asesoramiento2.png";
import Image from "next/image";
import { TrianguloRosa } from "@/app/components/svg/TrianguloRosa";
import { hepta_slab } from "@/app/layout";

const Teacher = () => {
  return (
    <section className="p-32 bg-primary">
      <Divider title="PROFESORA" color="text-white" bgcolor="bg-white" />
      <div className="flex pt-16 justify-center items-start">
        <Image
          src={claudia.src}
          alt="foto de Claudia Lombardi"
          width={265}
          height={265}
        />
        <div className="w-[769px] h-[360px] ml-10 flex flex-col gap-14 relative justify-between ">
          <p className={`${hepta_slab.className} text-white text-6xl`}>
            Claudia <br /> Lombardi
          </p>
          <span className="float-right absolute right-0 top-0">
            <TrianguloRosa fill="white" />
          </span>
          <ul className="text-white text-xl">
            <li>· Asesora de imagen.</li>
            <li>· Técnica en Comunicación Social.</li>
            <li>
              · Oradora motivacional de imagen consciente & branding personal.
            </li>
            <li>
              · Especialista en Marca Personal y en Reinvención de
              Profesionales.
            </li>
            <li>· Docente de la Universidad de Palermo.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Teacher;
