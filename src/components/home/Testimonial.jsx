"use client";

import { useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    
    author: "A. Archana",
    role: "Class 12 Student",
    text: "VELS Plus helped me improve my confidence and marks significantly. The teachers explain every concept clearly and give personal attention to each student. The regular tests and feedback really helped me prepare better for my board exams.",
    avatar: "https://i.pravatar.cc/60?img=12",
    active: true,
  },
  {
    id: 2,
    
    author: "S. Ramesh",
    role: "Parent",
    text: "As a parent, I am very happy with the guidance my child receives at VELS Plus. The teachers are supportive, disciplined, and focused on academic growth. I can see a big improvement in my child's understanding and performance.",
    avatar: "https://i.pravatar.cc/60?img=32",
    active: false,
  },
  {
    id: 3,
    
    author: "Kavya S",
    role: "Class 11 Student",
    text: "VELS Plus is one of the best places for students who want strong academic support. The structured classes, revision sessions, and continuous assessments help students stay focused and confident.",
    avatar: "https://i.pravatar.cc/60?img=22",
    active: false,
  },
  {
    id: 4,
    
    author: "Balaji K",
    role: "Parent",
    text: "Legally Always has been an invaluable partner in navigating the complexities of business law.",
    avatar: "https://i.pravatar.cc/60?img=18",
    active: false,
  },
];

export default function TestimonialExtract() {
  const [current, setCurrent] = useState(0);
  const cardWidth = 360;

  const nextSlide = () => {
    if (current < testimonials.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <section className="w-full bg-[#f7f7f5] py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 text-5xl leading-none text-neutral-800">“</div>

          <h2 className="text-3xl font-primary font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Why Clients Realy on Us
          </h2>

          <p className="mt-5 max-w-lg font-secondary text-xl leading-6 text-neutral-500">
            Specializing in business, entertainment, employment, and conflict
            resolution, we advocate for entrepreneurs and stakeholders.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${current * cardWidth}px)`,
              }}
            >
              {testimonials.map((item, index) => {
                const isActive = index === current;

                return (
                  <div
                    key={item.id}
                    className={`min-w-[320px] sm:min-w-[340px] md:min-w-[360px] rounded-2xl p-7 transition-all duration-500 ${
                      isActive
                        ? "bg-primary text-white shadow-xl"
                        : "bg-gray text-neutral-900 shadow-sm"
                    }`}
                  >
                    <p className="text-[17px] font-medium leading-[1.25] sm:text-[18px] md:text-[20px]">
                      {item.text}
                    </p>

                    <div className="mt-10 flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt={item.author}
                        className="h-10 w-10 rounded-full object-cover"
                      />

                      <div>
                        <h4
                          className={`text-sm font-semibold ${
                            isActive ? "text-white" : "text-neutral-800"
                          }`}
                        >
                          {item.company}
                        </h4>
                        <p
                          className={`text-xs ${
                            isActive ? "text-white/70" : "text-neutral-500"
                          }`}
                        >
                          {item.author} - {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress + Arrows */}
          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="order-2 h-[2px] w-full bg-[#e7e2dc] sm:order-1 sm:flex-1">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{
                  width: `${((current + 1) / testimonials.length) * 100}%`,
                }}
              />
            </div>

            <div className="order-1 flex items-center gap-3 sm:order-2">
              <button
                onClick={prevSlide}
                className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={current === 0}
              >
                <span className="text-lg">←</span>
              </button>

              <button
                onClick={nextSlide}
                className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={current === testimonials.length - 1}
              >
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}