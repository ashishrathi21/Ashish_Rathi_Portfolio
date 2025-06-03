import React from "react";
import { motion } from "framer-motion";
import Project_1 from "../assets/project_1.png";
import Project_2 from "../assets/project_2.png";
import Project_3 from "../assets/project_3.png";
import Design_1 from '../assets/elearning.png';
import Design_2 from '../assets/medical.png';
import Design_3 from '../assets/travel.png';
import { FaExternalLinkAlt } from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.2 }
};

const Project = () => {
  return (
    <motion.section
      id="projects"
      className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center pt-28 pb-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
        Projects
      </h2>
      <p className="text-md sm:text-base md:text-lg font-semibold text-gray-400 mb-8">
        Highlighting my frontend development and UI/UX design projects, focusing
        on <br />
        creating user-friendly and visually appealing websites.
      </p>

      {/* Frontend Projects */}
      <p className="text-xl sm:text-lg md:text-2xl font-bold text-purple-500 mb-8">
        Frontend Projects
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        <motion.div {...fadeInUp}>
          <ProjectCard
            img={Project_1}
            title="Modern Landing Page"
            description="A modern, responsive frontend project showcasing clean UI and fast user experience."
            tech="React.js, Tailwind CSS, Framer Motion, HTML, CSS, JavaScript"
            demoLink="https://react-landing-page-tailwind-css.vercel.app/"
            githubLink="https://github.com/ashishrathi21/react-landingPage-tailwindCSS"
          />
        </motion.div>

        <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
          <ProjectCard
            img={Project_2}
            title="Pet Shop Landing Page"
            description="A Responsive Frontend project with a focus on user engagement and accessibility."
            tech="React.js, Tailwind CSS, Framer Motion, HTML, CSS, JavaScript"
            demoLink="https://pet-shop-landing-page-react-tailwind-css.vercel.app/"
            githubLink="https://github.com/ashishrathi21/PetShop_LandingPage_React_TailwindCSS"
          />
        </motion.div>

        <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
          <ProjectCard
            img={Project_3}
            title="TIC TAC TOE"
            description="A responsive Tic Tac Toe game designed for seamless user interaction, with a focus on accessibility and smooth gameplay."
            tech="HTML, CSS, JavaScript"
            demoLink="https://ashishrathi21.github.io/TIC-TAC-TOE-Game/"
            githubLink="https://github.com/ashishrathi21/TIC-TAC-TOE-Game"
          />
        </motion.div>
      </div>

      {/* UI/UX Design Projects */}
      <p className="text-xl sm:text-lg md:text-2xl font-bold text-purple-500 mb-8 mt-10">
        UI/UX Design Projects
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        <motion.div {...fadeInUp}>
          <DesignCard
            img={Design_1}
            title="E-Learning App design"
            description="An intuitive and engaging eLearning app interface designed for seamless learning, accessibility, and enhanced user interaction."
            tools="Figma, Canva"
            viewLink="https://www.behance.net/gallery/222999409/E-Learning-Mobile-Application-Design-UIUX-Design"
          />
        </motion.div>

        <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
          <DesignCard
            img={Design_2}
            title="CUROSYNC - Medical Health App"
            description="A clean and user-centric medical app interface focused on easy navigation, quick access to health records, and a smooth patient experience."
            tools="Figma, Canva"
            viewLink="https://www.behance.net/gallery/223018929/CUROSYNC-Medical-Health-App"
          />
        </motion.div>

          <motion.div {...fadeInUp}>
          <DesignCard
            img={Design_3}
            title="Travel : Find Your Dream Destination With Us (App Design)"
            description="A modern travel app design to discover, explore, and book your dream destinations with ease."
            tools="Figma, Canva"
            viewLink="https://www.behance.net/gallery/227375097/Travel-Find-Your-Dream-Destination-With-Us"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

// Reusable Frontend Project Card Component
const ProjectCard = ({ img, title, description, tech, demoLink, githubLink }) => (
  <div className="bg-gray-900 rounded-lg p-6 max-w-xs flex flex-col justify-between h-[520px]">
    <div>
      <img src={img} alt={title} className="w-full h-[180px] object-cover rounded-lg mb-4" />
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-start">{title}</h3>
      <p className="text-md sm:text-base font-medium text-gray-400 text-start">{description}</p>
      <p className="text-md sm:text-base font-medium text-gray-400 mt-2 text-start">
        Tech Stack: <span className="text-purple-500">{tech}</span>
      </p>
    </div>
    <div className="flex gap-3 items-center justify-between mt-4">
      <button className="px-2 py-2 bg-purple-500 text-white rounded-lg flex items-center gap-2 hover:bg-purple-600">
        <a href={demoLink} target="_blank" rel="noreferrer">Demo</a> <FaExternalLinkAlt />
      </button>
      <button className="px-2 py-2 border-2 border-purple-500 text-white rounded-lg hover:border-purple-700">
        <a href={githubLink} target="_blank" rel="noreferrer">GitHub Repo</a>
      </button>
    </div>
  </div>
);

// Reusable UI/UX Design Project Card Component
const DesignCard = ({ img, title, description, tools, viewLink }) => (
  <div className="bg-gray-900 rounded-lg p-6 max-w-xs flex flex-col justify-between h-[620px]">
    <div>
      <img src={img} alt={title} className="w-full h-[180px] object-cover rounded-lg mb-4" />
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-start">{title}</h3>
      <p className="text-md sm:text-base font-medium text-gray-400 text-start">{description}</p>
      <p className="text-md sm:text-base font-medium text-gray-400 mt-2 text-start">
        Tools: <span className="text-purple-500">{tools}</span>
      </p>
    </div>
    <div className="flex gap-3 items-center justify-center mt-4">
      <button className="px-2 py-2 bg-purple-500 text-white rounded-lg flex items-center gap-2 hover:bg-purple-600">
        <a href={viewLink} target="_blank" rel="noreferrer">View Design</a> <FaExternalLinkAlt />
      </button>
    </div>
  </div>
);

export default Project;
