"use client";

import { motion } from "framer-motion";

const METRICS = [
  { value: "$7M+", label: "Client Revenue Generated" },
  { value: "72%", label: "Average Growth Rate" },
  { value: "10+", label: "Senior Consultants" },
  { value: "99%", label: "Client Retention Rate" },
];

export default function Impact() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#1a3c34] text-white rounded-3xl p-8 sm:p-14 shadow-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-emerald-800/40">
          {METRICS.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`text-center ${index !== 0 ? "pt-6 sm:pt-0 sm:pl-6" : ""}`}
            >
              <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-2">
                {metric.value}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/70 font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
