import type { ReuProfile } from '@/types/news'

// Perfis dos réus — Kauã interpreta Harry Truman (Presidente dos EUA
// à época real do julgamento, já que Roosevelt morreu em abril de 1945,
// meses antes do fim da guerra na Europa) e Ruben interpreta Adolf Hitler.
// As fotos são placeholders: substitua `photoPlaceholder` pela imagem
// do aluno caracterizado quando estiver pronta.

export const REUS_PROFILES: ReuProfile[] = [
  {
    id: 'reu-alemanha',
    studentName: 'Ruben',
    characterName: 'Adolf Hitler',
    characterRole: 'Chanceler e Führer da Alemanha Nazista',
    side: 'eixo',
    photoPlaceholder: '/reus/ruben-hitler.jpg',
    bio: 'Líder do Partido Nazista e chefe de Estado da Alemanha entre 1933 e 1945, responsável pela política expansionista que desencadeou a Segunda Guerra Mundial e pelas diretrizes que resultaram no Holocausto.',
  },
  {
    id: 'reu-eua',
    studentName: 'Kauã',
    characterName: 'Harry S. Truman',
    characterRole: 'Presidente dos Estados Unidos',
    side: 'aliados',
    photoPlaceholder: '/reus/kaua-truman.jpg',
    bio: 'Assumiu a presidência dos EUA em abril de 1945, após a morte de Franklin D. Roosevelt, e conduziu o país no encerramento da guerra, incluindo a decisão de utilizar as bombas atômicas contra o Japão.',
  },
]
