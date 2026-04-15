"use client";
import { motion } from "framer-motion";

import Image from "next/image";


export default function NeetMedicalBanner() {
     const examPattern = [
    { subject: "Physics", questions: "45", marks: "180" },
    { subject: "Chemistry", questions: "45", marks: "180" },
    { subject: "Botony", questions: "45", marks: "180" },
    { subject: "Zoology", questions: "45", marks: "180" },
    { subject: "Total", questions: "180", marks: "720" },
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
        className="relative min-h-[380px] md:min-h-[460px] bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/neet-bg.png')",
        }}
      >
        {/* White overlay */}
        <div className="absolute inset-0 bg-white/70"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[380px] md:min-h-[460px] max-w-[1200px] items-center justify-center px-6 py-12">
          <div className="max-w-[900px] text-center">
            <h2 className="font-serif text-[34px] leading-tight text-black md:text-[52px]">
              Neet / Medical
            </h2>

            <p className="mx-auto mt-8 max-w-[880px] text-[14px] leading-[1.8] text-black/80 md:text-[16px]">
              If you are looking for the top Neet Coaching Institute in Anna Nagar, Chennai then you must choose our Top NEET Coaching Centre in Anna Nagar, Chennai. National Eligibility and Entrance Test or NEET is the one examination which would be considered for filling about 54,000 medical seats across the country. As per the Supreme Court’s order, NEET 2016 and now NEET would be the only examination to be undertaken to fill the All India Quota Seats as well as the State Level Quota seats across the country. This examination is also valid for applying to private colleges across the country.
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
                src="/assets/neet.png"
                alt="NEET Eligibility"
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
              NEET Eligibility for 2020
            </h2>

            <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-black/15 via-black/5 to-transparent" />

            <div className="mt-6 space-y-5 text-[14px] leading-[1.85] text-black/70 md:text-[15px]">
              <p>
                The candidate must have completed 17 years of age as on or before December 31, 2019.
                The candidate must have passed class 12th examination with a minimum of 50% marks in aggregate,
                and must have passed in the subjects Physics, Chemistry, Biology / Biotechnology and English individually.
              </p>

              <p>
                In respect of the candidates belonging to SC/ST/OBC categories, the marks obtained in Physics,
                Chemistry and Biology / Biotechnology taken together in HSC examination is 40% marks.
              </p>

              <p>
                The candidate applying for NEET must be an Indian citizen.
              </p>

              <p>
                The upper age limit for candidates seeking admission through NEET is 25 years as on or before
                December 31, 2019. Further, for the candidates belonging to Scheduled Caste, Scheduled Tribes
                and Other Backward Categories there is a relaxation of 5 years.
              </p>

              <p>
                Candidates failing to meet the above mentioned criteria shall not be permitted to apply for NEET 2019.
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
              NEET Exam Pattern
            </h2>

            <p className="mt-6 max-w-[860px] text-[16px] leading-[1.7] text-black md:text-[17px]">
              1. The exam covers the topics from Physics, Chemistry, Botany and
              Zoology. Candidates appearing for NEET shall prepare thoroughly in
              order to secure a good score.
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
              2. The NEET Exam duration 3 hours. Each correct answer attracts 4
              marks and 1 mark is deducted for each wrong answer. For every
              unanswered question, marks are neither be awarded nor be deducted.
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