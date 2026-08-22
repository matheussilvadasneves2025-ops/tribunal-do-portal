import type { TribunalSide, CountryProfile } from '@/types/news'

// Cargos definidos pela turma para a simulação do Tribunal Distrital.

export const TRIBUNAL_NEUTROS: TribunalSide = {
  id: 'neutros',
  label: 'Corte',
  flagEmoji: '⚖️',
  color: 'var(--color-gold)',
  members: [
    { name: 'Sofia', role: 'Juíza' },
    { name: 'Isabella', role: 'Assistente da Corte' },
    { name: 'Miguel Campos', role: 'Promotor (Alemanha)' },
  ],
}

export const TRIBUNAL_ALEMANHA: TribunalSide = {
  id: 'alemanha',
  label: 'Alemanha · Potências do Eixo',
  flagEmoji: '🎖️',
  color: 'var(--color-cat-crimes)',
  members: [
    { name: 'Ruben', role: 'Réu (interpreta Hermann Göring)' },
    { name: 'João Pedro', role: 'Advogado de Defesa' },
    { name: 'Lucas', role: 'Testemunha' },
    { name: 'Melyssa', role: 'Testemunha' },
    { name: 'Maria Sophia', role: 'Testemunha' },
    { name: 'Alice', role: 'Testemunha' },
    { name: 'Luís', role: 'Testemunha' },
  ],
}

export const TRIBUNAL_EUA: TribunalSide = {
  id: 'eua',
  label: 'Estados Unidos · Potências Aliadas',
  flagEmoji: '🗽',
  color: 'var(--color-cat-testemunhos)',
  members: [
    { name: 'Kauã', role: 'Réu (interpreta Robert H. Jackson)' },
    { name: 'Letícia Carollini', role: 'Advogada de Defesa' },
    { name: 'Math', role: 'Promotor' },
    { name: 'Maria Eduarda Marques', role: 'Testemunha' },
    { name: 'Letícia Abade', role: 'Testemunha' },
    { name: 'Marina', role: 'Testemunha' },
    { name: 'Cecília', role: 'Testemunha' },
  ],
}

export const TRIBUNAL_SIDES: TribunalSide[] = [
  TRIBUNAL_NEUTROS,
  TRIBUNAL_ALEMANHA,
  TRIBUNAL_EUA,
]

// Cards de país — representam o restante do Eixo e dos Aliados,
// conectando a estrutura do tribunal aos 4 grandes temas do portal.

export const COUNTRY_PROFILES: CountryProfile[] = [
  {
    id: 'japao',
    country: 'Japão',
    flagEmoji: '🇯🇵',
    role: 'Potência do Eixo',
    summary:
      'Aliado da Alemanha no Eixo, o Japão travou a Guerra do Pacífico contra os Estados Unidos até a rendição em agosto de 1945, após os bombardeios atômicos de Hiroshima e Nagasaki.',
    relatedTheme: 'EUA & Japão — Ciência e as Bombas Atômicas',
  },
  {
    id: 'italia',
    country: 'Itália',
    flagEmoji: '🇮🇹',
    role: 'Potência do Eixo',
    summary:
      'Sob o regime fascista de Benito Mussolini, a Itália foi uma das fundadoras do Eixo ao lado da Alemanha, até a queda do ditador em 1943.',
    relatedTheme: 'Hitler & Mussolini — Biografias',
  },
  {
    id: 'urss',
    country: 'URSS',
    flagEmoji: '🇷🇺',
    role: 'Potência Aliada',
    summary:
      'A União Soviética sustentou a Frente Oriental, o palco mais sangrento da guerra, e o avanço do Exército Vermelho foi decisivo para a derrota alemã.',
    relatedTheme: 'URSS — O Exército Vermelho',
  },
  {
    id: 'china',
    country: 'China',
    flagEmoji: '🇨🇳',
    role: 'Potência Aliada',
    summary:
      'Envolvida desde 1937 na Guerra Sino-Japonesa, a China enfrentou a ocupação japonesa e episódios de brutalidade extrema, como o Massacre de Nanquim.',
    relatedTheme: 'China — Massacre de Nanquim',
  },
]
