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
  Stadistics,
  Testimonials,
  WhyPendulo,
} from "./components";
const quote1 =
  "Nos interesan las personas que <strong>se animan a explorar distintas disciplinas y queremos animarlos liberar su potencial </strong>";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <CoursesFrame />
      <WhyPendulo />
      <Accomplish />
      <AchievedFrame />
      <Offering />
      <Participate />
      <Quotes text={quote1} bg="bg-[#F0EBEB]" color="text-black" />
      <Testimonials />
      <Stadistics />
    </main>
  );
}
