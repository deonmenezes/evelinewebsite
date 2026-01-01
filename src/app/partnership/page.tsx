"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

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
      <section className="py-24 bg-neo-black relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-10"></div>
        <div className="absolute top-10 right-10 w-40 h-40 border-8 border-neo-yellow rotate-12 hidden lg:block animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border-4 border-neo-pink -rotate-6 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <span className="inline-block px-6 py-3 bg-neo-yellow text-neo-black font-black uppercase text-sm mb-6">
              Exclusive Invitation
            </span>
            <h1 className="text-display text-neo-white leading-none">
              BECOME A
              <span className="block text-neo-yellow">PIONEER</span>
              <span className="block">PARTNER</span>
            </h1>
            <p className="mt-8 text-2xl font-bold text-neo-white/80 max-w-2xl">
              We are inviting a few carefully selected wellness destinations in the Middle East
              to lead a new, responsible era of transformational frequency wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-6 py-2 bg-neo-pink border-4 border-neo-black font-black uppercase text-sm mb-6">
              Why Partner
            </span>
            <h2 className="text-heading">
              JOIN THE
              <span className="text-neo-pink"> REVOLUTION</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`scroll-animate neo-border p-8 neo-hover ${
                  index % 3 === 0 ? "bg-neo-yellow" : index % 3 === 1 ? "bg-neo-pink" : "bg-neo-blue"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-5xl block mb-4">{benefit.emoji}</span>
                <h3 className="text-xl font-black uppercase mb-2">{benefit.title}</h3>
                <p className="font-bold">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Path */}
      <section className="py-24 bg-neo-cyan relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 scroll-animate">
            <span className="inline-block px-6 py-2 bg-neo-black text-neo-white font-black uppercase text-sm mb-6">
              The Process
            </span>
            <h2 className="text-heading">
              HOW WE
              <span className="text-neo-white"> WORK WITH YOU</span>
            </h2>
            <p className="mt-4 text-xl font-bold">A thoughtful, no-rush approach to partnership</p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`scroll-animate neo-border-thick ${step.color} p-8 ${
                  index % 2 === 0 ? "lg:mr-24" : "lg:ml-24"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-neo-black text-neo-white flex items-center justify-center font-black text-3xl flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase">{step.title}</h3>
                    <p className="mt-2 text-lg font-medium">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center scroll-animate">
            <div className="inline-block neo-border bg-neo-white px-12 py-6">
              <p className="text-2xl font-black italic">
                Calm. Thoughtful. No rush.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neo-yellow relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="neo-border-thick bg-neo-white p-16 text-center scroll-animate">
            <span className="text-6xl block mb-6">🚀</span>
            <h2 className="text-heading mb-4">READY TO LEAD A NEW ERA?</h2>
            <p className="text-xl font-bold mb-8">
              Join us in pioneering responsible, transformational wellness in the Middle East.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?type=partner"
                className="neo-btn px-10 py-5 bg-neo-black text-neo-white text-xl font-black uppercase inline-block"
              >
                Become a Pioneer Partner →
              </Link>
              <Link
                href="/contact"
                className="neo-btn px-10 py-5 bg-neo-pink text-neo-black text-xl font-black uppercase inline-block"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
