"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ARTICLES = [
  {
    tag: "CAREERS",
    title: "Online MBA vs Distance MBA: Which is Better?",
    date: "May 14, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop",
  },
  {
    tag: "UNIVERSITIES",
    title: "Top Online Universities in India (2024)",
    date: "May 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=400&auto=format&fit=crop",
  },
  {
    tag: "GUIDES",
    title: "How to Choose the Right University: 7 Steps",
    date: "May 6, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&auto=format&fit=crop",
  },
];

const FAQS = [
  { q: "Are the degrees UGC approved?", a: "Yes, all universities featured on Horizon offer UGC-DEB recognized online & distance degree programs valid for government jobs & higher education." },
  { q: "Do I have to pay Horizon for counselling?", a: "No! Horizon's consultation and guidance are 100% free for all students." },
  { q: "Can working professionals apply?", a: "Yes, online programs are specifically designed with flexible schedules for working professionals." },
  { q: "What if I'm confused between two universities?", a: "Our dedicated advisors offer unbiased comparison sessions to help you choose the best university based on your budget and career goals." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="journal" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Horizon Journal */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">
                THE HORIZON JOURNAL
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900">
                Insights to help you grow.
              </h2>
            </div>
            <a href="#journal" className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1">
              View all articles <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {ARTICLES.map((art, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden flex flex-col group cursor-pointer">
                <div className="h-28 overflow-hidden bg-slate-100">
                  <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-3.5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[9px] font-bold tracking-wider text-slate-400 uppercase mb-1 block">
                      {art.tag}
                    </span>
                    <h3 className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug mb-3">
                      {art.title}
                    </h3>
                  </div>
                  <div className="text-[10px] text-slate-400 flex items-center justify-between border-t border-slate-100 pt-2">
                    <span>{art.date}</span>
                    <span>• {art.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: FAQs + Talk to Advisor */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-1 gap-6">
          {/* FAQ Accordion */}
          <div className="sm:col-span-7 lg:col-span-1">
            <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-3">
              THINGS YOU MIGHT BE WONDERING
            </div>
            <div className="space-y-2">
              {FAQS.map((item, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className="bg-white border border-slate-200/80 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="w-full px-4 py-3 text-left flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-slate-900"
                    >
                      <span>{item.q}</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-4 pb-3 text-xs text-slate-500 leading-relaxed border-t border-slate-50 pt-2"
                        >
                          {item.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
            <a href="#faqs" className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 hover:text-slate-900 mt-3">
              View all FAQs <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Talk to Advisor Card */}
          <div className="sm:col-span-5 lg:col-span-1 bg-slate-100 border border-slate-200/80 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase block mb-1">
                STILL UNSURE?
              </span>
              <h3 className="font-serif text-2xl font-normal text-slate-900 leading-tight mb-2">
                Let&apos;s figure it out together.
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Your future is important. We&apos;re here to help you make the right choice.
              </p>
            </div>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white hover:bg-black text-xs font-medium px-4 py-2.5 rounded-full transition-all"
              >
                <span>Talk to an Advisor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
