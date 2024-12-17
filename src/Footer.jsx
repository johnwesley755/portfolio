import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold text-white mb-6">
          Let's Connect
        </h3>
        <p className="mb-6 text-gray-400 text-lg">
          Interested in collaborating or just want to chat? Feel free to reach
          out!
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-8 mb-6">
          <a
            href="https://github.com/johnwesley755"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-500 transition-colors"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/john-wesley-6707ab258/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-500 transition-colors"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:johnwesley8113@gmail.com"
            className="text-white hover:text-indigo-500 transition-colors"
          >
            <FaEnvelope size={30} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} John Wesley. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
