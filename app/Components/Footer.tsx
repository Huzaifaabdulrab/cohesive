
import React from "react";
import logo from "../../public/Images/logo.png"
import { FaGlobe, FaDiscord, FaSkype, FaTelegram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#6800ff] text-white py-4 rounded-t-3xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        {/* Left Side - Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold"><Image src={logo} alt="Logo" className="inline"/>Cohesive</span>
        </div>

        {/* Middle - Links */}
        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#" className="hover:underline">Docs</a>
          <a href="#" className="hover:underline">Use-Cases</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">Resources</a>
        </nav>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-4">
          <FaGlobe className="text-lg cursor-pointer hover:text-gray-200" />
          <FaDiscord className="text-lg cursor-pointer hover:text-gray-200" />
          <FaSkype className="text-lg cursor-pointer hover:text-gray-200" />
          <FaTelegram className="text-lg cursor-pointer hover:text-gray-200" />
          <FaLinkedin className="text-lg cursor-pointer hover:text-gray-200" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
