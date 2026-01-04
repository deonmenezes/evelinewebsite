"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const audiences = [
  {
    id: "wellness-centers",
    title: "Premium Wellness Centers",
    tagline: "Meaningful differentiation for transformational destinations",
    emoji: "🏛️",
    color: "bg-neo-yellow",
    benefits: [
      "Stand out with intelligent frequency wellness offerings",
      "Build deeper client relationships and trust",
      "Create premium experiential journeys",
      "Establish a transformational identity",
    ],
    cta: "Partner With Us",
    ctaHref: "/partnership",
  },
  {
    id: "practitioners",
    title: "Holistic & Integrative Practitioners",
    tagline: "Intelligent insight tools for deeper practice",
    emoji: "❤️",
    color: "bg-neo-pink",
    benefits: [
      "Enhance client assessments with frequency insights",
      "Complement existing holistic modalities",
      "Support deeper emotional understanding",
      "Work with ethically positioned tools",
    ],
    cta: "Explore Services",
    ctaHref: "/services",
  },
  {
    id: "coaches",
    title: "Coaches & Transformation Professionals",
    tagline: "Responsibly positioned energetic insight",
    emoji: "🎯",
    color: "bg-neo-blue",
    benefits: [
      "Add depth to coaching conversations",
      "Support client self-awareness journeys",
      "Enhance transformation outcomes",
      "Maintain ethical professional boundaries",
    ],
    cta: "Learn About Coaching",
    ctaHref: "/services#coaching",
  },
  {
    id: "leaders",
    title: "Business Leaders & Organisations",
    tagline: "Emotional clarity for healthier leadership",
    emoji: "💼",
    color: "bg-neo-green",
    benefits: [
      "Gain strategic clarity and direction",
      "Understand team emotional dynamics",
      "Build stronger leadership grounding",
      "Create healthier performance cultures",
    ],
    cta: "Explore Consulting",
    ctaHref: "/services#consulting",
  },
  {
    id: "individuals",
    title: "Individuals Seeking Clarity, Calm & Balance",
    tagline: "Grounding and emotional lightness for life",
    emoji: "✨",
    color: "bg-neo-purple",
    benefits: [
      "Gain deeper self-understanding",
      "Experience emotional grounding",
      "Find clarity in life direction",
      "Feel supported on your wellness journey",
    ],
    cta: "Start Your Journey",
    ctaHref: "/contact",
  },
];

