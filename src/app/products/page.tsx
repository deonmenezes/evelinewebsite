"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const highlights = [
  { title: "Supports Energetic Balance", description: "Designed to help harmonize in high-exposure wireless environments", emoji: "⚡" },
  { title: "Full Connectivity", description: "Works without blocking or weakening signal strength", emoji: "📶" },
  { title: "Lightweight & Non-invasive", description: "Chemical-free design for everyday use", emoji: "🪶" },
  { title: "Modern Wellbeing Support", description: "Designed for technology-rich lifestyles", emoji: "🛡️" },
];

const features = [
  { label: "EMF Harmonization", color: "bg-neo-yellow" },
  { label: "5G Compatible", color: "bg-neo-pink" },
  { label: "Zero Signal Loss", color: "bg-neo-blue" },
  { label: "Premium Quality", color: "bg-neo-green" },
];

export default function ProductsPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="bg-neo-white pt-20">
      {/* Hero */}
      <section className="py-24 bg-neo-purple relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-30"></div>
        <div className="absolute top-10 right-10 w-40 h-40 border-8 border-neo-black rotate-12 hidden lg:block animate-float"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-neo-yellow border-4 border-neo-black -rotate-6 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <span className="inline-block px-6 py-3 bg-neo-black text-neo-white font-black uppercase text-sm mb-6">
              Products & Tools
            </span>
            <h1 className="text-display text-neo-black leading-none">
              PROTXS
              <span className="block text-neo-white">NEXTGEN</span>
              <span className="block">5G+ SHIELD</span>
            </h1>
            <p className="mt-8 text-2xl font-bold text-neo-black/80">
              Supportive wellness technology for the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Tags */}
      <section className="py-8 bg-neo-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {features.map((feature) => (
              <span
                key={feature.label}
                className={`${feature.color} px-6 py-3 border-4 border-neo-white font-black uppercase text-sm neo-hover`}
              >
                {feature.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Product Visual */}
            <div className="scroll-animate">
              <div className="neo-border-thick bg-neo-cyan p-12 relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-neo-yellow border-4 border-neo-black rotate-12"></div>
                <div className="text-center py-12">
                  <div className="w-48 h-48 mx-auto bg-neo-white border-8 border-neo-black flex items-center justify-center rotate-3 neo-hover">
                    <span className="text-8xl">🛡️</span>
                  </div>
                  <p className="mt-8 text-xl font-black uppercase">PROTXS NextGen Shield</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="scroll-animate">
              <span className="inline-block px-4 py-2 bg-neo-yellow border-4 border-neo-black font-black uppercase text-sm mb-6">
                What is PROTXS?
              </span>
              <h2 className="text-heading">
                HARMONIZE YOUR
                <span className="text-neo-purple"> DIGITAL LIFE</span>
              </h2>
              <p className="mt-6 text-xl font-medium leading-relaxed">
                PROTXS is a supportive wellness technology designed to help harmonize and
                neutralize disruptive electromagnetic frequencies (EMF) from everyday wireless
                environments such as mobile devices, Wi-Fi, smart technology and 5G networks —
                while maintaining full connectivity performance.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={highlight.title}
                    className={`neo-border p-6 neo-hover ${
                      index % 2 === 0 ? "bg-neo-yellow" : "bg-neo-pink"
                    }`}
                  >
                    <span className="text-4xl block mb-3">{highlight.emoji}</span>
                    <h3 className="font-black uppercase text-lg">{highlight.title}</h3>
                    <p className="mt-2 font-medium text-sm">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibility Note */}
      <section className="py-16 bg-neo-orange relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="neo-border-thick bg-neo-white p-12 scroll-animate">
            <div className="flex items-start gap-6">
              <span className="text-6xl">⚠️</span>
              <div>
                <h3 className="text-2xl font-black uppercase mb-4">Positioning & Responsibility Note</h3>
                <p className="text-lg font-medium leading-relaxed">
                  This product is positioned as a <strong className="highlight-yellow">supportive wellbeing technology</strong>.
                  It is not a medical device, does not diagnose, treat, cure, or replace medical care.
                  It aligns with our responsible wellness philosophy.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-neo-green border-3 border-neo-black font-bold text-sm uppercase">
                    ✓ Ethically Positioned
                  </span>
                  <span className="px-4 py-2 bg-neo-blue border-3 border-neo-black font-bold text-sm uppercase">
                    ✓ Responsibly Communicated
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neo-cyan relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-30"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="neo-border-thick bg-neo-white p-16 text-center scroll-animate">
            <span className="text-6xl block mb-6">🛡️</span>
            <h2 className="text-heading mb-4">INTERESTED IN PROTXS?</h2>
            <p className="text-xl font-bold mb-8">
              Learn more about how this supportive technology can complement your wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="neo-btn px-10 py-5 bg-neo-purple text-neo-white text-xl font-black uppercase inline-block"
              >
                Inquire About PROTXS →
              </Link>
              <Link
                href="/faq"
                className="neo-btn px-10 py-5 bg-neo-yellow text-neo-black text-xl font-black uppercase inline-block"
              >
                Read FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
