"use client";
import React from "react";
import icon from "../../favicon.ico";
import Image from "next/image";
import Facebook from "../svg/Facebook";
import { Instagram, LinkedIn, Whatsapp } from "../svg";
import { useRouter } from "next/navigation";
import Link from "next/link";

type linksProp = {
  id: string;
  label: string;
  href: string;
};



const icons = [
  {
    id: crypto.randomUUID(),
    src: <Instagram />,
  },
  {
    id: crypto.randomUUID(),
    src: <Facebook />,
  },
  {
    id: crypto.randomUUID(),
    src: <LinkedIn />,
  },
  {
    id: crypto.randomUUID(),
    src: <Whatsapp />,
  },
];

export const Header = ({ bg, position }: { bg: string; position: string }) => {
  const router = useRouter();
  return (
    <header className={`w-full  h-28 flex items-end ${position} ${bg} z-50 `}>
      <nav className="flex justify-between w-11/12 m-auto h-full pb-6 z-20">
        <Link href={"/"} className="flex items-end  gap-2 cursor-pointer">
          <Image
            src={icon.src}
            alt="icon of pendulo"
            width={40}
            height={40}
            className="pb-1"
          />
          <p className="text-3xl font-[600]">Péndulo</p>
        </Link>
        <ul className="flex gap-10 items-end text-[1.125rem] uppercase text-accent">
          <li className="">
            <Link href={"/"}>propuesta</Link>
          </li>
          <li className="">
            <Link href={"/historia"}>historia</Link>
          </li>
          <li className="">
            <Link href={"#testimonios"}>testimonios</Link>
          </li>
          <li className="relative group">
            <Link href="#cursos" className="">
              cursos
            </Link>
            <div className="absolute hidden  space-y-2 bg-white border group-hover:block rounded-md w-40">
              <Link
                href="/interiores"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink hover:text-white"
              >
                Diseño de Interiores
              </Link>
              <Link
                href="/grafico"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink hover:text-white"
              >
                Diseño Gráfico
              </Link>
              <Link
                href="/marketing"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink hover:text-white"
              >
                Marketing Digital
              </Link>
              <Link
                href="/asesoriadeimagen"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink hover:text-white"
              >
                Asesoría de Imagen
              </Link>
            </div>
          </li>
        </ul>
        <ul className="flex gap-6 items-end">
          {icons.map(({ id, src }) => (
            <li className="" key={id}>
              {src}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
