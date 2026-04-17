"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  const isActive = (path) => pathname === path;
  const isCourseActive = ["/neet", "/jee", "/tuitions"].includes(pathname);

  return (
    <header className="w-full bg-white">

      {/* ===== DESKTOP ===== */}
      <div className="hidden lg:block">

        {/* 🔵 FULL WIDTH BLUE BAND */}
        <div className="w-full bg-[#2f3192]">

          {/* 🔸 INNER CONTENT CENTERED */}
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-[14px] font-medium">

            {/* LOGO */}
            <Link href="/" className="leading-none mr-4">
              <div className="text-[20px] font-extrabold">
                <span className="text-white">Vels </span>
                <span className="text-cyan-400">Plus</span>
              </div>
              <div className="text-[9px] font-semibold text-white/80">
                JEE / NEET / CBSE
              </div>
            </Link>

            {/* NAV */}
            <div className="flex items-center gap-4">

              <Link
                href="/"
                className={`px-4 py-1.5 rounded-full ${
                  isActive("/")
                    ? "bg-white text-[#2f3192] font-bold"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-4 py-1.5 rounded-full ${
                  isActive("/about")
                    ? "bg-white text-[#2f3192]"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                About
              </Link>

              {/* Courses */}
              <div className="group relative">
                <button
                  className={`flex items-center gap-1 px-4 py-1.5 rounded-full ${
                    isCourseActive
                      ? "bg-white text-[#2f3192]"
                      : "text-white hover:text-cyan-300"
                  }`}
                >
                  Courses
                  <svg className="h-4 w-4" viewBox="0 0 20 20">
                    <path
                      fill="currentColor"
                      d="M5.23 7.21L10 11.17l4.77-3.96 1.08 1.04-5.31 4.5-5.31-4.5z"
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-48 -translate-x-1/2 rounded-xl bg-white py-2 text-gray-800 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                  <Link href="/neet" className="block px-4 py-2 hover:bg-gray-100">
                    Neet
                  </Link>
                  <Link href="/jee" className="block px-4 py-2 hover:bg-gray-100">
                    JEE
                  </Link>
                  <Link href="/tuitions" className="block px-4 py-2 hover:bg-gray-100">
                    Tuitions
                  </Link>
                </div>
              </div>

              <Link
                href="/facilities"
                className={`px-4 py-1.5 rounded-full ${
                  isActive("/facilities")
                    ? "bg-white text-[#2f3192]"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                Facilities
              </Link>

              <Link
                href="/gallery"
                className={`px-4 py-1.5 rounded-full ${
                  isActive("/gallery")
                    ? "bg-white text-[#2f3192]"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                Gallery
              </Link>
            </div>

            {/* CONTACT */}
            <Link
              href="/contact"
              className="bg-white text-[#2f3192] px-5 py-2 rounded-full font-bold hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* ===== MOBILE HEADER ===== */}
      <div className="flex lg:hidden items-center justify-between px-4 py-3 bg-[#2f3192]">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/assets/vels-plus-logo.svg"
            alt="logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white text-2xl"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      {mobileMenuOpen && (
        <div className="bg-[#2f3192] text-white px-4 py-4 space-y-2 lg:hidden">

          <Link
            href="/"
            className={`block px-4 py-2 rounded-lg ${
              isActive("/") ? "bg-white text-[#2f3192]" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`block px-4 py-2 rounded-lg ${
              isActive("/about") ? "bg-white text-[#2f3192]" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>

          <Link href="/neet" className="block px-4 py-2" onClick={() => setMobileMenuOpen(false)}>
            Neet
          </Link>

          <Link href="/jee" className="block px-4 py-2" onClick={() => setMobileMenuOpen(false)}>
            JEE
          </Link>

          <Link href="/tuitions" className="block px-4 py-2" onClick={() => setMobileMenuOpen(false)}>
            Tuitions
          </Link>

          <Link
            href="/facilities"
            className={`block px-4 py-2 rounded-lg ${
              isActive("/facilities") ? "bg-white text-[#2f3192]" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Facilities
          </Link>

          <Link
            href="/gallery"
            className={`block px-4 py-2 rounded-lg ${
              isActive("/gallery") ? "bg-white text-[#2f3192]" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            className="block px-4 py-2 rounded-lg bg-white text-[#2f3192] font-semibold mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}

    </header>
  );
}