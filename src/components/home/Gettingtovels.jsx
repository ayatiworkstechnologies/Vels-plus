/* components/GettingToVels.jsx */
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

/* Replace with your real files */
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
    sub: "11th and 12th according to  NCERT",
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

/* Animation presets */
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

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
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="primary-title text-[28px] md:text-[40px] leading-tight text-black"
        >
          JEE - (Joint Entrance Exam)
        </motion.h2>

       

        {/* Layout */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
             {/* RIGHT: Icon List */}
          <motion.ul
            variants={listParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 md:space-y-7 flex flex-col justify-center"
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
                  className="shrink-0 mt-0.5"
                  loading="lazy"
                />
                <div className="leading-tight">
                  <div className="font-bold text-black">
                    {it.title}
                  </div>
                 <div className="mt-4 secondary-description text-[12.5px] md:text-lg text-black/70 whitespace-pre-line">
                    {it.sub}
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
       <motion.div
  className="relative overflow-hidden flex-shrink-0"
  initial={{ opacity: 0, scale: 1.03 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  style={{ width: '540px', height: '548px' }}
>
  <Image
    src="/assets/jee.png" 
    alt="VELS City Location Map"
    fill
    className="object-cover"
    sizes="540px"
    priority
  />
</motion.div>

       
        </div>
      </div>
    </section>
  );
}
