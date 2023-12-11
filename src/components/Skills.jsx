import { SiHiveBlockchain } from "react-icons/si"; 
import { FaRust } from "react-icons/fa"; 
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
    <div id='skills' className='w-full h-full md:h-screen p-2 flex flex-col md:justify-center items-start md:items-center'>
      <div className='max-w-[1240px] w-full mx-auto flex flex-col justify-center mt-20 md:mt-0'>
        <p className='text-xl md:text-2xl tracking-widest uppercase text-[#5250a4]'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-10'>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <AiFillHtml5 className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h4>HTML</h4>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <FaCss3Alt className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h4>CSS</h4>
              </div>  
            </div>
          </div>

          <div className='p-6 md:pl-3 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <IoLogoJavascript className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h4>JavaScript</h4>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <FaNodeJs className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h4>Node.js</h4>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <FaReact className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h4>React</h4>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <SiRedux className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h4>Redux</h4>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 md:gap-2 justify-center items-center'>
              <div className='m-auto'>
                <SiExpress className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h4>Express</h4>
              </div>
            </div>
          </div>

          <div className='p-6 md:pl-3 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0  justify-center items-center'>
              <div className='m-auto'>
                <SiPostgresql className="h-12 w-12 md:h-14 md:w-14"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h4>PostgreSQL</h4>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <AiFillGithub className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h4>Github</h4>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <TbBrandNextjs className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h4>Next.js</h4>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <SiTailwindcss className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h4>Tailwind</h4>
              </div>
            </div>
          </div>

          <div className='p-6 md:pl-3 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <SiTypescript className="h-12 w-12 md:h-14 md:w-14"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h4>TypeScript</h4>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <FaRust className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h4>Rust</h4>
              </div>
            </div>
          </div>

          <div className='p-6 pl-3 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto'>
                <SiHiveBlockchain className="h-12 w-12 md:h-14 md:w-14"/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h4>Blockchain</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Skills