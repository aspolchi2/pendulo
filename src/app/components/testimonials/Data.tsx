import julietaGalzadet from "public/images/julietaGalzadet.png";
import dianMaldonado from "public/images/dianMaldonado.png";
import soledadCerisola from "public/images/soledadCerisola.png";
import { StaticImageData } from "next/image";

export type card = {
    id: number;
  pic: StaticImageData;
  name: string;
  course: string;
  testimonial: string;
};

export const cards: card[] = [
  {
    id: 1,
    pic: julietaGalzadet,
    name: "Julieta Galzadet",
    course: "Diseño de Interiores",
    testimonial: `Hice el curso de diseño de interiores, me sirvió mucho aprender sobre planos a escala, recomiendo el curso y a Ana, muy cálida y entretenidas sus clases.`,
  },
  {
    id: 2,
    pic: dianMaldonado,
    name: "Dian Maldonado",
    course: "Marketing Digital",
    testimonial: `Participé en el curso online sobre Instagram y tuve una experiencia genial. Se nota la profesionalidad y dedicación que le ponen. Super recomendable! Gracias!!`,
  },
  {
    id: 3,
    pic: soledadCerisola,
    name: "Soledad Cerisola",
    course: "Marketing Digital",
    testimonial: `Excelente experiencia en el curso online de Instagram. Muy completo. Muchas Gracias.`,
  },
];
