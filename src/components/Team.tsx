"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Star, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TEAM = [
  {
    name: "Eleanor Vance",
    role: "Managing Director & Strategy Lead",
    bio: "Ex-McKinsey consultant with 12+ years expertise scaling enterprise software & fintech ventures.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    metric: "High conversion",
    subMetric: "2x sales momentum",
  },
  {
    name: "Marcus Thorne",
    role: "Head of Digital Transformation",
    bio: "Pioneered tech modernization strategies across 40+ global enterprises with measurable ROI.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    metric: "Efficiency boost",
    subMetric: "+45% operational speed",
  },
  {
    name: "Sophia Chen",
    role: "Principal Operations Advisor",
    bio: "Specializes in optimizing supply chains, team performance, and sustainable corporate scalability.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    metric: "Cost reduction",
    subMetric: "-30% overhead costs",
  },
];

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((p) => (p === 0 ? TEAM.length - 1 : p - 1));
  };

  const next = () => {
    setCurrentIndex((p) => (p === TEAM.length - 1 ? 0 : p + 1));
  };

  const current = TEAM[currentIndex];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/60 text-[#1a3c34] text-xs font-semibold uppercase tracking-wider mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1a3c34]" />
          Our Experts
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 leading-tight">
          Meet the minds behind your business growth
        </h2>
      </div>

      {/* Team Showcase Card */}
      <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Portrait Placeholder */}
          <div className="relative h-[350px] sm:h-[400px] rounded-2xl overflow-hidden shadow-md bg-emerald-950/90 border border-emerald-800/40 flex flex-col items-center justify-center p-6 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-between h-full w-full py-4"
              >
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-800/50 border border-emerald-500/30 flex items-center justify-center mb-3 text-emerald-300">
                    <User className="w-10 h-10" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{current.name}</h4>
                  <p className="text-xs text-emerald-200/70">{current.role}</p>
                </div>

                <div className="w-full bg-emerald-900/80 backdrop-blur-md p-3 rounded-xl flex items-center justify-between border border-emerald-700/50">
                  <div>
                    <span className="text-xs font-semibold uppercase text-emerald-300 tracking-wider">
                      {current.metric}
                    </span>
                    <p className="text-xs text-emerald-100/80 font-medium">
                      {current.subMetric}
                    </p>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between h-full py-2">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-1">
                {current.name}
              </h3>
              <p className="text-sm font-medium text-[#1a3c34] mb-6">
                {current.role}
              </p>

              <blockquote className="text-sm sm:text-base text-slate-600 leading-relaxed italic mb-8 border-l-2 border-[#1a3c34] pl-4">
                &ldquo;{current.bio}&rdquo;
              </blockquote>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-6">
              <span className="text-xs font-medium text-slate-400">
                0{currentIndex + 1} / 0{TEAM.length}
              </span>

              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#1a3c34] hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-[#1a3c34] hover:text-white transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
