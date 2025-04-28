
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  additionalImages?: string[];
  tags: string[];
  github: string;
  demo: string;
}
