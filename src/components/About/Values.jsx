"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import imgSrc from "@/public/assets/value.png";

export default function ValuesSection() {
  const values = [
    {
      num: "01",
      title: "Excellence",
      desc: "We strive for the highest standards in education, training, and student development.",
    },
    {
      num: "02",
      title: "Integrity",
      desc: "We uphold honesty, transparency, and ethical practices in all our academic and institutional activities.",
    },
    {
      num: "03",
      title: "Innovation",
      desc: "We encourage new ideas, creative thinking, and modern learning approaches.",
    },
    {
      num: "04",
      title: "Student-Centric Learning",
      desc: "We prioritize the success, growth, and well-being of every student.",
    },
    {
      num: "05",
      title: "Commitment to Society",
      desc: "We believe education should empower individuals to positively impact their communities and the nation.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % values.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f3f3f3] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="primary-title inline-block">Values</h2>
          <div className="mt-3 h-[1px] w-24 bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">

          {/* LEFT IMAGE */}
          <motion.div
            className="relative flex justify-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-md">
              <Image
                src={imgSrc}
                alt="Values image"
                width={590}
                height={546}
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT VALUES */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 h-[1px] w-full bg-primary" />

            <div className="space-y-3">
              {values.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={item.num}
                    className={`rounded-lg border transition-all duration-400 ${
                      isActive
                        ? "border-primary bg-white shadow-sm"
                        : "border-transparent"
                    }`}
                  >
                    <div className="flex items-start gap-4 px-4 py-3">

                      {/* NUMBER */}
                      <div className="w-10 shrink-0">
                        <p
                          className={`text-xl font-medium ${
                            isActive ? "text-primary" : "text-gray-800"
                          }`}
                        >
                          {item.num}
                        </p>
                      </div>

                      {/* TEXT */}
                      <div className="flex-1">
                        <h3
                          className={`primary-subtitle text-[16px] ${
                            isActive ? "text-primary" : "text-gray-900"
                          }`}
                        >
                          {item.title}
                        </h3>

                        <AnimatePresence>
                          {isActive && (
                            <motion.p
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="secondary-description mt-2 text-sm text-gray-500 leading-relaxed"
                            >
                              {item.desc}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}