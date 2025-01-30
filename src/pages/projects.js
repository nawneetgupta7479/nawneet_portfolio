"use client";

import React, { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects"; // Importing the project data
import Headline from "@/components/Headline";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import TransitionEffect from "@/components/TransitionEffect";
import Head from 'next/head';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensures this component renders only on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Limit displayed projects based on `showAll`
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  if (!isClient) return null; // Prevent SSR mismatches

  return (
    <>
     <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Check out my latest projects, including web apps, mobile apps, and more."
        />
      </Head>
    <TransitionEffect/>
    <div className="pt-[8rem] dark:bg-dark dark:text-white">
      <div className="mb-[8rem]">
        <Headline title="Projects" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-8">
        {displayedProjects.map((project, index) => (
          <div key={index} className="flex items-center justify-center">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="flex items-center bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 rounded-lg text-sm font-semibold hover:bg-light dark:hover:bg-dark dark:hover:text-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:hover:border-light"
        >
          {showAll ? "Show Less" : "Show More"}
          {showAll ? (
            <FaArrowUp className="w-6 ml-2" />
          ) : (
            <FaArrowDown className="w-6 ml-2" />
          )}
        </button>
      </div>
    </div>
    </>
  );
};

export default Projects;
