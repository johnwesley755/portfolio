import React from "react";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import Typewriter from "typewriter-effect";
import { Link as ScrollLink } from "react-scroll";
import resumePdf from "../src/assets/resume.pdf";
import profileImg from '../src/assets/profile.png'
const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-black bg-center text-white flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMTYtYy0wOF8xLWtzaDZtemEzLmpwZw.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Background Shapes */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 bg-violet-500 rounded-full opacity-20"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 left-40 w-72 h-72 bg-indigo-700 rounded-full opacity-30"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute -bottom-16 -right-16 w-80 h-80 bg-purple-500 rounded-full opacity-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity }}
      ></motion.div>

      {/* Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2
            className="text-gray-300 text-lg md:text-xl max-md:text-xs max-sm:mt-24 tracking-widest mb-3 uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello there, welcome to my site
          </motion.h2>
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I'm <span className="text-violet-400">John Wesley</span>
          </motion.h1>
          <motion.div
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="text-violet-400">
              <Typewriter
                options={{
                  strings: ["A Full Stack Developer", "UI/UX Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex max-md:flex-col justify-center md:justify-start gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {/* Download Resume */}
            <a href={resumePdf} download className="block">
              <Button className="bg-violet-500 hover:bg-violet-600 text-xl text-white px-6 py-6 rounded-full shadow-md transition-all">
                Download Resume
              </Button>
            </a>

            {/* View Projects */}
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="block"
            >
              <Button className="border border-gray-300 text-gray-300 hover:border-violet-500 hover:text-white hover:bg-violet-500 text-xl px-6 py-6 rounded-full shadow-md transition-all">
                View Projects
              </Button>
            </ScrollLink>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem] mb-20 rounded-3xl overflow-hidden border-4 border-violet-500 shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img
              src={profileImg}
              alt="John Wesley"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 max-md:hidden left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <p className="text-sm text-white mb-2">Scroll Down</p>
        <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
          <motion.div
            className="w-2 h-2 bg-white rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
