import Image from "next/image";
import React from "react";
import HeadingBackground from "../public/background/3.svg";
import IconButton from "./IconButton";
import { links } from "../data/social-links";
import ContactForm from "./ContactForm";
import { ArrowDownRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      data-section
      id="contact"
      className="w-full min-h-screen pt-24 relative flex flex-col pb-10"
    >
      <h2 className="ml-auto relative w-fit text-5xl md:text-8xl pb-5 font-black uppercase font-sectionHeading">
        Contact
        <Image
          src={HeadingBackground}
          width={140}
          height={140}
          alt="Heading Background"
          className="absolute -top-4 left-4 z-[-1] w-20 sm:w-24 md:w-32"
        />
      </h2>
      <div className="flex flex-col lg:flex-row flex-1 gap-6 justify-between">
        <div className="flex flex-col gap-6 h-full">
          <div className="flex flex-col gap-8">
            <div className="flex items-end gap-2 sm:gap-4 lg:gap-6">
              <h2 className="text-3xl sm:text-4xl lg:text-7xl font-black">
                Let&apos;s Work <br />
                Together
              </h2>
              <ArrowDownRight className="h-12 w-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" />
            </div>
            <p className="text-sm lg:text-base">
              I&apos;m always excited to discuss new collaborations, job
              opportunities, or simply to connect. Whether you have a project in
              mind or just want to say hello, please feel free to reach out.
              <br /> I look forward to hearing from you!
            </p>
          </div>
          <div className="hidden lg:flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <span>Phone</span>
                <span>+91 7037435295</span>
              </div>
              <div className="flex flex-col gap-1">
                <span>Email</span>
                <span>joshineeraj7037@gmail.com</span>
              </div>
            </div>
            <div className="-ml-3 flex gap-3 items-center">
              <IconButton
                link={links.linkedin}
                showText={false}
                icon="linkedin"
                size="md"
              />

              <IconButton
                size="md"
                link={links.github}
                showText={false}
                icon="github"
              />
            </div>
          </div>
        </div>

        <ContactForm />

        <div className="flex items-center lg:hidden flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center gap-1">
              <span>Phone</span>
              <span>+91 7037435295</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span>Email</span>
              <span>joshineeraj7037@gmail.com</span>
            </div>
          </div>
          <div className="-ml-3 flex gap-3 items-center">
            <IconButton
              link={links.linkedin}
              showText={false}
              icon="linkedin"
              size="md"
            />

            <IconButton
              size="md"
              link={links.github}
              showText={false}
              icon="github"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
