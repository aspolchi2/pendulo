import React from "react";
import { Divider } from "../asesoriadeimagen/components/modality/Modality";
import Image from "next/image";
import { TrianguloRosa } from "../components/svg/TrianguloRosa";
import taniaPaez from "/public/images/taniaPaez.png";

const TeacherGrafico = () => {
  return (
    <section className="p-32 bg-primary">
      <Divider title="PROFESORA" color="text-white" bgcolor="bg-white" />
      <div className="flex pt-16 justify-center items-start text-white">
        <Image
          src={taniaPaez}
          alt="foto de Claudia Lombardi"
          width={265}
          height={265}
        />
        <div className="w-[769px] h-[300px] ml-10 flex flex-col relative justify-between ">
          <p className={`hepta_slab text-white text-6xl`}>
            Tania <br /> Paez
          </p>
          <span className="float-right absolute left-80 -top-10 ">
            <TrianguloRosa fill="white" />
          </span>
          <p className="lexend text-2xl font-medium ">
            · Diseñadora y profesora de Diseño en Comunicación Visual, graduada
            en la Facultad de Artes, Universidad Nacional de La Plata,
            Argentina.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeacherGrafico;
