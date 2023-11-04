import Image from "next/image";
import React from "react";
import GithubLogo from "../public/icons/github.svg";
import Live from "../public/icons/live.svg";

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
  return (
    <div className="group/main w-full relative flex flex-col max-lg:gap-8 max-lg:items-center even:lg:flex-row odd:lg:flex-row-reverse p-4">
      <div className="relative rounded-md w-[95%] sm:w-[85%] lg:w-[55%] group">
        <Image
          src={project.image}
          width={1080}
          height={620}
          alt="Project Image"
          className="rounded-md z-[1] relative shadow-lg shadow-zinc-700"
        />
        <Image
          src={project.image}
          width={1080}
          height={620}
          alt="Project Image"
          className="transition duration-500  group-odd/main:group-hover:-translate-x-6 group-even/main:group-hover:translate-x-6 group-hover:translate-y-6 rounded-md absolute top-0 left-0 blur-sm border-2 border-[#ad1c20]"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 lg:gap-6 items-center group-even/main:lg:items-end group-odd/main:lg:items-start justify-center">
        <h3 className="text-4xl font-semibold font-logo">{project.name}</h3>
        <p className="group-even/main:lg:-ml-8 group-odd/main:lg:-mr-8 z-[1] text-zinc-300 bg-slate-900/60 backdrop-blur-lg p-3 rounded-md text-sm sm:text-base">
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
