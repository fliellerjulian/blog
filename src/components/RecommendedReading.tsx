"use client";

import { RecommendedItem } from "@/types/research";

export default function RecommendedReading() {
  const recommendedItems: RecommendedItem[] = [
    {
      title: "Attention Is All You Need",
      author: "Vaswani et al.",
      type: "paper",
      url: "https://arxiv.org/abs/1706.03762",
      description:
        "The foundational transformer paper that introduced the attention mechanism and revolutionized natural language processing.",
    },
    {
      title: "The Alignment Problem",
      author: "Brian Christian",
      type: "book",
      url: "https://brianchristian.org/the-alignment-problem/",
      description:
        "Essential reading on AI safety and the challenges of aligning AI systems with human values and intentions.",
    },
    {
      title: "Constitutional AI",
      author: "Anthropic",
      type: "paper",
      url: "https://arxiv.org/abs/2212.08073",
      description:
        "Training AI systems to be helpful and harmless through self-improvement and constitutional principles.",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12 sm:px-8">
        <div className="space-y-8">
          <h2 className="text-slate-900 font-bold text-xl tracking-tight">
            Reading
          </h2>

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
