export interface Author {
  name: string;
  role: string;
  initials: string;
  avatarBg?: string;
  avatarText?: string;
  avatarBorder?: string;
  bio?: string;
}

export interface Comment {
  id: string;
  author: string;
  initials: string;
  content: string;
  timestamp: string;
  likes: number;
}

export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
  pullQuote?: string;
  keyTakeaways?: string[];
  figureImage?: string;
  figureCaption?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColorClass: {
    bg: string;
    text: string;
    border: string;
  };
  author: Author;
  date: string;
  readTime: string;
  featured?: boolean;
  specialReport?: boolean;
  trending?: boolean;
  breaking?: boolean;
  imageUrl: string;
  views?: string;
  claps?: number;
  sections?: ArticleSection[];
  tags: string[];
}

export interface UserProfile {
  name: string;
  email: string;
  initials: string;
  isLoggedIn: boolean;
  savedArticleIds: string[];
  newsletterSubscribed: boolean;
}
