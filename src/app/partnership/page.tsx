"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const benefits = [
  { title: "Premium Brand Positioning", description: "Elevate your center with cutting-edge wellness offerings", emoji: "⭐" },
  { title: "Meaningful Client Experience", description: "Create emotional connections that build lasting loyalty", emoji: "❤️" },
  { title: "Stronger Trust & Loyalty", description: "Build deeper relationships through responsible positioning", emoji: "🤝" },
  { title: "Responsible Communication", description: "Ethically positioned messaging that maintains integrity", emoji: "💬" },
  { title: "Strategic Advisory Support", description: "Not just technology — ongoing partnership and guidance", emoji: "💡" },
];

const steps = [
  { number: "01", title: "Understand Your Center", description: "We begin by learning about your wellness center, its values, and your vision for transformation.", color: "bg-neo-yellow" },
  { number: "02", title: "Demonstration & Experience", description: "Experience our services firsthand and see how they align with your offerings.", color: "bg-neo-pink" },
  { number: "03", title: "Optional Pilot Phase", description: "Test the integration with a pilot program before full commitment.", color: "bg-neo-blue" },
  { number: "04", title: "Team Enablement & Training", description: "Comprehensive training to ensure your team delivers with confidence.", color: "bg-neo-green" },
  { number: "05", title: "Full Integration Support", description: "Ongoing support to ensure seamless integration and continued success.", color: "bg-neo-purple" },
];

