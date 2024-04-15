import React from "react";
import NextCourses from "./NextCourses";
import { lexend } from "@/app/layout";
import useBooleanStore from "@/app/zustand/useBooleanStore";

const NextCoursesData = ({ oferta }: { oferta?: boolean }) => {
  const data = {
    "Fecha estimada de inicio": "Martes 19 de Marzo",
    Horario: "Martes de 20.30 a 22 </br>(Hora de Argentina)",
    Duración: "9 meses",
  };
  const dataMobile = [
    { title: "Fecha estimada de inicio", value: "Martes 19 de Marzo" },
    { title: "Horario", value: "Martes de 20.30 a 22 (Hora de Argentina)" },
    { title: "Duración", value: "9 meses" },
  ];
  const { toggle, booleanValue } = useBooleanStore();

  return (
    <>
      <div className="hidden sm:block">
        <NextCourses data={data} oferta={oferta} />
      </div>
      <div
        className={` ${lexend.className} sm:hidden bg-black  p-10 text-white space-y-4`}
      >
        <p className={` font-bold `}>Próximos inicios</p>
        <div className="w-full border-white border-2 border-solid rounded divide-y-2">
          {dataMobile.map((item, index) => (
            <div key={index} className="p-4">
              <p>{item.title}:</p>
              <p className="font-bold">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="">
          <button
            onClick={() => toggle()}
            className="bg-primary text-white  p-2 rounded-sm w-28 text-xs"
          >
            VER PRECIOS{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default NextCoursesData;
