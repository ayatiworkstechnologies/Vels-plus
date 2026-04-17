"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const facilities = [
  {
    id: 1,
    title: "LIBRARY",
    subtitle: "Conducted by National Testing Agency(NTA)",
    description: "Our academy has a distinctive library...",
    image: "/assets/library.jpg",
    gridClass: "md:col-start-2 md:col-span-1 md:row-span-1"
  },
  {
    id: 2,
    title: "TAMIL MEDIUM STUDENTS",
    subtitle: "Conducted by National Testing Agency(NTA)",
    description: "TN Government has announced...",
    image: "/assets/tamil.png",
    gridClass: "md:col-start-3 md:col-span-1 md:row-span-2"
  },
  {
    id: 3,
    title: "PERSONALIZED CARE",
    subtitle: "Conducted by National Testing Agency(NTA)",
    description: "Ultimately, student can get experience...",
    image: "/assets/personalized-care.jpg",
    gridClass: "md:col-start-1 md:col-span-2 md:row-span-1"
  }
];

const FacilitiesGrid = () => {
  const [selectedFacility, setSelectedFacility] = useState(null);

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6">

        {/* HEADER */}
        <div className="flex flex-col justify-center space-y-3 md:space-y-4">
          <h2 className="text-[26px] md:text-[42px] font-serif leading-[1.1]">
            World-Class <br /> Learning Facilities
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-full md:max-w-[280px]">
            Modern facilities supporting focused academic excellence.
          </p>
        </div>

        {/* CARDS */}
        {facilities.map((item) => (
          <div
            key={item.id}
            className={`relative group cursor-pointer overflow-hidden rounded-md shadow-md hover:shadow-xl transition ${item.gridClass}`}
            onClick={() => setSelectedFacility(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[220px] md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
              <h3 className="text-lg md:text-xl font-serif">{item.title}</h3>
              <p className="text-[10px] md:text-[11px] opacity-70">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFacility(null)}
              className="absolute inset-0 bg-black/60"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white w-full max-w-5xl rounded-xl overflow-hidden flex flex-col md:flex-row z-10"
            >
              {/* IMAGE */}
              <div className="w-full md:w-1/2 h-[220px] md:h-[450px]">
                <img
                  src={selectedFacility.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="w-full md:w-1/2 p-6 md:p-12 relative">
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="absolute top-4 right-4 text-gray-400"
                >
                  ✕
                </button>

                <h2 className="text-xl md:text-3xl font-serif mb-4 uppercase">
                  {selectedFacility.title}
                </h2>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {selectedFacility.description}
                </p>
              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default FacilitiesGrid;