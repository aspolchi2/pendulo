import React from "react";
import { Codito } from "../svg/Codito";
import { TrianguloAzul } from "../svg/TrianguloAzul";
import { hepta_slab } from "@/app/layout";
import { CoditoInvertido } from "../svg/CoditoInvertido";
import { TrianguloRosa } from "../svg/TrianguloRosa";

export const WhyPendulo = () => {
  return (
    <section className="flex justify-center ">
      <div className="md:w-10/12 xl:max-w-6xl text-primary mt-12 ">
        <h3 className="text-black text-2xl">¿POR QUÉ CREAMOS PÉNDULO?</h3>
        <hr className="text-black mt-5" />
        <div className="flex flex-col justify-end items-end max-w-full">
          <div className="flex items-center gap-10">
            <span className="animate-wiggle animate-infinite animate-duration-[10000ms] animate-ease-in">
              <Codito />
            </span>
            <div className="text text-2xl">
              <p className={`${hepta_slab.className}font-black text-5xl`}>
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
          <div className="flex items-center gap-10 flex-row-reverse">
            <span className="animate-jump animate-infinite animate-duration-[30000ms] animate-ease-linear">
              <TrianguloAzul />
            </span>
            <div className="text text-2xl pr-44">
              <p className={`${hepta_slab.className}font-black text-5xl`}>
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
            <span className="animate-wiggle animate-infinite animate-duration-[10000ms] animate-ease-in">
              <CoditoInvertido />
            </span>
            <div className="text text-2xl pl-32">
              <p className={`${hepta_slab.className}font-black text-5xl`}>
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
            <span className="animate-jump animate-infinite animate-duration-[20000ms] animate-ease-linear ">
              <TrianguloRosa />
            </span>
            <div className="text text-2xl pr-48">
              <p className={`${hepta_slab.className}font-black text-5xl`}>
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
