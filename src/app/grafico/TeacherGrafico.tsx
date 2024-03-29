import React from "react";
import { Divider } from "../asesoriadeimagen/components/modality/Modality";
import Image from "next/image";
import { TrianguloRosa } from "../components/svg/TrianguloRosa";
import taniaPaez from "/public/images/taniaPaez.png";
import { lexend } from "../layout";
import { hepta_slab } from "../asesoriadeimagen/components/price/PriceOutside";

const TeacherGrafico = () => {
  return (
    <section className="p-32 bg-primary">
      <Divider title="PROFESORA" color="text-white" bgcolor="bg-white" />
      <div className="flex pt-16 justify-center items-start text-white gap-8">
        <Image
          src={taniaPaez}
          alt="foto de Claudia Lombardi"
          className="xl:w-64 w-52 aspect-square"
        />
        <div className="xl:w-[769px] h-[300px] flex flex-col relative justify-between ">
          <p className={`${hepta_slab.className} text-white  text-6xl`}>
            Tania <br /> Paez
          </p>
          <span className="float-right absolute right-0 -top-10 ">
            <TrianguloRosa fill="white" />
          </span>
          <p className={`${lexend.className} xl:text-2xl text-xl `}>
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
