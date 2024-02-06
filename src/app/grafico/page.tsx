"use client";
import { Hero } from "../asesoriadeimagen/components/hero/Hero";
import { Interesed } from "../asesoriadeimagen/components/interesed/Interesed";
import Modalidad from "../asesoriadeimagen/components/modalidad/Modalidad";
import { PriceArg } from "../asesoriadeimagen/components/price/PriceArg";
import PriceOutside from "../asesoriadeimagen/components/price/PriceOutside";
import { Footer } from "../components/footer";
import { Stadistics } from "../components/stadistics/Stadistics";
import { Testimonials } from "../components/testimonials/Testimonials";
import useBooleanStore from "../zustand/useBooleanStore";
import Description from "./Description";
import first from "/public/images/grafico1.png";
import second from "/public/images/grafico2.png";
import third from "/public/images/grafico3.png";

export default function Home() {
  const { booleanValue } = useBooleanStore();
  const imagesForModalidad = [
    { image: first },
    { image: second },
    { image: third },
  ];

  return (
    <main>
      <Hero
        bg="bg-diseno"
        title="Diseño"
        text="HERRAMIENTAS + FUNDAMENTOS"
        span="Gráfico"
        extra="CAPACITACION PROFESIONAL"
      />
      <Modalidad images={imagesForModalidad} />
      <Description />

      {booleanValue && (
        <>
          <PriceArg />
          <PriceOutside />
        </>
      )}
      <Stadistics />
      <Testimonials />
      <Interesed isFilter filter={2} />
      <Footer />
    </main>
  );
}
