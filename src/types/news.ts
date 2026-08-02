export type NewsCategory =
  | 'julgamento'
  | 'testemunhos'
  | 'crimes-de-guerra'
  | 'diplomacia'
  | 'analise'

export interface Author {
  id: string
  name: string
  role: string
  avatarInitials: string
}

export interface ArticleTopic {
  id: string
  label: string
  image: string
  imageAlt: string
  blocks: ArticleBlock[]
}

export interface NewsArticle {
  id: string
  slug: string
  category: NewsCategory
  headline: string
  subheadline: string
  coverImage: string
  coverImageAlt: string
  author: Author
  publishedAt: string
  readingTimeMinutes: number
  isFeatured: boolean
  topics: ArticleTopic[]
  tags: string[]
}

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string; attribution: string }
  | { type: 'highlight'; text: string }

export interface CategoryMeta {
  id: NewsCategory
  label: string
  description: string
}

export interface CreditEntry {
  role: string
  name: string
  note?: string
  team?: string[]
}
