import React from "react";
import "../globals.css";
import { hepta_slab } from "../asesoriadeimagen/components/price/PriceOutside";
import { lexend } from "../asesoriadeimagen/components/joinUs/JoinUs";

const Description = () => {
  return (
    <section className="lg:px-32 lg:py-28 md:p-12 md:py-18  sm:p-8 sm:py-16 flex flex-col gap-4 py-10 px-14 ">
      <div className="sm:grid grid-flow-col grid-cols-2 space-y-4 sm:space-y-0">
        <div className="col-span-1 ">
          <p className="font-bold text-primary xl:text-3xl  xl:w-[512px] md:text-2xl m-auto text-balance sm:text-xl text-xs">
            ¿Por qué aprender Marketing Digital en Péndulo?
          </p>
        </div>
        <div
          className={`${hepta_slab.className} col-span-2 flex flex-col   xl:text-xl text-[9px] gap-4 text-balance sm:text-sm`}
        >
          <p className="lg:w-9/12 m-auto text-balance">
            En esta capacitación, el participante va a adquirir{" "}
            <span className="text-primary font-bold">
              {" "}
              herramientas sólidas de planificación, estrategia y creatividad
              publicitaria para crear campañas exitosas{" "}
            </span>
            que podrá ir desarrollando y poniendo en práctica durante el año,
            asimilando poco a poco los contenidos.
          </p>
          <p className="lg:w-9/12 m-auto text-balance">
            Además, el participante aprenderá a{" "}
            <span className="text-primary font-bold">
              {" "}
              gestionar y administrar las redes sociales de una empresa,
              proyecto o emprendimiento cómo se desarrolla actualmente a nivel
              profesional{" "}
            </span>{" "}
            en las agencias de publicidad. Es decir adquirirá las herramientas
            para poder ejercer como un Community Manager.
          </p>
          <p className="lg:w-9/12 m-auto text-balance">
            El contenido de esta capacitación{" "}
            <span className="text-primary font-bold">
              está pensado para ser funcional a lo largo del tiempo con
              independencia de los cambios que realicen las redes sociales en
              sus algoritmos{" "}
            </span>
            las cuales se actualizan constantemente- aportando una sólida base
            para iniciarse en esta disciplina.
          </p>
        </div>
      </div>
      <div className="w-full h-px bg-primary"></div>
      <div className="sm:grid grid-flow-col grid-cols-2 space-y-4 sm:space-y-0">
        <div className="col-span-1">
          <p
            className={`${lexend.className} font-bold text-primary xl:text-3xl  xl:w-[512px] md:text-2xl m-auto text-balance sm:text-xl text-xs`}
          >
            ¿Cómo se va a trabajar en clase?
          </p>
        </div>
        <div
          className={`${hepta_slab.className}  col-span-2 flex flex-col   xl:text-xl text-[9px] text-balance sm:text-sm`}
        >
          <div className="flex flex-col gap-4">
            <p className="lg:w-9/12 m-auto text-balance">
              Durante el primer módulo se irá analizando la marca poco a poco,
              luego el producto o servicio y a lo largo de las clases, en
              conjunto con la profesora,{" "}
              <span className="text-primary font-bold">
                {" "}
                cada participante pondrá en marcha una campaña creativa
                personalizada para redes sociales.{" "}
              </span>{" "}
              Es decir, el contenido teórico abordado en el curso se pondrá en
              práctica a un proyecto real desde la primera clase.
            </p>
            <p className="lg:w-9/12 m-auto text-balance">
              En el segundo módulo{" "}
              <span className="text-primary font-bold">
                se aprenderá a desarrollar y ejecutar un plan de redes sociales
                (Social media plan).{" "}
              </span>
              Se proporcionarán distintas herramientas y recursos que permitirán
              llevar a la práctica el plan, abordando temas tales como trazado
              de objetivos, calendario de contenidos, redacción creativa y otros
              conocimientos necesarios para llevar a la práctica una estrategia
              desarrollada en el primer cuatrimestre, ya sea para un empren-
              dimiento propio como para el de un cliente.
            </p>
            <p className="lg:w-9/12 m-auto text-balance">
              Cada unidad tiene su trabajo práctico para afianzar los
              conocimientos adquiridos. En las últimas clases se aprenderá a
              <span className="text-primary font-bold">
                {" "}
                medir los resultados{" "}
              </span>{" "}
              para chequear si el plan ejecutado funciona correctamente o es
              necesario realizar algunos ajustes.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-primary"></div>
      <div className="sm:grid grid-flow-col grid-cols-2 space-y-4 sm:space-y-0">
        <div className="col-span-1">
          <p
            className={`${lexend.className} font-bold text-primary xl:text-3xl  xl:w-[512px] md:text-2xl m-auto text-balance sm:text-xl text-xs`}
          >
            ¿El curso sirve para trabajar en esta profesión?
          </p>
        </div>
        <div
          className={`${hepta_slab.className}  col-span-2 flex flex-col   xl:text-xl text-[9px] sm:text-sm text-balance`}
        >
          <div className="flex flex-col gap-4 ">
            <p className="lg:w-9/12 m-auto text-balance">
              Para ejercer esta profesión lo más importante es poder demostrar a
              un potencial cliente o empresa el tipo de trabajo que puedas ser
              capaz de realizar. Para lograr eso es necesario compartir trabajos
              reales que permitan evidenciar tus capacidades.
            </p>
            <p className="lg:w-9/12 m-auto text-balance">
              El curso está acompañado de actividades prácticas para ir
              implementando desde las primeras clases el contenido en proyectos
              reales.{" "}
              <span className="text-primary font-bold">
                {" "}
                Si realizás las actividades en tiempo y forma al finalizar el
                curso contarás con un excelente proyecto que podrás mostrar a
                potenciales clientes o empresas que tengan interés en
                contratarte ya sea de Argentina como de cualquier otro país.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
