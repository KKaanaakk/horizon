"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Laptop, Briefcase, Code, FlaskConical, BookOpen, Atom, TrendingUp, Edit3, MoreHorizontal } from "lucide-react";

const COURSES = [
  { label: "MBA", icon: GraduationCap },
  { label: "MCA", icon: Laptop },
  { label: "BBA", icon: Briefcase },
  { label: "BCA", icon: Code },
  { label: "B.Sc", icon: FlaskConical },
  { label: "BA", icon: BookOpen },
  { label: "M.Sc", icon: Atom },
  { label: "M.Com", icon: TrendingUp },
  { label: "MA", icon: Edit3 },
  { label: "More", icon: MoreHorizontal },
];

export default function Partners() {
  return (
    <section id="courses" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Belief Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6 bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 flex flex-col justify-between"
        >
          <div>
            <div className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-4">
              NOBODY TELLS YOU THIS...
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-slate-900 leading-tight mb-4">
              Every university claims to be the best.
            </h2>
            <h3 className="font-serif italic text-2xl sm:text-3xl font-normal text-slate-700 leading-tight mb-6">
              But the best for someone else, may not be best for you.
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              We don&apos;t believe there&apos;s one &quot;best&quot; university. We believe there&apos;s only the one that&apos;s right for you. Your goals. Your budget. Your future.
            </p>
          </div>
          <div>
            <a href="#about" className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-slate-900 uppercase hover:underline">
              OUR BELIEF <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Right Course Grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6 bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-1">
                  EXPLORE BY COURSE
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900">
                  Find a course. Find your path.
                </h3>
              </div>
              <a href="#courses" className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1">
                View all courses <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-5 gap-3">
              {COURSES.map((course, idx) => {
                const Icon = course.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-3 rounded-2xl border border-slate-100 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-100/80 transition-all cursor-pointer text-center group"
                  >
                    <Icon className="w-5 h-5 text-slate-700 group-hover:scale-110 transition-transform mb-2" />
                    <span className="text-xs font-medium text-slate-800">{course.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
