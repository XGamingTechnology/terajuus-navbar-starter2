import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "The Business", href: "#business" },
  { name: "News", href: "#news" },
  { name: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    const handleHashChange = () => setActiveLink(window.location.hash || "#hero");

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-5 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-1">
          TERAJU <span className="text-blue-700">US</span>
        </a>

        <nav className="hidden md:flex space-x-14">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`group relative text-base font-medium transition-colors duration-300 ${activeLink === link.href ? "text-blue-700" : "text-gray-700 hover:text-blue-700"}`}>
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-700 transition-all duration-300 ${activeLink === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-900 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2 transition"
          aria-expanded={menuOpen}
          aria-label="Toggle mobile menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`md:hidden overflow-hidden bg-white/95 backdrop-blur-sm transition-all duration-500 ease-in-out ${menuOpen ? "max-h-60 border-t border-gray-200" : "max-h-0"}`}>
        <nav className="max-w-screen-xl mx-auto px-4 lg:px-8 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setMenuOpen(false);
                setActiveLink(link.href);
              }}
              className={`text-lg font-medium transition-colors duration-200 ${activeLink === link.href ? "text-blue-700" : "text-gray-800 hover:text-blue-700"}`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
