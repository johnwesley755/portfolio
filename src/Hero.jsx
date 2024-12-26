import React from "react";
import { Link } from "react-scroll";
import profileImg from "../src/assets/profile.png"; // Replace with your image path
import resumePdf from "../src/assets/JohnWesley_Resume.pdf"; // Replace with your resume PDF path

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-violet-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-40 w-72 h-72 bg-indigo-700 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-purple-500 rounded-full opacity-10 animate-spin-slow"></div>

      {/* Container */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-gray-300 text-lg md:text-xl tracking-widest mb-3 uppercase">
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
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href={resumePdf}
              download
              className="inline-block bg-violet-500 hover:bg-violet-600 text-white text-xl font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
            >
              Download Resume
            </a>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white text-xl font-medium px-6 py-3 rounded-full cursor-pointer transition-all duration-300 shadow-lg"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex-shrink-0">
          <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-3xl overflow-hidden border-4 border-violet-500 shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img
              src={profileImg}
              alt="John Wesley"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Floating "Hire Me" Button */}
      <a
        href="#hire"
        className="absolute top-6 right-6 bg-transparent border-2 border-violet-500 text-violet-400 px-6 py-2 rounded-full text-base font-medium hover:bg-violet-500 hover:text-white transition-all duration-300 z-10"
      >
        Hire Me
      </a>
    </section>
  );
};

export default Hero;
