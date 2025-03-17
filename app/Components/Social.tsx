import React from "react";
import Image from "next/image";
import youtubeImg from "../../public/Images/youtube.png";
import facebookImg from "../../public/Images/fb.png";
import tiktokImg from "../../public/Images/tiktok.png";
import instagramImg from "../../public/Images/insta.png";
import { WiStars } from "react-icons/wi";
import { IoHeartSharp } from "react-icons/io5";

const templates = [
    {
        title: "Script for Youtube Video",
        description: "Generate scripts that engage your audience",
        image: youtubeImg,
    },
    {
        title: "Create Facebook Post",
        description: "Generate scripts that engage your audience",
        image: facebookImg,
    },
    {
        title: "Make TikTok Video Content",
        description: "Generate scripts that engage your audience",
        image: tiktokImg,
    },
    {
        title: "Create Instagram Post",
        description: "Generate scripts that engage your audience",
        image: instagramImg,
    },
];

const Social = () => {
    return (
        <section className="py-12 text-center">
            <h2 className="text-4xl md:text-5xl mt-10 mb-6">Our Most Popular Templates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-10">
                {templates.map((template, index) => (
                    <div key={index} className="bg-white p-4 w-full max-w-[260px] mx-auto rounded-xl shadow-md border border-gray-200">
                        <div className="flex justify-center mb-4">
                            <Image src={template.image} alt={template.title} width={250} height={72} />
                        </div>
                        <h3 className="text-lg font-semibold text-start">{template.title}</h3>
                        <p className="text-sm text-start text-gray-600 mt-2">{template.description}</p>
                        <hr className="mt-4 border-gray-200" />
                        <div className="flex mt-4 text-gray-400 gap-2 items-center">
                            <WiStars className="text-blue-800 text-2xl" />
                            <span>292.8k</span> |  
                            <IoHeartSharp className="text-xl text-red-600" />
                            <span>17</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Social;
