import { Hepta_Slab } from "next/font/google";
import { Hero } from "../asesoriadeimagen/components/hero/Hero";
import { Quotes, Stadistics, Testimonials, WhyPendulo } from "../components";
import HistoriaHero from "./HistoriaHero";
import NuevaHistoria from "./nuevaHistoria/NuevaHistoria";
import HistoriaSep from "./separator/HistoriaSep";
import Founders from "./founders/Founders";
import { Interesed } from "../asesoriadeimagen/components/interesed";
import { Footer } from "../components/footer";

const hepta_slab = Hepta_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export default function Page() {
  const Text = () => {
    return (
      <p
        className={`${hepta_slab.className}  text-white z-20 text-center text-3xl w-11/12 m-auto`}
      >
        Creemos que la <span className="font-semibold">magia </span> surge en la{" "}
        <span className="font-semibold">intersección de diversos mundos </span>{" "}
        aparentemente distintos
      </p>
    );
  };

  return (
    <main>
      <HistoriaHero />
      <NuevaHistoria />
      <HistoriaSep />
      <WhyPendulo />
      <Quotes bg="bg-black">
        {" "}
        <Text />
      </Quotes>
      <Founders />
      <Stadistics />
      <Testimonials />
      <Interesed filter={6} isFilter />
      <Footer/>
    </main>
  );
}
