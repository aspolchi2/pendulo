import CheckBox from "@/app/components/svg/CheckBox";
import { Laptop } from "@/app/components/svg/Laptop";
import Ligth from "@/app/components/svg/Ligth";
import PcSmall from "@/app/components/svg/PcSmall";
import { Sobre } from "@/app/components/svg/Sobre";
import SobreSmall from "@/app/components/svg/SobreSmall";
import { Lexend } from "next/font/google";
import React from "react";

export const Divider = ({
  title,
  color,
  bgcolor,
}: {
  title: string;
  color?: string;
  bgcolor?: string;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <p className={`${color} text-right`}>{title}</p>
      <div className={`${bgcolor} h-px bg-black`}></div>
    </div>
  );
};

const lexend = Lexend({ weight: ["800", "500"], subsets: ["latin"] });

const Modality = ({ text }: any) => {
  return (
    <section className={`${lexend.className} ${lexend.style} p-32`}>
      <Divider title={"PROPUESTA EDUCATIVA"} />
      <div className=" flex justify-center align-top gap-6 py-16">
        <Ligth />
        <div className="w-[97ch]">
          <p className="text-2xl text-pretty">
            Nuestros planes de estudio son desarrollados por educadores de
            amplia trayectoria y se actualizan de forma constante con el
            objetivo de ofrecer una formación sólida e integral.
          </p>
          <p className="text-2xl text-primary font-extrabold ">
            La duración de este curso contempla los tiempos de aprendizaje
            promedio para la apropiación e implementación del contenido de una
            forma progresiva.
          </p>
        </div>
      </div>
      <Divider title={"DESTINATARIOS"} />
      <div className="flex flex-col py-16 gap-12">
        {text.map((item: any, index: number) => (
          <div key={index} className=" flex justify-center align-top gap-6 ">
            <CheckBox />
            <div className="">{item}</div>
          </div>
        ))}
      </div>
      <div className="">
        <Divider title="REQUISITOS" />
        <div className="flex  justify-center align-top gap-6 pt-20">
          <PcSmall />
          <p className="w-[65ch] text-2xl">
            <span className="text-primary font-extrabold text-2xl">
              Tener computadora o celular/dispositivo que cuente con conexión a
              Internet
            </span>
            , en lo posible con cámara y micrófono activados.
          </p>
        </div>
        <div className="flex  justify-center align-top gap-6 pt-20">
          <SobreSmall />
          <p className="w-[65ch] text-2xl">
            <span className="text-primary font-extrabold text-2xl">
              Dirección de correo electrónico (E-mail)
            </span>{" "}
            donde se recibirán los datos de acceso al curso y comunicados
            oficiales de la escuela.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Modality;
