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
        <div className="">
          <Ligth />
        </div>
        <div className=" 2xl:text-2xl text-xl 2xl:w-8/12">
          <p className="">
            Nuestros planes de estudio son desarrollados por educadores de
            amplia trayectoria y se actualizan de forma constante con el
            objetivo de ofrecer una formación sólida e integral.
          </p>
          <p className=" text-primary font-extrabold  ">
            La duración de este curso contempla los tiempos de aprendizaje
            promedio para la apropiación e implementación del contenido de una
            forma progresiva.
          </p>
        </div>
      </div>
      <Divider title={"DESTINATARIOS"} />
      <div className="flex flex-col py-16 gap-12 justify-start items-start 2xl:items-center ">
        {text.map((item: any, index: number) => (
          <div key={index} className=" flex  align-top gap-6">
            <div className="w-8">
              <CheckBox />
            </div>
            <div className="max-w-p">{item}</div>
          </div>
        ))}
      </div>
      <Divider title="REQUISITOS" />
      <div className="flex flex-col py-16 gap-12 justify-start items-start 2xl:items-center ">
        <div className=" flex  align-top gap-6">
          <div className="">
            <PcSmall />
          </div>
          <div className="max-w-p">
            <p className="xl:w-[65ch] w-full 2xl:text-2xl xl:text-xl text-primary font-extrabold text-p">
              Tener computadora o celular/dispositivo que cuente con conexión a
              Internet
            {" "}
              <span className=" font-medium text-black">
                en lo posible con cámara y micrófono activados.
              </span>
            </p>
          </div>
        </div>
        <div className=" flex  align-top gap-6">
          <div className="">
            <SobreSmall />
          </div>
          <div className="max-w-p">
            <p className="xl:w-[65ch] 2xl:text-2xl xl:text-xl text-primary font-extrabold">
              Dirección de correo electrónico (E-mail){" "}
              <span className=" font-medium  text-black">
                donde se recibirán los datos de acceso al curso y comunicados
                oficiales de la escuela.
              </span>
            </p>
          </div>
        </div>
      </div>
      {extra && (
        <>
          <Divider title="REQUISITOS PARA TOMAR LA CAPACITACIÓN" />
          <div className="flex flex-col py-16 gap-12 justify-start items-start 2xl:items-center">
            <div className=" flex  align-top gap-6">
              <div className="">
                <PcSmall />
              </div>

              <p className="xl:w-[65ch] 2xl:text-2xl xl:text-xl text-primary font-extrabold">
                Computadora portátil o de escritorio que cuente con los
                programas Adobe Illustrator y Adobe Photoshop instalados.
                <span className=" font-medium text-black">
                  Además se recomienda contar con un mouse para el uso de los
                  programas.
                </span>
              </p>
            </div>
            <div className=" flex  align-top gap-6 ">
              <div className="">
                <Ligth />
              </div>
              <p className="xl:w-[71ch] 2xl:text-2xl xl:text-xl w-full  text-primary font-extrabold">
                Contar con conocimientos básicos a intermedios de informática. 
                <span className=" font-medium text-black">
                  Se recomienda saber crear carpetas en windows o mac, descargar
                  archivos de internet, copiar y pegar documentos, descargar
                  archivos desde un pen drive, etc.
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Modality;
