import React from "react";
import { Divider } from "../modality/Modality";
import Image from "next/image";
import { TrianguloRosa } from "@/app/components/svg/TrianguloRosa";
import { hepta_slab } from "../price/PriceOutside";
import { lexend } from "../joinUs/JoinUs";

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
    <section className="xl:p-32 lg:p-20 sm:p-8 p-8 bg-primary">
      <Divider title="PROFESORA" color="text-white" bgcolor="bg-white" />
      <div className="flex lg:pt-16 pt-8 justify-center items-start">
        <Image
          src={teacher}
          alt={`Foto de ${name}`}
          className="xl:w-64 md:w-40 sm:w-32 w-24 aspect-square"
        />
        <div className="w-[769px] md:h-[360px] md:ml-10 sm:ml-4 ml-2 flex flex-col md:gap-14 sm:gap-16 relative md:justify-around gap-8">
          <p
            className={`${hepta_slab.className} text-white md:text-6xl sm:text-3xl w-8/12 text-base font-bold`}
          >
            {name}
          </p>
          <div className="float-right absolute md:right-0 sm:right-28 top-0 sm:w-3/12 md:w-auto w-2/6 right-0">
            <TrianguloRosa fill="white" />
          </div>
          <ul className="text-white sm:text-xl text-[9px] text-balance">
            {li}
          </ul>
        </div>
      </div>
      <div className="flex justify-center pt-8 text-white">
        <p
          className={`${lexend.className} 2xl:w-8/12 xl:text-2xl text-md hidden sm:block `}
        >
          {extraText}
        </p>
      </div>
    </section>
  );
};

export default Teacher;
