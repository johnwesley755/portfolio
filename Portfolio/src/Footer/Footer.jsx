import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  return (
    <footer className="text-white py-8" id="contact">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Name */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-3xl font-bold">John <span className='text-blue-500'>Wesley</span></h3>
          </div>

          {/* Navigation Links */}
          <div className="text-center flex space-x-4 mb-4 md:mb-0">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
            <a href="#project" className="hover:text-gray-400">
              Projects
            </a>
            <a href="#skills" className="hover:text-gray-400">
              Skills
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/john-wesley-6707ab258/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/JohnWesley97513"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://github.com/johnwesley755"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} John Wesley. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
