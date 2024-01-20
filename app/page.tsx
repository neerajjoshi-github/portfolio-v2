"use client";
import AboutMeSection from "@/components/AboutMeSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import ContactSection from "@/components/ContactSection";
import StarsBackground from "@/components/StarsBackground";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <StarsBackground />
      <Header />
      <div className="w-full flex flex-col items-center overflow-hidden relative">
        <div className="w-full max-w-[1200px] flex flex-col z-[1]">
          <HeroSection />
          <AboutMeSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </>
  );
};

export default Home;
