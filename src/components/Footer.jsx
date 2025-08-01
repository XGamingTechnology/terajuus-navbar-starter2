// components/Footer.tsx
import { FaInstagram, FaTiktok, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* KIRI - Informasi Perusahaan */}
        <div>
          <h3 className="text-xl font-bold mb-2">PT. Teraju Usaha Sukses</h3>
          <p className="text-sm text-gray-400">
            Treasury Office Tower, 7th Floor Unit I, SCBD, District 8 Lot 28,
            <br />
            Jl. Tulodong Atas 2 No. 28, Senayan, Kebayoran Baru, Jakarta Selatan, DKI Jakarta, 12190
            <br />
            Telp: Coming Soon
            <br />
            Email: terajuusahasukses@tus-com.net
          </p>
        </div>

        {/* TENGAH - Slogan & Quote */}
        <div className="text-center">
          <h4 className="text-lg font-semibold italic mb-2">“Mining the future responsibly”</h4>
          <p className="text-sm text-gray-400">
            "The sea, once it casts its spell, holds one in its net of wonder forever."
            <br />– Jacques Yves Cousteau
          </p>
        </div>

        {/* KANAN - Social Media */}
        <div className="flex flex-col items-start md:items-end">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4 text-xl text-white">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaTiktok />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaLinkedin />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500">&copy; {new Date().getFullYear()} PT. Teraju Usaha Sukses. All rights reserved.</div>
    </footer>
  );
}
