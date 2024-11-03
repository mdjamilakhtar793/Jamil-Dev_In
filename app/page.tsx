"use client";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Clients from "../components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { OrbitingCirclesDemo } from "@/components/OrbitingCircle";
import { FeaturesSection } from "@/components/FeatureSection";
import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";
import { BentoGridThirdDemo } from "@/components/BentoGridDemo";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNavbar navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Clients />
        <Experience />
        <OrbitingCirclesDemo />
        <FeaturesSection />
        <BentoGridThirdDemo />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
