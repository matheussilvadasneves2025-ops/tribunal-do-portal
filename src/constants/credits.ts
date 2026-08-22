import type { CreditEntry } from '@/types/news'

export const CREDITS: CreditEntry[] = [
  { role: 'Direção de Redação', name: 'Jarvis' },
  { role: 'Editor-Chefe', name: 'Matheus' },
  {
    role: 'Direção de Pesquisa e apresentação de dados',
    name: 'Matheus',
    team: ['Ruben', 'Daniel Pereira e', 'Luís'],
  },
  { role: 'Análise Geral', name: 'Matheus' },
  { role: 'Projeto e Desenvolvimento', name: 'Matheus & Claude.code', note: 'Rick C-137 e Evil Morty' },
]
