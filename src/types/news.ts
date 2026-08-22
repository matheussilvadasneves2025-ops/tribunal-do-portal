export type NewsCategory =
  | 'julgamento'
  | 'estrutura-tribunal'
  | 'crimes-de-guerra'
  | 'analise'

export interface Author {
  id: string
  name: string
  role: string
  avatarInitials: string
}

export interface PhotoCredit {
  photographer: string
  date?: string
  location?: string
}

export interface ArticleTopic {
  id: string
  label: string
  image: string
  imageAlt: string
  imageCredit?: PhotoCredit
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
  coverImageCredit?: PhotoCredit
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

// ---- Estrutura do Tribunal ----

export interface TribunalMember {
  name: string
  role: string
}

export interface TribunalSide {
  id: string
  label: string
  flagEmoji: string
  color: string
  members: TribunalMember[]
}

export interface CountryProfile {
  id: string
  country: string
  flagEmoji: string
  role: string
  summary: string
  relatedTheme: string
}

// ---- Perfis dos Réus ----

export interface ReuProfile {
  id: string
  studentName: string
  characterName: string
  characterRole: string
  side: 'eixo' | 'aliados'
  photoPlaceholder: string
  bio: string
}

// ---- Linha do Tempo ----

export interface TimelineEvent {
  id: string
  date: string
  title: string
  description: string
}
