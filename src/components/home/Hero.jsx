"use client";

import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Desktop
const desktopSlides = [
  { img: "/assets/banner/web-1.png" },
  { img: "/assets/banner/web-2.png" },
  { img: "/assets/banner/web-3.png" },
];

// Mobile
const mobileSlides = [
  { img: "/assets/banner/mob-1.png" },
  { img: "/assets/banner/mob-2.png" },
  { img: "/assets/banner/mob-3.png" },
];

export default function Hero() {
  const handleClick = () => {
    const el = document.getElementById("target-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  return (
    <section className="relative w-full h-[550px] md:h-[650px] lg:h-[720px] overflow-hidden text-white">

      {/* ===== Desktop Slider ===== */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Slider {...settings}>
          {desktopSlides.map((slide, i) => (
            <div key={i} className="w-full h-[650px] lg:h-[720px]">
              <img
                src={slide.img}
                alt="banner"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* ===== Mobile Slider ===== */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Slider {...settings}>
          {mobileSlides.map((slide, i) => (
            <div key={i} className="w-full h-[550px]">
              <img
                src={slide.img}
                alt="banner"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      

     {/* TEXT OVERLAY ONLY */}
<div className="absolute inset-0 z-20 flex items-center">
  <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10">

    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-xl"
    >
      <p className="text-black text-sm md:text-base mb-3">
        Vels Plus
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
  <span className="text-[#F59E0B]">Building</span>{" "}
  <span className="text-black">strong academic</span> <br />
  <span className="text-[#1E3A8A] font-bold">foundations</span>{" "}
  <span className="text-black">for</span> <br />
  <span className="text-black">future</span>{" "}
  <span className="text-[#22C55E]">success...</span>
</h1>

      <p className="mt-6 text-black text-lg">01</p>
    </motion.div>

  </div>
</div>

      {/* ===== Scroll Button ===== */}
      <motion.button
        onClick={handleClick}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 p-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition duration-300 animate-bounce"
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