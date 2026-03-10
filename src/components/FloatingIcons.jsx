"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function FloatingActions() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Apply Now Floating Button */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex items-center group cursor-pointer">
        
        {/* Text (Hidden until hover) */}
        <button
          onClick={() => setOpen(true)}
          className="bg-white text-black px-4 py-2 rounded-l-md shadow-md font-medium 
          opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 
          transition-all duration-300 whitespace-nowrap"
        >
          Admission Open | Apply Now
        </button>

        {/* Circle Icon */}
        <div className="bg-[#303395] text-white p-4 rounded-full shadow-lg flex items-center justify-center">
          <HiOutlineDocumentText size={24} />
        </div>
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918925905619"
        target="_blank"
        className="fixed right-6 top-[65%] z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp size={26} />
      </a>
    </>
  );
}