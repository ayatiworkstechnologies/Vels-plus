"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {

  const handleClick = () => {
    const el = document.getElementById("target-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-[550px] md:h-[650px] lg:h-[600px] overflow-hidden text-white">
      
      {/* ===== Desktop Image ===== */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src="/assets/banner/IIT-JEE-web.png"
          alt="Desktop banner"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ===== Mobile Image ===== */}
      <div className="absolute inset-0 z-0 md:hidden">
        <img
          src="/assets/banner/IIT-JEE-mob.png"
          alt="Mobile banner"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ===== TEXT OVERLAY ===== */}
      <div className="absolute inset-0 z-20 flex items-start md:items-center pt-[10vh] sm:pt-[20vh] md:pt-0">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[280px] sm:max-w-md md:max-w-xl lg:max-w-2xl 
                       mx-auto md:mx-0 text-center md:text-left"
          >
            {/* Subtitle */}
            <p className="text-black text-xs sm:text-sm md:text-lg font-primary mb-2 sm:mb-3 tracking-wide">
              Vels Plus
            </p>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-primary font-semibold leading-[1.15] md:leading-tight">
              <span className="text-[#F59E0B]">Building</span>{" "}
              <span className="text-black">strong academic</span> <br />

              <span className="text-[#1E3A8A] font-bold">foundations</span>{" "}
              <span className="text-black">for</span> <br />

              <span className="text-black">future</span>{" "}
              <span className="text-[#22C55E]">success...</span>
            </h1>

           
          </motion.div>

        </div>
      </div>

      {/* ===== Scroll Button ===== */}
      <motion.button
        onClick={handleClick}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 p-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.button>

    </section>
  );
}