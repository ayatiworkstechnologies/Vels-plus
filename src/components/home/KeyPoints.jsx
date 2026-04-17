"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";

const MotionLink = motion(Link);

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* ---------- Arrows ---------- */
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="
      absolute top-1/2 -translate-y-1/2 right-3 md:right-[-20px]
      z-20 flex items-center justify-center
      w-8 h-8 md:w-auto md:h-auto
      rounded-full md:rounded-none
      bg-white/90 md:bg-transparent
      shadow-md md:shadow-none
      text-xl md:text-3xl text-black hover:text-gray-600
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
      absolute top-1/2 -translate-y-1/2 left-3 md:left-[-20px]
      z-20 flex items-center justify-center
      w-8 h-8 md:w-auto md:h-auto
      rounded-full md:rounded-none
      bg-white/90 md:bg-transparent
      shadow-md md:shadow-none
      text-xl md:text-3xl text-black hover:text-gray-600
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
    description: "CRITICAL APPROACH TO DEVELOP PROBLEM SOLVING SKILLS.",
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
    description: "ERROR LIST PROGRAMME TO RECTIFY THE MISTAKES.",
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
      <section className="bg-[#F5F5F5] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-primary text-3xl text-[#222] md:text-4xl">
              Key Points
            </h2>
          </motion.div>

          <div className="relative hidden md:block">
            <Slider {...desktopSettings}>
              {slides.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={index}
                    style={{ width: isActive ? 600 : 275 }}
                    className="px-2 transition-all duration-500 ease-in-out"
                  >
                    <div
                      className={`flex h-[262px] overflow-hidden rounded-xl border-2 border-white bg-white shadow-sm ${
                        isActive ? "flex-row" : "flex-col"
                      }`}
                    >
                      <div className="relative h-[262px] min-w-[275px]">
                        <Image
                          src={slide.image}
                          alt={`Key point ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex min-w-[325px] flex-col bg-white p-8"
                          >
                            <p className="font-primary text-md leading-relaxed text-gray-600">
                              {slide.description}
                            </p>
                            <div className="mt-6 h-[1px] w-40 bg-[#303395]" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          <div className="grid grid-cols-1 gap-6 md:hidden">
            {slides.slice(0, 3).map((slide, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-sm"
              >
                <div className="relative h-[262px] w-full">
                  <Image
                    src={slide.image}
                    alt={`Key point ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-600">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-[22px] border-2 border-white bg-[#f3f3f3] shadow-[0_14px_35px_rgba(0,0,0,0.10)]"
          >
            <div className="grid grid-cols-1 items-center lg:grid-cols-[minmax(0,1fr)_389px]">
              <div className="flex items-center px-8 py-10 sm:px-10 md:px-12 md:py-12 lg:px-14">
                <div className="max-w-5xl">
                  <motion.h2
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.7 }}
                    className="font-primary text-[22px] uppercase leading-tight text-[#1e1e1e] sm:text-[24px] md:text-[26px]"
                  >
                    Career Foundation Workshops
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.28, duration: 0.7 }}
                    className="mt-6 max-w-2xl text-[14px] leading-[1.9] text-[#6a6a6a] sm:text-[15px]"
                  >
                    VELS organises various workshops to guide and prepare
                    students for national and international examinations and
                    olympiads. It also broadens the mindset of students to face
                    competition in the global arena while enhancing their
                    knowledge and sharpening their skills in the respective
                    subjects.
                  </motion.p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 1.04 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative mx-auto h-[353px] w-full max-w-[389px] lg:mx-0"
              >
                <img
                  src="/assets/career.png"
                  alt="Career Foundation Workshops"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-white/15" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}