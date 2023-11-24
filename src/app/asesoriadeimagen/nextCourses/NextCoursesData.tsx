import React from "react";
import NextCourses from "./NextCourses";

const NextCoursesData = () => {
  const data = {
    Inicio: "Miércoles 16 de Agosto.",
    Horario: "Miércoles de 20:00 a 22:30 </br>/  Hora Argentina.",
    Duración: "20 clases de 2:30 HS </br>/ 50 horas cátedra.",
  };
  return (
    <div>
      <NextCourses data={data} />
    </div>
  );
};

export default NextCoursesData;
