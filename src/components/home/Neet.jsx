"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const NeetSection = () => {
  return (
    <section className="bg-white py-20 px-6 font-primary">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16">
        
        {/* Left Side: Featured Image (Exact size: 540x548) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex-shrink-0 shadow-lg"
          style={{ width: "540px", height: "548px" }}
        >
          <Image
            src="/assets/neet.png" // Replace with your image path
            alt="NEET Aspirations"
            fill
            className="object-cover rounded-sm"
            priority
          />
        </motion.div>

        {/* Right Side: Structured Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-10 py-4"
        >
          {/* Header */}
          <div>
            <h2 className="text-5xl font-serif text-gray-900 mb-6 tracking-tight">NEET</h2>
            <p className="text-sm font-secondary font-light text-gray-700">
              Conducted by National Testing Agency(NTA)
            </p>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="text-xl font-bold font-primary mb-3">Subjects:</h3>
            <p className="text-md font-secondary font-light text-gray-600">
              Physics, Chemistry, Zoology, Botany
            </p>
          </div>

          {/* Pattern */}
          <div>
            <h3 className="text-xl font-bold font-primary mb-3">Pattern:</h3>
            <div className="space-y-2 text-md font-secondary font-light text-gray-600">
              <p>50 MCQ (4 options, 1 correct) per subject, only 45 to be attempted</p>
              <p className="mt-4 italic">Right attempt: +4, Wrong attempt: -1, Not Attempted: 0</p>
            </div>
          </div>

          {/* Syllabus */}
          <div>
            <h3 className="text-xl font-bold font-primary mb-3">Syllabus</h3>
            <div className="space-y-6 text-md font-secondary font-light text-gray-600 leading-relaxed max-w-lg">
              <p>11th and 12th full syllabus according to NCERT</p>
              <p>
                NEET score makes a student eligible for MBBS, BDS, etc. seats in AIIMS and many 
                reputed government and private medical colleges
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default NeetSection;