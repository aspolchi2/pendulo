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
      <PriceArg />
      <PriceOutside />
      <Stadistics />
      <Testimonials />
      <Interesed filter={3} isFilter />
      <Footer />
    </main>
  );
}
