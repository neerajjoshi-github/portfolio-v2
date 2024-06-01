import Image from "next/image";
import React from "react";
import GithubLogo from "../public/icons/github.svg";
import Live from "../public/icons/live.svg";
import type { Project } from "./ProjectCard";
import IconButton from "./IconButton";

type OtherProjectCardProps = {
  project: Project;
};

const OtherProjectCard: React.FC<OtherProjectCardProps> = ({ project }) => {
  return (
    <div id="other-project" className="w-full rounded-xl relative bg-slate-950">
      <Image
        src={project.image}
        width={400}
        height={400}
        alt="Novus"
        className="w-full rounded-t-lg"
      />
      <div className="relative p-2 flex flex-col gap-2 items-center text-center bg-[url('/background/ten.svg')] bg-center bg-contain bg-no-repeat">
        <h3 className="text-2xl font-bold">{project.name}</h3>
        <p className="text-sm font-medium">{project.description}</p>
        <div className="mt-2 flex gap-3">
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

export default OtherProjectCard;
