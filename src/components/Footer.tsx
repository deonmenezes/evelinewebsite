"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  services: [
    { name: "QScan Insight", href: "/services#qscan" },
    { name: "Light & Sound", href: "/services#light-sound" },
    { name: "Coaching", href: "/services#coaching" },
    { name: "Consulting", href: "/services#consulting" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Who We Serve", href: "/who-we-serve" },
    { name: "Partnership", href: "/partnership" },
    { name: "Ethics", href: "/ethics" },
  ],
  resources: [
    { name: "Products", href: "/products" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: "𝕏", href: "#" },
  { name: "Instagram", icon: "◉", href: "#" },
  { name: "LinkedIn", icon: "in", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-neo-black text-neo-white relative overflow-hidden">
      {/* Marquee Banner */}
      <div className="bg-neo-yellow border-y-4 border-neo-black py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="mx-8 text-neo-black font-black text-lg uppercase tracking-widest"
            >
              ★ Bold Wellness ★ Break The Mold ★ Find Clarity ★ Transform ★
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="relative w-16 h-16 border-4 border-neo-white bg-neo-white overflow-hidden group-hover:rotate-6 transition-transform">
                <Image
                  src="/logoum.png"
                  alt="Dorksense Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="text-4xl font-black uppercase tracking-tight">
                DORK<span className="text-neo-pink">SENSE</span>
              </span>
            </Link>
            <p className="mt-6 text-neo-white/70 text-lg max-w-sm leading-relaxed">
              Breaking the mold of traditional wellness. Bold transformations
              for bold humans. No fluff. Just results.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 border-3 border-neo-white bg-transparent flex items-center justify-center font-bold text-xl hover:bg-neo-pink hover:border-neo-pink hover:text-neo-black transition-all hover:rotate-6"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-neo-yellow font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-neo-yellow"></span>
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neo-white/70 hover:text-neo-yellow transition-colors font-medium hover:translate-x-2 inline-block"
                  >
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-neo-pink font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-neo-pink"></span>
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neo-white/70 hover:text-neo-pink transition-colors font-medium hover:translate-x-2 inline-block"
                  >
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & CTA */}
          <div className="lg:col-span-3">
            <h3 className="text-neo-blue font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-neo-blue"></span>
              Resources
            </h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neo-white/70 hover:text-neo-blue transition-colors font-medium hover:translate-x-2 inline-block"
                  >
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-neo-yellow text-neo-black font-black uppercase border-4 border-neo-white hover:bg-neo-pink hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_0_#fff] transition-all"
            >
              Let&apos;s Talk →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t-4 border-neo-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neo-white/50 text-sm font-medium">
              © {new Date().getFullYear()} DORKSENSE. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="px-4 py-2 border-2 border-neo-yellow text-neo-yellow text-xs font-bold uppercase">
                Bold
              </span>
              <span className="px-4 py-2 border-2 border-neo-pink text-neo-pink text-xs font-bold uppercase">
                Responsible
              </span>
              <span className="px-4 py-2 border-2 border-neo-blue text-neo-blue text-xs font-bold uppercase">
                Human
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-neo-yellow/20 rotate-12 hidden lg:block"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 border-4 border-neo-pink/20 -rotate-12 hidden lg:block"></div>
    </footer>
  );
}
