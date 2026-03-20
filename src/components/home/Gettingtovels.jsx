"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ScrollText,
  Beaker,
  CircleDot,
  CheckCircle2,
} from "lucide-react";

export default function GettingToVels() {
  return (
    <section className="bg-[#f2f2f2] py-12 font-primary sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[18px] bg-[#f2f2f2]"
        >
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.95fr_1.35fr] lg:gap-9">
            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1"
            >
              <div className="relative h-[380px] overflow-hidden rounded-[12px] border border-white/80 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:h-[460px] lg:h-[565px]">
                <Image
                  src="/assets/je.png"
                  alt="JEE classroom session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.06 }}
              className="order-2"
            >
              <h2 className="font-primary text-[28px] leading-tight text-[#171717] sm:text-[38px] lg:text-[34px] xl:text-[42px]">
                JEE - (Joint Entrance Exam)
              </h2>

              {/* top cards */}
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-[12px] bg-[#e7edf2] p-5">
                  <div className="border-l-[3px] border-[#1f5f87] pl-4">
                    <h3 className="text-[18px] font-semibold text-[#183247]">
                      Two Level Exam
                    </h3>

                    <div className="mt-3 space-y-1 text-[14px] leading-7 text-[#4b5964]">
                      <p>(1) JEE Main conducted by NTA</p>
                      <p>(2) JEE Advanced conducted by IITs</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[12px] bg-[#e7edf2] p-5">
                  <div className="border-l-[3px] border-[#1f5f87] pl-4">
                    <h3 className="text-[18px] font-semibold text-[#183247]">
                      Syllabus
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-[#4b5964]">
                      11th and 12th according to NCERT.
                    </p>
                  </div>
                </div>
              </div>

              {/* middle row */}
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#dbe9ef] text-[#2a5f7c]">
                    <Beaker className="h-5 w-5" strokeWidth={2} />
                  </div>

                  <div>
                    <h3 className="text-[18px] font-semibold text-[#183247]">
                      Core Subjects
                    </h3>

                    <ul className="mt-3 space-y-2 text-[14px] text-[#4b5964]">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4b5964]" />
                        Physics
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4b5964]" />
                        Chemistry
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4b5964]" />
                        Mathematics
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#dbe9ef] text-[#2a5f7c]">
                    <ScrollText className="h-5 w-5" strokeWidth={2} />
                  </div>

                  <div>
                    <h3 className="text-[18px] font-semibold text-[#183247]">
                      JEE Main Pattern
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-[#4b5964]">
                      25 MCQ (4 options, 1 correct) &amp; 10 Numerical answer
                      based question per subject. Out of 10 numerical only 5
                      are to be attempted
                    </p>
                  </div>
                </div>
              </div>

              {/* bottom cards */}
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-[12px] border border-[#d9e0e5] bg-[#f5f7f8] p-5">
                  <h3 className="flex items-center gap-2 text-[18px] font-semibold text-[#183247]">
                    <CircleDot className="h-4 w-4 text-[#2a5f7c]" strokeWidth={2.5} />
                    Marking Scheme
                  </h3>

                  <div className="mt-4 flex flex-wrap items-center gap-3 text-[13px] leading-5">
                    <span className="rounded-full bg-[#dff4e5] px-3 py-2 text-[#22a55a]">
                      Correct: +4
                    </span>
                    <span className="rounded-full bg-[#fde3e3] px-3 py-2 text-[#ef4444]">
                      Wrong: -1
                    </span>
                    <span className="rounded-full bg-[#eceff3] px-3 py-2 text-[#6b7280]">
                      Unattempted: 0
                    </span>
                  </div>
                </div>

                <div className="rounded-[12px] border border-[#d9e0e5] bg-[#f5f7f8] p-5">
                  <h3 className="flex items-center gap-2 text-[18px] font-semibold text-[#183247]">
                    <CheckCircle2 className="h-4 w-4 text-[#2a5f7c]" strokeWidth={2.5} />
                    Eligibility &amp; Scope
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-[#4b5964]">
                    JEE Main scores provide eligibility for admission to NITs,
                    IIITs, GFTIs, and top-tier Private Engineering Colleges.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}