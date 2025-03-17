import Image from "next/image";
import React from "react";
import logo from "../../public/Images/logo.png";
const Navbar = () => {
    return (
        <nav className="flex flex-wrap  fixed z-10 lg:w-[99%] md:w-[99%] items-center justify-between bg-gradient-to-r from-[#4e4cf3] to-blue-800 text-white p-3 lg:p-4  rounded-full m-2">
            {/* Logo Section */}
            <div className="flex items-center gap-2 lg:ml-5 ml-2 mt-2">
                <Image src={logo} alt="page logo" width={35} height={35} />
                <span className="text-xl lg:text-2xl font-semibold">Cohesive</span>
            </div>

            {/* Navbar Items */}
            <ul className="hidden lg:flex space-x-10 text-[16px] ">
                <li className="cursor-pointer hover:underline">Features</li>
                <li className="cursor-pointer hover:underline">Use cases</li>
                <li className="cursor-pointer hover:underline">Template</li>
                <li className="cursor-pointer hover:underline">Pricing</li>
                <li className="cursor-pointer hover:underline">Community</li>
            </ul>

            {/* Button Section */}
            <button className="bg-green-300 px-4 py-2 rounded-full text-black text-sm lg:text-base font-semibold hover:bg-green-400 transition">
                SIGN UP  IT&apos;S  FREE
            </button>

            {/* Mobile Menu */}
            <div className="lg:hidden w-full mt-4">
                <ul className="flex gap-2 items-center space-y-3 text-sm">
                    <li className="cursor-pointer hover:underline">Features</li>
                    <li className="cursor-pointer hover:underline">Use cases</li>
                    <li className="cursor-pointer hover:underline">Template</li>
                    <li className="cursor-pointer hover:underline">Pricing</li>
                    <li className="cursor-pointer hover:underline -mt-2">Community</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
