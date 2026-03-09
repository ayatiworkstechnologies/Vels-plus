"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Desktop Banners
const desktopSlides = [
  {
    img: "/assets/banner/web.png",
    alt: "Vels Trade and Convention Center Grand Entrance",
  },
  {
    img: "/assets/banner/web-2.jpg",
    alt: "Indoor Studio",
  },
  {
    img: "/assets/banner/web-3.jpg",
    alt: "Outdoor Filming Area",
  },
];

// Mobile Banners
const mobileSlides = [
  {
    img: "/assets/banner/mob.png",
    alt: "Mobile Banner 1",
  },
  {
    img: "/assets/banner/mob-2.jpg",
    alt: "Mobile Banner 2",
  },
  {
    img: "/assets/banner/mo-3.jpg",
    alt: "Mobile Banner 3",
  },
];

const Hero = () => {

  const handleClick = () => {
    const targetElement = document.getElementById("target-section");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
    <section className="relative w-full h-[600px] flex items-center justify-center text-white overflow-hidden">

      {/* Desktop Slider */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Slider {...settings}>
          {desktopSlides.map((slide, index) => (
            <div key={index} className="relative w-full h-[600px]">
              <img
                src={slide.img}
                alt={slide.alt}
                className="w-full h-[600px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Mobile Slider */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Slider {...settings}>
          {mobileSlides.map((slide, index) => (
            <div key={index} className="relative w-full h-[600px]">
              <img
                src={slide.img}
                alt={slide.alt}
                className="w-full h-[600px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

    

      {/* Scroll Button */}
      <motion.button
        onClick={handleClick}
        className="absolute bottom-6 z-30 p-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition duration-300 animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
};

export default Hero;