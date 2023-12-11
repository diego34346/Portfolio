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
    <div id='skills' className='w-full h-full md:h-screen p-2 flex flex-col justify-start items-start 2xl:justify-center 2xl:items-center'>
      <div className='max-w-[1240px] w-full mx-auto flex flex-col mt-20 2xl:mt-0'>
        <p className='text-xl md:text-2xl tracking-widest uppercase text-[#5250a4] 2xl:text-[35px] 2xl:mt-4'>
          Skills
        </p>
        <h2 className='py-4 2xl:text-[45px]'>What I Can Do</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-4 gap-8 px-10 skills 2xl:mt-10'>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 '>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center '>
              <div className='m-auto bigScreen'>
                <AiFillHtml5 className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center bigScreen'>
                <h4>HTML</h4>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto bigScreen'>
                <FaCss3Alt className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center bigScreen'>
                <h4>CSS</h4>
              </div>  
            </div>
          </div>

          <div className='p-6 md:pl-3 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto bigScreen'>
                <IoLogoJavascript className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center bigScreen'>
                <h4>JavaScript</h4>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto bigScreen'>
                <FaNodeJs className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center bigScreen'>
                <h4>Node.js</h4>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto bigScreen'>
                <FaReact className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center bigScreen'>
                <h4>React</h4>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto bigScreen'>
                <SiRedux className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center bigScreen'>
                <h4>Redux</h4>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 md:gap-2 justify-center items-center'>
              <div className='m-auto bigScreen'>
                <SiExpress className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center bigScreen'>
                <h4>Express</h4>
              </div>
            </div>
          </div>

          <div className='p-6 md:pl-3 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0  justify-center items-center'>
              <div className='m-auto bigScreen'>
                <SiPostgresql className="h-12 w-12 md:h-14 md:w-14"/>
              </div>
              <div className='flex flex-col items-center justify-center bigScreen'>
                <h4>PostgreSQL</h4>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto bigScreen'>
                <AiFillGithub className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center bigScreen'>
                <h4>Github</h4>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto bigScreen'>
                <TbBrandNextjs className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center bigScreen'>
                <h4>Next.js</h4>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto bigScreen'>
                <SiTailwindcss className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center bigScreen'>
                <h4>Tailwind</h4>
              </div>
            </div>
          </div>

          <div className='p-6 md:pl-3 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto bigScreen'>
                <SiTypescript className="h-12 w-12 md:h-14 md:w-14"/>
              </div>
              <div className='flex flex-col items-center justify-center bigScreen'>
                <h4>TypeScript</h4>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto bigScreen'>
                <FaRust className="h-12 w-12 md:h-16 md:w-16"/>
              </div>
              <div className='flex flex-col items-center justify-center bigScreen'>
                <h4>Rust</h4>
              </div>
            </div>
          </div>

          <div className='p-6 pl-3 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols md:grid-cols-2 gap-0 justify-center items-center'>
              <div className='m-auto bigScreen'>
                <SiHiveBlockchain className="h-12 w-12 md:h-14 md:w-14"/>
              </div>
              <div className='flex flex-col items-center justify-center bigScreen'>
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