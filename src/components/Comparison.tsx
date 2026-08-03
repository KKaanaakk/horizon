"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export default function Comparison() {
  return (
    <section id="compare" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Title & CTA */}
          <div className="lg:col-span-4">
            <div className="text-xs font-bold tracking-wider text-[#A89885] uppercase mb-2">
              COMPARE UNIVERSITIES
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 leading-tight mb-4">
              Still confused? <br />
              Compare side by side.
            </h2>
            <p className="text-sm text-slate-500 mb-8">
              Compare fees, rankings, approvals and more.
            </p>
            {/* <a
              href="#compare"
              className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white hover:bg-black text-xs font-medium px-5 py-3 rounded-full transition-all shadow-sm"
            >
              <span>Compare Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a> */}
          </div>

          {/* Center Table */}
          <div className="lg:col-span-5 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] uppercase font-bold text-slate-400">
                  <th className="pb-3 pr-2">FEATURES</th>
                  <th className="pb-3 px-2 text-center">NMIMS</th>
                  <th className="pb-3 px-2 text-center">AMITY ONLINE</th>
                  <th className="pb-3 px-2 text-center">MANIPAL</th>
                  <th className="pb-3 px-2 text-center">DPU ONLINE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">

                <tr>
                  <td className="py-2.5 pr-2 font-semibold text-slate-900">NAAC Grade</td>
                  <td className="py-2.5 px-2 text-center">A+</td>
                  <td className="py-2.5 px-2 text-center">A+</td>
                  <td className="py-2.5 px-2 text-center">A+</td>
                  <td className="py-2.5 px-2 text-center">A</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-2 font-semibold text-slate-900">UGC Approved</td>
                  <td className="py-2.5 px-2 text-center text-emerald-600"><Check className="w-3.5 h-3.5 mx-auto" /></td>
                  <td className="py-2.5 px-2 text-center text-emerald-600"><Check className="w-3.5 h-3.5 mx-auto" /></td>
                  <td className="py-2.5 px-2 text-center text-emerald-600"><Check className="w-3.5 h-3.5 mx-auto" /></td>
                  <td className="py-2.5 px-2 text-center text-emerald-600"><Check className="w-3.5 h-3.5 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-2 font-semibold text-slate-900">Learning Mode</td>
                  <td className="py-2.5 px-2 text-center">Online</td>
                  <td className="py-2.5 px-2 text-center">Online</td>
                  <td className="py-2.5 px-2 text-center">Online</td>
                  <td className="py-2.5 px-2 text-center">Online</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-2 font-semibold text-slate-900">Duration</td>
                  <td className="py-2.5 px-2 text-center">2 Years</td>
                  <td className="py-2.5 px-2 text-center">2 Years</td>
                  <td className="py-2.5 px-2 text-center">2 Years</td>
                  <td className="py-2.5 px-2 text-center">2 Years</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-2 font-semibold text-slate-900">EMI Available</td>
                  <td className="py-2.5 px-2 text-center text-emerald-600"><Check className="w-3.5 h-3.5 mx-auto" /></td>
                  <td className="py-2.5 px-2 text-center text-emerald-600"><Check className="w-3.5 h-3.5 mx-auto" /></td>
                  <td className="py-2.5 px-2 text-center text-emerald-600"><Check className="w-3.5 h-3.5 mx-auto" /></td>
                  <td className="py-2.5 px-2 text-center text-emerald-600"><Check className="w-3.5 h-3.5 mx-auto" /></td>
                </tr>
              </tbody>
            </table>

          </div>

          {/* Right Image */}
          <div className="lg:col-span-3">
            <div className="h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop"
                alt="Studying with books and lamp"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
