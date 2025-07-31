// components/HeroSection.tsx
"use client";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-cream text-center px-6">
      {/* Watermark Teks Besar di Latar Belakang */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[10vw] font-bold text-black opacity-5 leading-none">Empowering Infrastructure</h1>
      </div>

      {/* Konten Utama */}
      <div className="relative max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Empowering Infrastructure</h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          At PT. Teraju Usaha Sukses, we believe that sand is the foundation of progress. As a responsible marine sand mining company, we provide high-quality materials essential for construction, land reclamation, and national
          infrastructure development.
        </p>
      </div>
    </section>
  );
}
