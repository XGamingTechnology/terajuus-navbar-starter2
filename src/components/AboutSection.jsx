// components/AboutSection.tsx
"use client";

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center bg-white text-center px-6">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[8vw] font-bold text-black opacity-5 leading-none">Supporting Coastal Communities</h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Supporting Coastal Communities</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
          At PT. Teraju Usaha Sukses, we understand the importance of supporting coastal communities through responsible resource management. We believe that marine sand mining can empower local economies while preserving marine ecosystems.
          By creating job opportunities and supporting infrastructure development, we aim to uplift entire regions and ensure long-term resilience.
        </p>
      </div>
    </section>
  );
}
