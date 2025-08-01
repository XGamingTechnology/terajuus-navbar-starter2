// src/components/BusinessSection.jsx
'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function BusinessSection() {
  const [activeArea, setActiveArea] = useState(0);
  const operationAreas = [
    {
      id: 1,
      name: "Area Penambangan Pulau Bangka",
      description: "(Deskripsi detail tentang area penambangan di Pulau Bangka - lokasi, kapasitas, spesifikasi material)"
    },
    {
      id: 2,
      name: "Area Distribusi Jakarta",
      description: "(Deskripsi tentang area distribusi di Jakarta - jaringan logistik, pelabuhan, kapasitas pengiriman)"
    },
    {
      id: 3,
      name: "Area Distribusi Surabaya",
      description: "(Deskripsi tentang area distribusi di Surabaya - jaringan mitra, infrastruktur transportasi)"
    },
    {
      id: 4,
      name: "Area Distribusi Makassar",
      description: "(Deskripsi tentang area distribusi di Makassar - ekspansi pasar timur Indonesia)"
    }
  ];

  // Data Existing Market, Agent, dan Partner (placeholder)
  const existingMarket = [
    { name: "PETROSEA", logo: "/placeholder-logo.png" },
    { name: "SAMUDERA INDONESIA", logo: "/placeholder-logo.png" },
    { name: "HILLCON", logo: "/placeholder-logo.png" },
    { name: "KBL", logo: "/placeholder-logo.png" },
    { name: "PUPUK INDONESIA LOGISTIK", logo: "/placeholder-logo.png" },
    { name: "WIKA", logo: "/placeholder-logo.png" }
  ];

  const agents = [
    { name: "JSI SINERGI MAS", logo: "/placeholder-logo.png" },
    { name: "VDNi", logo: "/placeholder-logo.png" },
    { name: "PT TANTO INTIMLINE", logo: "/placeholder-logo.png" },
    { name: "AHIMSA PATRA ENERGI", logo: "/placeholder-logo.png" },
    { name: "MCT INDONESIA TRADING", logo: "/placeholder-logo.png" }
  ];

  const partners = [
    { name: "ExxonMobil", logo: "/placeholder-logo.png" },
    { name: "ELNUSA PETROFIN", logo: "/placeholder-logo.png" },
    { name: "AKR", logo: "/placeholder-logo.png" },
    { name: "PT. ENERGI COAL PRIMA", logo: "/placeholder-logo.png" },
    { name: "PERTAMINA PATRA NIAGA", logo: "/placeholder-logo.png" }
  ];

  const [activeTab, setActiveTab] = useState("existing-market");

  // Fungsi untuk mendapatkan data berdasarkan tab aktif
  const getCurrentTabData = () => {
    switch(activeTab) {
      case "existing-market":
        return existingMarket;
      case "agents":
        return agents;
      case "partners":
        return partners;
      default:
        return existingMarket;
    }
  };

  const currentData = getCurrentTabData();

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
            The Business
          </motion.h1>
          <motion.p 
            className="text-xl text-white max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Marine Sand Solutions for Indonesia's Infrastructure Development
          </motion.p>
        </div>
      </section>

      {/* Our Business Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Business
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              PT. Teraju Usaha Sukses is a marine sand mining and distribution company that provides high-quality materials 
              essential for construction, land reclamation, and national infrastructure development. We operate with 
              sustainable practices and cutting-edge technology to meet Indonesia's growing infrastructure needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { 
                title: "Marine Sand Mining", 
                desc: "(Proses penambangan pasir laut dengan teknologi ramah lingkungan)" 
              },
              { 
                title: "Material Processing", 
                desc: "(Pengolahan dan klasifikasi material sesuai spesifikasi industri)" 
              },
              { 
                title: "Distribution Network", 
                desc: "(Jaringan distribusi yang mencakup seluruh Indonesia)" 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Market, Agent, and Partner Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Existing Market, Agent, and Partner
            </h2>
            <div className="w-full border-t border-gray-300 mt-4"></div>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mt-8 space-x-8">
              <button
                onClick={() => setActiveTab("existing-market")}
                className={`pb-2 px-1 font-medium ${
                  activeTab === "existing-market" 
                    ? "text-red-600 border-b-2 border-red-600" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Existing Market
              </button>
              <button
                onClick={() => setActiveTab("agents")}
                className={`pb-2 px-1 font-medium ${
                  activeTab === "agents" 
                    ? "text-red-600 border-b-2 border-red-600" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Agent
              </button>
              <button
                onClick={() => setActiveTab("partners")}
                className={`pb-2 px-1 font-medium ${
                  activeTab === "partners" 
                    ? "text-red-600 border-b-2 border-red-600" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Partner
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-16 flex items-center justify-center mb-4">
                  <span className="text-gray-500 text-xs text-center">{item.name}</span>
                </div>
                <p className="text-gray-700 text-center">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operation Area Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Operation Area
            </h2>
            <p className="text-lg text-gray-700">
              Wilayah operasi penambangan dan distribusi kami
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Image Area */}
            <div className="lg:w-2/3">
              <div className="bg-gray-200 h-96 md:h-[500px] rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-orange-400/20"></div>
                <div className="text-center z-10">
                  <span className="text-6xl font-bold text-white/30">AREA {activeArea + 1}</span>
                  <p className="text-white/70 mt-4 text-xl">Gambar {operationAreas[activeArea].name}</p>
                </div>
              </div>
            </div>

            {/* Toggle Menu */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg p-6 h-96 md:h-[500px] flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Pilih Area</h3>
                <div className="space-y-3 flex-grow overflow-y-auto">
                  {operationAreas.map((area, index) => (
                    <button
                      key={area.id}
                      onClick={() => setActiveArea(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                        activeArea === index
                          ? "bg-orange-100 border-l-4 border-orange-500"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <h4 className="font-semibold text-gray-900">{area.name}</h4>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {area.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Area Description */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {operationAreas[activeArea].name}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {operationAreas[activeArea].description}
            </p>
          </div>
        </div>
      </section>

      {/* Integrated Marine Sand Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integrated Marine Sand Services
            </h2>
            <p className="text-lg text-gray-700">
              From Mining to Distribution - End-to-End Solutions
            </p>
          </div>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-orange-500"></div>
            
            <div className="grid md:grid-cols-5 gap-8 mt-8">
              {[
                { step: "01", title: "Survey & Exploration", desc: "(Survey lokasi penambangan dan analisis kualitas pasir)" },
                { step: "02", title: "Marine Mining", desc: "(Proses penambangan menggunakan teknologi dredging modern)" },
                { step: "03", title: "Processing", desc: "(Pengolahan dan klasifikasi material sesuai spesifikasi)" },
                { step: "04", title: "Quality Control", desc: "(Pengujian kualitas dan sertifikasi material)" },
                { step: "05", title: "Distribution", desc: "(Distribusi ke seluruh wilayah Indonesia)" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-lg text-gray-700">
              Material berkualitas tinggi untuk berbagai kebutuhan konstruksi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Marine Sand", 
                spec: "(Spesifikasi: Kadar silika >95%, ukuran butir 0.1-2mm)" 
              },
              { 
                name: "Silica Sand", 
                spec: "(Spesifikasi: Kadar silika >99%, untuk industri kaca & semen)" 
              },
              { 
                name: "Construction Sand", 
                spec: "(Spesifikasi: Campuran ukuran butir untuk concrete batching)" 
              },
              { 
                name: "Land Reclamation Sand", 
                spec: "(Spesifikasi: Material dengan kadar garam rendah)" 
              },
              { 
                name: "Filter Sand", 
                spec: "(Spesifikasi: Ukuran butir tergradasi untuk sistem filtrasi)" 
              },
              { 
                name: "Specialty Sands", 
                spec: "(Spesifikasi: Pasir dengan karakteristik khusus untuk industri tertentu)" 
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-gradient-to-r from-blue-300 to-orange-300 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{product.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-700">{product.spec}</p>
                </div>
              </motion.div>
            ))}
          </div>
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