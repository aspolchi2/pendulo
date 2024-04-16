import React from "react";
import marketinDigital from "../../../../public/images/adobe-stock-20554870721.png";
import graphic from "@/app/../../public/images/graphic.png";
import asesoria from "@/app/../../public/images/asesoria.png";
import interiores from "@/app/../../public/images/interiores.png";
import { CoursesCard } from "./CoursesCard";
import Carousel from "../carousel/Carousel";

export type cardsProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
  filter?: boolean;
  isFilter?: boolean;
};

export const cards: cardsProps[] = [
  {
    id: 1,
    href: "marketing",
    title: "Marketing Digital",
    description:
      "Aprende a gestionar las redes sociales y plataformas digitales de una marca o emprendimiento a través del desarrollo de la creatividad y el pensamiento estratégico para lograr tus objetivos.",
    image: marketinDigital.src,
  },
  {
    id: 2,
    href: "grafico",
    title: "Diseño Gráfico",
    description:
      "Inicia tu recorrido en esta apasionante disciplina apren- diendo a usar las herramientas profesionales e incorporando los principales fundamentos de color, diagramación y tipografía necesarios para lograr piezas gráficas increíbles.",
    image: graphic.src,
  },
  {
    id: 3,
    href: "asesoriadeimagen",
    title: "Asesoría de Imagen",
    description:
      "Inicia tu recorrido en el apasio- nante mundo del asesoramiento de imagen aprendiendo a reflejar tu personalidad y estilo o el de otras personas a través de prendas, maquillaje, peinado, estampados, colores.",
    image: asesoria.src,
  },
  {
    id: 4,
    href: "interiores",
    title: "Diseño de Interiores",
    description:
      "Iniciá tu recorrido en esta apasionante disciplina aprendiendo sobre iluminación, estética, color, texturas, planos y proporciones para lograr espacios increíbles y funcionales.",
    image: interiores.src,
  },
];

export const CoursesCardList = ({
  filter,
  isFilter,
}: {
  filter?: number;
  isFilter: boolean;
}) => {
  const filteredCards = filter
    ? cards.filter((card) => card.id !== filter)
    : cards;
  return (
    <>
      <div
        className={`lg:grid gap-4 hidden ${
          filter
            ? "lg:grid-cols-3 xl:grid-cols-3 "
            : "grid-cols-2 2xl:grid-cols-4"
        }`}
      >
        {filteredCards.map((card) => (
          <CoursesCard
            key={card.id}
            id={card.id}
            description={card.description}
            image={card.image}
            title={card.title}
            href={card.href}
            filter
            isFilter={isFilter}
          />
        ))}
      </div>
      <div className="flex justify-center items-center p-8 lg:hidden">
        <div className="w-screen flex justify-center">
          <Carousel
            autoSlide={false}
            color={`${isFilter && "text-white"}`}
            fill={`${isFilter ? "fill-white" : "fill-black"}`}
          >
            {filteredCards.map((card) => (
              <div className="flex justify-center w-8/12 m-auto" key={card.id}>
                <CoursesCard
                  key={card.id}
                  id={card.id}
                  description={card.description}
                  image={card.image}
                  title={card.title}
                  href={card.href}
                  filter
                  isFilter={isFilter}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};
