import React from 'react'
import Image from "next/image";
import SkillCard from './SkillCard';

function Skills() {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest text-[#5651e5] uppercase'>
                Skills
            </p>
            <h2 className='py-4'>
                What I can do
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

            <SkillCard imageSrc="/../public/assets/skills/html.png" skillName="HTML" />
            <SkillCard imageSrc="/../public/assets/skills/css.png" skillName="CSS" />
            <SkillCard imageSrc="/../public/assets/skills/mongo.png" skillName="Mongo" />
            <SkillCard imageSrc="/../public/assets/skills/nextjs.png" skillName="NextJS" />
            <SkillCard imageSrc="/../public/assets/skills/node.png" skillName="Node" />
            <SkillCard imageSrc="/../public/assets/skills/tailwind.png" skillName="TailWind" />
            </div>
        </div>
    </div>
  )
}

export default Skills