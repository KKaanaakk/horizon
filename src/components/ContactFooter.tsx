"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer id="contact" className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-8 gap-8 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-4 space-y-4">
          <Link href="#" className="font-sans font-extrabold text-2xl tracking-widest text-slate-900 uppercase">
            HORIZON
          </Link>
          <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
            Honest guidance. <br />
            Better choices. <br />
            Stronger futures.
          </p>
          {/* <div className="flex items-center gap-3 text-slate-600 text-xs font-semibold pt-2">
            <span>🌐</span> <span>in</span> <span>▶</span> <span>𝕏</span>
          </div> */}
        </div>

        {/* Links Column 1: Explore */}
        <div className="md:col-span-2">
          <h4 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">
            EXPLORE
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
            <li><Link href="#universities" className="hover:text-slate-900 transition-colors">Universities</Link></li>
            <li><Link href="#courses" className="hover:text-slate-900 transition-colors">Courses</Link></li>
            <li><Link href="#compare" className="hover:text-slate-900 transition-colors">Compare</Link></li>
            <li><Link href="#journal" className="hover:text-slate-900 transition-colors">The Journal</Link></li>
          </ul>
        </div>

        {/* Links Column 2: Company */}
        <div className="md:col-span-2">
          <h4 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">
            COMPANY
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
            <li><Link href="#about" className="hover:text-slate-900 transition-colors">About Us</Link></li>
            <li><Link href="#belief" className="hover:text-slate-900 transition-colors">Our Belief</Link></li>
            <li><Link href="#careers" className="hover:text-slate-900 transition-colors">Careers</Link></li>
            <li><Link href="#contact" className="hover:text-slate-900 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Links Column 3: Support */}
        {/* <div className="md:col-span-2">
          <h4 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">
            SUPPORT
          </h4>
          <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
            <li><Link href="#faqs" className="hover:text-slate-900 transition-colors">FAQs</Link></li>
            <li><Link href="#contact" className="hover:text-slate-900 transition-colors">Let&apos;s Talk</Link></li>
            <li><Link href="#privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link></li>
            <li><Link href="#terms" className="hover:text-slate-900 transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div> */}

        {/* Newsletter Column */}
        {/* <div className="md:col-span-2">
          <h4 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">
            STAY UPDATED
          </h4>
          <p className="text-xs text-slate-500 mb-3">
            Get the latest insights and university updates straight to your inbox.
          </p>
          <div className="relative flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-slate-50 border border-slate-200 rounded-full px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-900"
            />
            <button aria-label="Subscribe to newsletter" className="absolute right-1.5 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-black">
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
