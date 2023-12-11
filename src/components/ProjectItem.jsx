import React from "react";
import Image from "next/legacy/image"
import Link from 'next/link'

function ProjectItem({ title, backgroundImg, tech, projectUrl }) {
  return (
    <div className="relative flex items-center justify-center h-full w-full shadow-[0_0px_15px_4px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#3a388e] to-[#ffffff] hover:scale-105 ease-in duration-300">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-black tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-black text-center">{tech}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectItem;
