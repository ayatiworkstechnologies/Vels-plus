"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialCards = [
  {
    id: "01",
    title: "Create and Log In to Your Account",
    desc: "Strong focus on Mathematics and Science board preparation",
    bg: "#E8DDF7",

  },
  {
    id: "02",
    title: "Learn E-Commerce Basics",
    desc: "Training for National & International Olympiads",
    bg: "#F3E3AF",
 
  },
  {
    id: "03",
    title: "Optimize Your Store Setup",
    desc: "Advanced problem-solving skill development",
    bg: "#DDF3F2",

  },
  {
    id: "04",
    title: "Monitor Security Reports",
    desc: "Access to VELS Plus Digital App for doubt clarification",
    bg: "#F7DCCB",

  },
];

export default function OverlapFlowSlider() {
  const [cards, setCards] = useState(initialCards);

  const nextSlide = () => {
    setCards((prev) => {
      const updated = [...prev];
      const first = updated.shift();
      updated.push(first);
      return updated;
    });
  };

  const prevSlide = () => {
    setCards((prev) => {
      const updated = [...prev];
      const last = updated.pop();
      updated.unshift(last);
      return updated;
    });
  };

  const positions = [
    { left: "0%", z: 40 },
    { left: "23%", z: 30 },
    { left: "46%", z: 20 },
    { left: "69%", z: 10 },
  ];

  return (
    <section className="bg-[#f6f6f6] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between ">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold leading-tight text-[#22203d] sm:text-4xl md:text-5xl">
              Why Choose VELS Plus
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#17154B] text-white transition hover:scale-105"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#17154B] text-white transition hover:scale-105"
            >
              →
            </button>
          </div>
        </div>

        {/* Desktop overlap cards */}
        <div className="relative hidden h-[300px] md:block">
          <AnimatePresence mode="popLayout">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                layout
                initial={false}
                animate={{
                  left: positions[index].left,
                  zIndex: positions[index].z,
                }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                className="absolute top-0 h-full w-[31%]"
                style={{ zIndex: positions[index].z }}
              >
                <div
                  className="relative h-full rounded-[18px] p-6 border-2 border-white"
                  style={{ backgroundColor: card.bg }}
                >
                  {/* Number */}
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#4b4761] text-sm font-semibold text-[#2f2a44]">
                    {card.id}
                  </div>

                  {/* Title */}
                  <h3 className="max-w-[240px] text-[22px] font-semibold leading-[1.2] text-[#2b2740]">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 max-w-[260px] text-sm leading-6 text-[#666176]">
                    {card.desc}
                  </p>

                  {/* Icon */}
                  <div className="absolute bottom-4 right-5 text-4xl opacity-20">
                    {card.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile simple slider */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative rounded-[18px] p-6"
              style={{ backgroundColor: card.bg }}
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#4b4761] text-sm font-semibold text-[#2f2a44]">
                {card.id}
              </div>

              <h3 className="max-w-[240px] text-xl font-semibold leading-[1.2] text-[#2b2740]">
                {card.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#666176]">
                {card.desc}
              </p>

              <div className="absolute bottom-4 right-5 text-4xl opacity-20">
                {card.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}