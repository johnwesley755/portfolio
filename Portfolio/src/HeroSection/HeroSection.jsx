import React from 'react'
import profileImg from '../assets/profile.png'
const HeroSection = () => {
  return (
    <div className="mt-14 flex justify-evenly max-sm:m-10 items-center flex-wrap sm:p-36" id='home'>
      <div className="text-white">
        <h1 className="text-6xl font-bold ">I'm John Wesley</h1>
        <p className="text-2xl font-semibold mt-5">
          Aspiring web developer and UI / UX designer
        </p>
        <p className='mt-5'>
          I'm John Wesley, an aspiring web developer and UI/UX designer with a
          passion for creating innovative digital experiences.
        </p>
      </div>
      <div>
        <img
          src={profileImg}
          className="w-72 h-72 rounded-full border-blue-500 mt-10"
        ></img>
      </div>
    </div>
  );
}

export default HeroSection