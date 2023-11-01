import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Presentation() {
  return (
    <div id="start" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-[#ecf0f3]">
            Transforming ideas into experiences.com
          </p>
          <div className="flex flex-row flex-wrap justify-center">

            <h1 className="py-0 md:py-4 text-[#ecf0f3]">
            &lt;Hello World!/&gt;
            </h1>

            <h1 className="py-0 md:py-4 text-[#ecf0f3]">
            I&#39;m <span className="text-[#45439f]">Diego Rosas</span> 
            </h1>
          </div>

          <h1 className="py-0 md:py-2 text-[#ecf0f3]">
            Web Developer Full Stack_
          </h1>
          <p className="py-4 text-[#ecf0f3] sm:max-w-[70%] m-auto">
          Web application development with an interactive and creative approach on the <br/> front-end side, 
          functional and operational on the back-end side_
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/diegofeliperosas/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-[0_0px_10px_3px_rgba(0,0,0,0.3)] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn className="text-2xl"/>
              </div>
            </a>
            <a
              href="https://github.com/diego34346"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-[0_0px_10px_3px_rgba(0,0,0,0.3)] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub className="text-2xl"/>
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-[0_0px_10px_3px_rgba(0,0,0,0.3)] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail className="text-2xl"/>
              </div>
            </Link>
            <Link href="/">
              <div className="rounded-full shadow-[0_0px_10px_3px_rgba(0,0,0,0.3)] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill className="text-2xl"/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
