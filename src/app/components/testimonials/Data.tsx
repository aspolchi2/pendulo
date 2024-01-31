import julietaGalzadet from "public/images/julietaGalzadet.png";
import dianMaldonado from "public/images/dianMaldonado.png";
import soledadCerisola from "public/images/soledadCerisola.png";
import manuelNuñes from "public/images/manuelNuñes.png";
import jimenaDelbueno from "public/images/jimenaDelbueno.png";
import estefaniaCollinet from "public/images/estefaniaCollinet.png";
import betianaRenaud from "public/images/betianaRenaud.png";
import aliciaZitta from "public/images/aliciaZitta.png";
import lucianaAlfonsin from "public/images/lucianaAlfonsin.png";

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
  {
    id: 4,
    pic: manuelNuñes,
    name: "Manuel Nuñes Padilla",
    course: "Varios Cursos",
    testimonial:
      "Super recomendable, tuve la suerte de hacer dos cursos en la escuela y la experiencia fue muy buena, excelente el contenido y mucha dedicación de los profes.",
  },
  {
    id: 5,
    pic: jimenaDelbueno,
    name: "Jimena Delbueno",
    course: "Fotografia",
    testimonial:
      "Recomiendo el curso de fotografía del profesor Lucas Bernal, siempre muy predispuesto, muy claro en sus clases y un excelente grupo. Gracias y volveré.",
  },
  {
    id: 6,
    pic: estefaniaCollinet,
    name: "Estefania Collinet",
    course: "Varios Cursos",
    testimonial:
      "Los cursos son super recomendables, las profesoras que tuve, todas se notaba que sabían mucho de los temas, además crearon un ambiente cálido. ",
  },
  {
    id: 7,
    pic: betianaRenaud,
    name: "Betiana Renaud",
    course: "Diseño de Interiores",
    testimonial:
      "Tomé el curso de diseño de interiores con la profe Ana, quien nos brindó todo su conocimiento en el tema. Aplausos para Péndulo y la organización de esta escuela.",
  },
  {
    id: 8,
    pic: aliciaZitta,
    name: "Alicia Zitta",
    course: "Diseño de Interiores",
    testimonial:
      "Creatividad, dedicación y profesionalismo. Variedad de emprendimientos.",
  },
  {
    id: 9,
    pic: lucianaAlfonsin,
    name: "Luciana Alfonsin",
    course: "Marketing",
    testimonial:
      "Hice el curso de marketing digital en diciembre de 2019, excelente la profe, la forma en que la escuela organiza las clases, la atención y la buena predisposición administrativa.",
  },
];
