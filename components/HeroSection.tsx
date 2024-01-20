import gsap from "gsap";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/helpers/useIsomorphicLayoutEffect";

const HeroSection = () => {
  const heroHeadingText = useRef(null);
  const heroHeadingText2 = useRef(null);
  const heroPara = useRef(null);
  const buttonContainer = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (!heroHeadingText.current || !heroHeadingText2) return;
    const tl = gsap.timeline();
    tl.from(heroHeadingText.current, {
      y: 40,
      opacity: 0,
    });

    let ctx = gsap.context(() => {
      tl.from(".word", {
        y: "100%",
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power1.out",
      });
    }, heroHeadingText2);

    tl.from(heroPara.current, {
      y: 40,
      opacity: 0,
    });

    tl.from(buttonContainer.current, {
      y: 40,
      opacity: 0,
    });

    return () => {
      tl.revert();
      ctx.revert();
    };
  }, []);

  const heroText = "Neeraj Joshi, and I bring web creations to life.";
  return (
    <section
      id="hero"
      className="h-[calc(100vh-64px)] w-full flex flex-col gap-3 justify-center px-6 relative"
    >
      <h2
        ref={heroHeadingText}
        className="text-2xl lg:text-3xl font-semibold font-heroText mb-6"
      >
        Hello, I&rsquo;m
      </h2>
      <p
        ref={heroHeadingText2}
        className=" tracking-wider leading-none font-bold font-heroText"
      >
        <span className="inline-block h-[7vw] overflow-hidden mr-4 px-2">
          <span className="word text-[7vw] inline-block">Neeraj</span>
        </span>
        <span className="inline-block h-[7vw] overflow-hidden mr-4 px-2">
          <span className="word text-[7vw] inline-block">Joshi,</span>
        </span>
        <br />
        <span className="inline-block h-[7vw] overflow-hidden mr-4 px-2">
          <span className="word text-[7vw] inline-block">and</span>
        </span>
        <span className="inline-block h-[7vw] overflow-hidden mr-4 px-2">
          <span className="word text-[7vw] inline-block">I</span>
        </span>
        <span className="inline-block h-[7vw] overflow-hidden mr-4 px-2">
          <span className="word text-[7vw] inline-block">bring</span>
        </span>
        <span className="inline-block h-[7vw] overflow-hidden mr-4 px-2">
          <span className="word text-[7vw] inline-block">web</span>
        </span>
        <span className="inline-block h-[7vw] overflow-hidden mr-4 px-2">
          <span className="word text-[7vw] inline-block">creations</span>
        </span>
        <span className="inline-block h-[7vw] overflow-hidden mr-4 px-2">
          <span className="word text-[7vw] inline-block">to</span>
        </span>
        <span className="inline-block h-[7vw] overflow-hidden mr-4 px-2">
          <span className="word text-[7vw] inline-block">life.</span>
        </span>
      </p>
      <p
        ref={heroPara}
        className="text-xs sm:text-sm lg:text-base pr-0 sm:pr-24 font-medium"
      >
        Hello, I&rsquo;m Neeraj, a passionate aspiring software engineer with a
        knack for creating user-friendly digital solutions. I&rsquo;m on a
        journey to learn, explore, and build remarkable digital experiences. My
        goal is to make technology accessible and delightful for users, one
        project at a time.
      </p>
      <div
        ref={buttonContainer}
        className="flex gap-4 sm:gap-6 md:gap-8 items-center mt-6"
      >
        <button className="bg-white text-black hover:bg-white/90 transition duration-300 font-semibold text-base md:text-lg px-6 py-2 rounded-md">
          Resume
        </button>
        <button className="bg-transparent text-white hover:bg-zinc-900 transition duration-300 font-semibold text-base md:text-lg px-6 py-2 rounded-md border-2 border-white">
          Mail Me
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
