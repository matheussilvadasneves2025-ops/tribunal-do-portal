import type { NewsArticle, Author } from '@/types/news'

const AUTHORS: Record<string, Author> = {
  daniel: {
    id: 'daniel-pereira',
    name: 'Daniel Pereira',
    role: 'Correspondente Internacional',
    avatarInitials: 'HM',
  },
  Lúis: {
    id: 'luis-felipe',
    name: 'Luís Felipe',
    role: 'Editor de Justiça e Direito Internacional',
    avatarInitials: 'TV',
  },
  Ruben: {
    id: 'ruben-dourado',
    name: 'Ruben Dourado',
    role: 'Repórter Especial em Nuremberg',
    avatarInitials: 'CN',
  },
  Jarvis: {
    id: 'jarvis-martins',
    name: 'Jarvis Martins',
    role: 'Analista de Relações Internacionais',
    avatarInitials: 'AF',
  },
}

const IMG = {
  courtroom:
    'https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=1600&auto=format&fit=crop',
  hearing:
    'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1600&auto=format&fit=crop',
  writing:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop',
  parliament:
    'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1600&auto=format&fit=crop',
  supremeCourt:
    'https://images.unsplash.com/photo-1678440515574-0dc75039b8fe?q=80&w=1600&auto=format&fit=crop',
  courthouse:
    'https://images.unsplash.com/photo-1719871246993-ff211330a34e?q=80&w=1600&auto=format&fit=crop',
  typewriter:
    'https://images.unsplash.com/photo-1622132403916-d4786bf0e7ee?q=80&w=1600&auto=format&fit=crop',
  gavelBook:
    'https://images.unsplash.com/photo-1767972159871-b9f5d320be2b?q=80&w=1600&auto=format&fit=crop',
}

