

import React from 'react';
import Layout from './Layout';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { ProgrammingSkillsIcons } from './ProgrammingSkillsIcon';

const Footer = () => {
  return (
    <footer className=" text-dark mt-10 dark:text-light">
        <div className='h-[1px] bg-dark  dark:bg-light w-4/5 mx-auto'></div>
      <Layout className="flex flex-col items-center dark:bg-dark justify-center gap-2 ">

        {/* Icons and text */}
        <div className="flex items-center gap-4 text-sm mt-6">
            <p className="text-dark font-medium dark:text-light">Built with:</p>
          <FaReact className="text-blue-600 text-xl" title="React" />
          <SiNextdotjs className="text-dark text-xl dark:text-light" title="Next.js" />
          <SiTailwindcss className="text-blue-600 text-xl" title="Tailwind CSS" />
        </div>

        
        <div>
        <p className="text-sm font-medium mx-auto text-center">
  Made with <span className="text-red-500 text-lg">❤️</span> 
  <span className="font-semibold"> Gupta Nawneet</span>. All rights reserved.
</p>
</div>
<div className="flex gap-3 justify-center">
    <ProgrammingSkillsIcons className="text-3xl md:text-4xl text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-all duration-200 ease-in-out" />
  </div>
      </Layout>
    </footer>
  );
};

export default Footer;

