import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import profileImg from "../assets/profile.jpg";

function About() {
  return (
    <div id="about" className="w-full h-screen p-2 flex flex-col md:justify-center items-start md:items-center ">
      <div className="flex flex-col mt-20 md:mt-0">

        <div>
          <p className="uppercase text-xl md:text-2xl tracking-widest text-[#5250a4] md:pb-4 w-full ">
            About
          </p>
        </div>

        <div>
          <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 text-left">
            <div className="col-span-2">
              <h2 className="py-4">Who I Am</h2>
              <p className="py-2 text-md md:text-lg text-[#ecf0f3]">
                Full Stack Web Developer and Systems Engineer in training;
                Competencies such as results orientation, capacity for analysis,
                continuous improvement and planning, responsible, excellent
                interpersonal relationships, adaptability to change and continuous
                learning, ability to take risks and decision making, sense of
                belonging, perseverance in their tasks and purposes_
              </p>
            </div>
            <div className="w-auto h-auto m-auto shadow-[0_0px_0px_2px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl flex items-center justify-center p-4">
              <Image
                src={profileImg}
                className="rounded-xl"
                alt="profile"
                width={300}
                height={300}
              />
            </div>
            <Link href="/#projects">
              <p className="py-2 text-[#ecf0f3] underline cursor-pointer">
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
