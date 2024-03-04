import { Lexend } from "next/font/google";
import React from "react";

export const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
  weight: ["400", "700", "300", "500", "600", "800", "900"],
  preload: true,
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const JoinUs = () => {
  return (
    <section
      className={`${lexend.className} bg-primary flex justify-center lexend`}
    >
      <div className="text-white py-36 2xl:text-7xl xl:text-5xl text-3xl text-center ">
        <p className="font-bold">Sumate a nuestra escuela</p>
        <p className=" font-light">
          y amplia tu horizonte de posibilidades <br /> personales &
          profesionales
        </p>
      </div>
    </section>
  );
};

export default JoinUs;
