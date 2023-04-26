import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsTiktok } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import tiktok from '../assets/images/tiktok.png'
import ig from '../assets/images/ig.png'

const Fabs = () => {
  return (
    <>
      <button
        title="Follow us on tiktok"
        className="md:block hidden my-4 fixed z-40 bottom-32 left-8 bg-blue w-16 h-16 p-2 rounded-full drop-shadow-lg flex justify-center items-center text-4xl hover:drop-shadow-2xl hover:animate-bounce duration-900"
      >
        {/* <a
          className=""
          target="_blank"
          href="https://github.com/Marcos8060"
        > */}
          <img src={tiktok} alt="" />
        {/* </a> */}
      </button>
      <button
        title="Follow us on instagram"
        className="md:block hidden fixed z-40 bottom-20 left-8 bg-blue w-16 h-16 p-2 rounded-full drop-shadow-lg flex justify-center items-center text-4xl hover:drop-shadow-2xl hover:animate-bounce duration-300"
      >
        {/* <a
          className=""
          target="_blank"
          href="https://www.linkedin.com/in/marcos-ochieng/"
        > */}
          <img src={ig} alt="" />
        {/* </a> */}
      </button>
      <button
        title="Follow us on Twitter"
        className="md:block hidden fixed z-40 bottom-8 left-8 bg-blue w-16 h-16 p-2 rounded-full drop-shadow-lg flex justify-center items-center text-[#1D9BF0] text-4xl hover:drop-shadow-2xl hover:animate-bounce duration-300"
      >
        {/* <a
          className=""
          target="_blank"
          href="https://twitter.com/MarcosOchieng8"
        > */}
          <AiOutlineTwitter className="text-4xl" />
        {/* </a> */}
      </button>
      <button
        title="Follow me on Twitter"
        className="md:block hidden fixed z-40 bottom-52 right-8 bg-blue w-12 h-12 p-2 rounded-full drop-shadow-lg flex justify-center items-center text-4xl hover:bg-blue-700 hover:drop-shadow-2xl duration-300"
      >
        <div className="text-xs rotate-90 flex space-x-1">
            <p>m</p>
            <p>s</p>
            <p>a</p>
            <p>n</p>
            <p>i</p>
            <p>i</p>
            <p>@</p>
            <p>g</p>
            <p>m</p>
            <p>a</p>
            <p>i</p>
            <p>l</p>
            <p>.</p>
            <p>c</p>
            <p>o</p>
            <p>m</p>
        </div>
      </button>
    </>
  );
};

export default Fabs;