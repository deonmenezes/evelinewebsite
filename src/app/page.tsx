"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Counter animation hook
function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!start) return;
    
    let startTime: number | null = null;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);
  
  return count;
}

// Counter component
function AnimatedStat({ number, label, color, inView }: { number: string; label: string; color: string; inView: boolean }) {
  const numericValue = parseInt(number.replace(/[^0-9]/g, ''));
  const suffix = number.replace(/[0-9]/g, '');
  const count = useCountUp(numericValue, 2000, inView);
  
  return (
    <div className="text-center">
      <span className={`text-3xl sm:text-5xl md:text-6xl font-black ${color}`}>
        {count}{suffix}
      </span>
      <p className="text-neo-white font-bold uppercase tracking-wider mt-2 text-xs sm:text-sm md:text-base">
        {label}
      </p>
    </div>
  );
}

const services = [
  {
    title: "Intelligent Frequency Wellness (QScan)",
    description: "Frequency Insight",
    color: "bg-neo-yellow",
    icon: "📊",
    href: "/services#qscan",
  },
  {
    title: "Light & Sound Therapy (Supertuning)",
    description: "Supertuning Therapy",
    color: "bg-neo-pink",
    icon: "✨",
    href: "/services#light-sound",
  },
  {
    title: "Coaching for Behavioral Change",
    description: "Peak Performance",
    color: "bg-neo-blue",
    icon: "🎯",
    href: "/services#coaching",
  },
  {
    title: "Business and Leadership Consulting",
    description: "Leadership Insight",
    color: "bg-neo-green",
    icon: "💼",
    href: "/services#consulting",
  },
  {
    title: "Products",
    description: "PROTXS Shield NextGen 5G+ Shield",
    color: "bg-neo-purple",
    icon: "🛡️",
    href: "/products",
  },
];

const audiences = [
  { title: "Premium Wellness Centers", emoji: "🏢", color: "bg-neo-yellow" },
  { title: "Holistic & Integrative Practitioners", emoji: "❤️", color: "bg-neo-pink" },
  { title: "Coaches & Transformation Professionals", emoji: "👔", color: "bg-neo-blue" },
  { title: "Business Leaders & Organizations", emoji: "💼", color: "bg-neo-green" },
  { title: "Individuals seeking grounding, clarity & inner balance", emoji: "🧘", color: "bg-neo-red" },
];

const stats = [
  { number: "500+", label: "Happy Clients", color: "text-neo-yellow" },
  { number: "15+", label: "Years Experience", color: "text-neo-pink" },
  { number: "50+", label: "Partners", color: "text-neo-blue" },
  { number: "100%", label: "Commitment", color: "text-neo-green" },
];

