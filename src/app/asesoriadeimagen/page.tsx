import Image from "next/image";
import { Hero } from "./components/hero/Hero";
import Modalidad from "./components/modalidad/Modalidad";
import Modules from "./components/modules/Modules";
import Questions from "./components/questions/Questions";
import fotis from '@/../public/images/fotis.png'
import Modality from "./components/modality/Modality";


export default function Home() {
  return (
    <main>
      <Hero />
      <Modalidad />
      <Questions />
      <Modules />
     
      <Image src={fotis.src} alt="fotos de una chica con remera a rayas" width={1440} height={569} className="w-full"/>
      <Modality />
    </main>
  );
}
  