import { SiExpress } from "react-icons/si"; 
import { FaNodeJs } from "react-icons/fa"; 
import { SiRedux } from "react-icons/si"; 

import { SiTypescript } from "react-icons/si"; 
import { SiPostgresql } from "react-icons/si"; 
import { AiFillGithub } from "react-icons/ai"; 
import { TbBrandNextjs } from "react-icons/tb"; 
import { SiTailwindcss } from "react-icons/si"; 
import { FaReact } from "react-icons/fa"; 
import { IoLogoJavascript } from "react-icons/io"; 
import { FaCss3Alt } from "react-icons/fa"; 
import { AiFillHtml5 } from "react-icons/ai"; 
import React from 'react'

function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 pt-20'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl md:text-2xl tracking-widest uppercase text-[#5250a4]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 px-10'>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <AiFillHtml5 className="h-12 w-12 md:h-20 md:w-20"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <FaCss3Alt className="h-12 w-12 md:h-20 md:w-20"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <IoLogoJavascript className="h-12 w-12 md:h-20 md:w-20"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <FaNodeJs className="h-12 w-12 md:h-20 md:w-20"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Node.js</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <FaReact className="h-12 w-12 md:h-20 md:w-20"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <SiRedux className="h-12 w-12 md:h-20 md:w-20"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Redux</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 md:gap-2 justify-center items-center'>
              <div className='m-auto'>
                <SiExpress className="h-12 w-12 md:h-20 md:w-20"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Express</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0  justify-center items-center'>
              <div className='m-auto'>
                <SiPostgresql className="h-12 w-12 md:h-20 md:w-20"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <TbBrandNextjs className="h-12 w-12 md:h-20 md:w-20"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next.js</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <SiTailwindcss className="h-12 w-12 md:h-20 md:w-20"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>          

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <AiFillGithub className="h-12 w-12 md:h-20 md:w-20"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <SiTypescript className="h-12 w-12 md:h-20 md:w-20"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Skills