"use client";

import { ArrowRight } from "lucide-react";

export default function AdvisorSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-slate-100 border border-slate-200/80 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
        <div className="max-w-xl">
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase block mb-2">
            STILL UNSURE?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 leading-tight mb-4">
            Let&apos;s figure it out together.
          </h2>
          <p className="text-sm text-slate-600">
            Your future is important. We&apos;re here to help you make the right choice.
          </p>
        </div>
        <div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white hover:bg-black text-sm font-medium px-6 py-3.5 rounded-full transition-all shadow-md shrink-0"
          >
            <span>Talk to an Advisor</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
