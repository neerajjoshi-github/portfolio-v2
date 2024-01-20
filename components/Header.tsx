"use client";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

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
  return (
    <header className="sticky top-0 left-0 z-50 backdrop-blur-md h-16 w-full border-b border-zinc-300 px-6 sm:px-10 md:px-16 flex items-center justify-between">
      <h1 className="font-logo text-lg">neeraj</h1>
      <ul className="hidden md:flex items-center gap-6">
        {navLinks.map((item) => {
          return (
            <li key={item.link}>
              <Link
                href={item.link}
                className="text-sm uppercase text-zinc-300 hover:text-white font-semibold"
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <button
        className={`${
          isMobileMenuOpen ? "bg-black text-white" : "bg-white text-black"
        } md:hidden z-10 relative w-12 h-12 text-sm font-semibold rounded-full`}
        onClick={() => setIsMobileMenuOpen((state) => !state)}
      >
        {isMobileMenuOpen ? "close" : "open"}
      </button>
      {isMobileMenuOpen && <MobileMenu />}
    </header>
  );
};

export default Header;
