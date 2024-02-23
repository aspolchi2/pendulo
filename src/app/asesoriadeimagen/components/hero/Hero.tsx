import { Lexend } from "next/font/google";
import React from "react";

type props = {
  bg: string;
  title: string;
  span: string;
  text: string;
  extra?: string;
};
const lexend = Lexend({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const Hero = ({ bg, span, text, title, extra }: props) => {
  return (
    <section
      className={`${bg} ${lexend.className} h-[842px] bg-no-repeat bg-cover bg-blend-multiply bg-center h-screen `}
    >
      <div className="w-full h-full flex items-center ">
        <div className="ml-40 flex flex-col gap-6 ">
          <h1 className="text-8xl font-black text-yellow leading-[95px]">
            {title} <br /> <span className=""> {span}</span>{" "}
          </h1>
          <p className="text-white text-3xl leading-3 max-w-xl">{text}</p>
          <p className="text-white text-2xl">{extra}</p>
          <button className="text-white  bg-primary rounded-xl font-bold text-[28px] w-[269.749px] h-[60px] flex-shrink: 0; ">
            INSCRIBIRME
          </button>
        </div>
      </div>
    </section>
  );
};
