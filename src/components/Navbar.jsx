import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import Resume from "../assets/Ashish_Rathi_CV.pdf";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
  ];

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsMenuOpen(false);

    // Manually scroll to section
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#001327] z-50 w-full overflow-x-hidden">
      <motion.div
        className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16"
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 14 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-1 cursor-pointer"
        >
          <div className="text-2xl font-bold text-white">Ashish</div>
          <div className="text-2xl font-bold text-purple-500">{"</>"}</div>
        </motion.div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? (
            <HiX className="text-3xl text-purple-500" />
          ) : (
            <HiMenu className="text-3xl text-purple-500" />
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`text-md font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-400 after:-mb-1 after:transition-all ${
                activeLink === link.href
                  ? "text-purple-400 after:w-full"
                  : "text-white hover:text-purple-400"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Resume Button */}
        <motion.a
          href={Resume}
          target="_blank"
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 bg-purple-500 text-white px-6 py-2.5 rounded-xl text-sm font-medium transition-all hover:bg-purple-600"
        >
          <FiDownload className="text-lg" />
          Resume
        </motion.a>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t border-purple-800 py-4 text-center bg-[#001327]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 space-y-3">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  onClick={() => handleLinkClick(link.href)}
                  className={`block text-sm font-medium py-2 ${
                    activeLink === link.href
                      ? "text-purple-400"
                      : "text-white hover:text-purple-400"
                  }`}
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: 0.05 * index }}
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Resume Button for Mobile */}
              <motion.a
                href={Resume}
                target="_blank"
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-purple-500 text-white px-6 py-2.5 rounded-lg hover:bg-purple-600 text-sm font-medium w-1/2"
              >
                <FiDownload className="text-lg" />
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
