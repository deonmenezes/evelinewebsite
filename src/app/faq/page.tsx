"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  id: string;
  title: string;
  emoji: string;
  color: string;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    id: "understanding",
    title: "What We Do",
    emoji: "🎯",
    color: "bg-neo-yellow",
    items: [
      { question: "What exactly do you do?", answer: "We help people and organizations build emotional clarity, grounding, and wellbeing through QScan Frequency Insight, Light & Sound Therapy, Coaching & Behaviour Change Support, and Business Consulting. Everything we do is responsible, ethical, and human-centered." },
      { question: "Is this medical treatment?", answer: "No. We do NOT diagnose, treat illness, promise cures, or replace medical care. Our work supports awareness, emotional wellbeing, personal clarity, and better wellness decisions." },
      { question: "Is this miracle wellness or hype?", answer: "No hype. No miracle claims. No emotional manipulation. We position everything honestly. Our focus is meaningful experience, awareness, emotional grounding, and maturity." },
    ],
  },
  {
    id: "qscan",
    title: "QScan",
    emoji: "📊",
    color: "bg-neo-pink",
    items: [
      { question: "What is QScan?", answer: "QScan is an advanced bioenergetic insight system that explores correlations related to stress, emotional energy, vitality, lifestyle impact, and energetic balance patterns. It helps people understand themselves better." },
      { question: "What does QScan NOT do?", answer: "It does NOT diagnose diseases, give medical advice, claim to cure, replace doctors, or substitute medical evaluation." },
      { question: "How does QScan help?", answer: "People gain clarity about stress and emotional load, awareness of personal patterns, deeper self-understanding, and support to take better steps in their wellness life." },
    ],
  },
  {
    id: "light-sound",
    title: "Light & Sound",
    emoji: "✨",
    color: "bg-neo-blue",
    items: [
      { question: "What is Light & Sound Therapy?", answer: "A deeply calming experiential therapy using tuned light and sound to support relaxation, emotional release, nervous system calming, and inner balance." },
      { question: "Is it safe?", answer: "Yes. Sessions are guided, grounded, and gently facilitated." },
      { question: "Is it a medical procedure?", answer: "No. It is a premium experiential wellness modality — not medical treatment." },
    ],
  },
  {
    id: "coaching",
    title: "Coaching",
    emoji: "🎯",
    color: "bg-neo-green",
    items: [
      { question: "Who is your coaching for?", answer: "We work with individuals, leaders, teams, and corporate organizations. Anyone who wants grounding, emotional wellbeing, mindset growth, or healthier performance." },
      { question: "What kind of coaching do you do?", answer: "We support emotional wellbeing, behaviour change, resilience-building, leadership grounding, personal clarity, and peak performance. All coaching is confidential and deeply human." },
    ],
  },
  {
    id: "practical",
    title: "Practical Info",
    emoji: "⚡",
    color: "bg-neo-purple",
    items: [
      { question: "How long are sessions?", answer: "QScan: 45–60 minutes. Light & Sound: 30–45 minutes. Coaching: 60 minutes. Consulting: customized." },
      { question: "Where do you operate?", answer: "Primarily UAE and the Middle East, with selected international engagements." },
      { question: "Do you guarantee results?", answer: "No. Human wellbeing is personal and complex. We promise integrity, responsibility, maturity, and meaningful experience. Not unrealistic guarantees." },
    ],
  },
];

function AccordionItem({ item, isOpen, onToggle, color }: { item: FAQItem; isOpen: boolean; onToggle: () => void; color: string }) {
  return (
    <div className={`border-4 border-neo-black ${isOpen ? color : "bg-neo-white"} transition-colors`}>
      <button
        className="w-full p-6 text-left flex items-center justify-between font-bold text-lg"
        onClick={onToggle}
      >
        <span className="pr-8">{item.question}</span>
        <span className={`w-10 h-10 border-3 border-neo-black flex items-center justify-center text-2xl font-black transition-all ${isOpen ? "bg-neo-black text-neo-white rotate-45" : "bg-neo-white"}`}>
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}>
        <p className="px-6 pb-6 text-lg font-medium">{item.answer}</p>
      </div>
    </div>
  );
}

function FAQSectionComponent({ section }: { section: FAQSection }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id={section.id} className="scroll-mt-24">
      <div className={`neo-border ${section.color} p-6 mb-6`}>
        <div className="flex items-center gap-4">
          <span className="text-4xl">{section.emoji}</span>
          <h3 className="text-2xl font-black uppercase">{section.title}</h3>
        </div>
      </div>
      <div className="space-y-4">
        {section.items.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            color={section.color}
          />
        ))}
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="bg-neo-white pt-20">
      {/* Hero */}
      <section className="py-24 bg-neo-cyan relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-20"></div>
        <div className="absolute top-10 right-10 w-32 h-32 border-8 border-neo-black rotate-12 hidden lg:block animate-float"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <span className="inline-block px-6 py-3 bg-neo-black text-neo-white font-black uppercase text-sm mb-6">
              Got Questions?
            </span>
            <h1 className="text-display text-neo-black leading-none">
              FREQUENTLY
              <span className="block text-neo-white">ASKED</span>
              <span className="block">QUESTIONS</span>
            </h1>
            <p className="mt-8 text-2xl font-bold text-neo-black/80">
              Clarity. Honesty. No BS.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {faqSections.map((section) => (
              <FAQSectionComponent key={section.id} section={section} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neo-yellow relative overflow-hidden">
        <div className="absolute inset-0 stripes opacity-30"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="neo-border-thick bg-neo-white p-12 text-center">
            <span className="text-6xl block mb-6">💬</span>
            <h2 className="text-heading mb-4">STILL HAVE QUESTIONS?</h2>
            <p className="text-xl font-bold mb-8">
              That&apos;s totally cool. Let&apos;s talk and figure it out together.
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
