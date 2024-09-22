import React from "react";
const projects = [
  {
    id: 1,
    title: "SideGig Website",
    description:
      "A website which provides information about the gig economy app connecting workers and clients. Provides a seamless experience for finding and hiring talent on the go.",
    image: "/src/assets/side-gig.png", // Example image path
    link: "https://side-gig-website.web.app/",
  },
  {
    id: 2,
    title: "Namma Isai Music Player",
    description:
      "A web-based music player with a sleek interface, playlist management, and responsive design, built using HTML, CSS, and JavaScript.",
    image: "/src/assets/music-player.png", // Example image path
    link: "https://github.com/johnwesley755/namma-isai-music",
  },
  {
    id: 3,
    title: "Gram Panchayat Website",
    description:
      "A digital platform for local governance, featuring applications for services, ward details, notifications, and user complaints.",
    image: "/src/assets/gram-web.png", // Example image path
    link: "https://github.com/johnwesley755/gram-panchayat",
  },
];

const ProjectSection = () => {
  return (
    <section id="project" className="py-16 px-6 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative mb-4 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-white">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
