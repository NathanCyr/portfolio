import React from "react";
import Image from "next/image";
import Link from "next/link";

import {HiOutlineChevronDoubleUp} from 'react-icons/hi';

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in touch with me</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400  p-4 rounded-xl">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/../public/assets/skills/linkedin.png"
                  alt=""
                  width="50"
                  height="50"
                />
              </div>
              <div>
                <h2 className="py-2">Nate</h2>
                <p>Web Developer</p>
                <p className="py-4">
                  I am always open to new work, so do not hesitate to contact
                  me!
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Let's connect together</p>
                <div>
                  <div className="flex items-center justify-left space-x-4 max-w-[330px] m-auto py-4">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedin />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text"/>
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text"/>
                  </div>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text"/>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text"/>
                </div>
                <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea className="border-2 rounded-lg p-3 border-gray-300" rows='10'></textarea>
                </div>
                <button className="w-full p-4 text-gray-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href=''>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30}/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
