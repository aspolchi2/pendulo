"use client";
import { Lexend } from "next/font/google";
import { Hero } from "../asesoriadeimagen/components/hero/Hero";
import Modalidad from "../asesoriadeimagen/components/modalidad/Modalidad";
import interiores1 from "../../../public/images/interior1.png";
import interiores2 from "../../../public/images/interior2.png";
import interiores3 from "../../../public/images/interior3.png";
import Questions from "./components/Questions";
import Modules from "../asesoriadeimagen/components/modules/Modules";
import {
  interiorModuleOne,
  interiorModuleTwo,
  interiorTextModule,
} from "../asesoriadeimagen/components/modules/data";
import Image from "next/image";
import interiorfoto from "public/images/interiorfoto.png";
import Modality from "../asesoriadeimagen/components/modality/Modality";
import { dataInterior } from "../asesoriadeimagen/components/modality/data";
import Teacher from "../asesoriadeimagen/components/teacher/Teacher";
import {
  extraTextTeacher,
  liInteriores,
  natalia,
  teacherInteriores,
} from "../asesoriadeimagen/components/teacher/data";
import { Footer } from "../components/footer";
import JoinUs from "../asesoriadeimagen/components/joinUs/JoinUs";
import NextCoursesData from "../asesoriadeimagen/nextCourses/NextCoursesData";
import PriceOutside from "../asesoriadeimagen/components/price/PriceOutside";
import useBooleanStore from "../zustand/useBooleanStore";
import { PriceArg } from "../asesoriadeimagen/components/price/PriceArg";
import { Offering } from "../components/offering/Offering";
import { Stadistics } from "../components/stadistics/Stadistics";
import { Testimonials } from "../components/testimonials/Testimonials";
import { Interesed } from "../asesoriadeimagen/components/interesed/Interesed";

const lexend = Lexend({ subsets: ["latin"] });

export default function Interiores() {
  const { toggle, booleanValue } = useBooleanStore();

  const interioresArray = [
    {
      image: interiores1,
    },
    {
      image: interiores2,
    },
    {
      image: interiores3,
    },
  ];

  const formacion = (
    <p className="text-white text-center">
      FORMACION <br /> ANUAL
    </p>
  );
  return (
    <div className={`${lexend.className} max-w-[1920px] m-auto`}>
      <Hero
        bg="md:bg-interioresBg bg-interioresMobileHero"
        title="Diseño"
        span="Interior"
        text="CAPACITACIÓN PROFESIONAL"
      />
      <Modalidad images={interioresArray} formacion={formacion} />
      <Questions />
      <Modules
        moduleOne={interiorModuleOne}
        moduleTwo={interiorModuleTwo}
        text={interiorTextModule}
      />
      <Image
        src={interiorfoto}
        alt="interior"
        width={1660}
        height={1000}
        className="w-[100vw]"
      />
      <Modality text={dataInterior} />
      <Teacher
        li={liInteriores}
        name={teacherInteriores}
        teacher={natalia}
        extraText={extraTextTeacher}
      />
      <Offering />
      <Stadistics />
      <JoinUs />
      <NextCoursesData oferta />
      {booleanValue && (
        <>
          {" "}
          <PriceArg />
          <PriceOutside />{" "}
        </>
      )}{" "}
      <Testimonials />
      <Interesed filter={4} />
      <Footer />
    </div>
  );
}