// Stats grid with intersection observer
function StatsGrid({ stats }: { stats: Array<{ number: string; label: string; color: string }> }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="scroll-animate"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <AnimatedStat
            number={stat.number}
            label={stat.label}
            color={stat.color}
            inView={inView}
          />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [heroVisible, setHeroVisible] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
    
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
    <div className="bg-neo-white">
      {/* Hero Section */}
      <section className="min-h-screen pt-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 dots-pattern opacity-30"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-neo-yellow/20 to-neo-pink/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-neo-blue/20 to-neo-green/20 rounded-full blur-3xl animate-bounce-neo" style={{ animationDelay: '1s' }}></div>

        {/* Floating Shapes with enhanced animations */}
        <div className="absolute top-32 left-10 w-20 h-20 bg-neo-yellow border-4 border-neo-black rotate-12 animate-float hidden lg:block hover:scale-125 transition-transform"></div>
        <div className="absolute top-48 right-20 w-16 h-16 bg-neo-pink border-4 border-neo-black -rotate-12 animate-float hidden lg:block hover:scale-125 transition-transform" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-neo-blue border-4 border-neo-black rotate-45 animate-float hidden lg:block hover:scale-125 transition-transform" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-60 right-1/4 w-24 h-24 border-4 border-neo-black bg-neo-green rotate-6 animate-float hidden lg:block hover:scale-125 transition-transform" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute top-1/3 left-5 w-8 h-8 bg-neo-purple border-4 border-neo-black animate-spin-slow hidden lg:block"></div>
        <div className="absolute bottom-1/3 right-5 w-10 h-10 border-4 border-neo-black rounded-full animate-bounce-neo hidden lg:block" style={{ animationDelay: '0.7s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="inline-block">
                <span className={`px-6 py-3 bg-neo-yellow border-4 border-neo-black text-neo-black font-black uppercase tracking-widest text-sm transition-all duration-700 inline-block ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  ★ Elite Transformational Wellness ★
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                <span className={`block transition-all duration-700 delay-100 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                  Transformational
                </span>
                <span className={`block transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                  Wellness for{" "}
                </span>
                <span className={`block hero-gradient-text py-2 transition-all duration-700 delay-300 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                  Modern Living
                </span>
              </h1>

              <p className={`text-lg sm:text-xl md:text-2xl font-bold transition-all duration-700 delay-400 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Where <span className="highlight-yellow">Human Transformation</span> Meets{" "}
                <span className="highlight-pink">Intelligent Frequency Wellness</span>
              </p>

              <p className={`text-base sm:text-lg md:text-xl font-medium max-w-xl text-neo-black/80 transition-all duration-700 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                We help wellness centers, leaders, organizations, and individuals build deeper emotional clarity, grounding, and wellbeing — using intelligent frequency insights, light & sound therapy, and powerful human coaching.
              </p>

              <div className={`flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 transition-all duration-700 delay-[600ms] ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Link
                  href="/contact"
                  className="neo-btn px-6 sm:px-8 py-3 sm:py-4 bg-neo-black text-neo-white text-base sm:text-lg font-black uppercase hover:bg-neo-pink hover:text-neo-black hover:scale-105 hover:-rotate-1 transition-all duration-300 relative overflow-hidden group text-center"
                >
                  <span className="relative z-10">Start a Conversation</span>
                  <span className="absolute inset-0 bg-neo-yellow -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </Link>
                <Link
                  href="/services"
                  className="neo-btn px-6 sm:px-8 py-3 sm:py-4 bg-neo-yellow text-neo-black text-base sm:text-lg font-black uppercase hover:bg-neo-blue hover:scale-105 hover:rotate-1 transition-all duration-300 text-center"
                >
                  Explore Services
                </Link>
                <Link
                  href="/partnership"
                  className="neo-btn px-6 sm:px-8 py-3 sm:py-4 bg-neo-pink text-neo-black text-base sm:text-lg font-black uppercase hover:bg-neo-green hover:scale-105 hover:-rotate-1 transition-all duration-300 text-center"
                >
                  Partner With Us
                </Link>
              </div>
            </div>

            {/* Right Content - Hero Image/Card with hover animations */}
            <div 
              className={`relative transition-all duration-1000 delay-300 order-1 lg:order-2 ${heroVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-12 rotate-6'}`}
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            >
              <div className={`neo-border-thick bg-neo-white p-8 relative transition-all duration-500 ${logoHovered ? 'shadow-[16px_16px_0_0_rgba(0,0,0,1)] -translate-y-4 -translate-x-2' : ''}`}>
                <div className={`absolute -top-6 -right-6 w-24 h-24 bg-neo-pink border-4 border-neo-black flex items-center justify-center transition-all duration-500 ${logoHovered ? 'animate-spin-slow scale-110' : 'animate-spin-slow'}`}>
                  <span className="text-4xl">★</span>
                </div>

                <div className={`relative w-full aspect-[3/4] overflow-hidden border-4 border-neo-black transition-all duration-500 ${logoHovered ? 'scale-[1.02]' : ''}`}>
                  <Image
                    src="/UMMB.png"
                    alt="UMM Wellness Center"
                    fill
                    className={`object-cover transition-all duration-500 ${logoHovered ? 'scale-110' : 'scale-100'}`}
                  />
                </div>

                <div className="mt-6 flex gap-2">
                  {["Bold", "Human", "Real"].map((tag, i) => (
                    <span
                      key={tag}
                      className={`px-4 py-2 border-3 border-neo-black font-bold uppercase text-sm transition-all duration-300 hover:scale-110 hover:-rotate-3 cursor-default ${
                        i === 0 ? "bg-neo-yellow" : i === 1 ? "bg-neo-pink" : "bg-neo-blue"
                      } ${logoHovered ? 'translate-y-1' : ''}`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Floating particles on hover */}
                <div className={`absolute -top-4 -left-4 w-8 h-8 bg-neo-yellow border-2 border-neo-black transition-all duration-500 ${logoHovered ? 'opacity-100 -translate-x-4 -translate-y-4 rotate-45' : 'opacity-0'}`}></div>
                <div className={`absolute -bottom-4 -right-4 w-6 h-6 bg-neo-blue border-2 border-neo-black rounded-full transition-all duration-500 ${logoHovered ? 'opacity-100 translate-x-4 translate-y-4' : 'opacity-0'}`}></div>
                <div className={`absolute top-1/2 -right-6 w-4 h-4 bg-neo-green border-2 border-neo-black transition-all duration-500 ${logoHovered ? 'opacity-100 translate-x-6 rotate-12' : 'opacity-0'}`}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-neo transition-all duration-700 delay-[800ms] ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-12 h-20 border-4 border-neo-black bg-neo-white flex flex-col items-center pt-2 hover:bg-neo-yellow transition-colors">
            <div className="w-2 h-6 bg-neo-black animate-bounce"></div>
            <span className="text-xs font-bold mt-2 rotate-90">SCROLL</span>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="bg-neo-black py-4 border-y-4 border-neo-black overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="mx-8 text-neo-white font-black text-2xl uppercase tracking-widest"
            >
              <span className="text-neo-yellow">★</span> CLARITY{" "}
              <span className="text-neo-pink">★</span> CALM{" "}
              <span className="text-neo-blue">★</span> TRANSFORM{" "}
              <span className="text-neo-green">★</span> EMPOWER{" "}
            </span>
          ))}
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-24 bg-neo-yellow relative overflow-hidden">
        <div className="absolute inset-0 stripes pointer-events-none"></div>
        <div className="moving-lines pointer-events-none" style={{ zIndex: 1 }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 10 }}>
          <div className="text-center mb-8 sm:mb-16 scroll-animate">
            <span className="inline-block px-4 sm:px-6 py-2 bg-neo-black text-neo-white font-black uppercase text-xs sm:text-sm mb-4 sm:mb-6">
              Why This Matters Today
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">
              People Don&apos;t Want BOOORING
              <span className="block text-neo-pink retro-shadow-sm">Wellness Services Anymore</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 scroll-animate">
            {[
              { 
                title: "CLARITY", 
                desc: "Emotional understanding & self-awareness", 
                icon: "🔮", 
                color: "bg-neo-white",
                backTitle: "Gain Insight",
                backDesc: "Understand your emotional patterns, identify what's holding you back, and gain the self-awareness needed to make meaningful changes in your life."
              },
              { 
                title: "CALM", 
                desc: "Peace of mind & emotional grounding", 
                icon: "🌊", 
                color: "bg-neo-pink",
                backTitle: "Find Peace",
                backDesc: "Experience deep relaxation through frequency-based therapies, light & sound sessions, and techniques that help regulate your nervous system naturally."
              },
              { 
                title: "CONNECTION", 
                desc: "Feel seen, supported & truly understood", 
                icon: "💫", 
                color: "bg-neo-blue",
                backTitle: "Be Supported",
                backDesc: "Work with practitioners who genuinely care about your wellbeing. Build authentic relationships and feel part of a community that understands your journey."
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="flip-card h-56 sm:h-72 cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flip-card-inner h-full">
                  {/* Front */}
                  <div className={`flip-card-front neo-border ${item.color} p-4 sm:p-8 flex flex-col items-center justify-center text-center`}>
                    <span className="text-4xl sm:text-6xl block mb-2 sm:mb-4">{item.icon}</span>
                    <h3 className="text-xl sm:text-2xl font-black uppercase mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-lg font-medium">{item.desc}</p>
                  </div>
                  {/* Back */}
                  <div className={`flip-card-back neo-border ${item.color} p-4 sm:p-8 flex flex-col items-center justify-center text-center`}>
                    <h3 className="text-xl sm:text-2xl font-black uppercase mb-2 sm:mb-4">{item.backTitle}</h3>
                    <p className="text-xs sm:text-base font-medium leading-relaxed">{item.backDesc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-16 text-center text-xl font-bold max-w-3xl mx-auto scroll-animate">
            We help create wellness experiences that{" "}
            <span className="highlight-pink">truly touch people</span> —
            responsibly, ethically, and without exaggerated claims.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-neo-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-6 py-2 bg-neo-pink text-neo-black font-black uppercase text-sm mb-6 border-4 border-neo-black">
              Our Arsenal
            </span>
            <h2 className="text-heading">
              {"WHAT WE".split("").map((letter, i) => (
                <span key={i} className="bounce-letter cursor-default">
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
              <span className="text-neo-blue">
                {" DO".split("").map((letter, i) => (
                  <span key={i} className="bounce-letter cursor-default">
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 scroll-animate">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className={`service-card neo-border ${service.color} p-6 group relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-icon absolute -top-4 -right-4 text-6xl opacity-20">
                  {service.icon}
                </div>
                <span className="icon-bounce text-4xl block mb-4">{service.icon}</span>
                <h3 className="text-xl font-black uppercase mb-1 group-hover:text-neo-black transition-colors">{service.title}</h3>
                <p className="text-sm font-bold opacity-70 group-hover:opacity-100 transition-opacity">{service.description}</p>
                <div className="mt-4 flex items-center font-bold uppercase text-sm">
                  <span className="group-hover:tracking-wider transition-all">Explore</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-3 group-hover:scale-125 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Value Buttons */}
          <div className="mt-8 sm:mt-16 scroll-animate">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6">
              <div className="value-btn neo-border px-4 sm:px-8 py-3 sm:py-5 bg-neo-yellow flex items-center gap-3 sm:gap-4 cursor-default">
                <span className="btn-icon text-2xl sm:text-3xl">⭐</span>
                <div>
                  <h4 className="text-lg sm:text-xl font-black uppercase">Premium</h4>
                  <p className="text-xs font-bold opacity-70">Excellence in every detail</p>
                </div>
              </div>
              <div className="value-btn neo-border px-4 sm:px-8 py-3 sm:py-5 bg-neo-green flex items-center gap-3 sm:gap-4 cursor-default">
                <span className="btn-icon text-2xl sm:text-3xl">🛡️</span>
                <div>
                  <h4 className="text-lg sm:text-xl font-black uppercase">Responsible</h4>
                  <p className="text-xs font-bold opacity-70">Ethical & transparent</p>
                </div>
              </div>
              <div className="value-btn neo-border px-4 sm:px-8 py-3 sm:py-5 bg-neo-pink flex items-center gap-3 sm:gap-4 cursor-default">
                <span className="btn-icon text-2xl sm:text-3xl">💜</span>
                <div>
                  <h4 className="text-lg sm:text-xl font-black uppercase">Human</h4>
                  <p className="text-xs font-bold opacity-70">Real connection & care</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center scroll-animate">
            <Link
              href="/services"
              className="neo-btn px-10 py-4 bg-neo-black text-neo-white text-lg font-black uppercase inline-block"
            >
              See All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neo-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsGrid stats={stats} />
        </div>
      </section>

      {/* Who We Support */}
      <section className="py-24 bg-neo-blue relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-6 py-2 bg-neo-black text-neo-white font-black uppercase text-sm mb-6">
              Our Tribe
            </span>
            <h2 className="text-heading text-neo-black">
              WHO WE
              <span className="text-neo-white"> SUPPORT</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 scroll-animate">
            {audiences.map((audience, index) => (
              <Link
                key={audience.title}
                href="/who-we-serve"
                className={`audience-card neo-border ${audience.color} p-8 text-center group`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Particles */}
                <span className="particle" style={{ top: '20%', left: '20%', ['--tx' as string]: '-40px', ['--ty' as string]: '-60px' }}></span>
                <span className="particle" style={{ top: '30%', right: '20%', ['--tx' as string]: '50px', ['--ty' as string]: '-40px' }}></span>
                <span className="particle" style={{ bottom: '30%', left: '30%', ['--tx' as string]: '-30px', ['--ty' as string]: '50px' }}></span>
                
                <div className="card-shine"></div>
                <span className="emoji-pop text-6xl block mb-4 relative z-10">
                  {audience.emoji}
                </span>
                <h3 className="text-xl font-black uppercase relative z-10">{audience.title}</h3>
                <div className="underline-flash mt-4 w-full h-2 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibility Promise */}
      <section className="py-24 bg-neo-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-6 py-2 bg-neo-green text-neo-black font-black uppercase text-sm mb-6 border-4 border-neo-black">
              Our Promise
            </span>
            <h2 className="text-heading mb-4">
              OUR RESPONSIBILITY
              <span className="block text-neo-green">AND OUR PROMISE</span>
            </h2>
            <p className="text-2xl font-black uppercase tracking-wide text-neo-black/80 mb-4">
              We work with integrity.
            </p>
            <p className="text-lg font-medium max-w-2xl mx-auto text-neo-black/70">
              Our work supports <span className="highlight-yellow">awareness</span>, <span className="highlight-pink">emotional wellbeing</span>, and <span className="highlight-blue">personal clarity</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - We DO */}
            <div className="neo-border-thick bg-neo-green p-10 scroll-animate">
              <h3 className="text-3xl font-black uppercase mb-8 flex items-center gap-4">
                <span className="w-12 h-12 bg-neo-black text-neo-white flex items-center justify-center text-2xl">✓</span>
                We DO
              </h3>
              <ul className="space-y-4">
                {[
                  "Provide awareness & insight",
                  "Support emotional clarity",
                  "Facilitate real transformation",
                  "Encourage better wellbeing journeys",
                  "Communicate honestly & respectfully",
                ].map((item, index) => (
                  <li 
                    key={item} 
                    className="list-item-animate flex items-center gap-4 text-lg font-bold"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <span 
                      className="check-icon w-8 h-8 bg-neo-black text-neo-white flex items-center justify-center shrink-0"
                      style={{ animationDelay: `${index * 0.15 + 0.2}s` }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - We DON'T */}
            <div className="neo-border-thick bg-neo-white p-10 scroll-animate" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-3xl font-black uppercase mb-8 flex items-center gap-4">
                <span className="w-12 h-12 bg-neo-red text-neo-white flex items-center justify-center text-2xl">✗</span>
                We DON&apos;T
              </h3>
              <ul className="space-y-4">
                {[
                  "Diagnose medical conditions",
                  "Treat illness or disease",
                  "Promise miracle cures",
                  "Replace medical care",
                ].map((item, index) => (
                  <li 
                    key={item} 
                    className="list-item-animate flex items-center gap-4 text-lg font-bold text-neo-black/60"
                    style={{ animationDelay: `${index * 0.15 + 0.3}s` }}
                  >
                    <span 
                      className="check-icon w-8 h-8 bg-neo-red/20 text-neo-red flex items-center justify-center shrink-0"
                      style={{ animationDelay: `${index * 0.15 + 0.5}s` }}
                    >
                      ✗
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center scroll-animate">
            <Link
              href="/ethics"
              className="neo-btn px-10 py-4 bg-neo-yellow text-neo-black text-lg font-black uppercase inline-flex items-center gap-2"
            >
              Our Ethics Commitment
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neo-pink relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-50"></div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border-8 border-neo-black rotate-12 hidden lg:block"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-neo-yellow border-4 border-neo-black -rotate-12 hidden lg:block"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="neo-border-thick bg-neo-white p-12 text-center scroll-animate">
            <span className="inline-block px-6 py-2 bg-neo-black text-neo-white font-black uppercase text-sm mb-6">
              Ready to Transform?
            </span>
            <h2 className="text-heading mb-6">
              LET&apos;S BUILD SOMETHING
              <span className="block text-neo-pink">BOLD TOGETHER</span>
            </h2>
            <p className="text-xl font-medium mb-10 max-w-2xl mx-auto">
              If you&apos;re looking for{" "}
              <span className="highlight-yellow">clarity</span>,{" "}
              <span className="highlight-pink">calm</span>, and a{" "}
              <span className="highlight-blue">deeper connection</span> to yourself
              — we&apos;d love to talk.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="neo-btn px-10 py-5 bg-neo-black text-neo-white text-xl font-black uppercase"
              >
                Start Now →
              </Link>
              <Link
                href="/partnership"
                className="neo-btn px-10 py-5 bg-neo-yellow text-neo-black text-xl font-black uppercase"
              >
                Partner Up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
