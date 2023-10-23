import Image from "next/image";
import {
  CoursesCard,
  CoursesCardList,
  CoursesFrame,
  Header,
  Hero,
  WhyPendulo,
} from "./components";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <CoursesFrame />
      <WhyPendulo />
    </main>
  );
}
