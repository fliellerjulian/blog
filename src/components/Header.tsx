"use client";

import { Zap, ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="relative w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br from-blue-400/20 via-indigo-400/20 to-purple-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 sm:py-20">
        <div className="text-center space-y-8">
          {/* Main content area */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-4 py-2 text-sm font-medium text-blue-700">
              <Zap className="w-4 h-4" />
              AI Researcher & Technology Enthusiast
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Building the
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                AI future
              </span>
              , one insight at a time
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Deep dives into AI research, practical solutions, and the
              technologies shaping tomorrow.
            </p>
          </div>

          {/* Prominent Substack CTA */}
          <div className="flex justify-center pt-4">
            <a
              href="https://substack.com/@fliellerjulian/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
              </svg>
              My Substack
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Subtle name attribution */}
          <div className="pt-8 border-t border-slate-200/50">
            <p className="text-sm text-slate-500">
              by{" "}
              <span className="font-semibold text-slate-700">
                Julian Flieller
              </span>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
