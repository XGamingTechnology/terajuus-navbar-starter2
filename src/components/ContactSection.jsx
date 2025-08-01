// src/components/ContactSection.jsx
'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ContactSection() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <section className="relative h-96 md:h-[500px] bg-gradient-to-r from-blue-800 to-orange-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl text-white max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's build Indonesia's infrastructure together
          </motion.p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-700">
              We're here to answer any questions you may have
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Office</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Head Office</h4>
                    <p className="text-gray-700">
                      Equity Tower Level 22 #B, SCBD Lot 9<br />
                      Jl. Jend Sudirman Kav. 52-53<br />
                      Jakarta Selatan - 12190
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-700">+62 21 1234 5678</p>
                    <p className="text-gray-700">+62 812 3456 7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-700">info@terajusuccess.com</p>
                    <p className="text-gray-700">contact@terajusuccess.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Working Hours</h4>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              className="h-96 rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.277453940476!2d106.82512331533956!3d-6.224975062692094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3a1f1b1b1b1%3A0x1234567890abcdef!2sEquity%20Tower!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PT. Teraju Usaha Sukses Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section (Versi yang Diminta) */}
      <section
        className="relative px-4 py-24 md:px-20 overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom right, #e6f0ff, #fffbea)',
        }}
      >
        {/* Background Decorative Shapes */}
        <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-blue-200 rounded-full opacity-30 blur-2xl z-0"></div>
        <div className="absolute -top-16 -right-16 w-96 h-96 bg-orange-100 rounded-3xl rotate-12 opacity-40 blur-2xl z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
          <p className="text-lg text-gray-600 mb-10">
            Have questions or want to collaborate? Fill out the form below.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="md:col-span-2 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <select className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Select Subject</option>
              <option value="business">Business Inquiry</option>
              <option value="partnership">Partnership</option>
              <option value="career">Career</option>
              <option value="general">General Question</option>
            </select>
            <input
              type="text"
              placeholder="Company Name (Optional)"
              className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="md:col-span-2 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <div className="md:col-span-2 flex items-center">
              <input type="checkbox" id="privacy" className="mr-3" />
              <label htmlFor="privacy" className="text-gray-700 text-sm">
                I agree to the Privacy Policy and terms of service
              </label>
            </div>
            <button
              type="submit"
              className="md:col-span-2 bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-xl transition-all duration-300 shadow-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Back to Home Button */}
      <section className="py-12 bg-white">
        <div className="text-center">
          <Link 
            to="/" 
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
          >
            Kembali ke Home
          </Link>
        </div>
      </section>
    </div>
  );
}