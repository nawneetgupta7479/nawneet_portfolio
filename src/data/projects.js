// data/projects.js

import { SiMongodb, SiExpress, SiReact, SiNextdotjs, SiTailwindcss, SiNeo4J } from "react-icons/si";

export const projects = [
  {
    name: "CareerCraft AI",
    videoUrl: "/videos/careercraftai.mp4",
    description:
      "CareerCraft AI is a comprehensive career development platform powered by artificial intelligence. This full-stack application helps job seekers and professionals optimize their career journey with powerful AI-assisted tools.",
    githubLink: "https://github.com/nawneetgupta7479/CarrerCraft_ai",
    liveLink: "https://carrer-craft-ai.vercel.app/",
    technologies: [
      { name: "neondb", icon: <SiNeo4J className="w-6 h-6 text-green-600" /> },
      { name: "Shadcn ui", icon: <SiExpress className="w-6 h-6 text-gray-800" /> },
      { name: "React", icon: <SiReact className="w-6 h-6 text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-black" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-blue-500" /> },
    ],
  },
  {
    name: "CodeSnippetUI",
    videoUrl: "/videos/codesnippet.mp4",
    description:
      "CodeSnippetUI provides ready-to-use, responsive, and customizable React + TypeScript components (like Cards and Layouts) for efficient UI development with built-in accessibility.",
    githubLink: "https://github.com/nawneetgupta7479/react_ui",
    liveLink: "https://react-ui-ivpi.vercel.app/",
    technologies: [
    
      { name: "Shadcn ui", icon: <SiExpress className="w-6 h-6 text-gray-800" /> },
      { name: "React", icon: <SiReact className="w-6 h-6 text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-black" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-blue-500" /> },
    ],
  },
  {
    name: "Food Delivery",
    videoUrl: "/videos/food_delivery.mp4",
    description:
      "It is a food delivery platform where users can explore menus, order dishes, and leave reviews. Built with the MERN stack, it uses React.js for the frontend, Node.js for the backend, MongoDB for the database, and Express.js for server operations.",
    githubLink: "https://github.com/nawneetgupta7479/food_delivery",
    liveLink: "https://food-delivery-frontend-aze9.onrender.com",
    technologies: [
      { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-600" /> },
      { name: "Express", icon: <SiExpress className="w-6 h-6 text-gray-800" /> },
      { name: "React", icon: <SiReact className="w-6 h-6 text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-black" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-blue-500" /> },
    ],
  },
  {
    name: "Person_ai",
    videoUrl: "/videos/personaai.mp4",
    description:
      "CodeGuru Mentor is an AI chat application that simulates conversations with popular Indian coding instructors. Using Google's Gemini AI model, it creates authentic interactions in Hinglish (Hindi-English) that match the teaching styles of well-known programming mentors Hitesh Choudhary and Piyush Garg.",
    githubLink: "https://github.com/nawneetgupta7479/persona_ai",
    liveLink: "https://persona-ai-k2la.vercel.app/",
    technologies: [
      
     
      { name: "React", icon: <SiReact className="w-6 h-6 text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-black" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-blue-500" /> },
    ],
  },
  
  {
    name: "Razorpay Payment Gateway frontend clone",
    videoUrl: "/videos/razorpay.mp4",
    description:
      "A frontend clone of the Razorpay payment gateway built with React and styled using Tailwind CSS. The design is fully responsive, ensuring a smooth experience across devices.",
    githubLink: "https://github.com/nawneetgupta7479/razorpay_ui_design",
    liveLink: "https://razorpay-ui-design-blush.vercel.app/",
    technologies: [
     
      { name: "React", icon: <SiReact className="w-6 h-6 text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-blue-500" /> },
    ],
  },
  {
    name: "City Computers",
    videoUrl: "/videos/mdcomputers.mp4",
    description:
      "City Computers is a sleek and responsive React e-commerce landing page showcasing computer hardware. Features a modern UI with Tailwind CSS, smooth animations (Framer Motion), product showcases, and interactive sliders (Swiper).",
    githubLink: "https://github.com/nawneetgupta7479/md_computers",
    liveLink: "https://md-computers.vercel.app/shop",
    technologies: [
     
      { name: "React+vite", icon: <SiReact className="w-6 h-6 text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-blue-500" /> },
    ],
  },
  
  
 
  // Add more project objects as needed
];
