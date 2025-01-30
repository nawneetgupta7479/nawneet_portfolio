import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import profilepic from "../../public/images/profile/profile_pic.png";
import MultipleAnimatedText from '@/components/MultipleAnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import ReachOut from '@/components/ReachOut';
import { FlipWords } from '@/components/ui/flip-words';
import { ProgrammingSkillsIcons } from '@/components/ProgrammingSkillsIcon';
import TransitionEffect from '@/components/TransitionEffect';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const words = ["Web Developer", "C++ Programmer", "MERN Stack Developer"];
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Portfolio of Nawneet Kumar Gupta - Web Developer & C++ Programmer" />
      </Head>
      <TransitionEffect/>
      <main className="w-full min-h-screen text-dark dark:bg-dark dark:text-white pt-[6rem] md:pt-[8rem]">
        
        <Layout className="pt-0 dark:bg-dark dark:text-white">
          <div className="flex flex-col md:flex-row items-center justify-around gap-10 md:gap-0 px-6 md:px-14 w-full">
            
            {/* Profile Picture and Icons */}
           {/* Profile Picture and Icons */}
{/* Profile Picture Section */}
<div className="relative flex flex-col items-center space-y-3">
  {/* Background Circle with Gradient */}
  <div className="absolute w-44 h-44 md:w-50 md:h-50 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full -z-10"></div>
  
  {/* Profile Image (Reduced Size) */}
  <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden shadow-lg border-[3px] border-white dark:border-gray-700 flex items-center justify-center">
    <Image
      src={profilepic}
      alt="Profile Picture"
      width={500}
      height={500}
      className="rounded-full object-cover scale-75" // <-- Reduced size inside
    />
  </div>

  {/* Icons Section */}
  <div className="flex gap-3 justify-center">
    <ProgrammingSkillsIcons className="text-3xl md:text-4xl text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-all duration-200 ease-in-out" />
  </div>
</div>


            {/* Introduction Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center self-center text-center md:text-left">
              <p className="text-lg md:text-xl">Hi, I'm</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-wide">Nawneet Kumar Gupta</h1>
              <div className="text-4xl mx-auto font-normal text-dark pt-6 -ml-[0.6rem] pb-4">
                <FlipWords words={words} />
              </div>
              <p className="text-sm md:text-base text-dark dark:bg-dark dark:text-white font-medium mb-4">
                I’m a web developer and programmer with expertise in the MERN stack and C++. I specialize in
                both front-end and back-end development, and I’m passionate about delivering high-quality web applications.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-5">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark dark:bg-light dark:text-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light dark:hover:bg-dark dark:hover:text-light hover:text-dark border-2 border-solid border-transparent dark:hover:border-light hover:border-dark"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:guptanawneet9955@gmail.com"
                  target={"_blank"}
                  className="text-lg font-medium capitalize text-dark underline dark:text-white dark:bg-dark"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <ReachOut />
      </main>
    </>
  );
}
