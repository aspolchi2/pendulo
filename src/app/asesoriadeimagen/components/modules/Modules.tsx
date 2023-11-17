import { hepta_slab } from "@/app/layout";
import React from "react";

const Modules = () => {
  const moduleOne = [
    {
      title: "INTRODUCCIÓN A LA IMAGEN PERSONAL",
      description: [
        "¿Qué es la imagen y cómo se conforma?",
        "Asesor de imagen: misión y visión",
        "La imagen interna y el trabajo integrado ",
        "Comunicación no verbal",
      ],
    },
    {
      title: "MORFOLOGÍA A",
      description: [
        "Proporciones del cuerpo humano",
        "Tipologías de cuerpos",
        "Cómo delimitar objetivos frente a cada forma y cliente",
        "Principios de ilusión óptica: la herramienta fundamental para generar los efectos deseados",
        "Cortes adecuados a cada figura y objetivos planificados",
      ],
    },
    {
      title: "MORFOLOGÍA B",
      description: [
        " Visagismo: Tipos de rostro ",
        " Peinados acordes a cada tipo de rostro ",
        " Accesorios adecuados al rostro, cuerpo y características ",
        " Escotes",
      ],
    },
    {
      title: "COLORIMETRÍA: EL ANÁLISIS DE LA PALETA PERSONAL",
      description: [
        "Teoría del color ",
        "¿Qué es la colorimetría y cuál es su función? ",
        "Cómo detectar la paleta del cliente ",
        "Combinaciones ",
        "Psicología del color: cómo nos comunicamos a través de él",
      ],
    },
  ];

  const moduleTwo = [
    {
      title: "ESTILOS: LA EXPRESIÓN DE LA PERSONALIDAD",
      description: [
        "Tipos de estilos y características ",
        " Técnicas para definirlo  ",
        " Cómo adaptar cada estilo al ámbito que necesita el cliente",
      ],
    },
    {
      title: "MODA",
      description: ["Tipos y cortes de prendas ", " Tipos de telas y texturas"],
    },
    {
      title: "MAQUILLAJE",
      description: [
        "Tips y pasos básicos del maquillaje ",
        " Hábitos y conductas para un cuerpo y una piel saludable",
      ],
    },
    {
      title: "MAGEN PROFESIONAL",
      description: [
        "Tipos de ámbitos laborales ",
        "Prendas, vestuario y colores acordes a cada ámbito y código ",
        "Imagen masculina: vestimenta formal y semiformal ",
        "Vestimenta para eventos - Dress code",
      ],
    },
    {
      title: "IMAGEN TERAPÉUTICA",
      description: [
        "Imagen y diversidad: cómo asesorar personas con tratamientos o discapacidades que afectan su imagen",
      ],
    },
    {
      title: "EJERCICIO PROFESIONAL DEL ASESOR DE IMAGEN",
      description: [
        "Marca Personal de un/a Asesor/a de Imagen ",
        " Especializaciones ",
        " Abordaje del cliente: los sí y los no en la primera entrevista ",
        "Etapas del asesoramiento  ",
        " Negociación ",
        " Informe",
      ],
    },
  ];
  return (
    <section className="bg-primary p-32">
      <p className="text-right text-xl text-white pb-2">CONTENIDOS</p>
      <div className="h-px bg-white"></div>
      <div
        className={`${hepta_slab.className} text-yellow flex justify-between pt-[98px] text-6xl font-bold pb-16`}
      >
        <p>Módulo</p>
        <p>.01</p>
      </div>
      <div className="h-px bg-white"></div>
      <div className="grid grid-cols-2 grid-rows-2 h-[525px] w-full bg-white gap-[1px]">
        {moduleOne.map(({ title, description }) => (
          <div
            className="relative bg-primary flex justify-center items-center text-white"
            key={title}
          >
            <div className="inset-0 bg-cover bg-center hover:opacity-0 z-0">
              <p className="w-[25ch] text-center">{title}</p>
            </div>
            <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-6xl text-white font-semibold bg-primary flex-col">
              <ul className="bg-primary text-lg w-[450px]">
                {description.map((desc, i) => (
                  <span key={i} className="flex gap-1">
                    <span>·</span>
                    <li className="leading-6">{desc}</li>
                  </span>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="h-px bg-white"></div>
      </div>
      <div
        className={`${hepta_slab.className} text-yellow flex justify-between pt-[98px] text-6xl font-bold pb-16`}
      >
        <p>Módulo</p>
        <p>.02</p>
      </div>
      <div className="h-px bg-white"></div>
      <div className="grid grid-cols-2 grid-rows-3 h-[787.5px] w-full bg-white gap-[1px]">
        {moduleTwo.map(({ title, description }) => (
          <div
            className="relative bg-primary flex justify-center items-center text-white w-full"
            key={title}
          >
            <div className="inset-0 bg-cover bg-center hover:opacity-0 z-0">
              <p className="w-[25ch] text-center">{title}</p>
            </div>
            <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-6xl text-white font-semibold bg-primary flex-col w-full">
              <ul className="bg-primary text-lg w-[450px] flex flex-col  ">
                {description.map((desc, i) => (
                  <span key={i} className="flex gap-1">
                    <span>·</span>
                    <li className="leading-6">{desc}</li>
                  </span>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="h-px bg-white"></div>
      </div>
    </section>
  );
};

export default Modules;
