import React from "react";
import { PriceInfo } from "./PriceInfo";
import { PriceCard } from "./PriceCard";
export type priceType = {
  title: string;
  description: string;
  cards: any;
};
export const Price = () => {
  const duracion = <span className="font-bold">intensiva de 5 meses</span>;
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
      <div className="">
        <PriceInfo
          title="PRECIOS PARA RESIDENTES EN ARGENTINA"
          description={desc}
        />
        <PriceCard />
      </div>
    </section>
  );
};
