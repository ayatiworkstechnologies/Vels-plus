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

      {/* ✅ Desktop Banner */}
      <div className="absolute inset-0 z-0 h-[600px] hidden md:block">
        <img
          src="/assets/banner/about-web.png"
          alt="About Banner"
          className="w-full h-[600px] object-cover object-center"
          loading="eager"
        />
      </div>

      {/* ✅ Mobile Banner */}
      <div className="absolute inset-0 z-0 h-[600px] md:hidden">
        <img
          src="/assets/banner/about-mob.png"
          alt="Mobile Banner"
          className="w-full h-[600px] object-cover object-center"
          loading="eager"
        />
      </div>

      {/* ⭐ TITLE + BREADCRUMBS */}
      <div className="absolute bottom-24 md:bottom-20 left-6 md:left-16 z-30 text-white">

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-primary mb-3">
          Contact Us
        </h1>

        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-white text-sm md:text-base">
          <span className="flex items-center space-x-1">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3l9 8h-3v9h-12v-9h-3z" />
            </svg>
            <a href="/" className="hover:underline">Home</a>
          </span>

          <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6" />
          </svg>

          <span className="opacity-90">Contact Us</span>
        </div>
      </div>

      {/* ⬇ Scroll Button */}
      <motion.button
        onClick={handleClick}
        className="absolute bottom-6 z-30 p-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition duration-300 animate-bounce focus:outline-none"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.button>

    </section>
  );
};

export default Hero;