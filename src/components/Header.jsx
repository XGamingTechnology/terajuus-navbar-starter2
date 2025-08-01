"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "The Business", href: "/business" },
  { name: "News", href: "/news" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Hook untuk mendeteksi URL saat ini

  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center text-xl font-bold tracking-wide text-gray-900 space-x-2">
          <span className="text-orange-800">TERAJU</span>
          <span className="relative">
            <span className="text-gray-800">USAHA SUKSES</span>
            <span className="absolute -right-3 top-1/2 transform -translate-y-1/2 h-8 w-[2px] bg-blue-800 opacity-60"></span>
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-medium relative group px-3 py-2 rounded-lg transition-all duration-300 ${location.pathname === link.href ? "bg-orange-200 text-black font-semibold" : "text-gray-700 hover:text-blue-700"}`}
            >
              {link.name}
              {location.pathname === link.href && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>}
              {location.pathname !== link.href && <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-300"></span>}
            </Link>
          ))}
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-900">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white border-t px-6 py-4">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className={`block py-3 px-4 rounded-lg mb-2 ${location.pathname === link.href ? "bg-orange-200 text-black font-semibold" : "text-gray-700"}`} onClick={() => setMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
