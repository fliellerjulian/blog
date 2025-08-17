'use client';

import { BookOpen, ExternalLink, FileText } from 'lucide-react';
import { RecommendedItem } from '@/types/research';

export default function RecommendedReading() {
  const recommendedItems: RecommendedItem[] = [
    {
      title: 'Attention Is All You Need',
      author: 'Vaswani et al.',
      type: 'article',
      url: 'https://arxiv.org/abs/1706.03762',
      description: 'The foundational paper that introduced the Transformer architecture, revolutionizing NLP and AI.'
    },
    {
      title: 'The Alignment Problem',
      author: 'Brian Christian',
      type: 'book',
      url: 'https://brianchristian.org/the-alignment-problem/',
      description: 'Essential reading on AI safety and the challenge of aligning AI systems with human values.'
    },
    {
      title: 'GPT-4 Technical Report',
      author: 'OpenAI',
      type: 'article',
      url: 'https://arxiv.org/abs/2303.08774',
      description: 'Comprehensive overview of GPT-4\'s capabilities, limitations, and safety considerations.'
    },
    {
      title: 'Superintelligence',
      author: 'Nick Bostrom',
      type: 'book',
      url: 'https://www.nickbostrom.com/superintelligence.html',
      description: 'Thought-provoking exploration of the potential paths and risks of artificial superintelligence.'
    },
    {
      title: 'Constitutional AI: Harmlessness from AI Feedback',
      author: 'Anthropic',
      type: 'article',
      url: 'https://arxiv.org/abs/2212.08073',
      description: 'Innovative approach to training AI systems to be more helpful, harmless, and honest.'
    },
    {
      title: 'Human Compatible',
      author: 'Stuart Russell',
      type: 'book',
      url: 'https://www.stuartrussel.com/human-compatible',
      description: 'A leading AI researcher\'s perspective on creating AI systems that benefit humanity.'
    }
  ];

  return (
    <section className="w-full py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Recommended Reading
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Essential papers and books that have shaped my understanding of AI and technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  {item.type === 'book' ? (
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  ) : (
                    <FileText className="w-5 h-5 text-green-600" />
                  )}
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                    {item.type}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
              
              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-300 leading-snug">
                {item.title}
              </h3>
              
              <p className="text-sm font-medium text-slate-600 mb-3">
                by {item.author}
              </p>
              
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}