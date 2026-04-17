"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Youtube,
  ChevronUp,
} from "lucide-react";

export default function VelsPlusFooter() {
  return (
    <footer
      className="relative overflow-hidden text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/footer-bg.jpg')" }} // 🔁 your image
    >
     

      

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.35fr_0.8fr_0.8fr_0.8fr_1fr]">
          
          {/* LOGO + ABOUT */}
          <div>
            <div className="inline-flex rounded-xl bg-primary px-5 py-4 shadow-lg">
              <div className="relative h-[60px] w-[200px]">
                <Image
                  src="/assets/vels-plus-logo.svg"
                  alt="Vels Plus Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="mt-7 max-w-md text-[15px] leading-8 text-white/90">
              Vels Plus offers focused academic coaching for NEET, IIT-JEE,
              Foundations, and Tuitions. We help students build strong concepts,
              sharpen problem-solving skills, and achieve academic success.
            </p>

            {/* SOCIAL */}
            <div className="mt-8 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-white/30 bg-white/10 hover:bg-white hover:text-[#0C2D57] transition"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* COURSES */}
          <div>
            <h3 className="text-xl font-semibold">Courses</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/90">
              <li><Link href="/neet">NEET / MEDICAL</Link></li>
              <li><Link href="/jee">IIT-JEE</Link></li>
              <li><Link href="/tuitions">TUITIONS (SB & CBSE)</Link></li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/90">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/neet">Courses</Link></li>
              <li><Link href="/facilities">Facilities</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* LOCATIONS */}
          <div>
            <h3 className="text-xl font-semibold">Locations</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/90">
              <li>Anna Nagar</li>
              <li>Perambur</li>
              <li>Velachery</li>
              <li>Tambaram</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-semibold">Get in touch</h3>

            <div className="mt-5 space-y-6 text-sm text-white/90">

  {/* Phone */}
  <a
    href="tel:+919940582758"
    className="flex items-center gap-3 hover:text-cyan-300 transition"
  >
    <Phone size={18} />
    <span>+91 99405 82758</span>
  </a>

  {/* Email */}
  <a
    href="mailto:velsplusacademy@gmail.com"
    className="flex items-center gap-3 hover:text-cyan-300 transition"
  >
    <Mail size={18} />
    <span>velsplusacademy@gmail.com</span>
  </a>

  {/* Location (Google Maps) */}
  <a
    href="https://www.google.com/maps/search/?api=1&query=Anna+Nagar+Chennai+600040"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start gap-3 hover:text-cyan-300 transition"
  >
    <MapPin size={18} />
    <span>
      No. 42, Anna Nagar,<br />
      Chennai - 600040
    </span>
  </a>

</div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-white/20 py-5 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>© 2026 | All Rights Reserved | Vels Plus</p>

          
        </div>
      </div>
    </footer>
  );
}