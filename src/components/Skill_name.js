import { HoverEffect } from "./ui/card-hover-effect";
import { TbBrandJavascript } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

export function Skill_name() {
  return (
    (<div className="max-w-4xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    title: <TbBrandJavascript />,
    description:
      "JavaScript",
    link: "https://javascript.com",
  },
  {
    title: <FaReact />,
    description:
      "React",
    link: "https://react.com",
  },
  {
    title: <RiNextjsFill />,
    description:
      "Next.js",
    link: "https://nextjs.com",
  },
  {
    title: <TbBrandCpp />,
    description:
      "C++",
    link: "https://cplusplus.com",
  },
  {
    title: <SiMongodb />,
    description:
      "MongoDB",
    link: "https://mongodb.com",
  },
  {
    title: <FaNodeJs />,
    description:
      "Node.js",
    link: "https://nodejs.com",
  },
  {
    title:<SiTypescript />,
    description:
      "TypeScript",
    link: "https://typescript.com",
  },
  {
    title:<RiTailwindCssFill />,
    description:
      "Tailwind CSS",
    link: "https://tailwindcss.com",
  },
  {
    title:<SiFramer />,
    description:
      "Framer",
    link: "https://framer.com",
  },
  {
    title:<SiExpress />,
    description:
      "Express",
    link: "https://express.com",
  },
  {
    title: <FaGitAlt />,
    description:
      "Git",
    link: "https://git.com",
  },
  {
    title:<SiPostgresql/>,
    description:
      "PostgreSQL",
    link: "https://postgresql.com",
  },
  {
    title: <IoLogoFirebase />,
    description:
      "Firebase",
    link: "https://firebase.com",
  },
    {
      title: <FaFigma />,
      description:
        "Figma",
      link: "https://figma.com",
    },
  


];
