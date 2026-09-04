import { FEATURED_ARTICLES, getArticleBySlug } from '@/constants/news'
import type { NewsArticle } from '@/types/news'
import { getNewsTranslation } from '@/i18n/news'

function translateArticle(
  article: NewsArticle,
  language: 'pt' | 'en',
): NewsArticle {
  if (language === 'pt') {
    return article
  }

  const translation = getNewsTranslation(article.slug)

  if (!translation) {
    return article
  }

  return {
    ...article,
    ...translation,
    topics: article.topics.map((topic) => {
      const topicTranslation = translation.topics?.find(
        (item) => item.id === topic.id,
      )

      if (!topicTranslation) {
        return topic
      }

      return {
        ...topic,
        ...topicTranslation,
        blocks: topicTranslation.blocks ?? topic.blocks,
      }
    }),
  }
}

const SIMULATED_LATENCY_MS = 220

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const newsService = {
  async getFeaturedArticles(
    language: 'pt' | 'en',
  ): Promise<NewsArticle[]> {
    await delay(SIMULATED_LATENCY_MS)

    return FEATURED_ARTICLES
      .filter((article) => article.isFeatured)
      .map((article) => translateArticle(article, language))
  },

  async getAllArticles(
    language: 'pt' | 'en',
  ): Promise<NewsArticle[]> {
    await delay(SIMULATED_LATENCY_MS)

    return FEATURED_ARTICLES.map((article) =>
      translateArticle(article, language),
    )
  },

  async getArticleBySlug(
    slug: string,
    language: 'pt' | 'en',
  ): Promise<NewsArticle | undefined> {
    await delay(SIMULATED_LATENCY_MS)

    const article = getArticleBySlug(slug)

    return article
      ? translateArticle(article, language)
      : undefined
  },

  async searchArticles(
    query: string,
    language: 'pt' | 'en',
  ): Promise<NewsArticle[]> {
    await delay(150)

    const normalized = query.trim().toLowerCase()

    if (!normalized) {
      return []
    }

    return FEATURED_ARTICLES
      .map((article) => translateArticle(article, language))
      .filter((article) =>
        article.headline.toLowerCase().includes(normalized),
      )
  },
}