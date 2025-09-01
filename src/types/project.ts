export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  repository?: string;
  technologies: string[];
  status: "active" | "deprecated";
  openSource?: boolean;
}
