import type { CategoryMeta } from '@/types/news'

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'julgamento',
    label: 'O Julgamento',
    description: 'Como funciona o Tribunal Militar Internacional e o que ele julga',
  },
  {
    id: 'estrutura-tribunal',
    label: 'Estrutura do Tribunal',
    description: 'Juízes, promotores, advogados de defesa e testemunhas do processo',
  },
  {
    id: 'crimes-de-guerra',
    label: 'Crimes de Guerra',
    description: 'Apuração dos crimes cometidos pela Alemanha e por outras nações na Segunda Guerra',
  },
  {
    id: 'analise',
    label: 'Análise & Dados',
    description: 'Números, gráficos e o custo humano e material do conflito',
  },
]

export const CATEGORY_LABELS: Record<string, string> = CATEGORIES.reduce(
  (acc, c) => ({ ...acc, [c.id]: c.label }),
  {},
)
export const CATEGORY_LABELS_EN: Record<string, string> = {
  julgamento: 'The Trial',
  'estrutura-tribunal': 'Tribunal Structure',
  'crimes-de-guerra': 'War Crimes',
  analise: 'Analysis & Data',
}

export const CATEGORY_COLORS: Record<string, string> = {
  julgamento: 'var(--color-cat-julgamento)',
  'estrutura-tribunal': 'var(--color-cat-testemunhos)',
  'crimes-de-guerra': 'var(--color-cat-crimes)',
  analise: 'var(--color-cat-analise)',
}
