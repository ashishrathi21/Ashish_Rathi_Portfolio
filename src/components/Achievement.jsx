import React from "react";
import { motion } from "framer-motion";
import Swag_1 from '../assets/google_premium_swags.jpg';
import Swag_2 from '../assets/google_standard_swags.jpg';

const Achievement = () => {
  return (
    <section
      id="achievements"
      className="w-full flex flex-col items-center justify-center text-center pt-28 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white mb-5"
      >
        Achievements
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-md sm:text-base md:text-lg font-semibold text-gray-400 mb-12"
      >
        Milestones of Excellence – Recognizing My Efforts, Skills, and Impact
      </motion.p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full justify-center items-start">

        {/* Premium Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-6 w-full flex flex-col justify-between shadow-lg h-full"
        >
          <img
            src={Swag_1}
            alt="Premium Milestone"
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-bold text-white mb-2 text-start">
            🏆 Google Cloud Arcade – Premium Milestone
          </h3>
          <p className="text-base font-medium text-gray-400 text-start">
            <span className="text-purple-500">(July – December 2024)</span><br />
            Completed the second phase of the Google Cloud Arcade program and achieved the Premium Milestone by actively participating in hands-on labs, completing quests, and mastering real-world cloud concepts. Received exclusive premium swags including a hoodie, bottle, laptop stand, and more as recognition.
          </p>
        </motion.div>

        {/* Standard Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-6 w-full flex flex-col justify-between shadow-lg h-full"
        >
          <img
            src={Swag_2}
            alt="Standard Milestone"
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-bold text-white mb-2 text-start">
            🎯 Google Cloud Arcade – Standard Milestone
          </h3>
          <p className="text-base font-medium text-gray-400 text-start">
            <span className="text-purple-500">(January – June 2024)</span><br />
            Successfully completed the first phase of Google Cloud Arcade and earned the Standard Milestone. Gained practical experience with cloud infrastructure through guided labs and learning paths. Earned official Google swags including backpack, T-shirt, and accessories.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievement;
