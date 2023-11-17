import { Hero } from "./components/hero/Hero";
import Modalidad from "./components/modalidad/Modalidad";
import Modules from "./components/modules/Modules";
import Questions from "./components/questions/Questions";

export default function Home() {
  return (
    <main>
      <Hero />
      <Modalidad />
      <Questions />
      <Modules />
    </main>
  );
}
