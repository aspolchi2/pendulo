import { Calendar } from "@/app/components/svg/Calendar";
import { Codito } from "@/app/components/svg/Codito";
import { Red } from "@/app/components/svg/Red";
import { Thunder } from "@/app/components/svg/Thunder";
import { TrianguloRosa } from "@/app/components/svg/TrianguloRosa";
import Image, { StaticImageData } from "next/image";
import React from "react";

const Modalidad = ({ images }: { images: { image: StaticImageData }[] }) => {
  return (
    <section className="flex flex-col  bg-primary ">
      <div className="bg-primary flex w-10/12 m-auto justify-around items-center h-[350px] font-medium">
        <Codito fill="black" />
        <div className="flex flex-col justify-center items-center gap-6 ">
          <Thunder />
          <p className="text-white text-center">
            MODALIDAD <br /> REGULAR
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <Calendar />
          <p className="text-white text-center">
            5 MESES DE <br /> DURACIÓN
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <Red fill="white" />
          <p className="text-white text-center">
            100% ONLINE <br /> Y EN VIVO
          </p>
        </div>

        <TrianguloRosa fill="black" />
      </div>
      <div className="  flex justify-between  w-full ">
        {images.map((img: any, index: number) => (
          <Image
            key={index}
            src={img.image}
            alt="imagen generica a cambiar"
            width={517}
            height={576}
            className=" w-[32.5vw] object-cover    flex-shrink: 0; "
          />
        ))}
      </div>
    </section>
  );
};

export default Modalidad;
