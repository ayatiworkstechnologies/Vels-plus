"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const NeetSection = () => {
  return (
    <section className="bg-white py-16 lg:py-20 px-4 sm:px-6 font-primary">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">

        {/* Content FIRST on mobile */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-8 lg:space-y-10 order-1 lg:order-2"
        >

          {/* Title */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-4 lg:mb-6 tracking-tight">
              NEET
            </h2>

            <p className="text-sm sm:text-base font-secondary font-light text-gray-700">
              Conducted by National Testing Agency (NTA)
            </p>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold font-primary mb-2">
              Subjects:
            </h3>

            <p className="text-sm sm:text-base font-secondary font-light text-gray-600">
              Physics, Chemistry, Zoology, Botany
            </p>
          </div>

          {/* Pattern */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold font-primary mb-2">
              Pattern:
            </h3>

            <div className="space-y-2 text-sm sm:text-base font-secondary font-light text-gray-600">
              <p>
                50 MCQ (4 options, 1 correct) per subject, only 45 to be attempted
              </p>

              <p className="italic mt-2">
                Right attempt: +4, Wrong attempt: -1, Not Attempted: 0
              </p>
            </div>
          </div>

          {/* Syllabus */}
          <div>
            <h3 className="text-lg lg:text-xl font-bold font-primary mb-2">
              Syllabus
            </h3>

            <div className="space-y-4 text-sm sm:text-base font-secondary font-light text-gray-600 leading-relaxed max-w-lg">
              <p>
                11th and 12th full syllabus according to NCERT
              </p>

              <p>
                NEET score makes a student eligible for MBBS, BDS, etc. seats in
                AIIMS and many reputed government and private medical colleges
              </p>
            </div>
          </div>

        </motion.div>

        {/* Image SECOND on mobile */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative w-full max-w-md lg:max-w-[540px] h-[350px] sm:h-[450px] lg:h-[548px] shadow-lg order-2 lg:order-1"
        >
          <Image
            src="/assets/nt.png"
            alt="NEET Aspirations"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
};

export default NeetSection;