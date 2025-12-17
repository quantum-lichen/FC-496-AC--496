export interface DocSection {
  id: string;
  title: string;
  content: string | string[]; // Can be a paragraph or list of items
  code?: string; // Optional code block
  type?: 'text' | 'list' | 'code' | 'table';
  subsections?: DocSection[];
}

export interface LayerInfo {
  id: string;
  name: string;
  description: string;
  color: string;
  details: string[];
}
