import React from "react";

const CTASection = () => {
    return (
        <section className="text-center mb-10 py-10 px-6 md:px-12 lg:px-20 rounded-3xl bg-[#6800ff] text-white w-[90%] md:w-[80%] lg:w-[70%] mx-auto mt-12">
            <h2 className="text-2xl md:text-4xl ">
                Start using Cohesive today!
            </h2>
            <p className="text-sm md:text-base mt-2 max-w-xl mx-auto">
                Experience the World&apos; s Most Powerful AI Editor. Where Human Creativity Meets AI Brilliance.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
                <button className="bg-green-400 text-black font-medium px-6 py-3 rounded-full w-full md:w-auto">
                    TRY  IT&apos;S  FREE
                </button>
                <button className="bg-white text-black font-medium px-6 py-3 rounded-full w-full md:w-auto">
                    No credit card required
                </button>
            </div>
        </section>
    );
};

export default CTASection;
