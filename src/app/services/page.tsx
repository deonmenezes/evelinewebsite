"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "qscan",
    title: "QSCAN Frequency Insight",
    subtitle: "Frequency Insight",
    tagline: "See what others can't see",
    description: "A sophisticated bioenergetic insight system that explores connections between stress, emotional load, vitality, lifestyle influence and energetic balance.",
    benefits: ["Supports awareness", "Builds emotional clarity", "Offers perspective on stress", "Helps understand mind–body balance"],
    note: "This is NOT diagnosis and NOT medical treatment. QScan provides awareness and clarity.",
    color: "bg-neo-yellow",
    icon: "📊",
    accent: "border-neo-yellow",
    image: "/qs.png",
  },
  {
    id: "light-sound",
    title: "Light & Sound Therapy (Supertuning)",
    subtitle: "Supertuning Therapy",
    tagline: "Experience deep transformation",
    description: "A deeply calming experiential therapy using carefully tuned light and sound frequencies to support emotional balance and inner alignment.",
    benefits: ["Deep relaxation", "Emotional release", "Mental clarity", "Nervous system calming"],
    note: "A premium wellness experience — not a medical procedure.",
    color: "bg-neo-pink",
    icon: "✨",
    accent: "border-neo-pink",
    image: "/ls.png",
  },
  {
    id: "coaching",
    title: "Coaching for Behavioral Change, Wellbeing & Peak Performance",
    subtitle: "Peak Performance",
    tagline: "Unlock your potential",
    description: "For individuals and corporate clients. We help people understand themselves better, build emotional resilience, break unhelpful patterns, and feel grounded and confident.",
    benefits: ["1:1 Coaching", "Small Group Journeys", "Leadership Development", "Corporate Wellbeing Programs"],
    note: "Human. Mature. Confidential.",
    color: "bg-neo-blue",
    icon: "🎯",
    accent: "border-neo-blue",
    image: "/cs.png",
  },
  {
    id: "consulting",
    title: "Business & Leadership Consulting (Powered by Quantum Insight)",
    subtitle: "Quantum Leadership",
    tagline: "Lead with clarity",
    description: "For organizations and leadership teams who want clarity, direction, and emotionally healthier environments.",
    benefits: ["Reflect strategically", "Understand team dynamics", "Build aligned decisions", "Shape better cultures"],
    note: "Quietly powerful. Strategic. Responsible.",
    color: "bg-neo-green",
    icon: "💼",
    accent: "border-neo-green",
    image: "/bs.png",
  },
];

