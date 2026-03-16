"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    key: "vision",
    title: "Our Vision",
    description:
      "To be a leading educational institution that nurtures intellectual curiosity, innovation, and excellence, empowering students with the knowledge and skills required to succeed in a rapidly evolving global landscape.",
    image: "/assets/vision.jpg",
  },
  {
    key: "mission",
    title: "Our Mission",
    list: [
      "To provide high-quality education through innovative teaching methods and comprehensive learning resources.",
      "To cultivate analytical thinking, problem-solving ability, and scientific curiosity among students.",
      "To prepare students for national and international competitive examinations such as NEET, IIT-JEE, and Olympiads.",
      "To foster a supportive academic environment that promotes personal growth, discipline, and lifelong learning.",
    ],
    image: "/assets/mission.jpg",
  },
];

export default function Slide() {
  const [current, setCurrent] = useState(0);

  const total = slides.length;
  const activeSlide = slides[current];
  const nextSlide = slides[(current + 1) % total];

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  return (
    <section className="w-full bg-[#f3f3f3] py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-5 md:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.75fr)_minmax(260px,0.9fr)] lg:gap-[44px]">
          {/* Left Side */}
          <div className="min-w-0">
            {/* Main Image */}
            <div className="relative aspect-[16/9] sm:aspect-[16/8.8] md:aspect-[16/8] lg:aspect-[16/6.65] w-full overflow-hidden rounded-md bg-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <Image
                src={activeSlide.image}
                alt={activeSlide.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 68vw"
                className="object-cover"
              />
            </div>

            {/* Mobile Counter */}
            <div className="mt-4 flex items-center justify-between lg:hidden">
              <div className="flex items-end leading-none">
                <span className="text-[36px] font-light tracking-[-0.05em] text-black sm:text-[42px]">
                  {String(current + 1).padStart(2, "0")}
                </span>
                <span className="mx-1 text-[36px] font-light tracking-[-0.05em] text-black sm:text-[42px]">
                  /
                </span>
                <span className="text-[36px] font-light tracking-[-0.05em] text-[#c9c9c9] sm:text-[42px]">
                  {String(total).padStart(2, "0")}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous slide"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition hover:bg-black/5"
                >
                  <ChevronLeft size={20} strokeWidth={1.7} />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next slide"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition hover:bg-black/5"
                >
                  <ChevronRight size={20} strokeWidth={1.7} />
                </button>
              </div>
            </div>

            {/* Bottom content + arrows */}
            <div className="mt-5 flex flex-col gap-5 sm:mt-6 md:mt-8 md:flex-row md:items-start md:justify-between md:gap-6">
              <div className="min-w-0 max-w-[760px]">
                <h2 className="text-[26px] font-normal leading-[1.15] tracking-[-0.02em] text-black sm:text-[30px] md:text-[28px] lg:text-[34px]">
                  {activeSlide.title}
                </h2>

                {activeSlide.description && (
                  <p className="mt-4 max-w-[720px] text-[15px] leading-[1.8] text-[#2d2d2d] sm:text-[16px] md:mt-6 md:text-[17px] md:leading-[1.9]">
                    {activeSlide.description}
                  </p>
                )}

                {activeSlide.list && (
                  <ul className="mt-4 space-y-3 text-[15px] leading-[1.75] text-[#2d2d2d] sm:text-[16px] md:mt-6 md:text-[17px] md:leading-[1.8]">
                    {activeSlide.list.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Desktop arrows */}
              <div className="hidden shrink-0 items-center gap-2 pt-1 lg:flex">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous slide"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-transparent text-black transition hover:bg-black/5"
                >
                  <ChevronLeft size={20} strokeWidth={1.7} />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next slide"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-transparent text-black transition hover:bg-black/5"
                >
                  <ChevronRight size={20} strokeWidth={1.7} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - show only on desktop */}
          <div className="hidden min-w-0 lg:flex lg:flex-col lg:items-start">
            {/* Preview image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-neutral-200 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <Image
                src={nextSlide.image}
                alt={nextSlide.title}
                fill
                sizes="32vw"
                className="object-cover"
              />
            </div>

            {/* Counter */}
            <div className="mt-10 flex items-end leading-none">
              <span className="text-[74px] font-light tracking-[-0.05em] text-black">
                {String(current + 1).padStart(2, "0")}
              </span>
              <span className="mx-1 text-[74px] font-light tracking-[-0.05em] text-black">
                /
              </span>
              <span className="text-[74px] font-light tracking-[-0.05em] text-[#c9c9c9]">
                {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}