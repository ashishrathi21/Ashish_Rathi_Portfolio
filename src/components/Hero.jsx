import React from "react";
import Ashish from "../assets/favicon.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaSquareJs, FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import { motion } from "framer-motion";

const Hero = () => {

  const handleScrollToBottom = () => {
    const section = document.getElementById('skills');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
   };

  return (
    <section
      id="home"
      className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center pt-20 pb-16 px-6 sm:px-8 md:px-12 lg:px-16"
    >
      {/* Image */}
      <motion.img
        src={Ashish}
        alt="Ashish Rathi"
        className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 object-cover rounded-full cursor-pointer shadow-purple-500 shadow-sm border-2 border-purple-500 mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-purple-400 via-purple-400 to-purple-700 bg-clip-text text-transparent">
          Ashish Rathi
        </span>
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 px-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Passionate Frontend Developer | UI/UX Enthusiast 
      </motion.p>

{/* Social Icons */}
<motion.div
  className="flex justify-center "
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
>
  <div className="flex flex-wrap justify-center gap-6 "
  >
    <a
      className="text-orange-600 hover:text-orange-700 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-110"
    >
      <FaHtml5 className="text-2xl sm:text-3xl md:text-4xl" />
    </a>
    <a
      className="text-yellow-400 hover:text-yellow-500 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-110"
    >
      <FaSquareJs className="text-2xl sm:text-3xl md:text-4xl" />
    </a>
    <a
      className="text-blue-400 hover:text-blue-500 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-110"
    >
      <FaReact className="text-2xl sm:text-3xl md:text-4xl" />
    </a>
    <a
      className="text-cyan-400 hover:text-cyan-500 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-110"
    >
      <RiTailwindCssFill className="text-2xl sm:text-3xl md:text-4xl" />
    </a>
    <a
      className="text-purple-500 hover:text-purple-600 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-110"
    >
      <CgFigma className="text-2xl sm:text-3xl md:text-4xl" />
    </a>
  </div>
</motion.div>

{/* Buttons */}
<motion.div
  className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 px-6 sm:px-0"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6 }}
>
  <a
    href="#projects"
    className="flex gap-2 items-center justify-center bg-purple-500 text-white px-6 py-2.5 rounded-xl hover:bg-purple-600 text-sm font-medium transition-all"
  >
    View My Work <FaArrowRightLong className="mt-1 text-lg" />
  </a>

  <a
    href="#contact"
    className="flex gap-2 items-center justify-center border-2 border-purple-500 text-white px-6 py-2.5 rounded-xl hover:border-purple-800 text-sm font-medium transition-all"
  >
    Connect With Me <FaArrowRightLong className="mt-1 text-lg" />
  </a>
</motion.div>

      

      {/* Scroll Down Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <FaChevronDown onClick={handleScrollToBottom} className="size-7 text-purple-500 mt-10 cursor-pointer animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
