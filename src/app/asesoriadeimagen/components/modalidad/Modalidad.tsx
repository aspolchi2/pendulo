import { Calendar } from "@/app/components/svg/Calendar";
import { Codito } from "@/app/components/svg/Codito";
import { Red } from "@/app/components/svg/Red";
import { Thunder } from "@/app/components/svg/Thunder";
import { TrianguloAzul } from "@/app/components/svg/TrianguloAzul";
import { TrianguloRosa } from "@/app/components/svg/TrianguloRosa";
import Image from "next/image";
import React from "react";
import first from "@/../public/images/firstModalidad.png";
import second from "@/../public/images/secondModalidad.png";
import third from "@/../public/images/thirdModalidad.png";

const Modalidad = () => {
  return (
    <section className="flex flex-col  bg-primary ">
      <div className="bg-primary flex w-10/12 m-auto justify-around items-center h-[350px] ">
        <Codito fill="black" />
        <div className="flex flex-col justify-center items-center gap-6">
          <Thunder />
          <p className="text-white text-center">
            MODALIDAD <br /> INTENSIVA
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
        <Image
          src={first.src}
          alt="imagen generica a cambiar"
          width={517}
          height={576}
          className=" w-[31vw] object-cover    flex-shrink: 0; "
        />
        <Image
          src={second.src} 
          alt="imagen generica a cambiar"
          width={517}
          height={576}
          className="  w-[35vw] object-cover flex-shrink: 0;"
        />
        <Image
          src={third.src}
          alt="imagen generica a cambiar"
          width={517}
          height={576}
          className="  w-[31vw] object-cover  flex-shrink: 0;"
        />
      </div>
    </section>
  );
};

export default Modalidad;
