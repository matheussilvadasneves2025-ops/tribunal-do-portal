import type { NewsArticle, Author } from '@/types/news'

const AUTHORS: Record<string, Author> = {
  Daniel: {
    id: 'daniel-pereira',
    name: 'Daniel Pereira',
    role: 'Correspondente Internacional',
    avatarInitials: 'DP',
  },
  Luis: {
    id: 'luis-felipe',
    name: 'Luís Felipe',
    role: 'Editor de Justiça e Direito Internacional',
    avatarInitials: 'LF',
  },
  Ruben: {
    id: 'ruben-dourado',
    name: 'Ruben Dourado',
    role: 'Repórter Especial em Nuremberg',
    avatarInitials: 'RD',
  },
  Jarvis: {
    id: 'jarvis-martins',
    name: 'Jarvis Martins',
    role: 'Analista de Relações Internacionais',
    avatarInitials: 'JM',
  },
}

// Imagens genéricas usadas nos placeholders de "Todas as Notícias"
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

// Imagens locais das matérias sobre a 2ª Guerra — substitua pelos arquivos
// reais (ver manifesto de créditos enviado junto com este pacote). Enquanto
// o arquivo não existir em /public, a imagem aparece quebrada, mas o
// crédito abaixo já está correto e pronto para exibição.
const WW2_IMG = {
  triniteTest: '/images/trinity-test-1945.jpg',
  nagasakiCloud: '/images/nagasaki-mushroom-cloud-1945.jpg',
  hirohitoRadio: '/images/hirohito-surrender-1945.jpg',
  hitlerPortrait: '/images/hitler-nuremberg-rally-1935.jpg',
  mussoliniBalcao: '/images/mussolini-piazza-venezia.jpg',
  hitlerMussolini: '/images/hitler-mussolini-munich-1940.jpg',
  barbarossa: '/images/operacao-barbarossa-1941.jpg',
  stalingrado: '/images/batalha-stalingrado-1943.jpg',
  reichstagFlag: '/images/bandeira-reichstag-1945.jpg',
  nanquimAvanco: '/images/exercito-japones-nanquim-1937.jpg',
  zonaSeguranca: '/images/zona-seguranca-nanquim-1938.jpg',
  johnRabe: '/images/john-rabe-retrato.jpg',
  tribunalToquio: '/images/tribunal-militar-toquio-1946.jpg',
}

