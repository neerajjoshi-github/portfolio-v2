"use client";
import { useState, useRef, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/helpers/tailwind-utils";

export const navLinks = [
  { label: "Home", link: "#home" },
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
  const [activeSection, setActiveSection] = useState<string>(navLinks[0].link);

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
    if (link === "#home") {
      return window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    const target = document.querySelector(link);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");

    const onScroll = () => {
      let current = "#home";
      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          current = `#${section.id}`;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="head sticky top-0 left-0 z-50 backdrop-blur-md h-14 w-full px-6 sm:px-10 md:px-16 flex items-center justify-between">
      <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="z-[10] overflow-hidden cursor-pointer group"
      >
        <Image
          ref={logo}
          src="/portfolio-logo.png"
          width={300}
          height={300}
          alt="Logo"
          className="-translate-x-full w-28 h-auto"
        />
      </div>
      <ul className="hidden md:flex items-center gap-6">
        {navLinks.map((item) => {
          return (
            <li
              onClick={() => onLinkClick(item.link)}
              key={item.link}
              className={`overflow-hidden group cursor-pointer`}
            >
              <span
                className={`${
                  activeSection === item.link
                    ? "bg-white text-black"
                    : "text-zinc-300 hover:text-white"
                } animated-link transition-colors duration-300 translate-x-full text-sm uppercase  font-semibold block py-1 px-2 rounded-[4px]`}
              >
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
      <button
        className="md:hidden z-10 relative flex flex-col gap-1 text-sm font-semibold rounded-md w-[70px]"
        onClick={() => setIsMobileMenuOpen((state) => !state)}
      >
        <span
          className={cn(
            `rounded-full h-1 w-1/2 transition duration-200 ease-out bg-white`,
            isMobileMenuOpen
              ? "rotate-45 origin-bottom translate-x-2"
              : "rotate-0"
          )}
        />
        <span
          className={cn(
            `rounded-full h-1 w-full transition duration-200 ease-out bg-white`,
            isMobileMenuOpen ? "-rotate-45 origin-top" : "rotate-0"
          )}
        />
        <span
          className={cn(
            `rounded-full h-1 w-3/4 transition duration-200 ease-out bg-white`,
            isMobileMenuOpen
              ? "rotate-45 origin-bottom translate-x-[29px] translate-y-[14px]"
              : "rotate-0"
          )}
        />
      </button>
      {isMobileMenuOpen && (
        <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />
      )}

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
