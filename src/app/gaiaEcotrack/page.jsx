import { BsCloudCheckFill } from "react-icons/bs"; 
import { GiDaisy } from "react-icons/gi"; 
import { SiTailwindcss } from "react-icons/si"; 
import { SiPrisma } from "react-icons/si";  
import { FaReact } from "react-icons/fa"; 
import { TbBrandNextjs } from "react-icons/tb"; 
import Image from "next/legacy/image";
import React from 'react';
import gaiaEcotrack from '@/assets/gaiaEcotrack.png';
import Link from 'next/link';

const gaiEcotrack = () => {
  return (
    <div className='w-full h-full md:h-vh'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={gaiaEcotrack}
          alt='gaiaEcotrack'
          priority={true}
          rel="preload"
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Gaia Eco-track</h2>
          <h3>Next.js</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React JS and is hosted on Firebase. Users
            are able to search properties based on an Address, City, or ZIP code
            to retrieve a list of active properties currently for sale. You will
            be able to view property information as well as the specific          
          </p>
          <a
            href='https://github.com/ilichb/VaraEnergy'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Github</button>
          </a>
          <a
            href='https://gaia-front-3-0.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Website</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-[#ecf0f3] py-2 flex items-center'>
                <TbBrandNextjs className="mx-3"/> Next.js
              </p>

              <p className='text-[#ecf0f3] py-2 flex items-center'>
                <FaReact className="mx-3"/> React.js
              </p>

              <p className='text-[#ecf0f3] py-2 flex items-center'>
                <SiTailwindcss className="mx-3"/> Tailwind
              </p>

              <p className='text-[#ecf0f3] py-2 flex items-center'>
                <GiDaisy className="mx-3"/> Daisy UI
              </p>

              <p className='text-[#ecf0f3] py-2 flex items-center'>
                <BsCloudCheckFill className="mx-3"/> Cloudinary
              </p>

              <p className='text-[#ecf0f3] py-2 flex items-center'>
                <SiPrisma className="mx-3"/> Prisma ORM
              </p>
              
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <button className='text-2xl cursor-pointer text-white font-bold w-32'> Back</button>
        </Link>
      </div>
    </div>
  );
};

export default gaiEcotrack;