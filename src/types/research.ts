export interface ResearchPaper {
  _id?: string;
  title: string;
  authors: string[];
  abstract: string;
  url: string;
  publishedDate: Date;
  source: string;
  keywords: string[];
  category: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface RecommendedItem {
  title: string;
  author: string;
  type: 'article' | 'book';
  url: string;
  description: string;
}

export type SortOption = 'date' | 'relevance' | 'title' | 'category';