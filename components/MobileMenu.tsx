import React from "react";
import { navLinks } from "./Header";
import IconButton from "./IconButton";
import { links } from "../data/social-links";
import Image from "next/image";

type MobileMenuProps = {
  closeMenu: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {
  const onLinkClick = (link: string) => {
    if (link === "#home") {
      return window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    const target = document.querySelector(link);
    if (!target) return;
    closeMenu();
    target.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="fixed md:hidden z-[1] inset-0 h-screen background text-black flex items-center justify-center">
      <div>
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((item) => {
            return (
              <li
                key={item.link}
                className="text-xl uppercase text-zinc-300 hover:text-white cursor-pointer font-semibold"
                onClick={() => onLinkClick(item.link)}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
        <div className="flex gap-10 items-center mt-14">
          <IconButton
            className="font-semibold"
            link={links.github}
            icon="github"
            size="md"
          />
          <IconButton
            className="font-semibold"
            link={links.linkedin}
            icon="linkedin"
            size="md"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
