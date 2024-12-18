import React from "react";
import { FaGithub } from "react-icons/fa";
import gramImg from "../src/assets/gram-web.png";
import musicImg from "../src/assets/music-player.png";
import sideImg from "../src/assets/side-gig.png";
import soulsborneImg from "../src/assets/soulsborne(1).png";
import vutoriaImg from "../src/assets/vutoria(1).png";

// Project data with images and deployed links
const projectData = [
  {
    title: "Soulsborne Guide – Community Wiki for Soulslike Game",
    technologies: "React, Vite, Tailwind CSS, Firebase",
    description:
      "Soulsborne is a platform I developed to help individuals conquer procrastination, sharpen their skills, and excel in personal and professional growth by embracing challenges and pushing through barriers, inspired by the spirit of Soulsborne games.",
    date: "Nov 2024",
    image: soulsborneImg,
    githubLink: "https://github.com/johnwesley755/Soulsborne",
    deployedLink: "https://soulsborne-261a4.web.app/",
  },
  {
    title: "Vutoria – AI-Driven Virtual Try-On Platform",
    technologies: "React, Tailwind CSS, AI Diffusion Models",
    description:
      "Created an e-commerce platform with a unique virtual try-on feature powered by AI diffusion models. Integrated with responsive UI to offer users an immersive shopping experience.",
    date: "Oct 2024",
    image: vutoriaImg,
    githubLink: "https://github.com/johnwesley755/vutoria-demo-store",
    deployedLink: "https://vutoria-bb1e7.web.app/",
  },
  {
    title: "SideGig App – Freelance and Gig Worker Platform",
    technologies: "React, Firebase, CSS",
    description:
      "Designed and developed a platform for freelancers and gig workers to find and apply for jobs. Features included skill matching, secure messaging, customer feedback, and privacy options.",
    date: "Sep 2024",
    image: sideImg,
    githubLink: "https://github.com/johnwesley755/sidegig",
    deployedLink: "https://sidegigapp.com",
  },
  {
    title: "Gram Panchayat Website",
    technologies: "HTML, CSS, JavaScript, Firebase",
    description:
      "Developed a community-focused website for managing ward details, applications for electricity and water connections, ward expenses, notifications, and user complaints. Incorporated Firebase for authentication and real-time data handling.",
    date: "Aug 2024",
    image: gramImg,
    githubLink: "https://github.com/johnwesley755/gram-panchayat",
  },
  {
    title: "Namma Isai – A Music Player Web Application",
    technologies: "HTML, CSS, JavaScript",
    description:
      "Designed and developed a fully functional music player with an intuitive interface, featuring play/pause functionality, volume control, progress tracking, and playlist management using local storage. Ensured a responsive design to provide seamless usability across devices.",
    date: "Jul 2024",
    image: musicImg,
    githubLink: "https://github.com/johnwesley755/namma-isai-music",
  },
];
const Projects = () => {
  return (
    <section className="relative text-black py-12 overflow-hidden bg-gray-50">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full opacity-30 animate-pulse z-0"></div>
      <div className="absolute bottom-0 left-36 w-96 h-96 bg-gradient-to-l from-indigo-500 to-violet-400 rounded-full opacity-20 animate-bounce z-0"></div>
      <div className="absolute top-16 right-0 w-96 h-96 bg-gradient-to-r from-indigo-300 to-violet-500 rounded-full opacity-10 animate-bounceBehind z-0"></div>

      {/* Section Header */}
      <div className="container mx-auto px-6 text-center mb-10 relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
          My Projects
        </h2>
        <p className="mt-2 text-gray-700 text-lg md:text-xl">
          A showcase of my personal and freelance projects that demonstrate my
          technical skills and passion for solving real-world problems.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 grid gap-12 md:gap-16 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-300"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover rounded-lg mb-4 group-hover:opacity-90 transition-opacity duration-300"
            />
            {/* Project Title */}
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm md:text-base mb-4">
              {project.date}
            </p>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-gray-500 text-sm font-medium mb-4">
              <strong>Technologies Used:</strong> {project.technologies}
            </p>
            {/* GitHub and Deployed Links */}
            <div className="flex gap-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-500 hover:text-indigo-700 transition-colors"
                >
                  <FaGithub className="mr-2" />
                  GitHub Repo
                </a>
              )}
              {project.deployedLink && (
                <a
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-500 hover:text-green-700 transition-colors"
                >
                  <span className="mr-2">🌐</span> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
