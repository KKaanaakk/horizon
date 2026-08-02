"use client";

import { motion } from "framer-motion";
import { MessageSquare, Settings, Lightbulb, BarChart3, ShieldCheck, Zap } from "lucide-react";

const FEATURES = [
  {
    icon: MessageSquare,
    title: "Unlimited consultations",
    description: "Get continuous expert guidance without worrying about hourly limits or hidden costs.",
  },
  {
    icon: Settings,
    title: "Tailored solutions",
    description: "Receive custom strategies aligned strictly with your unique business goals and market dynamic.",
  },
  {
    icon: Lightbulb,
    title: "Expert insights",
    description: "Access industry-leading perspectives to overcome operational hurdles effectively.",
  },
  {
    icon: BarChart3,
    title: "Data strategies",
    description: "Make confident choices backed by comprehensive data analysis and predictive growth modeling.",
  },
  {
    icon: ShieldCheck,
    title: "Ongoing support",
    description: "Enjoy dedicated assistance at every stage of execution to ensure sustainable result.",
  },
  {
    icon: Zap,
    title: "Seamless execution",
    description: "Turn plans into action smoothly with minimal disruption to your daily operations.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/60 text-[#1a3c34] text-xs font-semibold uppercase tracking-wider mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1a3c34]" />
          Features
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-slate-900 leading-tight">
          Everything you need to scale with confidence
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/80 border border-slate-200/80 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#1a3c34] flex items-center justify-center mb-6 group-hover:bg-[#1a3c34] group-hover:text-white transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
