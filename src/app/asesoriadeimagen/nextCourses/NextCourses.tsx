"use client";
import useBooleanStore from "@/app/zustand/useBooleanStore";
import React from "react";
import { lexend } from "../components/joinUs/JoinUs";

export const NextCourses = ({
  data,
  oferta,
}: {
  data: any;
  oferta?: boolean;
}) => {
  const { toggle, booleanValue } = useBooleanStore();

  const scrollToTarget = () => {
    toggle();

    if (!oferta) {
      setTimeout(() => {
        const element = document.getElementById("prices");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <section
      className="bg-black xl:p-28 lg:p-10 p-4 py-10 lg:py-10 text-white"
      id="prices"
    >
      <div className="flex flex-col gap-6">
        <h3 className="md:text-5xl text-3xl font-bold">Próximos inicios</h3>
        <div className="border rounded-lg flex py-14 px-10 justify-around ">
          {Object.entries(data).map((key: any, i) => {
            return (
              <div className="text-xs" key={i}>
                <p>{key[0]}</p>
                <p
                  className="first-line:font-bold lg:text-xl"
                  dangerouslySetInnerHTML={{ __html: key[1] }}
                ></p>
              </div>
            );
          })}
          <div className="self-center">
            <button
              onClick={() => scrollToTarget()}
              className="bg-primary  rounded-lg lg:w-60 md:w-52 w-40 h-10"
            >
              {booleanValue ? "OCULTAR PRECIOS" : "VER PRECIOS"}
            </button>
          </div>
        </div>
      </div>
      {booleanValue && oferta && (
        <div
          className={`${lexend.className} bg-black text-4xl text-white p-20 text-center flex flex-col gap-10`}
        >
          <p className="xl:w-8/12 m-auto">
            Accedé a un 30% de descuento y precio congelado por inscripción
            anticipada con horario y fecha abierta.
          </p>
          <p className="xl:w-8/12 m-auto">
            ¡Si no podés en el horario las clases quedan grabadas! <br />{" "}
            ¡También podés guardar el cupo para otro horario por una validez de
            5 años!
          </p>
        </div>
      )}
    </section>
  );
};

export default NextCourses;
