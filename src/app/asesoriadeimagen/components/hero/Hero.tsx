import React from "react";

export const Hero = () => {
  return (
    <section className="bg-asesoriadeimagen  h-[742px] bg-no-repeat bg-cover bg-blend-multiply ">
      <div className="w-full h-full flex items-center ">
      
        <div className="w-[709px] ml-40 flex flex-col  ">
          <h1 className="text-6xl text-white">
            ASESORÍA DE <span className="text-[140px]">IMAGEN</span>{" "}
          </h1>
          <p className="text-white">CAPACITACÍON PROFESIONAL</p>
          <button className="text-white p-1 bg-primary rounded-lg font-bold text-2xl w-64">INSCRIBIRME</button>
        </div>
        </div>
    </section>
  );
};
