import Link from "next/link";
import React, { ReactNode } from "react";

export type CardProp = {
  id: number;
  fee: string;
  desc: ReactNode;
  goTo: string;
  bgColor: string;
  textColor: string;
};

export const PriceCard = ({
  id,
  fee,
  desc,
  goTo,
  bgColor,
  textColor,
}: CardProp) => {
  return (
    <article className="shadow-[6px_6px_15px_0px_#00000015]   2xl:p-14 p-6 aspect-[0,75/1] flex flex-col gap-7 justify-center items-center ">
      <header className={`${textColor} self-start`}>
        <p className="text-2xl">OPCIÓN {id}</p>
        <h3 className="text-4xl font-extrabold leading-10 w-64 self-start">
          {fee}
        </h3>
      </header>
      <main className="w-[28ch] h-40 self-start text-black">
        <p className="">{desc}</p>
      </main>
      <footer className="">
        <Link
          href={goTo || "#"}
          className={` ${bgColor} text-white font-bold text-xl  w-full h-11 rounded-lg px-10 py-4 `}
        >
          INSCRIBIRME
        </Link>
      </footer>
    </article>
  );
};