export default function WhoWeServePage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    // Trigger hero animation on mount
    setTimeout(() => setHeroVisible(true), 100);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.add("animate-slide-up");
            
            // Animate benefit items with stagger
            const benefits = entry.target.querySelectorAll('.benefit-item');
            benefits.forEach((benefit, index) => {
              setTimeout(() => {
                benefit.classList.add('benefit-visible');
              }, index * 100);
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
      <section className="py-24 bg-neo-green relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-20"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-neo-yellow/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-neo-pink/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neo-cyan/10 rounded-full blur-3xl animate-float"></div>
        
        {/* Animated decorative elements */}
        <div className={`absolute top-10 right-10 w-40 h-40 border-8 border-neo-black hidden lg:block transition-all duration-1000 ${heroVisible ? 'opacity-100 -rotate-12 translate-x-0' : 'opacity-0 rotate-12 translate-x-20'}`}>
          <div className="w-full h-full bg-neo-yellow/30 animate-pulse"></div>
          <div className="absolute inset-2 border-4 border-neo-black/30 animate-spin-slow"></div>
        </div>
        <div className={`absolute bottom-10 left-10 w-24 h-24 bg-neo-pink border-4 border-neo-black hidden lg:block transition-all duration-1000 ${heroVisible ? 'opacity-100 rotate-6 translate-x-0' : 'opacity-0 -rotate-12 -translate-x-20'}`}>
          <div className="absolute inset-0 bg-neo-purple/20 animate-pulse"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-neo-yellow rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 left-1/3 w-6 h-6 bg-neo-pink rounded-full animate-bounce-neo opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-neo-purple rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-neo-blue rounded-full animate-bounce-neo opacity-50"></div>
        <div className="absolute bottom-32 left-1/4 w-5 h-5 border-2 border-neo-black rotate-45 animate-spin-slow opacity-30"></div>
        
        {/* Animated lines */}
        <div className={`absolute top-1/3 left-0 h-1 bg-neo-yellow/60 transition-all duration-1000 delay-500 ${heroVisible ? 'w-32' : 'w-0'}`}></div>
        <div className={`absolute bottom-1/3 right-0 h-1 bg-neo-pink/60 transition-all duration-1000 delay-700 ${heroVisible ? 'w-48' : 'w-0'}`}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <span className={`inline-block px-6 py-3 bg-neo-black text-neo-white font-black uppercase text-sm mb-6 transition-all duration-700 hover:scale-105 hover:bg-neo-purple cursor-default ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-neo-green rounded-full animate-ping"></span>
                Our People
              </span>
            </span>
            <h1 className="text-display text-neo-black leading-none">
              <span className={`block transition-all duration-700 delay-100 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                WHO WE
              </span>
              <span className={`block text-neo-white transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <span className="hero-gradient-text">WORK</span>
              </span>
              <span className={`block transition-all duration-700 delay-300 relative ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                WITH
                <span className="absolute -bottom-2 left-0 h-2 bg-neo-pink transition-all duration-1000 delay-700" style={{ width: heroVisible ? '120px' : '0px' }}></span>
              </span>
            </h1>
            <p className={`mt-8 text-2xl font-bold text-neo-black/80 max-w-2xl transition-all duration-700 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              We serve those who value depth, emotional grounding, maturity, and premium human experience.
            </p>
            
            {/* Scroll indicator */}
            <div className={`mt-12 transition-all duration-1000 delay-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-3 text-neo-black/60">
                <div className="w-6 h-10 border-2 border-neo-black/60 rounded-full flex justify-center pt-2">
                  <div className="w-1.5 h-3 bg-neo-black/80 rounded-full animate-bounce"></div>
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">Discover who we serve</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-neo-white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-neo-white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-neo-white"></path>
          </svg>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-40 right-0 w-64 h-64 bg-neo-yellow/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-0 w-48 h-48 bg-neo-pink/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neo-green/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {audiences.map((audience, index) => (
              <div
                key={audience.id}
                id={audience.id}
                className={`scroll-animate neo-border-thick ${audience.color} p-8 lg:p-12 group relative overflow-hidden transition-all duration-500 hover:scale-[1.01] ${
                  index % 2 === 0 ? "hover:-rotate-[0.5deg]" : "lg:ml-12 hover:rotate-[0.5deg]"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                
                {/* Corner decoration */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-neo-black/10 rotate-12 transition-all duration-500 group-hover:rotate-45 group-hover:scale-150"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
                  {/* Icon */}
                  <div className={`lg:col-span-2 ${index % 2 === 1 ? "lg:order-last" : ""}`}>
                    <div className="w-32 h-32 bg-neo-white border-4 border-neo-black flex items-center justify-center mx-auto rotate-3 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-xl">
                      <span className="text-6xl transition-all duration-500 group-hover:scale-125">{audience.emoji}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10">
                    <span className="inline-block px-4 py-2 bg-neo-black text-neo-white font-bold text-sm uppercase mb-4 transition-all duration-300 group-hover:translate-x-2">
                      {audience.tagline}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black uppercase transition-all duration-300 group-hover:translate-x-1">
                      {audience.title}
                    </h2>

                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {audience.benefits.map((benefit, benefitIndex) => (
                        <li 
                          key={benefit} 
                          className="benefit-item flex items-start opacity-0 translate-y-4 transition-all duration-500"
                          style={{ transitionDelay: `${benefitIndex * 100}ms` }}
                        >
                          <span className="w-8 h-8 bg-neo-black text-neo-white flex items-center justify-center text-lg font-black mr-3 flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-12">
                            ✓
                          </span>
                          <span className="font-bold text-lg transition-all duration-300 hover:translate-x-1">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Link
                        href={audience.ctaHref}
                        className="neo-btn px-8 py-4 bg-neo-black text-neo-white font-black uppercase inline-block relative overflow-hidden group/btn transition-all duration-300 hover:scale-105"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {audience.cta}
                          <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
                        </span>
                        <div className={`absolute inset-0 ${audience.color} opacity-0 group-hover/btn:opacity-30 transition-opacity duration-300`}></div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neo-orange relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-30"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neo-yellow/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-neo-pink/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Floating decorations */}
        <div className="absolute top-10 left-10 w-6 h-6 border-4 border-neo-black rotate-45 animate-spin-slow opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-neo-pink animate-bounce-neo opacity-50"></div>
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-neo-yellow rounded-full animate-float opacity-40"></div>
        <div className="absolute bottom-10 left-1/3 w-5 h-5 border-2 border-neo-black animate-ping opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="neo-border-thick bg-neo-white p-16 text-center scroll-animate group transition-all duration-500 hover:scale-[1.02]">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neo-orange/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <span className="text-6xl block mb-6 transition-all duration-500 group-hover:scale-125 animate-bounce-neo">🤔</span>
            <h2 className="text-heading mb-4 transition-all duration-300 group-hover:scale-105">
              <span className="inline-block hover:text-neo-purple transition-colors duration-300">NOT SURE WHERE TO START?</span>
            </h2>
            <p className="text-xl font-bold mb-8 transition-all duration-300">
              Let&apos;s have a calm conversation about your needs and explore what might be right for you.
            </p>
            <Link
              href="/contact"
              className="neo-btn px-10 py-5 bg-neo-black text-neo-white text-xl font-black uppercase inline-block relative overflow-hidden group/btn transition-all duration-300 hover:scale-105 hover:-rotate-1"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start a Conversation
                <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
              </span>
              <div className="absolute inset-0 bg-neo-green/30 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
            </Link>
            
            {/* Decorative animated elements */}
            <div className="mt-10 flex justify-center items-center gap-4">
              <span className="w-12 h-1 bg-neo-orange animate-pulse"></span>
              <span className="w-4 h-4 border-2 border-neo-green rotate-45 animate-spin-slow"></span>
              <span className="w-12 h-1 bg-neo-orange animate-pulse" style={{ animationDelay: '0.5s' }}></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
