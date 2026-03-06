"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById("target-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full h-[600px] flex items-center justify-center text-white overflow-hidden">

      {/* Desktop Banner */}
      <div className="absolute inset-0 z-0 h-[600px] hidden md:block">
        <img
          src="/assets/banner/web.png"
          alt="Vels Trade and Convention Center Grand Entrance"
          className="w-full h-[600px] object-cover object-center"
          loading="eager"
        />
      </div>

      {/* Mobile Banner */}
      <div className="absolute inset-0 z-0 h-[600px] md:hidden">
        <img
          src="/assets/banner/mob.png"
          alt="Vels Trade and Convention Center Grand Entrance"
          className="w-full h-[600px] object-cover object-center"
          loading="eager"
        />
      </div>

     
      {/* Scroll Button */}
      <motion.button
        onClick={handleClick}
        className="absolute bottom-6 z-30 p-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition duration-300 animate-bounce focus:outline-none"
        aria-label="Scroll down to next section"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.button>

    </section>
  );
};

export default Hero;