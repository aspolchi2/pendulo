import { Footer } from "./components/footer";
import { Hepta_Slab } from "next/font/google";
import { Hero } from "./components/Hero/Hero";
import { CoursesFrame } from "./components/courses/CoursesFrame";
import { Accomplish } from "./components/accomplish";
import { AchievedFrame } from "./components/achieved/AchievedFrame";
import { Offering } from "./components/offering/Offering";
import { Participate } from "./components/participate/Participate";
import { Quotes } from "./components/quotes/Quotes";
import { Testimonials } from "./components/testimonials/Testimonials";
import { Stadistics } from "./components/stadistics/Stadistics";

const hepta_slab = Hepta_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const Text = () => {
  return (
    <p
      className={`${hepta_slab.className}  sm:text-white text-black z-20 text-center text-3xl  `}
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
      <Quotes bg="sm:bg-black bg-camel">
        <Text />
      </Quotes>
      <Testimonials />
      <Stadistics />
      <Footer />
    </main>
  );
}
