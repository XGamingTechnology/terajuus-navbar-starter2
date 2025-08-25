// src/data/newsData.js

export const newsItems = [
  {
    id: 1,
    title: "PT Teraju Applies for Marine Space Utilization Permit for Sea Sediment Management",
    date: "2025-05-06", // Format tanggal ISO untuk konsistensi
    excerpt: "With this step, PT Teraju strengthens its role in sustainable marine development while ensuring compliance with national regulations.",
    category: "Regulatory Affairs",
    image: "/news1.jpg",
    // --- TAMBAHKAN CONTENT LENGKAP ---
    content: `
      Jakarta, 6 Mei 2025 - PT. Teraju Usaha Sukses (TUS) hari ini mengumumkan bahwa perusahaan telah mengajukan Izin Pemanfaatan Ruang Laut (IPRL) untuk kegiatan pengelolaan sedimen laut di wilayah operasionalnya.

      Langkah ini merupakan komitmen kuat TUS terhadap pengembangan maritim yang berkelanjutan sekaligus memastikan kepatuhan terhadap regulasi nasional. Pengajuan IPRL ini akan memungkinkan TUS untuk melanjutkan operasi penambangan pasir laut secara legal dan bertanggung jawab.

      "Kami percaya bahwa sumber daya alam laut dapat menjadi fondasi pembangunan nasional yang kokoh," kata Direktur Utama TUS. "Dengan izin yang tepat, kami dapat memastikan bahwa setiap proses ekstraksi dilakukan dengan mempertimbangkan keseimbangan ekosistem."

      Pengajuan ini merupakan bagian dari rangkaian prosedur administratif yang ketat yang diwajibkan oleh pemerintah untuk memastikan keberlanjutan kegiatan industri kelautan. TUS berharap proses ini akan segera selesai sehingga operasi dapat berjalan dengan lancar dan sesuai dengan standar internasional.

      Langkah ini juga menunjukkan bahwa TUS tidak hanya fokus pada aspek bisnis, tetapi juga pada tanggung jawab sosial dan lingkungan. Perusahaan berkomitmen untuk terus berinovasi dalam praktik penambangan yang ramah lingkungan dan berkelanjutan.
    `
    // --- AKHIR TAMBAHAN CONTENT ---
  },
  {
    id: 2,
    title: "PT Teraju to Conduct Public Consultation Following July 2, 2025 Meeting in Accordance with Government Regulation No. 5/2021",
    date: "2025-06-10",
    excerpt: "Following the July 2, 2025 meeting, PT Teraju is set to carry out a Public Consultation as mandated by Government Regulation No. 5/2021.",
    category: "Environment",
    image: "/news2.jpg",
    // --- TAMBAHKAN CONTENT LENGKAP ---
    content: `
      Makassar, 10 Juni 2025 - Setelah rapat yang dilaksanakan pada 2 Juli 2025, PT. Teraju Usaha Sukses (TUS) mengumumkan rencana untuk mengadakan Konsultasi Publik sesuai dengan ketentuan Peraturan Pemerintah Nomor 5 Tahun 2021.

      Konsultasi publik ini merupakan bagian integral dari proses transparansi dan akuntabilitas yang diterapkan oleh TUS. Tujuan utamanya adalah untuk mendengarkan aspirasi dan masukan langsung dari masyarakat, stakeholder lokal, serta pihak terkait lainnya yang akan terdampak oleh kegiatan operasional perusahaan.

      "Kami sangat menghargai partisipasi aktif masyarakat dalam proses pengambilan keputusan," ujar Kepala Humas TUS. "Melalui konsultasi ini, kami berharap dapat membangun sinergi yang kuat dan saling menguntungkan antara operasi perusahaan dengan kesejahteraan masyarakat sekitar."

      Peraturan Pemerintah No. 5/2021 menekankan pentingnya keterlibatan publik dalam proyek-proyek besar yang berpotensi memengaruhi lingkungan dan sosial. Dengan mengikuti aturan ini, TUS menunjukkan komitmennya terhadap prinsip-prinsip tata kelola perusahaan yang baik (good corporate governance).

      Jadwal resmi konsultasi publik akan diumumkan dalam waktu dekat melalui saluran resmi perusahaan dan media lokal. Partisipasi masyarakat sangat diharapkan untuk memastikan bahwa rencana kegiatan TUS selaras dengan harapan dan kebutuhan lokal.
    `
    // --- AKHIR TAMBAHAN CONTENT ---
  },
  {
    id: 3,
    title: "PT Teraju Joins Development Plan of CitraLand City Makassar to Support Sustainable Urban Growth",
    date: "2025-07-05",
    excerpt:
      "PT Teraju officially joins the development of CitraLand City Makassar, supporting a large-scale urban project in collaboration with the provincial government and investors. The initiative emphasizes sustainable growth, modern infrastructure, and community engagement",
    category: "Business",
    image: "/news3.jpg",
    // --- TAMBAHKAN CONTENT LENGKAP ---
    content: `
      Makassar, 5 Juli 2025 - PT. Teraju Usaha Sukses (TUS) secara resmi bergabung dengan rencana pengembangan CitraLand City Makassar, mendukung proyek perkotaan berskala besar yang dilakukan dalam kolaborasi dengan pemerintah provinsi dan para investor.

      Inisiatif ini menekankan pertumbuhan yang berkelanjutan, infrastruktur modern, dan keterlibatan masyarakat. TUS akan menyediakan material pasir laut berkualitas tinggi yang diperlukan untuk proyek reklamasi lahan dan pembangunan infrastruktur di kawasan CitraLand.

      "Kami bangga dapat menjadi bagian dari proyek ambisius ini," kata Direktur Operasional TUS. "CitraLand City Makassar bukan hanya tentang membangun gedung dan jalan, tetapi juga menciptakan ekosistem perkotaan yang harmonis dan lestari."

      Kolaborasi ini mencerminkan visi TUS untuk berkontribusi pada pembangunan infrastruktur nasional sambil tetap menjaga komitmen terhadap keberlanjutan lingkungan. Perusahaan akan menerapkan teknologi penambangan terdepan dan praktik ramah lingkungan untuk meminimalkan dampak terhadap ekosistem laut sekitar.

      Selain itu, TUS juga berkomitmen untuk memberikan manfaat langsung kepada masyarakat lokal melalui program pengembangan keterampilan, penciptaan lapangan kerja, dan dukungan terhadap usaha kecil dan menengah (UKM) di sekitar lokasi proyek. Kolaborasi ini diharapkan dapat menjadi model bagi pengembangan kota-kota lain di Indonesia.
    `
    // --- AKHIR TAMBAHAN CONTENT ---
  },
];

// Fungsi untuk mendapatkan 3 berita terbaru
export const getLatestNews = (count = 3) => {
  // Urutkan berdasarkan tanggal terbaru dulu (descending)
  const sortedNews = [...newsItems].sort((a, b) => new Date(b.date) - new Date(a.date));
  return sortedNews.slice(0, count);
};