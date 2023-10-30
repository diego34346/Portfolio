"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/pokemon' ||
      router.asPath === '/rickAndMorty' ||
      router.asPath === '/viandApp'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (

    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-10 2xl:px-16 ">
        <div>
          <Link href="/">
            <h1 className='py-4 text-[#3a388e]' >Diego</h1>
          </Link>
        </div>

        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b-2 hover:border-indigo-800">
              <Link href="/#start">Start</Link>
            </li>

            <li className="ml-8 text-sm uppercase hover:border-b-2 hover:border-indigo-800">
              <Link href="/#about">About</Link>
            </li>

            <li className="ml-8 text-sm uppercase hover:border-b-2 hover:border-indigo-800">
              <Link href="/#skills">Skills</Link>
            </li>

            <li className="ml-8 text-sm uppercase hover:border-b-2 hover:border-indigo-800">
              <Link href="/#projects">Projects</Link>
            </li>

            <li className="ml-8 text-sm uppercase border-b-2 border-[#ecf0f3] hover:border-b-2 hover:border-indigo-800">
              <Link href="/#contact">Contact</Link>
            </li> 
          </ul>
        </div>

        <div
          style={{ color: `${linkColor}` }}
          onClick={handleNav}
          className="md:hidden"
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/#start">
              <h1 className='py-4 text-[#3a388e]' >Diego</h1>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4"></div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">

              <Link href="/#start">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Start
                </li>
              </Link>

              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>

              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>

              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/diegofeliperosas/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>

                <a
                  href="https://github.com/diego34346"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>

                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>

                <Link href="/">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  );
}

export default Navbar;
