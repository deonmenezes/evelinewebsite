"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "/", color: "bg-neo-yellow" },
  { name: "Services", href: "/services", color: "bg-neo-pink" },
  { name: "Products", href: "/products", color: "bg-neo-blue" },
  { name: "Who We Serve", href: "/who-we-serve", color: "bg-neo-green" },
  { name: "Partnership", href: "/partnership", color: "bg-neo-purple" },
  { name: "About", href: "/about", color: "bg-neo-orange" },
  { name: "FAQ", href: "/faq", color: "bg-neo-cyan" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neo-white border-b-4 border-neo-black shadow-[0_4px_0_0_#0a0a0a]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="relative w-12 h-12 neo-border-sm bg-neo-white overflow-hidden group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[7px_7px_0_0_#0a0a0a] transition-all">
              <Image
                src="/logoum.png"
                alt="Dorksense Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <span className="text-2xl font-black uppercase tracking-tight hidden sm:block">
              DORK<span className="text-neo-pink">SENSE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-bold uppercase tracking-wide border-3 border-neo-black ${item.color} hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_0_#0a0a0a] transition-all`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="neo-btn px-6 py-3 bg-neo-black text-neo-white text-sm font-bold uppercase"
            >
              Let&apos;s Talk →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden neo-border-sm p-3 bg-neo-yellow hover:bg-neo-pink transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-1 bg-neo-black transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`h-1 bg-neo-black transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-1 bg-neo-black transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 space-y-3">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-6 py-4 text-lg font-bold uppercase border-4 border-neo-black ${item.color} hover:translate-x-[-4px] hover:shadow-[8px_8px_0_0_#0a0a0a] transition-all`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-6 py-4 text-lg font-bold uppercase border-4 border-neo-black bg-neo-black text-neo-white hover:bg-neo-pink hover:text-neo-black transition-all"
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s Talk →
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