export const FEATURED_ARTICLES: NewsArticle[] = [
  {
    id: '1',
    slug: 'abertura-do-tribunal-de-nuremberg',
    category: 'julgamento',
    headline: 'Tribunal Internacional abre sessão histórica em Nuremberg',
    subheadline:
      'Pela primeira vez, líderes de um Estado são julgados por um tribunal internacional composto por juízes de quatro potências aliadas.',
    coverImage: IMG.courtroom,
    coverImageAlt: 'Sala de tribunal histórica com bancadas de madeira',
    author: AUTHORS.daniel,
    publishedAt: '2025-11-20',
    readingTimeMinutes: 6,
    isFeatured: true,
    tags: ['Nuremberg', 'Tribunal Militar Internacional', 'Abertura'],
    topics: [
      {
        id: 'abertura-historica',
        label: 'Abertura Histórica',
        image: IMG.courtroom,
        imageAlt: 'Sala de tribunal histórica com bancadas de madeira',
        blocks: [
          {
            type: 'paragraph',
            text: 'A cidade de Nuremberg, palco de grandes congressos do regime nazista na década anterior, tornou-se nesta semana o centro das atenções do mundo por um motivo oposto: o início do primeiro julgamento internacional da história contra líderes de um Estado acusados de crimes contra a paz, crimes de guerra e crimes contra a humanidade.',
          },
          {
            type: 'paragraph',
            text: 'O Tribunal Militar Internacional foi constituído a partir do Acordo de Londres, assinado em agosto por representantes dos Estados Unidos, da União Soviética, do Reino Unido e da França. O documento estabeleceu não apenas a composição da corte, mas também as categorias jurídicas sob as quais os réus seriam julgados, muitas delas formuladas especialmente para este processo.',
          },
        ],
      },
      {
        id: 'corte-sem-precedentes',
        label: 'Uma Corte sem Precedentes',
        image: IMG.supremeCourt,
        imageAlt: 'Fachada de um tribunal com colunas clássicas',
        blocks: [
          {
            type: 'heading',
            text: 'Uma corte sem precedentes',
          },
          {
            type: 'paragraph',
            text: 'Nunca antes o direito internacional havia sido chamado a responder a uma pergunta tão delicada: podem indivíduos, e não apenas Estados, ser responsabilizados por decisões tomadas em nome de um governo? A resposta construída em Nuremberg alteraria permanentemente o modo como a comunidade internacional trata violações em massa de direitos humanos.',
          },
          {
            type: 'quote',
            text: 'O privilégio de processar seres humanos por terem começado uma guerra agressiva é uma responsabilidade tão séria que não pode ser exercida de forma leviana.',
            attribution: 'Trecho do discurso de abertura da acusação',
          },
          {
            type: 'paragraph',
            text: 'A sessão inaugural reuniu jornalistas de dezenas de países, além de observadores diplomáticos e representantes de organizações que acompanhavam de perto a reconstrução da ordem jurídica internacional após seis anos de conflito.',
          },
        ],
      },
      {
        id: 'desafios-logisticos',
        label: 'Desafios Logísticos',
        image: IMG.courthouse,
        imageAlt: 'Fachada cinza de um prédio de tribunal',
        blocks: [
          {
            type: 'heading',
            text: 'Os desafios logísticos e simbólicos',
          },
          {
            type: 'paragraph',
            text: 'Nuremberg foi escolhida não apenas pela disponibilidade de uma estrutura judicial praticamente intacta, o Palácio da Justiça, mas também pelo peso simbólico do local, associado à ascensão do regime que agora respondia perante o mundo. A escolha reforça um dos princípios centrais do tribunal: a ideia de que a justiça, e não a vingança, deveria orientar o processo.',
          },
          {
            type: 'highlight',
            text: 'Esta reportagem integra uma simulação acadêmica e não descreve declarações reais de nenhuma pessoa histórica específica.',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    slug: 'urgente-novas-provas-contra-a-alemanha',
    category: 'testemunhos',
    headline: 'URGENTE: novas provas contra a Alemanha nazista vêm à tona no tribunal',
    subheadline:
      'Documentos e testemunhos apresentados nesta semana reforçam a acusação e detalham a extensão das políticas investigadas pela corte.',
    coverImage: IMG.hearing,
    coverImageAlt: 'Microfone antigo em uma sala de audiências',
    author: AUTHORS.clarice,
    publishedAt: '2025-11-27',
    readingTimeMinutes: 7,
    isFeatured: true,
    tags: ['Testemunhos', 'Provas', 'Depoimentos'],
    topics: [
      {
        id: 'provas-reunidas',
        label: 'As Provas Reunidas',
        image: IMG.hearing,
        imageAlt: 'Microfone antigo em uma sala de audiências',
        blocks: [
          {
            type: 'paragraph',
            text: 'A segunda semana de audiências foi marcada pela apresentação de testemunhos que, segundo observadores presentes, alteraram o tom da sessão. Documentos administrativos, registros fotográficos e relatos pessoais foram usados pela acusação para reconstituir a cadeia de decisões que permitiu a execução de políticas de perseguição em escala continental.',
          },
          {
            type: 'paragraph',
            text: 'Diferentemente de processos criminais tradicionais, grande parte da prova reunida pela acusação não dependia exclusivamente de testemunhas oculares. Milhares de documentos oficiais, capturados pelas forças aliadas ao longo da ocupação, permitiram traçar com precisão burocrática as ordens e sua cadeia de execução.',
          },
        ],
      },
      {
        id: 'peso-da-palavra-escrita',
        label: 'O Peso da Palavra Escrita',
        image: IMG.typewriter,
        imageAlt: 'Máquina de escrever antiga',
        blocks: [
          {
            type: 'heading',
            text: 'O peso da palavra escrita',
          },
          {
            type: 'paragraph',
            text: 'Promotores descreveram a estratégia de utilizar a própria documentação produzida pelo regime como o núcleo das evidências, argumentando que atas de reunião, memorandos e relatórios internos tornavam praticamente impossível às defesas alegar desconhecimento generalizado sobre a extensão das políticas em curso.',
          },
          {
            type: 'quote',
            text: 'Os documentos falam por si mesmos, e falam com uma clareza que nenhum testemunho isolado poderia igualar.',
            attribution: 'Trecho atribuído à equipe de acusação, em cenário simulado',
          },
        ],
      },
      {
        id: 'replica-da-defesa',
        label: 'A Réplica da Defesa',
        image: IMG.gavelBook,
        imageAlt: 'Martelo de juiz sobre um livro fechado',
        blocks: [
          {
            type: 'paragraph',
            text: 'Defensores dos réus, por sua vez, questionaram a interpretação de determinados documentos fora de seu contexto administrativo original, argumento que se tornaria recorrente ao longo do processo e alimentaria debates acadêmicos sobre os limites da prova documental em julgamentos desta natureza.',
          },
          {
            type: 'highlight',
            text: 'Os relatos aqui descritos fazem parte de uma reconstrução ficcional com fins didáticos, baseada no formato geral dos julgamentos de Nuremberg.',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    slug: 'defesa-alema-tenta-se-defender-das-acusacoes',
    category: 'crimes-de-guerra',
    headline: 'Defesa alemã tenta se defender das acusações e questiona jurisdição do tribunal',
    subheadline:
      'Advogados dos réus contestaram a legitimidade da corte e alegaram que os atos foram cometidos sob ordens superiores durante o conflito.',
    coverImage: IMG.gavelBook,
    coverImageAlt: 'Martelo de juiz sobre um livro fechado',
    author: AUTHORS.teodoro,
    publishedAt: '2025-12-04',
    readingTimeMinutes: 6,
    isFeatured: true,
    tags: ['Defesa', 'Jurisdição', 'Direito Internacional'],
    topics: [
      {
        id: 'questionamento-da-jurisdicao',
        label: 'Questionamento da Jurisdição',
        image: IMG.gavelBook,
        imageAlt: 'Martelo de juiz sobre um livro fechado',
        blocks: [
          {
            type: 'paragraph',
            text: 'Em uma das sessões mais aguardadas do processo, advogados de defesa apresentaram uma série de questionamentos preliminares sobre a própria competência do Tribunal Militar Internacional para julgar os réus. O argumento central baseava-se na ausência, até aquele momento, de um corpo estabelecido de direito penal internacional que tipificasse previamente as condutas atribuídas aos acusados.',
          },
        ],
      },
      {
        id: 'principio-da-legalidade',
        label: 'O Princípio da Legalidade',
        image: IMG.parliament,
        imageAlt: 'Interior de um prédio institucional com bandeiras',
        blocks: [
          {
            type: 'heading',
            text: 'O princípio da legalidade em debate',
          },
          {
            type: 'paragraph',
            text: 'A defesa invocou o princípio segundo o qual ninguém pode ser punido por um ato que não constituía crime no momento em que foi praticado, questionando se o tribunal não estaria aplicando retroativamente categorias jurídicas criadas apenas após o fim da guerra.',
          },
          {
            type: 'quote',
            text: 'Um tribunal não pode criar a lei e aplicá-la ao mesmo tempo sobre os mesmos réus.',
            attribution: 'Argumento apresentado pela defesa, em cenário simulado',
          },
          {
            type: 'paragraph',
            text: 'A acusação rebateu afirmando que tratados internacionais anteriores à guerra, como o Pacto Kellogg-Briand, já estabeleciam a ilegalidade das guerras de agressão, e que crimes contra a humanidade representavam violações a princípios de humanidade já reconhecidos por nações civilizadas, ainda que não codificados em um único estatuto.',
          },
        ],
      },
      {
        id: 'ordens-superiores',
        label: 'Obediência a Ordens Superiores',
        image: IMG.courtroom,
        imageAlt: 'Sala de tribunal histórica com bancadas de madeira',
        blocks: [
          {
            type: 'heading',
            text: 'A defesa da obediência a ordens superiores',
          },
          {
            type: 'paragraph',
            text: 'Outro ponto central da estratégia de defesa envolveu a alegação de que muitos dos réus atuaram sob ordens superiores e, portanto, não poderiam ser responsabilizados pessoalmente. O tribunal, no entanto, sinalizou que consideraria a obediência hierárquica apenas como possível atenuante, e não como excludente automática de responsabilidade individual.',
          },
          {
            type: 'highlight',
            text: 'Este texto integra uma simulação acadêmica sobre o funcionamento do Tribunal de Nuremberg e não reproduz argumentos jurídicos reais atribuídos a pessoas específicas.',
          },
        ],
      },
    ],
  },
  {
    id: '4',
    slug: 'repercussao-internacional-e-legado-juridico',
    category: 'diplomacia',
    headline: 'Repercussão internacional aponta para novo capítulo do direito global',
    subheadline:
      'Juristas de diversos países avaliam que os princípios estabelecidos em Nuremberg podem inaugurar uma nova era de responsabilização internacional.',
    coverImage: IMG.parliament,
    coverImageAlt: 'Bandeiras de diferentes países em um prédio institucional',
    author: AUTHORS.augusto,
    publishedAt: '2025-12-11',
    readingTimeMinutes: 8,
    isFeatured: true,
    tags: ['Direito Internacional', 'Legado', 'ONU'],
    topics: [
      {
        id: 'repercussao-diplomatica',
        label: 'Repercussão Diplomática',
        image: IMG.parliament,
        imageAlt: 'Bandeiras de diferentes países em um prédio institucional',
        blocks: [
          {
            type: 'paragraph',
            text: 'Enquanto as audiências em Nuremberg avançam, juristas e diplomatas ao redor do mundo já debatem os efeitos duradouros que os princípios ali fixados poderão ter sobre a arquitetura do direito internacional. A recém-criada Organização das Nações Unidas acompanha o processo com particular interesse, já que muitos dos conceitos discutidos no tribunal dialogam diretamente com a construção de um sistema permanente de proteção a direitos humanos.',
          },
        ],
      },
      {
        id: 'principios-universais',
        label: 'Princípios Universais',
        image: IMG.supremeCourt,
        imageAlt: 'Fachada de um tribunal com colunas clássicas',
        blocks: [
          {
            type: 'heading',
            text: 'Do julgamento aos princípios universais',
          },
          {
            type: 'paragraph',
            text: 'Especialistas apontam que a simples existência de um tribunal internacional capaz de julgar indivíduos, independentemente de sua posição hierárquica em um Estado, representa uma ruptura com a lógica tradicional das relações internacionais, até então centrada quase exclusivamente na responsabilização de Estados, e não de pessoas.',
          },
          {
            type: 'quote',
            text: 'Nuremberg não julga apenas homens, julga também a ideia de que o poder de Estado pode ser um escudo absoluto contra a responsabilização.',
            attribution: 'Análise de um jurista internacional, em cenário simulado',
          },
          {
            type: 'paragraph',
            text: 'Alguns analistas, no entanto, ponderam sobre os limites políticos da experiência: por ser conduzido exclusivamente pelas potências vencedoras, o tribunal enfrenta críticas quanto à sua imparcialidade e à ausência de mecanismos permanentes que pudessem, no futuro, julgar violações cometidas por qualquer nação, incluindo as próprias potências julgadoras.',
          },
        ],
      },
      {
        id: 'legado-em-construcao',
        label: 'Um Legado em Construção',
        image: IMG.courthouse,
        imageAlt: 'Fachada cinza de um prédio de tribunal',
        blocks: [
          {
            type: 'heading',
            text: 'Um legado ainda em construção',
          },
          {
            type: 'paragraph',
            text: 'Independentemente do resultado final dos julgamentos, observadores concordam que os chamados "Princípios de Nuremberg", relativos à responsabilidade penal individual, à irrelevância do cargo oficial como excludente de culpa e aos limites da obediência hierárquica, tendem a influenciar decisivamente a redação de futuros tratados internacionais de direitos humanos.',
          },
          {
            type: 'highlight',
            text: 'Reportagem produzida no contexto de uma simulação acadêmica sobre o Tribunal de Nuremberg, com fins exclusivamente pedagógicos.',
          },
        ],
      },
    ],
  },
]

export const getArticleBySlug = (slug: string): NewsArticle | undefined =>
  FEATURED_ARTICLES.find((a) => a.slug === slug)

export const PLACEHOLDER_COUNT = 8

export const PLACEHOLDER_IMAGES = [
  IMG.courtroom,
  IMG.hearing,
  IMG.writing,
  IMG.parliament,
  IMG.supremeCourt,
  IMG.courthouse,
  IMG.typewriter,
  IMG.gavelBook,
]

export const PLACEHOLDER_HEADLINES = [
  'Estagiário confunde primeira testemunha com o zelador do prédio',
  'Delegação alemã pede pausa pro café antes de continuar a defesa',
  'Fotógrafo oficial esquece a tampa da lente durante a sessão',
  'Repórter aposta corrida contra o telégrafo pra fechar a matéria',
  'Juiz pede silêncio pela quinta vez só nesta manhã',
  'Arquivo do tribunal ganha estante nova emprestada da biblioteca',
  'Tradutor simultâneo pede água pela segunda vez em uma hora',
  'Sala de imprensa fica sem café antes do horário de almoço',
]
