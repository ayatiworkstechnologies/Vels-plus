"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

import velsLogo from "@/public/assets/logo.svg";

export default function Header() {
  return (
    <>
      <header className="w-full bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Phone */}
          <div className="flex items-center gap-2 text-primary">
            <Phone size={18} />
            <a href="tel:+918925905619" className="hover:text-blue-600">
              +91 89259 05619
            </a>
          </div>

          {/* Logo */}
          <Link href="/" className="flex justify-center">
            <Image
              src={velsLogo}
              alt="VELS Logo"
              width={320}
              height={60}
              priority
              className="object-contain"
            />
          </Link>

          {/* Email */}
          <div className="flex items-center gap-2 text-primary">
            <Mail size={18} />
            <a href="mailto:vgs@velsgroup.in" className="hover:text-blue-600">
              vgs@velsgroup.in
            </a>
          </div>

        </div>
      </header>

      {/* Sticky Admission Band */}
      <Link
        href="https://erp.vistas.ac.in/velsonline/applicationschools/loginManager/applicantRegistrationVGS.jsp"
        target="_blank"
        className="fixed right-[-60px] top-1/2 -translate-y-1/2 z-50 rotate-90"
      >
        <div className="bg-primary text-white font-semibold px-6 py-3 shadow-lg transition-all rounded-b-lg">
          Admission Open
        </div>
      </Link>
    </>
  );
}