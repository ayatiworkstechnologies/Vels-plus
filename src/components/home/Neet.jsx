"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FlaskConical,
  Atom,
  Leaf,
  PawPrint,
} from "lucide-react";

const subjects = [
  { title: "Physics", icon: Atom },
  { title: "Chemistry", icon: FlaskConical },
  { title: "Zoology", icon: PawPrint },
  { title: "Botany", icon: Leaf },
];

export default function NeetSection() {
  return (
    <section className="bg-[#efefef] px-4 py-12 sm:px-6 md:py-16 lg:py-20 font-primary">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[28px] bg-[#f7f7f7] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.14)] sm:p-6 lg:p-8"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:gap-8">
            {/* LEFT CONTENT */}
            <div className="order-2 lg:order-1">
              <div className="pr-0 lg:pr-4">
                {/* Title */}
                <h2 className="font-primary text-3xl text-[#222] md:text-4xl">
                  NEET
                </h2>

                <p className="mt-5 text-2xl text-[#7f7f7f] sm:text-xl">
                  Conducted by National Testing Agency (NTA)
                </p>

                {/* Syllabus card */}
                <div className="mt-5 rounded-[18px] bg-[#ececec] px-4 py-4 sm:px-5 sm:py-5">
                  <h3 className="font-secondary text-xl text-[#202020]">
                    Syllabus
                  </h3>

                  <div className="mt-5 space-y-2 text-3xl leading-[1.65] text-[#7e7e7e] sm:text-xl">
                    <p>11th and 12th full syllabus according to NCERT</p>
                    <p>
                      NEET score makes a student eligible for MBBS, BDS, etc.
                      seats in AIIMS and many reputed government and private
                      medical colleges
                    </p>
                  </div>
                </div>

                {/* Bottom grid */}
                <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr]">
                  {/* Core subjects */}
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="block h-4 w-[3px] rounded-full bg-[#204a8f]" />
                      <p className="text-md font-semibold uppercase tracking-[0.22em] text-[#53657d]">
                        Core Subjects
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {subjects.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-3 rounded-[12px] bg-[#ececf1] px-4 py-4"
                          >
                            <Icon className="h-4 w-4 text-[#204a8f]" strokeWidth={2} />
                            <span className="text-lg font-medium text-[#2d2d2d] sm:text-xl">
                              {item.title}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Pattern */}
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="block h-4 w-[3px] rounded-full bg-[#9b6a00]" />
                      <p className="text-xl font-semibold uppercase tracking-[0.22em] text-[#6f6a5d]">
                        Pattern:
                      </p>
                    </div>

                    <div className="rounded-[16px] bg-[#ececec] px-4 py-5 sm:px-5">
                      <p className="text-lg leading-[1.75] text-[#707070] sm:text-xl">
                        50 MCQ (4 options, 1 correct) per subject, only 45 to
                        be attempted
                      </p>

                      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-lg font-semibold sm:text-xl">
                        <span className="text-[#1f9d55]">+4 Correct</span>
                        <span className="text-[#ef4444]">-1 Wrong</span>
                        <span className="text-[#7b8794]">0 Unsolved</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="order-1 lg:order-2"
            >
              <div className="relative h-[320px] overflow-hidden rounded-[24px] border-[3px] border-white bg-white shadow-[0_10px_24px_rgba(0,0,0,0.10)] sm:h-[420px] lg:h-full lg:min-h-[470px]">
                <Image
                  src="/assets/nt.png"
                  alt="NEET aspirants studying"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}