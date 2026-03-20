"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "NEET Physics Overview",
    accent: "#D4DDB2",
    icon: "/assets/1.png",
  },
  {
    id: 2,
    title: "NEET Chemistry Essentials",
    accent: "#C8D5E8",
    icon: "/assets/2.png",
  },
  {
    id: 3,
    title: "NEET Biology Guide",
    accent: "#B6B3F1",
    icon: "/assets/3.png",
  },
  {
    id: 4,
    title: "Practice Questions and Mock Tests",
    accent: "#EDB8CF",
    icon: "/assets/4.png",
  },
  {
    id: 5,
    title: "Study Resources and Materials",
    accent: "#F0B8C1",
    icon: "/assets/5.png",
  },
  {
    id: 6,
    title: "Exam Strategy and Tips",
    accent: "#EDD0B5",
    icon: "/assets/6.png",
  },
  {
    id: 7,
    title: "Previous Years' Papers",
    accent: "#CBC9E8",
    icon: "/assets/7.png",
  },
  {
    id: 8,
    title: "Online Courses and Tutorials",
    accent: "#E2B8E7",
    icon: "/assets/8-1.png",
  },
  {
    id: 9,
    title: "Additional Support and Guidance",
    accent: "#E3E1A6",
    icon: "/assets/9.png",
  },
];

function CourseIcon({ src }) {
  return (
    <div className="relative h-[48px] w-[48px]">
      <Image src={src} alt="icon" fill className="object-contain" />
    </div>
  );
}

function CourseCard({ course, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className="group relative overflow-hidden rounded-[14px] border border-[#D8D8D8] bg-white shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:border-transparent hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] hover:ring-1 hover:ring-[#dcdcdc]"
    >
      {/* accent */}
      <div
        className="absolute right-0 top-0 h-[56px] w-[56px] rounded-bl-[56px] transition-all duration-500 group-hover:scale-110"
        style={{ backgroundColor: course.accent }}
      />

      {/* glow */}
      <div className="absolute right-0 top-0 h-[84px] w-[84px] rounded-full bg-white/30 blur-[1px] transition-all duration-500 group-hover:scale-110" />

      {/* hover overlay */}
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[120px] flex-col justify-between px-4 pb-4 pt-4">
        {/* icon */}
        <div className="transition duration-500 group-hover:-translate-y-1 group-hover:scale-105">
          <CourseIcon src={course.icon} />
        </div>

        {/* title */}
        <h3 className="mt-4 text-[14px] font-semibold leading-[1.35] text-[#111111] transition duration-500 group-hover:-translate-y-1">
          {course.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function CourseCategoriesLayout() {
  return (
    <section className="bg-white px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl rounded-[24px] border border-white/70 bg-[#EFEFEF] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.12)] md:p-10 lg:p-12">
        {/* heading */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-primary text-3xl text-[#171717] md:text-5xl"
          >
            Course Categories
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="mx-auto mt-6 max-w-4xl text-[13px] leading-6 text-[#6F6F6F] md:text-[14px]"
          >
            To effectively organize academic programs at VELS Plus, we use clear
            and structured categories that help students and parents easily
            understand our offerings.
          </motion.p>
        </div>

        {/* grid */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}