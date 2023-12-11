import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import profileImg from "../assets/profile.jpg";


function About() {
  return (
    <div id="about" className="w-full h-screen p-2 flex flex-col justify-start items-center 2xl:justify-center 2xl:items-center">
      <div className="flex flex-col mt-20 2xl:mt-0">

        <div>
          <p className="uppercase text-xl md:text-2xl tracking-widest text-[#5250a4] md:pb-4 w-full 2xl:text-[35px]">
            About
          </p>
        </div>

        <div>
          <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 text-left">
            <div className="col-span-2 2xl:w-[90%]">
              <h2 className="py-4 2xl:text-[45px]">Who I Am</h2>
              <p className="p-4 pt-0 md:px-0 md:py-2 text-md md:text-lg text-[#ecf0f3] 2xl:text-[25px] relative">
                Full Stack Web Developer and Systems Engineer in training;
                Competencies such as results orientation, capacity for analysis,
                continuous improvement and planning, responsible, excellent
                interpersonal relationships, adaptability to change and continuous
                learning, ability to take risks and decision making, sense of
                belonging, perseverance in their tasks and purposes_
              </p>
            </div>
            <div className="w-auto h-auto shadow-[0_0px_0px_2px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl flex items-center justify-center m-4 md:m-0 p-4 bigScreen 2xl:mr-4">
              <Image
                src={profileImg}
                className="rounded-xl"
                alt="profile"
                width={300}
                height={300}
              />
            </div>
            <Link href="/#projects">
              <p className="py-2 text-[#ecf0f3] underline cursor-pointer 2xl:text-[25px] 2xl:absolute">
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
        </div>


        
      </div>
    </div>
  );
}

export default About;
