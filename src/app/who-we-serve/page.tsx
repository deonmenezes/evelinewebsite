"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

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
      <section className="py-24 bg-neo-green relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-20"></div>
        <div className="absolute top-10 right-10 w-40 h-40 border-8 border-neo-black -rotate-12 hidden lg:block animate-float"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-neo-pink border-4 border-neo-black rotate-6 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <span className="inline-block px-6 py-3 bg-neo-black text-neo-white font-black uppercase text-sm mb-6">
              Our People
            </span>
            <h1 className="text-display text-neo-black leading-none">
              WHO WE
              <span className="block text-neo-white">WORK</span>
              <span className="block">WITH</span>
            </h1>
            <p className="mt-8 text-2xl font-bold text-neo-black/80 max-w-2xl">
              We serve those who value depth, emotional grounding, maturity, and premium human experience.
            </p>
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {audiences.map((audience, index) => (
              <div
                key={audience.id}
                id={audience.id}
                className={`scroll-animate neo-border-thick ${audience.color} p-8 lg:p-12 ${
                  index % 2 === 0 ? "" : "lg:ml-12"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Icon */}
                  <div className={`lg:col-span-2 ${index % 2 === 1 ? "lg:order-last" : ""}`}>
                    <div className="w-32 h-32 bg-neo-white border-4 border-neo-black flex items-center justify-center mx-auto rotate-3 neo-hover">
                      <span className="text-6xl">{audience.emoji}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10">
                    <span className="inline-block px-4 py-2 bg-neo-black text-neo-white font-bold text-sm uppercase mb-4">
                      {audience.tagline}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black uppercase">
                      {audience.title}
                    </h2>

                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {audience.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start">
                          <span className="w-8 h-8 bg-neo-black text-neo-white flex items-center justify-center text-lg font-black mr-3 flex-shrink-0">
                            ✓
                          </span>
                          <span className="font-bold text-lg">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Link
                        href={audience.ctaHref}
                        className="neo-btn px-8 py-4 bg-neo-black text-neo-white font-black uppercase inline-block"
                      >
                        {audience.cta} →
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="neo-border-thick bg-neo-white p-16 text-center scroll-animate">
            <span className="text-6xl block mb-6">🤔</span>
            <h2 className="text-heading mb-4">NOT SURE WHERE TO START?</h2>
            <p className="text-xl font-bold mb-8">
              Let&apos;s have a calm conversation about your needs and explore what might be right for you.
            </p>
            <Link
              href="/contact"
              className="neo-btn px-10 py-5 bg-neo-black text-neo-white text-xl font-black uppercase inline-block"
            >
              Start a Conversation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
