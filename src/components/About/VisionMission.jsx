"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import missionImg from "@/public/assets/our-phi.png";
import visionImg from "@/public/assets/our-commit.png";

const tabContent = {
  vision: {
    title: "Our Philosophy",
    desc: "At VELS, education goes beyond textbooks. Our philosophy is centered on nurturing curiosity, encouraging critical thinking, and developing strong problem-solving abilities in students. Through structured academic programs, interactive learning methods, and personalized mentoring, we aim to build confident learners who are prepared to face real-world challenges and global competition.",
    img: missionImg,
  },
  mission: {
    title: "Our Commitment to Students",
    desc: "We are deeply committed to supporting every student’s academic journey. Through carefully designed study materials, regular assessments, expert faculty guidance, and modern digital learning platforms, we ensure students receive the resources they need to succeed. Our programs focus on building a strong foundation in Mathematics and Science, helping students excel in board exams, competitive exams, and future academic pursuits.",
    img: visionImg,
  },
};

export default function VisionMission() {
  const [activeTab, setActiveTab] = useState("vision");

  const { title, desc, img } = tabContent[activeTab];

  return (
    <>
      {/* ---------- Philosophy & Commitment Section ---------- */}
      <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24 font-founders">
        <div className="mx-auto max-w-7xl grid items-center gap-14 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Tabs */}
            <div className="mb-12 flex  gap-8">
              {["vision", "mission"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-2 text-sm transition primary-subtitle ${
                    activeTab === tab ? "text-primary" : "text-black"
                  }`}
                >
                  {tab === "vision"
                    ? "Our Philosophy"
                    : "Our Commitment to Students"}

                  {activeTab === tab && (
                    <>
                      <span className="absolute -left-3 top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-primary"></span>
                      <span className="absolute bottom-0 left-0 h-[1px] w-full bg-primary"></span>
                    </>
                  )}
                </button>
              ))}
            </div>

            {/* Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-4 text-sm secondary-title">{title}</h2>

              <hr className="mb-6 w-14 border-t border-primary" />

              <p className="max-w-xl text-lg leading-relaxed text-gray-700 secondary-description">
                {desc}
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="relative flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src={img}
              alt={title}
              width={420}
              height={420}
              className="h-[420px] w-[420px] object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

     
    </>
  );
}