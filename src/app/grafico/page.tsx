"use client";
import Image from "next/image";
import { Hero } from "../asesoriadeimagen/components/hero/Hero";
import { Interesed } from "../asesoriadeimagen/components/interesed/Interesed";
import Modalidad from "../asesoriadeimagen/components/modalidad/Modalidad";
import Modules from "../asesoriadeimagen/components/modules/Modules";
import { graficoModuleOne } from "../asesoriadeimagen/components/modules/data";
import { PriceArg } from "../asesoriadeimagen/components/price/PriceArg";
import PriceOutside from "../asesoriadeimagen/components/price/PriceOutside";
import { Footer } from "../components/footer";
import { Stadistics } from "../components/stadistics/Stadistics";
import { Testimonials } from "../components/testimonials/Testimonials";
import useBooleanStore from "../zustand/useBooleanStore";
import Description from "./Description";
import ModulesGrafico from "./ModulesGrafico";
import first from "/public/images/grafico1.png";
import second from "/public/images/grafico2.png";
import third from "/public/images/grafico3.png";
import graficoSep from "/public/images/graficoSep.png";
import taniaPaez from "/public/images/taniaPaez.png";
import { Offering } from "../components/offering/Offering";
import JoinUs from "../asesoriadeimagen/components/joinUs/JoinUs";
import NextCoursesData from "../asesoriadeimagen/nextCourses/NextCoursesData";
import Modality from "../asesoriadeimagen/components/modality/Modality";
import {
  dataAsesoria,
  dataGrafico,
} from "../asesoriadeimagen/components/modality/data";
import Teacher from "../asesoriadeimagen/components/teacher/Teacher";
import TeacherGrafico from "./TeacherGrafico";

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
      <ModulesGrafico />
      <div className="w-screen">
        <Image src={graficoSep.src} alt="grafico" width={2000} height={1100} />
      </div>
      <Modality text={dataGrafico} extra />
      <TeacherGrafico />

      <Offering />
      <JoinUs />
      <NextCoursesData />

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
