import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      
      <div className="container mx-auto px-6 py-16 text-center">
        
        
        <h2 className="text-2xl font-bold">Vocabify</h2>

        
        <p className="text-gray-400 max-w-md mx-auto mt-4 text-sm leading-relaxed">
          Learn words. Build confidence. Vocabify is a smart vocabulary
          management platform designed for learners who want to improve.
        </p>

        
        <div className="flex justify-center gap-8 mt-8 text-sm">
          <Link to="/home" className="hover:text-[#4F2CBC] transition duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#4F2CBC] transition duration-300">
            About
          </Link>
          <Link to="/features" className="hover:text-[#4F2CBC] transition duration-300">
            Features
          </Link>
        </div>

        
        <div className="border-t border-gray-800 mt-10 pt-6 text-gray-500 text-xs">
          © 2026 Vocabify. All rights reserved.
        </div>
      </div>

      
      <div className="absolute top-10 left-10 w-32 h-32 bg-gray-800 rounded-full opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-800 rounded-full opacity-20"></div>

    </footer>
  );
};

export default Footer;
