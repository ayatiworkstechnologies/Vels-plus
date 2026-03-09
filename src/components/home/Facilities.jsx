"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const workshops = [
  "National Talent Search Examination – NTSE (Stage 1 & Stage 2)",
  "National Standard Examination in Junior Science - NSEJS",
  "International Junior Science Olympiad - IJSO.",
  "International Mathematical Olympiad - IMO.",
  "Workshops for various Science & Maths Olympiads.",
  "National Mathematics Talent Contest (NMTC).",
  "TECHNOTHLON, conducted by IIT Guwahati, INDIA.",
  "Regional Mathematical Olympiad – RMO.",
];

export default function AcademicWorkshops() {
  const [active, setActive] = useState(0);

  // Auto-rotate the active workshop every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % workshops.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return ( <>
    <section className="mx-auto max-w-7xl px-6 py-24 bg-white font-primary overflow-hidden">
      {/* Main Section Heading */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 tracking-tight">
          Academic Excellence Workshops
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: Auto-Highlighting List */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold uppercase tracking-widest text-gray-800 mb-8">
            VELS ORGANISE WORKSHOPS FOR :
          </h3>
          
          <div className="relative flex flex-col gap-2">
            {workshops.map((item, i) => {
              const isActive = i === active;
              return (
                <div
                  key={i}
                  className="relative cursor-pointer py-3 px-6"
                  onClick={() => setActive(i)}
                >
                  {/* Sliding Highlight Background */}
                  {isActive && (
                    <motion.div
                      layoutId="highlight"
                      className="absolute inset-0 bg-gray-50 border-l-4 border-[#303395] z-0"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Workshop Text */}
                  <motion.p
                    animate={{ 
                      x: isActive ? 10 : 0,
                      color: isActive ? "#000000" : "#6B7280"
                    }}
                    className={`relative z-10 text-lg font-secondary font-light transition-colors duration-500 ${
                      isActive ? "font-medium" : ""
                    }`}
                  >
                    {item}
                  </motion.p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE: Framed Static Image */}
        <div className="relative flex justify-center items-center lg:justify-end">
          {/* Decorative Framing Lines */}
      

          {/* Fixed-Size Image Container (589x559) */}
          <div 
            className="relative z-10  overflow-hidden  flex-shrink-0"
            style={{ width: '589px', height: '559px' }}
          >
            <Image
              src="/assets/workshop.png" 
              alt="Academic Excellence Workshop"
              fill
              className="object-cover"
              sizes="589px"
              priority
            />
          </div>
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
              NEET & JEE (Mains & Advanced)
            </motion.h2>
    
            {/* Description Block */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="space-y-2 text-[#4a4a4a] font-secondary font-light text-lg md:text-md tracking-[0.05em]"
            >
              <p>
                VELS has long been distinguished for the best preparatory courses and results for Medical (NEET) & 
              </p>
              <p>
               Engineering (IIT-JEE) entrance examinations. We offer methodical coaching and a healthy competitive 
              </p>
              <p>
                atmosphere to the aspirants through our excellent curriculum. The study material which has been prepared by our 
              </p>
              <p>
                well versed faculties after extensive research is comprehensive and simple to understand. The specially tailored curriculum takes care of board examinations simultaneously.
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