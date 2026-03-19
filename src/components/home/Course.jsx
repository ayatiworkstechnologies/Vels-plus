"use client";

const courses = [
  {
    id: 1,
    title: "NEET / MEDICAL",
    desc: "Focused NEET preparation for future medical aspirants.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80",
    link: "#",
  },
  {
    id: 2,
    title: "NEET / MEDICAL",
    desc: "Focused NEET preparation for future medical aspirants.",
    image:
      "https://images.unsplash.com/photo-1588072432904-843af37f03ed?auto=format&fit=crop&w=900&q=80",
    link: "#",
  },
  {
    id: 3,
    title: "NEET / MEDICAL",
    desc: "Focused NEET preparation for future medical aspirants.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    link: "#",
  },
  {
    id: 4,
    title: "NEET / MEDICAL",
    desc: "Focused NEET preparation for future medical aspirants.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
    link: "#",
  },
];

export default function Course() {
  return (
    <section className="relative overflow-hidden  py-16 md:py-20">
      {/* background grid image effect */}
      <div
         className="absolute inset-0 bg-cover bg-center"
         style={{
         backgroundImage: "url('/assets/paper.png')",
         }}
       />

      {/* soft background glow */}
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-white/60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl text-[#222] md:text-4xl">
            List Of Our Courses
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group rounded-[22px] border border-[#e7e2d8] bg-white p-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_38px_rgba(0,0,0,0.10)]"
            >
              <div className="overflow-hidden rounded-[18px] border border-[#d9d3c7] bg-[#f3f0ea]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-48 w-full rounded-[18px] object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="px-1 pb-2 pt-4">
                <h3 className="font-serif text-[17px] font-semibold uppercase tracking-[0.02em] text-[#222]">
                  {course.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#7a7a7a]">
                  {course.desc}
                </p>

                <a
                  href={course.link}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#2e4ea1] transition hover:text-[#1d3572]"
                >
                  Read More
                  <span className="text-base">›</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}