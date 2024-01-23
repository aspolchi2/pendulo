import { hepta_slab } from "@/app/layout";
import React from "react";

const Questions = () => {
  return (
    <section>
      <div className="w-10/12 m-auto my-28">
        <div className="grid grid-cols-2 grid-flow-col items-star justify-center">
          <p className="font-bold text-3xl text-primary">
          ¿Por qué es importante <br /> el interiorismo?
          </p>
          <p className={`${hepta_slab.className} w-[563px] text-primary font-bold`}>
          Un espacio bien pensado con valor agregado logra una mejor recepción por parte del que está del otro lado. <span className="text-black font-normal">No sólo con el objetivo de mejorar la movilidad y hábitat del mismo, sino con el de </span> sentirse más cómodo y alineado con el propio estilo.
          </p>
        </div>
        <div className="h-px bg-primary my-16"></div>
        <div className="grid grid-cols-2 grid-flow-col  items-star justify-center">
          <p className="font-bold text-3xl text-primary">
            ¿Qué vas a aprender en el curso?
          </p>
          <p className={`${hepta_slab.className} w-[563px]`}>
          Aprenderás a diseñar espacios donde haya un <span className="text-primary font-bold ">equilibrio entre dimensiones, objetos, materiales, texturas y colores,</span> para que cada persona que habita o visite ese espacio pueda sentirse a gusto.
          </p>
        </div>
        <div className="h-px bg-primary my-16"></div>
        <div className="grid grid-cols-2 grid-flow-col  items-star justify-center">
          <p className="font-bold text-3xl text-primary">
          ¿Cómo se va a trabajar en clase?
          </p>
          <p className={`${hepta_slab.className} w-[563px]`}>
          En el transcurso del curso,<span className="text-primary font-bold"> se brindarán las herramientas para que los participantes puedan realizar un proyecto de diseño de interiores, ya sea para reformas en su propia casa o para terceros. </span> <br /> <br />   A lo largo de la capacitación, se brindará una introducción al mundo de la producción de espacios, usando como eje la <span className="text-primary font-bold">espacialidad, la dimensión, estética y el control del color como generador de espacios y las tendencias. </span> También se hará un recorrido histórico para conocer el origen de las tendencias actuales y una exploración de los estilos de decoración que existen. <br /><br />  Al finalizar el curso, no sólo vas a completar el diseño de tu propio espacio, sino que <span className="text-primary font-bold"> vas a llevarte las herramientas para poder aplicarlo a cualquier otro espacio que quieras.</span>
          </p>
        </div>
        <div className="h-px bg-primary my-16"></div>
        <div className="grid grid-cols-2 grid-flow-col  items-star justify-center">
          <p className="font-bold text-3xl text-primary">
          ¿El curso sirve para trabajar en <br /> esta profesión?
          </p>
          <p className={`${hepta_slab.className} w-[563px]`}>
          Para ejercer esta profesión lo más importante es poder demostrar a un potencial cliente o empresa el tipo de trabajo que puedas ser capaz de realizar. <br /><br /> Para lograr eso es necesario compartir trabajos reales que permitan evidenciar tus capacidades. <br /><br /> El curso está acompañado de actividades prácticas para ir implementando desde las primeras clases el contenido en proyectos reales. <br /><br />  Si realizás las actividades en tiempo y forma al finalizar el curso contarás con un excelente proyecto que podrás mostrar a potenciales clientes o empresas que tengan interés en contratarte ya sea de Argentina como de cualquier otro país.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Questions;
