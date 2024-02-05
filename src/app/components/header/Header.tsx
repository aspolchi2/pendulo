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

const links: linksProp[] = [
  {
    id: crypto.randomUUID(),
    label: "propuesta",
    href: "/propuesta",
  },
  {
    id: crypto.randomUUID(),
    label: "historia",
    href: "/historia",
  },
  {
    id: crypto.randomUUID(),
    label: "testimonios",
    href: "#testimonios",
  },
  {
    id: crypto.randomUUID(),
    label: "cursos",
    href: "#cursos",
  },
];

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
        <Link href={'/'} className="flex items-end  gap-2 cursor-pointer">
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
          {links.map(({ id, href, label }) => (
            <li className="" key={id}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
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
