import { Lexend } from "next/font/google";
import Link from "next/link";
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
  const splitedText = text.split(" + ");
  return (
    <section
      className={`${bg} ${lexend.className} max-h-[842px] bg-no-repeat bg-cover bg-blend-multiply bg-center sm:h-svh h-[530px] `}
    >
      <div className="w-full sm:h-full h-4/6 flex items-center ">
        <div className=" lg:ml-40 md:ml-24 sm:ml-4 ml-3 flex flex-col sm:gap-6 gap-3 ">
          <h1 className="sm:text-8xl text-5xl font-black  text-yellow sm:leading-[95px]">
            {title} <br /> <span className="">{span}</span>{" "}
          </h1>
          <p className="text-white sm:text-3xl sm:leading-3 sm:max-w-xl text-2xl  leading-6 hidden sm:block">
            {text}
          </p>
          <div className="sm:hidden">
            <p className="text-white sm:text-3xl sm:leading-3 sm:max-w-xl text-2xl  leading-6">
              {splitedText[0]}
            </p>
            {splitedText[1] && (
              <p className="text-white sm:text-3xl sm:leading-3 sm:max-w-xl text-2xl  leading-6">
                + {splitedText[1]}
              </p>
            )}
          </div>
          <p className="text-white sm:text-2xl">{extra}</p>
          <Link
            href={"#prices"}
            className="text-white  bg-primary sm:rounded-xl rounded-lg font-bold sm:text-[28px] sm:w-[269.749px] w-32 h-8 text-xs sm:h-[60px]  flex justify-center items-center"
          >
            INSCRIBIRME
          </Link>
        </div>
      </div>
    </section>
  );
};
