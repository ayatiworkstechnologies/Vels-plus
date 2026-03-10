"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function FloatingActions() {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://api.ayatiworks.com/api/v1/public/vels-plus/admission_enquiry/records",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key":
              "c7161b606e6aa8479d3d52640e17c5c95b83dcf576e39cb5fc57dba7ef7a7e39",
          },
          body: JSON.stringify({
            data: formData,
          }),
        }
      );

      const result = await res.json();

      if (res.ok) {
        alert("Enquiry submitted successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setOpen(false);
      } else {
        alert("Something went wrong.");
        console.log(result);
      }
    } catch (error) {
      console.error(error);
      alert("API error occurred");
    }
  };

  return (
    <>
      {/* Apply Now Floating Button */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex items-center group">

        {/* Hover Text */}
        <button
          onClick={() => setOpen(true)}
          className="bg-white text-black px-4 py-2 rounded-l-md shadow-md font-medium 
          opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 
          transition-all duration-300 whitespace-nowrap"
        >
          Admission Open | Apply Now
        </button>

        {/* Circle Icon */}
        <div
          onClick={() => setOpen(true)}
          className="bg-[#303395] text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
        >
          <HiOutlineDocumentText size={24} />
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918925905619"
        target="_blank"
        className="fixed right-6 top-[65%] z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp size={26} />
      </a>

      {/* Popup Form */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] px-4">
          <div className="bg-white w-full max-w-md rounded-lg p-6 relative shadow-xl">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-6 text-center">
              Admission Enquiry
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full border p-3 rounded-md"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email ID"
                className="w-full border p-3 rounded-md"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border p-3 rounded-md"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="3"
                className="w-full border p-3 rounded-md"
              />

              <button
                type="submit"
                className="w-full bg-[#303395] text-white py-3 rounded-md font-semibold hover:bg-[#1d1f6b] transition"
              >
                Submit
              </button>

            </form>
          </div>
        </div>
      )}
    </>
  );
}