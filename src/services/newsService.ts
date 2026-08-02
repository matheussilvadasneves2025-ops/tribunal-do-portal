import { FEATURED_ARTICLES, getArticleBySlug } from '@/constants/news'
import type { NewsArticle } from '@/types/news'

const SIMULATED_LATENCY_MS = 220

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const newsService = {
  async getFeaturedArticles(): Promise<NewsArticle[]> {
    await delay(SIMULATED_LATENCY_MS)
    return FEATURED_ARTICLES.filter((a) => a.isFeatured)
  },

  async getAllArticles(): Promise<NewsArticle[]> {
    await delay(SIMULATED_LATENCY_MS)
    return FEATURED_ARTICLES
  },

  async getArticleBySlug(slug: string): Promise<NewsArticle | undefined> {
    await delay(SIMULATED_LATENCY_MS)
    return getArticleBySlug(slug)
  },

  async searchArticles(query: string): Promise<NewsArticle[]> {
    await delay(150)
    const normalized = query.trim().toLowerCase()
    if (!normalized) return []
    return FEATURED_ARTICLES.filter((article) =>
      article.headline.toLowerCase().includes(normalized),
    )
  },
}
