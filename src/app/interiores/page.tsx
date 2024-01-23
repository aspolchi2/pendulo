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

const lexend = Lexend({ subsets: ["latin"] });

export default function Home() {
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
  return (
    <div className={lexend.className}>
      <Hero
        bg="bg-interioresBg"
        span="Interior"
        title="Diseño"
        text="CAPACITACIÓN PROFESIONAL"
      />
      <Modalidad images={interioresArray} />
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
    </div>
  );
}
