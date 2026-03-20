"use client";

import { useEffect, useRef, useState } from "react";

const cards = [
  {
    id: "01",
    title: "Strong Academic Foundation",
    desc: "Focused training in Mathematics and Science for board excellence",
    bg: "#EDE8FB",
    accent: "#7C5CBF",
    iconBg: "rgba(124,92,191,0.12)",
    icon: "📐",
  },
  {
    id: "02",
    title: "Olympiad & Competitive Training",
    desc: "Preparation for national and international Olympiads",
    bg: "#FDF3D9",
    accent: "#B8860B",
    iconBg: "rgba(184,134,11,0.12)",
    icon: "🏆",
  },
  {
    id: "03",
    title: "Advanced Problem Solving",
    desc: "Develop analytical thinking and high-level problem-solving skills",
    bg: "#E2F5F2",
    accent: "#1E9E8A",
    iconBg: "rgba(30,158,138,0.12)",
    icon: "🧠",
  },
  {
    id: "04",
    title: "Digital Learning Support",
    desc: "VELS Plus App for instant doubt clarification and learning support",
    bg: "#FDEEE6",
    accent: "#C85A2A",
    iconBg: "rgba(200,90,42,0.12)",
    icon: "📱",
  },
];

const DURATION = 3500;
const STACK_COUNT = Math.min(3, cards.length - 1);

export default function StackingCardSlider() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [paused, setPaused] = useState(false);
  const progRef = useRef(null);

  const card = cards[active];

  const goTo = (i) => {
    if (i === active) return;
    setActive(i);
    setAnimKey((k) => k + 1);
  };

  const next = () => goTo((active + 1) % cards.length);
  const prev = () => goTo((active - 1 + cards.length) % cards.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, DURATION);
    return () => clearInterval(id);
  }, [paused, active]);

  useEffect(() => {
    const bar = progRef.current;
    if (!bar) return;
    bar.style.transition = "none";
    bar.style.width = "0%";
    void bar.offsetWidth;
    bar.style.transition = `width ${DURATION}ms linear`;
    bar.style.width = "100%";
  }, [active]);

  return (
    <section className="relative overflow-hidden bg-[#f4f4f4] py-20 md:py-28">

      {/* Decorative glow — top right */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 rounded-full"
        style={{
          width: 420,
          height: 420,
          background: `radial-gradient(circle, ${card.accent}28, transparent 70%)`,
          filter: "blur(64px)",
          transition: "background 0.6s ease",
        }}
      />
      {/* Decorative glow — bottom left */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 rounded-full"
        style={{
          width: 360,
          height: 360,
          background: `radial-gradient(circle, ${card.accent}20, transparent 70%)`,
          filter: "blur(64px)",
          transition: "background 0.6s ease",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className="mb-2 text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: card.accent, transition: "color 0.4s ease" }}
            >
              What we offer
            </p>
            <h2 className="text-3xl font-bold font-primary leading-tight text-[#1a1733] sm:text-4xl md:text-5xl">
              Why VELS Plus{" "}
              <span style={{ color: card.accent, transition: "color 0.4s ease" }}>
                Stands Out
              </span>
            </h2>
          </div>

          {/* Nav controls */}
          <div className="flex items-center gap-3">
            {/* Pill dots */}
            <div className="mr-1 flex items-center gap-2">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  style={{
                    height: 8,
                    width: i === active ? 28 : 8,
                    borderRadius: 9999,
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    backgroundColor:
                      i === active ? card.accent : "rgba(0,0,0,0.15)",
                    transition: "width 0.35s ease, background-color 0.35s ease",
                  }}
                />
              ))}
            </div>

            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d1cce8] bg-white text-lg text-[#1a1733] shadow-sm transition hover:bg-[#f0eeff]"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-full text-lg font-bold text-white shadow-md transition hover:scale-105"
              style={{
                backgroundColor: card.accent,
                transition: "background-color 0.4s ease",
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* ── Card Stack ── */}
        <div
          className="relative mx-auto"
          style={{ maxWidth: 500, height: 310 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Ghost / stacked cards behind */}
          {Array.from({ length: STACK_COUNT }).map((_, si) => {
            const depth = STACK_COUNT - si; // 3 → 2 → 1 (furthest to nearest)
            const ghostCard = cards[(active + depth) % cards.length];
            return (
              <div
                key={si}
                className="absolute inset-x-0 rounded-2xl"
                style={{
                  height: "100%",
                  backgroundColor: ghostCard.bg,
                  border: "1px solid rgba(0,0,0,0.06)",
                  transform: `translateY(${depth * 14}px) scale(${1 - depth * 0.04})`,
                  zIndex: 10 - depth,
                  opacity: 1 - depth * 0.25,
                  transition:
                    "transform 0.45s ease, opacity 0.45s ease, background-color 0.45s ease",
                  transformOrigin: "bottom center",
                }}
              />
            );
          })}

          {/* Active card */}
          <div
            key={animKey}
            className="absolute inset-x-0 z-30 flex flex-col justify-between rounded-2xl p-7"
            style={{
              height: "100%",
              backgroundColor: card.bg,
              border: "1px solid rgba(0,0,0,0.07)",
              boxShadow: `0 20px 50px ${card.accent}28, 0 4px 16px rgba(0,0,0,0.06)`,
              animation: "cardIn 0.38s cubic-bezier(0.25,0.46,0.45,0.94) forwards",
            }}
          >
            {/* Top row: icon + watermark number */}
            <div className="flex items-start justify-between">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                style={{ backgroundColor: card.iconBg }}
              >
                {card.icon}
              </div>
              <span
                className="text-5xl font-black leading-none"
                style={{ color: card.accent, opacity: 0.12 }}
              >
                {card.id}
              </span>
            </div>

            {/* Body */}
            <div>
              <div
                className="mb-2 h-[2px] w-8 rounded-full"
                style={{ backgroundColor: card.accent }}
              />
              <h3 className="text-xl font-bold font-primary leading-snug text-[#1a1733]">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-6 font-secondary text-[#5a5778]">
                {card.desc}
              </p>

              {/* Auto-progress bar */}
              <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-black/[0.08]">
                <div
                  ref={progRef}
                  className="h-full rounded-full"
                  style={{ backgroundColor: card.accent, width: "0%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Counter ── */}
        <div className="mt-10 flex justify-center">
          <span className="text-sm text-[#9691b0]">
            <span className="font-semibold text-[#1a1733]">
              {String(active + 1).padStart(2, "0")}
            </span>
            {" / "}
            {String(cards.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(48px) scale(0.93); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
      `}</style>
    </section>
  );
}