"use client";

import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from "lucide-react";
import React from 'react';

export default function HeroSection() {
  // Data untuk Business Section
  const products = [
    { name: "Silica Sand", companyA: false, companyB: false },
    { name: "Marine Sand", companyA: false, companyB: true },
    { name: "Zircon Concentrate", companyA: true, companyB: false },
    { name: "Ilmenite", companyA: false, companyB: false },
    { name: "Magnetite", companyA: true, companyB: true },
    { name: "Garnet", companyA: false, companyB: true },
    { name: "Rutile", companyA: false, companyB: false },
    { name: "Heavy Mineral Concentrate", companyA: true, companyB: false },
  ];

  // Data untuk News Section
  const newsItems = [
    {
      title: 'PT. Teraju Signs Export Agreement with Southeast Asia Partners',
      date: 'July 20, 2025',
      snippet:
        'A new milestone in our export initiative was marked with a signed agreement to supply marine sand to Southeast Asian countries...',
    },
    {
      title: 'Sustainable Mining Practices in Action',
      date: 'July 15, 2025',
      snippet:
        'Our operations at Pulau Bangka highlight eco-conscious extraction techniques, leading the region in responsible dredging...',
    },
    {
      title: 'Community Development Program Launched',
      date: 'July 10, 2025',
      snippet:
        'We’ve launched new community engagement efforts in coastal villages to support education and infrastructure...',
    },
  ];

  const renderIcon = (val) =>
    val ? (
      <CheckCircle className="text-green-500 mx-auto" size={20} />
    ) : (
      <XCircle className="text-gray-400 mx-auto" size={20} />
    );

  return (
    <div>
      {/* HERO SECTION */}
      <section id="hero" className="relative bg-cream text-center overflow-hidden">
        {/* Background Gambar Transparan */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url('/02.jpg')" }}
        ></div>

        {/* Konten */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
          <h1
            className="text-6xl md:text-8xl font-bold text-white mb-10"
            style={{
              textShadow: `
                -1px -1px 0 #000,
                 1px -1px 0 #000,
                -1px  1px 0 #000,
                 1px  1px 0 #000,
                -1px  0px 0 #000,
                 1px  0px 0 #000,
                 0px  1px 0 #000,
                 0px -1px 0 #000
              `
            }}
          >
            Empowering Infrastructure
          </h1>

          {/* Shape Oranye Muda */}
          <div className="bg-orange-200 rounded-2xl opacity-60 shadow-xl px-6 py-12 md:px-16 md:py-20 w-full">
            <p className="text-lg md:text-xl text-black leading-relaxed max-w-5xl mx-auto mb-16">
              At PT. Teraju Usaha Sukses, we believe that sand is the foundation
              of progress. As a responsible marine sand mining company, we provide
              high-quality materials essential for construction, land reclamation,
              and national infrastructure development.
            </p>

            {/* 3 Kotak Pedoman Kunci */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  number: "01",
                  title: "Integrity in Mining",
                  image: "public/mining.jpg",
                },
                {
                  number: "02",
                  title: "Support for Communities",
                  image: "public/community.jpg",
                },
                {
                  number: "03",
                  title: "Sustainable Future",
                  image: "public/eco.jpg",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative group h-96 rounded-xl overflow-hidden cursor-pointer shadow-lg"
                >
                  {/* Gambar Background */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:blur-sm"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  ></div>

                  {/* Overlay Konten Saat Hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 text-white p-6 flex flex-col justify-end">
                    <p className="text-sm mb-2">{item.number}</p>
                    <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                      consequat metus at ipsum tempus, sed hendrerit erat
                      eleifend. Vivamus nec orci sed nisi bibendum luctus in ut
                      magna. Aenean feugiat, felis a blandit faucibus, libero
                      justo lacinia justo, a sodales eros lorem sit amet purus.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION (Digabung ke Hero) */}
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

      {/* BUSINESS SECTION (Digabung ke Hero) */}
      <section
        id="business"
        className="relative min-h-screen flex flex-col items-center justify-center bg-[#fdf8f3] text-center px-6 py-20"
      >
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-[8vw] font-bold text-black opacity-5 leading-none">
            Sustainable Future
          </h2>
        </div>

        <div className="relative max-w-7xl w-full mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Sustainable Future
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-10">
            At PT. Teraju Usaha Sukses, we see marine sand as a catalyst for
            transformation. Our mission is to empower industries and communities
            to harness natural resources for a sustainable, innovative future. We
            prioritize environmental monitoring, advanced dredging technology, and
            responsible practices to reshape the mining landscape and create a
            sustainable future for all.
          </p>

          <div className="overflow-auto rounded-xl shadow-md bg-white">
            <div className="grid grid-cols-4 min-w-[600px] text-sm md:text-base">
              <div className="bg-blue-900 text-white font-bold py-3 px-4">
                Our Products
              </div>
              <div className="bg-blue-900 text-white font-bold py-3 px-4">
                PT. Teraju Usaha Sukses
              </div>
              <div className="bg-blue-900 text-white font-bold py-3 px-4">
                Company A
              </div>
              <div className="bg-blue-900 text-white font-bold py-3 px-4">
                Company B
              </div>

              {products.map((item, index) => (
                <>
                  <div
                    key={`name-${index}`}
                    className={`border-t border-gray-200 py-3 px-4 text-left font-medium ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    {index + 1}. {item.name}
                  </div>
                  <div
                    className={`border-t border-gray-200 py-3 px-4 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    {renderIcon(true)}
                  </div>
                  <div
                    className={`border-t border-gray-200 py-3 px-4 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    {renderIcon(item.companyA)}
                  </div>
                  <div
                    className={`border-t border-gray-200 py-3 px-4 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    {renderIcon(item.companyB)}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEWS SECTION (Digabung ke Hero) */}
      <section id="news" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-gray-900"
          >
            Latest News
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 mb-12"
          >
            Stay updated with our latest projects and initiatives.
          </motion.p>

          <div className="grid gap-8 md:grid-cols-3">
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#fdf7f2] p-6 rounded-2xl shadow hover:shadow-xl hover:scale-[1.02] transition-all text-left"
              >
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{item.snippet}</p>
                <button className="text-orange-600 font-semibold hover:underline text-sm">
                  Read More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}