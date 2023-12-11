import { BsWhatsapp } from "react-icons/bs";
// import Image from 'next/image';
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

function Contact() {
  return (
    <div id="contact" className="w-full h-full md:h-screen flex md:justify-center items-start md:items-center">
      <div className="max-w-[1240px] w-full h-full mx-auto px-2 py-2 flex flex-col justify-center mt-20">
        <p className="text-xl md:text-2xl tracking-widest uppercase text-[#5250a4]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid md:grid-cols-5 gap-8">
          <div className="col-span-3 md:col-span-2 w-full h-full shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl p-4 md:px-10 md:pt-5" >
            <div className="h-full ">
              <div>
                {/* <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                /> */}
              </div>
              <div>
                <h2 className="py- text-[#45439f]">Diego Rosas</h2>
                <p>Web Developer full Stack</p>
                <p className="py-4">
                  I am available for freelance, full-time or part-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 pb-4">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/diegofeliperosas/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-[0_0px_10px_3px_rgba(0,0,0,0.3)] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn className="text-2xl"/>
                    </div>
                  </a>
                  <a
                    href="https://github.com/diego34346"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-[0_0px_10px_3px_rgba(0,0,0,0.3)] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub className="text-2xl"/>
                    </div>
                  </a>

                  <div className="rounded-full shadow-[0_0px_10px_3px_rgba(0,0,0,0.3)] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsWhatsapp className="text-2xl"/>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-span-3 w-full h-auto shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] shadow-gray-400 rounded-xl md:px-10 md:py-5">
            <div className="p-4 md:p-0">
              <form
                action="https://getform.io/f/b49fb9b3-ebfa-411c-81ab-be662e3d90f3"
                method="POST"
                // encType='multipart/form-data'
              >
                <div className="grid md:grid-cols-2 gap-0 md:gap-4 w-full py-">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-2 flex text-black border-gray-300 bg-[#ecf0f3] h-8"
                      type="text"
                      name="name"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone Number</label>
                    <input
                      className="border-2 rounded-lg p-2 flex text-black border-gray-300 bg-[#ecf0f3] h-8"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-0 md:gap-4 w-full py-0">
                  <div className="flex flex-col ">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      className="border-2 rounded-lg p-2 flex text-black border-gray-300 bg-[#ecf0f3] h-8"
                      type="email"
                      name="email"
                    />
                  </div>

                  <div className="flex flex-col ">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input
                      className="border-2 rounded-lg p-2 flex text-black border-gray-300 bg-[#ecf0f3] h-8"
                      type="text"
                      name="subject"
                    />
                  </div>                  
                </div>


                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-2 text-black border-gray-300 bg-[#ecf0f3]"
                    rows="3"
                    name="message"
                  ></textarea>
                </div>

                <button className="p-4 text-white mt-4 bg-white">
                  Send Message
                </button>
                
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-8 pb-6">
          <Link href="/#start">
            <div className="rounded-full shadow-[0_0px_10px_3px_rgba(0,0,0,0.3)] shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5250a4]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
