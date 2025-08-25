// src/components/NewsDetail.jsx
'use client';

import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsItems } from '../databerita/NewsData'; // Pastikan path benar

export default function NewsDetail() {
  const { id } = useParams(); // Ambil parameter id dari URL
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cari berita berdasarkan id
    const item = newsItems.find(news => news.id === parseInt(id));
    if (item) {
      setNewsItem(item);
    } else {
      // Handle jika berita tidak ditemukan
      console.warn(`Berita dengan ID ${id} tidak ditemukan.`);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-2xl text-gray-700">Loading...</div>
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-6xl mb-4">📰</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Berita Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-8">
            Maaf, berita yang Anda cari tidak tersedia.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Kembali
          </Link>
        </div>
      </div>
    );
  }

  // Format tanggal
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options); // Gunakan locale Indonesia
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Tombol Kembali */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-700 hover:text-blue-800 font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali
          </Link>
        </div>

        {/* Konten Berita Detail */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Gambar Berita */}
          {newsItem.image && (
            <div className="h-96 md:h-[500px] bg-cover bg-center" style={{ backgroundImage: `url('${newsItem.image}')` }}>
              {/* Bisa juga menggunakan tag <img> jika perlu lazy loading atau fallback */}
              {/* <img src={newsItem.image} alt={newsItem.title} className="w-full h-full object-cover" /> */}
            </div>
          )}

          {/* Konten Teks */}
          <div className="p-8">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
              {newsItem.category && (
                <span className="font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {newsItem.category}
                </span>
              )}
              <time dateTime={newsItem.date}>{formatDate(newsItem.date)}</time>
              {newsItem.author && <span>By {newsItem.author}</span>}
            </div>

            {/* Judul */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {newsItem.title}
            </h1>

            {/* Konten Berita Lengkap */}
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              {/* Jika content adalah string biasa */}
              {typeof newsItem.content === 'string' ? (
                <p className="whitespace-pre-line">{newsItem.content}</p>
              ) : (
                /* Jika content adalah array paragraf */
                newsItem.content.map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 