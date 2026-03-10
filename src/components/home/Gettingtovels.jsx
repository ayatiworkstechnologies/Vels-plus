"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ITEMS = [
  {
    icon: "/assets/icons/jee-1.png",
    title: "Two level exam",
    sub: "(1) JEE Mains (2) JEE Advanced",
  },
  {
    icon: "/assets/icons/jee-2.png",
    sub: "JEE Main conducted by NTA and \nJEE Advanced conducted by IITs",
  },
  {
    icon: "/assets/icons/jee-3.png",
    title: "Subjects",
    sub: "Chemistry, Physics, Maths",
  },
  {
    icon: "/assets/icons/jee-4.png",
    title: "Syllabus",
    sub: "11th and 12th according to NCERT",
  },
  {
    icon: "/assets/icons/jee-5.png",
    title: "JEE Main pattern",
    sub: "25 MCQ (4 options, 1 correct) & 10 Numerical answer based question per subject. Out of 10 numerical only 5 are to be attempted",
  },
  {
    icon: "/assets/icons/jee-6.png",
    sub: "Right attempt: +4, Wrong attempt: -1, \nNot Attempted: 0",
  },
  {
    icon: "/assets/icons/jee-7.png",
    sub: "JEE Main score gives eligibility for admission to NITs, IIITs and many other GFTIies & PRIVATE ENGINEERING COLLEGES.",
  },
];

const listParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const listItem = {
  hidden: { opacity: 0, x: -25 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45 } },
};

export default function GettingToVels() {
  return (
    <section className="bg-white" id="getting">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">

        {/* Heading */}
        <h2 className="primary-title text-[28px] md:text-[40px] leading-tight text-black">
          JEE - (Joint Entrance Exam)
        </h2>

        {/* Layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT: Items */}
          <motion.ul
            variants={listParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
          >
            {ITEMS.map((it, idx) => (
              <motion.li
                key={idx}
                variants={listItem}
                className="flex items-start gap-4"
              >
                <img
                  src={it.icon}
                  alt=""
                  className="w-10 h-10 shrink-0 mt-1"
                  loading="lazy"
                />

                <div className="leading-tight">
                  {it.title && (
                    <div className="font-bold text-black">
                      {it.title}
                    </div>
                  )}

                  <div className="mt-2 secondary-description text-[13px] md:text-[15px] text-black/70 whitespace-pre-line">
                    {it.sub}
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          {/* RIGHT: Image */}
          <motion.div
            className="relative w-full max-w-[540px] h-[380px] md:h-[500px] lg:h-[548px] mx-auto"
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/jee.png"
              alt="JEE Illustration"
              fill
              className="object-cover rounded-sm"
              sizes="(max-width:768px) 100vw, 540px"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}