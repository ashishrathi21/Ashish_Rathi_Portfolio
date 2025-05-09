import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white py-6 mt-12 ">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row justify-center items-center">
        <p className="text-md text-center ">
          &copy; {new Date().getFullYear()} <span className="text-purple-500"> Ashish Rathi. </span>All rights reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
