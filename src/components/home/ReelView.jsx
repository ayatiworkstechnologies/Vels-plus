"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FoundationsSection = () => {
  const foundationItems = [
    {
      img: "/assets/strong-1.png",
      text: "Gain a competitive edge in national exams",
    },
    {
      img: "/assets/strong-2.png",
      text: "Identify their academic aptitude early",
    },
    {
      img: "/assets/strong-3.png",
      text: "Build confidence in science and mathematics",
    },
    {
      img: "/assets/strong-4.png",
      text: "Develop long-term academic discipline",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-white py-20 px-6 font-primary">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-4xl font-primary font-semibold text-gray-900 mb-6 tracking-tight">
            Strong Foundations for Academic Excellence
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-600 font-secondary font-light text-lg leading-relaxed">
            <p>
              VELS Plus provides specially designed foundation programs that prepare
            </p>
            <p>
              students early for competitive exams like NEET and IIT-JEE.
            </p>
          </div>
        </motion.div>

        {/* 4-Image Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {foundationItems.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="relative group overflow-hidden h-[400px]"
            >
              {/* Image */}
              <Image
                src={item.img}
                alt={item.text}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay Gradient (matches the image) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Bottom Text Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                <p className="text-white text-lg md:text-xl font-primary font-light leading-snug">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FoundationsSection;