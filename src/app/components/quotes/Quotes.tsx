import Image from "next/image";
import React from "react";
import leftCoute from "@/../public/images/leftcoutes.png";
import rightCoute from "@/../public/images/rightcuotes.png";
export const Quotes = ({ bg, children }: { bg: string; children?: any }) => {
  return (
    <div className={`${bg}`}>
      <div className="py-72 w-10/12 m-auto">
        <div className="w-full relative flex ">
          <Image
            src={leftCoute}
            alt="leftCoute "
            className="absolute -left-10 -top-10"
          />
          {children}

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
