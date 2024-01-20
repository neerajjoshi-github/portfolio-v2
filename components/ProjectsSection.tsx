import Image from "next/image";
import React from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import HeadingBackground from "../public/background/1.svg";

const ProjectsSection = () => {
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
        {projects.map((data) => {
          return <ProjectCard key={data.name} project={data} />;
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;

{
  /* <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
<div className="bg-slate-950 rounded-md flex flex-col gap-4">
  <div className="w-full">
    <Image
      src="/images/projects/redit-clone.png"
      width={1080}
      height={620}
      alt="Project Image"
      className="rounded-t-lg"
    />
  </div>
  <div className="border-t-2 border-b-2 border-white bg-black/50 rounded-3xl backdrop-blur-md -mt-16 p-4 flex flex-col gap-4">
    <h3 className="text-3xl font-logo">Reddit Clone</h3>
    <p className="text-zinc-300 text-xs sm:text-sm">
      This is my Reddit Clone project, a recreation of the popular
      social media platform. It enables users to create posts,
      participate in diverse communities, engage in discussions, and
      vote for their favorite content. With a focus on user interaction
      and community building, this project reflects my dedication to
      delivering a versatile and engaging online experience, inspired by
      a renowned platform.
    </p>
    <div className="flex gap-4">
      <span>Next Js</span>
      <span>Firebase</span>
      <span>Tailwind Css</span>
      <span>Typescript</span>
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
<div className="bg-slate-950 rounded-md flex flex-col gap-4">
  <div className="w-full">
    <Image
      src="/images/projects/novus.png"
      width={1080}
      height={620}
      alt="Project Image"
      className="rounded-t-lg"
    />
  </div>
  <div className="border-t-2 border-b-2 border-white bg-black/50 rounded-3xl backdrop-blur-md -mt-16 p-4 flex flex-col gap-4">
    <h3 className="text-3xl font-logo">Novus BloodBank</h3>
    <p className="text-zinc-300 text-xs sm:text-sm">
      Novus Blood Bank Management is a web application meticulously
      crafted to simplify blood-related data management for
      organizations. It provides an intuitive solution for easily adding
      and managing inventories. Moreover, it facilitates donors and
      hospitals in maintaining detailed records of donated and received
      blood, contributing to more efficient and comprehensive blood
      management within the healthcare community.
    </p>
    <div className="flex gap-4">
      <span>React</span>
      <span>Mongodb</span>
      <span>Tailwind Css</span>
      <span>Antd</span>
      <span>Node Js</span>
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
</div> */
}
