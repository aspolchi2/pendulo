"use client";
import React, { useContext } from "react";
import { PriceInfo } from "./PriceInfo";
import { CardProp, PriceCard } from "./PriceCard";
import useBooleanStore from "@/app/zustand/useBooleanStore";
import { Hepta_Slab } from "next/font/google";
export type priceType = {
  title: string;
  description: string;
  cards: any;
};

const hepta_slab = Hepta_Slab({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const descOne = (
  <p
    className={`${hepta_slab.className} lg:text-lg leading-6 font-medium  text-black`}
  >
    {" "}
    Se podrá abonar con tarjeta de débito, tarjeta de crédito hasta{" "}
    <span className="font-extrabold"> 12 cuotas sin interés de $7.900</span>,
    efectivo y dinero disponible en cuenta de MercadoPago.
  </p>
);

const descTwo = (
  <p
    className={`${hepta_slab.className} lg:text-lg leading-6 font-medium text-black`}
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
    className={`${hepta_slab.className} lg:text-lg leading-6 font-medium text-black`}
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
    fee: "9 CUOTAS DE $35.000",
    desc: descOne,
    goTo: "#",
    textColor: "text-primary",
    bgColor: "bg-primary",
  },
  {
    id: 2,
    fee: "12 CUOTAS DE $19.000",
    desc: descTwo,
    goTo: "#",
    textColor: "text-primary",
    bgColor: "bg-primary",
  },
  {
    id: 3,
    fee: "UN PAGO DE $95.000",
    desc: descThree,
    goTo: "#",
    textColor: "text-primary",
    bgColor: "bg-primary",
  },
];

export const PriceArg = () => {
  const desc = (
    <p className="text-2xl text-center w-11/12 m-auto">
      Para mayor facilidad, ofrecemos las siguientes opciones y planes de pago:
    </p>
  );

  return (
    <section className="max-h-full  opacity-100 p-28 transition-opacity  duration-500 ">
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
