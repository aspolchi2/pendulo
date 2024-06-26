import Link from "next/link";
import React, { ReactNode } from "react";
import { hepta_slab } from "./PriceOutside";
import { lexend } from "../joinUs/JoinUs";

export type CardProp = {
  id: number;
  fee: string;
  desc: ReactNode;
  goTo: string;
  bgColor: string;
  textColor: string;
  cardBgColor?: string;
};

export const PriceCard = ({
  id,
  fee,
  desc,
  goTo,
  bgColor,
  textColor,
  cardBgColor = "bg-white",
}: CardProp) => {
  return (
    <article
      className={`shadow-[6px_6px_15px_0px_#00000015] max-w-72 m-auto  2xl:p-14 xl:p-6 p-4 aspect-[0,75/1] flex flex-col gap-7 justify-center items-center min-h-[450px] ${cardBgColor}`}
    >
      <header className={`${textColor} self-start`}>
        <p className={`${lexend.className} text-2xl`}>OPCIÓN {id}</p>
        <h3 className="lg:text-4xl sm:text-2xl text-lg  font-extrabold lg:leading-10 lg:w-64 self-start">
          {fee}
        </h3>
      </header>
      <main
        className={` ${hepta_slab.className} h-40 self-start text-black sm:text-base`}
      >
        {desc}
      </main>
      <footer className="">
        <Link
          href={goTo || "#"}
          className={` ${bgColor} text-white font-bold text-xl  w-full h-11 rounded-lg px-6 py-4 `}
        >
          INSCRIBIRME
        </Link>
      </footer>
    </article>
  );
};
