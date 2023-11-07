import React from "react";
import { ParticipateCard } from "./ParticipateCard";
import { Laptop } from "../svg/Laptop";
import { Sobre } from "../svg/Sobre";

const data = [
  {
    id: crypto.randomUUID(),
    svg: <Laptop />,
    description:
      "Computadora o dispositivo </br> que cuente con conexión </br>a Internet, en lo posible con  </br> cámara y micrófono activados.",
  },
  {
    id: crypto.randomUUID(),
    svg: <Sobre />,
    description:
      "Dirección de correo electrónico </br> donde se recibirán los datos de </br> acceso al curso y comunicados </br> oficiales de la escuela.",
  },
];

export const Participate = () => {
  return (
    <section className="bg-primary">
      <div className="w-10/12 m-auto pt-14">
        <div>
          <h3 className="text-white text-2xl">
            ¿CÓMO LO ESTAMOS CONSIGUIENDO?
          </h3>
          <hr className="text-white mt-5" />
          <div className="flex gap-9 w-full justify-center mt-20 pb-28">
            {data.map((item) => (
              <ParticipateCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
