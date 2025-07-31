// components/BusinessSection.tsx
"use client";

export default function BusinessSection() {
  return (
    <section id="business" className="relative min-h-screen flex items-center justify-center bg-cream text-center px-6">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[8vw] font-bold text-black opacity-5 leading-none">Sustainable Future</h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Sustainable Future</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
          At PT. Teraju Usaha Sukses, we see marine sand as a catalyst for transformation. Our mission is to empower industries and communities to harness natural resources for a sustainable, innovative future. We prioritize environmental
          monitoring, advanced dredging technology, and responsible practices to reshape the mining landscape and create a sustainable future for all.
        </p>
      </div>
    </section>
  );
}