export default function ServicesPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);

  useEffect(() => {
    // Trigger hero animation on mount
    setTimeout(() => setHeroVisible(true), 100);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.add("animate-slide-up");
            
            // Animate benefits with stagger
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
      <section className="py-24 bg-neo-purple relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-20"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-neo-pink/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-neo-yellow/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neo-blue/10 rounded-full blur-3xl animate-float"></div>
        
        {/* Animated decorative elements */}
        <div className={`absolute top-10 right-10 w-32 h-32 border-8 border-neo-black rotate-12 hidden lg:block transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-x-0 rotate-12' : 'opacity-0 translate-x-20 rotate-45'}`}>
          <div className="w-full h-full bg-neo-yellow/40 animate-pulse"></div>
          <div className="absolute inset-2 border-4 border-neo-black/50 animate-spin-slow"></div>
        </div>
        <div className={`absolute bottom-20 left-10 w-24 h-24 bg-neo-yellow border-4 border-neo-black hidden lg:block transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-x-0 -rotate-6' : 'opacity-0 -translate-x-20 rotate-12'}`}>
          <div className="absolute inset-0 bg-neo-pink/30 animate-pulse"></div>
        </div>
        
        {/* More floating particles with varied animations */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-neo-pink rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-neo-yellow rounded-full animate-bounce-neo opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-neo-blue rounded-full animate-float opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-20 left-1/3 w-2 h-2 bg-neo-green rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-32 right-1/4 w-5 h-5 border-2 border-neo-yellow rotate-45 animate-spin-slow opacity-40"></div>
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-neo-cyan rounded-full animate-bounce-neo opacity-50" style={{ animationDelay: '0.3s' }}></div>
        
        {/* Animated lines */}
        <div className={`absolute top-1/3 left-0 h-1 bg-neo-yellow/50 transition-all duration-1000 delay-500 ${heroVisible ? 'w-32' : 'w-0'}`}></div>
        <div className={`absolute top-1/2 right-0 h-1 bg-neo-pink/50 transition-all duration-1000 delay-700 ${heroVisible ? 'w-48' : 'w-0'}`}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl">
            {/* Animated badge */}
            <span className={`inline-block px-6 py-3 bg-neo-black text-neo-white font-black uppercase text-sm mb-6 border-4 border-neo-white transition-all duration-700 hover:scale-105 hover:bg-neo-pink hover:border-neo-black cursor-default ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-neo-yellow rounded-full animate-ping"></span>
                Our Arsenal
              </span>
            </span>
            
            <h1 className="text-display text-neo-white leading-none">
              <span className={`block transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                A PREMIUM SUITE OF HUMAN
              </span>
              <span className={`block transition-all duration-700 delay-300 whitespace-nowrap ${heroVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`} style={{ transformOrigin: 'left center' }}>
                <span className="relative inline-block">
                  <span className="hero-gradient-text">TRANSFORMATION</span>
                  <span className="absolute -bottom-2 left-0 h-2 bg-neo-yellow w-full transform origin-left transition-transform duration-1000 delay-700" style={{ transform: heroVisible ? 'scaleX(1)' : 'scaleX(0)' }}></span>
                </span>
              </span>
              <span className={`block transition-all duration-700 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                SERVICES
              </span>
            </h1>
            
            {/* Animated journey path */}
            <div className={`mt-8 text-2xl font-bold text-neo-white/80 max-w-2xl transition-all duration-700 delay-700 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="flex flex-wrap items-center gap-1">
                <span className="inline-block hover:text-neo-yellow hover:scale-110 transition-all duration-300 cursor-default">Insight</span>
                <span className="inline-block mx-2 text-neo-pink animate-pulse">→</span>
                <span className="inline-block hover:text-neo-pink hover:scale-110 transition-all duration-300 cursor-default">Experience</span>
                <span className="inline-block mx-2 text-neo-yellow animate-pulse" style={{ animationDelay: '0.2s' }}>→</span>
                <span className="inline-block hover:text-neo-blue hover:scale-110 transition-all duration-300 cursor-default">Growth</span>
                <span className="inline-block mx-2 text-neo-blue animate-pulse" style={{ animationDelay: '0.4s' }}>→</span>
                <span className="inline-block hover:text-neo-green hover:scale-110 transition-all duration-300 cursor-default">Impact</span>
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div className={`mt-12 transition-all duration-1000 delay-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-3 text-neo-white/60">
                <div className="w-6 h-10 border-2 border-neo-white/60 rounded-full flex justify-center pt-2">
                  <div className="w-1.5 h-3 bg-neo-white/80 rounded-full animate-bounce"></div>
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">Scroll to explore</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-neo-white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-neo-white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-neo-white"></path>
          </svg>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-animate grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Visual Card */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""} group`}>
                  <div className={`neo-border-thick ${service.color} p-12 relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-rotate-1 ${activeService === service.id ? 'shadow-2xl' : ''}`}>
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    
                    {/* Animated corner icon */}
                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-neo-black border-4 border-neo-black flex items-center justify-center text-4xl z-10 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                      <span className="animate-float group-hover:animate-bounce-neo">{service.icon}</span>
                    </div>
                    
                    {/* Decorative animated circles */}
                    <div className={`absolute -bottom-4 -left-4 w-16 h-16 ${service.color} border-4 border-neo-black rounded-full opacity-50 transition-all duration-700 group-hover:scale-150 group-hover:opacity-30`}></div>
                    
                    {service.image ? (
                      <div className="relative overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={600}
                          height={400}
                          className="w-full h-auto rounded-lg border-4 border-neo-black transition-all duration-700 group-hover:scale-105"
                        />
                        {/* Image overlay glow */}
                        <div className={`absolute inset-0 ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`}></div>
                      </div>
                    ) : (
                      <>
                        <span className="text-[120px] leading-none font-black opacity-20 transition-all duration-500 group-hover:opacity-40 group-hover:scale-110">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="mt-4">
                          <h3 className="text-4xl font-black uppercase">{service.title}</h3>
                          <p className="text-xl font-bold mt-2">{service.subtitle}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} group`}>
                  {/* Animated accent bar */}
                  <span className={`inline-block w-16 h-2 ${service.color} mb-6 transition-all duration-500 group-hover:w-32`}></span>
                  
                  <h2 className="text-heading mb-2 transition-all duration-300 hover:translate-x-2">{service.title}</h2>
                  
                  {/* Animated tagline */}
                  <p className="text-xl font-bold text-neo-pink mb-4 relative">
                    <span className="relative inline-block transition-all duration-300 hover:scale-105">
                      {service.tagline}
                      <span className="absolute -bottom-1 left-0 w-0 h-1 bg-neo-pink transition-all duration-500 group-hover:w-full"></span>
                    </span>
                  </p>
                  
                  <p className="text-lg mb-8 transition-all duration-300">{service.description}</p>

                  <div className="mb-8">
                    <h4 className="font-black uppercase text-sm tracking-widest mb-4 flex items-center gap-2">
                      <span className={`w-3 h-3 ${service.color} animate-pulse`}></span>
                      Key Benefits
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li 
                          key={benefit} 
                          className="benefit-item flex items-center gap-3 opacity-0 translate-y-4 transition-all duration-500"
                          style={{ transitionDelay: `${benefitIndex * 100}ms` }}
                        >
                          <span className={`w-8 h-8 ${service.color} border-3 border-neo-black flex items-center justify-center font-bold transition-all duration-300 hover:scale-110 hover:rotate-12`}>
                            ✓
                          </span>
                          <span className="font-bold hover:text-neo-pink transition-colors duration-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Animated note box */}
                  <div className={`neo-border-sm bg-neo-white p-6 ${service.accent} transition-all duration-500 hover:translate-x-2 hover:shadow-lg relative overflow-hidden group/note`}>
                    <div className={`absolute inset-0 ${service.color} opacity-0 group-hover/note:opacity-10 transition-opacity duration-300`}></div>
                    <p className="font-bold text-neo-black/70 italic relative z-10">{service.note}</p>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className={`neo-btn px-8 py-4 ${service.color} text-neo-black font-black uppercase inline-block relative overflow-hidden group/btn transition-all duration-300 hover:scale-105`}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Let&apos;s Talk About This 
                        <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
                      </span>
                      <div className="absolute inset-0 bg-neo-black/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neo-black relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-10"></div>
        
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neo-purple/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-neo-pink/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-neo-yellow/20 rounded-full blur-2xl animate-float"></div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-10 w-8 h-8 border-4 border-neo-yellow rotate-45 animate-spin-slow opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-neo-pink animate-bounce-neo opacity-40"></div>
        <div className="absolute top-1/3 right-10 w-4 h-4 bg-neo-blue rounded-full animate-float opacity-40" style={{ animationDelay: '0.5s' }}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center scroll-animate">
            <span className="inline-block px-6 py-2 bg-neo-yellow text-neo-black font-black uppercase text-sm mb-6 border-4 border-neo-white animate-bounce-neo hover:scale-110 transition-transform duration-300 cursor-default">
              Ready?
            </span>
            <h2 className="text-heading text-neo-white mb-6 group">
              <span className="inline-block transition-all duration-300 hover:scale-105">LET&apos;S FIND YOUR</span>
              <span className="block text-neo-pink relative">
                <span className="relative inline-block animate-pulse hover:animate-none transition-all duration-300 hover:scale-110">PERFECT FIT</span>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-neo-pink transition-all duration-500 group-hover:w-full"></span>
              </span>
            </h2>
            <p className="text-xl text-neo-white/70 mb-10 max-w-2xl mx-auto transition-all duration-500 hover:text-neo-white/90">
              Not sure which service is right for you? Let&apos;s have a conversation and explore together.
            </p>
            <Link
              href="/contact"
              className="neo-btn px-12 py-5 bg-neo-yellow text-neo-black text-xl font-black uppercase inline-block relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:-rotate-1"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start a Conversation 
                <span className="inline-block transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125">→</span>
              </span>
              {/* Animated background sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-neo-pink via-neo-purple to-neo-pink bg-[length:200%_100%] opacity-0 group-hover:opacity-30 group-hover:animate-gradient-shift transition-opacity duration-300"></div>
              {/* Sparkle effect */}
              <div className="absolute top-0 left-0 w-full h-full">
                <span className="absolute top-1 left-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>
                <span className="absolute bottom-2 right-4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.2s' }}></span>
              </div>
            </Link>
            
            {/* Animated underline decoration */}
            <div className="mt-12 flex justify-center items-center gap-4">
              <span className="w-12 h-1 bg-neo-pink animate-pulse"></span>
              <span className="w-4 h-4 border-2 border-neo-yellow rotate-45 animate-spin-slow"></span>
              <span className="w-12 h-1 bg-neo-pink animate-pulse" style={{ animationDelay: '0.5s' }}></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
