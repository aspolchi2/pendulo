import React from "react";
import marketinDigital from "../../../../public/images/adobe-stock-20554870721.png";
import graphic from "@/app/../../public/images/graphic.png";
import asesoria from "@/app/../../public/images/asesoria.png";
import interiores from "@/app/../../public/images/interiores.png";
import { CoursesCard } from ".";

export type cardsProps = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const cards: cardsProps[] = [
  {
    id: 1,
    title: "Marketing Digital",
    description:
      "Aprende a gestionar las redes sociales y plataformas digitales de una marca o emprendimiento a través del desarrollo de la creatividad y el pensamiento estratégico para lograr tus objetivos.",
    image: marketinDigital.src,
  },
  {
    id: 2,
    title: "Diseño Gráfico",
    description:
      "Inicia tu recorrido en esta apasionante disciplina apren- diendo a usar las herramientas profesionales e incorporando los principales fundamentos de color, diagramación y tipografía necesarios para lograr piezas gráficas increíbles.",
    image: graphic.src,
  },
  {
    id: 3,
    title: "Asesoría de Imagen",
    description:
      "Inicia tu recorrido en el apasio- nante mundo del asesoramiento de imagen aprendiendo a reflejar tu personalidad y estilo o el de otras personas a través de prendas, maquillaje, peinado, estampados, colores.",
    image: asesoria.src,
  },
  {
    id: 4,
    title: "Diseño de Interiores",
    description:
      "Iniciá tu recorrido en esta apasionante disciplina aprendiendo sobre iluminación, estética, color, texturas, planos y proporciones para lograr espacios increíbles y funcionales.",
    image: interiores.src,
  },
];

export const CoursesCardList = () => {
  return (
    <div className="flex gap-4">
      {cards.map((card) => (
        <CoursesCard key={card.id} id={card.id} description={card.description} image={card.image} title={card.title}/>
      ))}
    </div>
  );
};
