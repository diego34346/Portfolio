import { BsWhatsapp } from "react-icons/bs";
// import Image from 'next/image';
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

function Contact() {
  return (
    <div id="contact" className="w-full lg:h-full">
      <div className="max-w-[1240px] m-auto px-2 pt-20 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#3a388e]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 md:px-10 md:py-0" >
            <div className="lg:p-4 h-full ">
              <div>
                {/* <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                /> */}
              </div>
              <div>
                <h2 className="py-2">Diego Rosas</h2>
                <p>Web Developer full Stack</p>
                <p className="py-4">
                  I am available for freelance, full-time or part-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/diegofeliperosas/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/diego34346"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsWhatsapp />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl md:px-10">
            <div className="p-4">
              <form
                action="https://getform.io/f/b49fb9b3-ebfa-411c-81ab-be662e3d90f3"
                method="POST"
                // encType='multipart/form-data'
              >
                <div className="grid md:grid-cols-2 gap-0 md:gap-4 w-full py-0">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-2 flex border-gray-300 bg-white"
                      type="text"
                      name="name"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Phone Number</label>
                    <input
                      className="border-2 rounded-lg p-2 flex border-gray-300 bg-white"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>

                <div className="flex flex-col ">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-2 flex border-gray-300 bg-white"
                    type="email"
                    name="email"
                  />
                </div>

                <div className="flex flex-col ">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-2 flex border-gray-300 bg-white"
                    type="text"
                    name="subject"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-2 border-gray-300 bg-white"
                    rows="4"
                    name="message"
                  ></textarea>
                </div>

                <button className="w-full p-4 text-black mt-4 bg-white">
                  Send Message
                </button>
                
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#3a388e]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
