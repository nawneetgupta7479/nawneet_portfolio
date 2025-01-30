import React from "react";
import Headline from "@/components/Headline";
import { Skill_name } from "@/components/Skill_name";
import TransitionEffect from "@/components/TransitionEffect";
import Head from 'next/head';

const Skills = () => {
  return (
    <>
     <Head>
        <title>Skills</title>
        <meta
          name="description"
          content="Check out my skills."
        />
      </Head>
    <TransitionEffect/>
    <div className="pt-[8rem]">
      <Headline title="Skills" />
      {/* Add your skill items below */}
      <div>
        <Skill_name />
      </div>
    </div>
    </>
  );
};

export default Skills;
