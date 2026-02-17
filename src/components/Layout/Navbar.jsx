import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navlink = [
    { namelink: "Home", to: "/" },
    { namelink: "About", to: "/about" },
    { namelink: "Features", to: "/features" },
  ];

  return (
    <nav className="w-full shadow-md bg-white">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        
        
        <Link to="/" className="font-bold text-3xl">
          Voca<span className="text-[#4F2CBC]">bify</span>
        </Link>

        
        <div className="hidden md:flex items-center gap-8">
          {navlink.map((nav, i) => (
            <NavLink
              key={i}
              to={nav.to}
              className={({ isActive }) =>
                `relative font-medium transition duration-300 
                 hover:text-[#4F2CBC]
                 after:content-[''] after:absolute after:left-0 after:-bottom-1 
                 after:h-[2px] after:w-0 after:bg-[#4F2CBC] 
                 after:transition-all after:duration-300
                 hover:after:w-full
                 ${isActive ? "text-[#4F2CBC] after:w-full" : "text-gray-700"}`
              }
            >
              {nav.namelink}
            </NavLink>
          ))}

          
          <Link
            to="/signup"
            className="bg-[#4F2CBC] text-white px-5 py-2 rounded-full hover:bg-[#3a1f9e] transition duration-300"
          >
            Get Started
          </Link>
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-[6px]">
            <span className="bg-[#4F2CBC] h-[1px] w-[25px] inline-block"></span>
            <span className="bg-[#4F2CBC] h-[1px] w-[25px] inline-block "></span>
            <span className="bg-[#4F2CBC] h-[1px] w-[25px] inline-block"></span>
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-5 pb-6">
          {navlink.map((nav, i) => (
            <NavLink
              key={i}
              to={nav.to}
              className="text-gray-700 hover:text-[#4F2CBC]"
              onClick={() => setIsOpen(false)}
            >
              {nav.namelink}
            </NavLink>
          ))}

          <Link
            to="/signup"
            className="bg-[#4F2CBC] text-white px-5 py-2 rounded-[50px]"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
