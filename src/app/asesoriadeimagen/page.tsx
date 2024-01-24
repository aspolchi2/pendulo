"use client";
import Image from "next/image";
import { Hero } from "./components/hero/Hero";
import Modalidad from "./components/modalidad/Modalidad";
import Modules from "./components/modules/Modules";
import Questions from "./components/questions/Questions";
import fotis from "@/../public/images/fotis.png";
import Modality from "./components/modality/Modality";
import Teacher from "./components/teacher/Teacher";
import {
  Offering,
  PriceArg,
  Stadistics,
  Testimonials,
  WhyPendulo,
} from "../components";
import JoinUs from "./components/joinUs/JoinUs";
import { lexend } from "../layout";
import NextCourses from "./nextCourses/NextCourses";
import NextCoursesData from "./nextCourses/NextCoursesData";
import PriceOutside from "../components/price/PriceOutside";
import { Footer } from "../components/footer";
import { Interesed } from "./components/interesed";
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

export default function Home() {
  const imagesForModalidad = [
    { image: first },
    { image: second },
    { image: third },
  ];

  return (
    <main className={lexend.className}>
      <Hero
        bg="bg-asesoriadeimagen"
        span="de Imagen"
        text="CAPACITACIÓN PROFESIONAL"
        title="Asesoría"
      />
      <Modalidad images={imagesForModalidad} />
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

      <Stadistics />
      <Testimonials />
      <Interesed filter={3} isFilter />
      <Footer />
    </main>
  );
}
