"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const weDo = [
  { text: "Provide awareness", emoji: "👁️" },
  { text: "Support emotional clarity", emoji: "💭" },
  { text: "Facilitate reflective insight", emoji: "🪞" },
  { text: "Encourage better wellbeing journeys", emoji: "🌱" },
  { text: "Communicate honestly and respectfully", emoji: "🤝" },
];

const weDoNot = [
  { text: "Diagnose", emoji: "🚫" },
  { text: "Treat illness", emoji: "🚫" },
  { text: "Promise cures", emoji: "🚫" },
  { text: "Replace medical care", emoji: "🚫" },
];

export default function EthicsPage() {
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
      <section className="py-24 bg-neo-blue relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-30"></div>
        <div className="absolute top-10 right-10 w-40 h-40 border-8 border-neo-black rotate-12 hidden lg:block animate-float"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-neo-yellow border-4 border-neo-black -rotate-6 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <span className="inline-block px-6 py-3 bg-neo-black text-neo-white font-black uppercase text-sm mb-6">
              Our Values
            </span>
            <h1 className="text-display text-neo-black leading-none">
              OUR COMMITMENT
              <span className="block text-neo-white">TO</span>
              <span className="block">RESPONSIBILITY</span>
            </h1>
            <p className="mt-8 text-2xl font-bold text-neo-black/80">
              We take ethics, maturity and clarity very seriously.
            </p>
          </div>
        </div>
      </section>

      {/* Do / Don't */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* We DO */}
            <div className="scroll-animate neo-border-thick bg-neo-green p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-neo-black text-neo-white flex items-center justify-center text-3xl font-black">
                  ✓
                </div>
                <h2 className="text-3xl font-black uppercase">WE DO</h2>
              </div>
              <ul className="space-y-4">
                {weDo.map((item) => (
                  <li key={item.text} className="flex items-center gap-4 neo-border-sm bg-neo-white p-4 neo-hover">
                    <span className="text-2xl">{item.emoji}</span>
                    <span className="font-bold text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* We DO NOT */}
            <div className="scroll-animate neo-border-thick bg-neo-black p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-neo-red text-neo-white flex items-center justify-center text-3xl font-black">
                  ✕
                </div>
                <h2 className="text-3xl font-black uppercase text-neo-white">WE DO NOT</h2>
              </div>
              <ul className="space-y-4">
                {weDoNot.map((item) => (
                  <li key={item.text} className="flex items-center gap-4 border-4 border-neo-white/30 bg-neo-black p-4">
                    <span className="text-2xl">{item.emoji}</span>
                    <span className="font-bold text-lg text-neo-white">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-neo-pink relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="scroll-animate">
            <span className="inline-block px-6 py-2 bg-neo-black text-neo-white font-black uppercase text-sm mb-6">
              Our Philosophy
            </span>
            <h2 className="text-heading mb-8">
              OUR POSITIONING
              <span className="text-neo-white"> PHILOSOPHY</span>
            </h2>

            <div className="space-y-6">
              <div className="neo-border bg-neo-white p-8">
                <p className="text-xl font-medium leading-relaxed">
                  Everything we do is positioned <span className="highlight-yellow">responsibly</span> and{" "}
                  <span className="highlight-blue">ethically</span>. We believe in the power of wellness
                  to support human flourishing, but we also understand the importance of clear boundaries.
                </p>
              </div>

              <div className="neo-border bg-neo-white p-8">
                <p className="text-xl font-medium leading-relaxed">
                  Our services are designed to <strong>complement, not replace</strong>, professional medical care.
                  We provide awareness, support, and insight — creating space for deeper self-understanding
                  and emotional clarity.
                </p>
              </div>

              <div className="neo-border bg-neo-white p-8">
                <p className="text-xl font-medium leading-relaxed">
                  We communicate with maturity, avoiding hype, sensationalism, or exaggerated claims.
                  Our clients trust us because we respect both them and the boundaries of our work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate neo-border-thick bg-neo-yellow p-12 text-center">
            <span className="text-6xl block mb-6">🛡️</span>
            <h2 className="text-heading mb-6">OUR PROMISE</h2>
            <p className="text-2xl font-bold leading-relaxed">
              We will always communicate honestly, position our services responsibly,
              and maintain the highest ethical standards in everything we do.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-neo-black text-neo-white font-black uppercase text-sm">
                Honest
              </span>
              <span className="px-6 py-3 bg-neo-black text-neo-white font-black uppercase text-sm">
                Responsible
              </span>
              <span className="px-6 py-3 bg-neo-black text-neo-white font-black uppercase text-sm">
                Ethical
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neo-cyan relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-30"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="neo-border-thick bg-neo-white p-16 text-center scroll-animate">
            <span className="text-6xl block mb-6">💬</span>
            <h2 className="text-heading mb-4">QUESTIONS ABOUT OUR APPROACH?</h2>
            <p className="text-xl font-bold mb-8">
              We&apos;re happy to discuss our ethics and responsibility practices in more detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="neo-btn px-10 py-5 bg-neo-black text-neo-white text-xl font-black uppercase inline-block"
              >
                Start a Conversation →
              </Link>
              <Link
                href="/services"
                className="neo-btn px-10 py-5 bg-neo-green text-neo-black text-xl font-black uppercase inline-block"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
