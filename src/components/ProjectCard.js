

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

const ProjectCard = ({ name, videoUrl, description, githubLink, liveLink, technologies }) => {
  return (
    // <Link href={liveLink} target="_blank">
    <DirectionAwareHover videoUrl={videoUrl}>
      <div className="flex gap-4 flex-col items-start">
        <Link href={liveLink}>

          <h1 className="underline md:text-2xl font-semibold ">{name}</h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link href={githubLink} target="_blank">
          <div>
            <SiGithub className="w-4 h-4"  />
            </div>
          </Link>

          <Link href={liveLink} target="_blank">
            <div>
            <FaLink className="w-4 h-4" />
            </div>
          </Link>
        </div>
        <p className="text-[13px] max-w-[90%]">{description}</p>
        <div className="flex items-start gap-2 flex-col">
          <h2 className="font-semibold text-sm md:text-lg">Technologies Used:</h2>
          <ul className="flex items-center gap-4">
            {technologies.map((tech, index) => (
              <li key={index}>{tech.icon}</li>
            ))}
          </ul>
        </div>
      </div>
    </DirectionAwareHover>
    // </Link>
  );
};

export default ProjectCard;
