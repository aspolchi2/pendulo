import Image from "next/image";
import { Hero } from "./components/hero/Hero";
import Modalidad from "./components/modalidad/Modalidad";
import Modules from "./components/modules/Modules";
import Questions from "./components/questions/Questions";
import fotis from "@/../public/images/fotis.png";
import Modality from "./components/modality/Modality";
import Teacher from "./components/teacher/Teacher";
import { Offering, Price } from "../components";
import JoinUs from "./components/joinUs/JoinUs";
import { lexend } from "../layout";
import NextCourses from "./nextCourses/NextCourses";
import NextCoursesData from "./nextCourses/NextCoursesData";

export default function Home() {
  return (
    <main className={lexend.className}>
      <Hero />
      <Modalidad />
      <Questions />
      <Modules />
      <Image
        src={fotis.src}
        alt="fotos de una chica con remera a rayas"
        width={1440}
        height={569}
        className="w-full"
      />
      <Modality />
      <Teacher />
      <Offering />
      <JoinUs />
      <NextCoursesData />
      <Price />
    </main>
  );
}
