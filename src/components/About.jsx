import React from 'react';
import Link from 'next/link';
import Image from "next/legacy/image";
import profileImg from "../assets/profile.jpg"

function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center pt-20'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#3a388e]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          Full Stack Web Developer and Systems Engineer in training; Competencies such as results orientation,
          capacity for analysis, continuous improvement and planning, responsible, excellent interpersonal
          relationships, adaptability to change and continuous learning, ability to take risks and decision
          making, sense of belonging, perseverance in their tasks and purposes_
          </p>

          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4'>
          <Image src={profileImg} className='rounded-xl' alt='profile' width={300} height={300}/>
        </div>
      </div>
    </div>
  )
}

export default About