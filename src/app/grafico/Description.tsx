import React from "react";
import { hepta_slab, lexend } from "../layout";

const Description = () => {
  return (
    <section className="px-32 py-28 flex flex-col gap-16">
      <div className="grid grid-flow-col grid-cols-2">
        <div className="col-span-1">
          <p
            className={`${lexend.className} font-bold text-primary text-2xl 2xl:text-3xl w-[512px] m-auto`}
          >
            Esta capacitación se caracteriza por ofrecer una formación integral
            en Diseño Gráfico abordando los dos grandes módulos:
          </p>
        </div>
        <div
          className={`${hepta_slab.className} col-span-2 flex flex-col text-xl gap-20`}
        >
          <div className="flex flex-col gap-3 w-[577px] m-auto">
            <p className="">MÓDULO 1:</p>
            <div className="w-full h-px bg-black"></div>
            <p className="">
              El primer módulo se centrará en el{" "}
              <span className="font-bold">
                {" "}
                aprendizaje de las herramientas profesionales:{" "}
              </span>{" "}
              A través del programa{" "}
              <span className="font-bold"> Adobe Illustrator </span>se
              aprenderán las herramientas que se usan habitualmente a nivel
              profesional para la creación de logos, tarjetas, etiquetas,
              estampados, candy bar, papelería, cartelería, placas para redes
              sociales, entre otras. Mediante el programa{" "}
              <span className="font-bold">Adobe Photoshop </span>se aprenderán a
              manipular y retocar imágenes fotográficas, crear fotomontajes,
              modificar fondos, entre otros.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-[577px] m-auto">
            <p className="">MÓDULO 2:</p>
            <div className="w-full h-px bg-black"></div>
            <p className="">
              Durante el segundo módulo se abordarán temas relacionados con la
              estética y comunicación visual para que las piezas desarrolladas
              cuenten con criterio estético y fundamento comunicacional.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-primary"></div>
      <div className="grid grid-flow-col grid-cols-2">
        <div className="col-span-1">
          <p
            className={`${lexend.className} font-bold text-primary text-[28px] w-[512px] m-auto`}
          >
            ¿El curso sirve para trabajar en esta profesión?
          </p>
        </div>
        <div
          className={`${hepta_slab.className} col-span-2 flex flex-col text-xl gap-20`}
        >
          <div className="flex flex-col gap-3 w-[577px] m-auto">
            <p className="">
              Para ejercer esta profesión lo más importante es poder demostrar a
              un potencial cliente o empresa el tipo de trabajo que puedas ser
              capaz de realizar.
            </p>
            <p>
              Para lograr eso es necesario compartir trabajos reales que
              permitan evidenciar tus capacidades.
            </p>
            <p>
              El curso está acompañado de actividades prácticas para ir
              implementando desde las primeras clases el contenido en proyectos
              reales.
            </p>
            <p>
              Si realizás las actividades en tiempo y forma al finalizar el
              curso contarás con un excelente proyecto que podrás mostrar a
              potenciales clientes o empresas que tengan interés en contratarte
              ya sea de Argentina como de cualquier otro país.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
