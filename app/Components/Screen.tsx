import Image from 'next/image';
import React from 'react';
import screenImg from '../../public/Images/screenImg.png';

const Screen = () => {
    return (
        <section className="relative lg:top-24  md:top-[10rem] top-36 bg-[#4e4cf3] rounded-[40px] text-white p-6 lg:p-10 m-2 overflow-hidden shadow-lg lg:h-[680px]">
            {/* Top Small Text */}
            <p className="text-sm md:mt-10 md:text-start md:text-lg sm:text-lg lg:text-2xl ml-4 lg:ml-10 uppercase tracking-wide text-white/70 text-center lg:text-left">
                03 MONTHS EXTRA ON YEARLY PLANS
            </p>

            {/* Main Heading */}
            <h1 className="text-xl sm:text-3xl  md:text-start md:text-5xl  lg:text-[56px] ml-4 lg:ml-10 mt-2 leading-tight text-center lg:text-left">
                Create Magical Content <br /> With The Most AI
            </h1>

            {/* Subheading */}
            <h2 className="text-lg  md:text-start md:text-lg sm:text-2xl lg:text-3xl ml-4 mt-6 sm:mt-8 text-white/90 text-center lg:text-left">
                Future Of Generative AI
            </h2>

            {/* Description */}
            <p className="mt-2 text-sm  md:text-start md:text-lg sm:text-base lg:text-lg text-white/80 ml-4 max-w-md text-center lg:text-left">
                End ChatGPT Prompt Struggles. Create, Refine, Edit, And Publish Seamlessly With Cohesive.
            </p>

            {/* Button */}
            <div className="flex justify-center md:justify-start mt-10 lg:justify-start ">
                <button className="mt-4 bg-green-400 text-black font-semibold py-2 px-4 sm:py-3 sm:px-5 rounded-full text-sm sm:text-base shadow-md">
                    TRY  IT&apos;S  FREE
                </button>
            </div>

            {/* Floating Image */}
            <div className="flex justify-center lg:absolute lg:right-[20%] lg:top-1/2 lg:transform lg:-translate-y-1/2 ml-10 lg:mt-0">
                <Image src={screenImg} alt="AI illustration" width={350}  className="  -mb-10 sm:w-[180px] lg:w-auto" />
            </div>

            {/* Bottom Heading */}

            {/* Bottom Heading */}
            <div className="md:ml-4 md:mt-10 ml-28 left-1/2 lg:left-6 transform -translate-x-1/2 lg:translate-x-0 text-2xl sm:text-4xl lg:text-[70px] text-center lg:text-left">
                <span className="text-green-400">POWERFUL</span> <span className="text-white">AI EDITOR</span>
            </div>

        </section>
    );
};

export default Screen;
