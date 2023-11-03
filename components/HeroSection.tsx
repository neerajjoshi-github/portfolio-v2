import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="h-[calc(100vh-64px)] w-full flex flex-col gap-3 justify-center px-6"
    >
      <h2 className="text-2xl lg:text-3xl font-semibold font-heroText mb-6">
        Hello, I&rsquo;m
      </h2>
      <p className="text-3xl sm:text-5xl md:text-7xl lg:text-[5.8rem] leading-none font-bold font-heroText">
        <span>Neeraj Joshi</span>, <br /> and I bring web creations to life.
      </p>
      <p className="text-xs sm:text-sm lg:text-base pr-0 sm:pr-24 font-medium">
        Hello, I&rsquo;m Neeraj, a passionate aspiring software engineer with a
        knack for creating user-friendly digital solutions. I&rsquo;m on a
        journey to learn, explore, and build remarkable digital experiences. My
        goal is to make technology accessible and delightful for users, one
        project at a time.
      </p>
      <div className="flex gap-4 sm:gap-6 md:gap-8 items-center mt-6">
        <button className="bg-white text-black hover:bg-white/90 transition duration-300 font-semibold text-base md:text-lg px-6 py-2 rounded-md">
          Resume
        </button>
        <button className="bg-black text-white hover:bg-zinc-900 transition duration-300 font-semibold text-base md:text-lg px-6 py-2 rounded-md border-2 border-white">
          Mail Me
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
