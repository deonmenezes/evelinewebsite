"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

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
  { title: "Wellness Centers", emoji: "🏢", color: "bg-neo-yellow" },
  { title: "Practitioners", emoji: "❤️", color: "bg-neo-pink" },
  { title: "Leaders", emoji: "👔", color: "bg-neo-blue" },
  { title: "Individuals", emoji: "🧘", color: "bg-neo-green" },
];

const stats = [
  { number: "500+", label: "Happy Clients", color: "text-neo-yellow" },
  { number: "15+", label: "Years Experience", color: "text-neo-pink" },
  { number: "50+", label: "Partners", color: "text-neo-blue" },
  { number: "100%", label: "Commitment", color: "text-neo-green" },
];

export default function Home() {
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
    <div className="bg-neo-white">
      {/* Hero Section */}
      <section className="min-h-screen pt-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 dots-pattern opacity-30"></div>

        {/* Floating Shapes */}
        <div className="absolute top-32 left-10 w-20 h-20 bg-neo-yellow border-4 border-neo-black rotate-12 animate-float hidden lg:block"></div>
        <div className="absolute top-48 right-20 w-16 h-16 bg-neo-pink border-4 border-neo-black -rotate-12 animate-float hidden lg:block" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-neo-blue border-4 border-neo-black rotate-45 animate-float hidden lg:block" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-60 right-1/4 w-24 h-24 border-4 border-neo-black bg-neo-green rotate-6 animate-float hidden lg:block" style={{ animationDelay: "0.5s" }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-6 py-3 bg-neo-yellow border-4 border-neo-black text-neo-black font-black uppercase tracking-widest text-sm animate-slide-right">
                  ★ Elite Transformational Wellness ★
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight animate-slide-up">
                Elite Transformational Wellness for{" "}
                <span className="text-neo-pink">Modern Living</span>
              </h1>

              <p className="text-xl md:text-2xl font-bold animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Where <span className="highlight-yellow">Human Transformation</span> Meets{" "}
                <span className="highlight-pink">Intelligent Frequency Wellness</span>
              </p>

              <p className="text-lg md:text-xl font-medium max-w-xl text-neo-black/80 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                We help wellness centers, leaders, organizations, and individuals build deeper emotional clarity, grounding, and wellbeing — using intelligent frequency insights, light & sound therapy, and powerful human coaching.
              </p>

              <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <Link
                  href="/contact"
                  className="neo-btn px-8 py-4 bg-neo-black text-neo-white text-lg font-black uppercase"
                >
                  Start a Conversation
                </Link>
                <Link
                  href="/services"
                  className="neo-btn px-8 py-4 bg-neo-yellow text-neo-black text-lg font-black uppercase"
                >
                  Explore Services
                </Link>
                <Link
                  href="/partnership"
                  className="neo-btn px-8 py-4 bg-neo-pink text-neo-black text-lg font-black uppercase"
                >
                  Partner With Us
                </Link>
              </div>
            </div>

            {/* Right Content - Hero Image/Card */}
            <div className="relative animate-scale-in" style={{ animationDelay: "0.5s" }}>
              <div className="neo-border-thick bg-neo-white p-8 relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-neo-pink border-4 border-neo-black flex items-center justify-center animate-spin-slow">
                  <span className="text-4xl">★</span>
                </div>

                <div className="relative w-full aspect-square bg-gradient-to-br from-neo-yellow via-neo-pink to-neo-blue border-4 border-neo-black">
                  <div className="absolute inset-4 bg-neo-white border-4 border-neo-black flex items-center justify-center">
                    <div className="text-center">
                      <Image
                        src="/logoum.png"
                        alt="Dorksense Logo"
                        width={150}
                        height={150}
                        className="mx-auto"
                      />
                      <p className="mt-4 text-2xl font-black uppercase">
                        DORK<span className="text-neo-pink">SENSE</span>
                      </p>
                      <p className="text-sm font-bold text-neo-black/60 uppercase tracking-widest">
                        Est. 2024
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-2">
                  {["Bold", "Human", "Real"].map((tag, i) => (
                    <span
                      key={tag}
                      className={`px-4 py-2 border-3 border-neo-black font-bold uppercase text-sm ${
                        i === 0 ? "bg-neo-yellow" : i === 1 ? "bg-neo-pink" : "bg-neo-blue"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-neo">
          <div className="w-12 h-20 border-4 border-neo-black bg-neo-white flex flex-col items-center pt-2">
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
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-6 py-2 bg-neo-black text-neo-white font-black uppercase text-sm mb-6">
              Why This Matters Today
            </span>
            <h2 className="text-heading">
              People Don&apos;t Want BOOORING
              <span className="block text-neo-pink retro-shadow-sm">Wellness Services Anymore</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-animate">
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
                className="flip-card h-72 cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flip-card-inner h-full">
                  {/* Front */}
                  <div className={`flip-card-front neo-border ${item.color} p-8 flex flex-col items-center justify-center text-center`}>
                    <span className="text-6xl block mb-4">{item.icon}</span>
                    <h3 className="text-2xl font-black uppercase mb-2">{item.title}</h3>
                    <p className="text-lg font-medium">{item.desc}</p>
                  </div>
                  {/* Back */}
                  <div className={`flip-card-back neo-border ${item.color} p-8 flex flex-col items-center justify-center text-center`}>
                    <h3 className="text-2xl font-black uppercase mb-4">{item.backTitle}</h3>
                    <p className="text-base font-medium leading-relaxed">{item.backDesc}</p>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center scroll-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className={`text-5xl md:text-6xl font-black ${stat.color}`}>
                  {stat.number}
                </span>
                <p className="text-neo-white font-bold uppercase tracking-wider mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
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
                className={`neo-border ${audience.color} p-8 neo-hover text-center group`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <span className="text-6xl block mb-4 group-hover:animate-wiggle">
                  {audience.emoji}
                </span>
                <h3 className="text-xl font-black uppercase">{audience.title}</h3>
                <div className="mt-4 w-full h-1 bg-neo-black transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibility Promise */}
      <section className="py-24 bg-neo-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-lg font-bold">
                    <span className="w-8 h-8 bg-neo-black text-neo-white flex items-center justify-center flex-shrink-0">
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
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-lg font-bold text-neo-black/60">
                    <span className="w-8 h-8 bg-neo-red/20 text-neo-red flex items-center justify-center flex-shrink-0">
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
