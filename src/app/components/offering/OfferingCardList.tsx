import React from "react";
import { OfferingCard } from "./OfferingCard";
import { Red } from "../svg/Red";
import { Camera } from "../svg/Camera";
import { WhatsappLigth } from "../svg/WhatsappLigth";
import { Pdfsvg } from "../svg/Pdfsvg";
import { Credit } from "../svg/Credit";
import { Certificate } from "../svg/Certificate";
import Carousel from "../carousel/Carousel";

export interface MyData {
  id: string;
  svg: JSX.Element;
  title: string;
  description: string;
}

const data: MyData[] = [
  {
    id: crypto.randomUUID(),
    svg: <Red fill="#E05FE0" />,
    title: "CLASES EN VIVO",
    description:
      "Se podrá <strong> interactuar en tiempo real </strong> y resolver las dudas durante la clase con el equipo de aprendizaje.",
  },
  {
    id: crypto.randomUUID(),
    svg: <Camera />,
    title: "CLASES GRABADAS",
    description:
      "Las clases en vivo quedan grabadas y disponibles para verlas en otro momento o cursar de forma asincrónica.",
  },
  {
    id: crypto.randomUUID(),
    svg: <WhatsappLigth />,
    title: "GRUPO PRIVADO",
    description:
      "Quiénes participen tendrán acceso a un grupo donde podrán comunicarse durante la semana <strong>¡Aprender es mejor en comunidad!</strong>",
  },
  {
    id: crypto.randomUUID(),
    svg: <Pdfsvg />,
    title: "MATERIAL <br/> DE ESTUDIO",
    description:
      "Después de cada clase se podrá descargar el <strong>material teórico </strong> desde la plataforma del curso.",
  },
  {
    id: crypto.randomUUID(),
    svg: <Credit />,
    title: "FACILIDADES <br/> DE PAGO",
    description:
      "Aceptamos todos los medios de pago: tarjetas de débito, crédito, transferencia, efectivo, Mercado Pago y Paypal.",
  },
  {
    id: crypto.randomUUID(),
    svg: <Certificate />,
    title: "CERTIFICACIÓN PÉNDULO",
    description:
      "Una vez finalizado el curso se entregará el <strong> certificado de aprobación. </strong> ",
  },
];

export const OfferingCardList = () => {
  return (
    <>
      <div className="sm:grid grid-cols-2 2xl:grid-cols-3 gap-5 place-content-center place-items-center xl:w-9/12 2xl:max-w-7xl m-auto hidden">
        {data.map(({ id, svg, title, description }) => (
          <OfferingCard
            key={id}
            svg={svg}
            title={title}
            description={description}
            id={id}
          />
        ))}
      </div>
      <div className=" w-10/12 m-auto sm:hidden ">
        <Carousel color="text-white" fill="fill-white" text="Ver más">
          {data.map(({ id, svg, title, description }) => (
            <OfferingCard
              key={id}
              svg={svg}
              title={title}
              description={description}
              id={id}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};
