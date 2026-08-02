"use client";

import Link from "next/link";
import { ArrowRight, Send } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 text-xl font-bold tracking-widest text-slate-900 group">
          <span className="font-sans text-2xl tracking-widest font-extrabold text-slate-900 uppercase">HORIZON</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <Link href="#universities" className="hover:text-[#1a3c34] transition-colors">
            Universities
          </Link>
          <Link href="#courses" className="hover:text-[#1a3c34] transition-colors">
            Courses
          </Link>
          <Link href="#compare" className="hover:text-[#1a3c34] transition-colors">
            Compare
          </Link>
          <Link href="#journal" className="hover:text-[#1a3c34] transition-colors">
            Journal
          </Link>
          <Link href="#about" className="hover:text-[#1a3c34] transition-colors">
            About Us
          </Link>
        </nav>

        {/* CTA Button */}
        <div>
          <Link
            href="#compare"
            className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-md"
          >
            <span>Find My Horizon</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-white -rotate-45" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
