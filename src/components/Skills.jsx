import React from "react";
import { LuFigma } from "react-icons/lu";
import { SiAdobexd } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiShadcnui } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { BiLogoNetlify } from "react-icons/bi";
import { DiGithubFull } from "react-icons/di";
import { FaCode } from "react-icons/fa6";
import { motion } from "framer-motion";  // Import motion from framer-motion

const Skills = () => {
  return (
    <section id="skills" className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Technical Stack & Skills
      </motion.h2>

      {/* Skills Grid Layout */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white text-base sm:text-lg justify-center"
        initial={{ opacity: 0 }}  
        animate={{ opacity: 1 }}  
        transition={{ duration: 1.2 }} 
      >
        {/* Frontend Development */}
        <motion.div 
          className="border border-purple-600 rounded-xl p-6 hover:shadow-lg transition duration-300 w-full"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}  // Added hover effect
        >
          <h3 className="text-xl font-semibold text-purple-400 mb-4 text-center">Frontend Development</h3>
          <div className="grid grid-cols-3 gap-4 justify-center">
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -10, scale: 1.1 }}  // Added hover animation to each icon
              transition={{ duration: 0.3 }}
            >
              <SiHtml5 className="text-orange-600 text-4xl" />
              <span className="text-sm mt-2">HTML5</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -10, scale: 1.1 }}  
              transition={{ duration: 0.3 }}
            >
              <SiCss3 className="text-blue-500 text-4xl" />
              <span className="text-sm mt-2">CSS3</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -10, scale: 1.1 }}  
              transition={{ duration: 0.3 }}
            >
              <SiJavascript className="text-yellow-500 text-4xl" />
              <span className="text-sm mt-2">JavaScript</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -10, scale: 1.1 }}  
              transition={{ duration: 0.3 }}
            >
              <SiReact className="text-cyan-400 text-4xl" />
              <span className="text-sm mt-2">React.js</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -10, scale: 1.1 }}  
              transition={{ duration: 0.3 }}
            >
              <SiTailwindcss className="text-teal-400 text-4xl" />
              <span className="text-sm mt-2">Tailwind CSS</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -10, scale: 1.1 }}  
              transition={{ duration: 0.3 }}
            >
              <SiShadcnui className="text-violet-600 text-4xl" />
              <span className="text-sm mt-2">shadcn/ui</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -10, scale: 1.1 }}  
              transition={{ duration: 0.3 }}
            >
              <TbBrandFramerMotion className="text-pink-500 text-4xl" />
              <span className="text-sm mt-2">Framer Motion</span>
            </motion.div>
          </div>
        </motion.div>

        {/* UI/UX Design Tools */}
        <motion.div 
          className="border border-purple-600 rounded-xl p-6 hover:shadow-lg transition duration-300 w-full"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <h3 className="text-xl font-semibold text-purple-400 mb-4 text-center">UI/UX Design Tools</h3>
          <div className="grid grid-cols-3 gap-4 justify-center">
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -10, scale: 1.1 }}  
              transition={{ duration: 0.3 }}
            >
              <LuFigma className="text-orange-600 text-4xl" />
              <span className="text-sm mt-2">Figma</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -10, scale: 1.1 }}  
              transition={{ duration: 0.3 }}
            >
              <SiAdobexd className="text-red-800 text-4xl" />
              <span className="text-sm mt-2">Adobe XD</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -10, scale: 1.1 }}  
              transition={{ duration: 0.3 }}
            >
              <SiCanva className="text-blue-400 text-4xl" />
              <span className="text-sm mt-2">Canva</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -10, scale: 1.1 }}  
              transition={{ duration: 0.3 }}
            >
              <SiAdobephotoshop className="text-blue-800 text-4xl" />
              <span className="text-sm mt-2">Photoshop</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Other Tools */}
        <motion.div 
          className="border border-purple-600 rounded-xl p-6 hover:shadow-lg transition duration-300 w-full"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <h3 className="text-xl font-semibold text-purple-400 mb-4 text-center">Other Tools & Concepts</h3>
          <div className="grid grid-cols-3 gap-4 justify-center">
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -10, scale: 1.1 }}  
              transition={{ duration: 0.3 }}
            >
              <FaGitAlt className="text-orange-600 text-4xl" />
              <span className="text-sm mt-2">Git</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -10, scale: 1.1 }}  
              transition={{ duration: 0.3 }}
            >
              <FaGithub className="text-white text-4xl" />
              <span className="text-sm mt-2">GitHub</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -10, scale: 1.1 }}  
              transition={{ duration: 0.3 }}
            >
              <FaNpm className="text-orange-600 text-4xl" />
              <span className="text-sm mt-2">npm</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -10, scale: 1.1 }}  
              transition={{ duration: 0.3 }}
            >
              <SiVite className="text-yellow-300 text-4xl" />
              <span className="text-sm mt-2">Vite</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -10, scale: 1.1 }}  
              transition={{ duration: 0.3 }}
            >
              <IoLogoVercel className="text-indigo-500 text-4xl" />
              <span className="text-sm mt-2">Vercel</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -10, scale: 1.1 }}  
              transition={{ duration: 0.3 }}
            >
              <BiLogoNetlify className="text-green-600 text-4xl" />
              <span className="text-sm mt-2">Netlify</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -10, scale: 1.1 }}  
              transition={{ duration: 0.3 }}
            >
              <DiGithubFull className="text-gray-800 text-4xl" />
              <span className="text-sm mt-2">GitHub Pages</span>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ y: -10, scale: 1.1 }}  
              transition={{ duration: 0.3 }}
            >
              <FaCode className="text-purple-500 text-4xl" />
              <span className="text-sm mt-2">Clean Code Practices</span>
            </motion.div>
          </div>
        </motion.div>
        
      </motion.div>
    </section>
  );
};

export default Skills;
