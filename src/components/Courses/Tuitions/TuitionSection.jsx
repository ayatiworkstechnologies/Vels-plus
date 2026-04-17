"use client";
import { motion } from "framer-motion";

import Image from "next/image";


export default function TuitionSection() {
     const examPattern = [
    { class: "9th", year: "2016-19", board: "CBSE board" },
    { class: "10th", year: "2016-19", board: "CBSE board" },
    { class: "11th", year: "2016-19", board: "CBSE board" },
    { class: "12th", year: "2016-19", board: "CBSE board" },
  ];

  const courseFeatures = [
    { label: "Lessons", value: "50+" },
    { label: "Students", value: "1000+" },
    { label: "Duration", value: "300+ Hours" },
    { label: "Certificate", value: "Yes" },
    { label: "Language", value: "English" },
    { label: "Skill", value: "Any level" },
    { label: "Assessment", value: "Self" },
  ];
  return ( <>
  
       <section className="relative w-full overflow-hidden">
      
      {/* Background Image */}
      <div
        className="relative min-h-[420px] md:min-h-[520px] bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/neet-bg.png')",
        }}
      >
        {/* 🔥 Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-14 md:py-20">
          
          {/* Glass Card */}
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-[24px] p-6 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            
            {/* Title */}
            <h2 className="text-center font-serif text-[32px] md:text-[48px] text-white">
              CBSE NCERT Syllabus 2016 – 2019

            </h2>

            {/* Divider */}
            <div className="mx-auto mt-4 h-[3px] w-20 bg-yellow-400 rounded-full"></div>

            {/* Content */}
            <p className="mt-8 text-center text-[14px] md:text-[16px] leading-[1.9] text-white/90">
              Latest CBSE Syllabus for Vocational courses effective for the Academic Session 2016 – 2019 for classes 9th, 10th, 11th and 12th. The vocational subject can be offered as an additional (optional) subject in combination with five core Academic subjects. The CGPA of class IX and X will be calculated based on the grade obtained in five academic subjects and grade obtained in vocational subject will be reflected under additional (optional)subject. OR Vocational subject can be offered as additional (compulsory) subject with five core Academic subjects (Rationalized version). The CGPA of Class IX / X will be calculatedbased on the grade obtained in all six subjects, if vocational subject is taken as additional (compulsory) sixth subject Central Board of Secondary Education (CBSE) board will conduct class 9th, 10th, 11th & 12th examination in upcoming year 2016. For 2016 examinations we are providing you CBSE board syllabus2014 for Class 9th, 10th, 11th & 12th.

              </p>
              
          </div>
        </div>
      </div>
    </section>
    <section className="bg-[#f5f5f5] py-10 md:py-12">
      <div className="mx-auto w-[min(1320px,calc(100%-24px))] md:w-[min(1320px,calc(100%-40px))]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          {/* Left */}
          <div>
            <h2 className="text-[30px] font-bold leading-tight text-[#0f5ca8] md:text-[40px]">
                TUITIONS (SB & CBSE)
            </h2>

            <p className="mt-6 max-w-[860px] text-[16px] leading-[1.7] text-black md:text-[17px]">
              Our programs for CBSE Coaching for 9th,10th,11th & 12th are designed according to the guidelines issued by the Central Board of Secondary Education, New Delhi. CBSE Coaching for 9th,10th,11th & 12th

            </p>

            <div className="mt-8 overflow-hidden rounded-[6px] border border-[#d9d9d9] bg-white">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0f5ca8] text-white">
                    <th className="border-r border-white/20 px-4 py-4 text-center text-[16px] font-medium md:text-[18px]">
                      Class
                    </th>
                    <th className="border-r border-white/20 px-4 py-4 text-center text-[16px] font-medium md:text-[18px]">
                      Year
                    </th>
                    <th className="px-4 py-4 text-center text-[16px] font-medium md:text-[18px]">
                      Board
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {examPattern.map((item, index) => (
                    <tr
                      key={index}
                      className="border-t border-[#dcdcdc] transition-colors duration-200 hover:bg-[#fafafa]"
                    >
                      <td className="border-r border-[#dcdcdc] px-4 py-4 text-center text-[15px] text-[#666] md:text-[16px]">
                        {item.class}
                      </td>
                      <td className="border-r border-[#dcdcdc] px-4 py-4 text-center text-[15px] text-[#666] md:text-[16px]">
                        {item.year}
                      </td>
                      <td className="px-4 py-4 text-center text-[15px] text-[#666] md:text-[16px]">
                        {item.board}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right */}
          <div className="lg:pt-[78px]">
            <div className="overflow-hidden rounded-[6px] border border-[#2d2d2d] bg-white">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0f5ca8] text-white">
                    <th className="w-[62%] border-r border-[#2d2d2d] px-4 py-4 text-left text-[16px] font-semibold uppercase md:text-[18px]">
                      Course Features
                    </th>
                    <th className="px-4 py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {courseFeatures.map((item, index) => (
                    <tr
                      key={index}
                      className="border-t border-[#2d2d2d] transition-colors duration-200 hover:bg-[#fafafa]"
                    >
                      <td className="border-r border-[#2d2d2d] px-4 py-4 text-[15px] text-black md:text-[16px]">
                        {item.label}
                      </td>
                      <td className="px-4 py-4 text-[15px] text-black md:text-[16px]">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </>
   
  );
}