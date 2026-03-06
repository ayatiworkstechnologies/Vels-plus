"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WhyChooseSection = () => {
  const features = [
    {
      // Replace these paths with your actual local image paths (e.g., /icons/math.png)
      iconSrc: "/assets/icons/book.png", 
      title: "Strong focus on Mathematics and Science board preparation",
    },
    {
      iconSrc: "/assets/icons/globe.png",
      title: "Training for National & International Olympiads",
    },
    {
      iconSrc: "/assets/icons/setting.png",
      title: "Advanced problem-solving skill development",
    },
    {
      iconSrc: "/assets/icons/msg.png",
      title: "Access to VELS Plus Digital App for doubt clarification",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 font-primary">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-primary text-center text-gray-900 mb-20 tracking-tight">
          Why Choose VELS Plus
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-gray-100">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 flex flex-col items-start gap-6 border-b lg:border-b-0 border-gray-100 
                ${index !== features.length - 1 ? "lg:border-r" : ""} 
                hover:bg-gray-50 transition-colors duration-300 group`}
            >
              {/* Custom Image Icon Container */}
              <div className="relative w-[2rem] h-[2rem] transition-transform duration-300 group-hover:-translate-y-2">
                <Image
                  src={feature.iconSrc}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <p className="text-lg leading-relaxed text-gray-700 font-secondary font-light">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;