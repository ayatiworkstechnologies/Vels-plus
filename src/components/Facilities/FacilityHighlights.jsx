"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

const highlights = [
  { id: 1, img: "/assets/neet.png" }, // Place your images in the public/assets folder
  { id: 2, img: "/assets/neet.png" },
  { id: 3, img: "/assets/neet.png" },
  { id: 4, img: "/assets/neet.png" },
  { id: 5, img: "/assets/neet.png" },
  { id: 6, img: "/assets/neet.png" },
];

const FacilityHighlights = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 3;
      const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-[44px] font-serif text-[#1a1a1a] tracking-tight leading-none">
              Facility Highlights
            </h2>
            <p className="text-gray-500 font-serif text-lg font-light">
              Modern infrastructure that enhances academic excellence.
            </p>
          </div>

          {/* Navigation Arrows (Exact Indigo Style) */}
          <div className="flex gap-8 mb-2">
            <button 
              onClick={() => scroll("left")}
              className="group transition-opacity hover:opacity-60"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="stroke-[#4e46e5]" strokeWidth="1.2">
                <path d="M19 12H5M5 12L11 18M5 12L11 6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={() => scroll("right")}
              className="group transition-opacity hover:opacity-60"
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="stroke-[#4e46e5]" strokeWidth="1.2">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 6 Image Row Strip */}
      <div 
        ref={scrollRef}
        className="flex gap-1 overflow-x-auto no-scrollbar scroll-smooth px-1 active:cursor-grabbing"
      >
        {highlights.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative flex-none w-[260px] md:w-[320px] lg:w-[380px] aspect-[4/5] overflow-hidden group"
          >
            <img
              src={item.img}
              alt={`Facility Highlight ${item.id}`}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default FacilityHighlights;