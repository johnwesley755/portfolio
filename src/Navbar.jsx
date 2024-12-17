import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 bg-black bg-opacity-90 shadow-md z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-violet-500">John Wesley</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-300 text-lg">
          <li className="hover:text-violet-400 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-violet-400 cursor-pointer">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-violet-400 cursor-pointer">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-violet-400 cursor-pointer">
            <a href="#achievements">Achievements</a>
          </li>
          <li className="hover:text-violet-400 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Social Links - Desktop */}
        <div className="hidden md:flex gap-4">
          <a
            href="https://github.com/johnwesley755"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-violet-400 text-2xl transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-violet-400 text-2xl transition-all"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Hamburger Menu - Mobile */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-gray-300 text-3xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Sidebar - Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-95 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Content */}
        <ul className="flex flex-col items-center gap-8 pt-20 text-gray-300 text-lg">
          <li className="hover:text-violet-400">
            <a href="#about" onClick={toggleSidebar}>
              About
            </a>
          </li>
          <li className="hover:text-violet-400">
            <a href="#skills" onClick={toggleSidebar}>
              Skills
            </a>
          </li>
          <li className="hover:text-violet-400">
            <a href="#projects" onClick={toggleSidebar}>
              Projects
            </a>
          </li>
          <li className="hover:text-violet-400">
            <a href="#achievements" onClick={toggleSidebar}>
              Achievements
            </a>
          </li>
          <li className="hover:text-violet-400">
            <a href="#contact" onClick={toggleSidebar}>
              Contact
            </a>
          </li>
        </ul>

        {/* Social Links - Mobile */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://github.com/johnwesley755"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-violet-400 text-2xl transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-violet-400 text-2xl transition-all"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
