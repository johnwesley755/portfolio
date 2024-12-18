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
    <section className="relative py-16 bg-black text-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full opacity-30 animate-pulse z-0"></div>
      <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-l from-indigo-500 to-violet-400 rounded-full opacity-20 animate-bounce z-0"></div>
      <div className="absolute top-0 right-0 w-[36rem] h-[36rem] bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full blur-3xl opacity-20 animate-pulse z-0"></div>
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-gradient-to-l from-violet-700 to-indigo-700 rounded-full blur-3xl opacity-30 animate-ping z-0"></div>

      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 text-center mb-16 relative z-10">
        <h2 className="text-5xl sm:text-6xl md:text-6xl font-extrabold text-white">
          My Achievements
        </h2>
        <p className="mt-4 text-gray-100 text-lg sm:text-xl md:text-2xl">
          A journey through my key accomplishments that highlight my dedication
          and passion for technology.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="relative flex flex-col items-center">
          {/* Timeline Line */}
          <div className="absolute w-1 bg-violet-500 h-full max-md:hidden left-1/2 transform -translate-x-1/2 z-10"></div>

          {/* Timeline Items */}
          {achievementData.map((achievement, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center w-full md:w-10/12 lg:w-9/12 mb-16 ${
                index % 2 === 0 ? "md:items-end" : "md:items-start"
              }`}
            >
              {/* Content */}
              <div
                className={`w-full md:w-1/2 p-6 ${
                  index % 2 === 0 ? "text-right md:pr-12" : "text-left md:pl-12"
                }`}
              >
                <h3 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-white mb-4 max-md:text-left">
                  {achievement.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base italic mb-3 max-md:text-left">
                  {achievement.date}
                </p>
                <p className="text-gray-200 text-sm sm:text-base md:text-lg max-md:text-left">
                  {achievement.description}
                </p>
                <p className="mt-4 text-indigo-300 text-sm sm:text-base font-semibold max-md:text-left">
                  {achievement.institution}
                </p>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center p-6">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-96 h-64 sm:w-[28rem] sm:h-[18rem] object-cover rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110 duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
