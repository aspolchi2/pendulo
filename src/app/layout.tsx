import type { Metadata } from "next";
import { Lexend, Hepta_Slab } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "600", "800"] });
export const hepta_slab = Hepta_Slab({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Péndulo",
  description:
    "Ampliá tu horizonte de posibilidades personales & profecionales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
