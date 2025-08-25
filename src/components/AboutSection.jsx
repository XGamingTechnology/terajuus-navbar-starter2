import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// react-pdf imports
import { Document, Page, pdfjs } from "react-pdf";

// set pdf.worker (gunakan unpkg)
import pdfWorker from "pdfjs-dist/build/pdf.worker.min?url";
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

/* ---------------------------
   Data (boardMembers tetap sama)
   --------------------------- */
const boardMembers = [
  {
    name: "IR IDWAN RIDWAN IDRIS",
    position: "Direktur Utama",
    image: "/Direktur Utama.png",
    description: "Insinyur senior dengan lebih dari 25 tahun pengalaman di industri pertambangan dan energi. Memimpin banyak proyek eksplorasi nasional dan internasional.",
  },
  {
    name: "LADY DINAYLA",
    position: "Sekretaris",
    image: "/group.png",
    description: "Profesional administrasi yang terampil, dengan latar belakang hukum dan tata kelola perusahaan. Ahli dalam manajemen dokumen dan komunikasi eksekutif.",
  },
  {
    name: "TANDRAMA",
    position: "Direktur Operasional",
    image: "/group.png",
    description: "Berpengalaman dalam mengelola proses operasional pertambangan skala besar. Fokus pada efisiensi, keselamatan kerja, dan keberlanjutan.",
  },
  {
    name: "SARIPUDDIN. R",
    position: "Direktur Keuangan",
    image: "/group.png",
    description: "Ahli keuangan korporat dengan sertifikasi CPA dan pengalaman lebih dari 15 tahun dalam pembiayaan dan manajemen risiko sektor tambang.",
  },
  {
    name: "RIZKY RAMDANI",
    position: "Staff Teknis",
    image: "/group.png",
    description: "Lulusan teknik geologi dengan pengalaman eksplorasi lapangan dan pengolahan data geospasial. Menguasai perangkat GIS dan teknologi pertambangan.",
  },
  {
    name: "",
    position: "Staff Keuangan",
    image: "/group.png",
    description: "Posisi sedang dalam proses pengisian. Diperlukan profesional yang kompeten dalam akuntansi tambang dan administrasi keuangan.",
  },
];

/* ------------------------------------------------
   documentsList menyertakan 'file' (PDF) dan thumbnail
   ------------------------------------------------ */
const documentsList = [
  { name: "NIB", desc: "(Nomor Induk Berusaha)", image: "/NIB 1.png", file: "/NIB.pdf" },
  { name: "NPWP", desc: "(Nomor Pokok Wajib Pajak)", image: "/NPWP.png", file: "/NPWP.pdf" },
  { name: "PRLP-PHSL", desc: "Surat Persetujuan Rencana Lokasi Prioritas", image: "/PRLP-PHSL.png", file: "/PRLP-PHSL.pdf" },
  { name: "Akta Perusahaan", desc: "(Akta Perusahaan)", image: "/Akta PT.png", file: "/Akta.pdf" },
];

