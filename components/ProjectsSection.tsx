import Image from "next/image";
import React, { useRef, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import HeadingBackground from "../public/background/1.svg";
import OtherProjectCard from "./OtherProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "./Button";

const ProjectsSection = () => {
  const [showOthers, setShowOther] = useState(false);
  const otherProjects = useRef(null);

  useGSAP(
    () => {
      gsap.from("#other-project", {
        top: 100,
        opacity: 0,
        stagger: 0.3,
      });
    },
    { scope: otherProjects, dependencies: [showOthers] }
  );

  return (
    <section id="projects" className="w-full pt-32">
      <h2
        className="relative w-fit text-5xl md:text-8xl 
      mb-14 font-black uppercase font-sectionHeading"
      >
        Projects
        <Image
          src={HeadingBackground}
          width={140}
          height={140}
          alt="Heading Background"
          className="absolute -top-4 left-4 z-[-1]"
        />
      </h2>

      <div className="flex flex-col gap-24">
        {projects.slice(0, 4).map((data) => {
          return <ProjectCard key={data.name} project={data} />;
        })}
      </div>
      <div className="flex flex-col items-center mt-10">
        <Button onClick={() => setShowOther(!showOthers)}>
          {showOthers
            ? "Collapse Additional Projects"
            : "Explore More Projects"}
        </Button>

        {showOthers && (
          <div
            ref={otherProjects}
            className="px-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
          >
            {projects.slice(4).map((data) => {
              return <OtherProjectCard key={data.name} project={data} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
