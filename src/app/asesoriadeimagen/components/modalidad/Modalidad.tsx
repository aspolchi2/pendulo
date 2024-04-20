import { Calendar } from "@/app/components/svg/Calendar";
import { Codito } from "@/app/components/svg/Codito";
import { Red } from "@/app/components/svg/Red";
import { Thunder } from "@/app/components/svg/Thunder";
import { TrianguloRosa } from "@/app/components/svg/TrianguloRosa";
import Image, { StaticImageData } from "next/image";
import React from "react";

const Modalidad = ({
  images,
  formacion,
}: {
  images: { image: any }[];
  formacion: any;
}) => {
  return (
    <section className="flex flex-col  bg-primary overflow-x-hidden ">
      <div className="bg-primary flex w-11/12 m-auto justify-around items-center sm:h-[350px] h-36 hy font-medium">
        <div className="hidden sm:block w-24 md:w-40 lg:w-52">
          <Codito fill="black" />
        </div>
        <div className="flex flex-col justify-center items-center sm:gap-6   text-xs sm:text-base">
          <div className="w-10 sm:w-auto">
            <Thunder />
          </div>
          <p className="text-white text-center">
            MODALIDAD <br /> REGULAR
          </p>
        </div>
        <div className="flex flex-col justify-center items-center sm:gap-6   text-xs sm:text-base">
          <div className="w-10 sm:w-auto">
            <Calendar />
          </div>
          {formacion}
        </div>
        <div className="flex flex-col justify-center items-center sm:gap-6   text-xs sm:text-base">
          <div className="w-10 sm:w-auto">
            <Red fill="white" />
          </div>
          <p className="text-white text-center">
            100% ONLINE <br /> Y EN VIVO
          </p>
        </div>

        <div className="hidden sm:block w-24 md:w-40 lg:w-52 ">
          <TrianguloRosa fill="black" />
        </div>
      </div>
      <div className="  sm:flex justify-center md:gap-4 sm:gap-2 w-full hidden overflow-x-hidden ">
        {images.map((img: any, index: number) => (
          <Image
            key={index}
            src={img.image}
            alt="imagen generica a cambiar"
            width={517}
            height={576}
            className=" w-[32.5vw] object-cover    flex-shrink: 0; "
          />
        ))}
      </div>
      <div className="grid grid-cols-5 grid-rows-2 sm:hidden gap-1">
        <div className="col-span-2">
          <Image
            src={images[0].image.src}
            width={135}
            height={172}
            className="w-full h-full object-cover"
            alt="fotos de gente trabajando"
          />
        </div>
        <div className="col-span-2 col-start-1 row-start-2">
          <Image
            src={images[1].image.src}
            width={135}
            height={172}
            className="w-full h-full object-cover"
            alt="fotos de gente trabajando"
          />
        </div>
        <div className="col-span-3 row-span-2 col-start-3 row-start-1">
          <Image
            src={images[2].image.src}
            width={234}
            height={400}
            className="w-full h-full object-cover"
            alt="fotos de gente trabajando"
          />
        </div>
      </div>
    </section>
  );
};

export default Modalidad;
