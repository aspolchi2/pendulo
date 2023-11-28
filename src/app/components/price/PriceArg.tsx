import React from "react";
import { PriceInfo } from "./PriceInfo";
import { CardProp, PriceCard } from "./PriceCard";
import { hepta_slab } from "@/app/layout";
export type priceType = {
  title: string;
  description: string;
  cards: any;
};

const descOne = (
  <p
    className={`${hepta_slab.className} text-lg leading-6 font-medium  text-black`}
  >
    {" "}
    Se podrá abonar con tarjeta de débito, tarjeta de crédito hasta{" "}
    <span className="font-extrabold"> 12 cuotas sin interés de $7.900</span>,
    efectivo y dinero disponible en cuenta de MercadoPago.
  </p>
);

const descTwo = (
  <p
    className={`${hepta_slab.className} text-lg leading-6 font-medium text-black`}
  >
    La cuota{" "}
    <span className="font-extrabold">
      se debitará de forma automática mes a mes durante 6 meses
    </span>{" "}
    a través de la tarjeta de débito, crédito o cuenta adherida.
  </p>
);
const descThree = (
  <p
    className={`${hepta_slab.className} text-lg leading-6 font-medium text-black`}
  >
    En caso de elegir pagar en cuotas las mismas{" "}
    <span className="font-extrabold">
      se abonan del 1 al 10 de cada mes, durante 6 meses consecutivos.
    </span>
  </p>
);

const cardData: CardProp[] = [
  {
    id: 1,
    fee: "12 CUOTAS DE $7.900",
    desc: descOne,
    goTo: "#",
    textColor: "text-primary",
    bgColor: "bg-primary",
  },
  {
    id: 2,
    fee: "6 CUOTAS DE $15.800",
    desc: descTwo,
    goTo: "#",
    textColor: "text-primary",
    bgColor: "bg-primary",
  },
  {
    id: 3,
    fee: "UN PAGO DE $59.900",
    desc: descThree,
    goTo: "#",
    textColor: "text-primary",
    bgColor: "bg-primary",
  },
];

export const PriceArg = () => {
  const desc = (
    <p className="text-2xl text-center w-11/12 m-auto">
      El precio de la capacitación profesional{" "}
      <span className="font-bold"> intensiva de 5 meses</span> de duración es de
      <span className="font-bold"> $94.800</span>. Para mayor facilidad,
      ofrecemos las siguientes opciones y planes de pago:
    </p>
  );

  return (
    <section className="p-28">
      <div className="flex flex-col gap-12">
        <PriceInfo
          color="text-primary"
          title="PRECIOS PARA RESIDENTES EN ARGENTINA"
          description={desc}
        />
        <div className="flex gap-6 justify-center">
          {cardData.map((card) => (
            <PriceCard {...card} key={card.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
