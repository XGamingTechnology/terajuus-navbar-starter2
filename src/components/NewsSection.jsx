// src/components/NewsSection.jsx
"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
// --- Impor data berita ---
import { newsItems as allNewsItems } from "../databerita/NewsData"; // sesuaikan path jika perlu

export default function NewsSection() {
  // State untuk pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // --- Gunakan data dari newsData.js ---
  // Data berita sudah diimpor sebagai allNewsItems

  // Kategori berita
  const categories = [
    { id: "all", name: "All News" },
    { id: "business", name: "Business" },
    { id: "environment", name: "Environment" },
    { id: "community", name: "Community" },
    { id: "technology", name: "Technology" },
    { id: "achievement", name: "Achievement" },
    { id: "certification", name: "Certification" },
    { id: "partnership", name: "Partnership" },
    { id: "innovation", name: "Innovation" },
    { id: "leadership", name: "Leadership" },
    { id: "regulatory affairs", name: "Regulatory Affairs" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter berita berdasarkan kategori
  const filteredNews = selectedCategory === "all" 
    ? allNewsItems 
    : allNewsItems.filter((item) => 
        item.category && item.category.toLowerCase() === selectedCategory
      );

  // Pagination
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNews = filteredNews.slice(startIndex, startIndex + itemsPerPage);

  // Format tanggal
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Reset ke halaman 1 ketika kategori berubah
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <section
        className="relative h-96 md:h-[500px] bg-gradient-to-r from-blue-400 to-orange-600 flex items-center justify-center"
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          background: `url("/Picture2.jpeg") center/cover no-repeat`,
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
            News & Updates
          </motion.h1>
          <motion.p className="text-xl text-white max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Stay informed with the latest developments and achievements
          </motion.p>
        </div>
      </section>

      {/* News Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.id ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          {paginatedNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedNews.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* News Image */}
                  {/* --- Gunakan item.image dari data --- */}
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  ></div>

                  {/* News Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      {/* --- Gunakan item.category dari data --- */}
                      <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{item.category}</span>
                      {/* --- Gunakan item.date dari data --- */}
                      <span className="text-sm text-gray-500">{formatDate(item.date)}</span>
                    </div>

                    {/* --- Gunakan item.title dari data --- */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>

                    {/* Tombol Read More menjadi Link */}
                    <Link 
                      to={`/news/${item.id}`} 
                      className="text-blue-700 font-semibold hover:text-blue-800 text-sm flex items-center"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No News Found</h3>
              <p className="text-gray-600">There are no news articles in this category yet.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-16">
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg font-medium ${currentPage === 1 ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button key={index + 1} onClick={() => setCurrentPage(index + 1)} className={`px-4 py-2 rounded-lg font-medium ${currentPage === index + 1 ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg font-medium ${currentPage === totalPages ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-700 mb-8">Subscribe to our newsletter and never miss our latest news and updates.</p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input type="email" placeholder="Enter your email address" className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition duration-300">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}