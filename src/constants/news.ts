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
            text: 'Em 1939, o mundo científico começou a perceber que a recém-descoberta fissão nuclear poderia ter consequências muito maiores do que apenas avanços na pesquisa atômica. Cientistas como Albert Einstein e Leó Szilárd alertaram o governo dos Estados Unidos para a possibilidade de a Alemanha nazista estar investigando a utilização da fissão do urânio para a criação de uma arma de enorme poder destrutivo. A preocupação aumentou devido à importância estratégica do urânio e ao fato de a Alemanha possuir uma comunidade científica altamente desenvolvida antes e durante os primeiros anos da Segunda Guerra Mundial.',
          },
          {
            type: 'paragraph',
            text: 'Em agosto daquele ano, Einstein assinou uma carta, redigida com a participação de Szilárd, que foi enviada ao presidente Franklin D. Roosevelt. O documento chamava atenção para a possibilidade de uma nova classe de armas e para a necessidade de os Estados Unidos acompanharem de perto as pesquisas alemãs. A carta contribuiu para que o governo americano passasse a tratar a pesquisa nuclear como uma questão de segurança nacional. Inicialmente, os esforços ainda eram pequenos e concentrados em estudos científicos, mas a entrada dos Estados Unidos na Segunda Guerra Mundial, em dezembro de 1941, acelerou drasticamente o desenvolvimento do programa.',
          },
          {
            type: 'paragraph',
            text: 'Em 1942, o governo americano reorganizou os esforços de pesquisa e criou uma estrutura militar para coordenar o desenvolvimento da nova arma. O programa recebeu o nome de Projeto Manhattan e passou a reunir algumas das maiores mentes científicas da época, além de engenheiros, técnicos, operários e militares. O projeto era extremamente secreto, e grande parte dos trabalhadores conhecia apenas uma pequena parte de seu objetivo. A liderança científica foi entregue ao físico J. Robert Oppenheimer, enquanto o general Leslie Groves ficou responsável pela direção militar e pela enorme operação logística necessária para manter o programa funcionando.' 
          },
          {
            type: 'paragraph',
            text: 'O Projeto Manhattan não era uma única instalação, mas uma rede de centros espalhados pelos Estados Unidos. Em Los Alamos, no estado do Novo México, cientistas trabalharam diretamente no desenvolvimento e na montagem das armas. Em Oak Ridge, no Tennessee, foram construídas enormes instalações destinadas principalmente ao enriquecimento de urânio, processo necessário para obter material adequado para determinadas armas nucleares. Já em Hanford, no estado de Washington, foram produzidas grandes quantidades de plutônio por meio de reatores nucleares especialmente construídos para o projeto.'
          },
          {
            type: 'paragraph',
            text: 'O tamanho da operação era extraordinário. Milhares de pessoas participaram direta ou indiretamente do programa, desde físicos e químicos até engenheiros, trabalhadores industriais, militares e funcionários administrativos. Muitas delas sequer sabiam exatamente o que estavam ajudando a construir. A segurança era tratada como prioridade absoluta, com informações compartimentalizadas e rígido controle sobre documentos e comunicações. Ao mesmo tempo, o governo investiu enormes quantidades de recursos na construção de cidades e instalações praticamente do zero, transformando locais antes pouco povoados em importantes centros industriais e científicos.'
          },
          {
            type: 'paragraph',
            text: 'Entre os pesquisadores envolvidos estavam nomes importantes da física do século XX, como Enrico Fermi, Niels Bohr, Hans Bethe, Richard Feynman e Edward Teller. A colaboração entre cientistas de diferentes países também foi fundamental. Muitos pesquisadores europeus haviam deixado seus países devido à ascensão do nazismo e acabaram contribuindo para os esforços aliados. O projeto, portanto, tornou-se uma concentração excepcional de conhecimento científico e tecnológico, combinando pesquisas teóricas sobre o núcleo atômico com desafios de engenharia em uma escala nunca vista anteriormente.'
          },
          {
            type: 'paragraph',
            text: 'Enquanto o projeto avançava, a situação da guerra também mudava rapidamente. Em maio de 1945, a Alemanha nazista se rendeu, encerrando a guerra na Europa. A ameaça de uma possível bomba alemã havia desaparecido, mas o Projeto Manhattan continuou. Os pesquisadores passaram então a concentrar seus esforços na conclusão das armas e na realização de um teste que comprovasse se toda aquela teoria e engenharia realmente funcionariam.'
          },
          {
            type: 'paragraph',
            text: 'Em 16 de julho de 1945, nas primeiras horas da manhã, o deserto próximo a Alamogordo, no Novo México, foi palco do Teste Trinity, a primeira detonação de uma arma nuclear da história. A explosão produziu uma quantidade de energia muito superior à de qualquer arma convencional existente até então e demonstrou que os princípios científicos utilizados pelo projeto estavam corretos. O sucesso do teste representou um momento decisivo para a história da humanidade: pela primeira vez, os seres humanos haviam conseguido liberar, de maneira controlada, uma quantidade colossal de energia proveniente de processos nucleares.'
          },
          {
            type: 'paragraph',
            text: 'O resultado do Trinity também teve consequências que ultrapassaram o campo científico. A existência de armas nucleares alteraria profundamente a estratégia militar, as relações entre as grandes potências e o equilíbrio político internacional. Poucas semanas depois do teste, os Estados Unidos utilizariam armas nucleares contra as cidades japonesas de Hiroshima e Nagasaki, em agosto de 1945, acontecimentos que contribuíram para o fim da Segunda Guerra Mundial e inauguraram uma nova era marcada pela presença permanente das armas nucleares na política mundial.'
          },
          {
            type: 'paragraph',
            text: 'O Projeto Manhattan, portanto, não foi apenas um programa científico desenvolvido durante a Segunda Guerra Mundial. Ele representou uma mobilização sem precedentes de ciência, indústria, recursos financeiros e poder militar. Seu legado foi ambíguo: ao mesmo tempo em que demonstrou a capacidade da ciência de realizar avanços extraordinários em um período extremamente curto, também revelou o potencial de destruição associado ao conhecimento nuclear. A partir de 1945, a humanidade entrou na chamada era nuclear, e as decisões tomadas durante aqueles anos continuariam influenciando a política internacional, a ciência e a segurança mundial por décadas.'
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
            text: 'Em 6 de agosto de 1945, o bombardeiro B-29 "Enola Gay", comandado pelo coronel Paul Tibbets, lançou sobre Hiroshima a bomba de urânio conhecida como "Little Boy". A explosão destruiu uma grande parte da cidade e provocou dezenas de milhares de mortes imediatamente. Hiroshima havia sido escolhida como alvo devido à sua importância militar e industrial, além de sua concentração populacional e ao fato de ter sofrido relativamente poucos bombardeios convencionais até então. O governo americano também pretendia demonstrar de maneira clara o poder destrutivo da nova arma. Nos meses e anos seguintes, o número de vítimas continuou aumentando devido aos ferimentos, queimaduras, doenças e efeitos da exposição à radiação, fazendo com que o total de mortos associados ao ataque ultrapassasse 100 mil.',
          },
          {
            type: 'quote',
            text: 'A força da qual o sol extrai seu poder foi lançada contra aqueles que trouxeram a guerra ao Extremo Oriente.',
            attribution: '(Harry S. Truman, em comunicado oficial sobre o bombardeio de Hiroshima)',
          },
          {
            type: 'paragraph',
            text: 'O ataque chocou o Japão e o restante do mundo, mas não levou imediatamente à rendição japonesa. Na época, o governo japonês ainda estava dividido sobre como encerrar a guerra, enquanto suas forças militares continuavam se preparando para uma possível invasão das ilhas principais. Os Estados Unidos, por sua vez, haviam acabado de demonstrar que possuíam uma arma completamente diferente de qualquer outra utilizada anteriormente. O presidente Harry S. Truman autorizou a continuação dos ataques caso o Japão não aceitasse os termos de rendição estabelecidos pelos Aliados.',
          },
          {
            type: 'paragraph',
            text: 'Três dias depois, em 9 de agosto, outro bombardeiro B-29, o "Bockscar", decolou carregando a bomba de plutônio "Fat Man". O alvo inicial da missão era a cidade de Kokura, onde havia importantes instalações industriais e militares. Entretanto, condições meteorológicas e a presença de nuvens dificultaram a identificação do alvo. A aeronave então seguiu para seu alvo alternativo, Nagasaki. A bomba foi lançada e detonada sobre a cidade, provocando novamente uma enorme destruição e dezenas de milhares de mortes. Assim como em Hiroshima, milhares de pessoas morreram posteriormente em consequência dos ferimentos e da exposição à radiação.'
          },
          {
            type: 'paragraph',
            text: 'Os dois ataques ocorreram em um momento particularmente decisivo da guerra. Além dos bombardeios atômicos, a União Soviética declarou guerra ao Japão em 8 de agosto e iniciou operações militares contra as forças japonesas na Manchúria no dia seguinte. A entrada soviética alterou significativamente a situação estratégica do Japão, que até então ainda esperava, entre outras possibilidades, utilizar a União Soviética como intermediária para tentar negociar melhores condições de rendição. Com a derrota das forças japonesas na região e a destruição causada pelas bombas atômicas, a liderança japonesa passou a enfrentar uma situação cada vez mais insustentável.'
          },
          {
            type: 'paragraph',
            text: 'A decisão de utilizar as bombas permanece um dos temas mais debatidos da historiografia da guerra. Para os EUA, o argumento oficial era que os ataques evitariam uma invasão terrestre do Japão, que poderia custar centenas de milhares de vidas adicionais, americanas e japonesas. A Operação Downfall, plano elaborado pelos Aliados para uma possível invasão do arquipélago japonês, previa uma campanha extremamente difícil e potencialmente muito sangrenta. Defensores da decisão argumentam que o uso das bombas acelerou a rendição e evitou uma invasão que poderia prolongar a guerra por meses.'
          },
          {
            type: 'paragraph',
            text: 'Por outro lado, historiadores continuam divididos sobre a necessidade dos ataques. Alguns argumentam que o Japão já estava próximo de se render e que a entrada da União Soviética na guerra teve um papel tão importante ou até mais decisivo para a decisão japonesa quanto os bombardeios. Outros consideram que a combinação entre a destruição de Hiroshima e Nagasaki, a ameaça de novos ataques nucleares e a ofensiva soviética foi fundamental para convencer a liderança japonesa de que continuar lutando era inviável. O debate também envolve questões militares, diplomáticas e éticas, incluindo a possibilidade de demonstrar a nova arma de outra maneira antes de utilizá-la diretamente contra cidades.'
          },
          {
            type: 'paragraph',
            text:'Em 15 de agosto de 1945, o imperador Hirohito anunciou pelo rádio a decisão do Japão de aceitar os termos de rendição dos Aliados. A rendição formal foi assinada em 2 de setembro de 1945, a bordo do encouraçado USS Missouri, encerrando oficialmente a Segunda Guerra Mundial. Os bombardeios de Hiroshima e Nagasaki, entretanto, deixaram um legado que ultrapassou o fim do conflito. Além das enormes perdas humanas, os ataques inauguraram de forma concreta a era das armas nucleares e deram início a debates sobre seus efeitos, sua utilização em guerras e os riscos de uma futura corrida armamentista entre grandes potências.'
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
            text: 'Em 15 de agosto de 1945, o imperador Hirohito anunciou pela primeira vez, em uma transmissão de rádio para toda a população, a decisão do Japão de aceitar os termos de rendição impostos pelos Aliados. O pronunciamento foi um acontecimento histórico não apenas por marcar o fim da guerra para o Japão, mas também porque era a primeira vez que a maioria dos cidadãos japoneses ouvia diretamente a voz do imperador. A transmissão havia sido cuidadosamente preparada, e a linguagem utilizada por Hirohito era formal e indireta, seguindo a tradição imperial da época. Para muitos japoneses, compreender imediatamente que aquelas palavras significavam a derrota do país não foi simples.',
          },
          {
            type: 'paragraph',
            text: 'A notícia provocou uma enorme mudança no cotidiano japonês. Depois de anos de guerra, propaganda militar, escassez de alimentos e ataques aéreos, a população finalmente recebeu a confirmação de que o conflito havia terminado. Ao mesmo tempo, o país encontrava-se profundamente destruído. Grandes cidades haviam sido devastadas por bombardeios convencionais e nucleares, milhões de pessoas estavam deslocadas e a infraestrutura econômica e industrial havia sofrido danos significativos. A rendição também marcou o início de um período de ocupação e reconstrução sob supervisão das forças aliadas.',
          },
          {
            type: 'paragraph',
            text: 'Apesar do anúncio de 15 de agosto, a rendição ainda precisava ser formalizada oficialmente. Isso ocorreu em 2 de setembro de 1945, a bordo do encouraçado USS Missouri, ancorado na Baía de Tóquio. Representantes do governo e das forças armadas japonesas assinaram o documento de rendição diante de representantes das potências aliadas. Pelo Japão, a assinatura foi realizada pelo ministro das Relações Exteriores Mamoru Shigemitsu e pelo general Yoshijiro Umezu. Do lado aliado, o ato foi conduzido pelo general Douglas MacArthur, que representava as potências vencedoras.'
          },
          {
            type: 'paragraph',
            text: 'A cerimônia foi relativamente curta, mas carregava um enorme significado histórico. O USS Missouri havia sido escolhido como local da assinatura por sua importância simbólica e militar. Naquele momento, o Japão passava oficialmente de uma potência em guerra para um país derrotado e ocupado. A assinatura encerrou formalmente a Segunda Guerra Mundial no teatro do Pacífico, embora diferentes forças e governos envolvidos no conflito tivessem iniciado processos de rendição em momentos distintos.'
          },
          {
            type: 'paragraph',
            text: 'O fim da guerra também trouxe profundas transformações políticas para o Japão. Durante a ocupação aliada, liderada principalmente pelos Estados Unidos, foram implementadas reformas políticas, econômicas e sociais. O poder militar japonês foi desmantelado, novas instituições foram estabelecidas e o país passou por mudanças que contribuíram para sua transformação em um Estado com uma estrutura política muito diferente daquela existente durante o conflito. A reconstrução seria um processo longo e complexo, marcado tanto pelas consequências da guerra quanto pelas mudanças provocadas pela ocupação.'
          },
          {
            type: 'paragraph',
            text: 'Hiroshima e Nagasaki permanecem, até hoje, os únicos usos de armas nucleares em um conflito armado. Os ataques demonstraram ao mundo que a humanidade havia alcançado uma capacidade de destruição completamente nova. Diferentemente das armas convencionais, as bombas atômicas combinavam uma enorme quantidade de energia liberada em um período extremamente curto com efeitos que continuavam atingindo os sobreviventes posteriormente. O impacto desses acontecimentos ultrapassou o campo militar e passou a influenciar a ciência, a política internacional e os debates sobre a própria existência das armas nucleares.'
          },
          {
            type: 'paragraph',
            text: 'O episódio inaugurou a chamada Era Atômica e transformou profundamente a relação entre ciência, tecnologia e poder militar. Poucos anos antes, a fissão nuclear era principalmente objeto de pesquisas científicas; depois de 1945, o domínio dessa tecnologia tornou-se uma questão central de segurança nacional. Os Estados Unidos haviam demonstrado possuir armas nucleares, mas o monopólio americano não duraria para sempre. Em 1949, a União Soviética realizou seu primeiro teste nuclear, encerrando a exclusividade dos Estados Unidos sobre esse tipo de armamento.'
          },
          {
            type: 'paragraph',
            text: 'A partir daí, começou uma intensa corrida armamentista entre as duas superpotências. Estados Unidos e União Soviética passaram a desenvolver arsenais cada vez maiores e armas progressivamente mais sofisticadas, enquanto outros países posteriormente também desenvolveriam capacidade nuclear. A possibilidade de uma guerra entre grandes potências passou a carregar o risco de uma destruição em escala sem precedentes. Assim, o fim da Segunda Guerra Mundial não representou apenas o encerramento de um dos maiores conflitos da história: também marcou o início de uma nova ordem internacional, na qual a ameaça nuclear permaneceria como um dos principais elementos da política mundial durante toda a Guerra Fria e continuaria influenciando as relações internacionais no século XXI.'
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
            text: 'Adolf Hitler nasceu em 20 de abril de 1889, na cidade de Braunau am Inn, então parte do Império Austro-Húngaro. Durante a juventude, mudou-se para Viena, onde tentou seguir uma carreira artística, mas não conseguiu ingressar na Academia de Belas-Artes. Os anos passados em Viena foram marcados por dificuldades financeiras e pelo contato com ideias nacionalistas, antissemitas e pangermânicas que circulavam em determinados setores da sociedade europeia. Em 1913, Hitler mudou-se para Munique, na Alemanha, e pouco depois ingressou no Exército Alemão durante a Primeira Guerra Mundial.',
          },
          {
            type: 'paragraph',
            text: 'A guerra teve papel fundamental na formação política de Hitler. Ele serviu como mensageiro e recebeu condecorações por sua atuação, permanecendo no Exército até o fim do conflito. A derrota alemã em 1918 e as condições impostas pelo Tratado de Versalhes alimentaram sua visão extremamente nacionalista e sua crença de que a Alemanha havia sido humilhada e traída. No período de instabilidade política que se seguiu, Hitler passou a se envolver cada vez mais com grupos políticos de extrema direita.',
          },
          {
            type: 'paragraph',
            text: 'Em 1919, juntou-se ao Partido dos Trabalhadores Alemães, que posteriormente se transformaria no Partido Nacional-Socialista dos Trabalhadores Alemães, o Partido Nazista. Hitler rapidamente se destacou como orador e propagandista, utilizando discursos que exploravam o descontentamento causado pela crise econômica, pelo desemprego e pela instabilidade política da República de Weimar. O partido defendia um nacionalismo radical, o antissemitismo, o anticomunismo e a rejeição da democracia parlamentar.',
          },
          {
            type: 'paragraph',
            text: 'Em 1923, Hitler tentou tomar o poder por meio do chamado Putsch da Cervejaria, em Munique. A tentativa fracassou, e ele foi preso e condenado. Durante seu período na prisão, escreveu "Mein Kampf", obra na qual apresentou parte de suas ideias políticas e raciais. Após ser libertado, abandonou temporariamente a estratégia de tomada imediata do poder e passou a buscar uma ascensão por meios políticos e eleitorais, enquanto reorganizava o Partido Nazista e ampliava sua estrutura de propaganda.',
          },
          {
            type: 'paragraph',
            text: 'A Grande Depressão de 1929 criou novas condições para o crescimento do nazismo. O desemprego e a crise econômica aumentaram a insatisfação com o governo, enquanto o Partido Nazista conquistava cada vez mais apoio eleitoral. Em 30 de janeiro de 1933, Hitler foi nomeado chanceler da Alemanha pelo presidente Paul von Hindenburg. A partir daí, utilizou a própria estrutura do Estado para eliminar opositores, restringir liberdades políticas e transformar rapidamente a Alemanha em uma ditadura. Em poucos meses, o regime nazista havia consolidado seu controle sobre as instituições alemãs, dando início a uma das mais violentas ditaduras do século XX.',
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
            text: 'Benito Mussolini nasceu em 29 de julho de 1883, em Predappio, na Itália. Filho de uma professora e de um ferreiro que possuía fortes convicções políticas, Mussolini entrou desde cedo em contato com ideias socialistas e passou a atuar como jornalista e militante político. Durante os primeiros anos de sua carreira, tornou-se uma figura conhecida dentro do movimento socialista italiano e chegou a ocupar uma posição importante no jornal oficial do Partido Socialista Italiano.',
          },
          {
            type: 'paragraph',
            text: 'A Primeira Guerra Mundial provocou uma ruptura em sua trajetória. Mussolini inicialmente defendia a posição socialista contrária à entrada da Itália no conflito, mas posteriormente passou a apoiar a participação italiana na guerra. Por causa dessa mudança, rompeu com o Partido Socialista e começou a desenvolver uma visão política baseada no nacionalismo, no militarismo e na ideia de que a Itália deveria ocupar uma posição de maior destaque na Europa. Após servir no Exército italiano, retornou à atividade política em um país profundamente abalado pelas consequências econômicas e sociais da guerra.',
          },
          {
            type: 'paragraph',
            text: 'Em 1919, Mussolini fundou os Fasci Italiani di Combattimento, movimento que posteriormente daria origem ao Partido Nacional Fascista. Os fascistas exploravam o medo do avanço do socialismo e do comunismo, além do descontentamento de setores da sociedade italiana com a situação econômica e com os resultados obtidos pelo país após a Primeira Guerra Mundial. Grupos fascistas conhecidos como "camisas-negras" passaram a utilizar violência e intimidação contra adversários políticos, sindicatos e organizações de esquerda.',
          },
          {
            type: 'paragraph',
            text: 'Em outubro de 1922, Mussolini chegou ao poder após a Marcha sobre Roma. Embora o evento tenha envolvido uma demonstração de força fascista, sua ascensão ocorreu dentro da estrutura institucional existente: o rei Victor Emmanuel III convidou Mussolini para formar um governo. Nos anos seguintes, Mussolini desmontou progressivamente as instituições democráticas italianas, restringiu a liberdade de imprensa, perseguiu opositores e concentrou poderes em torno de seu governo. O regime fascista tornou-se uma das primeiras ditaduras de massa da Europa do período entre guerras.',
          },
          {
            type: 'paragraph',
            text: 'O fascismo italiano também passou a exercer influência sobre movimentos autoritários de outros países. Mussolini buscava transformar a Itália em uma grande potência e defendia a expansão territorial, utilizando a força militar para ampliar a influência italiana. Em 1935, a Itália invadiu a Etiópia, provocando condenação internacional. Apesar de algumas diferenças ideológicas entre o fascismo italiano e o nazismo alemão, os dois regimes encontraram interesses comuns ao longo da década de 1930. Essa aproximação acabaria levando à formação de uma aliança que teria papel central na Segunda Guerra Mundial.',
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
            text: 'Apesar de suas diferenças políticas e das particularidades de seus regimes, Adolf Hitler e Benito Mussolini encontraram interesses em comum durante a década de 1930. Mussolini havia chegado ao poder mais de uma década antes de Hitler e inicialmente via o líder alemão com certa desconfiança. O fascismo italiano possuía características próprias, enquanto o nazismo colocava a ideologia racial e o antissemitismo em uma posição central. Ainda assim, o crescimento do poder alemão e a oposição compartilhada ao comunismo aproximaram os dois governos.'
          },
          {
            type: 'paragraph',
            text: 'A Guerra Civil Espanhola foi um dos principais momentos dessa aproximação. A partir de 1936, Alemanha e Itália apoiaram as forças nacionalistas lideradas por Francisco Franco contra a República Espanhola. Os dois países forneceram armas, equipamentos, tropas e apoio militar, utilizando o conflito também como oportunidade para testar estratégias e demonstrar sua força internacional. A colaboração na Espanha fortaleceu os vínculos entre Berlim e Roma e mostrou que os dois regimes estavam dispostos a atuar conjuntamente contra movimentos de esquerda.'
          },
          {
            type: 'paragraph',
            text: 'Em outubro de 1936, Mussolini declarou a existência de um eixo político entre Roma e Berlim, expressão que posteriormente se tornaria conhecida como "Eixo Roma-Berlim". A aproximação continuou nos anos seguintes e, em 1939, Alemanha e Itália assinaram o chamado Pacto de Aço, estabelecendo uma aliança militar mais formal. Pouco depois, a Alemanha iniciou a invasão da Polônia em setembro de 1939, desencadeando a Segunda Guerra Mundial na Europa.'
          },
          {
            type: 'paragraph',
            text: 'A relação entre Hitler e Mussolini, entretanto, não era baseada apenas em amizade pessoal ou em uma visão política completamente idêntica. Tratava-se também de uma parceria estratégica, na qual cada governo buscava ampliar seu próprio poder e influência. A Alemanha possuía crescente capacidade militar e industrial, enquanto Mussolini pretendia transformar a Itália em uma potência dominante no Mediterrâneo. Os interesses dos dois países frequentemente se sobrepunham, mas também existiam diferenças de objetivos e capacidade militar.'
          },
          {
            type: 'paragraph',
            text: 'Com o avanço da guerra, a dependência italiana em relação à Alemanha tornou-se cada vez maior. As derrotas sofridas pelas forças italianas em diferentes frentes enfraqueceram o regime de Mussolini, enquanto Hitler passou a exercer influência cada vez maior sobre as decisões militares do Eixo. Em 1943, após o desembarque aliado na Sicília, Mussolini foi deposto e preso por ordem do rei. Posteriormente, foi libertado por uma operação alemã e colocado à frente de um governo fascista no norte da Itália, sob forte dependência alemã. A aliança entre os dois regimes terminaria junto com o colapso das potências do Eixo em 1945.'
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
            text: 'Em 22 de junho de 1941, a Alemanha nazista rompeu o pacto de não agressão assinado com a União Soviética e lançou a Operação Barbarossa, dando início à maior invasão militar da história até aquele momento. Cerca de três milhões de soldados alemães e das potências do Eixo participaram da ofensiva, distribuídos ao longo de uma frente que se estendia por milhares de quilômetros. O ataque surpreendeu grande parte das forças soviéticas e colocou em movimento uma das campanhas militares mais violentas e decisivas da Segunda Guerra Mundial.',
          },
          {
            type: 'paragraph',
            text: 'O plano alemão previa uma campanha rápida, baseada na concentração de forças blindadas, na aviação e no avanço coordenado de grandes unidades militares. As forças invasoras foram divididas em três grandes grupos de exércitos, direcionados principalmente para Leningrado, Moscou e a Ucrânia. A estratégia alemã buscava destruir rapidamente o Exército Vermelho em grandes cercos e conquistar vastas áreas do território soviético antes que a resistência pudesse ser reorganizada.',
          },
          {
            type: 'paragraph',
            text: 'Nas primeiras semanas, o avanço alemão foi devastador. Milhares de soldados soviéticos foram capturados, enquanto grandes extensões de território foram ocupadas pelas tropas invasoras. Diversas unidades do Exército Vermelho foram cercadas e destruídas em enormes batalhas de cerco, e importantes cidades e regiões agrícolas ficaram sob controle alemão. A força aérea soviética também sofreu perdas extremamente pesadas nos primeiros dias do conflito, enquanto a desorganização inicial dificultava a coordenação da defesa.',
          },
          {
            type: 'paragraph',
            text: 'Entretanto, a União Soviética possuía uma enorme capacidade de mobilização. À medida que as forças alemãs avançavam, fábricas inteiras foram desmontadas e transferidas para regiões mais afastadas da linha de frente, especialmente para os territórios a leste dos Montes Urais. Milhões de novos soldados foram mobilizados, enquanto a indústria soviética passou progressivamente a produzir enormes quantidades de tanques, aviões, artilharia e munições. A resistência, portanto, começou a se tornar cada vez mais organizada conforme a guerra avançava.',
          },
          {
            type: 'paragraph',
            text: 'A campanha também foi marcada por uma violência extrema contra militares e civis. A invasão alemã não era apenas uma operação militar convencional, mas estava ligada aos objetivos ideológicos e territoriais do regime nazista. Populações consideradas inimigas pelo regime foram submetidas a execuções, deportações, fome planejada e outras formas de perseguição. Comunidades judaicas também foram alvo de assassinatos em massa realizados por unidades especiais alemãs e colaboradores locais, tornando a Frente Oriental um dos principais cenários do genocídio promovido pelo regime nazista.',
          },
          {
            type: 'paragraph',
            text: 'O avanço alemão começou a encontrar dificuldades cada vez maiores conforme as linhas de suprimento se alongavam. As enormes distâncias do território soviético dificultavam o transporte de combustível, munições, alimentos e equipamentos para as tropas na frente de combate. Além disso, a resistência soviética tornou-se mais intensa, enquanto fatores como o clima e as condições das estradas complicavam ainda mais as operações. A expectativa alemã de uma vitória rápida não se concretizou, e a guerra começou a assumir características de um conflito prolongado.',
          },
          {
            type: 'paragraph',
            text: 'No final de 1941, as forças alemãs chegaram às proximidades de Moscou, mas encontraram uma resistência soviética muito mais forte do que esperavam. A ofensiva alemã perdeu força, e a União Soviética conseguiu lançar um contra-ataque que afastou as tropas invasoras da capital. O fracasso em alcançar uma vitória decisiva antes do inverno representou um importante sinal de que a Alemanha não conseguiria derrotar a União Soviética rapidamente. A guerra na Frente Oriental entraria então em uma nova fase, cada vez mais desgastante para ambos os lados.',
          },
          {
            type: 'paragraph',
            text: 'A Frente Oriental se tornaria, ao longo dos quatro anos seguintes, o maior e mais sangrento teatro de operações da Segunda Guerra Mundial. Batalhas como Stalingrado, Kursk e a campanha final até Berlim transformariam o conflito e provocariam perdas humanas em uma escala gigantesca. A esmagadora maioria das perdas militares alemãs ocorreu na luta contra a União Soviética, enquanto as forças soviéticas também sofreram baixas extraordinárias. A partir da resistência ao avanço alemão em 1941, passando pelas grandes contraofensivas soviéticas, o Exército Vermelho gradualmente assumiria a iniciativa e avançaria em direção à Alemanha.',
          },
          {
            type: 'paragraph',
            text: 'A derrota alemã na Frente Oriental foi fundamental para o resultado da Segunda Guerra Mundial na Europa. Ao longo da campanha, a Alemanha perdeu uma parcela enorme de seus soldados, equipamentos e capacidade militar, enquanto a União Soviética conseguiu reconstruir suas forças e transformar sua indústria em uma gigantesca máquina de guerra. Quando o Exército Vermelho chegou a Berlim em 1945, a guerra na Europa estava chegando ao fim. A Frente Oriental havia deixado de ser apenas uma tentativa alemã de conquistar território soviético e se transformara no principal campo de batalha da destruição do poder militar nazista na Europa.',
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
            text: 'Em 1942, após o fracasso da tentativa alemã de conquistar Moscou no ano anterior, Adolf Hitler voltou sua atenção para o sul da União Soviética. A nova ofensiva alemã tinha como um de seus principais objetivos alcançar os campos de petróleo do Cáucaso, fundamentais para o abastecimento da máquina de guerra alemã. Ao mesmo tempo, o controle do rio Volga permitiria interromper uma das principais rotas de transporte soviéticas. Stalingrado, localizada às margens do rio, adquiriu assim uma importância estratégica que ultrapassava seu valor militar imediato.',
          },
          {
            type: 'paragraph',
            text: 'As forças alemãs avançaram durante o verão de 1942 e chegaram aos arredores de Stalingrado. A cidade havia sido transformada em um importante centro industrial soviético e carregava também um forte valor simbólico por levar o nome de Josef Stálin. A liderança alemã acreditava que a conquista da cidade representaria uma grande vitória política e militar, enquanto os soviéticos consideravam sua defesa essencial para impedir que as forças do Eixo consolidassem sua posição no sul do país.',
          },
          {
            type: 'paragraph',
            text: 'Diante da retirada de tropas soviéticas em 1942, Stálin emitiu a Ordem nº 227, que proibia recuos sem autorização expressa. A determinação refletia a gravidade da situação enfrentada pelo Exército Vermelho, que havia perdido enormes quantidades de território e sofrido baixas gigantescas desde o início da invasão alemã.',
          },
          {
            type: 'quote',
            text: 'Nenhum passo atrás!',
            attribution: '(Josef Stálin, Ordem nº 227)',
          },
          {
            type: 'paragraph',
            text: 'A batalha pela cidade rapidamente se transformou em uma luta de desgaste. As forças alemãs conseguiram ocupar grandes partes de Stalingrado, mas encontraram resistência soviética em praticamente todos os setores. Os combates passaram a ocorrer entre edifícios destruídos, fábricas, ruas e posições improvisadas, muitas vezes a curta distância. A destruição da infraestrutura urbana acabou criando obstáculos tanto para os atacantes quanto para os defensores, transformando as ruínas da cidade em posições defensivas.',
          },
          {
            type: 'paragraph',
            text: 'Enquanto os combates urbanos continuavam, o alto comando soviético preparava uma operação para atacar os flancos das forças alemãs. Grande parte dessas áreas era defendida por tropas romenas, húngaras e italianas, aliadas da Alemanha, que possuíam equipamentos e capacidade antitanque inferiores aos das principais formações alemãs. Em novembro de 1942, os soviéticos lançaram a Operação Urano, uma grande ofensiva que atingiu as posições do Eixo ao norte e ao sul de Stalingrado.',
          },
          {
            type: 'paragraph',
            text: 'O avanço soviético conseguiu romper as linhas de defesa e cercar as forças alemãs que estavam dentro e ao redor da cidade. Cerca de 250 mil soldados do Eixo ficaram presos no chamado bolsão de Stalingrado. Hitler recusou a autorização para uma retirada e determinou que o 6º Exército permanecesse na posição, esperando que fosse possível abastecê-lo por via aérea e posteriormente romper o cerco. Na prática, a quantidade de suprimentos transportada pelos aviões alemães foi insuficiente para manter as tropas cercadas em condições adequadas de combate.',
          },
          {
            type: 'paragraph',
            text: 'Durante semanas, os soldados alemães permaneceram isolados enquanto as forças soviéticas apertavam o cerco. A falta de alimentos, combustível, munição e medicamentos agravou progressivamente a situação. Ao mesmo tempo, as tentativas alemãs de romper o cerco pelo exterior fracassaram. O inverno rigoroso e o desgaste das tropas aumentaram ainda mais as dificuldades enfrentadas pelo 6º Exército.',
          },
          {
            type: 'paragraph',
            text: 'A Batalha de Stalingrado, travada entre agosto de 1942 e fevereiro de 1943, tornou-se um dos combates mais brutais já registrados. A cidade foi praticamente destruída pelos combates, e centenas de milhares de soldados e civis morreram durante a batalha e suas consequências. A escala das perdas transformou Stalingrado em um dos símbolos mais conhecidos da brutalidade da guerra na Frente Oriental.',
          },
          {
            type: 'paragraph',
            text: 'Em 2 de fevereiro de 1943, as últimas grandes forças alemãs dentro de Stalingrado se renderam. A capitulação do 6º Exército representou uma derrota militar e simbólica de enormes proporções para a Alemanha nazista. Pela primeira vez durante a guerra, uma grande formação alemã havia sido completamente cercada e destruída após uma longa operação de cerco. Embora a Alemanha ainda permanecesse capaz de lutar por mais de dois anos, sua capacidade de manter a iniciativa estratégica na Frente Oriental havia sido profundamente prejudicada.',
          },
          {
            type: 'paragraph',
            text: 'A Batalha de Stalingrado é amplamente considerada um dos principais pontos de virada da Segunda Guerra Mundial na Frente Oriental. Depois dela, o Exército Vermelho passou progressivamente da defesa para grandes operações ofensivas, recuperando territórios ocupados e avançando cada vez mais em direção ao oeste. A derrota alemã em Stalingrado demonstrou que a União Soviética não apenas havia sobrevivido à invasão, mas também possuía capacidade industrial, militar e humana para reverter o avanço nazista e levar a guerra até o território alemão.',
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
            text: 'Após vencer a Batalha de Kursk em 1943, considerada a maior batalha de tanques da história, o Exército Vermelho iniciou uma sequência de grandes ofensivas que mudaria definitivamente o equilíbrio da guerra na Europa Oriental. A derrota alemã em Kursk impediu que a Wehrmacht recuperasse a iniciativa estratégica na Frente Oriental e permitiu que as forças soviéticas passassem progressivamente da defesa para operações de grande escala. A partir daquele momento, o avanço alemão iniciado em 1941 seria gradualmente substituído por uma longa retirada em direção ao território da própria Alemanha.',
          },
          {
            type: 'paragraph',
            text: 'Nos meses seguintes, as forças soviéticas reconquistaram grandes áreas anteriormente ocupadas pelos alemães. Cidades importantes foram recuperadas, enquanto o Exército Vermelho avançava em direção às fronteiras dos países do Leste Europeu. A velocidade desse avanço variava de acordo com a resistência alemã e as condições do terreno, mas a tendência geral era clara: a Alemanha perdia território e recursos enquanto a União Soviética aumentava sua capacidade ofensiva.',
          },
          {
            type: 'paragraph',
            text: 'Em 1944, a situação alemã tornou-se ainda mais difícil. A Operação Bagration, lançada em junho daquele ano, destruiu grande parte do Grupo de Exércitos Centro e provocou uma das maiores derrotas militares sofridas pela Alemanha durante toda a guerra. O Exército Vermelho avançou rapidamente através da Bielorrússia e chegou às proximidades da Polônia. Ao mesmo tempo, forças soviéticas continuavam pressionando as posições alemãs em outras regiões da Frente Oriental, reduzindo cada vez mais o espaço disponível para uma retirada organizada.',
          },
          {
            type: 'paragraph',
            text: 'A ofensiva soviética também levou a guerra para territórios que antes haviam sido ocupados pelo Eixo. Romênia, Bulgária, Hungria e outros países da região passaram a enfrentar diretamente o avanço do Exército Vermelho. A Romênia, por exemplo, abandonou a aliança com a Alemanha em 1944 e mudou de lado, enquanto as forças soviéticas continuavam avançando pelo sudeste europeu. A Alemanha encontrava-se cada vez mais isolada, lutando simultaneamente contra os Aliados Ocidentais e contra a gigantesca ofensiva soviética no leste.',
          },
          {
            type: 'paragraph',
            text: 'No início de 1945, o Exército Vermelho já estava dentro do território alemão. A ofensiva soviética havia levado suas tropas até o rio Oder, a apenas algumas dezenas de quilômetros de Berlim. A capital alemã estava cercada por uma rede de posições defensivas, mas a Alemanha já não possuía os recursos necessários para impedir o avanço soviético. Tropas experientes haviam sido perdidas em anos de combate, enquanto jovens e idosos eram cada vez mais mobilizados para a defesa do território nacional.',
          },
          {
            type: 'paragraph',
            text: 'Em abril de 1945, teve início a Batalha de Berlim, uma das últimas grandes operações militares da Segunda Guerra Mundial na Europa. Centenas de milhares de soldados soviéticos participaram da ofensiva, enfrentando as forças alemãs que defendiam a capital. Os combates ocorreram em diferentes bairros da cidade e envolveram artilharia, infantaria e veículos blindados. À medida que as tropas soviéticas avançavam, a resistência alemã diminuía e o centro político do Terceiro Reich ficava cada vez mais isolado.',
          },
          {
            type: 'paragraph',
            text: 'Enquanto Berlim era cercada, Adolf Hitler permanecia escondido no Führerbunker, localizado sob a Chancelaria do Reich. A situação dentro da capital tornou-se rapidamente insustentável. Em 30 de abril de 1945, Hitler morreu no bunker, quando as forças soviéticas já avançavam pelo centro da cidade. Poucos dias depois, em 2 de maio, as forças alemãs que defendiam Berlim se renderam, encerrando a resistência organizada na capital.',
          },
          {
            type: 'paragraph',
            text: 'Em 2 de maio de 1945, a icônica fotografia de soldados soviéticos hasteando a bandeira sobre o Reichstag tornou-se um dos símbolos mais conhecidos da derrota da Alemanha nazista. A imagem, registrada pelo fotógrafo Yevgeny Khaldei, representava visualmente a conquista da capital do Reich, embora a fotografia tenha sido posteriormente encenada e retocada para fins de propaganda. Independentemente de suas alterações, a cena tornou-se uma das imagens mais reconhecidas do final da Segunda Guerra Mundial na Europa.',
          },
          {
            type: 'paragraph',
            text: 'A queda de Berlim marcou o colapso definitivo do regime nazista. Em 7 de maio de 1945, representantes alemães assinaram a rendição incondicional em Reims, na França, e uma segunda cerimônia foi realizada em Berlim no dia seguinte, com a participação soviética. A rendição entrou em vigor em 8 de maio, data conhecida como Dia da Vitória na Europa. Na União Soviética e em diversos países do antigo bloco soviético, a celebração ocorreu oficialmente em 9 de maio devido à diferença de horário.',
          },
          {
            type: 'paragraph',
            text: 'O custo humano da Frente Oriental foi extraordinário. A União Soviética sofreu cerca de 27 milhões de mortes, entre militares e civis, durante a Segunda Guerra Mundial, o maior número de mortos de qualquer país envolvido no conflito. Milhões de soldados soviéticos morreram em combate, enquanto a população civil enfrentou ocupação, fome, massacres, deportações e destruição de cidades inteiras. Do lado alemão, a Frente Oriental também concentrou a maior parte das perdas militares sofridas pela Wehrmacht.',
          },
          {
            type: 'paragraph',
            text: 'A marcha do Exército Vermelho até Berlim, portanto, não foi apenas uma sequência de vitórias militares. Ela foi o resultado de quase quatro anos de uma guerra extremamente destrutiva, iniciada com a invasão alemã de 1941 e marcada por algumas das maiores batalhas da história. De Stalingrado e Kursk às grandes ofensivas de 1944 e à queda de Berlim, a União Soviética conseguiu transformar uma situação inicialmente desesperadora em uma campanha que terminou com suas tropas ocupando a capital do país que havia iniciado a invasão. A vitória soviética na Frente Oriental foi, assim, um dos fatores decisivos para a derrota da Alemanha nazista e para o fim da guerra na Europa.',
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
          {
            type: 'paragraph',
            text: 'A queda de Nanquim foi seguida por um período de extrema violência contra a população civil e os prisioneiros de guerra chineses. Nas semanas seguintes à ocupação, ocorreram execuções em massa, estupros, saques e outros crimes cometidos por integrantes das forças japonesas. O episódio ficaria conhecido internacionalmente como o Massacre de Nanquim e se tornaria um dos acontecimentos mais controversos e documentados da guerra na Ásia.',
          },
          {
            type: 'paragraph',
            text: 'As estimativas sobre o número de vítimas variam de acordo com os critérios utilizados pelos pesquisadores, mas organizações e estudos históricos apontam para dezenas ou até centenas de milhares de mortos. A violência atingiu tanto militares capturados quanto civis, incluindo mulheres, crianças e idosos. Relatos de jornalistas estrangeiros, missionários e outros estrangeiros que permaneceram na cidade durante a ocupação ajudaram a registrar os acontecimentos.',
          },
          {
            type: 'paragraph',
            text: 'Antes da chegada das tropas japonesas, um grupo de estrangeiros havia criado a chamada Zona de Segurança de Nanquim, destinada a proteger civis que não conseguiam fugir da cidade. Liderada por representantes de comunidades internacionais presentes na região, a zona acabou abrigando centenas de milhares de pessoas. Mesmo assim, sua capacidade de proteção era limitada diante da escala da violência e das ações das tropas ocupantes.',
          },
          {
            type: 'paragraph',
            text: 'O Massacre de Nanquim tornou-se posteriormente um dos principais exemplos dos crimes cometidos durante a expansão militar japonesa na China. A ocupação e a violência contra a população civil contribuíram para aprofundar a resistência chinesa e endurecer a percepção internacional sobre a campanha japonesa. O conflito, que havia começado como uma guerra regional, continuaria se expandindo até se tornar parte fundamental da Segunda Guerra Mundial na Ásia e no Pacífico.',
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
            text: 'Nas semanas seguintes à queda da cidade, tropas japonesas conduziram execuções em massa de prisioneiros de guerra e civis, além de saques generalizados, incêndios e um número extremamente alto de casos de violência sexual contra mulheres e meninas. O episódio ficou mundialmente conhecido como o Massacre de Nanquim, ou "Estupro de Nanquim", tornando-se um dos acontecimentos mais graves da guerra na Ásia.',
          },
          {
            type: 'paragraph',
            text: 'A violência atingiu diferentes partes da cidade e seus arredores, enquanto milhares de civis tentavam encontrar abrigo ou fugir da área ocupada. Prisioneiros de guerra também foram submetidos a execuções e maus-tratos, apesar das normas internacionais que estabeleciam regras para o tratamento de combatentes capturados. A ausência de uma autoridade civil capaz de controlar a situação contribuiu para o rápido agravamento do cenário.',
          },
          {
            type: 'paragraph',
            text: 'Diversos estrangeiros que permaneceram em Nanquim durante a ocupação registraram os acontecimentos e ajudaram a preservar evidências da violência. Diários, cartas, fotografias e relatos produzidos por missionários, médicos, professores e outros residentes estrangeiros posteriormente serviriam como importantes fontes para historiadores. Entre essas testemunhas estava John Rabe, um empresário alemão que participou da organização da Zona de Segurança de Nanquim e deixou registros sobre o período.',
          },
          {
            type: 'paragraph',
            text: 'O número exato de vítimas é, até hoje, um tema de intenso debate historiográfico entre China e Japão. O Tribunal Militar Internacional para o Extremo Oriente, reunido em Tóquio após a guerra, apresentou estimativas superiores a 200 mil mortos. Pesquisas acadêmicas mais recentes, considerando diferentes recortes geográficos e temporais, situam o número de vítimas fatais dentro de uma faixa que vai de dezenas de milhares a valores próximos de 300 mil, a depender da metodologia utilizada.',
          },
          {
            type: 'paragraph',
            text: 'As diferenças nas estimativas estão relacionadas principalmente à definição da área considerada, ao período analisado e aos tipos de vítimas incluídos nos cálculos. Registros militares, documentos administrativos, testemunhos e estudos demográficos apresentam informações diferentes, fazendo com que historiadores adotem metodologias distintas para calcular o número de mortos. Essas divergências numéricas, entretanto, não significam que a ocorrência da violência seja colocada em dúvida pela historiografia acadêmica.',
          },
          {
            type: 'paragraph',
            text: 'Ainda que os números precisos sigam sendo discutidos por historiadores, a escala e a gravidade da violência contra a população civil de Nanquim são amplamente documentadas e reconhecidas. O episódio tornou-se um dos principais símbolos dos crimes cometidos durante a ocupação japonesa da China e continua sendo lembrado como parte fundamental da história da Segunda Guerra Sino-Japonesa. Décadas depois, a memória do massacre permanece sensível e influencia as relações e os debates históricos entre China e Japão.',
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
          text: 'A Zona de Segurança abrigou entre 200 mil e 250 mil civis chineses, protegendo-os do pior da violência ao redor. A área foi estabelecida em uma região de Nanquim onde estrangeiros tentaram concentrar a população que buscava proteção durante a ocupação japonesa. Embora não pudesse impedir completamente os abusos, a zona ofereceu abrigo para uma enorme quantidade de pessoas em meio ao caos provocado pela queda da cidade.',
        },
        {
          type: 'paragraph',
          text: 'Rabe manteve um diário detalhado dos acontecimentos, registrando episódios de violência e as dificuldades enfrentadas pelos civis durante a ocupação. Seus registros, posteriormente publicados, tornaram-se uma das fontes utilizadas por historiadores para reconstruir os acontecimentos de Nanquim. Outros membros do Comitê também produziram relatos e documentos que ajudaram a preservar evidências sobre o período.',
        },
        {
          type: 'paragraph',
          text: 'A posição de Rabe dentro do Partido Nazista e sua nacionalidade alemã acabaram lhe dando uma influência inesperada diante das autoridades japonesas. Ele utilizou suas conexões e credenciais para tentar intervir em favor dos civis e pressionar oficiais japoneses a respeitarem os limites da Zona de Segurança. Sua atuação tornou-se um dos exemplos mais conhecidos de estrangeiros que permaneceram em Nanquim e tentaram proteger a população durante a ocupação.',
        },
        {
          type: 'paragraph',
          text: 'Ao retornar à Alemanha, Rabe tentou alertar as autoridades nazistas sobre os crimes que havia testemunhado. No entanto, suas tentativas de divulgar os acontecimentos encontraram forte resistência. Ele foi interrogado pela Gestapo e impedido de divulgar publicamente o conteúdo de seus registros, fazendo com que parte de seu testemunho permanecesse restrita durante anos.',
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
            text: 'Os julgamentos realizados após a guerra fizeram parte de um esforço mais amplo dos Aliados para responsabilizar autoridades militares e políticas pelos crimes cometidos durante o conflito. No caso de Nanquim, a responsabilização de oficiais japoneses tornou-se uma questão importante para estabelecer juridicamente a responsabilidade pelos acontecimentos e preservar registros sobre os crimes cometidos durante a ocupação.',
          },
          {
            type: 'paragraph',
            text: 'O Massacre de Nanquim segue sendo um dos temas mais sensíveis das relações entre China e Japão até os dias atuais. Enquanto a maioria dos historiadores, incluindo pesquisadores japoneses respeitados, reconhece a validade histórica do massacre, o tema ainda é alvo de revisionismo por parte de setores nacionalistas japoneses, o que mantém viva a disputa sobre sua memória.',
          },
          {
            type: 'paragraph',
            text: 'A forma como o massacre é apresentado nos livros escolares, nos discursos políticos e nas cerimônias de memória continua sendo motivo de controvérsia entre os dois países. Para a China, Nanquim ocupa um lugar central na memória da resistência à invasão japonesa e dos sofrimentos provocados pela guerra. No Japão, por outro lado, existem diferentes interpretações sobre a dimensão dos acontecimentos, embora a historiografia acadêmica reconheça amplamente que graves crimes foram cometidos durante a ocupação.',
          },
          {
            type: 'paragraph',
            text: 'Hoje, o Memorial das Vítimas do Massacre de Nanquim, na China, preserva testemunhos de sobreviventes e documentação histórica do período. O local funciona como espaço de memória e pesquisa, reunindo documentos, fotografias e relatos relacionados aos acontecimentos de 1937. Décadas após o fim da guerra, a preservação dessas evidências continua desempenhando um papel importante na compreensão histórica do massacre e na memória das vítimas.',
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
