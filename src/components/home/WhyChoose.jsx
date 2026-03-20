"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    id: "01",
    title: "Strong Academic Foundation",
    desc: "Focused training in Mathematics and Science for board excellence",
    bg: "#E8DDF7",
  },
  {
    id: "02",
    title: "Olympiad & Competitive Training",
    desc: "Preparation for national and international Olympiads",
    bg: "#F3E3AF",
  },
  {
    id: "03",
    title: "Advanced Problem Solving",
    desc: "Develop analytical thinking and high-level problem-solving skills",
    bg: "#DDF3F2",
  },
  {
    id: "04",
    title: "Digital Learning Support",
    desc: "VELS Plus App for instant doubt clarification and learning support",
    bg: "#F7DCCB",
  },
];

export default function ModernCardSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % cards.length);
  const prev = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  useEffect(() => {
    if (paused || cards.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  const getVisibleCards = () => {
    const prevIndex = (index - 1 + cards.length) % cards.length;
    const nextIndex = (index + 1) % cards.length;

    return [
      { ...cards[prevIndex], position: "left" },
      { ...cards[index], position: "center" },
      { ...cards[nextIndex], position: "right" },
    ];
  };

  const visibleCards = getVisibleCards();

  const positionStyles = {
    left: {
      x: "-85%",
      scale: 0.9,
      opacity: 0.55,
      zIndex: 10,
    },
    center: {
      x: "0%",
      scale: 1,
      opacity: 1,
      zIndex: 30,
    },
    right: {
      x: "85%",
      scale: 0.9,
      opacity: 0.55,
      zIndex: 10,
    },
  };

  return (
    <section className="bg-[#f6f6f6] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-primary text-3xl font-semibold leading-tight text-[#1e1b3a] sm:text-4xl">
              Why VELS Plus Stands Out
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#17154B] text-white transition hover:scale-105"
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#17154B] text-white transition hover:scale-105"
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>

        {/* Desktop slider */}
        <div
          className="relative hidden h-[320px] items-center justify-center overflow-hidden md:flex"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {visibleCards.map((card) => (
            <motion.div
              key={`${card.id}-${card.position}-${index}`}
              initial={false}
              animate={positionStyles[card.position]}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute w-[280px] sm:w-[320px]"
              style={{ zIndex: positionStyles[card.position].zIndex }}
            >
              <div
                className="rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                style={{ backgroundColor: card.bg }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#4b4761] text-sm font-semibold text-[#2f2a44]">
                  {card.id}
                </div>

                <h3 className="text-xl font-semibold text-[#1e1b3a]">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#555]">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile slider */}
        <div className="md:hidden">
          <div
            className="relative h-[260px] overflow-hidden"
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            <motion.div
              key={cards[index].id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <div
                className="h-full rounded-xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                style={{ backgroundColor: cards[index].bg }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4b4761] text-sm font-semibold text-[#2f2a44]">
                  {cards[index].id}
                </div>

                <h3 className="mt-4 text-lg font-semibold text-[#1e1b3a]">
                  {cards[index].title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {cards[index].desc}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-[#17154B]" : "w-2.5 bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}