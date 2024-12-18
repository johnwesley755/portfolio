import React from "react";
import kcgImg from "../src/assets/kcg.jpg";
import internalImg from "../src/assets/internal.jpg";

// Achievement data with images and descriptions
const achievementData = [
  {
    title: "Pitchathon Finalist",
    institution: "Vellore Institute of Technology, Chennai",
    description:
      "Demonstrated virtual try-on scalability to enhance customer experience in a 30-hour hackathon.",
    date: "10/2024",
    image: "https://pitchathon.co.in/challenge/assets/img/fullLogo.png",
  },
  {
    title: "Innothon ’24 Finalist",
    institution: "KCG College of Technology, Chennai",
    description:
      "Presented an AI-powered virtual try-on solution at a 30-hour hackathon.",
    date: "09/2024",
    image: kcgImg,
  },
  {
    title: "Conducted Internal Hackathon",
    institution: "St. Joseph's Institute of Technology, Chennai.",
    description:
      "Organized and led an internal hackathon to foster innovation and problem-solving within the institution.",
    date: "10/2024",
    image: internalImg,
  },
];

const Achievements = () => {
  return (
    <section className="relative py-12 bg-gradient-to-r from-gray-900 via-violet-800 to-indigo-900 text-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-indigo-500 to-violet-400 rounded-full opacity-20 animate-bounce"></div>

      <div className="container mx-auto px-6 text-center mb-10">
        <h2 className="text-5xl md:text-7xl font-extrabold text-white">
          My Achievements
        </h2>
        <p className="mt-2 text-gray-100 text-lg md:text-xl">
          A journey through my key accomplishments that highlight my dedication
          and passion for technology.
        </p>
      </div>

      {/* Responsive Timeline */}
      <div className="container mx-auto px-6 relative">
        <div className="relative border-l-4 border-violet-500 md:border-l-0 md:border-r-4 timeline">
          {achievementData.map((achievement, index) => (
            <div
              key={index}
              className={`mb-10 flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Content */}
              <div className="md:w-10/12 px-4 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base italic mb-2">
                  {achievement.date}
                </p>
                <p className="text-gray-200">{achievement.description}</p>
                <p className="mt-4 text-indigo-300 text-sm">
                  <strong>{achievement.institution}</strong>
                </p>
              </div>

              {/* Image */}
              <div className="md:w-10/12 flex justify-center px-4 mt-4 md:mt-0">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-96 h-60 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-110 duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-l from-violet-700 to-indigo-700 rounded-full blur-3xl opacity-30 animate-ping"></div>
    </section>
  );
};

export default Achievements;
