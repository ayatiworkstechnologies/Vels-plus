"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <header className="w-full bg-[#2f3192] text-white">
      {/* Desktop Header */}
      <div className="mx-auto hidden h-[70px] max-w-7xl items-center justify-between px-6 text-[13px] font-medium lg:flex">
        <Link href="/" className="transition hover:text-cyan-300">
          Home
        </Link>

        <Link href="/about" className="transition hover:text-cyan-300">
          About
        </Link>

        {/* Courses */}
        <div className="group relative">
          <button className="flex items-center gap-1 transition hover:text-cyan-300">
            Courses
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.23 7.21L10 11.17l4.77-3.96 1.08 1.04-5.31 4.5-5.31-4.5z" />
            </svg>
          </button>

          <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-48 -translate-x-1/2 rounded-xl bg-white py-2 text-gray-800 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
              JEE Coaching
            </Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
              NEET Coaching
            </Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
              CBSE Program
            </Link>
          </div>
        </div>

        {/* Logo */}
        <Link href="/" className="text-center leading-none">
          <div className="text-[20px] font-extrabold">
            <span className="text-white">Vels</span>
            <span className="text-cyan-400">Plus</span>
          </div>
          <div className="text-[9px] font-semibold tracking-wide text-white">
            JEE / NEET / CBSE
          </div>
        </Link>

        <Link href="/facilities" className="transition hover:text-cyan-300">
          Facilities
        </Link>

        <Link href="/gallery" className="transition hover:text-cyan-300">
          Gallery
        </Link>

        <Link href="/contact" className="transition hover:text-cyan-300">
          Contact Us
        </Link>
      </div>

      {/* Mobile Header */}
      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-4 lg:hidden">
        <Link href="/" className="leading-none">
          <div className="text-[20px] font-extrabold">
            <span className="text-white">Vels</span>
            <span className="text-cyan-400">Plus</span>
          </div>
          <div className="text-[9px] font-semibold tracking-wide text-white">
            JEE / NEET / CBSE
          </div>
        </Link>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          className="inline-flex items-center justify-center rounded-md p-2 transition hover:bg-white/10"
        >
          {mobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#2f3192] px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1 text-lg font-primary">
            <Link
              href="/"
              className="rounded-lg px-3 py-2 transition hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="rounded-lg px-3 py-2 transition hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* Mobile Courses */}
            <button
              onClick={() => setCoursesOpen(!coursesOpen)}
              className="flex items-center justify-between rounded-lg px-3 py-2 text-left transition hover:bg-white/10"
            >
              <span>Courses</span>
              <svg
                className={`h-4 w-4 transition-transform ${
                  coursesOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.23 7.21L10 11.17l4.77-3.96 1.08 1.04-5.31 4.5-5.31-4.5z" />
              </svg>
            </button>

            {coursesOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l border-white/20 pl-3 text-white/90">
                <Link
                  href="#"
                  className="rounded-lg px-3 py-2 transition hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  JEE Coaching
                </Link>
                <Link
                  href="#"
                  className="rounded-lg px-3 py-2 transition hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  NEET Coaching
                </Link>
                <Link
                  href="#"
                  className="rounded-lg px-3 py-2 transition hover:bg-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CBSE Program
                </Link>
              </div>
            )}

            <Link
              href="#"
              className="rounded-lg px-3 py-2 transition hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Facilities
            </Link>

            <Link
              href="#"
              className="rounded-lg px-3 py-2 transition hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>

            <Link
              href="#"
              className="rounded-lg px-3 py-2 transition hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}

      {/* Bottom Line */}
      <div className="h-[2px] w-full bg-cyan-400" />
    </header>
  );
}