export default function PartnershipPage() {
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
      <section className="py-24 bg-neo-black relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-10"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-neo-yellow/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-neo-pink/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neo-purple/10 rounded-full blur-3xl animate-float"></div>
        
        {/* Animated decorative elements */}
        <div className={`absolute top-10 right-10 w-40 h-40 border-8 border-neo-yellow hidden lg:block transition-all duration-1000 ${heroVisible ? 'opacity-100 rotate-12 translate-x-0' : 'opacity-0 rotate-45 translate-x-20'}`}>
          <div className="w-full h-full bg-neo-yellow/20 animate-pulse"></div>
          <div className="absolute inset-2 border-4 border-neo-yellow/50 animate-spin-slow"></div>
        </div>
        <div className={`absolute bottom-20 left-20 w-32 h-32 border-4 border-neo-pink hidden lg:block transition-all duration-1000 ${heroVisible ? 'opacity-100 -rotate-6 translate-x-0' : 'opacity-0 rotate-12 -translate-x-20'}`}>
          <div className="absolute inset-0 bg-neo-pink/20 animate-pulse"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-neo-yellow rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-neo-pink rounded-full animate-bounce-neo opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-neo-purple rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-20 left-1/3 w-2 h-2 bg-neo-cyan rounded-full animate-bounce-neo opacity-50"></div>
        <div className="absolute bottom-32 right-1/4 w-5 h-5 border-2 border-neo-yellow rotate-45 animate-spin-slow opacity-30"></div>
        
        {/* Animated lines */}
        <div className={`absolute top-1/3 left-0 h-1 bg-neo-yellow/60 transition-all duration-1000 delay-500 ${heroVisible ? 'w-32' : 'w-0'}`}></div>
        <div className={`absolute bottom-1/3 right-0 h-1 bg-neo-pink/60 transition-all duration-1000 delay-700 ${heroVisible ? 'w-48' : 'w-0'}`}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <span className={`inline-block px-6 py-3 bg-neo-yellow text-neo-black font-black uppercase text-sm mb-6 transition-all duration-700 hover:scale-105 hover:bg-neo-pink cursor-default ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-neo-black rounded-full animate-ping"></span>
                Exclusive Invitation
              </span>
            </span>
            <h1 className="text-display text-neo-white leading-none">
              <span className={`block transition-all duration-700 delay-100 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                BECOME A
              </span>
              <span className={`block transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <span className="hero-gradient-text">PIONEER</span>
              </span>
              <span className={`block text-neo-white transition-all duration-700 delay-300 relative ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                PARTNER
                <span className="absolute -bottom-2 left-0 h-2 bg-neo-yellow transition-all duration-1000 delay-700" style={{ width: heroVisible ? '180px' : '0px' }}></span>
              </span>
            </h1>
            <p className={`mt-8 text-2xl font-bold text-neo-white/80 max-w-2xl transition-all duration-700 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              We are inviting a few carefully selected wellness destinations in the Middle East
              to lead a new, responsible era of transformational frequency wellness.
            </p>
            
            {/* Scroll indicator */}
            <div className={`mt-12 transition-all duration-1000 delay-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-3 text-neo-white/60">
                <div className="w-6 h-10 border-2 border-neo-white/60 rounded-full flex justify-center pt-2">
                  <div className="w-1.5 h-3 bg-neo-white/80 rounded-full animate-bounce"></div>
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">Explore partnership</span>
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

      {/* Why Partner */}
      <section className="py-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-neo-pink/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-48 h-48 bg-neo-yellow/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-6 py-2 bg-neo-pink border-4 border-neo-black font-black uppercase text-sm mb-6 transition-all duration-300 hover:scale-110 hover:rotate-2 cursor-default">
              Why Partner
            </span>
            <h2 className="text-heading group">
              <span className="inline-block transition-all duration-300 hover:translate-x-2">JOIN THE</span>
              <span className="text-neo-pink relative inline-block">
                <span className="transition-all duration-300 hover:scale-105 inline-block"> REVOLUTION</span>
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-neo-pink transition-all duration-500 group-hover:w-full"></span>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`scroll-animate neo-border p-8 group relative overflow-hidden transition-all duration-500 hover:scale-105 hover:-rotate-1 ${
                  index % 3 === 0 ? "bg-neo-yellow" : index % 3 === 1 ? "bg-neo-pink" : "bg-neo-blue"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                {/* Corner decoration */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-neo-black/10 rotate-12 transition-all duration-500 group-hover:rotate-45 group-hover:scale-150"></div>
                
                <span className="text-5xl block mb-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">{benefit.emoji}</span>
                <h3 className="text-xl font-black uppercase mb-2 transition-all duration-300 group-hover:translate-x-1">{benefit.title}</h3>
                <p className="font-bold">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Path */}
      <section className="py-24 bg-neo-cyan relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-30"></div>
        
        {/* Animated background orbs */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-neo-yellow/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-neo-pink/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-neo-yellow rounded-full animate-bounce-neo opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-neo-white rounded-full animate-ping opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-6 py-2 bg-neo-black text-neo-white font-black uppercase text-sm mb-6 transition-all duration-300 hover:scale-110 hover:-rotate-2 cursor-default">
              The Process
            </span>
            <h2 className="text-heading group">
              <span className="inline-block transition-all duration-300 hover:translate-x-2">HOW WE</span>
              <span className="text-neo-white relative inline-block">
                <span className="transition-all duration-300 hover:scale-105 inline-block"> WORK WITH YOU</span>
              </span>
            </h2>
            <p className="mt-4 text-xl font-bold">A thoughtful, no-rush approach to partnership</p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`scroll-animate neo-border-thick ${step.color} p-8 group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                  index % 2 === 0 ? "lg:mr-24 hover:-rotate-[0.5deg]" : "lg:ml-24 hover:rotate-[0.5deg]"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Animated connection line */}
                {index < steps.length - 1 && (
                  <div className={`absolute ${index % 2 === 0 ? '-right-8 lg:-right-24' : '-left-8 lg:-left-24'} top-1/2 w-8 lg:w-24 h-1 bg-neo-black/20 hidden lg:block`}>
                    <div className="absolute inset-0 bg-neo-black/40 animate-pulse"></div>
                  </div>
                )}
                
                <div className="flex items-start gap-6 relative">
                  <div className="w-20 h-20 bg-neo-black text-neo-white flex items-center justify-center font-black text-3xl flex-shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <span className="transition-all duration-300 group-hover:scale-110">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase transition-all duration-300 group-hover:translate-x-2">{step.title}</h3>
                    <p className="mt-2 text-lg font-medium">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center scroll-animate">
            <div className="inline-block neo-border bg-neo-white px-12 py-6 group transition-all duration-500 hover:scale-105 hover:-rotate-1">
              <p className="text-2xl font-black italic transition-all duration-300 group-hover:text-neo-purple">
                Calm. Thoughtful. No rush.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics Section - We Do / We Don't */}
      <section className="py-24 bg-neo-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-neo-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-48 h-48 bg-neo-red/10 rounded-full blur-3xl"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-neo-green rounded-full animate-float opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-neo-pink rounded-full animate-bounce-neo opacity-40"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-6 py-2 bg-neo-purple border-4 border-neo-black font-black uppercase text-sm mb-6 text-neo-white transition-all duration-300 hover:scale-110 cursor-default">
              Our Commitment
            </span>
            <h2 className="text-heading">
              RESPONSIBLE
              <span className="text-neo-purple"> POSITIONING</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* We DO */}
            <div className="scroll-animate neo-border-thick bg-neo-green p-8 lg:p-10 group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-rotate-1">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">✅</span>
                <h3 className="text-3xl font-black uppercase transition-all duration-300 group-hover:translate-x-2">We DO</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Provide awareness",
                  "Support emotional clarity",
                  "Facilitate reflective insight",
                  "Encourage better wellbeing journeys",
                  "Communicate honestly and respectfully"
                ].map((item, index) => (
                  <li 
                    key={item}
                    className="flex items-center gap-3 benefit-item opacity-0 translate-y-4 transition-all duration-500"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="w-10 h-10 bg-neo-black text-neo-white flex items-center justify-center text-xl font-black flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-12">
                      ✔️
                    </span>
                    <span className="text-lg font-bold transition-all duration-300 hover:translate-x-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* We DO NOT */}
            <div className="scroll-animate neo-border-thick bg-neo-pink p-8 lg:p-10 group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:rotate-1">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12">🚫</span>
                <h3 className="text-3xl font-black uppercase transition-all duration-300 group-hover:translate-x-2">We DO NOT</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Diagnose",
                  "Treat illness",
                  "Promise cures",
                  "Replace medical care"
                ].map((item, index) => (
                  <li 
                    key={item}
                    className="flex items-center gap-3 benefit-item opacity-0 translate-y-4 transition-all duration-500"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="w-10 h-10 bg-neo-black text-neo-white flex items-center justify-center text-xl font-black flex-shrink-0 transition-all duration-300 hover:scale-110 hover:-rotate-12">
                      ❌
                    </span>
                    <span className="text-lg font-bold transition-all duration-300 hover:translate-x-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="mt-12 text-center scroll-animate">
            <div className="inline-block neo-border bg-neo-purple text-neo-white px-8 py-4 group transition-all duration-500 hover:scale-105">
              <p className="text-xl font-black transition-all duration-300">
                Everything we do is positioned <span className="text-neo-yellow">responsibly</span> and <span className="text-neo-yellow">ethically</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neo-yellow relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neo-pink/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-neo-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Floating decorations */}
        <div className="absolute top-10 left-10 w-6 h-6 border-4 border-neo-black rotate-45 animate-spin-slow opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-neo-pink animate-bounce-neo opacity-50"></div>
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-neo-purple rounded-full animate-float opacity-40"></div>
        <div className="absolute bottom-10 left-1/3 w-5 h-5 border-2 border-neo-black animate-ping opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="neo-border-thick bg-neo-white p-16 text-center scroll-animate group transition-all duration-500 hover:scale-[1.02]">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neo-yellow/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <span className="text-6xl block mb-6 transition-all duration-500 group-hover:scale-125 animate-bounce-neo">🚀</span>
            <h2 className="text-heading mb-4 transition-all duration-300 group-hover:scale-105">
              <span className="inline-block hover:text-neo-purple transition-colors duration-300">READY TO LEAD A NEW ERA?</span>
            </h2>
            <p className="text-xl font-bold mb-8 transition-all duration-300">
              Join us in pioneering responsible, transformational wellness in the Middle East.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?type=partner"
                className="neo-btn px-10 py-5 bg-neo-black text-neo-white text-xl font-black uppercase inline-block relative overflow-hidden group/btn transition-all duration-300 hover:scale-105 hover:-rotate-1"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Become a Pioneer Partner
                  <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
                </span>
                <div className="absolute inset-0 bg-neo-purple/30 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
              </Link>
              <Link
                href="/contact"
                className="neo-btn px-10 py-5 bg-neo-pink text-neo-black text-xl font-black uppercase inline-block relative overflow-hidden group/btn2 transition-all duration-300 hover:scale-105 hover:rotate-1"
              >
                <span className="relative z-10">Start a Conversation</span>
                <div className="absolute inset-0 bg-neo-yellow/40 translate-y-full group-hover/btn2:translate-y-0 transition-transform duration-300"></div>
              </Link>
            </div>
            
            {/* Decorative animated elements */}
            <div className="mt-10 flex justify-center items-center gap-4">
              <span className="w-12 h-1 bg-neo-yellow animate-pulse"></span>
              <span className="w-4 h-4 border-2 border-neo-pink rotate-45 animate-spin-slow"></span>
              <span className="w-12 h-1 bg-neo-yellow animate-pulse" style={{ animationDelay: '0.5s' }}></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
