import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/helpers/tailwind-utils";
import IconButton from "./IconButton";

export type Project = {
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
  const imageRef = useRef<HTMLImageElement | null>(null);
  const boundingRef = useRef<DOMRect | null>(null);
  const rotatingThreeD = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: projectCard.current,
          start: "top bottom-=150",
        },
      });

      tl.from(projectCard.current, {
        y: 20,
        scale: 0.95,
      });

      tl.from(
        "#project-description",
        {
          scaleX: 0.9,
        },
        0
      );

      tl.from(svgPath.current, {
        strokeDashoffset: 1000,
        duration: 1,
        ease: "power2.in",
      });
    }, projectCard);
  });

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    boundingRef.current = e.currentTarget.getBoundingClientRect();
  };

  const handleMouseLeave = () => {
    boundingRef.current = null;
    gsap.to(rotatingThreeD.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!boundingRef.current) return;
    const x = e.clientX - boundingRef.current.left;
    const y = e.clientY - boundingRef.current.top;
    const xPercentage = x / boundingRef.current.width;
    const yPercentage = y / boundingRef.current.height;
    const xRotation = (xPercentage - 0.5) * 20;
    const yRotation = (0.5 - yPercentage) * 20;

    gsap.to(rotatingThreeD.current, {
      rotateX: yRotation,
      rotateY: xRotation,
      scale: 1.08,
    });
  };

  return (
    <div
      ref={projectCard}
      className="[perspective:1000px] group/main w-full relative flex flex-col max-lg:gap-8 max-lg:items-center even:lg:flex-row odd:lg:flex-row-reverse p-4"
    >
      <div
        className="rotate-xy relative rounded-md w-[95%] sm:w-[85%] lg:w-[55%] group"
        ref={rotatingThreeD}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
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
          className="absolute top-0 left-0 gradient-animation"
        />
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
          className="group-even/main:lg:-ml-8 group-odd/main:lg:-mr-8 z-[1] text-zinc-300 bg-slate-900/60 backdrop-blur-lg p-3 rounded-md text-sm sm:text-base"
        >
          {project.description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <IconButton link={project.github} icon="github" />
          <IconButton link={project.live} icon="live" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
