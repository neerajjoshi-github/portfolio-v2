import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import GithubLogo from "../public/icons/github.svg";
import Live from "../public/icons/live.svg";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicLayoutEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/helpers/tailwind-utils";

const colors = [
  "shadow-purple-300",
  "shadow-sky-300",
  "shadow-teal-300",
  "shadow-blue-300",
  "shadow-green-300",
  "shadow-orange-400",
  "shadow-red-300",
  "shadow-neutral-300",
];

type Project = {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const svgPath = useRef<SVGPathElement>(null);
  const projectCard = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState("bg-purple-300");
  const imageRef = useRef<HTMLImageElement | null>(null);
  console.log(imageRef.current && imageRef.current.height);
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: projectCard.current,
          start: "top bottom-=150",
        },
      });

      tl.from(projectCard.current, {
        y: 20,
        scale: 0.95,
      })
        .from(
          "#project-description",
          {
            scaleX: 0.9,
          },
          0
        )
        .from(svgPath.current, {
          strokeDashoffset: 1000,
          duration: 1,
          ease: "power2.in",
        });
    }, projectCard);

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const rotateColor = () => {
      setColor(colors[currentIndex]);
      currentIndex = (currentIndex + 1) % colors.length;
    };
    const intervalId = setInterval(rotateColor, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      ref={projectCard}
      className="group/main w-full relative flex flex-col max-lg:gap-8 max-lg:items-center even:lg:flex-row odd:lg:flex-row-reverse p-4"
    >
      <div className="relative rounded-md w-[95%] sm:w-[85%] lg:w-[55%] group">
        <Image
          src={project.image}
          ref={imageRef}
          width={1080}
          height={620}
          alt="Project Image"
          className={cn(`rounded-md z-[1] relative `)}
        />
        <div
          style={{
            height: imageRef.current ? imageRef.current.height : 0,
            width: imageRef.current ? imageRef.current.width : 0,
          }}
          className="absolute top-0 left-0 blur-lg gradient-animation"
        ></div>
      </div>
      <div className="flex-1 flex flex-col gap-4 lg:gap-6 items-center group-even/main:lg:items-end group-odd/main:lg:items-start justify-center">
        <h3 className="text-3xl sm:text-4xl font-semibold font-logo">
          <span>{project.name}</span>
          <svg
            viewBox="0 0 634 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-2"
          >
            <path
              ref={svgPath}
              d="M1.40051 2.37525C1.40051 2.37525 68.8688 48.875 223.369 20.375C377.869 -8.125 633.4 12.3911 633.4 12.3911"
              stroke="white"
              strokeWidth="6"
              strokeDasharray={1000}
              strokeDashoffset={0}
            />
          </svg>
        </h3>
        <p
          id="project-description"
          className=" group-even/main:lg:-ml-8 group-odd/main:lg:-mr-8 z-[1] text-zinc-300 bg-slate-900/60 backdrop-blur-lg p-3 rounded-md text-sm sm:text-base"
        >
          {project.description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col gap-1 items-center">
            <Image
              src={GithubLogo}
              width={48}
              height={48}
              alt="Github Logo"
              className="cursor-pointer"
            />
            <span className="text-xs">Github</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <Image
              src={Live}
              width={48}
              height={48}
              alt="Live"
              className="cursor-pointer"
            />
            <span className="text-xs">Live</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
