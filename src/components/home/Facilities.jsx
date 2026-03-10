"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const workshops = [
  "National Talent Search Examination – NTSE (Stage 1 & Stage 2)",
  "National Standard Examination in Junior Science - NSEJS",
  "International Junior Science Olympiad - IJSO.",
  "International Mathematical Olympiad - IMO.",
  "Workshops for various Science & Maths Olympiads.",
  "National Mathematics Talent Contest (NMTC).",
  "TECHNOTHLON, conducted by IIT Guwahati, INDIA.",
  "Regional Mathematical Olympiad – RMO.",
];

export default function AcademicWorkshops() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % workshops.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* WORKSHOP SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-24 bg-white font-primary overflow-hidden">
        
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 tracking-tight">
            Academic Excellence Workshops
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h3 className="text-sm md:text-xl font-bold uppercase tracking-widest text-gray-800 mb-6">
              VELS ORGANISE WORKSHOPS FOR :
            </h3>

            <div className="relative flex flex-col gap-2">
              {workshops.map((item, i) => {
                const isActive = i === active;

                return (
                  <div
                    key={i}
                    className="relative cursor-pointer py-3 px-4 sm:px-6"
                    onClick={() => setActive(i)}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="highlight"
                        className="absolute inset-0 bg-gray-50 border-l-4 border-[#303395] z-0"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    <motion.p
                      animate={{
                        x: isActive ? 10 : 0,
                        color: isActive ? "#000000" : "#6B7280",
                      }}
                      className={`relative z-10 text-sm sm:text-base md:text-lg font-secondary transition-colors duration-500 ${
                        isActive ? "font-medium" : ""
                      }`}
                    >
                      {item}
                    </motion.p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[589px] h-[300px] sm:h-[420px] lg:h-[559px] overflow-hidden">
              <Image
                src="/assets/workshop.png"
                alt="Academic Excellence Workshop"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 589px"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* NEET JEE SECTION */}
      <section className="bg-white py-12 md:py-16 px-4 sm:px-6 font-primary">
        <div className="max-w-5xl mx-auto text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl font-primary text-gray-900 mb-8 md:mb-10 tracking-[0.05em] uppercase"
          >
            NEET & JEE (Mains & Advanced)
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="space-y-4 text-[#4a4a4a] font-secondary font-light text-sm sm:text-base md:text-lg tracking-[0.03em]"
          >
            <p>
              VELS has long been distinguished for the best preparatory courses
              and results for Medical (NEET) & Engineering (IIT-JEE) entrance
              examinations.
            </p>

            <p>
              We offer methodical coaching and a healthy competitive atmosphere
              to the aspirants through our excellent curriculum.
            </p>

            <p>
              The study material prepared by our well-versed faculties after
              extensive research is comprehensive and simple to understand.
            </p>

            <p>
              The specially tailored curriculum takes care of board examinations
              simultaneously.
            </p>
          </motion.div>

        </div>
      </section>
    </>
  );
}