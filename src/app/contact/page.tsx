"use client";

import { useState } from "react";
import Link from "next/link";

const inquiryTypes = [
  { value: "general", label: "General Inquiry", emoji: "�️" },
  { value: "services", label: "Services Info", emoji: "⚡" },
  { value: "partnership", label: "Partnership", emoji: "🤝" },
  { value: "products", label: "Products", emoji: "🛡️" },
  { value: "coaching", label: "Coaching", emoji: "🎯" },
];

const questionnaireQuestions: Record<string, { question: string; type: "text" | "select"; options?: string[] }[]> = {
  general: [
    { question: "What inspired you to reach out to UMM.Global today?", type: "text" },
    { question: "Are you exploring wellness, business, equestrian, or another area of interest?", type: "select", options: ["Wellness", "Business", "Equestrian", "Other"] },
    { question: "Would you prefer a discovery call or a resource to review first?", type: "select", options: ["Discovery call", "Resource to review first", "Not sure yet"] },
  ],
  services: [
    { question: "Which service area interests you most?", type: "select", options: ["Coaching", "Consulting", "Branded resource creation", "Other"] },
    { question: "Are you seeking support for a personal brand, business, or event?", type: "select", options: ["Personal brand", "Business", "Event", "Multiple areas"] },
    { question: "What outcome would feel most impactful for you?", type: "text" },
  ],
  partnership: [
    { question: "What type of partnership are you envisioning?", type: "select", options: ["Co-branded events", "Content creation", "Affiliate collaboration", "Other"] },
    { question: "What values or audiences do you share with UMM.Global?", type: "text" },
    { question: "Are you open to joint strategy sessions or pilot initiatives?", type: "select", options: ["Yes, open to both", "Strategy sessions only", "Pilot initiatives only", "Would like to discuss"] },
  ],
  products: [
    { question: "Which product or system are you inquiring about?", type: "select", options: ["SuperTuning", "ColorLab", "Branded resources", "Other"] },
    { question: "Are you seeking a demo, purchase, or integration into your practice/event?", type: "select", options: ["Demo", "Purchase", "Integration", "Just exploring"] },
    { question: "Do you have specific goals you'd like the product to support?", type: "select", options: ["Relaxation", "Clarity", "Performance", "Multiple goals", "Other"] },
  ],
  coaching: [
    { question: "What area of your life or business feels ready for coaching?", type: "text" },
    { question: "Are you drawn to equestrian, wellness, or executive coaching—or a blend?", type: "select", options: ["Equestrian coaching", "Wellness coaching", "Executive coaching", "A blend of approaches"] },
    { question: "What format do you prefer?", type: "select", options: ["One-on-one sessions", "Immersive session", "Group experience", "Flexible / Open to suggestions"] },
  ],
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "general",
    message: "",
  });
  const [questionnaireAnswers, setQuestionnaireAnswers] = useState<Record<string, string>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOpenModal = (e: React.FormEvent) => {
    e.preventDefault();
    // Reset questionnaire answers when opening modal
    setQuestionnaireAnswers({});
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleQuestionnaireChange = (questionIndex: number, value: string) => {
    setQuestionnaireAnswers({
      ...questionnaireAnswers,
      [`q${questionIndex}`]: value,
    });
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    
    // Build email body with all form data and questionnaire answers
    const selectedType = inquiryTypes.find(t => t.value === formData.inquiryType);
    const questions = questionnaireQuestions[formData.inquiryType];
    
    let emailBody = `NEW INQUIRY FROM UMM.GLOBAL CONTACT FORM

CONTACT INFORMATION
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}

INQUIRY TYPE: ${selectedType?.label}

QUESTIONNAIRE RESPONSES
`;
    
    questions.forEach((q, index) => {
      emailBody += `
Q: ${q.question}
A: ${questionnaireAnswers[`q${index}`] || "Not answered"}
`;
    });
    
    emailBody += `
ADDITIONAL MESSAGE
${formData.message || "No additional message"}`;

    // Create mailto link and open it
    const subject = encodeURIComponent(`[UMM.Global Inquiry] ${selectedType?.label} from ${formData.name}`);
    const body = encodeURIComponent(emailBody);
    const mailtoLink = `mailto:contact@umm.global?subject=${subject}&body=${body}`;
    
    // Open email client in new window
    window.open(mailtoLink, '_blank');
    
    // Short delay then show success
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsSubmitting(false);
    setIsModalOpen(false);
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

  const currentQuestions = questionnaireQuestions[formData.inquiryType];
  const allQuestionsAnswered = currentQuestions.every((_, index) => questionnaireAnswers[`q${index}`]);

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
      <section className="py-12 sm:py-24 bg-neo-cyan relative overflow-hidden">
        <div className="absolute inset-0 dots-pattern opacity-20"></div>
        <div className="absolute top-10 right-10 w-32 h-32 border-8 border-neo-black rotate-12 hidden lg:block"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-neo-yellow border-4 border-neo-black -rotate-6 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-neo-black text-neo-white font-black uppercase text-xs sm:text-sm mb-4 sm:mb-6 border-4 border-neo-white">
              Let&apos;s Connect
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-neo-black leading-none">
              START A
              <span className="block text-neo-white">CONVERSATION</span>
            </h1>
            <p className="mt-4 sm:mt-8 text-lg sm:text-2xl font-bold text-neo-black/80 max-w-2xl">
              No pressure. No fluff. Just real talk about your wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
            {/* Form */}
            <div className="neo-border-thick bg-neo-white p-5 sm:p-10">
              <h2 className="text-xl sm:text-2xl font-black uppercase mb-2">Drop Us a Line</h2>
              <p className="text-base sm:text-lg font-bold text-neo-black/60 mb-6 sm:mb-8">
                Fill this out. We&apos;ll get back to you. Simple.
              </p>

              <form onSubmit={handleOpenModal} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block font-black uppercase text-xs sm:text-sm tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border-4 border-neo-black bg-neo-white font-bold text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-neo-yellow transition-all"
                    placeholder="What should we call you?"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-black uppercase text-xs sm:text-sm tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border-4 border-neo-black bg-neo-white font-bold text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-neo-yellow transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-black uppercase text-xs sm:text-sm tracking-wider mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border-4 border-neo-black bg-neo-white font-bold text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-neo-yellow transition-all"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block font-black uppercase text-xs sm:text-sm tracking-wider mb-2">
                    What&apos;s This About? *
                  </label>
                  <div className="relative">
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 border-4 border-neo-black bg-neo-white font-bold text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-neo-yellow transition-all appearance-none cursor-pointer"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.emoji} {type.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-black uppercase text-xs sm:text-sm tracking-wider mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border-4 border-neo-black bg-neo-white font-bold text-base sm:text-lg focus:outline-none focus:ring-4 focus:ring-neo-yellow transition-all resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full neo-btn px-6 sm:px-8 py-4 sm:py-5 bg-neo-yellow text-neo-black text-lg sm:text-xl font-black uppercase"
                >
                  Apply →
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-4 sm:space-y-8">
              <div className="neo-border bg-neo-pink p-5 sm:p-8">
                <span className="text-3xl sm:text-4xl block mb-3 sm:mb-4">📧</span>
                <h3 className="text-lg sm:text-xl font-black uppercase mb-2">Email Us</h3>
                <p className="text-base sm:text-lg font-bold">contact@umm.global</p>
              </div>

              <div className="neo-border bg-neo-blue p-5 sm:p-8">
                <span className="text-3xl sm:text-4xl block mb-3 sm:mb-4">📍</span>
                <h3 className="text-lg sm:text-xl font-black uppercase mb-2">Location</h3>
                <p className="text-base sm:text-lg font-bold">United Arab Emirates</p>
                <p className="font-medium text-neo-black/70 text-sm sm:text-base">Serving the Middle East & beyond</p>
              </div>

              <div className="neo-border bg-neo-green p-5 sm:p-8">
                <span className="text-3xl sm:text-4xl block mb-3 sm:mb-4">💭</span>
                <h3 className="text-lg sm:text-xl font-black uppercase mb-2">Our Promise</h3>
                <ul className="space-y-2">
                  {["No pressure tactics", "Honest communication", "Respect for your time"].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-bold text-sm sm:text-base">
                      <span className="w-5 sm:w-6 h-5 sm:h-6 bg-neo-black text-neo-white flex items-center justify-center text-xs sm:text-sm">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="neo-border-thick bg-neo-yellow p-5 sm:p-8">
                <h3 className="text-lg sm:text-xl font-black uppercase mb-3 sm:mb-4">Quick Links</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <Link href="/services" className="px-3 sm:px-4 py-2 bg-neo-black text-neo-white font-bold text-xs sm:text-sm uppercase hover:bg-neo-pink transition-colors">
                    Services
                  </Link>
                  <Link href="/faq" className="px-3 sm:px-4 py-2 bg-neo-black text-neo-white font-bold text-xs sm:text-sm uppercase hover:bg-neo-pink transition-colors">
                    FAQ
                  </Link>
                  <Link href="/partnership" className="px-3 sm:px-4 py-2 bg-neo-black text-neo-white font-bold text-xs sm:text-sm uppercase hover:bg-neo-pink transition-colors">
                    Partnership
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questionnaire Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-neo-black/80 backdrop-blur-sm"
            onClick={handleCloseModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-neo-white neo-border-thick max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-neo-cyan border-b-4 border-neo-black p-4 sm:p-6 flex items-center justify-between">
              <div>
                <span className="text-2xl sm:text-3xl mr-2">
                  {inquiryTypes.find(t => t.value === formData.inquiryType)?.emoji}
                </span>
                <span className="text-lg sm:text-xl font-black uppercase">
                  {inquiryTypes.find(t => t.value === formData.inquiryType)?.label}
                </span>
              </div>
              <button
                onClick={handleCloseModal}
                className="w-10 h-10 bg-neo-black text-neo-white font-black text-xl hover:bg-neo-pink transition-colors flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* Questions */}
            <div className="p-4 sm:p-8 space-y-6">
              <p className="font-bold text-neo-black/70 text-sm sm:text-base">
                Please answer these questions to help us understand your needs better.
              </p>

              {currentQuestions.map((q, index) => (
                <div key={index} className="space-y-2">
                  <label className="block font-black uppercase text-xs sm:text-sm tracking-wider">
                    {q.question} *
                  </label>
                  
                  {q.type === "text" ? (
                    <textarea
                      value={questionnaireAnswers[`q${index}`] || ""}
                      onChange={(e) => handleQuestionnaireChange(index, e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border-4 border-neo-black bg-neo-white font-bold text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-neo-yellow transition-all resize-none"
                      placeholder="Your answer..."
                    />
                  ) : (
                    <div className="relative">
                      <select
                        value={questionnaireAnswers[`q${index}`] || ""}
                        onChange={(e) => handleQuestionnaireChange(index, e.target.value)}
                        className="w-full px-4 py-3 border-4 border-neo-black bg-neo-white font-bold text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-neo-yellow transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select an option...</option>
                        {q.options?.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Summary */}
              <div className="bg-neo-yellow/30 border-4 border-neo-black p-4 mt-6">
                <h4 className="font-black uppercase text-sm mb-2">Your Inquiry Summary</h4>
                <p className="text-sm font-bold">
                  <span className="text-neo-black/60">Name:</span> {formData.name}
                </p>
                <p className="text-sm font-bold">
                  <span className="text-neo-black/60">Email:</span> {formData.email}
                </p>
                <p className="text-sm font-bold">
                  <span className="text-neo-black/60">Type:</span> {inquiryTypes.find(t => t.value === formData.inquiryType)?.label}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-neo-white border-t-4 border-neo-black p-4 sm:p-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleCloseModal}
                className="flex-1 px-6 py-3 border-4 border-neo-black bg-neo-white text-neo-black font-black uppercase hover:bg-neo-black hover:text-neo-white transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={handleFinalSubmit}
                disabled={!allQuestionsAnswered || isSubmitting}
                className="flex-1 px-6 py-3 border-4 border-neo-black bg-neo-green text-neo-black font-black uppercase hover:bg-neo-black hover:text-neo-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Submit Inquiry →"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
