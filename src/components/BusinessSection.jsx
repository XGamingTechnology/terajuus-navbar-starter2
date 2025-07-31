"use client";

import { CheckCircle, XCircle } from "lucide-react";

export default function BusinessSection() {
  const products = [
    { name: "Silica Sand", companyA: false, companyB: false },
    { name: "Marine Sand", companyA: false, companyB: true },
    { name: "Zircon Concentrate", companyA: true, companyB: false },
    { name: "Ilmenite", companyA: false, companyB: false },
    { name: "Magnetite", companyA: true, companyB: true },
    { name: "Garnet", companyA: false, companyB: true },
    { name: "Rutile", companyA: false, companyB: false },
    { name: "Heavy Mineral Concentrate", companyA: true, companyB: false },
  ];

  const renderIcon = (val) =>
    val ? (
      <CheckCircle className="text-green-500 mx-auto" size={20} />
    ) : (
      <XCircle className="text-gray-400 mx-auto" size={20} />
    );

  return (
    <section
      id="business"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#fdf8f3] text-center px-6 py-20"
    >
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[8vw] font-bold text-black opacity-5 leading-none">
          Sustainable Future
        </h2>
      </div>

      <div className="relative max-w-7xl w-full mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Sustainable Future
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-10">
          At PT. Teraju Usaha Sukses, we see marine sand as a catalyst for
          transformation. Our mission is to empower industries and communities
          to harness natural resources for a sustainable, innovative future. We
          prioritize environmental monitoring, advanced dredging technology, and
          responsible practices to reshape the mining landscape and create a
          sustainable future for all.
        </p>

        <div className="overflow-auto rounded-xl shadow-md bg-white">
          <div className="grid grid-cols-4 min-w-[600px] text-sm md:text-base">
            <div className="bg-blue-900 text-white font-bold py-3 px-4">
              Our Products
            </div>
            <div className="bg-blue-900 text-white font-bold py-3 px-4">
              PT. Teraju Usaha Sukses
            </div>
            <div className="bg-blue-900 text-white font-bold py-3 px-4">
              Company A
            </div>
            <div className="bg-blue-900 text-white font-bold py-3 px-4">
              Company B
            </div>

            {products.map((item, index) => (
              <>
                <div
                  key={`name-${index}`}
                  className={`border-t border-gray-200 py-3 px-4 text-left font-medium ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  {index + 1}. {item.name}
                </div>
                <div
                  className={`border-t border-gray-200 py-3 px-4 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  {renderIcon(true)}
                </div>
                <div
                  className={`border-t border-gray-200 py-3 px-4 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  {renderIcon(item.companyA)}
                </div>
                <div
                  className={`border-t border-gray-200 py-3 px-4 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  {renderIcon(item.companyB)}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}