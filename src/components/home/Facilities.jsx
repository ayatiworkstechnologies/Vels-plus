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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-primary text-gray-900 tracking-tight">
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
          <div className="relative flex justify-center lg:justify-end border-2 border-white">
            <div className="relative w-full max-w-[589px] h-[300px] sm:h-[420px] lg:h-[559px] overflow-hidden rounded-xl">
              <Image
                src="/assets/academic.png"
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
      <section className="relative overflow-hidden bg-[#f4f4f4] px-4 py-16 sm:px-6 md:py-20">
      {/* pastel gradient extracts */}
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#efe8b8]/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#cfe8cf]/65 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-[#cfcff1]/75 blur-3xl" />

      {/* soft top wash */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-white/20 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-primary text-[32px] leading-tight text-[#161616] sm:text-[40px] md:text-[50px]"
        >
          NEET &amp; JEE (Mains &amp; Advanced)
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mx-auto mt-8 max-w-4xl text-center text-[15px] leading-[2.1] text-[#787878] sm:text-[17px] md:text-[18px]"
        >
          <p>
            <span className="font-semibold text-[#111]">VELS</span> has long been
            distinguished for the best preparatory courses and results for{" "}
            <span className="font-semibold text-[#111]">
              Medical (NEET) &amp; Engineering (IIT-JEE)
            </span>{" "}
            entrance examinations. We offer methodical coaching and a{" "}
            <span className="font-semibold text-[#111]">
              healthy competitive atmosphere
            </span>{" "}
            to the aspirants through our{" "}
            <span className="font-semibold text-[#111]">
              excellent curriculum.
            </span>{" "}
            The study material which has been prepared by our well versed
            faculties after{" "}
            <span className="font-semibold text-[#111]">
              extensive research
            </span>{" "}
            is comprehensive and simple to understand. The specially{" "}
            <span className="font-semibold text-[#111]">
              tailored curriculum
            </span>{" "}
            takes care of board examinations simultaneously.
          </p>
        </motion.div>
      </div>
    </section>
    </>
  );
}