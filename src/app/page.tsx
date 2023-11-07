import Image from "next/image";
import {
  Accomplish,
  AchievedFrame,
  CoursesCard,
  CoursesCardList,
  CoursesFrame,
  Header,
  Hero,
  Offering,
  Participate,
  Quotes,
  WhyPendulo,
} from "./components";
const quote1 =
  "Nos interesan las personas que <strong>se animan a explorar distintas disciplinas y queremos animarlos liberar su potencial </strong>";

const quote2 =
  "CREEMOS QUE LA <strong>MAGIA </strong> SURGE EN LA <strong>INTERSECCIÓN DE DIVERSOS MUNDOS </strong> APARENTEMENTE DISTINTOS";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <CoursesFrame />
      <WhyPendulo />
      <Accomplish />
      <AchievedFrame />
      <Offering />
      <Participate />
      <Quotes text={quote1} bg="bg-white" color="text-black" />
      <Quotes text={quote2} bg="bg-black" color="text-white" />
    </main>
  );
}
