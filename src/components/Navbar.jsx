import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navText = scrolled ? "text-black" : "text-white";

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div
          className={`text-2xl font-semibold tracking-wide transition-colors duration-500 ${navText}`}
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          <img src="/logo.png" alt="Logo" className="h-10"  />
        </div>

        {/* Desktop links */}
        <ul
          className={`hidden md:flex gap-8 font-medium transition-colors duration-500 ${navText}`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {["home", "about", "portfolio", "services", "kindwords", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:opacity-60 transition-opacity duration-200"
              >
                {item === "kindwords"
                  ? "Kind Words"
                  : item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* ✅ Book Now - desktop */}
        <a
          href="https://wa.me/918975102118?text=Hi%20I%20want%20to%20book%20a%20wedding%20shoot"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className={`hidden md:block px-6 py-2 rounded-full border transition-all duration-500 ${
            scrolled
              ? "bg-black text-white border-black hover:bg-gray-800"
              : "bg-white text-black border-white hover:bg-white/90"
          }`}
        >
          Book Now
        </a>

        {/* Hamburger - mobile */}
        <button
          className={`md:hidden transition-colors duration-500 ${navText}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden bg-white px-6 py-6 space-y-4 text-black shadow-lg"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {["home", "about", "portfolio", "services", "kindwords", "contact"].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="block cursor-pointer hover:opacity-70 transition"
            >
              {item === "kindwords"
                ? "Kind Words"
                : item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}

          {/* ✅ Book Now - mobile */}
          <a
            href="https://wa.me/918975102118"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;