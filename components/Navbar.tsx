"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Publishing",
    href: "/publishing",
    children: [
      { label: "Translation Record", href: "/publishing#translations" },
      { label: "Distribution Points", href: "/publishing#distribution" },
      { label: "Publishing Plan", href: "/publishing#plan" },
    ],
  },
  { label: "Education", href: "/education" },
  {
    label: "Multimedia",
    href: "#",
    children: [
      { label: "YouTube Channel", href: "https://youtube.com/@PanarionCenter", external: true },
      { label: "Free E-Books", href: "/shop" },
      { label: "Activities", href: "/about#discussions" },
    ],
  },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gold-100"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="bg-byzantine-600 text-white text-xs py-1.5 px-4 flex justify-center sm:justify-between items-center gap-4">
        <span className="hidden sm:block">info@panarion.org</span>
        <div className="flex gap-4">
          <a href="tel:01220020525" className="hover:text-gold-400 transition-colors">
            +20 122 002 0525
          </a>
          <a href="tel:0224146374" className="hover:text-gold-400 transition-colors hidden sm:block">
            +20 22 414 6374
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div
              className={`transition-all duration-300 rounded-xl px-3 py-1.5 ${
                scrolled
                  ? "bg-transparent shadow-none"
                  : "bg-white/95 shadow-md"
              }`}
            >
              <Image
                src="/logo.png"
                alt="Panarion Center"
                width={160}
                height={52}
                className="h-10 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label} className="relative group">
                {link.children ? (
                  <>
                    <button
                      onMouseEnter={() => setDropdown(link.label)}
                      onMouseLeave={() => setDropdown(null)}
                      className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        scrolled
                          ? "text-gray-700 hover:text-byzantine-600"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    <div
                      onMouseEnter={() => setDropdown(link.label)}
                      onMouseLeave={() => setDropdown(null)}
                      className={`absolute top-full left-0 pt-1 transition-all duration-200 ${
                        dropdown === link.label
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[180px] overflow-hidden">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            target={(child as { external?: boolean }).external ? "_blank" : undefined}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-byzantine-50 hover:text-byzantine-600 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      scrolled
                        ? "text-gray-700 hover:text-byzantine-600"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="ml-2 px-4 py-2 bg-gold-400 hover:bg-gold-500 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
              >
                Get in Touch
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled ? "text-byzantine-600" : "text-white"
            }`}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-gray-800 hover:text-byzantine-600 hover:bg-byzantine-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-4 mt-1 space-y-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 text-xs text-gray-600 hover:text-byzantine-600 hover:bg-byzantine-50 rounded-lg transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-2 border-t border-gray-100">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-4 py-2.5 bg-gold-400 hover:bg-gold-500 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
