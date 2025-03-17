import React from "react";
import Image from "next/image";
import futureImg1 from "../../public/Images/future1.png";
import futureImg2 from "../../public/Images/future2.png";
import futureImg3 from "../../public/Images/future3-removebg-preview.png";

const FutureAi = () => {
    const CardData = [
        {
            title: "Best Quality AI Content",
            description:
                "Goodbye, Boring Copies. Make Your Content Engaging, Relevant, And Optimized For Conversion With Cohesive.",
            linkText: "START CREATING",
            image: futureImg1,
        },
        {
            title: "2K+ Templates To Start With",
            description:
                "Bring Your Vision To Life At Lightning Speed. Choose From Handcrafted Curated Templates And Produce High-Quality.",
            linkText: "VIEW ALL TEMPLATES",
            image: futureImg2,
        },
        {
            title: "Collaborate With Your Team",
            description:
                "Bid Farewell To Endless Email And Slack Threads. Collaborate In Real-Time, Keep Everyone On The Same Page.",
            linkText: "IT’S SIGN UP NOW",
            image: futureImg3,
        },
    ];

    return (
        <section className="py-12 px-4  text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
                Meet The Future Of Generative AI
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mx-auto max-w-7xl px-4">
                {CardData.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 w-full max-w-[320px] mx-auto rounded-xl shadow-md text-start shadow-2xl"
                    >
                        <div className="flex justify-start mb-4">
                            <Image
                                src={card.image}
                                alt={card.title}
                                width={140}
                                height={140}
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                        <p className="text-sm text-gray-600 mt-2">{card.description}</p>
                        <a href="#" className="text-purple-600 font-medium mt-4 inline-block">
                            {card.linkText} <span className="text-4xl inline-block">→</span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FutureAi;
