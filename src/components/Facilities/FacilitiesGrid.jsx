"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const facilities = [
  {
    id: 1,
    title: "LIBRARY",
    subtitle: "Conducted by National Testing Agency(NTA)",
    description: "Our academy has a distinctive library, where students can get instant reference. Library also comprises of past year medical/engineering entrance examinations model question papers.",
    image: "/assets/library.jpg",
    // Top right card
    gridClass: "md:col-start-2 md:col-span-1 md:row-span-1"
  },
  {
    id: 2,
    title: "TAMIL MEDIUM STUDENTS",
    subtitle: "Conducted by National Testing Agency(NTA)",
    description: "TN Government has announced that NEET Entrance can be written in both English & Tamil. Hence, our academy ensures that Tamil medium students too get an exclusive coaching for NEET entrance with our unique teaching methodology in Tamil language.",
    image: "/assets/tamil.png",
    // Tall card on the far right
    gridClass: "md:col-start-3 md:col-span-1 md:row-span-2 h-full"
  },
  {
    id: 3,
    title: "PERSONALIZED CARE",
    subtitle: "Conducted by National Testing Agency(NTA)",
    description: "Ultimately, student can get experience of individual tutoring for close follow up with high attention, dedication, doubt clarifying/interactive sessions, perfect class coordination, reasoning tests with immediate explanations, week-end cumulative tests, monthly tests, online model exams and many other programs which extracts the students ability maximum to reach their goal.",
    image: "/assets/personalized-care.jpg",
    // Wide card at the bottom
    gridClass: "md:col-start-1 md:col-span-2 md:row-span-1"
  }
];

const FacilitiesGrid = () => {
  const [selectedFacility, setSelectedFacility] = useState(null);

  return (
    <section className="bg-white py-20 px-6 max-w-7xl mx-auto">
      {/* The Grid: 3 Columns, 2 Rows */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-fr">
        
        {/* Header Section: Top Left */}
        <div className="md:col-span-1 md:row-span-1 flex flex-col justify-center space-y-4 pr-4">
          <h2 className="text-[32px] md:text-[42px] font-serif text-[#1a1a1a] leading-[1.1]">
            World-Class <br /> Learning Facilities
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-[280px] font-light">
            Modern facilities supporting focused academic excellence.
          </p>
        </div>

        {/* Bento Grid Items */}
        {facilities.map((item) => (
          <div 
            key={item.id} 
            className={`relative group cursor-pointer overflow-hidden rounded-sm shadow-md transition-all duration-300 hover:shadow-xl ${item.gridClass}`}
            onClick={() => setSelectedFacility(item)}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
            
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-serif tracking-tight mb-1">{item.title}</h3>
              <p className="text-[11px] opacity-70 font-light tracking-wide">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Popup Implementation */}
      <AnimatePresence>
        {selectedFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFacility(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white w-full max-w-5xl overflow-hidden flex flex-col md:flex-row z-10 rounded-[22px] border-2 border-white bg-[#f3f3f3] shadow-[0_14px_35px_rgba(0,0,0,0.10)]e"
            >
              {/* Popup Left: Image (Matches popup-1 design) */}
              <div className="md:w-1/2 h-[300px] md:h-[450px]">
                <img 
                  src={selectedFacility.image} 
                  alt={selectedFacility.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Popup Right: Text (Matches the white-space and serif style) */}
              <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white relative">
                <button 
                  onClick={() => setSelectedFacility(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a] mb-8 tracking-tight uppercase">
                  {selectedFacility.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed text-base md:text-lg font-light">
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