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
  WhyPendulo,
} from "./components";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <CoursesFrame />
      <WhyPendulo />
      <Accomplish/>
      <AchievedFrame />
      <Offering/>
    </main>
  );
}
