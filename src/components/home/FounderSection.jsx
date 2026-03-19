"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const FounderSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation settings
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

  return (
    <section className="bg-[#f9f9f9] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-primary font-bold tracking-widest text-gray-800 mb-6 uppercase">
            Founder & Chairman
          </h2>
          <div className="space-y-1 text-gray-600 text-xl font-secondary font-light">
            <p>Visionary Founder of VELS Group of Institutions.</p>
            <p>Inspiring generations through excellence in education.</p>
          </div>
        </motion.div>

        {/* Main Card Wrapper */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row bg-white shadow-xl rounded-xl overflow-hidden border-2 border-white"
        >
          {/* Left: Image */}
          <motion.div variants={fadeInUp} className="md:w-1/2 relative h-[500px]">
            <Image
              src="/assets/founder.png" 
              alt="Dr. Ishari K. Ganesh"
              fill
              className="object-cover object-top"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            variants={fadeInUp}
            className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-white"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-1 font-primary font-medium">Dr. Ishari K. Ganesh</h3>
            <p className="text-lg font-secondary mb-8 font-light mt-4">
              M.Com., MBA., M.L., M.Phil., Ph.D.
            </p>

            <div className="space-y-8">
              {/* Position 1 */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest border-b-2 border-black inline-block mb-3 pb-1 font-primary font-medium ">
                  Founder and Chancellor
                </h4>
                <p className="text-md leading-relaxed text-gray-600 tracking-tight font-secondary font-light">
                  VELS Group of Schools, VELS Medical College, VELS University, 
                  Chennai (VELS Institute of Science Technology and Advanced Studies - VISTAS), 
                  VELS Foundations, NEET & JEE Coaching Centers.
                </p>
              </div>

              {/* Position 2 */}
              <div>
                <h4 className="text-md font-bold uppercase tracking-widest text-gray-800 font-primary">
                  Chairman
                </h4>
              </div>

              {/* Position 3 */}
              <div>
                <h4 className="text-md font-bold uppercase tracking-widest text-gray-800 font-primary">
                  President
                </h4>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Button - Triggers Popup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <button 
            onClick={() => setIsOpen(true)}
            className="bg-[#303395] hover:bg-[#1e2060] text-white px-10 py-3 text-sm font-bold transition-all duration-300 shadow-lg"
          >
            More Detail
          </button>
        </motion.div>

      </div>

      {/* --- POPUP DESIGN --- */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative w-full max-w-6xl bg-white shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-hidden rounded-sm"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-6 text-4xl text-gray-400 hover:text-black z-10 transition-colors"
              >
                &times;
              </button>

              {/* Popup Left: Image Area */}
              <div className="md:w-4/12 bg-[#f2f2f2] relative min-h-[300px] md:h-auto">
                <div className="absolute inset-0 p-8 md:p-12">
                  <div className="relative w-full h-full">
                    <Image
                      src="/assets/popup.png"
                      alt="Dr. Ishari K. Ganesh Profile"
                      fill
                      className="object-contain object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Popup Right: Text Content */}
              <div className="md:w-8/12 p-8 md:p-16 overflow-y-auto bg-white custom-scrollbar">
                <header className="mb-8">
                  <h2 className="text-4xl font-primary font-bold text-gray-900 mb-4 uppercase tracking-tight">
                    DR. ISHARI K. GANESH
                  </h2>
                  <p className="text-lg font-secondary font-medium text-gray-800 leading-snug">
                    Founder & Chancellor, VELS University | Chairman, VELS Group of Institutions
                  </p>
                </header>

                <div className="space-y-6 text-gray-700 font-secondary font-light text-[15px] md:text-[16px] leading-relaxed">
                  <p>
                    In a world where the journey from humble beginnings to remarkable achievements often feels unattainable, 
                    Dr. Ishari K. Ganesh emerges as a beacon of hope and inspiration.
                  </p>
                  
                  <p>
                    Born in 1966 to Ishari Velan and Pushpa, Dr. Ishari K. Ganesh&apos;s early life was marked by hardship. 
                    Following the untimely passing of his father, the family faced significant financial struggles, 
                    compounded by the pressures of rent and tuition fees. However, these challenges ignited his 
                    determination. At just 18, he embraced the responsibility of supporting his family, motivated by the 
                    belief that he had nothing to lose and everything to gain.
                  </p>

                  <p>
                    Dr. Ishari K. Ganesh&apos;s pivotal career shift came when he chose the path of self-employment over 
                    immediate financial security. In 1992, he founded Vels College of Pharmacy in Mylapore with just 36 
                    students. This modest beginning set the stage for the Vels Group of Institutions. With a bank loan, he 
                    acquired property in Pallavaram, transforming Vels College into a multi-disciplinary educational hub.
                  </p>

                  <p>
                    By 2008, Dr. Ishari K. Ganesh had successfully consolidated his efforts into the University of Vels, 
                    which now includes a diverse range of institutions, such as colleges of medicine, engineering, arts, 
                    science, and physiotherapy. The Vels Education Group has expanded its reach to manage dental and 
                    medical colleges and schools, with a presence extending to Singapore and England.
                  </p>

                  <p>
                    His unwavering commitment to accessible education is evident in the numerous scholarships he has 
                    established, supporting sports, ex-servicemen, and children of the film industry. These initiatives 
                    have empowered students from modest backgrounds, providing them with essential resources to 
                    pursue their educational aspirations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #303395;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default FounderSection;