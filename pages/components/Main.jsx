import React from "react";
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const Main = () => {
  return (
    <div className="h-screen w-full text-center" id="home">
      <div className="max-w[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Nate</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a web developer focused on learning mostly front-end languages
            while occasionally using some back-end technologies.
          </p>
          <div className="flex items-center justify-center space-x-4 max-w-[330px] m-auto py-4">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <a href="https://www.linkedin.com/in/nathan-cyr-16230a185/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin/>
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <a href="https://github.com/NathanCyr" target="_blank" rel="noopener noreferrer">
                  <FaGithub/>
                  </a>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
