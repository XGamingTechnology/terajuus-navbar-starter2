"use client";

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-cream text-center overflow-hidden">
      {/* Background Gambar Transparan */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/02.jpg')" }}
      ></div>

      {/* Konten */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
         <h1
    className="text-6xl md:text-8xl font-bold text-white mb-10"
    style={{
      textShadow: `
        -1px -1px 0 #000,
         1px -1px 0 #000,
        -1px  1px 0 #000,
         1px  1px 0 #000,
        -1px  0px 0 #000,
         1px  0px 0 #000,
         0px  1px 0 #000,
         0px -1px 0 #000
      `
    }}
    >
          Empowering Infrastructure
          </h1>

        {/* Shape Oranye Muda */}
        <div className="bg-orange-200 rounded-2xl opacity-60 shadow-xl px-6 py-12 md:px-16 md:py-20 w-full">
          <p className="text-lg md:text-xl text-black leading-relaxed max-w-5xl mx-auto mb-16">
            At PT. Teraju Usaha Sukses, we believe that sand is the foundation
            of progress. As a responsible marine sand mining company, we provide
            high-quality materials essential for construction, land reclamation,
            and national infrastructure development.
          </p>

          {/* 3 Kotak Pedoman Kunci */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "Integrity in Mining",
                image: "public/mining.jpg",
              },
              {
                number: "02",
                title: "Support for Communities",
                image: "public/community.jpg",
              },
              {
                number: "03",
                title: "Sustainable Future",
                image: "public/eco.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group h-96 rounded-xl overflow-hidden cursor-pointer shadow-lg"
              >
                {/* Gambar Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:blur-sm"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>

                {/* Overlay Konten Saat Hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 text-white p-6 flex flex-col justify-end">
                  <p className="text-sm mb-2">{item.number}</p>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    consequat metus at ipsum tempus, sed hendrerit erat
                    eleifend. Vivamus nec orci sed nisi bibendum luctus in ut
                    magna. Aenean feugiat, felis a blandit faucibus, libero
                    justo lacinia justo, a sodales eros lorem sit amet purus.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
