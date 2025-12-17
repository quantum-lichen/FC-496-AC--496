export interface Badge {
  label: string;
  value: string;
  color: string; // Tailwind color class compatible e.g. "emerald", "blue", "red"
}

export interface DocSection {
  id: string;
  title: string;
  content: string | string[]; // Can be a paragraph or list of items
  code?: string; // Optional code block
  type?: 'text' | 'list' | 'code' | 'table' | 'hero';
  subsections?: DocSection[];
  badges?: Badge[];
}

export interface LayerInfo {
  id: string;
  name: string;
  description: string;
  color: string;
  details: string[];
}
