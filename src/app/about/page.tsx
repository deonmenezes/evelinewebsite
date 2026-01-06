"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.add("animate-slide-up");
            
            // Animate value cards with stagger
            const valueCards = entry.target.querySelectorAll('.value-card');
            valueCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('card-visible');
              }, index * 100);
            });
            
            // Animate evolution items with stagger
            const evolutionItems = entry.target.querySelectorAll('.evolution-item');
            evolutionItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('benefit-visible');
              }, index * 150);
            });
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
      <section className="py-24 bg-neo-orange relative">
        <div className="absolute inset-0 stripes opacity-30"></div>
        <div className="absolute top-10 right-10 w-40 h-40 border-8 border-neo-black rotate-12 hidden lg:block animate-spin-slow"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-neo-yellow neo-border animate-float opacity-80"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-neo-pink neo-border animate-bounce-neo opacity-80 hidden md:block"></div>
        <div className="absolute top-1/2 left-5 w-8 h-8 bg-neo-blue neo-border rotate-45 animate-float hidden lg:block" style={{ animationDelay: '0.5s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="min-w-0">
              <span className={`inline-block px-6 py-3 bg-neo-black text-neo-white font-black uppercase text-sm mb-6 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Who We Are
              </span>
              <h1 className="text-display text-neo-black leading-tight">
                <span className={`block transition-all duration-700 delay-100 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>OUR</span>
                <span className={`block hero-gradient-text transition-all duration-700 delay-200 py-2 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>WELLNESS</span>
                <span className={`block transition-all duration-700 delay-300 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>STORY</span>
              </h1>
            </div>
            <div className={`neo-border-thick bg-neo-white p-8 transition-all duration-1000 delay-500 hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] hover:-translate-y-2 lg:-mt-4 lg:ml-auto lg:translate-x-16 ${heroVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-12 rotate-6'}`}>
              <div className="relative w-32 h-32 mx-auto animate-float">
                <Image
                  src="/logoum.png"
                  alt="Logo"
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
      <section className="py-24 bg-neo-white relative overflow-hidden">
        {/* Background gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-neo-yellow/20 to-neo-pink/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="neo-border-thick bg-neo-yellow p-12 scroll-animate hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 group">
            <span className="text-6xl block mb-6 group-hover:animate-bounce-neo">🎯</span>
            <p className="text-2xl font-bold leading-relaxed">
              We&apos;re passionate about building{" "}
              <span className="highlight-pink relative inline-block hover:scale-110 transition-transform cursor-default">responsible</span>,{" "}
              <span className="highlight-blue relative inline-block hover:scale-110 transition-transform cursor-default">emotionally intelligent</span>, transformational wellness
              experiences — grounded in maturity, ethics, human depth, and premium quality.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neo-black relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-[10%] w-4 h-4 bg-neo-yellow rounded-full animate-float opacity-50"></div>
          <div className="absolute top-40 right-[15%] w-6 h-6 bg-neo-pink rounded-full animate-bounce-neo opacity-50" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute bottom-32 left-[25%] w-3 h-3 bg-neo-blue rounded-full animate-float opacity-50" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute bottom-20 right-[30%] w-5 h-5 bg-neo-green rounded-full animate-bounce-neo opacity-50" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute top-1/2 left-[5%] w-4 h-4 bg-neo-purple rounded-full animate-float opacity-50" style={{ animationDelay: '1.2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-6 py-2 bg-neo-yellow text-neo-black font-black uppercase text-sm mb-6 hover:scale-110 transition-transform cursor-default">
              Our DNA
            </span>
            <h2 className="text-heading text-neo-white">
              WHAT DEFINES
              <span className="text-neo-pink hero-gradient-text"> OUR WORK</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 scroll-animate">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`value-card neo-border ${value.color} p-6 text-center neo-hover opacity-0 translate-y-8 transition-all duration-500 group hover:scale-105 hover:-rotate-2`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-5xl block mb-4 group-hover:animate-bounce-neo transition-all">{value.emoji}</span>
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
        
        {/* Floating shapes */}
        <div className="absolute top-10 right-10 w-20 h-20 border-4 border-neo-black rotate-45 animate-spin-slow opacity-60"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 border-4 border-neo-white rounded-full animate-float opacity-60"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate">
              <span className="inline-block px-6 py-2 bg-neo-black text-neo-white font-black uppercase text-sm mb-6 hover:bg-neo-yellow hover:text-neo-black transition-colors">
                Our Journey
              </span>
              <h2 className="text-heading text-neo-black mb-6">
                OUR
                <span className="text-neo-white hero-gradient-text"> EVOLUTION</span>
              </h2>
              <p className="text-xl font-bold mb-8">
                Along with our foundation in quantum diagnostic systems, we&apos;ve evolved to include:
              </p>

              <ul className="space-y-4">
                {evolution.map((item, index) => (
                  <li
                    key={item.item}
                    className="evolution-item flex items-center gap-4 neo-border-sm bg-neo-white p-4 neo-hover opacity-0 translate-x-8 transition-all duration-500 group hover:translate-x-2"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <span className="text-3xl group-hover:animate-bounce-neo">{item.emoji}</span>
                    <span className="text-lg font-bold">{item.item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="scroll-animate">
              <div className="neo-border-thick bg-neo-yellow p-10 hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 group">
                <span className="text-6xl block mb-6 group-hover:animate-bounce-neo">💪</span>
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
        
        {/* Animated gradient orbs */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-neo-yellow to-neo-orange rounded-full blur-2xl opacity-30 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-r from-neo-purple to-neo-blue rounded-full blur-2xl opacity-30 animate-bounce-neo" style={{ animationDelay: '0.5s' }}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="neo-border-thick bg-neo-white p-16 text-center scroll-animate hover:shadow-[16px_16px_0_0_rgba(0,0,0,1)] transition-all duration-300 group">
            <span className="inline-block px-6 py-2 bg-neo-black text-neo-white font-black uppercase text-sm mb-6 group-hover:bg-neo-pink group-hover:text-neo-black transition-colors">
              Our Why
            </span>
            <h2 className="text-heading mb-8">OUR INTENTION</h2>
            <p className="text-2xl font-medium mb-6">Our work is driven by a simple intention:</p>
            <p className="text-3xl md:text-4xl font-black text-neo-pink leading-tight relative">
              <span className="relative z-10">Help people feel clearer, calmer, and more connected to themselves and their lives.</span>
              <span className="absolute inset-0 bg-gradient-to-r from-neo-yellow/20 to-neo-pink/20 blur-xl -z-10"></span>
            </p>
            <p className="mt-8 text-xl font-bold">If that resonates — we&apos;d love to talk.</p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="neo-btn px-10 py-5 bg-neo-black text-neo-white text-xl font-black uppercase inline-block hover:bg-neo-pink hover:text-neo-black hover:scale-105 hover:-rotate-1 transition-all duration-300 relative overflow-hidden group/btn"
              >
                <span className="relative z-10">Start a Conversation →</span>
                <span className="absolute inset-0 bg-neo-yellow -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 -z-0"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
