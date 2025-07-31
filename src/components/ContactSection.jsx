'use client';

import React from 'react';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative px-4 py-24 md:px-20 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom right, #e6f0ff, #fffbea)',
      }}
    >
      {/* Background Decorative Shapes */}
      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-blue-200 rounded-full opacity-30 blur-2xl z-0"></div>
      <div className="absolute -top-16 -right-16 w-96 h-96 bg-orange-100 rounded-3xl rotate-12 opacity-40 blur-2xl z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-10">
          Have questions or want to collaborate? Fill out the form below.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Name"
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="md:col-span-2 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            rows={5}
            placeholder="Message"
            className="md:col-span-2 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="md:col-span-2 bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-xl transition-all duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
