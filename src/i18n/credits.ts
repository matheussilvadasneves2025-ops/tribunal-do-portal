import type { CreditEntry } from '@/types/news'

export type CreditTranslation = Partial<CreditEntry>

export const CREDITS_TRANSLATIONS: Record<string, CreditTranslation> = {
  'Direção de Redação': {
    role: 'Editorial Direction',
  },

  'Editor-Chefe': {
    role: 'Editor-in-Chief',
  },

  'Direção de Pesquisa e apresentação de dados': {
    role: 'Research and Data Presentation Direction',
  },

  'Análise Geral': {
    role: 'General Analysis',
  },

  'Projeto e Desenvolvimento': {
    role: 'Project and Development',
    note: "Didn't like it? Send a tip to my Pix",
  },
}

export function getCreditTranslation(
  role: string,
): CreditTranslation | undefined {
  return CREDITS_TRANSLATIONS[role]
}