import React from "react";
import { hepta_slab } from "../price/PriceOutside";

const Questions = () => {
  return (
    <section>
      <div className="w-10/12 m-auto my-28">
        <div className="grid grid-cols-2 grid-flow-col items-star justify-center">
          <p className="font-bold text-3xl text-primary">
            ¿Qué hace un profesional <br /> de la asesoría de imagen?
          </p>
          <p className={`${hepta_slab.className} w-[563px]`}>
            {" "}
            Un asesor o asesora de imagen es una persona que acompaña a su{" "}
            <span className="text-primary font-bold">
              cliente en la creación, diseño e integración de todas las áreas de
              su imagen.{" "}
            </span>{" "}
            La tarea principal del asesoramiento de imagen es la de{" "}
            <span className="text-primary font-bold">
              facilitar los recursos para trabajar la autoconfianza y seguridad
              ayudando en todos los aspectos externos que permitan potenciar sus
              fortalezas.{" "}
            </span>
          </p>
        </div>
        <div className="h-px bg-primary my-16"></div>
        <div className="grid grid-cols-2 grid-flow-col  items-star justify-center">
          <p className="font-bold text-3xl text-primary">
            ¿Qué vas a aprender en el curso?
          </p>
          <p className={`${hepta_slab.className} w-[563px]`}>
            {" "}
            Aprenderás las herramientas para ofrecer el servicio de
            asesoramiento de imagen de forma profesional,
            <span className="text-primary font-bold">
              {" "}
              incorporando en el transcurso del mismo los conocimientos
              necesarios para orientar al cliente/a en los distintos aspectos de
              su imagen personal, como pueden ser la elección de prendas,
              colores, estilos, maquillaje o peinado.
            </span>
          </p>
        </div>
        <div className="h-px bg-primary my-16"></div>
        <div className="grid grid-cols-2 grid-flow-col  items-star justify-center">
          <p className="font-bold text-3xl text-primary">
            ¿El curso sirve para <br /> trabajar en esta profesión?
          </p>
          <p className={`${hepta_slab.className} w-[563px]`}>
            Para ejercer esta profesión lo más importante es poder demostrar a
            un potencial cliente o empresa el tipo de trabajo que puedas ser
            capaz de realizar. Para lograr eso es necesario compartir trabajos
            reales que permitan evidenciar tus capacidades. <br />
            <br /> El curso está acompañado de actividades prácticas para ir
            implementando desde las primeras clases el contenido en proyectos
            reales.
            <span className="text-primary font-bold">
              {" "}
              Si realizás las actividades en tiempo y forma al finalizar el
              curso contarás con un excelente proyecto que podrás mostrar a
              potenciales clientes o empresas que tengan interés en contratarte
              ya sea de Argentina como de cualquier otro país.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Questions;
