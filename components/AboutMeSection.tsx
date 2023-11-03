import Image from "next/image";
import ProfileImage from "../public/images/profile.jpg";

// Tech Logos
import JavascriptLogo from "../public/icons/javascript.svg";
import ReactLogo from "../public/icons/react.svg";
import NextjsLogo from "../public/icons/nextjs.svg";
import NodejsLogo from "../public/icons/node-js.svg";
import TailwindcssLogo from "../public/icons/tailwindcss.svg";
import TypescriptLogo from "../public/icons/typescript.svg";
import MongodbLogo from "../public/icons/mongodb.svg";
import FirebaseLogo from "../public/icons/firebase.svg";

// Flowers
import Flower1 from "../public/flowers/1.svg";
import Flower2 from "../public/flowers/2.svg";

const technologies = [
  { id: 1, name: "Javascript", icon: JavascriptLogo },
  { id: 2, name: "Typescript", icon: TypescriptLogo },
  { id: 3, name: "React", icon: ReactLogo },
  { id: 4, name: "Next Js", icon: NextjsLogo },
  { id: 5, name: "Tailwind CSS", icon: TailwindcssLogo },
  { id: 6, name: "Node Js", icon: NodejsLogo },
  { id: 7, name: "Monogo Db", icon: MongodbLogo },
  { id: 8, name: "Firebase", icon: FirebaseLogo },
];

const AboutMeSection = () => {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-64px)] px-6 w-full flex flex-col gap-4"
    >
      <h2 className="ml-auto text-5xl md:text-8xl mb-2 font-black uppercase font-sectionHeading">
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full sm:w-fit h-fit relative flex flex-col gap-10 group">
          <div className="w-full aspect-square sm:w-80 lg:w-96 max-w-[24rem] border-2 border-zinc-300 rounded-3xl"></div>
          <Image
            className="group-hover:-rotate-90 transition duration-300 absolute -top-2 -left-2"
            src={Flower1}
            width={40}
            height={40}
            alt="Flower"
          />
          <Image
            className="group-hover:rotate-90 transition duration-300 absolute -bottom-4 -right-2"
            src={Flower2}
            width={50}
            height={50}
            alt="Flower"
          />
        </div>
        <div className="flex-1 flex flex-col gap-3 text-xs sm:text-sm lg:text-base">
          <p className="text-zinc-300">
            Hello, My name is Neeraj and I&rsquo;m passionate about crafting
            digital experiences on the web. I embarked on my web development
            journey as a{" "}
            <span className="text-primary">self-taught enthusiast,</span> driven
            by my love for technology and design. While I may not have a formal
            computer science degree or professional experience, my{" "}
            <span className="text-primary">
              dedication to learning and creating
            </span>{" "}
            has been my guiding force.
          </p>
          <p className="text-zinc-300">
            I&rsquo;ve always had a deep passion for technology, and my journey
            into web development began just a year and a half ago when I
            acquired my first laptop. Little did I know that this path would
            prove to be an{" "}
            <span className="text-[#ffda7b]">endless adventure</span>. As I
            delved into the world of web development, I discovered that learning
            and creating in this field is a never-ending journey. Along the way,
            I&rsquo;ve acquired a wealth of knowledge and thoroughly enjoyed my
            time crafting some truly remarkable projects.
          </p>
          <p className="text-zinc-300">
            What I particularly cherish about this journey is how it&rsquo;s
            allowed me to truly understand how technology works.
          </p>
          {/* Placeholder */}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-zinc-300 text-base sm:text-lg font-semibold">
          Technologies I am well-acquainted with
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1 text-zinc-300">
          {technologies.map((tech) => {
            return (
              <div key={tech.id} className="flex items-center gap-2">
                <div className="w-5 h-5 inline-block rounded-full">
                  <Image
                    src={tech.icon}
                    width={20}
                    height={20}
                    alt={`${tech.icon} Logo`}
                  />
                </div>
                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
