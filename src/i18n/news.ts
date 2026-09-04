import type { NewsArticle } from '@/types/news'

export type NewsTranslation = Partial<NewsArticle>

export const NEWS_TRANSLATIONS: Record<string, NewsTranslation> = {
  'eua-e-japao-a-ciencia-e-as-bombas-atomicas': {
    headline: 'U.S. & Japan: how science decided the end of the war in the Pacific',
    subheadline:
      'From the secrecy of the Manhattan Project to the bombings of Hiroshima and Nagasaki, the scientific race that opened the nuclear age and brought World War II to an end.',
  },
}
export function getNewsTranslation(
  slug: string,
): NewsTranslation | undefined {
  return NEWS_TRANSLATIONS[slug]
}