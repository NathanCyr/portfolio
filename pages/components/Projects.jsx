import React from "react";
import Image from "next/image";
import Link from "next/link";

import propertyImg from '../../public/assets/projects/netflix-clone.jpeg';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard title='Netflix Clone' backgroundImg={propertyImg} projectURL='/'/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
