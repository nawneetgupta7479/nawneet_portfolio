"use client";

import React, { useRef } from 'react';
import Head from 'next/head';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import LiIcons from '@/components/LiIcons';
import TransitionEffect from '@/components/TransitionEffect';

const About = () => {
  const ref = useRef(null);

  // Framer Motion's useScroll for tracking scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"], // Scroll mapping to the container
  });

  // Smooth animation for the line length
  const scaleY = useSpring(scrollYProgress, { stiffness: 20, damping: 20 });

  // Transform scaleY to stop exactly at each circle
  const lineHeight = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Learn more about me, my skills, education, and experience."
        />
      </Head>
      <TransitionEffect/>
      <main className="p-6 bg-light text-dark min-h-screen pt-[8rem] dark:text-light dark:bg-dark">
        <section className="max-w-3xl mx-auto text-center mb-12 px-4">
          {/* Eye-Catching Tagline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[6rem] font-extrabold text-dark dark:text-light mb-4 leading-tight">
            Transforming Ideas into Reality
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-600 dark:text-gray-400">
            Passionate Full stack developer | Web design enthusiast | Tech trend follower
          </p>
        </section>
        <div ref={ref} className="w-[75%] mx-auto relative">
          {/* Animated Perpendicular Line */}
          <motion.div
            className="side-line absolute top-0 w-[4px] h-full bg-dark dark:bg-primary origin-top"
            style={{
              scaleY: lineHeight,
              transformOrigin: "top center",
            }}
          ></motion.div>
          <section className="max-w-2xl ml-14 mx-auto text-dark dark:text-light flex justify-center items-start gap-8 flex-col">
            {/* Biography Section */}
            <div>
              <LiIcons progress={scrollYProgress} />
              <h1 className="text-2xl font-semibold mb-2">Biography</h1>
              <p className="text-lg leading-relaxed mb-6 text-dark dark:text-light font-medium">
                Hi, I’m <strong>Nawneeet Kumar Gupta </strong>, a passionate MERN stack developer and a second-year B.Tech student
                specializing in <strong> Information Technology</strong>. I thrive on building innovative web
                applications and solving challenging coding problems.
              </p>
            </div>
            {/* Skills Section */}
            <div>
              <LiIcons progress={scrollYProgress} />
              <h2 className="text-2xl font-semibold mb-2">Skills & Expertise</h2>
              <ul className="list-disc pl-6 mb-6 font-medium text-dark dark:text-light">
                <li>MERN Stack Development (MongoDB, Express, React, Node.js)</li>
                <li>Data Structures and Algorithms</li>
                <li>Responsive Design and User Interfaces</li>
                <li>System Design and Backend Optimization</li>
              </ul>
            </div>
            {/* Current Learning and Goals */}
            <div>
              <LiIcons progress={scrollYProgress} />
              <h2 className="text-2xl font-semibold mb-2 text-dark dark:text-light">Current Learning & Goals</h2>
              <p className="text-[1rem] leading-relaxed mb-6 text-dark font-medium dark:text-light">
                Currently, I’m diving deeper into advanced React concepts and exploring backend optimizations. My goal is to
                build scalable and efficient web solutions while honing my knowledge in system design.
              </p>
            </div>
            {/* Education Section */}
            <div>
              <LiIcons progress={scrollYProgress} />
              <h2 className="text-2xl font-semibold mb-2 text-dark dark:text-light">Education</h2>
              <ul className="list-disc pl-6 mb-6 text-dark font-medium dark:text-light">
                <li>
                  <strong>Bachelor of Technology (B.Tech)</strong> - Birsa Institute of Technology, Dhanbad
                  <br />
                  <span className="text-gray-600 dark:text-gray-300">202X - Present</span>
                </li>
                <li>
                  <strong>High School Diploma</strong> - Subhash Public School, Giridih
                  <br />
                  <span className="text-gray-600 dark:text-gray-300">Completed in 2023</span>
                </li>
              </ul>
            </div>
            {/* Unique Selling Point */}
            <div className=''>
              <LiIcons progress={scrollYProgress} />
              <h2 className="text-2xl font-semibold mb-2 dark:text-light">What Sets Me Apart</h2>
              <p className="text-lg leading-relaxed mb-6 text-dark font-medium dark:text-light">
                What sets me apart is my dedication to creating meaningful projects that solve real-world problems. From
                designing disaster response tools to developing job portals, I aim to make technology more impactful. My
                approach combines creativity, efficiency, and a focus on delivering exceptional user experiences.
              </p>
            </div>
            {/* Experience and Projects */}
            <div>
              <LiIcons progress={scrollYProgress} />
              <h2 className="text-2xl font-semibold text-dark mb-2 dark:text-light">Experience & Projects</h2>
              <p className="text-lg leading-relaxed mb-6 text-dark font-medium dark:text-light">
                I recently completed an internship at Oasis Infobyte, where I contributed to web development projects,
                enhancing user experiences and ensuring responsive designs. I’ve also built a disaster alert web app and a
                job portal website using the MERN stack.
              </p>
            </div>
            {/* Hobbies and Personality */}
            <div>
              <LiIcons progress={scrollYProgress} />
              <h2 className="text-2xl font-semibold mb-2 dark:text-light">Hobbies & Interests</h2>
              <p className="text-lg leading-relaxed mb-6 text-dark font-medium dark-text-light dark:text-light">
                When I’m not coding, I enjoy exploring new tech tools, reading about emerging trends, and mentoring peers in
                web development.
              </p>
            </div>
            {/* Call to Action */}
            <div>
              <LiIcons progress={scrollYProgress} />
              <h2 className="text-2xl font-semibold mb-2 text-dark dark:text-light">Let’s Connect</h2>
              <p className="text-lg leading-relaxed text-dark font-medium dark:text-light">
                Feel free to explore my projects and get in touch. I’m always open to collaborations, learning
                opportunities, and exciting challenges!
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
