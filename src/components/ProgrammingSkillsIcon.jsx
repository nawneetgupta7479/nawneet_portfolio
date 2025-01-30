import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";


import Image from "next/image";

export function ProgrammingSkillsIcons() {
  const links = [
    {
      title: "LeetCode",
      icon: (
        <SiLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://leetcode.com/u/guptanawneetnkg/",
    },

    {
      title: "GeeksforGeeks",
      icon: (
        <SiGeeksforgeeks className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.geeksforgeeks.org/user/guptanawnx3cr/",
    },
    {
      title: "CodeChef",
      icon: (
        <SiCodechef className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.codechef.com/users/gupta_nawneet",
    },
    {
      title: "Codeforces",
      icon: (
        <SiCodeforces className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://codeforces.com/profile/nawneet_gupta",
    },
   
    
    
  ];
  return (
    (<div className="flex items-center justify-center  w-full h-20">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links} />
    </div>)
  );
}
