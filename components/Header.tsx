"use client";
import { useState, useRef, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/helpers/tailwind-utils";
import Lenis from "@studio-freight/lenis";

export const navLinks = [
  {
    label: "About",
    link: "#about",
  },
  {
    label: "Projects",
    link: "#projects",
  },
  {
    label: "Contact",
    link: "#contact",
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logo = useRef<HTMLImageElement | null>(null);
  const [scrolledPercentage, setScrolledPercentage] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrolledPercentage(scrolled);
    });
  });

  useGSAP(() => {
    gsap.to(logo.current, {
      x: 0,
      duration: 0.6,
    });

    gsap.to(".animated-link", {
      x: 0,
      duration: 0.6,
      opacity: 1,
    });
  });

  const onLinkClick = (link: string) => {
    const target = document.querySelector(link);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="head sticky top-0 left-0 z-50 backdrop-blur-md h-14 w-full px-6 sm:px-10 md:px-16 flex items-center justify-between">
      <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="overflow-hidden cursor-pointer group"
      >
        <Image
          ref={logo}
          src="/portfolio-logo.png"
          width={100}
          height={100}
          alt="Logo"
          className="-translate-x-full"
        />
      </div>
      <ul className="hidden md:flex items-center gap-6">
        {navLinks.map((item) => {
          return (
            <li
              onClick={() => onLinkClick(item.link)}
              key={item.link}
              className="overflow-hidden group cursor-pointer"
            >
              <span className="animated-link transition-colors duration-300 translate-x-full text-sm uppercase text-zinc-300 hover:text-white font-semibold block">
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
      <button
        className="md:hidden z-10 relative w-10 flex flex-col gap-1 text-sm font-semibold rounded-md"
        onClick={() => setIsMobileMenuOpen((state) => !state)}
      >
        <span
          className={cn(
            `rounded-full h-1 w-1/2`,
            isMobileMenuOpen
              ? "bg-black rotate-45 origin-top"
              : "bg-white rotate-0"
          )}
        />
        <span
          className={cn(
            `rounded-full h-1 w-full`,
            isMobileMenuOpen ? "bg-black -rotate-45" : "bg-white rotate-0"
          )}
        />
        <span
          className={cn(
            `rounded-full h-1 w-3/4`,
            isMobileMenuOpen
              ? "bg-black rotate-45 origin-bottom"
              : "bg-white rotate-0"
          )}
        />
      </button>
      {isMobileMenuOpen && <MobileMenu />}

      <div className="absolute left-0 bottom-0 w-full h-[2px] bg-zinc-300">
        <div
          className="h-full w-0 bg-gradient-to-bl from-[#4776E6] to-[#DD2476]"
          style={{
            width: `${scrolledPercentage}%`,
          }}
        />
      </div>
    </header>
  );
};

export default Header;
