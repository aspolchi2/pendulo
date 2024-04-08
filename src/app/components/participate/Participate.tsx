import React from "react";
import { ParticipateCard } from "./ParticipateCard";
import { Laptop } from "../svg/Laptop";
import { Sobre } from "../svg/Sobre";

const data = [
  {
    id: crypto.randomUUID(),
    svg: <Laptop fill="white" />,
    description:
      "Computadora o dispositivo </br> que cuente con conexión </br>a Internet, en lo posible con  </br> cámara y micrófono activados.",
  },
  {
    id: crypto.randomUUID(),
    svg: <Sobre fill="white" />,
    description:
      "Dirección de correo electrónico </br> donde se recibirán los datos de </br> acceso al curso y comunicados </br> oficiales de la escuela.",
  },
];

export const Participate = () => {
  return (
    <section className="bg-primary">
      <div className="w-10/12 m-auto pt-28">
        <div>
          <h3 className="text-white text-2xl">
            ¿QUÉ SE NECESITA PARA PARTICIPAR?
          </h3>
          <hr className="text-white mt-5" />
          <div className="flex gap-9 w-full justify-center mt-20 pb-28 flex-col sm:flex-row">
            {data.map((item) => (
              <ParticipateCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
