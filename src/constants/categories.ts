import type { CategoryMeta } from '@/types/news'

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'julgamento',
    label: 'O Julgamento',
    description: 'Cobertura das sessões e decisões do tribunal',
  },
  {
    id: 'testemunhos',
    label: 'Testemunhos',
    description: 'Relatos de vítimas, sobreviventes e observadores',
  },
  {
    id: 'crimes-de-guerra',
    label: 'Crimes de Guerra',
    description: 'Apuração das acusações e provas apresentadas',
  },
  {
    id: 'diplomacia',
    label: 'Diplomacia',
    description: 'Repercussão internacional e reconstrução do direito',
  },
  {
    id: 'analise',
    label: 'Análise',
    description: 'Contexto histórico e jurídico aprofundado',
  },
]

export const CATEGORY_LABELS: Record<string, string> = CATEGORIES.reduce(
  (acc, c) => ({ ...acc, [c.id]: c.label }),
  {},
)

export const CATEGORY_COLORS: Record<string, string> = {
  julgamento: 'var(--color-cat-julgamento)',
  testemunhos: 'var(--color-cat-testemunhos)',
  'crimes-de-guerra': 'var(--color-cat-crimes)',
  diplomacia: 'var(--color-cat-diplomacia)',
  analise: 'var(--color-cat-analise)',
}
