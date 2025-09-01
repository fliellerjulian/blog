export interface RecommendedItem {
  title: string;
  author: string;
  type: "article" | "book" | "paper" | "video" | "podcast";
  url: string;
  description: string;
}
