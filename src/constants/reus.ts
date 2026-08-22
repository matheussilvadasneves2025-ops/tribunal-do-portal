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
    characterName: 'Hermann Göring',
    characterRole: 'Principal réu do julgamento.',
    side: 'eixo',
    photoPlaceholder: '/reus/ruben-goring.jpg',
    bio: 'Hermann Göring foi um dos principais líderes da Alemanha nazista e braço-direito de Adolf Hitler. Foi comandante da Luftwaffe (Força Aérea Alemã) e uma das figuras mais poderosas do regime. Em Nuremberg, foi o principal réu e acabou condenado à morte, mas cometeu suicídio antes da execução.',
  },
  {
    id: 'reu-eua',
    studentName: 'Kauã',
    characterName: 'Robert H. Jackson',
    characterRole: 'Principal promotor da acusação.',
    side: 'aliados',
    photoPlaceholder: '/reus/kaua-jackson.jpg',
    bio: 'Robert H. Jackson foi um jurista e juiz americano que atuou como principal promotor dos Aliados no Tribunal de Nuremberg. Nomeado pelo presidente Harry Truman, liderou a acusação contra os principais líderes nazistas. Seu trabalho ajudou a estabelecer princípios fundamentais do direito penal internacional.',
  },
]
