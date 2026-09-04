import type { CountryProfile } from '@/types/news'

export type CountryTranslation = Partial<CountryProfile>

export function getCountryTranslation(
  id: string,
): CountryTranslation | undefined {
  return COUNTRY_TRANSLATIONS[id]
}
export const COUNTRY_TRANSLATIONS: Record<string, CountryTranslation> = {
  japao: {
    country: 'Japan',
    role: 'Axis Power',
    summary:
      'An ally of Germany in the Axis, Japan fought the Pacific War against the United States until its surrender in August 1945, following the atomic bombings of Hiroshima and Nagasaki.',
    relatedTheme: 'U.S. & Japan — Science and the Atomic Bombs',
  },

  italia: {
    country: 'Italy',
    role: 'Axis Power',
    summary:
      'Under the fascist regime of Benito Mussolini, Italy was one of the founding members of the Axis alongside Germany, until the dictator fell from power in 1943.',
    relatedTheme: 'Hitler & Mussolini — Biographies',
  },

  urss: {
    country: 'USSR',
    role: 'Allied Power',
    summary:
      'The Soviet Union sustained the Eastern Front, the bloodiest theater of the war, and the Red Army’s advance was decisive in the defeat of Germany.',
    relatedTheme: 'USSR — The Red Army',
  },

  china: {
    country: 'China',
    role: 'Allied Power',
    summary:
      'Involved in the Sino-Japanese War since 1937, China faced Japanese occupation and episodes of extreme brutality, such as the Nanjing Massacre.',
    relatedTheme: 'China — Nanjing Massacre',
  },
}