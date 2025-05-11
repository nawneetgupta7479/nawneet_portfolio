"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { IoSunny } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [theme, setTheme] = useState("dark"); // Default to dark theme

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle theme and update localStorage
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // Retrieve theme from localStorage on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark"; // Default is dark
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  // Disable scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full lg:px-10 px-5 py-3 flex justify-between items-center fixed dark:bg-white/5 bg-white/30 backdrop-blur-md border border-white/20 rounded-lg shadow-lg z-50 transition-transform duration-500 ${
          isOpen ? "translate-y-[-100px] opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        }`}
      >
        {/* Logo */}
        <div>
          <Link href="/">
            <h1 className="font-bold text-2xl">
              Nawneet<span className="text-primaryDark">.</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden dark:text-light dark:bg-white/5 md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/20 backdrop-blur-md  dark:border-light shadow-md">
          <Link href="/" className="font-medium text-md">
            Home
          </Link>
          <Link href="/projects" className="font-medium text-md">
            Projects
          </Link>
          <Link href="/skills" className="font-medium text-md">
            Skills
          </Link>
          <Link href="/about" className="font-medium text-md">
            About
          </Link>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-4 text-[1.4rem]">
          <motion.div whileHover={{ y: -2, scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <Link href="https://www.linkedin.com/in/nawneet-kumar-gupta-50aa95290/" target="_blank">
              <LinkedInIcon />
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2, scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <Link href="https://github.com/nawneetgupta7479" target="_blank">
              <GithubIcon className={"dark:text-light"} />
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2, scale: 1.3 }} whileTap={{ scale: 0.9 }}>
            <Link href="/" target="_blank">
              <FaXTwitter className="text-black dark:text-light " />
            </Link>
          </motion.div>
         

          {/* Theme Toggle Button */}
          <button onClick={toggleTheme}>
            {theme === "dark" ? (
               <IoSunny className="h-6 w-6 text-light" />
             
            ) : (
              <MdOutlineDarkMode className="h-6 w-6 text-dark" />
            )}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button onClick={toggleTheme}>
            {theme === "dark" ? (
               <IoSunny className="h-6 w-6 text-light" />
             
            ) : (
              <MdOutlineDarkMode className="h-6 w-6 text-dark" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="focus:outline-none relative transition-transform duration-300"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <IoMdMenu className="h-8 w-8" />
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-white/30 backdrop-blur-lg z-[999] flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-5 right-5 focus:outline-none"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <IoMdClose className="h-8 w-8" />
              </motion.div>
            </button>

            {/* Links */}
            <div className="flex flex-col gap-6 text-center text-2xl font-medium dark:text-dark">
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="/projects" onClick={toggleMenu}>
                Projects
              </Link>
              <Link href="/skills" onClick={toggleMenu}>
                Skills
              </Link>
              <Link href="/about" onClick={toggleMenu}>
                About
              </Link>
            </div>
            <div className="flex gap-6 mt-8 text-[1.4rem]">
              <motion.div
                whileHover={{ y: -2, scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href="https://www.linkedin.com/in/nawneet-gupta-50aa95290/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ y: -2, scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="https://github.com/nawneetgupta7479" target="_blank">
                  <GithubIcon className={"dark:text-dark"} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ y: -2, scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="/" target="_blank">
                  <FaXTwitter className="text-dark" />
                </Link>
              </motion.div>

             
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
