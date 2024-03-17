"use client";
import AboutMeSection from "@/components/AboutMeSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import ContactSection from "@/components/ContactSection";
import StarsBackground from "@/components/StarsBackground";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);

      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".planet", {
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: 1,
    });

    tl.to(".inner-ring", {
      scale: 1,
      opacity: 1,
      ease: "circ",
    });

    tl.to(".outer-ring", {
      scale: 1.75,
      opacity: 1,
      duration: 1.2,
      ease: "circ",
    });
  });
  return (
    <>
      <StarsBackground />
      <Header />
      <div className="w-full flex flex-col items-center overflow-hidden relative">
        <div className="w-80 xl:w-[28rem] aspect-square absolute top-7 right-7">
          <Image
            className="planet w-full h-full object-contain opacity-0 scale-90"
            alt=""
            fill
            src="/images/hero/planet.png"
          />
          <Image
            className="inner-ring opacity-0 scale-75 absolute top-0 left-0 w-full h-full object-contain planet-animation"
            alt=""
            fill
            src="/images/hero/moons.png"
          />
          <Image
            className="outer-ring opacity-0 absolute top-0 left-0 w-full h-full object-contain planet-animation-reverse"
            alt=""
            fill
            src="/images/hero/moons.png"
          />
        </div>
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
