import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Button } from "./Button";
import Link from "next/link";

const HeroSection = () => {
  const heroHeadingText = useRef(null);
  const heroHeadingText2 = useRef(null);
  const heroPara = useRef(null);
  const buttonContainer = useRef(null);

  useGSAP(() => {
    if (!heroHeadingText.current || !heroHeadingText2) return;
    const tl = gsap.timeline();
    tl.to(heroHeadingText.current, {
      y: 0,
      opacity: 1,
    });

    gsap.context(() => {
      tl.to(".word", {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "back.out",
        rotate: 0,
      });
    }, heroHeadingText2);

    tl.to(heroPara.current, {
      y: 0,
      opacity: 1,
    });

    tl.to(buttonContainer.current, {
      y: 0,
      opacity: 1,
    });
  });

  const text = "Neeraj Joshi, and I bring web creations to life.";
  return (
    <section
      id="home"
      data-section
      className="h-[calc(100vh-64px)] w-full flex flex-col gap-3 justify-center relative"
    >
      <h2
        ref={heroHeadingText}
        className="text-2xl lg:text-3xl font-semibold font-heroText mb-6 translate-y-full opacity-0"
      >
        Hello, I&rsquo;m
      </h2>
      <p
        ref={heroHeadingText2}
        className=" tracking-wider leading-none font-bold font-heroText"
      >
        {text.split(" ").map((word, index) => {
          return (
            <>
              <span className="word -rotate-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[7rem] tracking-wide inline-block translate-y-1/2 opacity-0 mr-4">
                {word}
              </span>

              {index === 1 && <br />}
            </>
          );
        })}
      </p>
      <p
        ref={heroPara}
        className="translate-y-full opacity-0 text-xs sm:text-sm lg:text-base pr-0 sm:pr-24 font-medium"
      >
        Hello, I&rsquo;m Neeraj, a passionate aspiring software engineer with a
        knack for creating user-friendly digital solutions. I&rsquo;m on a
        journey to learn, explore, and build remarkable digital experiences. My
        goal is to make technology accessible and delightful for users, one
        project at a time.
      </p>
      <div
        ref={buttonContainer}
        className="translate-y-full opacity-0 flex gap-4 sm:gap-6 md:gap-8 items-center mt-6"
      >
        <Button asChild>
          <Link href="/resume.pdf" target="_blank">
            Resume
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="mailto:joshineeraj7037@gmail.com">Mail Me</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
