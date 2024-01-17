import React from "react";

export const Hero = ({ bg }: { bg: string }) => {
  return (
    <section
      className={`${bg}  h-[842px] bg-no-repeat bg-cover bg-blend-multiply `}
    >
      <div className="w-full h-full flex items-center ">
        <div className="w-[709px] ml-40 flex flex-col gap-6 ">
          <h1 className="text-6xl text-white">
            ASESORÍA DE <span className="text-[140px] font-black ">Imagen</span>{" "}
          </h1>
          <p className="text-white text-4xl">CAPACITACÍON PROFESIONAL</p>
          <button className="text-white p-1 bg-primary rounded-[20px] font-bold text-[28px] w-[269.749px] h-[75.2px] flex-shrink: 0; ">
            INSCRIBIRME
          </button>
        </div>
      </div>
    </section>
  );
};
