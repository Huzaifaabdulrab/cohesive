'use client'
import React, { useState } from "react";

const faqs = [
  {
    question: "How do the cohesive AI visions mind?",
    answer: "Cohesive AI processes information using deep learning algorithms...",
  },
  {
    question: "What is Image Generation limit?",
    answer: "You can generate up to 500 images per month under the Creator plan...",
  },
  {
    question: "What’s the difference between Creator and Agency Plan?",
    answer: "Creator plan is for individuals, while Agency plan is for teams...",
  },
  {
    question: "Can I upgrade from a monthly to an annual plan?",
    answer: "Yes, you can upgrade anytime by visiting the billing section...",
  },
  {
    question: "Can I invite more users to my Creator plan?",
    answer: "The Creator plan is designed for single users. For multiple users, check the Agency plan...",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 text-center">
      <h2 className="text-4xl  mb-6">Still Have Questions? Reach <br />Out To Us At</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md border border-gray-200 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              <span className="text-gray-500">{openIndex === index ? "▲" : "▶"}</span>
            </div>
            {openIndex === index && <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
