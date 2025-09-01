"use client";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold tracking-tight">
                JF
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-slate-900 font-bold text-3xl sm:text-4xl tracking-tight">
                Julian Flieller
              </h1>
              <p className="text-slate-600 text-lg font-medium">
                AI researcher & engineer
              </p>
            </div>

            <div className="text-slate-700 text-lg leading-relaxed max-w-3xl">
              <p>
                I&apos;m passionate about building AI systems that solve
                real-world problems. Currently exploring the intersection of
                machine learning research and practical applications, with a
                focus on making AI more reliable and useful.
              </p>
            </div>

            {/* Quick stats and CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">
                    Available for opportunities
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-slate-600">
                    Based in Switzerland
                  </span>
                </div>
              </div>
              
              <a
                href="https://substack.com/@fliellerjulian/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
                Newsletter
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
