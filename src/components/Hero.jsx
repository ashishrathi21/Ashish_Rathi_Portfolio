import React from "react";
import Ashish from "../assets/favicon.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { FaLinkedinIn, FaGithub, FaBehance } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center pt-28 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Image */}
      <motion.img
        src={Ashish}
        alt="Ashish Rathi"
        className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 object-cover rounded-full cursor-pointer shadow-purple-500 shadow-sm border-2 border-purple-500 mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white mb-4"
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
        className="text-base sm:text-lg text-gray-300 mb-8 px-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Passionate Frontend Developer | UI/UX Enthusiast | Lifelong Learner
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="#projects"
          className="flex gap-2 items-center justify-center bg-purple-500 text-white px-6 py-2.5 rounded-xl hover:bg-purple-600 text-sm font-medium transition-all"
        >
          View My Work <FaArrowRightLong className="mt-1 size-4" />
        </a>

        <a
          href="#connect"
          className="flex gap-2 items-center justify-center border-2 border-purple-500 text-white px-6 py-2.5 rounded-xl hover:border-purple-800 text-sm font-medium transition-all"
        >
          Connect With Me <FaArrowRightLong className="mt-1 size-4" />
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex gap-5 items-center justify-center text-white mt-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex gap-6 text-2xl mt-4">
          <a
            href="https://www.linkedin.com/in/ashish-rathi-a52749298/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-purple-400 hover:text-purple-600" />
          </a>
          <a
            href="https://github.com/ashishrathi21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-purple-400 hover:text-purple-600" />
          </a>
          <a
            href="https://www.behance.net/ashishrathi2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance className="text-purple-400 hover:text-purple-600" />
          </a>
          <a
            href="https://www.instagram.com/ashish__rathi21/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-purple-400 hover:text-purple-600" />
          </a>
          <a
            href="https://x.com/Ashish_Rathi_21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="text-purple-400 hover:text-purple-600" />
          </a>
        </div>
      </motion.div>

      {/* Scroll Down Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <FaChevronDown className="size-7 text-purple-500 mt-10 cursor-pointer" />
      </motion.div>
    </section>
  );
};

export default Hero;
