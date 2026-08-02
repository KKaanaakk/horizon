"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const UNIVERSITIES = [
  {
    name: "Amity University",
    sub: "Online",
    naac: "NAAC A+",
    courses: "MBA, BBA, MCA & more",
    fees: "₹1,99,000 / Year",
    mode: "Online",
    color: "bg-amber-50 border-amber-200 text-amber-900",
    badge: "A",
  },
  {
    name: "NMIMS",
    sub: "Global Access",
    naac: "NAAC A+",
    courses: "MBA, BBA, MCA & more",
    fees: "₹2,20,000 / Year",
    mode: "Online",
    color: "bg-red-50 border-red-200 text-red-900",
    badge: "NM",
  },
  {
    name: "Manipal University",
    sub: "Jaipur",
    naac: "NAAC A+",
    courses: "MBA, MCA, BBA & more",
    fees: "₹1,70,000 / Year",
    mode: "Online",
    color: "bg-orange-50 border-orange-200 text-orange-900",
    badge: "MU",
  },
  {
    name: "DY Patil University",
    sub: "Online",
    naac: "NAAC A",
    courses: "MBA, MCA, BBA & more",
    fees: "₹95,000 / Year",
    mode: "Online",
    color: "bg-rose-50 border-rose-200 text-rose-900",
    badge: "DPU",
  },
  {
    name: "Parul University",
    sub: "Online",
    naac: "NAAC A++",
    courses: "MBA, MCA, BCA & more",
    fees: "₹1,20,000 / Year",
    mode: "Online",
    color: "bg-purple-50 border-purple-200 text-purple-900",
    badge: "PU",
  },
];

export default function Services() {
  return (
    <section id="universities" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-2">
            EXPLORE UNIVERSITIES
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900">
            Top universities. Handpicked for you.
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <a href="#universities" className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1">
            View all universities <ArrowRight className="w-3 h-3" />
          </a>
          <div className="flex items-center gap-2">
            <button aria-label="Previous page" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button aria-label="Next page" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {UNIVERSITIES.map((uni, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="bg-white border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between hover:shadow-md transition-all group"
          >
            <div>
              <div className="flex items-start gap-3 mb-4">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${uni.color}`}>
                  {uni.badge}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">
                    {uni.name}
                  </h3>
                  <p className="text-[11px] text-slate-500">{uni.sub}</p>
                </div>
              </div>

              <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold mb-3">
                {uni.naac}
              </span>

              <p className="text-xs text-slate-600 font-medium mb-1">
                {uni.courses}
              </p>
              <div className="text-sm font-bold text-slate-900 mb-1">
                {uni.fees}
              </div>
              <div className="text-[11px] text-slate-500 flex items-center gap-1 mb-4">
                <span>🎓</span> {uni.mode}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-semibold text-slate-900 group-hover:translate-x-1 transition-transform">
              <span>Explore</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
