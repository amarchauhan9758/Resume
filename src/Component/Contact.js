import React from 'react';
import '../index.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { ImSkype } from "react-icons/im";
import { RiWhatsappFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
    <React.Fragment>
         <div className="w-5/6 bg-white text-gray-700 font-medium tracking-wide translate-x-36 -translate-y-24  rounded-xl absolute ">
          <div className='grid grid-cols-6 px-8 py-8 gap-y-6'>
            <div className='col-span-3  '>
              <div className="flex justify-center items-center space-x-4 text-lg">
                <BsFillTelephoneFill className='text-2xl text-sky-400' />
                <p>+91 7983779331</p>
              </div>
            </div>
            <div className='col-span-3 '>
              <div className="flex justify-center items-center space-x-4 text-lg">
                <MdMarkEmailUnread className='text-2xl text-red-500'/>
                <p>amarchauhan06232@gmail.com</p>
              </div>
            </div>
            <div className='col-span-3'>
              <div className="flex justify-center items-center space-x-4 text-lg">
                <FaLinkedinIn className='text-2xl text-blue-500'/>
                <p>
                  <a  target="/blank" href="https://www.linkedin.com/in/amar-singh-chauhan-a0267b193/">Amar Singh Chauhan</a>
                </p>
              </div>
            </div>
            <div className='col-span-3'>
              <div className="flex justify-center items-center space-x-4 text-lg">
                <ImLocation2 className='text-2xl text-green-600'/>
                <p>Bareilly , UttarPradesh (INDIA)</p>
              </div>
            </div>
            <div className='col-span-3 '>
              <div className="flex justify-center items-center space-x-4 text-lg">
                <FaGithub className='text-2xl text-black'/>
                <p>
                <a  target="/blank" href="https://github.com/amarchauhan9758/">amarchauhan9758</a>

                </p>
              </div>
            </div>
            {/* <div className='col-span-2 '>
              <div className="flex  justify-center space-x-4  items-center text-lg">
                <ImSkype className='text-2xl text-sky-400 ' />
                <p> https://join.skype.com/invite/wBxbOOgIdEwc</p>
              </div>
            </div> */}
            <div className='col-span-3  '>
              <div className="flex text-start justify-center items-center space-x-4 text-lg">
                <RiWhatsappFill className='text-2xl text-green-500'/>
                <p>7983779331</p>
              </div>
            </div>

          </div>

        </div>
    </React.Fragment>
  )
}

export default Contact