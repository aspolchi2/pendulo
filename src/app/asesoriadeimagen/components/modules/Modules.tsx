import React from "react";
import fotis from "@/../public/images/fotis.png";
import Image from "next/image";
import ArrowDown from "@/app/components/testimonials/ArrowDown";
import { hepta_slab } from "../price/PriceOutside";
import { lexend } from "../joinUs/JoinUs";
import { Divider } from "../modality/Modality";

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

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
    <>
      <section className="bg-primary xl:p-32 p-8 font-medium hidden sm:block">
        <p className="text-right text-xl text-white pb-2">CONTENIDOS</p>
        <div className="h-px bg-white"></div>
        <div
          className={`${hepta_slab.className} text-yellow flex justify-between px-10 pt-[98px] text-6xl font-bold pb-16`}
        >
          <p>Módulo</p>
          <p>.01</p>
        </div>
        <div className="h-px bg-white"></div>
        <div className="sm:grid grid-cols-2 grid-rows-2  w-full bg-white gap-[1px]">
          {moduleOne.map(({ title, description }) => {
            return (
              <div
                className="relative bg-primary flex flex-col sm:flex-row justify-center items-center text-white sm:h-72 "
                key={title}
              >
                <div
                  className={`${
                    lexend.className
                  }  bg-cover bg-center  flex items-center xl:gap-3 gap-1 ${
                    description.length !== 0
                      ? "hover:opacity-0 inset-0 z-0"
                      : "z-10"
                  }`}
                >
                  <p className="w-[25ch] text-center xl:text-xl">{title}</p>

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
                    <ul className="bg-primary  flex flex-col gap-1 w-11/12 text-balance">
                      {description.map((desc, i) => (
                        <span key={i} className="flex gap-1">
                          <span>·</span>
                          <li
                            className={`${lexend.className} leading-5 text-base text-balance`}
                          >
                            {desc}
                          </li>
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
                className={`${
                  lexend.className
                } bg-cover bg-center  flex items-center gap-3 ${
                  description.length !== 0
                    ? "hover:opacity-0 inset-0 z-0"
                    : "z-10"
                }`}
              >
                <p className="w-[25ch] text-center xl:text-xl text-base">
                  {title}
                </p>
                {description.length !== 0 && (
                  <span className="flex justify-end">
                    <ArrowDown />
                  </span>
                )}
              </div>
              <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-6xl text-white font-semibold bg-primary flex-col w-full">
                <ul className="bg-primary text-base  flex flex-col  gap-1 w-11/12">
                  {description.map((desc, i) => (
                    <span key={i} className="flex gap-1 ">
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
              <div className="inset-0 bg-cover bg-center hover:opacity-0 z-0 h-72 flex justify-center items-center gap-1">
                <p className="text-center sm:text-2xl text-xs text-balance ">
                  HERRAMIENTAS PARA EL DESARROLLO EFECTIVO{" "}
                  <br className="hidden sm:block" /> DE LA RELACIÓN CLIENTE -
                  PROFESIONAL
                </p>
                <span className="flex justify-end">
                  <ArrowDown />
                </span>
              </div>
              <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex  justify-center items-center text-6xl text-white font-semibold bg-primary flex-col w-full">
                <ul className="bg-primary text-lg  flex flex-col  ">
                  <li className="">
                    · Cómo planificar objetivos y realizar el seguimiento
                  </li>
                  <li className="">
                    · Análisis de las necesidades del cliente
                  </li>
                  <li className="">
                    · Herramientas para llevar adelante los objetivos de la
                    imagen interna
                  </li>
                  <li className="">· Lenguaje no verbal y rapport</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className="h-px bg-white"></div>
        <div className=" flex justify-center items-center h-96">
          <p className="text-center w-[55ch] text-yellow sm:text-sm md:text-base lg:text-lg md:font-bold">
            {text}
          </p>
        </div>
      </section>
      <div className="flex flex-col bg-primary text-white w-full  p-6 space-y-4 sm:hidden">
        <Divider title="CONTENIDOS" bgcolor="bg-white" />
        <div className={`${hepta_slab.className} `}>
          <div className=" flex justify-between text-yellow h-14 border-b border-white">
            <h1 className="text-2xl font-bold">Módulo</h1>
            <p className="text-2xl font-bold">.01</p>
          </div>
          {moduleOne.map(({ title, description }, i) => {
            return (
              <>
                <div
                  className={` w-full flex flex-col justify-center items-center h-40  relative  group ${
                    description.length == 0
                      ? "hover:text-white"
                      : "hover:text-primary"
                  } `}
                  key={title}
                >
                  <div
                    className={`${
                      lexend.className
                    }  bg-cover bg-center  flex items-center xl:gap-3 gap-1 ${
                      description.length !== 0
                        ? "hover:opacity-0 inset-0 z-0"
                        : "z-10"
                    }`}
                  >
                    <p className="w-[25ch] text-center xl:text-xl">{title}</p>

                    {description.length !== 0 && (
                      <span className="flex justify-end group-hover:hidden ">
                        <ArrowDown />
                      </span>
                    )}
                  </div>

                  {description.length === 0 ? (
                    <div></div>
                  ) : (
                    <div
                      className={`opacity-0 hover:opacity-100 duration-300 absolute inset-0  flex justify-center items-center  text-white font-medium flex-col`}
                    >
                      <ul className=" ">
                        {description.map((desc, i) => (
                          <span
                            key={i}
                            className="flex gap-1 justify-center items-center text-center"
                          >
                            <li
                              className={`${lexend.className}  sm:text-sm text-xs`}
                            >
                              {desc}
                            </li>
                          </span>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {<div className="h-px bg-white"></div>}
              </>
            );
          })}
        </div>
        <div className={`${hepta_slab.className} `}>
          <div className=" flex justify-between text-yellow h-14 border-b border-white mt-8">
            <h1 className="text-2xl font-bold">Módulo</h1>
            <p className="text-2xl font-bold">.02</p>
          </div>
          {moduleTwo.map(({ title, description }, i) => {
            return (
              <>
                <div
                  className={` w-full flex flex-col justify-center items-center h-40  relative  group ${
                    description.length == 0
                      ? "hover:text-white"
                      : "hover:text-primary"
                  } `}
                  key={title}
                >
                  <div
                    className={`${
                      lexend.className
                    }  bg-cover bg-center  flex items-center xl:gap-3 gap-1 ${
                      description.length !== 0
                        ? "hover:opacity-0 inset-0 z-0"
                        : "z-10"
                    }`}
                  >
                    <p className="w-[25ch] text-center xl:text-xl">{title}</p>

                    {description.length !== 0 && (
                      <span className="flex justify-end group-hover:hidden ">
                        <ArrowDown />
                      </span>
                    )}
                  </div>

                  {description.length === 0 ? (
                    <div></div>
                  ) : (
                    <div
                      className={`opacity-0 hover:opacity-100 duration-300 absolute inset-0  flex justify-center items-center  text-white font-medium flex-col`}
                    >
                      <ul className=" ">
                        {description.map((desc, i) => (
                          <span
                            key={i}
                            className="flex gap-1 justify-center items-center text-center"
                          >
                            <li className={`${lexend.className}  text-sm`}>
                              {desc}
                            </li>
                          </span>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {<div className="h-px bg-white"></div>}
              </>
            );
          })}
          {show && (
            <div
              className={` ${lexend.className} flex justify-center items-center`}
            >
              <div className="relative bg-primary flex justify-center items-center text-white w-full">
                <div className="inset-0 bg-cover bg-center hover:opacity-0 z-0 h-40 flex justify-center items-center gap-2">
                  <p className=" text-center text-sm font-semibold ">
                    HERRAMIENTAS PARA EL DESARROLLO EFECTIVO <br /> DE LA
                    RELACIÓN CLIENTE - PROFESIONAL
                  </p>
                  <span className="flex justify-end">
                    <ArrowDown />
                  </span>
                </div>
                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex  justify-center items-center  text-white font-semibold bg-primary flex-col w-full">
                  <ul className="bg-primary text-sm  flex flex-col text-center  ">
                    <li className="">
                      Cómo planificar objetivos y realizar el seguimiento
                    </li>
                    <li className="">
                      Análisis de las necesidades del cliente
                    </li>
                    <li className="">
                      Herramientas para llevar adelante los objetivos de la
                      imagen interna
                    </li>
                    <li className=""> Lenguaje no verbal y rapport</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          <div className="h-px bg-white"></div>
          <div className=" flex justify-center items-center h-40">
            <p
              className={`${hepta_slab.className} text-center text-yellow text-[9px] font-bold text-balance`}
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modules;
