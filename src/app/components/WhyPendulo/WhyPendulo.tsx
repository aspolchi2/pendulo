import React from "react";
import { Codito } from "../svg/Codito";
import { TrianguloAzul } from "../svg/TrianguloAzul";
import { CoditoInvertido } from "../svg/CoditoInvertido";
import { TrianguloRosa } from "../svg/TrianguloRosa";
import { hepta_slab } from "@/app/asesoriadeimagen/components/price/PriceOutside";
import { lexend } from "@/app/asesoriadeimagen/components/joinUs/JoinUs";

export const WhyPendulo = () => {
  return (
    <section
      className={` ${lexend.className} xl:p-24 sm:py-12 sm:px-8 p-4 py-12`}
    >
      <div className="md:w-10/12 m-auto  text-primary   ">
        <h3 className="text-black lg:text-2xl">¿POR QUÉ CREAMOS PÉNDULO?</h3>
        <hr className="text-black my-5" />
        <div className="flex flex-col justify-end items-center max-w-full text-balance sm:gap-8 gap-4">
          <div className="flex items-center gap-10">
            <span className="animate-wiggle animate-infinite animate-duration-[10000ms] animate-ease-linear sm:w-52 md:w-60 ">
              <Codito fill="#E05FE0" />
            </span>
            <div className=" lg:text-2xl sm:text-lg text-balance text-sm text-right">
              <p
                className={`${hepta_slab.className} font-black sm:text-5xl text-xl`}
              >
                01.
              </p>
              <p>
                <span className="font-extrabold">
                  Porque queremos ayudarte a lograr autonomía{" "}
                </span>
                para <br /> la toma de decisiones y a encontrar tu propio camino{" "}
                <br />
                ¡Sabemos que no hay uno solo y podemos mostrarte otros!{" "}
              </p>
            </div>
          </div>
          <div className="flex items-center lg:gap-10 flex-row-reverse sm:gap-12">
            <span className="animate-jump animate-infinite animate-duration-[10000ms] animate-ease-linear sm:w-52 md:w-60 ">
              <TrianguloAzul />
            </span>
            <div className="lg:text-2xl sm:text-lg text-balance text-sm">
              <p
                className={`${hepta_slab.className} font-black sm:text-5xl text-xl`}
              >
                02.
              </p>{" "}
              <p>
                <span className="font-black ">Porque es importante</span> para
                nosotras <br /> ayudarte a{" "}
                <span className="font-black ">desarrollar autoconfianza </span>{" "}
                <br />
                en tu desempeño profesional.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <span className="animate-wiggle animate-infinite animate-duration-[10000ms] animate-ease-in sm:w-52 md:w-60">
              <CoditoInvertido />
            </span>
            <div className="lg:text-2xl sm:text-lg text-balance text-sm text-right">
              <p
                className={`${hepta_slab.className} font-black sm:text-5xl text-2xl`}
              >
                03.
              </p>
              <p className="">
                Porque nos encantaría acompañarte a <br /> explorar{" "}
                <span className="font-extrabold">
                  {" "}
                  y desarrollar tu multipotencialidad <br />y capacidad
                  creativa.
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-10 flex-row-reverse">
            <span className="animate-jump animate-infinite animate-duration-[20000ms] animate-ease-linear sm:w-52 md:w-60 ">
              <TrianguloRosa fill="#E05FE0" />
            </span>
            <div className="lg:text-2xl sm:text-lg text-balance text-sm ">
              <p
                className={`${hepta_slab.className} font-black sm:text-5xl text-2xl`}
              >
                04.
              </p>{" "}
              <p>
                Porque creemos en la educación como <br />{" "}
                <span className="font-black">
                  herramienta de transformación y agente <br /> de cambio
                  social.{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
