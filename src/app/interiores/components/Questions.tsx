import { lexend } from "@/app/asesoriadeimagen/components/joinUs/JoinUs";
import { hepta_slab } from "@/app/asesoriadeimagen/components/price/PriceOutside";
import React from "react";

const Questions = () => {
  return (
    <section>
      <div
        className={`${lexend.className} sm:w-10/12 m-auto sm:my-28 p-8 space-y-4 text-balance`}
      >
        <div className="sm:grid grid-cols-2 grid-flow-col items-start justify-center  space-y-4 sm:space-y-0">
          <p className="font-bold xl:text-3xl text-sm md:text-xl lg:text-2xl text-primary sm:text-lg">
            ¿Por qué es importante <br className="hidden sm:block" /> el
            interiorismo?
          </p>
          <p
            className={`${hepta_slab.className} xl:w-[563px] sm:text-primary text-primaryWash font-bold text-[9px] text-balance sm:text-sm md:text-base xl:text-2xl`}
          >
            Un espacio bien pensado con valor agregado logra una mejor recepción
            por parte del que está del otro lado.{" "}
            <span className="text-black font-normal">
              No sólo con el objetivo de mejorar la movilidad y hábitat del
              mismo, sino con el de{" "}
            </span>{" "}
            sentirse más cómodo y alineado con el propio estilo.
          </p>
        </div>
        <div className="h-px bg-primary sm:my-16"></div>
        <div className="sm:grid grid-cols-2 grid-flow-col  items-start justify-center space-y-4 sm:space-y-0">
          <p className="font-bold xl:text-3xl text-sm md:text-xl lg:text-2xl text-primary sm:text-lg">
            ¿Qué vas a aprender en el curso?
          </p>
          <p
            className={`${hepta_slab.className} xl:w-[563px] text-[9px] text-balance sm:text-sm md:text-base xl:text-2xl`}
          >
            Aprenderás a diseñar espacios donde haya un{" "}
            <span className="sm:text-primary text-primaryWash font-bold ">
              equilibrio entre dimensiones, objetos, materiales, texturas y
              colores,
            </span>{" "}
            para que cada persona que habita o visite ese espacio pueda sentirse
            a gusto.
          </p>
        </div>
        <div className="h-px bg-primary sm:my-16"></div>
        <div className="sm:grid grid-cols-2 grid-flow-col  items-star justify-center space-y-4 sm:space-y-0">
          <p className="font-bold xl:text-3xl text-sm md:text-xl lg:text-2xl text-primary sm:text-lg">
            ¿Cómo se va a trabajar en clase?
          </p>
          <p
            className={`${hepta_slab.className} xl:w-[563px] text-balance text-[9px]  sm:text-sm md:text-base xl:text-2xl`}
          >
            En el transcurso del curso,
            <span className="sm:text-primary text-primaryWash font-bold">
              {" "}
              se brindarán las herramientas para que los participantes puedan
              realizar un proyecto de diseño de interiores, ya sea para reformas
              en su propia casa o para terceros.{" "}
            </span>{" "}
            <br /> <br /> A lo largo de la capacitación, se brindará una
            introducción al mundo de la producción de espacios, usando como eje
            la{" "}
            <span className="sm:text-primary text-primaryWash font-bold">
              espacialidad, la dimensión, estética y el control del color como
              generador de espacios y las tendencias.{" "}
            </span>{" "}
            También se hará un recorrido histórico para conocer el origen de las
            tendencias actuales y una exploración de los estilos de decoración
            que existen. <br />
            <br /> Al finalizar el curso, no sólo vas a completar el diseño de
            tu propio espacio, sino que{" "}
            <span className="sm:text-primary text-primaryWash font-bold">
              {" "}
              vas a llevarte las herramientas para poder aplicarlo a cualquier
              otro espacio que quieras.
            </span>
          </p>
        </div>
        <div className="h-px bg-primary sm:my-16"></div>
        <div className="sm:grid grid-cols-2 grid-flow-col  items-star justify-center space-y-4 sm:space-y-0">
          <p className="font-bold xl:text-3xl text-sm md:text-xl lg:text-2xl text-primary sm:text-lg">
            ¿El curso sirve para trabajar en <br className="hidden sm:block" />{" "}
            esta profesión?
          </p>
          <p
            className={`${hepta_slab.className} xl:w-[563px] text-balance text-[9px]  sm:text-sm md:text-base xl:text-2xl `}
          >
            Para ejercer esta profesión lo más importante es poder demostrar a
            un potencial cliente o empresa el tipo de trabajo que puedas ser
            capaz de realizar. <br />
            <br /> Para lograr eso es necesario compartir trabajos reales que
            permitan evidenciar tus capacidades. <br />
            <br /> El curso está acompañado de actividades prácticas para ir
            implementando desde las primeras clases el contenido en proyectos
            reales. <br />
            <br /> Si realizás las actividades en tiempo y forma al finalizar el
            curso contarás con un excelente proyecto que podrás mostrar a
            potenciales clientes o empresas que tengan interés en contratarte ya
            sea de Argentina como de cualquier otro país.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Questions;
