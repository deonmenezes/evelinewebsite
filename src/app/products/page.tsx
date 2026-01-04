"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
  const [heroVisible, setHeroVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);

  useEffect(() => {
    // Trigger hero animation on mount
    setTimeout(() => setHeroVisible(true), 100);
    setTimeout(() => setFeaturesVisible(true), 600);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.add("animate-slide-up");
            
            // Animate highlight cards with stagger
            const cards = entry.target.querySelectorAll('.highlight-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('card-visible');
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
      <section className="py-24 bg-neo-purple relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-30"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-neo-pink/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-neo-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Animated decorative elements */}
        <div className={`absolute top-10 right-10 w-40 h-40 border-8 border-neo-black hidden lg:block transition-all duration-1000 ${heroVisible ? 'opacity-100 rotate-12 translate-x-0' : 'opacity-0 rotate-45 translate-x-20'}`}>
          <div className="w-full h-full bg-neo-yellow/30 animate-pulse"></div>
          <div className="absolute inset-2 border-4 border-neo-black/30 animate-spin-slow"></div>
        </div>
        <div className={`absolute bottom-10 left-10 w-32 h-32 bg-neo-yellow border-4 border-neo-black hidden lg:block transition-all duration-1000 ${heroVisible ? 'opacity-100 -rotate-6 translate-x-0' : 'opacity-0 rotate-12 -translate-x-20'}`}>
          <div className="absolute inset-0 bg-neo-pink/20 animate-pulse"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-neo-yellow rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-neo-pink rounded-full animate-bounce-neo opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-neo-cyan rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-1/2 left-20 w-2 h-2 bg-neo-green rounded-full animate-bounce-neo opacity-50"></div>
        
        {/* Animated lines */}
        <div className={`absolute top-1/3 left-0 h-1 bg-neo-yellow/60 transition-all duration-1000 delay-500 ${heroVisible ? 'w-24' : 'w-0'}`}></div>
        <div className={`absolute bottom-1/3 right-0 h-1 bg-neo-pink/60 transition-all duration-1000 delay-700 ${heroVisible ? 'w-32' : 'w-0'}`}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <span className={`inline-block px-6 py-3 bg-neo-black text-neo-white font-black uppercase text-sm mb-6 transition-all duration-700 hover:scale-105 hover:bg-neo-pink cursor-default ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-neo-yellow rounded-full animate-ping"></span>
                Products & Tools
              </span>
            </span>
            <h1 className="text-display text-neo-black leading-none">
              <span className={`block transition-all duration-700 delay-100 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                PROTXS
              </span>
              <span className={`block text-neo-white transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                NEXTGEN
              </span>
              <span className={`block transition-all duration-700 delay-300 relative ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="hero-gradient-text">5G+ SHIELD</span>
                <span className="absolute -bottom-2 left-0 h-2 bg-neo-yellow transition-all duration-1000 delay-700" style={{ width: heroVisible ? '200px' : '0px' }}></span>
              </span>
            </h1>
            <p className={`mt-8 text-2xl font-bold text-neo-black/80 transition-all duration-700 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Supportive wellness technology for the modern world.
            </p>
            
            {/* Scroll indicator */}
            <div className={`mt-12 transition-all duration-1000 delay-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-3 text-neo-black/60">
                <div className="w-6 h-10 border-2 border-neo-black/60 rounded-full flex justify-center pt-2">
                  <div className="w-1.5 h-3 bg-neo-black/80 rounded-full animate-bounce"></div>
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">Discover more</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-neo-black"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-neo-black"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-neo-black"></path>
          </svg>
        </div>
      </section>

      {/* Feature Tags */}
      <section className="py-8 bg-neo-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-neo-purple/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-neo-pink/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-wrap justify-center gap-4">
            {features.map((feature, index) => (
              <span
                key={feature.label}
                className={`${feature.color} px-6 py-3 border-4 border-neo-white font-black uppercase text-sm neo-hover transition-all duration-500 hover:scale-110 hover:-rotate-2 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {feature.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-neo-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-48 h-48 bg-neo-yellow/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Product Visual */}
            <div className="scroll-animate group">
              <div className="neo-border-thick bg-neo-cyan p-12 relative transition-all duration-500 hover:scale-[1.02] hover:-rotate-1">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                
                {/* Animated corner decoration */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-neo-yellow border-4 border-neo-black rotate-12 transition-all duration-500 group-hover:rotate-45 group-hover:scale-110">
                  <div className="absolute inset-0 bg-neo-pink/20 animate-pulse"></div>
                </div>
                
                {/* Floating particles around product */}
                <div className="absolute top-10 left-10 w-3 h-3 bg-neo-yellow rounded-full animate-float opacity-60"></div>
                <div className="absolute bottom-20 right-10 w-2 h-2 bg-neo-pink rounded-full animate-bounce-neo opacity-60"></div>
                
                <div className="text-center py-8 relative">
                  {/* Glow effect behind image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 bg-neo-yellow/30 rounded-full blur-3xl animate-pulse"></div>
                  </div>
                  
                  <div className="w-80 h-auto mx-auto relative">
                    <Image
                      src="/xs.png"
                      alt="PROTXS EMF/WiFi Protection"
                      width={480}
                      height={720}
                      className="w-full h-auto drop-shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3 relative z-10"
                    />
                  </div>
                  <p className="mt-8 text-xl font-black uppercase relative z-10 transition-all duration-300 group-hover:text-neo-purple">PROTXS NextGen Shield</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="scroll-animate group">
              <span className="inline-block px-4 py-2 bg-neo-yellow border-4 border-neo-black font-black uppercase text-sm mb-6 transition-all duration-300 hover:scale-105 hover:bg-neo-pink cursor-default">
                What is PROTXS?
              </span>
              <h2 className="text-heading group/title">
                <span className="inline-block transition-all duration-300 hover:translate-x-2">HARMONIZE YOUR</span>
                <span className="text-neo-purple relative inline-block">
                  <span className="transition-all duration-300 hover:scale-105 inline-block"> DIGITAL LIFE</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-neo-purple transition-all duration-500 group-hover/title:w-full"></span>
                </span>
              </h2>
              <p className="mt-6 text-xl font-medium leading-relaxed transition-all duration-500 hover:translate-x-1">
                PROTXS is a supportive wellness technology designed to help harmonize and
                neutralize disruptive electromagnetic frequencies (EMF) from everyday wireless
                environments such as mobile devices, Wi-Fi, smart technology and 5G networks —
                while maintaining full connectivity performance.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={highlight.title}
                    className={`highlight-card neo-border p-6 relative overflow-hidden opacity-0 translate-y-8 transition-all duration-500 group/card hover:scale-105 hover:-rotate-1 ${
                      index % 2 === 0 ? "bg-neo-yellow" : "bg-neo-pink"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-700"></div>
                    
                    <span className="text-4xl block mb-3 transition-all duration-300 group-hover/card:scale-125 group-hover/card:rotate-12">{highlight.emoji}</span>
                    <h3 className="font-black uppercase text-lg transition-all duration-300 group-hover/card:translate-x-1">{highlight.title}</h3>
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
        
        {/* Animated background orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-neo-yellow/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-neo-pink/30 rounded-full blur-2xl animate-bounce-neo" style={{ animationDelay: '0.5s' }}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="neo-border-thick bg-neo-white p-12 scroll-animate group transition-all duration-500 hover:scale-[1.01] hover:-rotate-[0.5deg]">
            {/* Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neo-orange/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <div className="flex items-start gap-6 relative">
              <span className="text-6xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">⚠️</span>
              <div>
                <h3 className="text-2xl font-black uppercase mb-4 transition-all duration-300 group-hover:translate-x-1">Positioning & Responsibility Note</h3>
                <p className="text-lg font-medium leading-relaxed">
                  This product is positioned as a <strong className="highlight-yellow">supportive wellbeing technology</strong>.
                  It is not a medical device, does not diagnose, treat, cure, or replace medical care.
                  It aligns with our responsible wellness philosophy.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-neo-green border-3 border-neo-black font-bold text-sm uppercase transition-all duration-300 hover:scale-110 hover:-rotate-2 cursor-default">
                    ✓ Ethically Positioned
                  </span>
                  <span className="px-4 py-2 bg-neo-blue border-3 border-neo-black font-bold text-sm uppercase transition-all duration-300 hover:scale-110 hover:rotate-2 cursor-default">
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
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neo-purple/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-neo-yellow/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Floating decorations */}
        <div className="absolute top-10 left-10 w-6 h-6 border-4 border-neo-black rotate-45 animate-spin-slow opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-neo-yellow animate-bounce-neo opacity-50"></div>
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-neo-pink rounded-full animate-float opacity-40"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="neo-border-thick bg-neo-white p-16 text-center scroll-animate group transition-all duration-500 hover:scale-[1.02]">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neo-cyan/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <span className="text-6xl block mb-6 transition-all duration-500 group-hover:scale-125 animate-bounce-neo">🛡️</span>
            <h2 className="text-heading mb-4 transition-all duration-300 group-hover:scale-105">
              <span className="inline-block hover:text-neo-purple transition-colors duration-300">INTERESTED IN PROTXS?</span>
            </h2>
            <p className="text-xl font-bold mb-8 transition-all duration-300">
              Learn more about how this supportive technology can complement your wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="neo-btn px-10 py-5 bg-neo-purple text-neo-white text-xl font-black uppercase inline-block relative overflow-hidden group/btn transition-all duration-300 hover:scale-105 hover:-rotate-1"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Inquire About PROTXS 
                  <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
                </span>
                <div className="absolute inset-0 bg-neo-pink/30 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
              </Link>
              <Link
                href="/faq"
                className="neo-btn px-10 py-5 bg-neo-yellow text-neo-black text-xl font-black uppercase inline-block relative overflow-hidden group/btn2 transition-all duration-300 hover:scale-105 hover:rotate-1"
              >
                <span className="relative z-10">Read FAQs</span>
                <div className="absolute inset-0 bg-neo-green/30 translate-y-full group-hover/btn2:translate-y-0 transition-transform duration-300"></div>
              </Link>
            </div>
            
            {/* Decorative animated elements */}
            <div className="mt-10 flex justify-center items-center gap-4">
              <span className="w-12 h-1 bg-neo-purple animate-pulse"></span>
              <span className="w-4 h-4 border-2 border-neo-cyan rotate-45 animate-spin-slow"></span>
              <span className="w-12 h-1 bg-neo-purple animate-pulse" style={{ animationDelay: '0.5s' }}></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
