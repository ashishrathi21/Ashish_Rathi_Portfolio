import React, { useState } from "react";
import { FaLinkedinIn, FaGithub, FaBehance } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully !")

    const { name, email, subject, message } = formData;

    emailjs
      .send(
        "service_l1oqpt3",     // ✅ Replace with your EmailJS Service ID
        "template_jsivvc5",    // ✅ Replace with your EmailJS Template ID
        { name, email, subject, message },
        "7NoswYLH5pj0xFP_0"    // ✅ Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatusMessage("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatusMessage("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 rounded-xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Let’s Connect!
        </h2>
        <p className="text-md sm:text-lg font-semibold text-gray-400">
          I'm open to new opportunities, meaningful collaborations,
          <br /> or simply a friendly conversation—let’s connect.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Contact Info */}
        <motion.div
          className="flex flex-col items-center text-white gap-6 w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">Contact Me</h3>

          <div className="flex flex-col gap-3 text-center">
            <div>
              <span className="text-lg font-semibold">Phone:</span>{" "}
              <a href="tel:+918600881740" className="text-purple-400 hover:text-purple-600">
                +91 86008 81740
              </a>
            </div>
            <div>
              <span className="text-lg font-semibold">Email:</span>{" "}
              <a href="mailto:rathiashihs@gmail.com" className="text-purple-400 hover:text-purple-600">
                rathiashish4321@gmail.com
              </a>
            </div>
          </div>

          <div className="flex gap-6 text-2xl mt-4">
            <a href="https://www.linkedin.com/in/ashish-rathi-a52749298/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-purple-400 hover:text-purple-600" />
            </a>
            <a href="https://github.com/ashishrathi21" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-purple-400 hover:text-purple-600" />
            </a>
            <a href="https://www.behance.net/ashishrathi2" target="_blank" rel="noopener noreferrer">
              <FaBehance className="text-purple-400 hover:text-purple-600" />
            </a>
            <a href="https://www.instagram.com/ashish__rathi21/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-purple-400 hover:text-purple-600" />
            </a>
            <a href="https://x.com/Ashish_Rathi_21" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-purple-400 hover:text-purple-600" />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] border-2 border-purple-500 p-6 sm:p-8 rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="flex flex-col text-start">
              <label htmlFor="name" className="text-white font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col text-start">
              <label htmlFor="email" className="text-white font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col text-start">
              <label htmlFor="subject" className="text-white font-semibold mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col text-start">
              <label htmlFor="message" className="text-white font-semibold mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-lg font-semibold text-white bg-purple-500 rounded-md hover:bg-purple-600 transition"
            >
              Send Message
            </button>

            {statusMessage && (
              <p className="mt-4 text-center text-white font-semibold">{statusMessage}</p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
