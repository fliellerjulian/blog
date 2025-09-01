"use client";

import { RecommendedItem } from "../types/resources";

export default function RecommendedResources() {
  const recommendedItems: RecommendedItem[] = [
    {
      title: "Principles of Building AI Agents",
      author: "Mastra AI",
      type: "book",
      url: "https://mastra.ai/book",
      description: "Understanding the key building blocks of agents.",
    },
    {
      title: "Become An AI Engineer",
      author: "Greg Kamradt",
      type: "video",
      url: "https://www.youtube.com/watch?v=PSWUr5E_OKY",
      description:
        "Video on how to become an AI engineer, includes everything you need to know.",
    },
    {
      title: "Cursor Team: Future of Programming with AI",
      author: "Lex Fridman",
      type: "podcast",
      url: "https://www.youtube.com/watch?v=oFfVt3S51T4",
      description:
        "Super interesting podcast on the future of Programming with AI - with the cursor team",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12 sm:px-8">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-slate-900 font-bold text-xl tracking-tight">
              Resources
            </h2>
            <p className="text-slate-600 text-sm">
              Books, articles, videos, and podcasts that I&apos;ve found useful
              - apart from the usual anthropic, openai, and x.ai papers.
            </p>
          </div>

          <div className="grid gap-4">
            {recommendedItems.map((item, index) => (
              <div
                key={index}
                className="group p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 font-semibold text-base hover:text-blue-600 transition-colors"
                    >
                      {item.title}
                    </a>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>{item.author}</span>
                      <span>•</span>
                      <span className="uppercase tracking-wide font-medium">
                        {item.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                      <svg
                        className="w-4 h-4 text-slate-600 group-hover:text-blue-600 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
