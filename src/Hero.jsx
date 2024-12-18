import React from "react";
import profileImg from "../src/assets/profile.png"; // Replace with your image path
import resumeFile from "../src/assets/JohnWesley_resume.pdf"; // Replace with your resume file path

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-indigo-900 to-purple-900 text-white flex items-center overflow-hidden">
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
              href="#portfolio"
              className="inline-block bg-violet-500 hover:bg-violet-600 text-white text-xl font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
            >
              See Portfolio
            </a>
            <a
              href={resumeFile}
              download="JohnWesley_Resume.pdf"
              className="inline-block border-2 border-gray-300 text-gray-300 hover:text-white hover:border-violet-500 hover:bg-violet-500 text-xl font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-lg"
            >
              Download Resume
            </a>
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
    </section>
  );
};

export default Hero;
