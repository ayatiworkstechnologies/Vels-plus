"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ICONS */
const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" x2="21" y1="6" y2="6" />
    <line x1="3" x2="21" y1="12" y2="12" />
    <line x1="3" x2="21" y1="18" y2="18" />
  </svg>
);

const CloseIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6 6 18" />
    <path d="M6 6 18 18" />
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 5);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClasses = (href) => {
    const isActive = pathname === href;

    return [
      "transition-colors",
      isActive
        ? "text-[#2A1C79] font-semibold"
        : "text-black/70 hover:text-[#2A1C79]",
    ].join(" ");
  };

  const mobileLink = (href) => {
    const isActive = pathname === href;

    return [
      "block text-[17px] py-2 transition-colors",
      isActive
        ? "text-[#2A1C79] font-semibold"
        : "text-black/80 hover:text-[#2A1C79]",
    ].join(" ");
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden"
        >
          <MenuIcon />
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:grid grid-cols-5 w-full text-[16px] secondary-subtitle">

          <div className="flex justify-center">
            <Link href="/" className={linkClasses("/")}>
              Home
            </Link>
          </div>

          <div className="flex justify-center">
            <Link href="/about" className={linkClasses("/about")}>
              About
            </Link>
          </div>

          <div className="flex justify-center">
            <Link href="#" className={linkClasses("/discover")}>
              Philosophy
            </Link>
          </div>

          <div className="flex justify-center">
            <Link href="#" className={linkClasses("/academic")}>
              Academic Programs
            </Link>
          </div>

          <div className="flex justify-center">
            <Link href="#" className={linkClasses("/facilities")}>
              Facilities
            </Link>
          </div>

        </nav>

       
      </div>

      {/* MOBILE DRAWER */}
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 w-[280px] h-full bg-white shadow-xl z-50 transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-5 border-b">
          <span className="font-semibold text-lg">Menu</span>

          <button onClick={() => setMenuOpen(false)}>
            <CloseIcon />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="p-6 space-y-2">

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={mobileLink("/")}
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className={mobileLink("/about")}
          >
            About
          </Link>

          <Link
            href="/discover"
            onClick={() => setMenuOpen(false)}
            className={mobileLink("/discover")}
          >
            Philosophy
          </Link>

          <Link
            href="/academic"
            onClick={() => setMenuOpen(false)}
            className={mobileLink("/academic")}
          >
            Academic Programs
          </Link>

          <Link
            href="/facilities"
            onClick={() => setMenuOpen(false)}
            className={mobileLink("/facilities")}
          >
            Facilities
          </Link>

        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}
    </header>
  );
}