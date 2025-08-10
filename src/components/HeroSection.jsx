import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from "lucide-react";

 // Data untuk News Section
  const newsItems = [
    {
      title: 'PT Teraju Signs Agreement with Southeast Asia Partners',
      date: 'July 20, 2025',
      snippet:
        'A new milestone in our experience initiative was marked with a signed agreement to supply marine sand to Southeast Asian countries...',
    },
    {
      title: 'Sustainable Mining Practices in Action',
      date: 'July 15, 2025',
      snippet:
        'Our operations at Pulau Batam highlight eco-conscious extraction techniques, leading the region in responsible dredging...',
    },
    {
      title: 'Community Development Program Launched',
      date: 'July 10, 2025',
      snippet:
        'We’ve launched new community engagement efforts in coastal villages to support education and infrastructure...',
    },
  ];

const HeroSection = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          background: `url("/01.jpg") center/cover no-repeat`,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "100px 5% 0",
          color: "white",
        }}
      >
        <div style={{ position: "relative", zIndex: 2, maxWidth: "800px" }}>
          <h1
            style={{
              fontSize: "3rem",
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
            PT TERAJU USAHA SUKSES
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            Reliable Mineral Supply for Sustainable Development
          </p>
        </div>

        {/* SHAPE BAWAH */}
        <div
          style={{
            position: "absolute",
            bottom: "-1px",
            left: 0,
            width: "100%",
            height: "200px",
            backgroundColor: "#d16b33",
            borderRadius: "50px 50px 0 0",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          <span style={{ fontSize: "2.2rem", fontWeight: "normal" }}>
            We provide high-quality sand and mineral resources
          </span>
          <span style={{ fontSize: "1rem", opacity: 0.9 }}>
            to support infrastructure and development projects across Southeast
            Asia. Trusted by international partners, we ensure consistent supply
            and compliance with global standards.
          </span>
        </div>
      </section>

      {/* GRID SECTION */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "50px 5%",
          backgroundColor: "white",
        }}
      >
        {/* Card 1 */}
        <div className="grid-card">
          <img src="/mining.jpg" alt="mining" />
          <div className="hover-overlay">
            <p>
              Our mining operations utilize cutting-edge equipment and skilled
              expertise to deliver premium-grade minerals, ensuring long-term
              reliability for our clients.
            </p>
          </div>
          <span className="card-number">01</span>
        </div>

        {/* Card 2 */}
        <div className="grid-card">
          <img src="/eco.jpg" alt="eco" />
          <div className="hover-overlay">
            <p>
              Sustainability is at the core of our business, with ongoing
              initiatives to protect the environment and minimize our
              operational footprint.
            </p>
          </div>
          <span className="card-number">02</span>
        </div>

        {/* Card 3 */}
        <div className="grid-card">
          <img src="/community.jpg" alt="community" />
          <div className="hover-overlay">
            <p>
              We empower local communities through education, training, and
              infrastructure projects that create lasting positive change.
            </p>
          </div>
          <span className="card-number">03</span>
        </div>
      </section>

      {/* CSS */}
      <style jsx>{`
        .grid-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
        }
        .grid-card img {
          width: 100%;
          height: 350px;
          object-fit: cover;
          transition: transform 0.4s ease;
          display: block;
        }
        .hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(209, 107, 51, 0.95);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .grid-card:hover img {
          transform: scale(1.05);
        }
        .grid-card:hover .hover-overlay {
          opacity: 1;
        }
        .card-number {
          position: absolute;
          bottom: 10px;
          left: 10px;
          color: white;
          font-size: 1.4rem;
          font-weight: bold;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
        }
      `}</style>

     {/* NEWS SECTION (Digabung ke Hero) */}
      <section id="news-preview" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-gray-900"
          >
            Latest News
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 mb-12"
          >
            Stay updated with our latest projects and initiatives.
          </motion.p>

          <div className="grid gap-8 md:grid-cols-3">
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#d16b33] p-6 rounded-2xl shadow hover:shadow-xl hover:scale-[1.02] transition-all text-left"
              >
                <p className="text-sm text-white mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white text-sm mb-4">{item.snippet}</p>
                <button className="text-blue-400 font-semibold hover:underline text-sm">
                  Read More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;