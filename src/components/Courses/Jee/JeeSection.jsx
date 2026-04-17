"use client";
import { motion } from "framer-motion";

import Image from "next/image";


export default function NeetMedicalBanner() {
     const examPattern = [
    { subject: "Physics", questions: "30", marks: "120" },
    { subject: "Chemistry", questions: "30", marks: "120" },
    { subject: "Mathematics", questions: "30", marks: "120" },
    { subject: "Total", questions: "90", marks: "360" },
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
              IIT / JEE
            </h2>

            {/* Divider */}
            <div className="mx-auto mt-4 h-[3px] w-20 bg-yellow-400 rounded-full"></div>

            {/* Content */}
            <p className="mt-8 text-center text-[14px] md:text-[16px] leading-[1.9] text-white/90">
              Looking for Best Coaching Institute for IIT-JEE Main & Advanced in Anna Nagar? We are the leading JEE Coaching Centre in Anna Nagar, IIT Coaching Institute in Anna Nagar, Chennai. Joint Entrance Examination (JEE) is an engineering entrance examination conducted for admission to various engineering colleges in India. It is constituted by two different examinations – JEE Main and the JEE Advanced. The exams are of the objective pattern. JEE Advanced is regarded internationally as one of the most challenging undergraduate admission tests.

              <br /><br />

              JEE Main has two papers, Paper-1 and Paper-2. Candidates may opt for either or both of them. Both papers contain multiple choice questions. Paper 1 is for admission to B.E./B.Tech courses and is conducted in both online and offline modes. Paper-2 is for admission in B.Arch and B.Planning courses and is conducted offline only.

              <br /><br />

              JEE Main Participating Institutes 2020 – Engineering aspirants can check the list of JEE Main 2020 participating institutes to know the institutes which will be offering admissions based on their performance in the national level entrance exam. There are 31 NITs, 23 IIITs and 23 Centrally Funded Technical Institutions (CFTIs) that are participating in JEE Main 2018. Candidates who will clear JEE Main will be eligible to apply for admission to JEE Main participating institutes 2020. JEE Main 2018 will be held on April 8 for offline mode; the online mode exam will be held on April 15 & 16, 2020. The JEE Main 2020 participating institutes will offer admissions to JEE Main qualifiers provided they meet the specified eligibility criteria of the institutes to which they are applying. A total of 77 institutes (NITs, IIITs and CFTIs) are considered as the participating institutes of JEE Main 2020 for which admission will be held through a common counselling process – JOSAA 2020.
            </p>

          </div>
        </div>
      </div>
    </section>
        <section className="relative overflow-hidden bg-[#f3f3f3] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-white/40 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-[180px] w-[180px] rounded-full bg-white/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-[min(1180px,calc(100%-24px))] md:w-[min(1180px,calc(100%-40px))]">
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group grid items-center gap-8 rounded-[28px] bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(0,0,0,0.14)] md:grid-cols-[360px_minmax(0,1fr)] md:gap-12 md:p-6 lg:grid-cols-[380px_minmax(0,1fr)] lg:p-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative overflow-hidden rounded-[22px]"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/assets/jee-2020.png"
                alt="JEE Eligibility"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10" />
            <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-black/5" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, delay: 0.22 }}
            className="px-1 md:px-2"
          >
            <div className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.03] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-black/60">
              Medical Admission
            </div>

            <h2 className="mt-5 font-serif text-[30px] leading-[1.15] text-[#111] md:text-[42px] lg:text-[48px]">
              JEE Eligibility for 2020
            </h2>

            <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-black/15 via-black/5 to-transparent" />

            <div className="mt-6 space-y-5 text-[14px] leading-[1.85] text-black/70 md:text-[15px]">
              <p>
                Students qualifying or qualified higher secondary exams between 2016 – 2019 are only eligible to appear for JEE MAIN.
              </p>

              <p>
                DATE OF BIRTH – Only those candidates whose date of birth falls on or after October 01, 1993 are eligible. However, in the case of Scheduled Caste (SC), Scheduled Tribe (ST) and Persons with Disabilities (PwD) candidates, upper age limit is relaxed by 5 years, i.e. SC, ST and PwD candidates who are born on or after October 01, 1988 are eligible. Date of birth as recorded in the Secondary Education Board/University certificate will only be considered.
              </p>

              <p>
                NO. OF ATTEMPTS: Total number of attempts allowed is 3.
                Course Required Criteria based on Class 12th / Equivalent qualifying Examination B.E/B.TECH Passed 10+2 examinations with Physics and Mathematics as compulsory subjects along with one of the Chemistry/Biotechnology/Biology/ Technical Vocational subject. B.ARCH./B.PLANNING Passed 10+2 examination with Mathematics.
              </p>

              <p>
                Candidate should have secured at least 75% marks in the 12thclass examination, or be in the top 20 percentile in the 12th class examination conducted by the respective Boards. For SC/ST candidates the qualifying marks would be 65% in the 12thclass examination.
              </p>

              <p>
               Candidates failing to meet the above mentioned criteria shall not permit to apply for JEE- MAIN 2020.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    <section className="bg-[#f5f5f5] py-10 md:py-12">
      <div className="mx-auto w-[min(1320px,calc(100%-24px))] md:w-[min(1320px,calc(100%-40px))]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          {/* Left */}
          <div>
            <h2 className="text-[30px] font-bold leading-tight text-[#0f5ca8] md:text-[40px]">
              JEE Exam Pattern
            </h2>

            <p className="mt-6 max-w-[860px] text-[16px] leading-[1.7] text-black md:text-[17px]">
              1. JEE – MAIN exam covers topics from PHYSICS, CHEMISTRY and MATHEMATICS. For paper 1 (B.E, B-TECH). Whereas for paper 2 (B.Arch) covers Mathematics, Aptitude Test, Drawing Test.

            </p>

            <div className="mt-8 overflow-hidden rounded-[6px] border border-[#d9d9d9] bg-white">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0f5ca8] text-white">
                    <th className="border-r border-white/20 px-4 py-4 text-center text-[16px] font-medium md:text-[18px]">
                      Subject
                    </th>
                    <th className="border-r border-white/20 px-4 py-4 text-center text-[16px] font-medium md:text-[18px]">
                      Questions
                    </th>
                    <th className="px-4 py-4 text-center text-[16px] font-medium md:text-[18px]">
                      Marks
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
                        {item.subject}
                      </td>
                      <td className="border-r border-[#dcdcdc] px-4 py-4 text-center text-[15px] text-[#666] md:text-[16px]">
                        {item.questions}
                      </td>
                      <td className="px-4 py-4 text-center text-[15px] text-[#666] md:text-[16px]">
                        {item.marks}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-8 max-w-[900px] text-[16px] leading-[1.7] text-black md:text-[17px]">
              2. The JEE – MAIN paper 1(B.E,B-TECH) Exam duration 3 hours. Each correct answer attracts 4 marks and 1 mark is deducted for each wrong answer. For every unanswered question, marks are neither be awarded nor be deducted.
            </p>
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