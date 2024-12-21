import React from "react";
import { motion } from "framer-motion";
import profileImg from "../src/assets/profile.png"; // Replace with your image path
import resumeFile from "../src/assets/JohnWesley_resume.pdf"; // Replace with your resume file path

const Hero = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Animates children sequentially
        duration: 1,
      },
    },
  };

  const fadeInFromTop = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center overflow-hidden max-md:pb-20">
      {/* Background Shapes */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 bg-violet-500 rounded-full opacity-20 animate-pulse"
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromTop}
        viewport={{ once: true, amount: 0.3 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 left-40 w-72 h-72 bg-gradient-to-br from-pink-400 to-indigo-800 rounded-full opacity-30 animate-bounce"
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromBottom}
        viewport={{ once: true, amount: 0.3 }}
      ></motion.div>
      <motion.div
        className="absolute -bottom-16 -right-16 w-80 h-80 bg-purple-100 rounded-full opacity-10 animate-spin-slow"
        initial="hidden"
        whileInView="visible"
        variants={scaleUp}
        viewport={{ once: true, amount: 0.3 }}
      ></motion.div>

      {/* Container */}
      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          variants={fadeInFromTop}
        >
          <h2 className="text-gray-300 text-lg md:text-xl tracking-widest mb-3 uppercase max-md:mt-28">
            Hello there, welcome to my site
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
            I'm <span className="text-violet-400">John Wesley</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-violet-400">A Full Stack Developer</span>{" "}
            <br />& UI/UX Designer
          </h2>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-6 max-md:flex-wrap">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white text-xl font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
            >
              View Projects
            </motion.a>

            <motion.a
              href={resumeFile}
              download="JohnWesley_Resume.pdf"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border-2 border-gray-300 text-gray-300 hover:text-white hover:border-violet-500 hover:bg-violet-500 text-xl font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative flex-shrink-0"
          variants={fadeInFromBottom}
        >
          <motion.div
            className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-3xl overflow-hidden border-4 border-violet-500 shadow-2xl transform hover:scale-105 transition-transform duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={profileImg}
              alt="John Wesley"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
