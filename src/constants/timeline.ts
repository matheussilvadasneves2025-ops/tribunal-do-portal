import type { TimelineEvent } from '@/types/news'

// Linha do tempo com os marcos históricos reais do Tribunal Militar
// Internacional de Nuremberg (1945-1946), usada como referência para
// a simulação estudantil.

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'acordo-londres',
    date: '8 de agosto de 1945',
    title: 'Acordo de Londres',
    description:
      'EUA, URSS, Reino Unido e França assinam o acordo que cria o Tribunal Militar Internacional e define os crimes a serem julgados.',
  },
  {
    id: 'abertura',
    date: '20 de novembro de 1945',
    title: 'Abertura do julgamento',
    description:
      'Sessão inaugural em Nuremberg. A acusação lê a denúncia contra os réus por crimes contra a paz, crimes de guerra e crimes contra a humanidade.',
  },
  {
    id: 'caso-acusacao',
    date: 'Dezembro de 1945 – Março de 1946',
    title: 'Apresentação das provas da acusação',
    description:
      'Documentos capturados, filmes e testemunhos são usados para reconstituir a cadeia de comando por trás das políticas de perseguição e extermínio.',
  },
  {
    id: 'caso-defesa',
    date: 'Março – Julho de 1946',
    title: 'Apresentação da defesa',
    description:
      'Advogados dos réus contestam a jurisdição da corte e recorrem ao argumento da obediência a ordens superiores.',
  },
  {
    id: 'sentencas',
    date: '30 de setembro – 1º de outubro de 1946',
    title: 'Leitura das sentenças',
    description:
      'O tribunal profere os veredictos individuais, incluindo condenações à morte, prisão perpétua, penas de tempo determinado e algumas absolvições.',
  },
  {
    id: 'execucoes',
    date: '16 de outubro de 1946',
    title: 'Execução das sentenças',
    description:
      'Os condenados à forca são executados na prisão de Nuremberg, encerrando a primeira fase dos julgamentos.',
  },
]
