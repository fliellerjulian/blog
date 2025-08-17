'use client';

import { ExternalLink, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-blue-50 to-indigo-100 border-b border-blue-100">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
            Julian Flieller
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-6 max-w-2xl mx-auto">
            Sharing insights on AI, solving complex problems, and exploring the future of technology
          </p>
          
          <a
            href="https://substack.com/@julianflieller" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-gradient"
          >
            <Sparkles className="w-5 h-5" />
            Read My AI Opinions on Substack
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}