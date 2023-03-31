import React from 'react'
import Image from "next/image";

function About() {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
                    About
                </p>
                <h2 className='py-4'>
                    Who I am
                </h2>
                <p className='py-2 text-gray-600'>
                    BIO TO WRITE LATER
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadaow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image width="300" height="300" className='rounded-xl' src="/../public/assets/skills/mac-prog.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About