// src/components/AboutSection.jsx
'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AboutSection() {
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
            About Us
          </motion.h1>
          <motion.p 
            className="text-xl text-white max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering Indonesia's Infrastructure Through Sustainable Marine Sand Solutions
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get to know our Vision & Mission
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div 
              className="relative h-80 rounded-xl overflow-hidden cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/vision-bg.jpg')" }}
              ></div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-500"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-lg">
                    (Ini bagian Visi Perusahaan - Text Visi)
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              className="relative h-80 rounded-xl overflow-hidden cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/mission-bg.jpg')" }}
              ></div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-500"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-lg">
                    (Ini bagian Misi Perusahaan - Text Misi)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Good Corporate Governance Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Good Corporate Governance
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              (Ini bagian penjelasan komitmen terhadap Good Corporate Governance)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Transparency", desc: "(Penjelasan tentang transparansi)" },
              { title: "Accountability", desc: "(Penjelasan tentang akuntabilitas)" },
              { title: "Responsibility", desc: "(Penjelasan tentang tanggung jawab)" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-blue-800 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                (Ini bagian sejarah Perusahaan)
              </p>
              <p className="text-gray-700">
                (Ini Detail tentang perusahaan - perkembangan, pencapaian, milestone)
              </p>
            </motion.div>
            
            <motion.div
              className="bg-gray-200 h-96 rounded-xl flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-500">Company Timeline Image</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legality Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Legalitas Perusahaan
            </h2>
            <p className="text-lg text-gray-700">
              Dokumen legal yang mendukung operasional kami
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "NIB", desc: "(Nomor Induk Berusaha)" },
              { name: "ISO 9001", desc: "(Sertifikasi Kualitas)" },
              { name: "ISO 14001", desc: "(Sertifikasi Lingkungan)" },
              { name: "SNI", desc: "(Standar Nasional Indonesia)" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{item.name}</span>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-center">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Profiles of Board Members
            </h2>
            <p className="text-lg text-gray-700">
              Tim leadership yang berpengalaman di bidang energi dan pertambangan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-64 bg-gradient-to-r from-blue-300 to-orange-300 flex items-center justify-center">
                  <span className="text-white text-5xl font-bold">#{item}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    (Nama Direktur {item})
                  </h3>
                  <p className="text-blue-700 font-semibold mb-3">
                    (Jabatan Direktur {item})
                  </p>
                  <p className="text-gray-700 text-sm">
                    (Ringkasan latar belakang pendidikan & pengalaman profesional)
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <section className="py-12 bg-gray-100">
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