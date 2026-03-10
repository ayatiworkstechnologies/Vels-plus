"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

import velsLogo from "@/public/assets/vels-plus-logo.svg";

export default function Header() {
  return (
    <>
      <header className="w-full bg-primary border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">

            {/* Phone */}
            <div className="flex items-center gap-2 text-white text-sm">
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
                width={220}
                height={60}
                priority
                className="object-contain"
              />
            </Link>

            {/* Email */}
            <div className="flex items-center gap-2 text-white text-sm">
              <Mail size={18} />
              <a href="mailto:vgs@velsgroup.in" className="hover:text-blue-600">
                vgs@velsgroup.in
              </a>
            </div>

          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center gap-3">

            {/* Logo */}
            <Link href="/" className="flex justify-center">
              <Image
                src={velsLogo}
                alt="VELS Logo"
                width={220}
                height={50}
                priority
                className="object-contain"
              />
            </Link>

            {/* Contact Row */}
            <div className="flex items-center gap-6 text-primary text-sm">

              <a
                href="tel:+918925905619"
                className="flex items-center gap-2 hover:text-blue-600"
              >
                <Phone size={16} />
                +91 89259 05619
              </a>

              <a
                href="mailto:vgs@velsgroup.in"
                className="flex items-center gap-2 hover:text-blue-600"
              >
                <Mail size={16} />
                Email
              </a>

            </div>
          </div>
        </div>
      </header>

    
    </>
  );
}