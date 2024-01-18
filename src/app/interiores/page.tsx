import { Lexend } from "next/font/google";
import { Hero } from "../asesoriadeimagen/components/hero/Hero";

const lexend = Lexend({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={lexend.className}>
      <Hero bg="bg-interioresBg" />
    </div>
  );
}
