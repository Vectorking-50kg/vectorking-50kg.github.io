export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  icon: string; // Emoji or image URL
  platform: 'mobile' | 'desktop' | 'web';
  miniDescription: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  username: string;
  hoverColor?: string;
}

export interface HeatmapDay {
  date: string;
  count: number; // 0-4 scale
}