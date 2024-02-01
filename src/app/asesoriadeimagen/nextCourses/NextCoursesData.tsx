import React from "react";
import NextCourses from "./NextCourses";

const NextCoursesData = () => {
  const data = {
    "Fecha estimada de inicio": "Lunes 18 de Marzo",
    Horario: "Lunes de 20.30 a 22 </br>(Hora de Argentina)",
    Duración: "9 meses",
  };
  return (
    <div>
      <NextCourses data={data} />
    </div>
  );
};

export default NextCoursesData;
