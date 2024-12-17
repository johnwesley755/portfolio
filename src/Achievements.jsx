import React from "react";
import { FaTrophy, FaAward } from "react-icons/fa";

// Achievement data with images and descriptions
const achievementData = [    {
      title: "Pitchathon Finalist",
      institution: "Vellore Institute of Technology, Chennai",
      description:
        "Demonstrated virtual try-on scalability to enhance customer experience in a 30-hour hackathon.",
      date: "10/2024",
    },
    {
      title: "Innothon ’24 Finalist",
      institution: "KCG College of Technology, Chennai",
      description:
        "Presented an AI-powered virtual try-on solution at a 30-hour hackathon.",
      date: "09/2024",
    },
    {
      title: "Conducted Internal Hackathon",
      institution: "Internal Organization",
      description:
        "Organized and led an internal hackathon to foster innovation and problem-solving within the institution.",
      date: "Date unspecified",
    },
  ];
const Achievements = () => {
  return (
    <section className="relative py-12 bg-gradient-to-r from-gray-900 via-violet-800 to-indigo-900 text-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-indigo-500 to-violet-400 rounded-full opacity-20 animate-bounce"></div>

      <div className="container mx-auto px-6 text-center mb-10">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white">
          My Achievements
        </h2>
        <p className="mt-2 text-gray-300 text-lg md:text-xl">
          A collection of my key accomplishments that showcase my skills,
          dedication, and passion for technology.
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="container mx-auto px-6 grid gap-12 md:gap-16 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {achievementData.map((achievement, index) => (
          <div
            key={index}
            className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-300"
          >
            {/* Achievement Image */}
            <img
              src={achievement.image}
              alt={achievement.title}
              className="w-full h-56 object-cover rounded-lg mb-4 group-hover:opacity-90 transition-opacity duration-300"
            />
            {/* Achievement Title */}
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500 mb-4">
              {achievement.title}
            </h3>
            <p className="text-gray-800 text-sm md:text-base mb-4">
              {achievement.date}
            </p>
            <p className="text-gray-900 mb-4">{achievement.description}</p>
            {/* Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="inline-flex items-center text-yellow-500 hover:text-yellow-700 transition-colors"
              >
                <FaAward className="mr-2" />
                View More
              </a>
              <a
                href="#"
                className="inline-flex items-center text-indigo-500 hover:text-indigo-700 transition-colors"
              >
                <FaTrophy className="mr-2" />
                Trophy
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-l from-violet-700 to-indigo-700 rounded-full blur-3xl opacity-30 animate-ping"></div>
    </section>
  );
};

export default Achievements;
