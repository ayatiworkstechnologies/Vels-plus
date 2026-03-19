"use client";
import React from "react";
import { motion } from "framer-motion";

const Feature = () => {
  return (
    <section
  id="target-section"
  className="relative flex items-center justify-center text-black overflow-hidden py-16 px-4"
  style={{
    backgroundImage: "url('/assets/paper-1.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
      
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10 items-center">

        {/* VIDEO BLOCK */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-[240px] md:w-[380px] aspect-[12/16] rounded-lg overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              <source src="/assets/video.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* TEXT BLOCK */}
        <motion.div
          className="flex-1 p-6 md:p-8 bg-white rounded-lg"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="primary-title text-black mb-3">
            A Warm Welcome to VELS <br /> Group of Institutions
          </h2>

          <div className="w-40 h-[0.5px] bg-[#2D3091] mb-6 mt-4"></div>

          <p className="text-gray-700 secondary-description mb-5">
            VELS Group is a leading private educational conglomerate in Tamil
            Nadu, nurturing thousands of students every year through
            world-class institutions and innovative academic programs.
          </p>

          <h3 className="secondary-light text-black text-3xl mb-3">
            Founded by Dr. Ishari K. Ganesh in 1992, the VELS Group has grown
            into a major educational network.
          </h3>
        </motion.div>

      </div>
    </section>
  );
};

export default Feature;