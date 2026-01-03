"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

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
      <section className="py-24 bg-neo-purple relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-20"></div>
        <div className="absolute top-10 right-10 w-32 h-32 border-8 border-neo-black rotate-12 hidden lg:block"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-neo-yellow border-4 border-neo-black -rotate-6 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <span className="inline-block px-6 py-3 bg-neo-black text-neo-white font-black uppercase text-sm mb-6 border-4 border-neo-white">
              Our Arsenal
            </span>
            <h1 className="text-display text-neo-white leading-none">
              A PREMIUM SUITE OF HUMAN
              <span className="block gradient-text-animate">TRANSFORMATION</span>
              <span className="block">SERVICES</span>
            </h1>
            <p className="mt-8 text-2xl font-bold text-neo-white/80 max-w-2xl">
              Insight → Experience → Growth → Impact
            </p>
          </div>
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
              >
                {/* Visual Card */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className={`neo-border-thick ${service.color} p-12 relative overflow-hidden`}>
                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-neo-black border-4 border-neo-black flex items-center justify-center text-4xl animate-float z-10">
                      {service.icon}
                    </div>
                    {service.image ? (
                      <div className="relative">
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={600}
                          height={400}
                          className="w-full h-auto rounded-lg border-4 border-neo-black"
                        />
                      </div>
                    ) : (
                      <>
                        <span className="text-[120px] leading-none font-black opacity-20">
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
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className={`inline-block w-16 h-2 ${service.color} mb-6`}></span>
                  <h2 className="text-heading mb-2">{service.title}</h2>
                  <p className="text-xl font-bold text-neo-pink mb-4">{service.tagline}</p>
                  <p className="text-lg mb-8">{service.description}</p>

                  <div className="mb-8">
                    <h4 className="font-black uppercase text-sm tracking-widest mb-4 flex items-center gap-2">
                      <span className={`w-3 h-3 ${service.color}`}></span>
                      Key Benefits
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3">
                          <span className={`w-8 h-8 ${service.color} border-3 border-neo-black flex items-center justify-center font-bold`}>
                            ✓
                          </span>
                          <span className="font-bold">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`neo-border-sm bg-neo-white p-6 ${service.accent}`}>
                    <p className="font-bold text-neo-black/70 italic">{service.note}</p>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className={`neo-btn px-8 py-4 ${service.color} text-neo-black font-black uppercase inline-block`}
                    >
                      Let&apos;s Talk About This →
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center scroll-animate">
            <span className="inline-block px-6 py-2 bg-neo-yellow text-neo-black font-black uppercase text-sm mb-6 border-4 border-neo-white">
              Ready?
            </span>
            <h2 className="text-heading text-neo-white mb-6">
              LET&apos;S FIND YOUR
              <span className="block text-neo-pink">PERFECT FIT</span>
            </h2>
            <p className="text-xl text-neo-white/70 mb-10 max-w-2xl mx-auto">
              Not sure which service is right for you? Let&apos;s have a conversation and explore together.
            </p>
            <Link
              href="/contact"
              className="neo-btn px-12 py-5 bg-neo-yellow text-neo-black text-xl font-black uppercase inline-block"
            >
              Start a Conversation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
