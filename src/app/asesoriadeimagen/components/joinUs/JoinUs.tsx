import { lexend } from "@/app/layout";
import React from "react";

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
