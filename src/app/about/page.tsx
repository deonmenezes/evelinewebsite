"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const values = [
  { title: "Thoughtful Design", description: "Not hype", emoji: "🎨", color: "bg-neo-yellow" },
  { title: "Emotional Intelligence", description: "Not sensationalism", emoji: "❤️", color: "bg-neo-pink" },
  { title: "Insight-Driven", description: "Meaningful conversations", emoji: "💡", color: "bg-neo-blue" },
  { title: "Premium Care", description: "Human-centered approach", emoji: "✨", color: "bg-neo-green" },
  { title: "Strong Ethics", description: "Clear boundaries always", emoji: "🛡️", color: "bg-neo-purple" },
];

const evolution = [
  { item: "Experiential wellness", emoji: "🌊" },
  { item: "Intelligent frequency insight", emoji: "📊" },
  { item: "Light & sound therapy", emoji: "✨" },
  { item: "Human coaching", emoji: "🎯" },
  { item: "Organizational clarity consulting", emoji: "💼" },
];

export default function AboutPage() {
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
      <section className="py-24 bg-neo-orange relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-30"></div>
        <div className="absolute top-10 right-10 w-40 h-40 border-8 border-neo-black rotate-12 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-6 py-3 bg-neo-black text-neo-white font-black uppercase text-sm mb-6">
                Who We Are
              </span>
              <h1 className="text-display text-neo-black leading-none">
                THE
                <span className="block text-neo-white">DORKSENSE</span>
                <span className="block">STORY</span>
              </h1>
            </div>
            <div className="neo-border-thick bg-neo-white p-8">
              <div className="relative w-32 h-32 mx-auto">
                <Image
                  src="/logoum.png"
                  alt="Dorksense Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mt-6 text-xl font-bold text-center">
                Breaking the mold of traditional wellness since day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-neo-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="neo-border-thick bg-neo-yellow p-12 scroll-animate">
            <span className="text-6xl block mb-6">🎯</span>
            <p className="text-2xl font-bold leading-relaxed">
              We&apos;re passionate about building{" "}
              <span className="highlight-pink">responsible</span>,{" "}
              <span className="highlight-blue">emotionally intelligent</span>, transformational wellness
              experiences — grounded in maturity, ethics, human depth, and premium quality.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neo-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-6 py-2 bg-neo-yellow text-neo-black font-black uppercase text-sm mb-6">
              Our DNA
            </span>
            <h2 className="text-heading text-neo-white">
              WHAT DEFINES
              <span className="text-neo-pink"> OUR WORK</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 scroll-animate">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`neo-border ${value.color} p-6 text-center neo-hover`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-5xl block mb-4">{value.emoji}</span>
                <h3 className="text-lg font-black uppercase mb-1">{value.title}</h3>
                <p className="text-sm font-bold opacity-70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution */}
      <section className="py-24 bg-neo-blue relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate">
              <span className="inline-block px-6 py-2 bg-neo-black text-neo-white font-black uppercase text-sm mb-6">
                Our Journey
              </span>
              <h2 className="text-heading text-neo-black mb-6">
                OUR
                <span className="text-neo-white"> EVOLUTION</span>
              </h2>
              <p className="text-xl font-bold mb-8">
                Along with our foundation in quantum diagnostic systems, we&apos;ve evolved to include:
              </p>

              <ul className="space-y-4">
                {evolution.map((item, index) => (
                  <li
                    key={item.item}
                    className="flex items-center gap-4 neo-border-sm bg-neo-white p-4 neo-hover"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-3xl">{item.emoji}</span>
                    <span className="text-lg font-bold">{item.item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="scroll-animate">
              <div className="neo-border-thick bg-neo-yellow p-10">
                <span className="text-6xl block mb-6">💪</span>
                <p className="text-xl font-bold italic">
                  All while maintaining the same maturity, integrity, responsibility, and scientific
                  respect that we&apos;ve always believed in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intention */}
      <section className="py-24 bg-neo-pink relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-30"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="neo-border-thick bg-neo-white p-16 text-center scroll-animate">
            <span className="inline-block px-6 py-2 bg-neo-black text-neo-white font-black uppercase text-sm mb-6">
              Our Why
            </span>
            <h2 className="text-heading mb-8">OUR INTENTION</h2>
            <p className="text-2xl font-medium mb-6">Our work is driven by a simple intention:</p>
            <p className="text-3xl md:text-4xl font-black text-neo-pink leading-tight">
              Help people feel clearer, calmer, and more connected to themselves and their lives.
            </p>
            <p className="mt-8 text-xl font-bold">If that resonates — we&apos;d love to talk.</p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="neo-btn px-10 py-5 bg-neo-black text-neo-white text-xl font-black uppercase inline-block"
              >
                Start a Conversation →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
