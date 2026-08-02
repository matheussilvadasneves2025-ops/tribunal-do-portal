import type { CreditEntry } from '@/types/news'

export const CREDITS: CreditEntry[] = [
  { role: 'Direção de Redação', name: 'Jarvis' },
  { role: 'Editor-Chefe', name: 'Matheus' },
  {
    role: 'Diretor de Reportagem',
    name: 'Adrian',
    team: ['Sarah', 'Daniel de Sá', 'Marcos'],
  },
  { role: 'Análise Geral', name: 'Matheus' },
  { role: 'Projeto e Desenvolvimento', name: 'Matheus & Claude.code', note: 'Os irmãos de guerra' },
]
