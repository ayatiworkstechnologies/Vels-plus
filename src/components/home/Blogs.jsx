"use client";

import { useEffect, useRef } from "react";

const blogs = [
  {
    id: 1,
    title: "ISC Class 12 Mathematics Answer Key 2026 – Free PDF Download (All Sets)",
    desc: "2026: Difficulty Level",
    date: "Mar 9, 2026, 9:58 PM IST",
    image: "/assets/b1.png",
    latest: true,
  },
  {
    id: 2,
    title: "ICSE Class 10 Physics Answer Key 2026 (All Sets) PDF",
    desc: "2026: Difficulty Level",
    date: "Mar 24, 2026, 10:00 AM IST",
    image: "/assets/blog-1.png",
  },
  {
    id: 3,
    title: "CBSE Class 12 Maths Answer Key 2026 (All Sets) PDF",
    desc: "2026: Difficulty Level",
    date: "Mar 8, 2026, 6:58 PM IST",
    image: "/assets/blog-2.png",
  },
  {
    id: 4,
    title: "Is Calculator Allowed in NEET 2026? Exam Rules & Prohibited Items",
    desc: "2026: Difficulty Level",
    date: "Mar 10, 2026, 10:58 PM IST",
    image: "/assets/blog-3.png",
  },

];

export default function BlogSection() {
  const scrollRef = useRef(null);

  const latestBlog = blogs.find((blog) => blog.latest) || blogs[0];
  const sideBlogs = blogs.filter((blog) => blog.id !== latestBlog.id);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame;
    let isHovered = false;

    const scrollSpeed = 0.5;

    const autoScroll = () => {
      if (!isHovered) {
        container.scrollTop += scrollSpeed;

        if (
          container.scrollTop >=
          container.scrollHeight - container.clientHeight
        ) {
          container.scrollTop = 0;
        }
      }
      animationFrame = requestAnimationFrame(autoScroll);
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    animationFrame = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="w-full bg-[#f5f5f5] py-14 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-primary text-gray-900 mb-10">
          Blogs
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          {/* Left Latest Blog */}
          <div>
            <article className="group">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={latestBlog.image}
                  alt={latestBlog.title}
                  className="w-full h-[240px] md:h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="pt-5">
                <h3 className="text-xl md:text-2xl font-primary text-gray-900 leading-snug">
                  {latestBlog.title}
                </h3>

                <p className="mt-4 text-lg text-gray-800">{latestBlog.desc}</p>

                <div className="mt-5 flex items-center gap-2 text-sm text-gray-600">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-indigo-500 text-indigo-500 text-[10px]">
                    ◷
                  </span>
                  <span>{latestBlog.date}</span>
                </div>
              </div>
            </article>
          </div>

          {/* Right Auto Scroll Blogs */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="h-[420px] overflow-hidden pr-2"
            >
              <div className="space-y-6">
                {[...sideBlogs, ...sideBlogs].map((blog, index) => (
                  <article
                    key={`${blog.id}-${index}`}
                    className="grid grid-cols-[120px_1fr] gap-4 items-start"
                  >
                    <div className="overflow-hidden rounded-md">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-[90px] object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="text-base md:text-lg font-primary text-gray-900 leading-snug">
                        {blog.title}
                      </h4>

                      <p className="mt-2 text-gray-800 text-sm">{blog.desc}</p>

                      <div className="mt-3 flex items-center gap-2 text-xs text-gray-600">
                        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-indigo-500 text-indigo-500 text-[9px]">
                          ◷
                        </span>
                        <span>{blog.date}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* fade effect */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#f5f5f5] to-transparent"></div>
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#f5f5f5] to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}