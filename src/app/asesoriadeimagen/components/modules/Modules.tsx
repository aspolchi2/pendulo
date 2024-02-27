import { hepta_slab } from "@/app/layout";
import React from "react";
import fotis from "@/../public/images/fotis.png";
import Image from "next/image";
import ArrowDown from "@/app/components/testimonials/ArrowDown";

const Modules = ({
  moduleOne,
  moduleTwo,
  show,
  text,
}: {
  moduleOne: { title: string; description: string[] }[];
  moduleTwo: { title: string; description: string[] }[];
  show?: boolean;
  text: string;
}) => {
  return (
    <section className="bg-primary p-32 font-medium">
      <p className="text-right text-xl text-white pb-2">CONTENIDOS</p>
      <div className="h-px bg-white"></div>
      <div
        className={`${hepta_slab.className} text-yellow flex justify-between px-10 pt-[98px] text-6xl font-bold pb-16`}
      >
        <p>Módulo</p>
        <p>.01</p>
      </div>
      <div className="h-px bg-white"></div>
      <div className="grid grid-cols-2 grid-rows-2  w-full bg-white gap-[1px]">
        {moduleOne.map(({ title, description }) => {
          return (
            <div
              className="relative bg-primary flex justify-center items-center text-white h-72"
              key={title}
            >
              <div
                className={` bg-cover bg-center  flex items-center gap-3 ${
                  description.length !== 0
                    ? "hover:opacity-0 inset-0 z-0"
                    : "z-10"
                }`}
              >
                <p className="w-[25ch] text-center text-xl">{title}</p>

                {description.length !== 0 && (
                  <span className="flex justify-end">
                    <ArrowDown />
                  </span>
                )}
              </div>
              {description.length === 0 ? (
                <div></div>
              ) : (
                <div
                  className={`opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-base text-white font-semibold bg-primary flex-col`}
                >
                  <ul className="bg-primary  flex flex-col gap-1 w-1/2">
                    {description.map((desc, i) => (
                      <span key={i} className="flex gap-1">
                        <span>·</span>
                        <li className="leading-6">{desc}</li>
                      </span>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
        <div className="h-px bg-white"></div>
      </div>
      <div
        className={`${hepta_slab.className} text-yellow flex justify-between px-10 pt-[98px] text-6xl font-bold pb-16`}
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
            <div
              className={` bg-cover bg-center  flex items-center gap-3 ${
                description.length !== 0
                  ? "hover:opacity-0 inset-0 z-0"
                  : "z-10"
              }`}
            >
              <p className="w-[25ch] text-center text-xl">{title}</p>
              {description.length !== 0 && (
                <span className="flex justify-end">
                  <ArrowDown />
                </span>
              )}
            </div>
            <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-6xl text-white font-semibold bg-primary flex-col w-full">
              <ul className="bg-primary text-base  flex flex-col  gap-1 w-1/2">
                {description.map((desc, i) => (
                  <span key={i} className="flex gap-1">
                    <span className="">·</span>
                    <li className="leading-6">{desc}</li>
                  </span>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="h-px bg-white"></div>
      </div>
      {show && (
        <div className="flex justify-center items-center">
          <div className="relative bg-primary flex justify-center items-center text-white w-full">
            <div className="inset-0 bg-cover bg-center hover:opacity-0 z-0 h-72 flex justify-center items-center">
              <p className="w-[60 ch] text-center text-2xl">
                HERRAMIENTAS PARA EL DESARROLLO EFECTIVO <br /> DE LA RELACIÓN
                CLIENTE - PROFESIONAL
              </p>
            </div>
            <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex  justify-center items-center text-6xl text-white font-semibold bg-primary flex-col w-full">
              <ul className="bg-primary text-lg  flex flex-col  ">
                <li className="">
                  · Cómo planificar objetivos y realizar el seguimiento
                </li>
                <li className="">· Análisis de las necesidades del cliente</li>
                <li className="">
                  · Herramientas para llevar adelante los objetivos de la imagen
                  interna
                </li>
                <li className="">· Lenguaje no verbal y rapport</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="h-px bg-white"></div>
      <div className=" flex justify-center items-center h-96">
        <p className="text-center w-[55ch] text-white text-2xl font-bold">
          {text}
        </p>
      </div>
    </section>
  );
};

export default Modules;
