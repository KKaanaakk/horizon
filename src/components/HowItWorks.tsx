"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const STEPS = [
  {
    step: "01",
    title: "Simple booking",
    description: "Schedule your initial discovery call effortlessly using our streamlined online booking platform.",
  },
  {
    step: "02",
    title: "Tailored strategy",
    description: "We analyze your business metrics and craft a bespoke roadmap designed to achieve rapid growth.",
  },
  {
    step: "03",
    title: "Continuous support",
    description: "Receive ongoing guidance, execution support, and data-backed performance optimizations.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/60 text-[#1a3c34] text-xs font-semibold uppercase tracking-wider mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1a3c34]" />
          How it works
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 leading-tight">
          Three simple steps to transform your growth
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STEPS.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white/80 border border-slate-200/80 rounded-3xl p-8 relative flex flex-col justify-between"
          >
            <div>
              <span className="font-serif text-4xl sm:text-5xl text-emerald-800/20 font-bold block mb-4">
                {item.step}
              </span>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#1a3c34] uppercase tracking-wider hover:gap-3 transition-all"
            >
              <span>Learn More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
