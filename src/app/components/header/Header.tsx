"use client";
import React, { useState } from "react";
import icon from "../../favicon.ico";
import Image from "next/image";
import Facebook from "../svg/Facebook";
import { Instagram, LinkedIn, Whatsapp } from "../svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";

type linksProp = {
  id: string;
  label: string;
  href: string;
};

const icons = [
  {
    id: crypto.randomUUID(),
    src: <Instagram />,
    link: "https://www.instagram.com/penduloescuela/",
  },
  {
    id: crypto.randomUUID(),
    src: <Facebook />,
    link: "https://www.facebook.com/penduloescuelacreativa",
  },
  {
    id: crypto.randomUUID(),
    src: <LinkedIn />,
    link: "https://www.linkedin.com/company/penduloeescuelacreativa/",
  },
  {
    id: crypto.randomUUID(),
    src: <Whatsapp />,
    link: "https://wa.me/5492216825174",
  },
];

export const Header = ({
  bg,
  position,
  isFooter,
}: {
  bg: string;
  position: string;
  isFooter?: boolean;
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header
      className={`w-full max-w-[1920px] m-auto h-28 flex items-end ${position} ${bg} z-50 `}
    >
      <nav className="flex justify-between w-11/12 m-auto h-full pb-6 z-20">
        <Link href={"/"} className="flex items-end  gap-2 cursor-pointer ">
          <Image
            src={icon.src}
            alt="icon of pendulo"
            width={40}
            height={40}
            className="pb-1 w-8 sm:w-auto"
          />
          <p className="sm:text-3xl font-[600] text-xl">Péndulo</p>
        </Link>
        <ul className="sm:flex gap-10 items-end sm:text-base uppercase text-accent hidden">
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
            {!isFooter && (
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
            )}
          </li>
        </ul>
        <ul className="flex xl:gap-6 gap-2 items-end relative">
          {icons.map(({ id, src, link }) => (
            <li className="" key={id}>
              <a href={link} target="_blank" rel="norefferer" className="">
                {src}
              </a>
            </li>
          ))}
          {!isFooter && (
            <div className="sm:hidden h-9">
              <Hamburger toggled={isNavOpen} size={20} toggle={setIsNavOpen} />
            </div>
          )}
          {isNavOpen && (
            <div className="absolute top-24 left-0 w-full bg-white z-10">
              <ul className="flex flex-col gap-4 p-4">
                <li className="">
                  <Link href={"/"}>propuesta</Link>
                </li>
                <li className="">
                  <Link href={"/historia"}>historia</Link>
                </li>
                <li className="">
                  <Link href={"#testimonios"}>testimonios</Link>
                </li>
                <li className="">
                  <Link href={"#cursos"}>cursos</Link>
                </li>
              </ul>

              <div className="h-px bg-white"></div>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
};
