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

const Modality = ({ text, extra }: { text: any; extra?: boolean }) => {
  return (
    <section className={`${lexend.className} ${lexend.style} p-32`}>
      <Divider title={"PROPUESTA EDUCATIVA"} />
      <div className=" flex justify-center align-top gap-6 py-16">
        <Ligth />
        <div className=" 2xl:text-2xl text-2xl 2xl:w-[74ch] ">
          <p className=" text-pretty">
            Nuestros planes de estudio son desarrollados por educadores de
            amplia trayectoria y se actualizan de forma constante con el
            objetivo de ofrecer una formación sólida e integral.
          </p>
          <p className=" text-primary font-extrabold ">
            La duración de este curso contempla los tiempos de aprendizaje
            promedio para la apropiación e implementación del contenido de una
            forma progresiva.
          </p>
        </div>
      </div>
      <Divider title={"DESTINATARIOS"} />
      <div className="flex flex-col py-16 gap-12 justify-center items-center ">
        {text.map((item: any, index: number) => (
          <div key={index} className=" flex  align-top gap-6">
            <CheckBox />
            <div className="">{item}</div>
          </div>
        ))}
      </div>
      <Divider title="REQUISITOS" />
      <div className="flex flex-col items-center 2xl:text-2xl text-2xl ">
        <div className="flex flex-col py-10 gap-12 justify-center items-center">
          <div className="flex  align-top gap-6 2xl:w-9/12">
            <PcSmall />
            <p className=" w-11/12">
              <span className="text-primary font-extrabold ">
                Tener computadora o celular/dispositivo que cuente con conexión
                a Internet
              </span>
              , en lo posible con cámara y micrófono activados.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col py-10 gap-12 justify-center items-center">
          <div className="flex  align-top gap-6 2xl:w-9/12 ">
            <SobreSmall />
            <p className="w-11/12">
              <span className="text-primary font-extrabold ">
                Dirección de correo electrónico (E-mail)
              </span>{" "}
              donde se recibirán los datos de acceso al curso y comunicados
              oficiales de la escuela.
            </p>
          </div>
        </div>
      </div>
      {extra && (
        <>
          <Divider title="REQUISITOS PARA TOMAR LA CAPACITACIÓN" />
          <div className="flex flex-col py-10 gap-12 justify-center items-center 2xl:text-2xl text-2xl">
            <div className="flex  justify-center align-top gap-6 pt-20">
              <div className="flex  align-top gap-6 2xl:w-9/12">
                <PcSmall />
                <p className="w-11/12">
                  <span className="text-primary font-extrabold">
                    Computadora{" "}
                  </span>
                  portátil o de escritorio{" "}
                  <span className="text-primary font-extrabold ">
                    que cuente con los programas Adobe Illustrator y Adobe
                    Photoshop instalados.{" "}
                  </span>
                  Además se recomienda contar con un mouse para el uso de los
                  programas.
                </p>
              </div>
            </div>
            <div className="flex  justify-center align-top gap-6 pt-20">
              <div className="flex  align-top gap-6 2xl:w-9/12">
                <Ligth />
                <p className="w-11/12 ">
                  <span className="text-primary font-extrabold ">
                    Contar con conocimientos básicos a intermedios de
                    informática.
                  </span>{" "}
                  Se recomienda saber crear carpetas en windows o mac, descargar
                  archivos de internet, copiar y pegar documentos, descargar
                  archivos desde un pen drive, etc.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Modality;
