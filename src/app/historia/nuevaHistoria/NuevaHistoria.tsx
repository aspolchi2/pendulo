"use client";
import { Lexend } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";
import HistoriaCarousel from "../historiaCarousel/HistoriaCarousel";
import { HistoriaCarouselItem } from "../historiaCarousel/HistoriaCarouselItem";
import { Divider } from "@/app/asesoriadeimagen/components/modality/Modality";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export type card = {
  id: number;
  year: number;
  title: string;
  point: { title: string }[];
};

const data: card[] = [
  {
    id: 1,
    year: 2012,
    title: "Nos conocemos",
    point: [
      { title: "Nos conocemos trabajando en una escuela de fotografía." },
      {
        title:
          "Las dos nos dedicábamos a dar clases en distintos espacios educativos.",
      },
    ],
  },
  {
    id: 2,
    year: 2014,
    title: "Cierran las escuelas donde trabajabamos",
    point: [{ title: "Nace la idea de crear una propia escuela." }],
  },
  {
    id: 3,
    year: 2017,
    title: "El sueño se hace realidad",
    point: [{ title: "Abrimos nuestra primera casa en La Plata." }],
  },
  {
    id: 4,
    year: 2018,
    title: "Ampliamos la oferta de cursos",
    point: [
      {
        title:
          "Comenzamos a ampliar nuestra oferta de cursos alcanzando nuevas disciplinas.",
      },
      {
        title: "Conjugamos el dictado de cursos con la gestión de la escuela.",
      },
      { title: "Nos formamos en marketing digital." },
    ],
  },
  {
    id: 5,
    year: 2019,
    title: "Nos mudamos y nos capacitamos en gestión empresarial",
    point: [
      { title: "Nos mudamos a una casa más grande." },
      {
        title: "Llegamos a nuestro record de cantidad de cursos y profesores.",
      },
      {
        title:
          "Dejamos de dar clases en Péndulo para enfocarnos 100% a la gestión de la escuela.",
      },
      {
        title:
          "Nos capacitamos en otras áreas del emprendimiento que requerían nuestra atención: finanzas, organización y gestión del tiempo.",
      },
    ],
  },
  {
    id: 6,
    year: 2020,
    title: "Nos transformamos en una academia online",
    point: [
      { title: "Ampliamos el equipo de colaboradores." },
      {
        title: "La pandemia nos exige transformar la metodología de enseñanza.",
      },
      { title: "Nos transformamos en una escuela 100% online en vivo." },
      { title: "Llegamos a estudiantes de todo el país." },
      { title: "Seguimos capacitándonos." },
    ],
  },
  {
    id: 7,
    year: 2021,
    title: "Reposicionamos la marca",
    point: [
      {
        title:
          "Identificamos que con el nuevo formato debíamos reposicionar la marca.",
      },
      {
        title:
          "Desarrollamos un rediseño de identidad en equipo con una diseñadora.",
      },
    ],
  },
  {
    id: 8,
    year: 2022,
    title: "Nos expandimos",
    point: [
      { title: "Nos expandimos a toda Latinoamérica." },
      { title: "Llegamos al récord de cantidad de estudiantes anuales." },
    ],
  },
  {
    id: 9,
    year: 2023,
    title: "Ampliamos el equipo",
    point: [
      { title: "Desarrollamos nuestro sitio web." },
      { title: "Expandimos nuestro equipo de trabajo y colaboradores." },
    ],
  },
];

const NuevaHistoria = () => {
  const isEven = (num: number) => num % 2 === 0;

  return (
    <>
      <section className="lg:py-20 lg:px-28 sm:p-8 hidden sm:block">
        <div className=" flex flex-col gap-8 pb-20">
          <p className="text-2xl font-medium">NUESTRA HISTORIA</p>
          <div className="w-full h-[1px] bg-black"></div>
        </div>
        {data.map((card, i) => (
          <div
            key={card.id}
            className={`grid grid-flow-col grid-cols-8 ${
              card.point.length < 3 ? "min-h-[150px]" : "min-h-[350px] pb-4"
            }`}
          >
            <motion.div
              className="w-full border-r-2 border-primaryWash border-dashed col-span-4 lg:col-span-5  "
              initial={{ borderRightWidth: "0px" }}
              whileInView={{ borderRightWidth: "2px" }}
            >
              <motion.div
                className={`w-full h-0.5 ${
                  isEven(card.id) ? "bg-primaryWash" : "bg-primary"
                } mb-2`}
                initial={{ width: 0 }}
                whileInView={{
                  transformOrigin: "left",
                  opacity: 1,
                  width: "100%",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              ></motion.div>
              <div
                className={`flex gap-2 ${
                  isEven(card.id) ? "text-primaryWash" : "text-primary"
                }  `}
              >
                <p className="font-black xl:text-6xl lg:text-5xl">
                  {card.year}
                </p>
                <p className="font-bold xl:text-4xl lg:text-2xl ml-auto mr-auto w-[500px]">
                  {card.title}
                </p>
              </div>
            </motion.div>
            <div className="flex flex-col gap-4  col-span-4">
              {card.point.map((point, i) => (
                <div
                  key={i}
                  className="flex justify-start items-start relative -top-1.5 -left-2 w-full gap-4 "
                >
                  <div
                    className={`w-4 h-4 ${
                      isEven(card.id) ? "bg-primaryWash" : "bg-primary"
                    }  rounded-full`}
                  ></div>
                  <motion.p
                    className="text-lg w-5/6 relative -top-1.5"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {point.title}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="sm:hidden p-8 min-h-96 ">
        <Divider
          title="NUESTRA HISTORIA"
          bgcolor="bg-primary"
          color="text-primary"
          textPosition="text-left"
        ></Divider>
        <HistoriaCarousel>
          {data.map((item, i) => (
            <HistoriaCarouselItem
              key={i}
              year={item.year}
              title={item.title}
              point={item.point}
              id={item.id}
            />
          ))}
        </HistoriaCarousel>
      </section>
    </>
  );
};

export default NuevaHistoria;
