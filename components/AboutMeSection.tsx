import Image from "next/image";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

// Tech Logos
import JavascriptLogo from "../public/icons/javascript.svg";
import ReactLogo from "../public/icons/react.svg";
import NextjsLogo from "../public/icons/nextjs.svg";
import NodejsLogo from "../public/icons/nodejs.svg";
import TailwindcssLogo from "../public/icons/tailwindcss.svg";
import TypescriptLogo from "../public/icons/typescript.svg";
import MongodbLogo from "../public/icons/mongodb.svg";
import FirebaseLogo from "../public/icons/firebase.svg";

// Flowers
import Flower1 from "../public/flowers/1.svg";
import Flower2 from "../public/flowers/2.svg";

import HeadingBackground from "../public/background/2.svg";
import { useGSAP } from "@gsap/react";

const technologies = [
  { id: 1, name: "Javascript", icon: JavascriptLogo },
  { id: 2, name: "Typescript", icon: TypescriptLogo },
  { id: 3, name: "React", icon: ReactLogo },
  { id: 4, name: "Next Js", icon: NextjsLogo },
  { id: 5, name: "Tailwind CSS", icon: TailwindcssLogo },
  { id: 6, name: "Node Js", icon: NodejsLogo },
  { id: 7, name: "Monogo Db", icon: MongodbLogo },
  { id: 8, name: "Firebase", icon: FirebaseLogo },
];

const highlightedText = "self-taught enthusiast,";
const highlightedText2 = "dedication to learning and creating";
const highlightedText3 = "endless adventure";

const AboutMeSection = () => {
  const aboutSection = useRef<HTMLElement | null>(null);
  const headingBackground = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSection.current,
          start: "top center",
        },
      });

      tl.to(headingBackground.current, {
        rotate: "+=180",
        duration: 0.2,
      })
        .to(".highlighted-text span", {
          color: "#ff66c4",
          stagger: 0.04,
          ease: "sine.out",
        })
        .to(
          ".highlighted-text2 span",
          {
            color: "#ffda7b",
            stagger: 0.04,
            ease: "sine.out",
          },
          "-=0.5"
        );
    }, aboutSection);
  });

  const mouseMoveHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!aboutSection.current) return;
    const rect = aboutSection.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / aboutSection.current.clientWidth;
    const y = (e.clientY - rect.top) / aboutSection.current.clientHeight;

    gsap.to(headingBackground.current, {
      top: y * 20,
      left: x * 80,
    });
  };
  return (
    <section
      ref={aboutSection}
      id="about"
      className="py-20 px-6 w-full flex flex-col gap-4 relative"
      onMouseMove={mouseMoveHandler}
    >
      <h2 className="ml-auto group relative text-5xl md:text-8xl mb-2 font-black uppercase font-sectionHeading">
        About Me
        <Image
          ref={headingBackground}
          src={HeadingBackground}
          width={140}
          height={140}
          alt="Heading Background"
          className="absolute -top-4 right-1/2 z-[-1] transition duration-1000"
        />
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full sm:w-fit h-fit relative flex flex-col gap-10 group">
          <div className="w-full aspect-square sm:w-80 lg:w-96 max-w-[24rem] border-2 border-zinc-300 rounded-3xl"></div>
          <Image
            className="group-hover:-rotate-90 transition duration-300 absolute -top-2 -left-2"
            src={Flower1}
            width={40}
            height={40}
            alt="Flower"
          />
          <Image
            className="group-hover:rotate-90 transition duration-300 absolute -bottom-4 -right-2"
            src={Flower2}
            width={50}
            height={50}
            alt="Flower"
          />
        </div>
        <div className="flex-1 flex flex-col gap-3 text-xs sm:text-sm lg:text-base">
          <p className="text-zinc-300">
            Hello, My name is Neeraj and I&rsquo;m passionate about crafting
            digital experiences on the web. I embarked on my web development
            journey as a{" "}
            <span className="highlighted-text underline decoration-wavy decoration-emerald-500">
              {highlightedText.split("").map((text, index) => {
                return <span key={index}>{text}</span>;
              })}
            </span>{" "}
            driven by my love for technology and design. While I may not have a
            formal computer science degree or professional experience, my{" "}
            <span className="highlighted-text">
              {highlightedText2.split("").map((text, index) => {
                return <span key={index}>{text}</span>;
              })}
            </span>{" "}
            has been my guiding force.
          </p>
          <p className="text-zinc-300">
            I&rsquo;ve always had a deep passion for technology, and my journey
            into web development began just a year and a half ago when I
            acquired my first laptop. Little did I know that this path would
            prove to be an{" "}
            <span className="highlighted-text2">
              {highlightedText3.split("").map((text, index) => {
                return <span key={index}>{text}</span>;
              })}
            </span>
            . As I delved into the world of web development, I discovered that
            learning and creating in this field is a never-ending journey. Along
            the way, I&rsquo;ve acquired a wealth of knowledge and thoroughly
            enjoyed my time crafting some truly remarkable projects.
          </p>
          <p className="text-zinc-300">
            What I particularly cherish about this journey is how it&rsquo;s
            allowed me to truly understand how technology works.
          </p>
          {/* Placeholder */}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-zinc-300 text-base sm:text-lg font-semibold">
          Technologies I am acquainted with
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1 text-zinc-300">
          {technologies.map((tech) => {
            return (
              <div key={tech.id} className="flex items-center gap-2">
                <Image
                  src={tech.icon}
                  width={24}
                  height={24}
                  alt={`${tech.icon} Logo`}
                />
                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
