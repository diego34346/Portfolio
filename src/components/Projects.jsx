import React from "react";
import ProjectItem from "./ProjectItem";
import pokemonImg from "../assets/pokemon.png";
import rickandmortyImg from "../assets/rickandmorty.png";
import viandappImg from "../assets/viandapp.png";
import cvImg from "../assets/cv.png";
import Image from "next/image";

function Projects() {
  return (
    <div id="projects" className="w-full h-full md:h-screen flex flex-col md:justify-center items-start md:items-center">
      <div className="max-w-[1240px] w-full mx-auto flex flex-col justify-center p-2 mt-20 md:mt-0">
        <p className="text-xl md:text-2xl tracking-widest uppercase text-[#5250a4]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="ViandApp"
            backgroundImg={viandappImg}
            projectUrl="/viandApp"
            tech="Next.js"
          />

          <ProjectItem
            title="Rick and Morty"
            backgroundImg={rickandmortyImg}
            projectUrl="/rickAndMorty"
            tech="React.js"
          />

          <ProjectItem
            title="Api Pokemon"
            backgroundImg={pokemonImg}
            projectUrl="/pokemon"
            tech="React.js"
          />

          <div className="relative flex items-center justify-center h-full w-full shadow-[0_0px_15px_4px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#3a388e] to-[#ffffff]">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={cvImg}
              alt="resume"
            />

            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-black tracking-wider text-center">
                Resume <br />
              </h3>

              <p><br /></p>

              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer"
                className="text-center px-3 py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"
              >Download
              </a>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
