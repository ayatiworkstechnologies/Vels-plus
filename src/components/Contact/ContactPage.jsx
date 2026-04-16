"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {

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
    <div className="min-h-screen bg-white font-sans">

      {/* Hero */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url("/api/placeholder/1200/400")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* ✅ LEFT SIDE FORM (fixed) */}
          <div className="bg-white w-full max-w-md rounded-lg p-6 shadow-xl">

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

          {/* ✅ RIGHT SIDE CONTACT (same) */}
          <div className="space-y-8 py-4">

            <div className="flex items-start gap-4">
              <div className="bg-primary p-3 rounded-full text-white shadow-md">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Office Email</h3>
                <a href="mailto:velsplusacademy@gmail.com" className="text-primary break-all">
                  velsplusacademy@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary p-3 rounded-full text-white shadow-md">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Office Phone</h3>
                <a href="tel:+919940582758" className="text-gray-600">
                  +91 99405 82758
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary p-3 rounded-full text-white shadow-md">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Office Address</h3>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Anna+Nagar+Chennai+600040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 leading-relaxed"
                >
                  No. 42, Anna Nagar, <br />
                  Chennai - 600040
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* ✅ MAP (same) */}
      <div className="w-full h-[450px] bg-gray-200 grayscale contrast-125">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.243712815973!2d80.21520819999999!3d13.083734900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52642132f7e747%3A0x8548cd2c6e250298!2sBlock-B%2C%20AB1-42%2C%20AB%20Block%2C%20Shanthi%20Colony%2C%20Anna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600040!5e0!3m2!1sen!2sin!4v1776229337923!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  );
};

export default ContactPage;