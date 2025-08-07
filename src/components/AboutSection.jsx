// src/components/AboutSection.jsx
'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {react} from 'react';

const boardMembers = [
  {
    name: 'IR IDWAN RIDWAN IDRIS',
    position: 'Direktur Utama',
    image: 'public/Direktur Utama.png',
    description:
      'Insinyur senior dengan lebih dari 25 tahun pengalaman di industri pertambangan dan energi. Memimpin banyak proyek eksplorasi nasional dan internasional.',
  },
  {
    name: 'LADY DINAYLA',
    position: 'Sekretaris',
    image: 'public/Sekretaris.png',
    description:
      'Profesional administrasi yang terampil, dengan latar belakang hukum dan tata kelola perusahaan. Ahli dalam manajemen dokumen dan komunikasi eksekutif.',
  },
  {
    name: 'TANDRAMA',
    position: 'Direktur Operasional',
    image: '/operasional.jpg',
    description:
      'Berpengalaman dalam mengelola proses operasional pertambangan skala besar. Fokus pada efisiensi, keselamatan kerja, dan keberlanjutan.',
  },
  {
    name: 'SARIPUDDIN. R',
    position: 'Direktur Keuangan',
    image: '/keuangan.jpg',
    description:
      'Ahli keuangan korporat dengan sertifikasi CPA dan pengalaman lebih dari 15 tahun dalam pembiayaan dan manajemen risiko sektor tambang.',
  },
  {
    name: 'RIZKY RAMDANI',
    position: 'Staff Teknis',
    image: '/teknis.jpg',
    description:
      'Lulusan teknik geologi dengan pengalaman eksplorasi lapangan dan pengolahan data geospasial. Menguasai perangkat GIS dan teknologi pertambangan.',
  },
  {
    name: '',
    position: 'Staff Keuangan',
    image: '/staff-keuangan.jpg',
    description:
      'Posisi sedang dalam proses pengisian. Diperlukan profesional yang kompeten dalam akuntansi tambang dan administrasi keuangan.',
  },
];

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
        {/* Background Navy, teks putih */}
        <div className="absolute inset-0 bg-blue-900/80 group-hover:bg-orange-500 transition-all duration-500"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center p-8">
          {/* Teks selalu terlihat, animasi halus saat hover */}
          <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-500 group-hover:text-white group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Vision
          </h3>
          <p className="text-white text-lg text-center transition-all duration-500 group-hover:text-white group-hover:text-xl group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Mewujudkan Indonesia yang lebih kuat dengan fondasi infrastruktur
            yang kokoh dan berkelanjutan.
          </p>
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
        {/* Background Navy, teks putih */}
        <div className="absolute inset-0 bg-blue-900/80 group-hover:bg-orange-500 transition-all duration-500"></div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center p-8">
          {/* Teks selalu terlihat, animasi halus saat hover */}
          <h3 className="text-2xl font-bold text-white mb-6 transition-all duration-500 group-hover:text-white group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Mission
          </h3>
          <ol className="list-decimal pl-5 space-y-3 text-left">
            <li className="pl-1 text-white transition-all duration-500 group-hover:text-white group-hover:text-xl group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Menambang sumber daya alam dengan integritas dan kepedulian
              lingkungan.
            </li>
            <li className="pl-1 text-white transition-all duration-500 group-hover:text-white group-hover:text-xl group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Memberikan nilai terbaik kepada pelanggan, mitra, dan pemangku
              kepentingan.
            </li>
            <li className="pl-1 text-white transition-all duration-500 group-hover:text-white group-hover:text-xl group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Mengembangkan potensi manusia dan wilayah pesisir secara inklusif.
            </li>
             </ol>
           </div>
            </motion.div>
         </div>
         </div>
          </section>

      {/* Good Corporate Governance Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
                Good Corporate Governance
              </h2>
              <p>
                PT. Teraju Usaha Sukses berkomitmen kuat pada prinsip-prinsip Good Corporate Governance (GCG) dalam semua aspek operasinya. Komitmen ini didasarkan pada nilai-nilai inti yaitu <strong>Transparansi</strong>, <strong>Akuntabilitas</strong>, <strong>Tanggung Jawab</strong>, <strong>Kemandirian</strong>, dan <strong>Keadilan</strong>, yang mengarahkan setiap keputusan dan tindakan perusahaan.
              </p>
          </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Transparency",
          desc: "PT. Teraju Usaha Sukses menjunjung tinggi transparansi dalam semua aktivitas bisnisnya. Kami memberikan informasi yang jelas dan akurat kepada pemangku kepentingan, termasuk pelanggan, mitra, dan investor, sehingga mereka dapat membuat keputusan yang tepat berdasarkan data yang valid.",
          icon: "📊", // Simbol untuk Transparency
        },
        {
          title: "Accountability",
          desc: "Kami bertanggung jawab atas semua tindakan yang kami lakukan. Setiap keputusan yang diambil oleh PT. Teraju Usaha Sukses selalu diawasi dan dipertanggungjawabkan kepada pemangku kepentingan utama, termasuk pemerintah, mitra, dan komunitas lokal.",
          icon: "🔒", // Simbol untuk Accountability
        },
        {
          title: "Responsibility",
          desc: "PT. Teraju Usaha Sukses memiliki tanggung jawab sosial terhadap lingkungan dan masyarakat. Kami berupaya untuk menciptakan dampak positif melalui praktik penambangan yang ramah lingkungan dan program pengembangan komunitas di wilayah operasi kami.",
          icon: "🌍", // Simbol untuk Responsibility
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="bg-orange-100 p-8 rounded-xl shadow-lg text-center cursor-pointer group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <span className="text-4xl text-blue-600 mb-4">{item.icon}</span>

          {/* Judul */}
          <h3 className="text-xl font-bold text-blue-800 mb-4">{item.title}</h3>

          {/* Deskripsi */}
          <p className="text-gray-700">
            {item.desc}
          </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Company History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
         <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Konten Sejarah Perusahaan */}
       <motion.div
         initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Discover Our <span className="text-blue-700">Journey</span> and Future Aspirations Towards Sustainable Resource Development
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Explore how we harness the potential of natural sedimentation through responsible sand mining to deliver high-quality materials that meet international standards. With a strong foothold in the region, our company has successfully expanded operations beyond local borders, supplying premium-grade sand to markets such as Singapore.
        </p>
        <p className="text-gray-700">
          Through environmentally conscious methods and continuous innovation, we aim to lead the future of sediment mining. Our experienced team is committed to upholding the highest standards in quality, safety, and environmental stewardship.
        </p>

        {/* Tujuan Perusahaan */}
        <div className="bg-blue-500 p-6 rounded-xl shadow-md mt-8">
          <h2 className="text-xl font-bold mb-2">Our Purpose</h2>
          <p className="text-gray-200">
            Focus on delivering sustainable and innovative solutions in the marine sand industry to support infrastructure development and economic growth both locally and globally.
          </p>
        </div>

        {/* Prinsip Dasar */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Fundamental Principles</h2>
          <div className="flex flex-wrap gap-4">
            <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full">Trustworthiness</span>
            <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full">Quality</span>
            <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full">Creativity</span>
            <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full">Response</span>
            <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full">Collaboration</span>
            <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full">Growth Mindset</span>
          </div>
        </div>
      </motion.div>

        {/* Gambar Timeline Perusahaan */}
        <motion.div
        className="bg-cover bg-center rounded-xl overflow-hidden h-96 md:h-[500px]"
        style={{ backgroundImage: "url('/Journey.png')" }}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
        {/* Placeholder untuk gambar timeline */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <span className="text-white text-4xl font-bold">Company Timeline</span>
        </div>
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
        { name: "NIB", desc: "(Nomor Induk Berusaha)", image: "/NIB 1.png" },
        { name: "NPWP", desc: "(Nomor Pokok Wajib Pajak)", image: "/NPWP.png" },
        { name: "ISO 14001", desc: "(Sertifikasi Lingkungan)", image: "/iso-14001.jpg" },
        { name: "Akta Perusahaan", desc: "(Akta Perusahaan)", image: "/Akta PT.png" }
      ].map((item, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group"
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* Gambar */}
          <div
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url('${item.image}')` }}
          ></div>

          {/* Teks Judul dan Deskripsi */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-2">{item.name}</h3>
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
          {boardMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={member.image}

                className="w-full h-[380px] object-cover"
              />
              <div className="absolute bottom-0 w-full bg-white/90 group-hover:translate-y-0 translate-y-full transition-transform duration-500 p-4 backdrop-blur-md">
                <h3 className="text-lg font-bold text-gray-900">
                  {member.name || '(--)'}
                </h3>
                <p className="text-blue-700 font-semibold">
                  {member.position}
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  {member.description}
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