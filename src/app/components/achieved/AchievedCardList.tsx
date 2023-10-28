import React from "react";
import { AchievedCard } from "./AchievedCard";
import propuestasImg from "@/../public/images/propuestasImg.png";
import actualizacion from "@/../public/images/actualizacion.png";
import enfoque from "@/../public/images/enfoque.png";
import profesores from "@/../public/images/profesores.png";
import duraciones from "@/../public/images/duraciones.png";
import ambiente from "@/../public/images/ambiente.png";
import entorno from "@/../public/images/entorno.png";
import enfasis from "@/../public/images/enfasis.png";
import practicas from "@/../public/images/practicas.png";
import educacion from "@/../public/images/educacion.png";

export type Propuesta = {
  id: any;
  title: string;
  description: string;
  image: string; // Suponiendo que "propuestasImg" es una cadena que contiene la ruta de la imagen
  reappear?: boolean;
};

const data: Propuesta[] = [
  {
    id: "01",
    title: "Propuestas integrales",
    description:
      "Nuestros planes de estudio son desarrollados por educadores con amplia experiencia y formación en el diseño de proyectos pedagógicos para ofrecer una formación sólida e integral.",
    image: propuestasImg.src,
  },
  {
    id: "02",
    title: "Actualización",
    description:
      "Dictamos contenido actualizado, que se va ajustando y mejorando en base a escuchar las necesidades de quienes asisten a los cursos y los cambios de paradigmas sociales.",
    image: actualizacion.src,
  },
  {
    id: "03",
    title: "Enfoque multipotencial",
    description:
      "Ofrecemos una confluencia de distintas áreas del conocimiento para que los estudiantes puedan descubrir nuevas conexiones y soluciones creativas a los desafíos del mundo actual. ",
    image: enfoque.src,
  },
  {
    id: "04",
    title: "Profesores altamente capacitados",
    description:
      "Cada profesor es seleccionado por su experiencia, formación y conocimiento de herramientas didácticas así como por su empatía y dedicación.",
    image: profesores.src,
  },
  {
    id: "05",
    title: "Duraciones de cursos realistas",
    description:
      "La duración de los cursos contempla los tiempos de aprendizaje promedio para la apropiación e implementación del contenido de una forma gradual y constante.",
    image: duraciones.src,
  },
  {
    id: "06",
    title: "Educación centrada en el estudiante",
    description:
      "Consideramos que quienes estudian son una parte fundamental del proceso pedagógico y propiciamos que ocupen un rol activo en su formación.",
    image: educacion.src,
  },
  {
    id: "07",
    title: "Ambiente seguro",
    description:
      "Brindamos un entorno de aprendizaje cálido, empático y disfrutable. Creemos firmemente que el profesionalismo no tiene que ir de la mano con un ambiente hostil o competitivo.",
    image: ambiente.src,
  },
  {
    id: "08",
    title: "Entorno colaborativo",
    description:
      "Ofrecemos un entorno de aprendizaje colectivo que se nutre de la diversidad de miradas a través de la interacción en vivo y los grupos privados de los cursos. ",
    image: entorno.src,
  },
  {
    id: "09",
    title: "Énfasis en la práctica",
    description:
      "Todos los cursos incluyen ejercicios y actividades para que las personas que se están capacitando puedan aplicar lo aprendido desde las primeras clases. ",
    image: enfasis.src,
  },
  {
    id: "10",
    title: "Prácticas profesionalizantes",
    description:
      "Todos los cursos incluyen el desarrollo de un proyecto final integrador donde se implementará todo el contenido abordado en la capacitación permitiendo a quienes participen de los cursos dar a conocer sus habilidades a potenciales clientes o empresas con las que les interese trabajar.",
    image: practicas.src,
  },
];

export const AchievedCardList = () => {
  return (
    <div className="flex flex-col gap-20">
      {data.map((item) => (
        <AchievedCard key={item.id} reappear={false} {...item} />
      ))}
    </div>
  );
};
