(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
function Button({ href, variant = "primary", size = "md", children, className = "" }) {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200";
    const variants = {
        primary: "bg-gold-500 text-white hover:bg-gold-600 shadow-sm",
        secondary: "bg-teal-500 text-white hover:bg-teal-600 shadow-sm",
        outline: "border-2 border-gold-500 text-gold-600 hover:bg-gold-50"
    };
    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Button.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SectionHeading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SectionHeading({ title, subtitle, centered = true, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${centered ? "text-center" : ""} ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal-950",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/SectionHeading.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-lg text-charcoal-600 max-w-3xl mx-auto",
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/src/components/SectionHeading.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SectionHeading.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = SectionHeading;
var _c;
__turbopack_context__.k.register(_c, "SectionHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/faq/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SectionHeading.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const faqSections = [
    {
        id: "understanding",
        title: "Understanding What We Do",
        items: [
            {
                question: "What exactly do you do?",
                answer: "We help people and organizations build emotional clarity, grounding, and wellbeing through QScan Frequency Insight, Light & Sound Therapy, Coaching & Behaviour Change Support, and Business & Leadership Consulting using Quantum Insight. Everything we do is responsible, ethical, mature, and human-centered."
            },
            {
                question: "Is this medical treatment?",
                answer: "No. We do NOT diagnose, treat illness, promise cures, or replace medical care. Our work supports awareness, emotional wellbeing, personal clarity, and better wellness decision-making."
            },
            {
                question: 'Is this "miracle wellness" or hype?',
                answer: "No hype. No miracle claims. No emotional manipulation. We position everything honestly and responsibly. Our focus is meaningful experience, awareness, emotional grounding, and maturity."
            }
        ]
    },
    {
        id: "qscan",
        title: "QScan Frequency Insight",
        items: [
            {
                question: "What is QScan?",
                answer: "QScan is an advanced bioenergetic insight system that explores correlations related to stress influence, emotional energy, vitality tendencies, lifestyle impact, and energetic balance patterns. It helps people understand themselves better and reflect more deeply on their wellness journey."
            },
            {
                question: "What does QScan NOT do?",
                answer: "It does NOT diagnose diseases, give medical advice, claim to cure, replace doctors, or substitute medical evaluation."
            },
            {
                question: "How does QScan help in real life?",
                answer: "People generally gain clarity about stress and emotional load, awareness of personal patterns, deeper self-understanding, and support to reflect and take better steps in their wellness life. Many people leave sessions feeling clearer, calmer, and emotionally seen."
            }
        ]
    },
    {
        id: "light-sound",
        title: "Light & Sound Therapy",
        items: [
            {
                question: "What is Light & Sound Therapy?",
                answer: "A deeply calming experiential therapy using tuned light and sound to support relaxation, emotional release, nervous system calming, and clarity and inner balance."
            },
            {
                question: "Is it safe?",
                answer: "Yes. Sessions are guided, grounded, and gently facilitated."
            },
            {
                question: "Is it a medical procedure?",
                answer: "No. It is a premium experiential wellness modality — not medical treatment."
            }
        ]
    },
    {
        id: "coaching",
        title: "Coaching & Human Development",
        items: [
            {
                question: "Who is your coaching for?",
                answer: "We work with individuals, leaders, teams, and corporate organizations. Anyone who wants grounding, emotional wellbeing, mindset growth, or healthier performance."
            },
            {
                question: "What kind of coaching do you do?",
                answer: "We support emotional wellbeing, behaviour change, resilience-building, leadership grounding, personal clarity, and peak performance. All coaching is confidential, respectful, and deeply human."
            }
        ]
    },
    {
        id: "consulting",
        title: "Business & Leadership Consulting",
        items: [
            {
                question: "How do you use quantum insight in business or leadership work?",
                answer: "We use QScan insight and reflective frameworks to help leaders understand emotional and energetic stress dynamics, gain clarity before taking key decisions, strengthen leadership grounding, and build healthier team culture and performance environments. We don't predict outcomes. We create awareness and clarity for better leadership choices."
            },
            {
                question: "Do you work with corporate organizations?",
                answer: "Yes. We work with leadership teams, organizations, and wellness-forward businesses who value emotional intelligence, maturity, and responsible innovation."
            }
        ]
    },
    {
        id: "safety",
        title: "Safety, Ethics & Responsibility",
        items: [
            {
                question: "Is what you do compliant and ethical?",
                answer: "Yes. We are extremely disciplined about how we communicate and deliver work. We strictly avoid diagnosis, medical claims, cure statements, and fear-based positioning. We stay within ethical wellness boundaries at all times."
            },
            {
                question: "Do you guarantee results?",
                answer: "No. Human wellbeing is personal and complex. We promise integrity, responsibility, maturity, genuine support, and meaningful experience. Not unrealistic guarantees."
            },
            {
                question: "Is this spiritual or religious?",
                answer: "No. Our work is human-centered, experience-based, and suitable for all belief systems."
            }
        ]
    },
    {
        id: "protxs",
        title: "PROTXS Product FAQs",
        items: [
            {
                question: "What is PROTXS?",
                answer: "PROTXS is a supportive wellness technology designed to help harmonize and neutralize disruptive electromagnetic frequencies (EMF) from everyday wireless environments such as mobile devices, Wi-Fi, smart technology and 5G networks, while maintaining normal connectivity performance."
            },
            {
                question: "Does PROTXS block or weaken signal strength?",
                answer: "No. PROTXS does not block radiation or reduce signal strength. It is designed to work alongside wireless technology while helping to create a more balanced electromagnetic environment."
            },
            {
                question: "How does PROTXS help in real life?",
                answer: "Many people choose PROTXS to support comfort, energetic balance and wellbeing in technology-dense environments. It is positioned as a supportive wellness tool, not a medical solution."
            },
            {
                question: "Is PROTXS a medical device?",
                answer: "No. PROTXS is not a medical product. It does not diagnose, treat, cure, or replace medical care. It is a lifestyle wellbeing support technology."
            },
            {
                question: "Is PROTXS safe to use?",
                answer: "Yes. It is non-invasive, lightweight, chemical-free and designed to be used in everyday environments without interfering with normal device use."
            },
            {
                question: "Who is PROTXS suitable for?",
                answer: "It is suitable for individuals, families, wellness environments, practitioners and organizations who wish to support wellbeing in high-exposure wireless environments."
            },
            {
                question: "Does PROTXS replace good digital wellbeing habits?",
                answer: "No. It is a supportive tool, not a substitute for healthy digital habits such as mindful device usage, balanced lifestyle, and proper wellness care."
            },
            {
                question: "Does PROTXS interfere with electronics or devices?",
                answer: "No. Devices function normally. Connectivity is not reduced or disrupted."
            },
            {
                question: "Where can PROTXS be used?",
                answer: "It can be used on personal devices, at home, in wellness environments, workspaces or areas with strong wireless exposure."
            }
        ]
    },
    {
        id: "fit",
        title: "Who Is This Right For?",
        items: [
            {
                question: "Who benefits the most from working with you?",
                answer: "People and organizations who value depth, emotional grounding, maturity, responsible innovation, and premium human experience."
            },
            {
                question: "Who is this NOT for?",
                answer: 'Those looking for miracle promises, dramatic claims, "quick magic solutions", or medical replacement. We prefer thoughtful, emotionally intelligent, premium partnerships.'
            }
        ]
    },
    {
        id: "practical",
        title: "Practical Questions",
        items: [
            {
                question: "How long are sessions?",
                answer: "Approximate guidance: QScan: 45–60 minutes, Light & Sound: 30–45 minutes, Coaching: 60 minutes, Consulting: customized as per engagement."
            },
            {
                question: "Do you work with children?",
                answer: "Primarily adults & leadership contexts. Younger clients only where appropriate and responsibly suitable."
            },
            {
                question: "Where do you operate?",
                answer: "Primarily UAE and the Middle East, with selected international engagements."
            }
        ]
    }
];
function AccordionItem({ item, isOpen, onToggle }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b border-charcoal-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "w-full py-5 text-left flex items-center justify-between hover:text-gold-600 transition-colors",
                onClick: onToggle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-lg font-medium text-charcoal-900 pr-8",
                        children: item.question
                    }, void 0, false, {
                        fileName: "[project]/src/app/faq/page.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: `w-5 h-5 text-charcoal-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 9l-7 7-7-7"
                        }, void 0, false, {
                            fileName: "[project]/src/app/faq/page.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/faq/page.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/faq/page.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-charcoal-600 leading-relaxed",
                    children: item.answer
                }, void 0, false, {
                    fileName: "[project]/src/app/faq/page.tsx",
                    lineNumber: 264,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/faq/page.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/faq/page.tsx",
        lineNumber: 235,
        columnNumber: 5
    }, this);
}
_c = AccordionItem;
function FAQSectionComponent({ section }) {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: section.id,
        className: "scroll-mt-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-heading font-bold text-charcoal-950 mb-4",
                children: section.title
            }, void 0, false, {
                fileName: "[project]/src/app/faq/page.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl border border-charcoal-100 px-6",
                children: section.items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                        item: item,
                        isOpen: openIndex === index,
                        onToggle: ()=>setOpenIndex(openIndex === index ? null : index)
                    }, index, false, {
                        fileName: "[project]/src/app/faq/page.tsx",
                        lineNumber: 280,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/faq/page.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/faq/page.tsx",
        lineNumber: 274,
        columnNumber: 5
    }, this);
}
_s(FAQSectionComponent, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c1 = FAQSectionComponent;
function FAQPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 bg-gradient-to-br from-charcoal-50 via-white to-gold-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal-950",
                                children: [
                                    "Frequently Asked",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gold-600",
                                        children: " Questions"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/faq/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/faq/page.tsx",
                                lineNumber: 299,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 text-xl text-charcoal-600",
                                children: "Clarity. Honesty. Responsibility."
                            }, void 0, false, {
                                fileName: "[project]/src/app/faq/page.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-lg text-charcoal-500",
                                children: "If you're curious, uncertain, or simply exploring — these answers will help."
                            }, void 0, false, {
                                fileName: "[project]/src/app/faq/page.tsx",
                                lineNumber: 306,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/faq/page.tsx",
                        lineNumber: 298,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/faq/page.tsx",
                    lineNumber: 297,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/faq/page.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 bg-charcoal-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-12",
                        children: faqSections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQSectionComponent, {
                                section: section
                            }, section.id, false, {
                                fileName: "[project]/src/app/faq/page.tsx",
                                lineNumber: 319,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/faq/page.tsx",
                        lineNumber: 317,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/faq/page.tsx",
                    lineNumber: 316,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/faq/page.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionHeading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: "If You Still Have Questions",
                                subtitle: "That's completely natural. Let's talk calmly and explore what feels right for you."
                            }, void 0, false, {
                                fileName: "[project]/src/app/faq/page.tsx",
                                lineNumber: 329,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    variant: "primary",
                                    size: "lg",
                                    children: "Start a Conversation"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/faq/page.tsx",
                                    lineNumber: 334,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/faq/page.tsx",
                                lineNumber: 333,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/faq/page.tsx",
                        lineNumber: 328,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/faq/page.tsx",
                    lineNumber: 327,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/faq/page.tsx",
                lineNumber: 326,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/faq/page.tsx",
        lineNumber: 294,
        columnNumber: 5
    }, this);
}
_c2 = FAQPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AccordionItem");
__turbopack_context__.k.register(_c1, "FAQSectionComponent");
__turbopack_context__.k.register(_c2, "FAQPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_2ed445de._.js.map