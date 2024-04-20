"use client";
import Image from "next/image";
import { Hero } from "./components/hero/Hero";
import Modalidad from "./components/modalidad/Modalidad";
import Modules from "./components/modules/Modules";
import Questions from "./components/questions/Questions";
import fotis from "@/../public/images/fotis.png";
import Modality from "./components/modality/Modality";
import Teacher from "./components/teacher/Teacher";
import JoinUs from "./components/joinUs/JoinUs";
import { lexend } from "../layout";
import NextCoursesData from "./nextCourses/NextCoursesData";
import PriceOutside from "./components/price/PriceOutside";
import { Footer } from "../components/footer";
import first from "public/images/firstModalidad.png";
import second from "public/images/secondModalidad.png";
import third from "public/images/thirdModalidad.png";
import { moduleOne, moduleTwo, textModule } from "./components/modules/data";
import { dataAsesoria } from "./components/modality/data";
import {
  claudia,
  liAsesoria,
  teacherAsesoria,
} from "./components/teacher/data";
import useBooleanStore from "../zustand/useBooleanStore";
import { PriceArg } from "./components/price/PriceArg";
import { Stadistics } from "../components/stadistics/Stadistics";
import { Testimonials } from "../components/testimonials/Testimonials";
import { Offering } from "../components/offering/Offering";
import { Interesed } from "./components/interesed/Interesed";

export default function Home() {
  const imagesForModalidad = [
    { image: first },
    { image: second },
    { image: third },
  ];

  const { booleanValue } = useBooleanStore();

  const formacion = (
    <p className="text-white text-center">
      FORMACION <br /> ANUAL
    </p>
  );

  return (
    <main className={lexend.className}>
      <Hero
        bg="sm:bg-asesoriadeimagen bg-asesoriaMobileHero"
        span="de Imagen"
        text="CAPACITACIÓN PROFESIONAL"
        title="Asesoría"
        itemsPosition="items-end pb-20"
      />
      <Modalidad images={imagesForModalidad} formacion={formacion} />
      <Questions />
      <Modules
        moduleOne={moduleOne}
        moduleTwo={moduleTwo}
        show
        text={textModule}
      />
      <Image
        src={fotis.src}
        alt="fotos de una chica con remera a rayas"
        width={1440}
        height={569}
        className="w-full"
      />
      <Modality text={dataAsesoria} />
      <Teacher li={liAsesoria} teacher={claudia} name={teacherAsesoria} />
      <Offering />
      <JoinUs />
      <NextCoursesData />
      {booleanValue && (
        <>
          {" "}
          <PriceArg />
          <PriceOutside />{" "}
        </>
      )}
      <Stadistics />
      <Testimonials />
      <Interesed filter={3}  />
      <Footer />
    </main>
  );
}
