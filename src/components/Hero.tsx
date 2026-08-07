"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Building2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        <div className="lg:col-span-7">
          {/* Tagline */}
          <div className="text-xs font-bold tracking-widest text-[#A89885] uppercase mb-4">
            FIND YOUR HORIZON
          </div>

          {/* Hero Title */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight mb-6 text-slate-900">
            Find the right <br /> university for <br /> <span className="font-cormorant italic">your future.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
            We help you explore, compare and choose from India&apos;s best universities - based on what matters to you.
          </p>

          {/* Dual Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Link
              href="#compare"
              className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white hover:bg-black text-sm font-medium px-6 py-3.5 rounded-full transition-all duration-200 shadow-md group"
            >
              <span>Find My Horizon</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-3 h-3 text-white -rotate-45" />
              </div>
            </Link>

            <Link
              href="#universities"
              className="inline-flex items-center gap-2 bg-white text-slate-800 hover:bg-slate-50 border border-slate-200 text-sm font-medium px-6 py-3.5 rounded-full transition-all duration-200 shadow-sm"
            >
              Explore Universities
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E4DFD3] max-w-xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/80 border border-[#E9E4D9] flex items-center justify-center text-slate-700 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium text-slate-700 leading-tight">UGC Approved Universities</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/80 border border-[#E9E4D9] flex items-center justify-center text-slate-700 shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium text-slate-700 leading-tight">Direct University Admissions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/80 border border-[#E9E4D9] flex items-center justify-center text-slate-700 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium text-slate-700 leading-tight">100% Free Guidance</span>
            </div>
          </div>
        </div>

        {/* Hero Right Visual Column with soft fading vignette edges */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full h-[460px] sm:h-[560px]">
            {/* Smooth Edge Fading Mask */}
            <div
              className="w-full h-full"
              style={{
                maskImage: "radial-gradient(circle at center, black 55%, transparent 95%)",
                WebkitMaskImage: "radial-gradient(circle at center, black 55%, transparent 95%)",
              }}
            >
              <img
                src="/hero.jpg"
                alt="Student exploring universities"
                className="w-full h-full object-cover object-center rounded-3xl"
              />
            </div>

            {/* Floating Card Over Student Image */}
            <div className="absolute top-10 left-4 sm:left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/80 max-w-[200px] text-slate-900 z-10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded bg-red-100 text-red-700 flex items-center justify-center font-bold text-[10px]">
                  NM
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">NMIMS</div>
                  <div className="text-[10px] text-slate-500">Global Access</div>
                </div>
              </div>
              <span className="inline-block px-2 py-0.5 rounded bg-[#F9F3EA] border border-[#E8DCCB] text-[#B58A4E] text-[9px] font-bold mb-2">
                NAAC A+
              </span>
              <div className="text-[11px] font-medium text-slate-700">MBA</div>
              <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5 mb-2">
                <span>🎓</span> Online
              </div>
              <div className="text-[10px] font-semibold text-slate-900 flex items-center gap-1 border-t border-slate-100 pt-2">
                Explore <ArrowRight className="w-2.5 h-2.5" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
