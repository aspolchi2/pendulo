import React from "react";
import NextCourses from "./NextCourses";

const NextCoursesData = () => {
  const data = {
    "Fecha estimada de inicio": "Miércoles 16 de Agosto.",
    Horario: "Miércoles de 20:00 a 22:30 </br>(Hora de Argentina)",
    Duración: "9 meses",
  };
  return (
    <div>
      <NextCourses data={data} />
    </div>
  );
};

export default NextCoursesData;
