"use client";
import Image from "next/image";
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
import ModulesGrafico from "./ModulesGrafico";
import first from "/public/images/grafico1.png";
import second from "/public/images/grafico2.png";
import third from "/public/images/grafico3.png";
import graficoSep from "/public/images/graficoSep.png";
import { Offering } from "../components/offering/Offering";
import JoinUs from "../asesoriadeimagen/components/joinUs/JoinUs";
import NextCoursesData from "../asesoriadeimagen/nextCourses/NextCoursesData";
import Modality from "../asesoriadeimagen/components/modality/Modality";
import {
  dataGrafico,
} from "../asesoriadeimagen/components/modality/data";
import Teacher from "../asesoriadeimagen/components/teacher/Teacher";
import TeacherGrafico from "./TeacherGrafico";
import { CoursesFrame } from "../components/courses/CoursesFrame";

export default function Home() {
  const { booleanValue } = useBooleanStore();
  const imagesForModalidad = [
    { image: first },
    { image: second },
    { image: third },
  ];
  const formacion = (
    <p className="text-white text-center">
      FORMACION <br /> ANUAL
    </p>
  );

  return (
    <main className="overflow-x-hidden ">
      <Hero
        bg="sm:bg-diseno bg-graficoMobile"
        title="Diseño"
        text="HERRAMIENTAS + FUNDAMENTOS"
        span="Gráfico"
        extra="CAPACITACION PROFESIONAL"
      />
      <Modalidad images={imagesForModalidad} formacion={formacion} />

      <Description />
      <ModulesGrafico />
      <div className="w-screen">
        <Image
          src={graficoSep.src}
          alt="grafico"
          width={2000}
          height={1100}
          className="w-screen"
        />
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
      <Interesed filter={2} />
      <Footer />
    </main>
  );
}
