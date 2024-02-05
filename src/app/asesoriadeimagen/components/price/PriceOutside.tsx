import React from "react";
import { PriceInfo } from "./PriceInfo";
import { CardProp, PriceCard } from "./PriceCard";
import { hepta_slab } from "@/app/layout";
import useBooleanStore from "@/app/zustand/useBooleanStore";

const descOne = (
  <p className={`${hepta_slab.className} text-lg leading-6 font-medium`}>
    {" "}
    La cuota se{" "}
    <span className="font-extrabold">
      {" "}
      se debitará de forma automática mes a mes durante 6 meses
    </span>
    de la tarjeta de adherida.
  </p>
);

const descTwo = (
  <p className={`${hepta_slab.className} text-lg leading-6 font-medium`}>
    Se podrá abonar con tarjeta de crédito o dinero disponible en cuenta de
    Paypal.
  </p>
);

const descThree = (
  <p className={`${hepta_slab.className} text-lg leading-6 font-medium`}>
    {" "}
    En caso de elegir pagar en cuotas las mismas{" "}
    <span className="font-extrabold">
      {" "}
      se abonan del 1 al 10 de cada mes, durante 6 meses consecutivos.
    </span>
  </p>
);

const cardData: CardProp[] = [
  {
    id: 1,
    fee: "9 CUOTAS DE $48 USD",
    desc: descOne,
    goTo: "#",
    bgColor: "bg-pink",
    textColor: "text-pink",
  },
  {
    id: 2,
    fee: "12 PAGO DE $29 USD",
    desc: descTwo,
    goTo: "#",
    bgColor: "bg-pink",
    textColor: "text-pink",
  },
  {
    id: 3,
    fee: "1 PAGO DE $290 USD",
    desc: descThree,
    goTo: "#",
    bgColor: "bg-pink",
    textColor: "text-pink",
  },
];

const PriceOutside = () => {
  const { booleanValue } = useBooleanStore();
  const desc = (
    <p className="text-2xl text-center w-11/12 m-auto">
      El precio de la capacitación profesional{" "}
      <span className="font-bold"> intensiva de 5 meses</span> de duración es de
      <span className="font-bold"> $290 USD</span>. Para mayor facilidad,
      ofrecemos las siguientes opciones y planes de pago:
    </p>
  );

  return (
    <section
      className={`
          max-h-full  opacity-100 p-28 transition-opacity  duration-500 `}
    >
      <div className="flex flex-col gap-12">
        <PriceInfo
          color="text-pink"
          title="PRECIOS PARA RESIDENTES FUERA DE ARGENTINA"
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

export default PriceOutside;
