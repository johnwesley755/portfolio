import React from 'react'
import htmlImg from '../assets/html.svg'
import cssImg from '../assets/css.svg'
import jsImg from '../assets/javascript.svg'
import reactImg from '../assets/react.svg';
import viteImg from '../assets/vite.svg';
import muiImg from '../assets/mui.svg';
import framerImg from '../assets/framer-motion.svg'
import tailwindcssImg from '../assets/tailwind-css.svg'
import firebaseImg from '../assets/firebase.svg'
import vscodeImg from '../assets/vscode.svg'
import gitImg from '../assets/git.svg'
import githubImg from '../assets/github.svg'
import figmaImg from '../assets/figma.svg'
import pythonImg from '../assets/python.svg'
import cImg from '../assets/c.svg'
const Skills = () => {
  return (
    <div id='skills'>
      <div className="text-center text-white mt-20 text-4xl font-bold tracking-wide">
        SKILLS
      </div>
      <div className="ml-10 mt-12 text-white text-2xl font-bold tracking-wide">
        Front end development
      </div>
      <div className="flex gap-10 mt-8 flex-wrap ml-10">
        <img
          src={htmlImg}
          className="h-10 w-30 cursor-pointer hover:p-0.5 "
        ></img>
        <img
          src={cssImg}
          className="h-10 w-30 cursor-pointer hover:p-0.5"
        ></img>
        <img src={jsImg} className="h-10 w-30 cursor-pointer hover:p-0.5"></img>
        <img
          src={reactImg}
          className="h-10 w-30 cursor-pointer hover:p-0.5"
        ></img>
        <img
          src={viteImg}
          className="h-10 w-30 cursor-pointer hover:p-0.5"
        ></img>
        <img
          src={muiImg}
          className="h-10 w-30 cursor-pointer hover:p-0.5"
        ></img>
        <img
          src={framerImg}
          className="h-10 w-30 cursor-pointer hover:p-0.5"
        ></img>
        <img
          src={tailwindcssImg}
          className="h-10 w-30 cursor-pointer hover:p-0.5"
        ></img>
      </div>
      <div className="ml-10 mt-12 text-white text-2xl font-bold tracking-wide">
        Back end development
      </div>
      <div className="flex gap-10 mt-8 flex-wrap ml-10">
        <img
          src={firebaseImg}
          className="h-10 w-30 cursor-pointer hover:p-0.5"
        ></img>
      </div>
      <div className="ml-10 mt-12 text-white text-2xl font-bold tracking-wide">
        Programming language
      </div>
      <div className="flex gap-10 mt-8 flex-wrap ml-10">
        <img
          src={pythonImg}
          className="h-10 w-30 cursor-pointer hover:p-0.5"
        ></img>
        <img 
        src={cImg} 
        className="h-10 w-30 cursor-pointer hover:p-0.5">
        </img>
      </div>
      <div className="ml-10 mt-12 text-white text-2xl font-bold tracking-wide">
        Development tools
      </div>
      <div className="flex gap-10 mt-8 flex-wrap ml-10">
        <img src={vscodeImg} className="h-10 w-30 cursor-pointer hover:p-0.5"></img>
        <img src={gitImg} className="h-10 w-30 cursor-pointer hover:p-0.5"></img>
        <img src={githubImg} className="h-10 w-30 cursor-pointer hover:p-0.5"></img>
        <img src={figmaImg} className="h-10 w-30 cursor-pointer hover:p-0.5"></img>
      </div>
    </div>
  );
}

export default Skills