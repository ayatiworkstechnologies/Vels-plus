"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* ---------- Arrows (used for both) ---------- */
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      absolute 
      top-1/2 -translate-y-1/2 
      right-3 md:right-[-20px]
      z-20
      flex items-center justify-center
      w-8 h-8 md:w-auto md:h-auto
      rounded-full md:rounded-none
      bg-white/90 md:bg-transparent
      shadow-md md:shadow-none
      text-xl md:text-3xl
      text-black hover:text-gray-600
    "
    type="button"
    aria-label="Next"
  >
    →
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      absolute 
      top-1/2 -translate-y-1/2 
      left-3 md:left-[-20px]
      z-20
      flex items-center justify-center
      w-8 h-8 md:w-auto md:h-auto
      rounded-full md:rounded-none
      bg-white/90 md:bg-transparent
      shadow-md md:shadow-none
      text-xl md:text-3xl
      text-black hover:text-gray-600
    "
    type="button"
    aria-label="Previous"
  >
    ←
  </button>
);

/* ---------- Slide Data ---------- */
const slides = [
  {
    
    description:
      "A SPECIAL EMPHASIS ON BOARD PREPARATIONS (TUITIONS) FOR THE IGNITED YOUNG MINDS ON MATHEMATICS & SCIENCE SUBJECTS.",
    image: "/assets/key-1.png",
  },
  {
    
    description:
      "SPECIAL FOCUS ON NATIONAL & INTERNATIONAL SCIENCE & MATHS OLYMPIADS AND NTSE.",
    image: "/assets/key-2.png",
  },
  {

    description:
      "CRITICAL APPROACH TO DEVELOP PROBLEM SOLVING SKILLS.",
    image: "/assets/key-3.png",
  },
  {
   
    description:
      "HANDY Vels plus DIGITAL APP. FOR CLEARANCE OF DOUBTS & BACKLOGS.",
    image: "/assets/key-4.png",
  },
   {
   
    description:
      "SPECIALLY DESIGNATED PROGRAMME ON FOUNDATIONS TO CRACK NEET & IIT-JEE WITH SMART PRINTED STUDY MATERIALS.",
    image: "/assets/key-5.png",
  },
     {
   
    description:
      "SPECIALLY DESIGNED MICRO-SCHEDULE WITH WEEKLY EXAMINATIONS AND RESULT ANALYSIS.",
    image: "/assets/key-6.png",
  },
     {
   
    description:
      "ERROR LIST PROGRAMME TO RECTIFY THE MISTAKES.",
    image: "/assets/key-7.png",
  },
     {
   
    description:
      "PERSONAL COUNSELLING TO CHILD FOR HIS / HER SPECIFIC NEEDS & PROBLEMS.",
    image: "/assets/key-8.png",
  },

];

export default function KeyPoints() {
  const [activeIndex, setActiveIndex] = useState(0);

  const desktopSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: "0px",
    variableWidth: true,
    slidesToScroll: 1,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  return ( 
  <>
      <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-primary font-bold text-black uppercase text-4xl tracking-tight">
            Key Points
          </h2>
        </motion.div>

        {/* ---------- Desktop Slider ---------- */}
        <div className="relative hidden md:block">
          <Slider {...desktopSettings}>
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              
              return (
                <div 
                  key={index} 
                  // Inactive width is 275px. Active width expands to accommodate text (e.g., 600px)
                  style={{ width: isActive ? 600 : 275 }} 
                  className="transition-all duration-500 ease-in-out px-2"
                >
                  <div className={`bg-white shadow-sm overflow-hidden flex ${isActive ? "flex-row h-[262px]" : "flex-col h-[262px]"}`}>
                    
                    {/* Image Container - Locked to 275x262 */}
                    <div className="relative min-w-[275px] h-[262px]">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content Area - Only shows when active */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="p-8 flex flex-col  bg-white border-l border-gray-100 min-w-[325px]"
                        >
                         
                          <p className="text-gray-600 font-primary text-md leading-relaxed">
                            {slide.description}
                          </p>
                          <div className="mt-6 w-40 h-[1px] bg-[#303395]"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        {/* ---------- Mobile View ---------- */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {slides.slice(0, 3).map((slide, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative w-full h-[262px]">
                <Image src={slide.image} alt={slide.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">{slide.title}</h3>
                <p className="text-sm text-gray-600">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
    <section className="bg-white py-12 px-6 font-primary">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-primary text-gray-900 mb-10 tracking-[0.05em] uppercase"
        >
          CAREER FOUNDATION WORKSHOPS
        </motion.h2>

        {/* Description Block */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="space-y-4 text-[#4a4a4a] font-secondary font-light text-lg md:text-xl leading-[1.8] tracking-wide uppercase"
        >
          <p>
            VELS organises various workshops to guide &
          </p>
          <p>
            prepare students for national and international examinations & olympiads. It also broadens up
          </p>
          <p>
            the mindset of the students to face the competition in the global arena besides enhancing their
          </p>
          <p>
            knowledge & sharpening their skills in the respective subjects.
          </p>
        </motion.div>

        {/* Bottom Accent Line (Optional, matches institutional style) */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12  mx-auto"
        />

      </div>
    </section>
</>
  );


        }

