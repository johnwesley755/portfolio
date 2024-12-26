import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const fadeIn = (direction = "up", delay = 0) => ({
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.8, delay },
    },
  });

  return (
    <motion.section
      id="about"
      className="relative bg-white text-black py-16 md:py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      {/* Background Gradient Shapes */}
      <motion.div
        className="absolute top-0 -left-16 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-[120px] animate-pulse"
        variants={fadeIn("down")}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 -right-16 w-72 h-72 bg-gradient-to-bl from-purple-400 to-indigo-500 rounded-full opacity-30 blur-[150px] animate-bounce"
        variants={fadeIn("up")}
      ></motion.div>

      {/* Content Container */}
      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-12 relative z-10"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* Left Image */}
        <motion.div
          className="relative flex-shrink-0 w-full md:w-1/2"
          variants={fadeIn("left", 0.2)}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Developer"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative Floating Shape */}
          <motion.div
            className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full opacity-40 blur-[50px] animate-pulse"
            variants={fadeIn("up", 0.4)}
          ></motion.div>
          <motion.div
            className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-tl from-purple-400 to-pink-400 rounded-full opacity-40 blur-[40px] animate-pulse"
            variants={fadeIn("down", 0.6)}
          ></motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div className="flex-1" variants={fadeIn("right", 0.2)}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800 leading-tight">
            Who Am <span className="text-blue-500">I?</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 mb-5">
            I am <strong className="text-black">John Wesley</strong>, a
            passionate{" "}
            <span className="font-semibold text-blue-500">
              Full Stack Developer
            </span>{" "}
            with experience in creating modern, scalable, and high-performance
            web applications. I specialize in both front-end and back-end
            development, combining{" "}
            <span className="font-semibold text-blue-500">creativity</span> and{" "}
            <span className="font-semibold text-blue-500">technology</span> to
            build clean, intuitive user interfaces and efficient back-end
            systems.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 mb-5">
            My journey in development started with a strong curiosity for
            solving real-world problems through <strong>code.</strong> Over
            time, I honed my skills in modern tools and frameworks such as{" "}
            <span className="font-medium text-blue-600">
              React, Node.js, Tailwind CSS
            </span>
            , and more. I focus on delivering seamless and interactive digital
            experiences tailored to user needs.
          </p>
          <p className="text-lg text-gray-600">
            Beyond development, I continuously explore emerging technologies
            like <span className="font-medium text-blue-600">AI and ML</span> to
            push the boundaries of what’s possible in the tech space.
          </p>
        </motion.div>
      </motion.div>

      {/* Additional Shape */}
      <motion.div
        className="absolute bottom-20 left-10 w-28 h-28 bg-gradient-to-bl from-blue-400 to-purple-400 rounded-full opacity-20 blur-[100px]"
        variants={fadeIn("up", 0.8)}
      ></motion.div>
    </motion.section>
  );
};

export default About;
