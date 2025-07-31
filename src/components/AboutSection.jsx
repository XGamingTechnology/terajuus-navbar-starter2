// components/AboutSection.tsx
'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-white px-6 py-24"
    >
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Supporting <span className="text-blue-700">Coastal Communities</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At <strong>PT. Teraju Usaha Sukses</strong>, we understand the importance of supporting coastal communities through responsible resource management. We believe that marine sand mining can empower local economies while preserving marine ecosystems.
            By creating job opportunities and supporting infrastructure development, we aim to uplift entire regions and ensure long-term resilience.
          </p>
        </motion.div>

        {/* Placeholder for future image or shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full h-64 md:h-full bg-blue-100 rounded-2xl shadow-inner"
        >
          {/* Bisa diganti dengan ilustrasi atau animasi */}
        </motion.div>
      </div>
    </section>
  );
}
