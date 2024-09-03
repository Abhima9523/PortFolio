import React from "react";

import pic from "../../public/mainpng1.jpg";

import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa6";

import { FaReact } from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiSpringboot } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";


function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Portfolio</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hello, I'm Abhimanyu, a passionate Web developer with a keen eye for FULLSTACK
          . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                  <a href="http://www.linkedin.com/in/abhimanyu-kumar9818" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                  <a href="https://github.com/Abhima9523/Ahimanyu-kumar/" target="_blank">
                  <BsGithub  className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:abhimanyukr9818@gmail.com" target="_blank">
                    <MdEmail className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Abhima9523/Ahimanyu-kumar/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                <FaReact  className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                <RiJavaLine className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                <IoLogoJavascript  className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiSpringboot  className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"/>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className=" md:w-[450px] md:h-[500px] shadow-lg mt-[-20px]"
              alt=""
              // rounded-full
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
