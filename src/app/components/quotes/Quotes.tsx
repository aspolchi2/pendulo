import Image from "next/image";
import React from "react";
import leftCoute from "@/../public/images/leftcoutes.png";
import rightCoute from "@/../public/images/rightcuotes.png";
import { hepta_slab } from "@/app/layout";
export const Quotes = ({
  text,
  bg,
  color,
}: {
  text: string;
  bg: string;
  color: string;
}) => {
  return (
    <div className={`${bg}`}>
      <div className="py-72 w-10/12 m-auto">
        <div className="w-full relative flex ">
          <Image
            src={leftCoute}
            alt="leftCoute "
            className="absolute -left-10 -top-10"
          />
          <p
            className={`${hepta_slab.className}  ${color} z-20 text-center text-3xl w-11/12 m-auto`}
            dangerouslySetInnerHTML={{ __html: text }}
          />

          <Image
            src={rightCoute}
            alt="leftCoute "
            className="absolute -right-10 -top-10"
          />
        </div>
      </div>
    </div>
  );
};
