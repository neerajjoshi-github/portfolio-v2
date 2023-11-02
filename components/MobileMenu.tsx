import React from "react";
import { navLinks } from "./Header";
import Link from "next/link";
import Image from "next/image";

const MobileMenu = () => {
  return (
    <div className="fixed z-[1] inset-0 h-screen bg-white text-black flex items-center justify-center">
      <div>
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((item) => {
            return (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className="text-xl uppercase text-zinc-700 hover:text-black font-semibold"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-10 items-center mt-14">
          <div className="flex flex-col items-center">
            <Image
              width={56}
              height={56}
              src="/icons/github.svg"
              alt="Github Logo"
            />
            <span className="text-sm font-semibold">Github</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              width={56}
              height={56}
              src="/icons/linkedin.svg"
              alt="Linkedin Logo"
            />
            <span className="text-sm font-semibold">Linkedin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
