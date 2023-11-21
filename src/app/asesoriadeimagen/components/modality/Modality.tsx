import CheckBox from "@/app/components/svg/CheckBox";
import { Laptop } from "@/app/components/svg/Laptop";
import Ligth from "@/app/components/svg/Ligth";
import PcSmall from "@/app/components/svg/PcSmall";
import { Sobre } from "@/app/components/svg/Sobre";
import SobreSmall from "@/app/components/svg/SobreSmall";
import React from "react";

const Divider = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-right">{title}</p>
      <div className="h-px bg-black"></div>
    </div>
  );
};

const Modality = () => {
  return (
    <section className="p-32">
      <Divider title={"MODALIDAD"} />
      <div className=" flex justify-center align-top gap-6 py-16">
        <Ligth />
        <div className="">
          <p className="w-[65ch] text-2xl">
            Este curso de capacitación profesional con modalidad{" "}
            <span className="text-primary font-extrabold text-2xl">
              intensiva está pensado para las personas que busquen una formación
              muy completa en un período corto de duración.{" "}
            </span>
          </p>
          <p className="w-[65ch] text-2xl">
            {" "}
            Con una mayor carga horaria que la modalidad regular,
            <span className="text-primary font-extrabold text-2xl">
              {" "}
              durante cinco meses se desarrolla el mismo contenido teórico de
              los programas de formación anuales.
            </span>
          </p>
        </div>
      </div>
      <Divider title={"DESTINATARIOS"} />
      <div className="flex flex-col py-16 gap-12">
        <div className=" flex justify-center align-top gap-6 ">
          <CheckBox />
          <div className="flex flex-col">
            <p className="w-[65ch] text-2xl">
              <span className="text-primary font-extrabold text-2xl">
                Profesionales de disciplinas afines que busquen adquirir mayores
                herramientas para el ejercicio de su profesión:{" "}
              </span>{" "}
              maquilladores, estilistas, peluqueros, diseñadores de
              indumentaria, fotógrafos de moda, vestuaristas, etc.
            </p>
          </div>
        </div>
        <div className=" flex justify-center align-top gap-6 ">
          <CheckBox />
          <div className="">
            <p className="w-[65ch] text-2xl">
              <span className="text-primary font-extrabold text-2xl">
                {" "}
                Personas que busquen iniciarse en el Asesoramiento de Imagen{" "}
              </span>{" "}
              para la práctica profesional de la disciplina.
            </p>
          </div>
        </div>
        <div className=" flex justify-center align-top gap-6 ">
          <CheckBox />
          <div className="">
            <p className="w-[65ch] text-2xl">
              <span className="text-primary font-extrabold text-2xl">
                Personas interesadas en adquirir las principales herramientas{" "}
              </span>{" "}
              del asesoramiento de imagen para aplicarlas a su propia imagen.
            </p>
          </div>
        </div>
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
