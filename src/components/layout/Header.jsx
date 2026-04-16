"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  const pathname = usePathname();

  // helper
  const isActive = (path) => pathname === path;
  const isCourseActive = ["/neet", "/jee", "/foundations", "/tuitions"].includes(pathname);

  return (
    <header className="w-full bg-[#2f3192] text-white">
      
      {/* Desktop Header */}
      <div className="mx-auto hidden h-[70px] max-w-7xl items-center justify-between px-6 text-[13px] font-medium lg:flex">

        {/* Home */}
        <Link
          href="/"
          className={`transition hover:text-cyan-300 ${
            isActive("/") ? "text-cyan-400 font-semibold" : ""
          }`}
        >
          Home
        </Link>

        {/* About */}
        <Link
          href="/about"
          className={`transition hover:text-cyan-300 ${
            isActive("/about") ? "text-cyan-400 font-semibold" : ""
          }`}
        >
          About
        </Link>

        {/* Courses */}
        <div className="group relative">
          <button
            className={`flex items-center gap-1 transition hover:text-cyan-300 ${
              isCourseActive ? "text-cyan-400 font-semibold" : ""
            }`}
          >
            Courses
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.23 7.21L10 11.17l4.77-3.96 1.08 1.04-5.31 4.5-5.31-4.5z" />
            </svg>
          </button>

          {/* Dropdown */}
          <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-48 -translate-x-1/2 rounded-xl bg-white py-2 text-gray-800 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">

            <Link
              href="/neet"
              className={`block px-4 py-2 hover:bg-gray-100 ${
                isActive("/neet") ? "text-cyan-500 font-semibold" : ""
              }`}
            >
              Neet / Medical
            </Link>

            <Link
              href="/jee"
              className={`block px-4 py-2 hover:bg-gray-100 ${
                isActive("/jee") ? "text-cyan-500 font-semibold" : ""
              }`}
            >
              IIT - JEE
            </Link>

            <Link
              href="/foundations"
              className={`block px-4 py-2 hover:bg-gray-100 ${
                isActive("/foundations") ? "text-cyan-500 font-semibold" : ""
              }`}
            >
              Foundations
            </Link>

            <Link
              href="/tuitions"
              className={`block px-4 py-2 hover:bg-gray-100 ${
                isActive("/tuitions") ? "text-cyan-500 font-semibold" : ""
              }`}
            >
              Tuitions (SB & CBSE)
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

        {/* Facilities */}
        <Link
          href="/facilities"
          className={`transition hover:text-cyan-300 ${
            isActive("/facilities") ? "text-cyan-400 font-semibold" : ""
          }`}
        >
          Facilities
        </Link>

        {/* Gallery */}
        <Link
          href="/gallery"
          className={`transition hover:text-cyan-300 ${
            isActive("/gallery") ? "text-cyan-400 font-semibold" : ""
          }`}
        >
          Gallery
        </Link>

        {/* Contact */}
        <Link
          href="/contact"
          className={`transition hover:text-cyan-300 ${
            isActive("/contact") ? "text-cyan-400 font-semibold" : ""
          }`}
        >
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
          className="inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#2f3192] px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1 text-lg">

            <Link
              href="/"
              className={`px-3 py-2 rounded-lg ${
                isActive("/") ? "bg-white/20 text-cyan-300" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-lg ${
                isActive("/about") ? "bg-white/20 text-cyan-300" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* Courses Mobile */}
            <button
              onClick={() => setCoursesOpen(!coursesOpen)}
              className={`flex justify-between px-3 py-2 rounded-lg ${
                isCourseActive ? "bg-white/20 text-cyan-300" : ""
              }`}
            >
              Courses
              <span>{coursesOpen ? "▲" : "▼"}</span>
            </button>

            {coursesOpen && (
              <div className="ml-3 border-l border-white/20 pl-3">
                {["neet", "jee", "foundations", "tuitions"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item}`}
                    className={`block px-3 py-2 rounded-lg ${
                      pathname === `/${item}` ? "bg-white/20 text-cyan-300" : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.toUpperCase()}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/facilities"
              className={`px-3 py-2 rounded-lg ${
                isActive("/facilities") ? "bg-white/20 text-cyan-300" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Facilities
            </Link>

            <Link
              href="/gallery"
              className={`px-3 py-2 rounded-lg ${
                isActive("/gallery") ? "bg-white/20 text-cyan-300" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg ${
                isActive("/contact") ? "bg-white/20 text-cyan-300" : ""
              }`}
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