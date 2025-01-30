// data/projects.js

import { SiMongodb, SiExpress, SiReact, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export const projects = [
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
    name: "KoinX ",
    videoUrl: "/videos/koinX.mp4",
    description:
      "A frontend clone of the KoinX platform built with Next.js, focusing on real-time cryptocurrency price tracking. This project displays live prices of Bitcoin and other popular coins, offering users a seamless and responsive experience to monitor market fluctuations.",
    githubLink: "https://github.com/nawneetgupta7479/koinX_frontend_assignment",
    liveLink: "https://koin-x-frontend-assignment-eta.vercel.app/",
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
  
  
 
  // Add more project objects as needed
];
