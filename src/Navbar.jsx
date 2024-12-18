import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll"; // Importing Link from react-scroll

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
        <Link to="hero" smooth={true} duration={500}>
          <div className="text-3xl font-bold text-violet-500 cursor-pointer">
            John Wesley
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-300 text-lg">
          <li className="hover:text-violet-400 cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="hover:text-violet-400 cursor-pointer">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="hover:text-violet-400 cursor-pointer">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="hover:text-violet-400 cursor-pointer">
            <Link to="achievements" smooth={true} duration={500}>
              Achievements
            </Link>
          </li>
          <li className="hover:text-violet-400 cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
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
            href="https://www.linkedin.com/in/john-wesley-6707ab258/"
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
          className="md:hidden text-gray-300 text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Sidebar - Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-95 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Sidebar Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-gray-300 text-2xl focus:outline-none"
        >
          <FaTimes />
        </button>

        {/* Sidebar Content */}
        <ul className="flex flex-col items-center gap-8 pt-20 text-gray-300 text-lg">
          <li className="hover:text-violet-400">
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={toggleSidebar}
            >
              About
            </Link>
          </li>
          <li className="hover:text-violet-400">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={toggleSidebar}
            >
              Skills
            </Link>
          </li>
          <li className="hover:text-violet-400">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={toggleSidebar}
            >
              Projects
            </Link>
          </li>
          <li className="hover:text-violet-400">
            <Link
              to="achievements"
              smooth={true}
              duration={500}
              onClick={toggleSidebar}
            >
              Achievements
            </Link>
          </li>
          <li className="hover:text-violet-400">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={toggleSidebar}
            >
              Contact
            </Link>
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
            href="https://www.linkedin.com/in/john-wesley-6707ab258/"
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
