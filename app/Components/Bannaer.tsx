import React from "react";
import Image from "next/image";
import heroImage from "../../public/Images/image-removebg-preview (1).png"; // Tumhari image path check karlo

const BannerSec = () => {
    return (
        <section className="text-start py-10  bg-[#6800ff] text-white rounded-xl mx-4 md:mx-20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-6">
                <div className="md:w-1/2">
                    <Image src={heroImage} alt="AI Robot" width={400} height={300} />
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        <span className="text-green-400">Powerful</span> & Intuitive. The AI Editor For Everyone.
                    </h1>
                    <h2 className="text-lg">  No matter what you do, we have a template for you.</h2>
                    <p className="text-md mt-4 w-[80%] text-gray-300">
                        Effortlessly edit text, images, and language translations to ensure that every word is precisely crafted to perfection.
                    </p>
                    <button className="bg-green-400  text-black font-medium px-6 py-2 mt-4 rounded-full">
                        TRY  IT&apos;S  FREE
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BannerSec;
