import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* --- Hero Section --- */}
      <div 
        className="relative  flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url("/api/placeholder/1200/400")', // Replace with stethoscope image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        
        
      </div>

      {/* --- Main Content Section --- */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form Card */}
          <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              Get In Touch with Us!
            </h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                ></textarea>
              </div>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded transition duration-300 uppercase tracking-wider text-sm">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 py-4">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 p-3 rounded-full text-white shadow-md">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Office Email</h3>
                <p className="text-blue-600 hover:underline cursor-pointer break-all">
                  velsplusacademy@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 p-3 rounded-full text-white shadow-md">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Office Phone</h3>
                <p className="text-gray-600">+91 99405 82758</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 p-3 rounded-full text-white shadow-md">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Office Address</h3>
                <p className="text-gray-600 leading-relaxed">
                  No. 42, Anna Nagar, <br/>
                  Chennai - 600040<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Map Section --- */}
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