import React from "react";
import Image from "next/image";
import { hepta_slab } from "@/app/layout";
import { cardsProps } from ".";
import Link from "next/link";

export const CoursesCard = ({
  id,
  title,
  description,
  image,
  href,
}: cardsProps) => {
  return (
    <article className="bg-white shadow-md flex flex-col  flex-shrink-0 justify-center p-9 ">
      <header>
        <p
          className={`${hepta_slab.className} font-semibold text-[90px] text-gray leading-none`}
        >
          0{id}.
        </p>
      </header>
      <main>
        <h2 className="font-semibold text-primary md:text-4xl sm:text-2xl  w-60">
          {title}
        </h2>
        <p
          className={`${hepta_slab.className} font-normal  text-[13px] w-[228px]  leading-4 h-36  pb-36  pt-[14px]`}
        >
          {description}
        </p>
        <Image
          src={image}
          alt="image"
          width={230}
          height={170}
          className="pb-7"
        />
      </main>
      <footer>
        <Link
          href={`/${href}`}
          className="flex-shrink-0 bg-primary text-white font-bold text-xl w-full h-11 rounded-lg px-7 py-3   "
        >
          +INFORMACIÓN
        </Link>
      </footer>
    </article>
  );
};
