"use client";

import { useState } from "react";
import Link from "next/link";

const inquiryTypes = [
  { value: "general", label: "General Inquiry", emoji: "💬" },
  { value: "services", label: "Services Info", emoji: "⚡" },
  { value: "partnership", label: "Partnership", emoji: "🤝" },
  { value: "products", label: "Products", emoji: "🛡️" },
  { value: "coaching", label: "Coaching", emoji: "🎯" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "general",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 bg-neo-white min-h-screen">
        <section className="py-24 flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="neo-border-thick bg-neo-green p-16">
              <span className="text-8xl block mb-6">🎉</span>
              <h1 className="text-heading mb-4">MESSAGE SENT!</h1>
              <p className="text-xl font-bold mb-8">
                We&apos;ve received your message and will be in touch soon. Get ready for something bold!
              </p>
              <Link
                href="/"
                className="neo-btn px-8 py-4 bg-neo-black text-neo-white font-black uppercase inline-block"
              >
                Back to Home →
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-neo-white pt-20">
      {/* Hero */}
      <section className="py-24 bg-neo-cyan relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-20"></div>
        <div className="absolute top-10 right-10 w-32 h-32 border-8 border-neo-black rotate-12 hidden lg:block"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-neo-yellow border-4 border-neo-black -rotate-6 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <span className="inline-block px-6 py-3 bg-neo-black text-neo-white font-black uppercase text-sm mb-6 border-4 border-neo-white">
              Let&apos;s Connect
            </span>
            <h1 className="text-display text-neo-black leading-none">
              START A
              <span className="block text-neo-white">CONVERSATION</span>
            </h1>
            <p className="mt-8 text-2xl font-bold text-neo-black/80 max-w-2xl">
              No pressure. No fluff. Just real talk about your wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="neo-border-thick bg-neo-white p-10">
              <h2 className="text-2xl font-black uppercase mb-2">Drop Us a Line</h2>
              <p className="text-lg font-bold text-neo-black/60 mb-8">
                Fill this out. We&apos;ll get back to you. Simple.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-black uppercase text-sm tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-4 border-neo-black bg-neo-white font-bold text-lg focus:outline-none focus:ring-4 focus:ring-neo-yellow transition-all"
                    placeholder="What should we call you?"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-black uppercase text-sm tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-4 border-neo-black bg-neo-white font-bold text-lg focus:outline-none focus:ring-4 focus:ring-neo-yellow transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-black uppercase text-sm tracking-wider mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-4 border-neo-black bg-neo-white font-bold text-lg focus:outline-none focus:ring-4 focus:ring-neo-yellow transition-all"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block font-black uppercase text-sm tracking-wider mb-2">
                    What&apos;s This About? *
                  </label>
                  <div className="relative">
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-4 border-neo-black bg-neo-white font-bold text-lg focus:outline-none focus:ring-4 focus:ring-neo-yellow transition-all appearance-none cursor-pointer"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.emoji} {type.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-black uppercase text-sm tracking-wider mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-4 border-neo-black bg-neo-white font-bold text-lg focus:outline-none focus:ring-4 focus:ring-neo-yellow transition-all resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full neo-btn px-8 py-5 bg-neo-yellow text-neo-black text-xl font-black uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div className="neo-border bg-neo-pink p-8">
                <span className="text-4xl block mb-4">📧</span>
                <h3 className="text-xl font-black uppercase mb-2">Email Us</h3>
                <p className="text-lg font-bold">hello@dorksense.com</p>
              </div>

              <div className="neo-border bg-neo-blue p-8">
                <span className="text-4xl block mb-4">📍</span>
                <h3 className="text-xl font-black uppercase mb-2">Location</h3>
                <p className="text-lg font-bold">United Arab Emirates</p>
                <p className="font-medium text-neo-black/70">Serving the Middle East & beyond</p>
              </div>

              <div className="neo-border bg-neo-green p-8">
                <span className="text-4xl block mb-4">💭</span>
                <h3 className="text-xl font-black uppercase mb-2">Our Promise</h3>
                <ul className="space-y-2">
                  {["No pressure tactics", "Honest communication", "Respect for your time"].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-bold">
                      <span className="w-6 h-6 bg-neo-black text-neo-white flex items-center justify-center text-sm">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="neo-border-thick bg-neo-yellow p-8">
                <h3 className="text-xl font-black uppercase mb-4">Quick Links</h3>
                <div className="flex flex-wrap gap-3">
                  <Link href="/services" className="px-4 py-2 bg-neo-black text-neo-white font-bold text-sm uppercase hover:bg-neo-pink transition-colors">
                    Services
                  </Link>
                  <Link href="/faq" className="px-4 py-2 bg-neo-black text-neo-white font-bold text-sm uppercase hover:bg-neo-pink transition-colors">
                    FAQ
                  </Link>
                  <Link href="/partnership" className="px-4 py-2 bg-neo-black text-neo-white font-bold text-sm uppercase hover:bg-neo-pink transition-colors">
                    Partnership
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
