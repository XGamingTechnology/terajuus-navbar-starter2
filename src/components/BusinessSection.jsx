// src/components/BusinessSection.jsx
"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function BusinessSection() {
  const [activeArea, setActiveArea] = useState(0);
  const operationAreas = [
    {
      id: 1,
      name: "Project Area Batam",
      description: "(--)",
    },
    {
      id: 2,
      name: "Project Area Makasar",
      description: "(--)",
    },
    {
      id: 3,
      name: "Distribution Area Surabaya",
      description: "(--)",
    },
    {
      id: 4,
      name: "Distribution Area Pekanbaru",
      description: "(--)",
    },
  ];

  // Data Existing Market, Agent, dan Partner (placeholder)
  const existingMarket = [
    { name: "Coming Soon", logo: "/logosulselprov.png" },
    // { name: "SAMUDERA INDONESIA", logo: "/placeholder-logo.png" },
    // { name: "HILLCON", logo: "/placeholder-logo.png" },
    // { name: "KBL", logo: "/placeholder-logo.png" },
    // { name: "PUPUK INDONESIA LOGISTIK", logo: "/placeholder-logo.png" },
    // { name: "WIKA", logo: "/placeholder-logo.png" },
  ];

  const agents = [
    { name: "Coming Soon", logo: "/placeholder-logo.png" },
    { name: "Coming Soon", logo: "/placeholder-logo.png" },
    { name: "Coming Soon", logo: "/placeholder-logo.png" },
    { name: "Coming Soon", logo: "/placeholder-logo.png" },
    { name: "Coming Soon", logo: "/placeholder-logo.png" },
  ];

  const partners = [
    { name: "Pemerintah Provinsi Sulawesi Selatan", logo: "/logosulselprov.png" },
    { name: "Kementerian Kelautan dan Perikanan", logo: "/placeholder-logo.png" },
    { name: "KEMENTERIAN ENERGI DAN SUMBER DAYA MINERAL", logo: "/placeholder-logo.png" },
  ];

  const [activeTab, setActiveTab] = useState("existing-market");

  // Fungsi untuk mendapatkan data berdasarkan tab aktif
  const getCurrentTabData = () => {
    switch (activeTab) {
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
      <section
        className="relative h-96 md:h-[500px] bg-gradient-to-r from-blue-400 to-orange-600 flex items-center justify-center"
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          background: `url("/Picture4.jpeg") center/cover no-repeat`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              textShadow: `
                -1px -1px 0 #000,
                 1px -1px 0 #000,
                -1px  1px 0 #000,
                 1px  1px 0 #000
              `,
            }}
          >
            Our Services
          </motion.h1>
          <motion.p className="text-xl text-white max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Sustainable Sediment Solutions – Delivering reliable sediment utilization products and logistics services for infrastructure, construction, and reclamation projects across Southeast Asia.
          </motion.p>
        </div>
      </section>

      {/* Our Business Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Reliable Resource Delivery for High-Impact Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Our core service focuses on delivering high-quality sand and minerals that meet international standards. We support a wide range of projects—from land reclamation and port development to highways and industrial construction.
              With strong partnerships, robust sourcing networks, and a commitment to sustainability, we ensure consistent supply, timely delivery, and tailored solutions to meet each project’s unique needs. Our experience spans regional
              and international operations with a focus on environmental and logistical efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {[
              {
                title: "Bulk Mineral Supply",
                desc: "(Provision of high-grade sand, aggregates, and minerals in large quantities to support civil and industrial construction demands.)",
              },
              {
                title: "Logistics & Distribution",
                desc: "(End-to-end logistics solutions for timely and secure mineral transport, including land and sea freight coordination.)",
              },
              {
                title: "Site Assessment & Planning",
                desc: "(Assessment of geographical and environmental conditions to ensure resource suitability and optimal logistics for each site.)",
              },
              {
                title: "International Supply Chain",
                desc: "(Cross-border sourcing and delivery of mineral resources with customs compliance and regional partnership support.)",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-100 to-orange-100 p-8 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Key Advantages */}
      <section className="py-20 bg-white" style={{ backgroundColor: "#e9fafa" }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">OUR KEY ADVANTAGES</h2>
            <p className="text-gray-600 text-lg">Unlock greater efficiency, sustainability, and reliability in mineral supply operations.</p>
          </div>

          {/* Top Description */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrated Supply & Logistics Framework</h3>
            <p className="text-gray-700 mb-4">Our end-to-end framework ensures that you receive high-grade mineral resources— on time, within spec, and responsibly sourced.</p>
            <p className="text-gray-700 mb-4">We merge proven processes and advanced tracking systems to streamline operations, boost transparency, and enhance delivery efficiency.</p>
            <p className="text-gray-700 mb-4">Monitor shipments in real-time with our analytics dashboard and gain insights to optimize your projects.</p>
            <p className="text-gray-700 mb-6">Built to scale, our framework adapts to evolving project requirements and international standards.</p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-6">
              <div>
                <p className="text-3xl font-bold text-[#d16b33]">95%</p>
                <p className="text-sm text-gray-600">Annual Client Retention</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1CA7A2]">24/7</p>
                <p className="text-sm text-gray-600">Dedicated Support</p>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-8">
            {/* First Row - 4 items */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: "icons/01.svg", title: "Secure Operations", desc: "We ensure safety and reliability in sourcing and delivery with certified protocols and strict compliance." },
                { icon: "icons/02.svg", title: "Logistics Excellence", desc: "From extraction to delivery—our integrated logistics ensures safe and efficient transport, both domestically and internationally." },
                { icon: "icons/03.svg", title: "Operational Insights", desc: "Gain clear visibility into shipments, quality control, and performance to support efficient and transparent operations." },
                { icon: "icons/04.svg", title: "Sustainability Compliance", desc: "Ethical sourcing and environmental safeguards are embedded in every stage of our supply chain." },
              ].map((item, index) => (
                <div key={index} className="bg-white border border-[#1CA7A2] rounded-xl p-6 shadow-md hover:border-[#d16b33] hover:shadow-lg transition">
                  <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Second Row - 3 items */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "icons/05.svg", title: "Operational Efficiency", desc: "Optimize your project timeline with streamlined workflows and proactive management." },
                { icon: "icons/06.svg", title: "Performance Monitoring", desc: "Get insights into cost, delivery timing, and resource utilization with detailed analytics." },
                { icon: "icons/07.svg", title: "Scalable Growth", desc: "Expand your sourcing volume and reach new regions confidently with our flexible infrastructure." },
              ].map((item, index) => (
                <div key={index} className="bg-white border border-[#1CA7A2] rounded-xl p-6 shadow-md hover:border-[#d16b33] hover:shadow-lg transition">
                  <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Existing Market, Agent, and Partner Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Existing Market, Agent, and Partner</h2>
            <div className="w-full border-t border-gray-300 mt-4"></div>

            {/* Tab Navigation */}
            <div className="flex justify-center mt-8 space-x-8">
              <button onClick={() => setActiveTab("existing-market")} className={`pb-2 px-1 font-medium ${activeTab === "existing-market" ? "text-red-600 border-b-2 border-red-600" : "text-gray-600 hover:text-gray-900"}`}>
                Existing Market
              </button>
              <button onClick={() => setActiveTab("agents")} className={`pb-2 px-1 font-medium ${activeTab === "agents" ? "text-red-600 border-b-2 border-red-600" : "text-gray-600 hover:text-gray-900"}`}>
                Agent
              </button>
              <button onClick={() => setActiveTab("partners")} className={`pb-2 px-1 font-medium ${activeTab === "partners" ? "text-red-600 border-b-2 border-red-600" : "text-gray-600 hover:text-gray-900"}`}>
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
      <section className="py-20 bg-gray-100" style={{ backgroundColor: "#e9fafa" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Operation Area</h2>
            <p className="text-lg text-gray-700">Mining and Distribution Area</p>
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
                      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${activeArea === index ? "bg-orange-100 border-l-4 border-orange-500" : "hover:bg-gray-50"}`}
                    >
                      <h4 className="font-semibold text-gray-900">{area.name}</h4>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{area.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Area Description */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{operationAreas[activeArea].name}</h3>
            <p className="text-gray-700 leading-relaxed">{operationAreas[activeArea].description}</p>
          </div>
        </div>
      </section>

      {/* Integrated Marine Sand Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Integrated Marine Sand Services</h2>
            <p className="text-lg text-gray-700">From Mining to Distribution - End-to-End Solutions</p>
          </div>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 to-orange-600"></div>

            <div className="grid md:grid-cols-5 gap-8 mt-8">
              {[
                { step: "01", title: "Survey & Exploration", desc: "(Survey lokasi penambangan dan analisis kualitas pasir)" },
                { step: "02", title: "Marine Mining", desc: "(Proses penambangan menggunakan teknologi dredging modern)" },
                { step: "03", title: "Processing", desc: "(Pengolahan dan klasifikasi material sesuai spesifikasi)" },
                { step: "04", title: "Quality Control", desc: "(Pengujian kualitas dan sertifikasi material)" },
                { step: "05", title: "Distribution", desc: "(Distribusi ke seluruh wilayah Indonesia)" },
              ].map((item, index) => (
                <motion.div key={index} className="relative text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-lg text-gray-700">High Quality Materials for Construction and Industry</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Marine Sand",
                spec: "(Spesifikasi: Kadar silika >95%, ukuran butir 0.1-2mm)",
              },
              {
                name: "Silica Sand",
                spec: "(Spesifikasi: Kadar silika >99%, untuk industri kaca & semen)",
              },
              {
                name: "Construction Sand",
                spec: "(Spesifikasi: Campuran ukuran butir untuk concrete batching)",
              },
              {
                name: "Land Reclamation Sand",
                spec: "(Spesifikasi: Material dengan kadar garam rendah)",
              },
              {
                name: "Filter Sand",
                spec: "(Spesifikasi: Ukuran butir tergradasi untuk sistem filtrasi)",
              },
              {
                name: "Specialty Sands",
                spec: "(Spesifikasi: Pasir dengan karakteristik khusus untuk industri tertentu)",
              },
            ].map((product, index) => (
              <motion.div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
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
    </div>
  );
}
