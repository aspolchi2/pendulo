import React from "react";
import { Divider } from "../modality/Modality";
import claudia from "@/../public/images/asesoramiento2.png";
import Image from "next/image";
import { TrianguloRosa } from "@/app/components/svg/TrianguloRosa";
import { hepta_slab, lexend } from "@/app/layout";

const Teacher = ({
  li,
  teacher,
  name,
  extraText,
}: {
  li: any;
  teacher: any;
  name: any;
  extraText?: any;
}) => {
  return (
    <section className="p-32 bg-primary">
      <Divider title="PROFESORA" color="text-white" bgcolor="bg-white" />
      <div className="flex pt-16 justify-center items-start">
        <Image src={teacher} alt={`Foto de ${name}`} width={265} height={265} />
        <div className="w-[769px] h-[360px] ml-10 flex flex-col gap-14 relative justify-around ">
          <p className={`${hepta_slab.className} text-white text-6xl w-8/12`}>
            {name}
          </p>
          <span className="float-right absolute right-0 top-0">
            <TrianguloRosa fill="white" />
          </span>
          <ul className="text-white text-xl">{li}</ul>
        </div>
      </div>
      <div className="flex justify-center pt-8 text-white">
        <p className={`${lexend.className} w-8/12 text-2xl `}>{extraText}</p>
      </div>
    </section>
  );
};

export default Teacher;
