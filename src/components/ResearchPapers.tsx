"use client";

import { useState, useMemo } from "react";
import { ResearchPaper, SortOption } from "@/types/research";
import { formatDistanceToNow } from "date-fns";

export default function ResearchPapers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("date");

  const papers: ResearchPaper[] = [
    {
      _id: "1",
      title: "Large Language Models are Few-Shot Learners",
      authors: ["Tom Brown", "Benjamin Mann", "Nick Ryder"],
      abstract:
        "Recent work has demonstrated substantial gains on many NLP tasks by pre-training on large text corpora followed by task-specific fine-tuning.",
      url: "https://arxiv.org/abs/2005.14165",
      publishedDate: new Date("2020-05-28"),
      source: "arXiv",
      keywords: ["GPT-3", "few-shot learning"],
      category: "NLP",
      updatedAt: new Date(),
      createdAt: new Date(),
    },
    {
      _id: "2",
      title:
        "Training language models to follow instructions with human feedback",
      authors: ["Long Ouyang", "Jeff Wu", "Xu Jiang"],
      abstract:
        "Making language models bigger does not inherently make them better at following a user&apos;s intent.",
      url: "https://arxiv.org/abs/2203.02155",
      publishedDate: new Date("2022-03-04"),
      source: "arXiv",
      keywords: ["RLHF", "alignment"],
      category: "AI Safety",
      updatedAt: new Date(),
      createdAt: new Date(),
    },
    {
      _id: "3",
      title: "Constitutional AI: Harmlessness from AI Feedback",
      authors: ["Yuntao Bai", "Andy Jones", "Kamal Ndousse"],
      abstract:
        "We experiment with methods for training harmless AI assistants through self-improvement.",
      url: "https://arxiv.org/abs/2212.08073",
      publishedDate: new Date("2022-12-15"),
      source: "arXiv",
      keywords: ["constitutional AI", "safety"],
      category: "AI Safety",
      updatedAt: new Date(),
      createdAt: new Date(),
    },
    {
      _id: "4",
      title:
        "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
      authors: ["Jason Wei", "Xuezhi Wang", "Dale Schuurmans"],
      abstract:
        "Generating intermediate reasoning steps significantly improves LLM performance on complex reasoning.",
      url: "https://arxiv.org/abs/2201.11903",
      publishedDate: new Date("2022-01-28"),
      source: "arXiv",
      keywords: ["reasoning", "prompting"],
      category: "NLP",
      updatedAt: new Date(),
      createdAt: new Date(),
    },
  ];

  const filteredAndSortedPapers = useMemo(() => {
    let filtered = papers;

    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      filtered = papers.filter(
        (paper) =>
          paper.title.toLowerCase().includes(lowerSearchTerm) ||
          paper.abstract.toLowerCase().includes(lowerSearchTerm) ||
          paper.authors.some((author) =>
            author.toLowerCase().includes(lowerSearchTerm)
          ) ||
          paper.keywords.some((keyword) =>
            keyword.toLowerCase().includes(lowerSearchTerm)
          ) ||
          paper.category.toLowerCase().includes(lowerSearchTerm)
      );
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "date":
          return (
            new Date(b.publishedDate).getTime() -
            new Date(a.publishedDate).getTime()
          );
        case "title":
          return a.title.localeCompare(b.title);
        case "category":
          return a.category.localeCompare(b.category);
        case "relevance":
        default:
          return 0;
      }
    });
  }, [papers, searchTerm, sortBy]);

  return (
    <section className="w-full bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12 sm:px-8">
        <div className="space-y-8">
          <h2 className="text-slate-900 font-bold text-xl tracking-tight">
            Recent Papers
          </h2>

          {/* Papers List */}
          <div className="grid gap-4">
            {papers.map((paper) => (
              <div
                key={paper._id}
                className="group p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 font-semibold text-base hover:text-blue-600 transition-colors"
                    >
                      {paper.title}
                    </a>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {paper.abstract}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>{paper.authors.join(", ")}</span>
                      <span>•</span>
                      <span className="uppercase tracking-wide font-medium">
                        {paper.category}
                      </span>
                      <span>•</span>
                      <span>
                        {formatDistanceToNow(paper.publishedDate, {
                          addSuffix: true,
                        })}
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
