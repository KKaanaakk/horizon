"use client";

import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  { q: "Are the degrees UGC approved?", a: "Yes, all universities featured on Horizon offer UGC-DEB recognized online & distance degree programs valid for government jobs & higher education." },
  { q: "Do I have to pay Horizon for counselling?", a: "No! Horizon's consultation and guidance are 100% free for all students." },
  { q: "Can working professionals apply?", a: "Yes, online programs are specifically designed with flexible schedules for working professionals." },
  { q: "What if I'm confused between two universities?", a: "Our dedicated advisors offer unbiased comparison sessions to help you choose the best university based on your budget and career goals." },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header Centered */}
      <div className="text-center mb-10">
        <div className="text-[11px] font-bold tracking-widest text-[#A89885] uppercase mb-2">
          THINGS YOU MIGHT BE WONDERING
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900">
          Frequently Asked Questions
        </h2>
      </div>

      {/* Accordions Centered & Fluid */}
      <div className="space-y-3">
        {FAQS.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl transition-all duration-200 border ${isOpen
                ? "bg-white border-slate-300 shadow-sm"
                : "bg-white/60 hover:bg-white border-slate-200/80"
                }`}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full px-6 py-4 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-slate-900 gap-4"
              >
                <span>{item.q}</span>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                >
                  {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>


    </section>
  );
}
