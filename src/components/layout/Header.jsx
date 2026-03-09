"use client";
import Link from "next/link";
import Image from "next/image";

import velsLogo from "@/public/assets/logo.svg";

export default function Header() {
    return (
        <header className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex flex-col items-center py-4 px-6">
                {/* ✅ Logo Section */}
                <Link href="/" className="mb-3 inline-block">
                    <Image
                        src={velsLogo}
                        alt="VELS Logo"
                        width={342} // Actual Width
                        height={80}  // Actual Height
                        priority
                        className="object-contain" // Preserves aspect ratio
                    />
                </Link>

                {/* ✅ Navigation Menu */}
                
            </div>
        </header>
    );
}