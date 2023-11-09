import Image from "next/image";
import React from "react";
import { Star } from "../svg/Star";
import iaraDuffy from "@/../public/images/iaraDuffy.png";

export const TestimonialsCard = () => {
  //un for del 1 al 5 para poner estrellas

  return (
    <article className="bg-yellow flex flex-col w-[601px] h-[638px] rounded-[40px] justify-center items-center gap-7">
      <header className="flex flex-col items-center gap-6 ">
        <Image
          src={iaraDuffy.src}
          alt=""
          width={250}
          height={250}
          className="w-40"
        />
        <div className="flex flex-col items-center">
          <h3 className="text-3xl">Iara Duffy</h3>
          <p className="text-xl">asesoria de imagen</p>
        </div>
      </header>
      <main className="flex">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </main>
      <footer>
        <p className="w-[46ch] text-center text-xl">
          Muchas gracias a ustedes, fue una experiencia muy interesante y de
          mucha calidad y utilidad. Gracias por proponerla, por la invitación,
          el certificado y la posibilidad de continuar avanzando. Un saludo
          cordial a todos los que organizaron esta jornada y a Meme Quevedo, muy
          copada.
        </p>
      </footer>
    </article>
  );
};
