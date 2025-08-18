'use client';

import { useState, useEffect, useMemo } from 'react';
import { Search, Filter, Clock, ExternalLink, Users, Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { ResearchPaper, SortOption } from '@/types/research';
import { formatDistanceToNow } from 'date-fns';

export default function ResearchPapers() {
  const [papers, setPapers] = useState<ResearchPaper[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('date');
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const PAPERS_PER_PAGE = 6;

  // Mock data for development - replace with actual API call
  useEffect(() => {
    const mockPapers: ResearchPaper[] = [
      {
        _id: '1',
        title: 'Large Language Models are Few-Shot Learners',
        authors: ['Tom Brown', 'Benjamin Mann', 'Nick Ryder', 'Melanie Subbiah'],
        abstract: 'Recent work has demonstrated substantial gains on many NLP tasks and benchmarks by pre-training on a large corpus of text followed by fine-tuning on a specific task. While typically task-agnostic in architecture, this method still requires task-specific fine-tuning datasets of thousands or tens of thousands of examples...',
        url: 'https://arxiv.org/abs/2005.14165',
        publishedDate: new Date('2020-05-28'),
        source: 'arXiv',
        keywords: ['language models', 'few-shot learning', 'GPT-3', 'natural language processing'],
        category: 'Natural Language Processing',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        _id: '2',
        title: 'Training language models to follow instructions with human feedback',
        authors: ['Long Ouyang', 'Jeff Wu', 'Xu Jiang', 'Diogo Almeida'],
        abstract: 'Making language models bigger does not inherently make them better at following a users intent. For example, large language models can generate outputs that are untruthful, toxic, or simply not helpful to the user...',
        url: 'https://arxiv.org/abs/2203.02155',
        publishedDate: new Date('2022-03-04'),
        source: 'arXiv',
        keywords: ['instruction following', 'human feedback', 'RLHF', 'alignment'],
        category: 'AI Safety',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        _id: '3',
        title: 'Constitutional AI: Harmlessness from AI Feedback',
        authors: ['Yuntao Bai', 'Andy Jones', 'Kamal Ndousse', 'Amanda Askell'],
        abstract: 'As AI systems become more capable, we would like to enlist their help to supervise other AIs. We experiment with methods for training a harmless AI assistant through self-improvement, without any human labels identifying harmful outputs...',
        url: 'https://arxiv.org/abs/2212.08073',
        publishedDate: new Date('2022-12-15'),
        source: 'arXiv',
        keywords: ['constitutional AI', 'AI safety', 'harmlessness', 'self-improvement'],
        category: 'AI Safety',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        _id: '4',
        title: 'PaLM: Scaling Language Modeling with Pathways',
        authors: ['Aakanksha Chowdhery', 'Sharan Narang', 'Jacob Devlin', 'Maarten Bosma'],
        abstract: 'Large language models have been shown to achieve remarkable performance across a variety of natural language tasks using few-shot learning, which drastically reduces the number of task-specific training examples needed to adapt the model to a particular application...',
        url: 'https://arxiv.org/abs/2204.02311',
        publishedDate: new Date('2022-04-05'),
        source: 'arXiv',
        keywords: ['language models', 'scaling', 'PaLM', 'pathways'],
        category: 'Natural Language Processing',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        _id: '5',
        title: 'Flamingo: a Visual Language Model for Few-Shot Learning',
        authors: ['Jean-Baptiste Alayrac', 'Jeff Donahue', 'Pauline Luc', 'Antoine Miech'],
        abstract: 'Building models that can be rapidly adapted to novel tasks using only a handful of annotated examples is an open challenge for multimodal machine learning research...',
        url: 'https://arxiv.org/abs/2204.14198',
        publishedDate: new Date('2022-04-29'),
        source: 'arXiv',
        keywords: ['multimodal learning', 'few-shot learning', 'visual language models', 'computer vision'],
        category: 'Computer Vision',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        _id: '6',
        title: 'DALL·E 2: Hierarchical Text-Conditional Image Generation with CLIP Latents',
        authors: ['Aditya Ramesh', 'Prafulla Dhariwal', 'Alex Nichol', 'Casey Chu'],
        abstract: 'Contrastive models like CLIP have been shown to learn robust representations of images that capture both style and semantic content. To leverage these representations for image generation, we propose...',
        url: 'https://arxiv.org/abs/2204.06125',
        publishedDate: new Date('2022-04-13'),
        source: 'arXiv',
        keywords: ['text-to-image', 'CLIP', 'diffusion models', 'generative models'],
        category: 'Computer Vision',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        _id: '7',
        title: 'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models',
        authors: ['Jason Wei', 'Xuezhi Wang', 'Dale Schuurmans', 'Maarten Bosma'],
        abstract: 'We explore how generating a chain of thought—a series of intermediate reasoning steps—significantly improves the ability of large language models to perform complex reasoning...',
        url: 'https://arxiv.org/abs/2201.11903',
        publishedDate: new Date('2022-01-28'),
        source: 'arXiv',
        keywords: ['reasoning', 'prompting', 'chain-of-thought', 'language models'],
        category: 'Natural Language Processing',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        _id: '8',
        title: 'Scaling Laws for Neural Language Models',
        authors: ['Jared Kaplan', 'Sam McCandlish', 'Tom Henighan', 'Tom B. Brown'],
        abstract: 'We study empirical scaling laws for language model performance on the cross-entropy loss. The loss scales as a power-law with model size, dataset size, and the amount of compute used for training...',
        url: 'https://arxiv.org/abs/2001.08361',
        publishedDate: new Date('2020-01-23'),
        source: 'arXiv',
        keywords: ['scaling laws', 'language models', 'neural networks', 'compute'],
        category: 'Machine Learning Theory',
        updatedAt: new Date(),
        createdAt: new Date()
      }
    ];

    setTimeout(() => {
      setPapers(mockPapers);
      setLastUpdated(new Date());
      setLoading(false);
    }, 1000);
  }, []);

  const filteredAndSortedPapers = useMemo(() => {
    let filtered = papers;

    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      filtered = papers.filter(paper =>
        paper.title.toLowerCase().includes(lowerSearchTerm) ||
        paper.abstract.toLowerCase().includes(lowerSearchTerm) ||
        paper.authors.some(author => author.toLowerCase().includes(lowerSearchTerm)) ||
        paper.keywords.some(keyword => keyword.toLowerCase().includes(lowerSearchTerm)) ||
        paper.category.toLowerCase().includes(lowerSearchTerm)
      );
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'relevance':
        default:
          return 0;
      }
    });
  }, [papers, searchTerm, sortBy]);

  // Reset to first page when search or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy]);

  // Paginated papers
  const paginatedPapers = useMemo(() => {
    const startIndex = (currentPage - 1) * PAPERS_PER_PAGE;
    return filteredAndSortedPapers.slice(startIndex, startIndex + PAPERS_PER_PAGE);
  }, [filteredAndSortedPapers, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedPapers.length / PAPERS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of papers section
    document.getElementById('research-papers')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  return (
    <section id="research-papers" className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Latest Research Papers
            </h2>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Clock className="w-4 h-4" />
              <span>
                Updated {lastUpdated ? formatDistanceToNow(lastUpdated, { addSuffix: true }) : 'recently'}
                • Updates every 2 hours
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-sm text-slate-600 bg-blue-50 px-3 py-1 rounded-full">
              {filteredAndSortedPapers.length} paper{filteredAndSortedPapers.length !== 1 ? 's' : ''} found
            </div>
            {totalPages > 1 && (
              <div className="text-sm text-slate-500">
                Page {currentPage} of {totalPages}
              </div>
            )}
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-slate-50 rounded-lg">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search papers by title, authors, keywords, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-600" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="date">Sort by Date</option>
              <option value="title">Sort by Title</option>
              <option value="category">Sort by Category</option>
              <option value="relevance">Sort by Relevance</option>
            </select>
          </div>
        </div>

        {/* Papers Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-3 text-slate-600">Loading papers...</span>
          </div>
        ) : paginatedPapers.length === 0 ? (
          <div className="text-center py-12 text-slate-600">
            <Search className="w-12 h-12 mx-auto mb-4 text-slate-400" />
            <p className="text-lg">No papers found matching your search criteria.</p>
            <p className="text-sm mt-2">Try adjusting your search terms or filters.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {paginatedPapers.map((paper) => (
              <article
                key={paper._id}
                className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                      {paper.category}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-600">{paper.source}</span>
                  </div>
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-600 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="font-semibold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 leading-snug">
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {paper.title}
                  </a>
                </h3>

                <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                  <Users className="w-4 h-4" />
                  <span>{paper.authors.slice(0, 2).join(', ')}{paper.authors.length > 2 ? ` +${paper.authors.length - 2} more` : ''}</span>
                </div>

                <p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3">
                  {paper.abstract.length > 200 ? `${paper.abstract.substring(0, 200)}...` : paper.abstract}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {paper.keywords.slice(0, 4).map((keyword, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded"
                    >
                      <Tag className="w-3 h-3" />
                      {keyword}
                    </span>
                  ))}
                  {paper.keywords.length > 4 && (
                    <span className="text-xs text-slate-500 px-2 py-1">
                      +{paper.keywords.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>Published {formatDistanceToNow(paper.publishedDate, { addSuffix: true })}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      page === currentPage
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-600 bg-white border border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </>
        )}
      </div>
    </section>
  );
}