import Image from "next/image";
import React from "react";
import HeadingBackground from "../public/background/3.svg";
import IconButton from "./IconButton";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full h-screen pt-24 relative">
      <h2 className="ml-auto relative w-fit text-5xl md:text-8xl pb-5  font-black uppercase font-sectionHeading">
        Contact
        <Image
          src={HeadingBackground}
          width={140}
          height={140}
          alt="Heading Background"
          className="absolute -top-4 left-4 z-[-1]"
        />
      </h2>
      <div className="px-2 w-full h-full -mt-24 flex items-center justify-center relative">
        <div className="w-full md:w-3/4 flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Thank you for exploring my portfolio!
          </h2>
          <p className="text-sm sm:text-base md:text-lg">
            If you have a project in mind, I&rsquo;d love to hear about it.
            Whether it&rsquo;s a new collaboration, job opportunity, or if you
            just want to say hello, feel free to reach out.
          </p>
          <div className="flex flex-col items-center">
            <div className="flex sm:hidden flex-col gap-2 items-center">
              <span className="text-lg underline underline-offset-3">
                MAIL ME
              </span>
              <div className="text-2xl group relative">
                <a href="mailto:joshineeraj7037@gmail.com">
                  joshineeraj7037@gmail.com
                </a>
                <span className="bg-white h-[2px] w-0 transition-all duration-500 absolute bottom-0 left-0 group-hover:w-1/2"></span>
                <span className="bg-white h-[2px] w-0 transition-all duration-500 absolute bottom-0 right-0 group-hover:w-1/2"></span>
              </div>
            </div>
            <div className="flex gap-10 items-center my-4">
              <IconButton link="" icon="github" size="md" />
              <div className="hidden sm:flex flex-col gap-2 items-center">
                <span className="text-lg underline underline-offset-3">
                  MAIL ME
                </span>
                <div className="text-2xl group relative">
                  <a href="mailto:joshineeraj7037@gmail.com">
                    joshineeraj7037@gmail.com
                  </a>
                  <span className="bg-white h-[2px] w-0 transition-all duration-500 absolute bottom-0 left-0 group-hover:w-1/2"></span>
                  <span className="bg-white h-[2px] w-0 transition-all duration-500 absolute bottom-0 right-0 group-hover:w-1/2"></span>
                </div>
              </div>
              <IconButton link="" icon="linkedin" size="md" />
            </div>
          </div>

          <p className="text-sm sm:text-base md:text-lg">
            I&rsquo;m open to new challenges and excited to connect.{" "}
            <span className="text-emerald-600 font-semibold">
              Looking forward to hearing from you!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
