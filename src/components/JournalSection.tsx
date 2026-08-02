"use client";

import { ArrowRight } from "lucide-react";

const ARTICLES = [
  {
    tag: "CAREERS",
    title: "Online MBA vs Distance MBA: Which is Better?",
    date: "May 14, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop",
  },
  {
    tag: "UNIVERSITIES",
    title: "Top Online Universities in India (2024)",
    date: "May 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=400&auto=format&fit=crop",
  },
  {
    tag: "GUIDES",
    title: "How to Choose the Right University: 7 Steps",
    date: "May 6, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&auto=format&fit=crop",
  },
];

export default function JournalSection() {
  return (
    <section id="journal" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">
            THE HORIZON JOURNAL
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900">
            Insights to help you grow.
          </h2>
        </div>
        <a href="#journal" className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1">
          View all articles <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {ARTICLES.map((art, idx) => (
          <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden flex flex-col group cursor-pointer shadow-sm hover:shadow-md transition-shadow">
            <div className="h-40 overflow-hidden bg-slate-100">
              <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-2 block">
                  {art.tag}
                </span>
                <h3 className="text-sm font-bold text-slate-900 line-clamp-2 leading-snug mb-4">
                  {art.title}
                </h3>
              </div>
              <div className="text-xs text-slate-400 flex items-center justify-between border-t border-slate-100 pt-3">
                <span>{art.date}</span>
                <span>• {art.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
