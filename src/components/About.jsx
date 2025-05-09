import React from "react";
import Ashish from "../assets/aboutimage.png";
import { IoCodeSlashSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-900 rounded-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      {/* Content */}
      <div className="flex flex-col items-center justify-center gap-10 md:gap-16 text-left md:flex-row">
        {/* Image and Icon */}
        <motion.div
          className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background circle */}
          <div className="w-full h-full rounded-full absolute top-0 left-0 -z-10 bg-gradient-to-r from-purple-400 to-purple-700"></div>

          {/* Icon */}
          <div className="absolute bottom-5 right-2.5 transform translate-x-1/3 translate-y-1/3 z-10 bg-white p-2 sm:p-3 rounded-full border-2 border-white shadow-lg">
            <IoCodeSlashSharp className="text-purple-500 w-4 h-4 sm:w-5 sm:h-5" />
          </div>

          {/* Profile image */}
          <img
            src={Ashish}
            alt="Ashish Rathi, Frontend Developer and UI/UX Design Enthusiast"
            className="w-full h-full object-cover rounded-full border-4 border-purple-500 opacity-90"
          />
        </motion.div>

        {/* Paragraph */}
        <motion.div
          className="max-w-2xl text-white text-center md:text-left"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
            Ashish Rathi
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            I'm a <strong>Frontend Developer</strong> and <strong>UI/UX Design Enthusiast</strong> with hands-on experience in building responsive, accessible, and visually appealing web interfaces. I specialize in <strong>HTML, CSS, JavaScript, React, Tailwind CSS</strong>, and <strong>shadcn/ui</strong>, combining robust frontend skills with a keen eye for design.
            <br /><br />
            With a strong foundation in <strong>wireframing, prototyping</strong>, and design tools like <strong>Figma, Adobe XD</strong>, and <strong>InVision</strong>, I create user-centered experiences that prioritize usability and aesthetics.
            <br /><br />
            My passion lies in blending clean, maintainable code with thoughtful design to build seamless and impactful web applications. I enjoy collaborating in team environments and constantly strive to grow both as a developer and designer.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
