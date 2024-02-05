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
import { Footer } from "./components/footer";
import { Hepta_Slab } from "next/font/google";
const quote1 =
  "Nos interesan las personas que <strong>se animan a explorar distintas disciplinas y queremos animarlos liberar su potencial </strong>";

const hepta_slab = Hepta_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const Text = () => {
  return (
    <p
      className={`${hepta_slab.className}  text-white z-20 text-center text-3xl w-11/12 m-auto`}
    >
      Nos interesan las personas que{" "}
      <span className="font-semibold">
        se animan a explorar distintas disciplinas y queremos animarlos liberar
        su potencial
      </span>{" "}
    </p>
  );
};

export default function Home() {
  return (
    <main className="">
      <Hero />
      <CoursesFrame />
      <Accomplish />
      <AchievedFrame />
      <Offering />
      <Participate />
      <Quotes bg="bg-[#F0EBEB]">
        <Text />
      </Quotes>
      <Testimonials />
      <Stadistics />
      <Footer />
    </main>
  );
}
