"use client";
import Image from "next/image";
import { Hero } from "../asesoriadeimagen/components/hero/Hero";
import { Interesed } from "../asesoriadeimagen/components/interesed/Interesed";
import JoinUs from "../asesoriadeimagen/components/joinUs/JoinUs";
import Modalidad from "../asesoriadeimagen/components/modalidad/Modalidad";
import { PriceArg } from "../asesoriadeimagen/components/price/PriceArg";
import PriceOutside from "../asesoriadeimagen/components/price/PriceOutside";
import NextCoursesData from "../asesoriadeimagen/nextCourses/NextCoursesData";
import { Footer } from "../components/footer";
import { Offering } from "../components/offering/Offering";
import { Stadistics } from "../components/stadistics/Stadistics";
import { Testimonials } from "../components/testimonials/Testimonials";
import useBooleanStore from "../zustand/useBooleanStore";
import Description from "./Description";
import marketing1 from "/public/images/marketing1.png";
import marketing2 from "/public/images/marketing2.png";
import marketing3 from "/public/images/marketing3.png";
import marketingSep from "/public/images/marketingSep.png";
import melinaQuevedo from "/public/images/melinaQuevedo.png";
import Modality from "../asesoriadeimagen/components/modality/Modality";
import {
  dataGrafico,
  dataMarketing,
} from "../asesoriadeimagen/components/modality/data";
import ModulesGrafico from "../grafico/ModulesGrafico";
import ModulesMarketing from "./ModulesMarketing";
import Teacher from "../asesoriadeimagen/components/teacher/Teacher";

const marketingArray = [
  { image: marketing1 },
  { image: marketing2 },
  { image: marketing3 },
];

const li = (
  <>
    <li>· Social Media Manager. </li>
    <li>· Creadora de contenido creativo y estrategia. </li>
    <li>· Directora creativa de Raster agencia. </li>
    <li>
      · Diseñadora en Comunicación Visual de la Facultad de Artes de la UNLP.
    </li>
  </>
);

export default function Home() {
  const formacion = (
    <p className="text-white text-center">
      FORMACION <br /> ANUAL
    </p>
  );
  const { booleanValue } = useBooleanStore();
  return (
    <main>
      <Hero
        bg="bg-marketingBg"
        title="Marketing "
        span="Digital +"
        text="COMMUNITY MANAGER"
        extra="CAPACITACIÓN PROFESIONAL"
      />
      <Modalidad images={marketingArray} formacion={formacion} />
      <Description />
      <ModulesMarketing />
      <Image
        src={marketingSep}
        alt="marketing"
        width={1920}
        height={800}
        className="w-screen"
      />
      <Modality text={dataMarketing} />
      <Teacher teacher={melinaQuevedo} name={"Melina Quevedo"} li={li} />
      <Offering />
      <JoinUs />
      <NextCoursesData oferta />
      {booleanValue && (
        <>
          <PriceArg />
          <PriceOutside />
        </>
      )}
      <Stadistics />
      <Testimonials />
      <Interesed  filter={1} />
      <Footer />
    </main>
  );
}
