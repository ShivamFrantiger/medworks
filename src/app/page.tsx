"use client";

import { Inter, Raleway } from "next/font/google";
import { useActiveSection } from "@/components/ui/helpers";
import { Marquee } from "@/components/ui/Marquee";
import {
  Contact,
  Features,
  Footer,
  Hero,
  HowItWorks,
  Navbar,
  Technology,
} from "@/components/sections";
import { SECTION_IDS } from "@/data/content";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function Page() {
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <div
      className={`${raleway.variable} ${inter.variable} min-h-screen bg-[#F7F7F8] font-[family-name:var(--font-inter)] text-[#0E0E10] antialiased selection:bg-[#0A5CFF] selection:text-white`}
    >
      <Navbar activeId={activeId} />
      <main>
        <Hero />
        <Marquee text="Our Technology" />
        <Features />
        <Technology />
        <HowItWorks />
        <Contact />
        <Marquee text="Start Program Now" />
      </main>
      <Footer />
    </div>
  );
}