export const FEATURED_ARTICLES: NewsArticle[] = [
  {
    id: 'ww2-1',
    slug: 'eua-e-japao-a-ciencia-e-as-bombas-atomicas',
    category: 'julgamento',
    headline: 'EUA & Japão: como a ciência decidiu o fim da guerra no Pacífico',
    subheadline:
      'Do sigilo do Projeto Manhattan aos bombardeios de Hiroshima e Nagasaki, a corrida científica que abriu a era nuclear e encerrou a Segunda Guerra Mundial.',
    coverImage: WW2_IMG.nagasakiCloud,
    coverImageAlt: 'Nuvem em formato de cogumelo sobre Nagasaki após o bombardeio atômico',
    coverImageCredit: {
      photographer: 'Charles Levy (tenente da Força Aérea dos EUA)',
      date: '9 de agosto de 1945',
      location: 'Nagasaki, Japão — fotografada a bordo do B-29 "The Great Artiste"',
    },
    author: AUTHORS.Daniel,
    publishedAt: '2026-01-15',
    readingTimeMinutes: 9,
    isFeatured: true,
    tags: ['Projeto Manhattan', 'Bombas Atômicas', 'Guerra do Pacífico'],
    topics: [
      {
        id: 'projeto-manhattan',
        label: 'O Projeto Manhattan',
        image: WW2_IMG.triniteTest,
        imageAlt: 'Explosão do primeiro teste nuclear da história, o Trinity',
        imageCredit: {
          photographer: 'Berlyn Brixner (fotógrafo oficial do Laboratório de Los Alamos)',
          date: '16 de julho de 1945',
          location: 'Deserto de Jornada del Muerto, Novo México, EUA',
        },
        blocks: [
          {
            type: 'paragraph',
            text: 'Em 1939, cientistas como Albert Einstein e Leó Szilárd alertaram o governo americano sobre a possibilidade de a Alemanha nazista desenvolver uma arma baseada na fissão nuclear. A resposta dos Estados Unidos foi o Projeto Manhattan, um programa ultrassecreto que reuniu milhares de cientistas, engenheiros e militares sob a liderança científica de J. Robert Oppenheimer e o comando militar do general Leslie Groves.',
          },
          {
            type: 'paragraph',
            text: 'Espalhado por instalações como Los Alamos, Oak Ridge e Hanford, o projeto consumiu bilhões de dólares e envolveu descobertas que mudariam para sempre a física e a geopolítica mundial. Em 16 de julho de 1945, no deserto do Novo México, a primeira bomba atômica da história foi detonada no chamado Teste Trinity, confirmando que a arma funcionava antes mesmo do fim da guerra na Europa.',
          },
          {
            type: 'highlight',
            text: 'O sucesso do Teste Trinity chegou poucos dias antes da Conferência de Potsdam, onde o presidente Harry Truman informou discretamente o líder soviético Josef Stálin sobre a nova arma dos Estados Unidos.',
          },
        ],
      },
      {
        id: 'hiroshima-nagasaki',
        label: 'Hiroshima e Nagasaki',
        image: WW2_IMG.nagasakiCloud,
        imageAlt: 'Nuvem em formato de cogumelo sobre Nagasaki',
        imageCredit: {
          photographer: 'Charles Levy',
          date: '9 de agosto de 1945',
          location: 'Nagasaki, Japão',
        },
        blocks: [
          {
            type: 'heading',
            text: 'Dois bombardeios em três dias',
          },
          {
            type: 'paragraph',
            text: 'Em 6 de agosto de 1945, o bombardeiro B-29 "Enola Gay" lançou a bomba "Little Boy" sobre Hiroshima, matando dezenas de milhares de pessoas instantaneamente e elevando o número de vítimas a mais de 100 mil ao longo dos meses seguintes, entre mortes imediatas e por radiação. Três dias depois, em 9 de agosto, a bomba "Fat Man" foi lançada sobre Nagasaki pelo avião "Bockscar", resultando em dezenas de milhares de mortes adicionais.',
          },
          {
            type: 'quote',
            text: 'A força da qual o sol extrai seu poder foi lançada contra aqueles que trouxeram a guerra ao Extremo Oriente.',
            attribution: '(Harry S. Truman, em comunicado oficial sobre o bombardeio de Hiroshima)',
          },
          {
            type: 'paragraph',
            text: 'A decisão de utilizar as bombas permanece um dos temas mais debatidos da historiografia da guerra. Para os EUA, o argumento oficial era que os ataques evitariam uma invasão terrestre do Japão, que poderia custar centenas de milhares de vidas adicionais, americanas e japonesas. Historiadores continuam divididos sobre se o Japão já estava próximo de se render por outros motivos, e sobre o peso que a entrada da União Soviética na guerra contra o Japão teve nessa decisão final.',
          },
        ],
      },
      {
        id: 'fim-guerra-pacifico',
        label: 'O Fim da Guerra do Pacífico',
        image: WW2_IMG.hirohitoRadio,
        imageAlt: 'Transmissão de rádio do Imperador Hirohito anunciando a rendição',
        imageCredit: {
          photographer: 'Autor não identificado — Agência de Notícias Domei',
          date: '15 de agosto de 1945',
          location: 'Tóquio, Japão',
        },
        blocks: [
          {
            type: 'paragraph',
            text: 'Em 15 de agosto de 1945, o imperador Hirohito anunciou pela primeira vez em transmissão de rádio a rendição do Japão, um evento tão inédito para a população japonesa quanto os próprios bombardeios: era a primeira vez que a voz de um imperador era ouvida publicamente. A rendição formal foi assinada em 2 de setembro, a bordo do encouraçado USS Missouri, ancorado na Baía de Tóquio, encerrando oficialmente a Segunda Guerra Mundial.',
          },
          {
            type: 'paragraph',
            text: 'Hiroshima e Nagasaki permanecem, até hoje, os únicos usos de armas nucleares em um conflito armado. O episódio inaugurou a chamada Era Atômica e deu início à corrida armamentista que definiria grande parte da Guerra Fria nas décadas seguintes.',
          },
        ],
      },
    ],
  },
  {
    id: 'ww2-2',
    slug: 'hitler-e-mussolini-as-biografias-por-tras-do-eixo',
    category: 'julgamento',
    headline: 'Hitler & Mussolini: as biografias por trás do Eixo',
    subheadline:
      'Como um cabo austríaco e um jornalista socialista italiano se tornaram os dois rostos mais associados ao fascismo europeu do século XX.',
    coverImage: WW2_IMG.hitlerMussolini,
    coverImageAlt: 'Adolf Hitler e Benito Mussolini lado a lado em encontro oficial',
    coverImageCredit: {
      photographer: 'Bundesarchiv (arquivo federal alemão)',
      date: 'Junho de 1940',
      location: 'Munique, Alemanha',
    },
    author: AUTHORS.Ruben,
    publishedAt: '2026-01-22',
    readingTimeMinutes: 8,
    isFeatured: true,
    tags: ['Biografias', 'Nazismo', 'Fascismo'],
    topics: [
      {
        id: 'hitler-ascensao',
        label: 'Adolf Hitler: da Áustria à Chancelaria',
        image: WW2_IMG.hitlerPortrait,
        imageAlt: 'Adolf Hitler discursando em comício do Partido Nazista',
        imageCredit: {
          photographer: 'Heinrich Hoffmann (fotógrafo oficial do Partido Nazista)',
          date: '1935',
          location: 'Nuremberg, Alemanha',
        },
        blocks: [
          {
            type: 'paragraph',
            text: 'Nascido em 1889 na cidade austríaca de Braunau am Inn, Adolf Hitler serviu como soldado alemão na Primeira Guerra Mundial antes de ingressar na política em Munique. Em 1923, liderou uma tentativa fracassada de golpe conhecida como Putsch da Cervejaria, que resultou em sua prisão. Foi na cadeia que escreveu "Mein Kampf", livro que expunha sua ideologia racial e expansionista.',
          },
          {
            type: 'paragraph',
            text: 'Nomeado chanceler da Alemanha em 30 de janeiro de 1933, Hitler consolidou poder absoluto em poucos meses por meio da Lei de Plenos Poderes e da perseguição a opositores políticos. A chamada Noite dos Longos Facas, em 1934, eliminou rivais internos e consolidou seu controle sobre o Partido Nazista e as forças armadas.',
          },
        ],
      },
      {
        id: 'mussolini-fascismo',
        label: 'Benito Mussolini: o Fascismo antes do Nazismo',
        image: WW2_IMG.mussoliniBalcao,
        imageAlt: 'Benito Mussolini discursando de uma sacada em Roma',
        imageCredit: {
          photographer: 'Istituto Luce (agência estatal italiana de fotografia e cinema)',
          date: 'Década de 1930',
          location: 'Piazza Venezia, Roma, Itália',
        },
        blocks: [
          {
            type: 'paragraph',
            text: 'Benito Mussolini nasceu em 1883 em Predappio, na Itália, e começou a vida pública como jornalista e militante socialista, antes de romper com o partido e adotar um nacionalismo autoritário. Em 1919, fundou os Fasci Italiani di Combattimento, movimento que daria origem ao fascismo. Em outubro de 1922, a Marcha sobre Roma pressionou o rei Vítor Emanuel III a nomeá-lo primeiro-ministro.',
          },
          {
            type: 'paragraph',
            text: 'Governando como "Il Duce", Mussolini implementou um Estado corporativista de partido único e buscou recriar a glória do Império Romano por meio de campanhas expansionistas, como a invasão da Etiópia em 1935. Sua retórica grandiloquente e seus discursos de sacada se tornaram símbolos do culto à personalidade fascista, técnica de propaganda que influenciaria outros regimes autoritários da época, incluindo o nazismo alemão.',
          },
        ],
      },
      {
        id: 'alianca-declinio',
        label: 'Uma Aliança de Conveniência',
        image: WW2_IMG.hitlerMussolini,
        imageAlt: 'Hitler e Mussolini em encontro oficial',
        imageCredit: {
          photographer: 'Bundesarchiv',
          date: 'Junho de 1940',
          location: 'Munique, Alemanha',
        },
        blocks: [
          {
            type: 'heading',
            text: 'O Pacto de Aço e o fim dos dois ditadores',
          },
          {
            type: 'paragraph',
            text: 'Em maio de 1939, Alemanha e Itália formalizaram sua aliança militar por meio do Pacto de Aço. Apesar das semelhanças ideológicas, historiadores apontam diferenças relevantes entre os dois regimes: enquanto o nazismo se apoiava fortemente em uma ideologia racial antissemita, o fascismo italiano original era mais focado no nacionalismo estatal, embora tenha adotado leis raciais próprias a partir de 1938.',
          },
          {
            type: 'paragraph',
            text: 'Os destinos dos dois líderes se encerraram de forma abrupta em 1945. Mussolini foi deposto em julho de 1943 e, após ser resgatado pelos alemães, liderou um Estado fantoche no norte da Itália até ser capturado e executado por partisans italianos em abril de 1945. Hitler tirou a própria vida em seu bunker em Berlim em 30 de abril de 1945, enquanto as forças soviéticas cercavam a capital alemã.',
          },
          {
            type: 'highlight',
            text: 'Diferente de Hitler e Mussolini, que morreram antes do fim da guerra, os líderes remanescentes do regime nazista foram os que enfrentariam o banco dos réus em Nuremberg — pano de fundo desta reconstituição.',
          },
        ],
      },
    ],
  },
  {
    id: 'ww2-3',
    slug: 'urss-o-exercito-vermelho-e-a-frente-oriental',
    category: 'analise',
    headline: 'URSS: o Exército Vermelho e a Frente Oriental que decidiu a guerra',
    subheadline:
      'Da invasão alemã em 1941 à bandeira soviética hasteada sobre Berlim, a Frente Oriental foi o palco mais sangrento da Segunda Guerra Mundial.',
    coverImage: WW2_IMG.reichstagFlag,
    coverImageAlt: 'Soldados soviéticos hasteando a bandeira sobre o Reichstag em Berlim',
    coverImageCredit: {
      photographer: 'Yevgeny Khaldei',
      date: '2 de maio de 1945',
      location: 'Berlim, Alemanha',
    },
    author: AUTHORS.Luis,
    publishedAt: '2026-01-29',
    readingTimeMinutes: 9,
    isFeatured: true,
    tags: ['URSS', 'Exército Vermelho', 'Frente Oriental'],
    topics: [
      {
        id: 'operacao-barbarossa',
        label: 'A Operação Barbarossa',
        image: WW2_IMG.barbarossa,
        imageAlt: 'Tropas alemãs avançando pelo território soviético em 1941',
        imageCredit: {
          photographer: 'Bundesarchiv',
          date: 'Junho de 1941',
          location: 'Frente Oriental, União Soviética',
        },
        blocks: [
          {
            type: 'paragraph',
            text: 'Em 22 de junho de 1941, a Alemanha nazista rompeu o pacto de não agressão assinado com a URSS e lançou a Operação Barbarossa, a maior invasão militar da história, mobilizando mais de três milhões de soldados ao longo de uma frente de milhares de quilômetros. O avanço inicial alemão foi devastador, capturando vastos territórios soviéticos e cercando exércitos inteiros nas primeiras semanas de combate.',
          },
          {
            type: 'paragraph',
            text: 'A Frente Oriental se tornaria, ao longo dos quatro anos seguintes, o teatro de guerra com o maior número de baixas de toda a Segunda Guerra Mundial, responsável pela esmagadora maioria das perdas militares alemãs no conflito.',
          },
        ],
      },
      {
        id: 'stalingrado',
        label: 'Stalingrado, o Ponto de Virada',
        image: WW2_IMG.stalingrado,
        imageAlt: 'Ruínas da cidade de Stalingrado durante a batalha',
        imageCredit: {
          photographer: 'Georgy Zelma',
          date: 'Janeiro de 1943',
          location: 'Stalingrado, URSS (atual Volgogrado, Rússia)',
        },
        blocks: [
          {
            type: 'heading',
            text: 'A batalha que mudou o rumo da guerra',
          },
          {
            type: 'paragraph',
            text: 'Diante da retirada de tropas soviéticas em 1942, Stálin emitiu a Ordem nº 227, que proibia recuos sem autorização expressa.',
          },
          {
            type: 'quote',
            text: 'Nenhum passo atrás!',
            attribution: '(Josef Stálin, Ordem nº 227)',
          },
          {
            type: 'paragraph',
            text: 'A Batalha de Stalingrado, travada entre agosto de 1942 e fevereiro de 1943, tornou-se um dos combates mais brutais já registrados, com combates urbanos casa a casa. A rendição do 6º Exército alemão em fevereiro de 1943 marcou o primeiro grande cerco de um exército alemão inteiro e é amplamente considerada o ponto de virada da guerra na Frente Oriental.',
          },
        ],
      },
      {
        id: 'marcha-berlim',
        label: 'A Marcha até Berlim',
        image: WW2_IMG.reichstagFlag,
        imageAlt: 'Bandeira soviética hasteada sobre o prédio do Reichstag',
        imageCredit: {
          photographer: 'Yevgeny Khaldei',
          date: '2 de maio de 1945',
          location: 'Berlim, Alemanha',
        },
        blocks: [
          {
            type: 'paragraph',
            text: 'Após vencer a Batalha de Kursk em 1943, considerada a maior batalha de tanques da história, o Exército Vermelho iniciou uma ofensiva contínua rumo ao oeste, reconquistando território soviético e avançando pela Europa Oriental. A campanha culminou na Batalha de Berlim, em abril e maio de 1945, quando tropas soviéticas cercaram e tomaram a capital alemã.',
          },
          {
            type: 'paragraph',
            text: 'Em 2 de maio de 1945, a icônica fotografia de soldados soviéticos hasteando a bandeira sobre o Reichstag simbolizou o fim do regime nazista na Europa. O custo humano para a União Soviética foi imenso: estima-se que o país tenha sofrido cerca de 27 milhões de mortes durante a guerra, o maior número de qualquer nação envolvida no conflito.',
          },
        ],
      },
    ],
  },
  {
    id: 'ww2-4',
    slug: 'china-o-massacre-de-nanquim',
    category: 'crimes-de-guerra',
    headline: 'China: o Massacre de Nanquim e a Guerra Sino-Japonesa',
    subheadline:
      'Em dezembro de 1937, a capital chinesa viveu semanas de violência extrema sob ocupação japonesa — um dos episódios mais graves da Segunda Guerra Mundial na Ásia.',
    coverImage: WW2_IMG.zonaSeguranca,
    coverImageAlt: 'Refugiados civis na Zona de Segurança Internacional de Nanquim',
    coverImageCredit: {
      photographer: 'Comitê Internacional para a Zona de Segurança de Nanquim',
      date: 'Janeiro de 1938',
      location: 'Nanquim, China',
    },
    author: AUTHORS.Jarvis,
    publishedAt: '2026-02-05',
    readingTimeMinutes: 11,
    isFeatured: true,
    tags: ['China', 'Massacre de Nanquim', 'Guerra Sino-Japonesa'],
    topics: [
      {
        id: 'avanco-japones',
        label: 'O Avanço Japonês sobre Nanquim',
        image: WW2_IMG.nanquimAvanco,
        imageAlt: 'Tropas japonesas nos arredores de Nanquim em dezembro de 1937',
        imageCredit: {
          photographer: 'Arquivo do Exército Imperial Japonês',
          date: 'Dezembro de 1937',
          location: 'Nanquim, China',
        },
        blocks: [
          {
            type: 'paragraph',
            text: 'A Segunda Guerra Sino-Japonesa começou oficialmente em julho de 1937, mais de dois anos antes da invasão alemã da Polônia. Após meses de combates intensos na Batalha de Xangai, as forças japonesas avançaram rapidamente rumo a Nanquim, então capital da China Nacionalista sob o governo de Chiang Kai-shek.',
          },
          {
            type: 'paragraph',
            text: 'Temendo perder suas tropas em um cerco prolongado, Chiang Kai-shek ordenou a retirada de grande parte do exército regular chinês da cidade, deixando sua defesa a cargo de tropas auxiliares mal preparadas. A cidade caiu em 13 de dezembro de 1937, e as forças japonesas, comandadas pelo general Iwane Matsui, entraram encontrando pouca resistência organizada.',
          },
        ],
      },
      {
        id: 'seis-semanas',
        label: 'Seis Semanas de Violência',
        image: WW2_IMG.nanquimAvanco,
        imageAlt: 'Registro histórico do período do massacre em Nanquim',
        imageCredit: {
          photographer: 'Arquivo do Exército Imperial Japonês',
          date: 'Dezembro de 1937',
          location: 'Nanquim, China',
        },
        blocks: [
          {
            type: 'heading',
            text: 'Um dos episódios mais graves da guerra na Ásia',
          },
          {
            type: 'paragraph',
            text: 'Nas semanas seguintes à queda da cidade, tropas japonesas conduziram execuções em massa de prisioneiros de guerra e civis, além de saques generalizados, incêndios e um número extremamente alto de casos de violência sexual contra mulheres e meninas. O episódio ficou mundialmente conhecido como o Massacre de Nanquim, ou "Estupro de Nanquim".',
          },
          {
            type: 'paragraph',
            text: 'O número exato de vítimas é, até hoje, um tema de intenso debate historiográfico entre China e Japão. O Tribunal Militar Internacional para o Extremo Oriente, reunido em Tóquio após a guerra, apresentou estimativas superiores a 200 mil mortos. Pesquisas acadêmicas mais recentes, considerando diferentes recortes geográficos e temporais, situam o número de vítimas fatais dentro de uma faixa que vai de dezenas de milhares a valores próximos de 300 mil, a depender da metodologia utilizada. Ainda que os números precisos sigam sendo discutidos por historiadores, a escala e a gravidade da violência contra a população civil de Nanquim são amplamente documentadas e reconhecidas.',
          },
        ],
      },
      {
        id: 'zona-seguranca',
        label: 'A Zona de Segurança e John Rabe',
        image: WW2_IMG.johnRabe,
        imageAlt: 'Retrato de John Rabe, empresário alemão que liderou a Zona de Segurança de Nanquim',
        imageCredit: {
          photographer: 'Fotógrafo não identificado',
          date: 'Década de 1930',
          location: 'Nanquim, China',
        },
        blocks: [
          {
            type: 'paragraph',
            text: 'Em meio à violência, um grupo de cerca de vinte estrangeiros que haviam permanecido na cidade, entre missionários, médicos e empresários, formou o Comitê Internacional para a Zona de Segurança de Nanquim. À frente do grupo estava John Rabe, um empresário alemão da Siemens e, ironicamente, membro do Partido Nazista, que usou suas credenciais políticas para negociar com oficiais japoneses.',
          },
          {
            type: 'quote',
            text: 'Há uma questão de moralidade aqui... é comovente ver como essas pessoas acreditam em mim.',
            attribution: '(John Rabe, em seu diário)',
          },
          {
            type: 'paragraph',
            text: 'A Zona de Segurança abrigou entre 200 mil e 250 mil civis chineses, protegendo-os do pior da violência ao redor. Rabe manteve um diário detalhado dos acontecimentos, posteriormente publicado como fonte histórica fundamental sobre o massacre. Ao retornar à Alemanha, tentou alertar as autoridades nazistas sobre os crimes que testemunhara, mas foi interrogado pela Gestapo e impedido de divulgar o que sabia.',
          },
        ],
      },
      {
        id: 'responsabilizacao',
        label: 'A Responsabilização e a Memória',
        image: WW2_IMG.tribunalToquio,
        imageAlt: 'Sessão do Tribunal Militar Internacional para o Extremo Oriente em Tóquio',
        imageCredit: {
          photographer: 'Arquivo Nacional dos Estados Unidos',
          date: '1946',
          location: 'Tóquio, Japão',
        },
        blocks: [
          {
            type: 'paragraph',
            text: 'Após o fim da guerra, o general Iwane Matsui foi julgado pelo Tribunal Militar Internacional para o Extremo Oriente e condenado por não impedir os crimes cometidos por tropas sob seu comando, sendo executado em 1948. O tenente-general Hisao Tani, também associado às operações em Nanquim, foi julgado separadamente por um tribunal chinês na própria cidade e igualmente condenado à morte.',
          },
          {
            type: 'paragraph',
            text: 'O Massacre de Nanquim segue sendo um dos temas mais sensíveis das relações entre China e Japão até os dias atuais. Enquanto a maioria dos historiadores, incluindo pesquisadores japoneses respeitados, reconhece a validade histórica do massacre, o tema ainda é alvo de revisionismo por parte de setores nacionalistas japoneses, o que mantém viva a disputa sobre sua memória. Hoje, o Memorial das Vítimas do Massacre de Nanquim, na China, preserva testemunhos de sobreviventes e documentação histórica do período.',
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