export default function AboutSection() {
  // PDF viewer state
  const [selectedDoc, setSelectedDoc] = useState(null); // absolute URL string
  const [numPages, setNumPages] = useState(null);
  const [pdfError, setPdfError] = useState(null);
  const [pageWidth, setPageWidth] = useState(800);

  // Resize handler for page width
  useEffect(() => {
    function handleResize() {
      if (typeof window !== "undefined") {
        setPageWidth(Math.min(1000, Math.floor(window.innerWidth * 0.8)));
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Open document: convert relative file (e.g. '/NIB.pdf') to absolute URL
  const openDoc = (file) => {
    try {
      const url = file.startsWith("http") ? file : `${window.location.origin}${file}`;
      setSelectedDoc(url);
      setNumPages(null);
      setPdfError(null);
    } catch (err) {
      console.error("openDoc error:", err);
      setPdfError("Unable to open document");
    }
  };

  const closeDoc = () => {
    setSelectedDoc(null);
    setNumPages(null);
    setPdfError(null);
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
          background: `url("/Picture1.jpg") center/cover no-repeat`,
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
            About Us
          </motion.h1>
          <motion.p className="text-xl text-white max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            Empowering Indonesia's Infrastructure Through Sustainable Marine Sand Solutions
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get to know our Vision & Mission</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Kotak Vision */}
            <motion.div className="relative h-80 rounded-xl overflow-hidden cursor-pointer group" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/vision-bg.jpg')" }}></div>
              <div className="absolute inset-0 bg-blue-400/80 group-hover:bg-orange-600 transition-all duration-500"></div>
              <div className="relative z-10 h-full flex flex-col justify-center items-center p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
                <p className="text-white text-lg text-center vision-text">
                  To build a stronger Indonesia by laying a resilient and sustainable foundation of infrastructure that empowers communities, drives economic growth, and inspires future generations.
                </p>
              </div>
            </motion.div>

            {/* Kotak Mission */}
            <motion.div className="relative h-80 rounded-xl overflow-hidden cursor-pointer group" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/mission-bg.jpg')" }}></div>
              <div className="absolute inset-0 bg-orange-600 group-hover:bg-blue-400/80 transition-all duration-500"></div>
              <div className="relative z-10 h-full flex flex-col justify-center items-center p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Mission</h3>
                <ol className="list-decimal pl-5 space-y-3 text-white text-left mission-text">
                  <li>To responsibly harness natural resources with integrity and a deep commitment to environmental stewardship.</li>
                  <li>To deliver exceptional value and trusted partnerships for our customers, collaborators, and stakeholders.</li>
                  <li>To foster human potential and advance coastal regions through inclusive and sustainable development initiatives.</li>
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CSS */}
      <style jsx>{`
        /* Media Query untuk Mobile */
        @media (max-width: 768px) {
          /* Kotak Vision */
          .vision-text {
            font-size: 0.8rem !important;
          }

          /* Kotak Mission */
          .mission-text {
            font-size: 0.6rem !important;
          }

          /* List dalam Mission */
          .grid.md\:grid-cols-2 > div:nth-child(2) ol {
            font-size: 1.1rem !important;
          }

          /* List item dalam Mission */
          .grid.md\:grid-cols-2 > div:nth-child(2) ol li {
            font-size: 1.1rem !important;
          }
        }
        /* --- Akhir Media Query Mobile --- */
      `}</style>

      {/* Good Corporate Governance Section (unchanged) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">Good Corporate Governance</h2>
            <p className="text-gray-700">
              At PT Teraju Usaha Sukses, we are deeply committed to upholding the principles of Good Corporate Governance (GCG) across every aspect of our operations. Our approach is guided by five core values —{" "}
              <strong>Transparency</strong>, <strong>Accountability</strong>, <strong>Responsibility</strong>, <strong>Independence</strong>, and <strong>Fairness</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                desc: "We prioritize openness in all business activities by providing clear, accurate, and timely information to stakeholders — including customers, partners, and investors — enabling them to make informed and confident decisions based on reliable data.",
                icon: "icons/Transparansi.svg",
              },
              {
                title: "Accountability",
                desc: "We stand fully responsible for every decision and action we take. At PT Teraju Usaha Sukses, all operations are conducted with careful oversight and are answerable to our primary stakeholders, including the government, partners, and local communities.",
                icon: "icons/Akuntabilitas.svg",
              },
              {
                title: "Responsibility",
                desc: "We embrace our role as a socially responsible corporate citizen. Our commitment includes implementing eco-friendly mining practices and initiating impactful community development programs that bring lasting benefits to the environment and the people in our areas of operation.",
                icon: "icons/Responsibilitas.svg",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-orange-600 p-8 rounded-xl shadow-lg text-center cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={`/${item.icon}`} alt={item.title} className="w-14 h-14 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-blue-400 mb-4">{item.title}</h3>
                <p className="text-white">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History Section (unchanged) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Discover Our <span className="text-blue-400">Journey</span> and Future Aspirations Towards Sustainable Resource Development
              </h2>
              <p className="text-lg text-gray-800 mb-6">
                Explore how we harness the potential of natural sedimentation through responsible sand mining to deliver high-quality materials that meet international standards. With a strong foothold in the region, our company has
                successfully expanded operations beyond local borders, supplying premium-grade sand to markets such as Singapore.
              </p>
              <p className="text-gray-800">
                Through environmentally conscious methods and continuous innovation, we aim to lead the future of sediment mining. Our experienced team is committed to upholding the highest standards in quality, safety, and environmental
                stewardship.
              </p>

              <div className="bg-blue-400 p-6 rounded-xl shadow-md mt-8">
                <h2 className="text-xl font-bold mb-2">Our Purpose</h2>
                <p className="text-white">Focus on delivering sustainable and innovative solutions in the marine sand industry to support infrastructure development and economic growth both locally and globally.</p>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Fundamental Principles</h2>
                <div className="flex flex-wrap gap-4">
                  <span className="inline-block bg-blue-400 text-white px-4 py-2 rounded-full">Trustworthiness</span>
                  <span className="inline-block bg-blue-400 text-white px-4 py-2 rounded-full">Quality</span>
                  <span className="inline-block bg-blue-400 text-white px-4 py-2 rounded-full">Creativity</span>
                  <span className="inline-block bg-blue-400 text-white px-4 py-2 rounded-full">Response</span>
                  <span className="inline-block bg-blue-400 text-white px-4 py-2 rounded-full">Collaboration</span>
                  <span className="inline-block bg-blue-400 text-white px-4 py-2 rounded-full">Growth Mindset</span>
                </div>
              </div>
            </motion.div>

            {/* Kanan: Gambar */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex justify-center">
              <img src="/Journey.png" alt="Company history" className="rounded-xl shadow-lg max-w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* -------------------------
         Legality Section (PDF)
         ------------------------- */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Company Legality Documents</h2>
            <p className="text-lg text-gray-700">Legal Documents to Support Our Operational</p>
          </div>

          {/* Grid Dokumen */}
          <div className="grid md:grid-cols-4 gap-6">
            {documentsList.map((item, index) => (
              <motion.div key={index} className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group" whileHover={{ y: -10 }} transition={{ duration: 0.3 }} onClick={() => openDoc(item.file)}>
                {/* Thumbnail (opsional) */}
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: item.image ? `url('${item.image}')` : "none", backgroundColor: item.image ? undefined : "#EDF2F7" }}>
                  {!item.image && <div className="h-full flex items-center justify-center text-gray-600">📄 {item.name}</div>}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{item.name}</h3>
                  <p className="text-gray-700 text-center">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Modal PDF Viewer (scroll all pages) */}
          {selectedDoc && (
            <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50" onClick={closeDoc}>
              <div className="relative bg-white rounded-lg shadow-xl w-full max-w-5xl h-[90vh] overflow-auto p-4" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-3">
                  <div className="font-semibold">Preview — {selectedDoc}</div>
                  <div className="flex items-center gap-2">
                    <a href={selectedDoc} target="_blank" rel="noreferrer" className="text-sm text-blue-700 underline">
                      Open in new tab
                    </a>
                    <button onClick={closeDoc} className="bg-gray-200 px-3 py-1 rounded">
                      Close ✖
                    </button>
                  </div>
                </div>

                <div className="flex-1">
                  {pdfError && <div className="text-red-600 mb-4">Failed to load document: {pdfError}</div>}

                  <Document
                    file={{ url: selectedDoc }}
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                    onLoadError={(err) => {
                      console.error("react-pdf load error:", err);
                      setPdfError(err?.message || "Unknown error");
                    }}
                    loading={<div className="text-center py-12">Loading document...</div>}
                  >
                    {/* Render semua halaman (scrollable) */}
                    {numPages &&
                      Array.from(new Array(numPages), (el, i) => (
                        <div key={`page_${i + 1}`} className="flex justify-center my-4">
                          <Page
                            pageNumber={i + 1}
                            width={pageWidth}
                            renderTextLayer={false} // matiin lapisan teks
                            renderAnnotationLayer={false} // matiin highlight/link
                          />
                        </div>
                      ))}
                  </Document>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Leadership Team Section (unchanged) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Gambar Struktur Organisasi */}
          <div className="text-center mb-16">
            <img 
              src="/struktur.png" 
              alt="Struktur Organisasi PT Teraju Usaha Sukses" 
              className="w-full max-w-4xl h-auto rounded-xl shadow-lg mx-auto"
            />
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Profiles of Board Members</h2>
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
                <img src={member.image} alt={member.name || member.position} className="w-full h-[380px] object-cover" />
                <div className="absolute bottom-0 w-full bg-blue-200/80 group-hover:translate-y-0 translate-y-full transition-transform duration-500 p-4 backdrop-blur-md">
                  <h3 className="text-lg font-bold text-gray-900">{member.name || "(--)"}</h3>
                  <p className="text-orange-600 font-semibold">{member.position}</p>
                  <p className="text-sm text-gray-700 mt-1">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
