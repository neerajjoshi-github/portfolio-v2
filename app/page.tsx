"use client";
import AboutMeSection from "@/components/AboutMeSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import { useEffect } from "react";

const Home = () => {
  // LOCOMOTIVE SCROLL
  // useEffect(() => {
  //   (async () => {
  //     // @ts-ignore
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;

  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);
  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-[1200px] flex flex-col">
          <HeroSection />
          <AboutMeSection />
          <ProjectsSection />
        </div>
      </div>
    </>
  );
};

export default Home;
