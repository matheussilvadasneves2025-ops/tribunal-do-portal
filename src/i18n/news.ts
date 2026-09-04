import type { NewsArticle, Author } from '@/types/news'

const AUTHORS_EN: Record<string, Author> = {
  Daniel: {
    id: 'daniel-pereira',
    name: 'Daniel Pereira',
    role: 'International Correspondent',
    avatarInitials: 'DP',
  },

  Luis: {
    id: 'luis-felipe',
    name: 'Luís Felipe',
    role: 'Justice & International Law Editor',
    avatarInitials: 'LF',
  },

  Ruben: {
    id: 'ruben-dourado',
    name: 'Ruben Dourado',
    role: 'Special Correspondent in Nuremberg',
    avatarInitials: 'RD',
  },

  Jarvis: {
    id: 'jarvis-martins',
    name: 'Jarvis Martins',
    role: 'International Relations Analyst',
    avatarInitials: 'JM',
  },
}

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

export const FEATURED_ARTICLES_EN: NewsArticle[] = [
  // ============================================================
  // EUA & JAPÃO
  // ============================================================
  {
    id: 'ww2-1',
    slug: 'eua-e-japao-a-ciencia-e-as-bombas-atomicas',
    category: 'julgamento',
    headline:
      'USA & Japan: how science decided the end of the war in the Pacific',
    subheadline:
      'From the secrecy of the Manhattan Project to the bombings of Hiroshima and Nagasaki, the scientific race that opened the nuclear age and ended World War II.',
    coverImage: WW2_IMG.nagasakiCloud,
    coverImageAlt:
      'Mushroom cloud over Nagasaki after the atomic bombing',
    coverImageCredit: {
      photographer: 'Charles Levy (U.S. Air Force lieutenant)',
      date: 'August 9, 1945',
      location:
        'Nagasaki, Japan, photographed aboard the B-29 "The Great Artiste"',
    },
    author: AUTHORS_EN.Daniel,
    publishedAt: '2026-01-15',
    readingTimeMinutes: 9,
    isFeatured: true,
    tags: ['Manhattan Project', 'Atomic Bombs', 'War in the Pacific'],

    topics: [
      {
        id: 'projeto-manhattan',
        label: 'The Manhattan Project',
        image: WW2_IMG.triniteTest,
        imageAlt:
          'Explosion of the first nuclear test in history, the Trinity test',
        imageCredit: {
          photographer:
            'Berlyn Brixner (official photographer of the Los Alamos Laboratory)',
          date: 'July 16, 1945',
          location: 'Jornada del Muerto desert, New Mexico, USA',
        },
        blocks: [
          {
            type: 'paragraph',
            text: 'In 1939, the scientific world began to realize that the newly discovered nuclear fission could have consequences far greater than mere advances in atomic research. Scientists such as Albert Einstein and Leó Szilárd warned the United States government about the possibility that Nazi Germany was investigating the use of uranium fission to create a weapon of enormous destructive power. Concern grew due to the strategic importance of uranium and the fact that Germany had a highly developed scientific community before and during the early years of World War II.',
          },
          {
            type: 'paragraph',
            text: "That August, Einstein signed a letter, drafted with Szilárd's help, which was sent to President Franklin D. Roosevelt. The document drew attention to the possibility of a new class of weapons and the need for the United States to closely monitor German research. The letter contributed to the American government treating nuclear research as a matter of national security. Initially, the efforts were still small and focused on scientific studies, but the entry of the United States into World War II, in December 1941, drastically accelerated the program's development.",
          },
          {
            type: 'paragraph',
            text: "In 1942, the American government reorganized its research efforts and created a military structure to coordinate the development of the new weapon. The program was named the Manhattan Project and came to bring together some of the greatest scientific minds of the time, along with engineers, technicians, workers, and military personnel. The project was extremely secret, and most workers knew only a small part of its purpose. Scientific leadership was given to physicist J. Robert Oppenheimer, while General Leslie Groves was responsible for military direction and the enormous logistical operation needed to keep the program running.",
          },
          {
            type: 'paragraph',
            text: 'The Manhattan Project was not a single facility, but a network of centers spread across the United States. In Los Alamos, New Mexico, scientists worked directly on developing and assembling the weapons. In Oak Ridge, Tennessee, huge facilities were built mainly for uranium enrichment, a process needed to obtain suitable material for certain nuclear weapons. In Hanford, Washington State, large quantities of plutonium were produced through nuclear reactors specially built for the project.',
          },
          {
            type: 'paragraph',
            text: 'The scale of the operation was extraordinary. Thousands of people took part directly or indirectly in the program, from physicists and chemists to engineers, industrial workers, military personnel, and administrative staff. Many of them did not even know exactly what they were helping to build. Security was treated as an absolute priority, with compartmentalized information and strict control over documents and communications. At the same time, the government invested enormous amounts of resources building cities and facilities almost from scratch, transforming previously sparsely populated locations into major industrial and scientific centers.',
          },
          {
            type: 'paragraph',
            text: 'Among the researchers involved were important names in 20th-century physics, such as Enrico Fermi, Niels Bohr, Hans Bethe, Richard Feynman, and Edward Teller. Collaboration between scientists from different countries was also essential. Many European researchers had fled their countries because of the rise of Nazism and ended up contributing to the Allied effort. The project thus became an exceptional concentration of scientific and technological knowledge, combining theoretical research on the atomic nucleus with engineering challenges on a scale never seen before.',
          },
          {
            type: 'paragraph',
            text: 'As the project moved forward, the war situation was also changing rapidly. In May 1945, Nazi Germany surrendered, ending the war in Europe. The threat of a possible German bomb had disappeared, but the Manhattan Project continued. Researchers then focused their efforts on completing the weapons and carrying out a test that would prove whether all that theory and engineering would actually work.',
          },
          {
            type: 'paragraph',
            text: 'In the early hours of July 16, 1945, the desert near Alamogordo, New Mexico, was the site of the Trinity Test, the first detonation of a nuclear weapon in history. The explosion produced an amount of energy far greater than any conventional weapon that existed until then and demonstrated that the scientific principles used by the project were correct. The success of the test represented a decisive moment in human history: for the first time, human beings had managed to release, in a controlled way, a colossal amount of energy from nuclear processes.',
          },
          {
            type: 'paragraph',
            text: 'The Trinity result also had consequences that went beyond the scientific field. The existence of nuclear weapons would profoundly alter military strategy, relations between the great powers, and the international political balance. A few weeks after the test, the United States would use nuclear weapons against the Japanese cities of Hiroshima and Nagasaki, in August 1945, events that contributed to the end of World War II and ushered in a new era marked by the permanent presence of nuclear weapons in world politics.',
          },
          {
            type: 'paragraph',
            text: 'The Manhattan Project, therefore, was not just a scientific program developed during World War II. It represented an unprecedented mobilization of science, industry, financial resources, and military power. Its legacy was ambiguous: while it demonstrated the ability of science to achieve extraordinary advances in an extremely short period, it also revealed the destructive potential associated with nuclear knowledge. From 1945 onward, humanity entered the so-called nuclear age, and the decisions made during those years would continue to influence international politics, science, and world security for decades.',
          },
          {
            type: 'highlight',
            text: "The success of the Trinity Test came just days before the Potsdam Conference, where President Harry Truman discreetly informed Soviet leader Joseph Stalin about the United States' new weapon.",
          },
        ],
      },

      {
        id: 'hiroshima-nagasaki',
        label: 'Hiroshima and Nagasaki',
        image: WW2_IMG.nagasakiCloud,
        imageAlt: 'Mushroom cloud over Nagasaki',
        imageCredit: {
          photographer: 'Charles Levy',
          date: 'August 9, 1945',
          location: 'Nagasaki, Japan',
        },
        blocks: [
          {
            type: 'heading',
            text: 'Two bombings in three days',
          },
          {
            type: 'paragraph',
            text: 'On August 6, 1945, the B-29 bomber "Enola Gay," commanded by Colonel Paul Tibbets, dropped the uranium bomb known as "Little Boy" on Hiroshima. The explosion destroyed a large part of the city and caused tens of thousands of immediate deaths. Hiroshima had been chosen as a target due to its military and industrial importance, its population density, and the fact that it had suffered relatively few conventional bombings until then. The American government also intended to clearly demonstrate the destructive power of the new weapon. In the following months and years, the death toll continued to rise due to injuries, burns, illnesses, and the effects of radiation exposure, pushing the total number of deaths associated with the attack past 100,000.',
          },
          {
            type: 'quote',
            text: 'The force from which the sun draws its power has been loosed against those who brought war to the Far East.',
            attribution:
              '(Harry S. Truman, in an official statement on the bombing of Hiroshima)',
          },
          {
            type: 'paragraph',
            text: 'The attack shocked Japan and the rest of the world, but it did not immediately lead to Japanese surrender. At the time, the Japanese government was still divided over how to end the war, while its military forces continued preparing for a possible invasion of the home islands. The United States, for its part, had just demonstrated that it possessed a weapon completely different from any other used before. President Harry S. Truman authorized further attacks should Japan not accept the surrender terms set by the Allies.',
          },
          {
            type: 'paragraph',
            text: 'Three days later, on August 9, another B-29 bomber, the "Bockscar," took off carrying the plutonium bomb "Fat Man." The mission\'s initial target was the city of Kokura, home to important industrial and military facilities. However, weather conditions and cloud cover made it difficult to identify the target. The aircraft then headed to its secondary target, Nagasaki. The bomb was dropped and detonated over the city, again causing enormous destruction and tens of thousands of deaths. As in Hiroshima, thousands more people would later die from injuries and radiation exposure.',
          },
          {
            type: 'paragraph',
            text: "The two attacks took place at a particularly decisive moment in the war. In addition to the atomic bombings, the Soviet Union declared war on Japan on August 8 and began military operations against Japanese forces in Manchuria the following day. The Soviet entry significantly altered Japan's strategic situation, as Japan had until then still hoped, among other possibilities, to use the Soviet Union as an intermediary to negotiate better surrender terms. With the defeat of Japanese forces in the region and the destruction caused by the atomic bombs, Japan's leadership faced an increasingly untenable situation.",
          },
          {
            type: 'paragraph',
            text: 'The decision to use the bombs remains one of the most debated topics in the historiography of the war. For the US, the official argument was that the attacks would prevent a land invasion of Japan, which could cost hundreds of thousands of additional lives, both American and Japanese. Operation Downfall, the Allied plan for a possible invasion of the Japanese archipelago, envisioned an extremely difficult and potentially very bloody campaign. Supporters of the decision argue that using the bombs sped up the surrender and avoided an invasion that could have prolonged the war for months.',
          },
          {
            type: 'paragraph',
            text: "On the other hand, historians remain divided on whether the attacks were necessary. Some argue that Japan was already close to surrendering and that the Soviet Union's entry into the war played a role just as important, or even more decisive, in Japan's decision than the bombings. Others believe that the combination of the destruction of Hiroshima and Nagasaki, the threat of new nuclear attacks, and the Soviet offensive was crucial in convincing Japan's leadership that continuing to fight was untenable. The debate also involves military, diplomatic, and ethical questions, including the possibility of demonstrating the new weapon in some other way before using it directly against cities.",
          },
          {
            type: 'paragraph',
            text: "On August 15, 1945, Emperor Hirohito announced over the radio Japan's decision to accept the Allied surrender terms. The formal surrender was signed on September 2, 1945, aboard the battleship USS Missouri, officially ending World War II. The bombings of Hiroshima and Nagasaki, however, left a legacy that went beyond the end of the conflict. Besides the enormous human losses, the attacks concretely ushered in the age of nuclear weapons and sparked debates about their effects, their use in wars, and the risks of a future arms race between major powers.",
          },
        ],
      },

      {
        id: 'fim-guerra-pacifico',
        label: 'The End of the War in the Pacific',
        image: WW2_IMG.hirohitoRadio,
        imageAlt:
          'Radio broadcast of Emperor Hirohito announcing the surrender',
        imageCredit: {
          photographer: 'Unidentified author, Domei News Agency',
          date: 'August 15, 1945',
          location: 'Tokyo, Japan',
        },
        blocks: [
          {
            type: 'paragraph',
            text: "On August 15, 1945, Emperor Hirohito announced, for the first time, in a radio broadcast to the entire population, Japan's decision to accept the surrender terms imposed by the Allies. The announcement was a historic event not only because it marked the end of the war for Japan, but also because it was the first time most Japanese citizens heard the emperor's voice directly. The broadcast had been carefully prepared, and the language used by Hirohito was formal and indirect, following the imperial tradition of the time. For many Japanese, immediately understanding that those words meant the country's defeat was not easy.",
          },
          {
            type: 'paragraph',
            text: 'The news brought about an enormous change in Japanese daily life. After years of war, military propaganda, food shortages, and air raids, the population finally received confirmation that the conflict had ended. At the same time, the country found itself deeply devastated. Major cities had been destroyed by conventional and nuclear bombings, millions of people were displaced, and the economic and industrial infrastructure had suffered significant damage. The surrender also marked the beginning of a period of occupation and reconstruction under Allied supervision.',
          },
          {
            type: 'paragraph',
            text: 'Despite the August 15 announcement, the surrender still needed to be formalized officially. This took place on September 2, 1945, aboard the battleship USS Missouri, anchored in Tokyo Bay. Representatives of the Japanese government and armed forces signed the surrender document before representatives of the Allied powers. For Japan, the signing was carried out by Foreign Minister Mamoru Shigemitsu and General Yoshijiro Umezu. On the Allied side, the ceremony was led by General Douglas MacArthur, representing the victorious powers.',
          },
          {
            type: 'paragraph',
            text: 'The ceremony was relatively short but carried enormous historical significance. The USS Missouri had been chosen as the signing site for its symbolic and military importance. At that moment, Japan officially went from a warring power to a defeated, occupied country. The signing formally ended World War II in the Pacific theater, although different forces and governments involved in the conflict had begun surrender processes at different times.',
          },
          {
            type: 'paragraph',
            text: "The end of the war also brought profound political changes to Japan. During the Allied occupation, led mainly by the United States, political, economic, and social reforms were implemented. Japanese military power was dismantled, new institutions were established, and the country underwent changes that contributed to its transformation into a state with a very different political structure from the one that existed during the conflict. Reconstruction would be a long and complex process, marked both by the consequences of the war and by the changes brought about by the occupation.",
          },
          {
            type: 'paragraph',
            text: 'Hiroshima and Nagasaki remain, to this day, the only uses of nuclear weapons in an armed conflict. The attacks showed the world that humanity had achieved a completely new capacity for destruction. Unlike conventional weapons, atomic bombs combined an enormous amount of energy released in an extremely short period with effects that continued to affect survivors long afterward. The impact of these events went beyond the military field and came to influence science, international politics, and debates about the very existence of nuclear weapons.',
          },
          {
            type: 'paragraph',
            text: 'The episode ushered in the so-called Atomic Age and profoundly transformed the relationship between science, technology, and military power. A few years earlier, nuclear fission was mainly a subject of scientific research; after 1945, mastery of that technology became a central matter of national security. The United States had shown it possessed nuclear weapons, but the American monopoly would not last forever. In 1949, the Soviet Union carried out its first nuclear test, ending American exclusivity over that type of weapon.',
          },
          {
            type: 'paragraph',
            text: 'From then on, an intense arms race began between the two superpowers. The United States and the Soviet Union began developing ever-larger arsenals and increasingly sophisticated weapons, while other countries would later also develop nuclear capability. The possibility of a war between major powers came to carry the risk of unprecedented destruction. Thus, the end of World War II did not represent only the end of one of the greatest conflicts in history: it also marked the beginning of a new international order, in which the nuclear threat would remain one of the main elements of world politics throughout the Cold War and would continue to influence international relations into the 21st century.',
          },
        ],
      },
    ],
  },

  // ============================================================
  // HITLER & MUSSOLINI
  // ============================================================
  {
    id: 'ww2-2',
    slug: 'hitler-e-mussolini-as-biografias-por-tras-do-eixo',
    category: 'julgamento',
    headline: 'Hitler & Mussolini: the biographies behind the Axis',
    subheadline:
      'How an Austrian corporal and an Italian socialist journalist became the two faces most associated with 20th-century European fascism.',
    coverImage: WW2_IMG.hitlerMussolini,
    coverImageAlt:
      'Adolf Hitler and Benito Mussolini side by side at an official meeting',
    coverImageCredit: {
      photographer: 'Bundesarchiv (German federal archive)',
      date: 'June 1940',
      location: 'Munich, Germany',
    },
    author: AUTHORS_EN.Ruben,
    publishedAt: '2026-01-22',
    readingTimeMinutes: 8,
    isFeatured: true,
    tags: ['Biographies', 'Nazism', 'Fascism'],

    topics: [
      {
        id: 'hitler-ascensao',
        label: 'Adolf Hitler: from Austria to the Chancellery',
        image: WW2_IMG.hitlerPortrait,
        imageAlt: 'Adolf Hitler speaking at a Nazi Party rally',
        imageCredit: {
          photographer:
            'Heinrich Hoffmann (official photographer of the Nazi Party)',
          date: '1935',
          location: 'Nuremberg, Germany',
        },
        blocks: [
          {
            type: 'paragraph',
            text: 'Adolf Hitler was born on April 20, 1889, in the town of Braunau am Inn, then part of the Austro-Hungarian Empire. As a young man, he moved to Vienna, where he tried to pursue an artistic career but failed to gain admission to the Academy of Fine Arts. His years in Vienna were marked by financial hardship and exposure to nationalist, antisemitic, and pan-Germanic ideas circulating in certain sectors of European society at the time. In 1913, Hitler moved to Munich, Germany, and shortly afterward joined the German Army during World War I.',
          },
          {
            type: 'paragraph',
            text: "The war played a fundamental role in Hitler's political formation. He served as a messenger and received decorations for his service, remaining in the Army until the end of the conflict. Germany's defeat in 1918 and the conditions imposed by the Treaty of Versailles fueled his extreme nationalism and his belief that Germany had been humiliated and betrayed. During the political instability that followed, Hitler became increasingly involved with far-right political groups.",
          },
          {
            type: 'paragraph',
            text: "In 1919, he joined the German Workers' Party, which would later become the National Socialist German Workers' Party, the Nazi Party. Hitler quickly stood out as a speaker and propagandist, using speeches that exploited the discontent caused by the economic crisis, unemployment, and the political instability of the Weimar Republic. The party advocated radical nationalism, antisemitism, anticommunism, and the rejection of parliamentary democracy.",
          },
          {
            type: 'paragraph',
            text: 'In 1923, Hitler attempted to seize power through the so-called Beer Hall Putsch, in Munich. The attempt failed, and he was arrested and convicted. During his time in prison, he wrote "Mein Kampf," a work in which he laid out part of his political and racial ideas. After his release, he temporarily abandoned the strategy of an immediate seizure of power and began pursuing a rise through political and electoral means, while reorganizing the Nazi Party and expanding its propaganda apparatus.',
          },
          {
            type: 'paragraph',
            text: 'The Great Depression of 1929 created new conditions for the growth of Nazism. Unemployment and the economic crisis increased dissatisfaction with the government, while the Nazi Party gained ever more electoral support. On January 30, 1933, Hitler was appointed Chancellor of Germany by President Paul von Hindenburg. From then on, he used the very structure of the State to eliminate opponents, restrict political freedoms, and rapidly turn Germany into a dictatorship. Within a few months, the Nazi regime had consolidated its control over German institutions, giving rise to one of the most violent dictatorships of the 20th century.',
          },
        ],
      },

      {
        id: 'mussolini-fascismo',
        label: 'Benito Mussolini: Fascism before Nazism',
        image: WW2_IMG.mussoliniBalcao,
        imageAlt: 'Benito Mussolini speaking from a balcony in Rome',
        imageCredit: {
          photographer:
            'Istituto Luce (Italian state photography and film agency)',
          date: '1930s',
          location: 'Piazza Venezia, Rome, Italy',
        },
        blocks: [
          {
            type: 'paragraph',
            text: 'Benito Mussolini was born on July 29, 1883, in Predappio, Italy. The son of a schoolteacher and a blacksmith with strong political convictions, Mussolini came into contact with socialist ideas from an early age and began working as a journalist and political activist. During the early years of his career, he became a well-known figure within the Italian socialist movement and even held an important position at the official newspaper of the Italian Socialist Party.',
          },
          {
            type: 'paragraph',
            text: "World War I caused a break in his trajectory. Mussolini initially held the socialist position against Italy's entry into the conflict, but later came to support Italian participation in the war. Because of this shift, he broke with the Socialist Party and began developing a political outlook based on nationalism, militarism, and the idea that Italy should hold a more prominent position in Europe. After serving in the Italian Army, he returned to political activity in a country deeply shaken by the war's economic and social consequences.",
          },
          {
            type: 'paragraph',
            text: 'In 1919, Mussolini founded the Fasci Italiani di Combattimento, a movement that would later give rise to the National Fascist Party. The fascists exploited fear of the advance of socialism and communism, as well as the discontent of segments of Italian society with the economic situation and with the outcomes the country had obtained after World War I. Fascist groups known as "blackshirts" began using violence and intimidation against political opponents, unions, and left-wing organizations.',
          },
          {
            type: 'paragraph',
            text: "In October 1922, Mussolini came to power after the March on Rome. Although the event involved a show of fascist force, his rise took place within the existing institutional framework: King Victor Emmanuel III invited Mussolini to form a government. In the following years, Mussolini progressively dismantled Italy's democratic institutions, restricted press freedom, persecuted opponents, and concentrated power around his government. The fascist regime became one of the first mass dictatorships in interwar Europe.",
          },
          {
            type: 'paragraph',
            text: 'Italian fascism also began to influence authoritarian movements in other countries. Mussolini sought to turn Italy into a major power and advocated territorial expansion, using military force to broaden Italian influence. In 1935, Italy invaded Ethiopia, drawing international condemnation. Despite some ideological differences between Italian fascism and German Nazism, the two regimes found common interests throughout the 1930s. This growing closeness would eventually lead to an alliance that would play a central role in World War II.',
          },
        ],
      },

      {
        id: 'alianca-declinio',
        label: 'An Alliance of Convenience',
        image: WW2_IMG.hitlerMussolini,
        imageAlt: 'Hitler and Mussolini at an official meeting',
        imageCredit: {
          photographer: 'Bundesarchiv',
          date: 'June 1940',
          location: 'Munich, Germany',
        },
        blocks: [
          {
            type: 'heading',
            text: 'The Pact of Steel and the end of the two dictators',
          },
          {
            type: 'paragraph',
            text: 'Despite their political differences and the particularities of their regimes, Adolf Hitler and Benito Mussolini found common interests during the 1930s. Mussolini had come to power more than a decade before Hitler and initially viewed the German leader with some distrust. Italian fascism had characteristics of its own, while Nazism placed racial ideology and antisemitism at its very center. Even so, the growth of German power and their shared opposition to communism brought the two governments closer together.',
          },
          {
            type: 'paragraph',
            text: 'The Spanish Civil War was one of the key moments in this rapprochement. Starting in 1936, Germany and Italy supported the nationalist forces led by Francisco Franco against the Spanish Republic. Both countries provided weapons, equipment, troops, and military support, also using the conflict as an opportunity to test strategies and demonstrate their international strength. Collaboration in Spain strengthened the ties between Berlin and Rome and showed that the two regimes were willing to act jointly against left-wing movements.',
          },
          {
            type: 'paragraph',
            text: 'In October 1936, Mussolini declared the existence of a political axis between Rome and Berlin, an expression that would later become known as the "Rome-Berlin Axis." The relationship continued to grow in the following years, and in 1939, Germany and Italy signed the so-called Pact of Steel, establishing a more formal military alliance. Shortly afterward, Germany launched the invasion of Poland in September 1939, triggering World War II in Europe.',
          },
          {
            type: 'paragraph',
            text: "The relationship between Hitler and Mussolini, however, was not based solely on personal friendship or a completely identical political vision. It was also a strategic partnership, in which each government sought to expand its own power and influence. Germany had growing military and industrial capacity, while Mussolini intended to turn Italy into a dominant power in the Mediterranean. The two countries' interests often overlapped, but there were also differences in objectives and military capability.",
          },
          {
            type: 'paragraph',
            text: "As the war progressed, Italian dependence on Germany grew ever greater. Defeats suffered by Italian forces on different fronts weakened Mussolini's regime, while Hitler exerted increasing influence over the Axis's military decisions. In 1943, after the Allied landing in Sicily, Mussolini was deposed and arrested by order of the king. He was later freed in a German operation and placed at the head of a fascist government in northern Italy, under heavy German dependence. The alliance between the two regimes would end along with the collapse of the Axis powers in 1945.",
          },
          {
            type: 'highlight',
            text: "Unlike Hitler and Mussolini, who died before the war ended, it was the remaining leaders of the Nazi regime who would face the defendants' bench in Nuremberg, the backdrop of this reenactment.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // URSS
  // ============================================================
  {
    id: 'ww2-3',
    slug: 'urss-o-exercito-vermelho-e-a-frente-oriental',
    category: 'analise',
    headline:
      'USSR: the Red Army and the Eastern Front that decided the war',
    subheadline:
      'From the German invasion in 1941 to the Soviet flag raised over Berlin, the Eastern Front was the bloodiest stage of World War II.',
    coverImage: WW2_IMG.reichstagFlag,
    coverImageAlt:
      'Soviet soldiers raising the flag over the Reichstag in Berlin',
    coverImageCredit: {
      photographer: 'Yevgeny Khaldei',
      date: 'May 2, 1945',
      location: 'Berlin, Germany',
    },
    author: AUTHORS_EN.Luis,
    publishedAt: '2026-01-29',
    readingTimeMinutes: 9,
    isFeatured: true,
    tags: ['USSR', 'Red Army', 'Eastern Front'],

    topics: [
      {
        id: 'operacao-barbarossa',
        label: 'Operation Barbarossa',
        image: WW2_IMG.barbarossa,
        imageAlt:
          'German troops advancing through Soviet territory in 1941',
        imageCredit: {
          photographer: 'Bundesarchiv',
          date: 'June 1941',
          location: 'Eastern Front, Soviet Union',
        },
        blocks: [
          {
            type: 'paragraph',
            text: 'On June 22, 1941, Nazi Germany broke the non-aggression pact signed with the Soviet Union and launched Operation Barbarossa, starting the largest military invasion in history up to that point. About three million German and Axis soldiers took part in the offensive, spread along a front that stretched for thousands of kilometers. The attack caught much of the Soviet forces by surprise and set in motion one of the most violent and decisive military campaigns of World War II.',
          },
          {
            type: 'paragraph',
            text: 'The German plan called for a swift campaign, based on the concentration of armored forces, air power, and the coordinated advance of large military units. The invading forces were divided into three large army groups, directed mainly toward Leningrad, Moscow, and Ukraine. German strategy sought to quickly destroy the Red Army in large encirclements and conquer vast areas of Soviet territory before resistance could be reorganized.',
          },
          {
            type: 'paragraph',
            text: 'In the first weeks, the German advance was devastating. Thousands of Soviet soldiers were captured, while huge stretches of territory were occupied by the invading troops. Several Red Army units were encircled and destroyed in massive encirclement battles, and important cities and agricultural regions fell under German control. The Soviet air force also suffered extremely heavy losses in the first days of the conflict, while the initial disorganization made coordinating the defense difficult.',
          },
          {
            type: 'paragraph',
            text: 'However, the Soviet Union had an enormous mobilization capacity. As German forces advanced, entire factories were dismantled and moved to regions farther from the front line, especially to territories east of the Ural Mountains. Millions of new soldiers were mobilized, while Soviet industry progressively began producing enormous quantities of tanks, aircraft, artillery, and ammunition. Resistance, therefore, began to grow more organized as the war went on.',
          },
          {
            type: 'paragraph',
            text: 'The campaign was also marked by extreme violence against both soldiers and civilians. The German invasion was not merely a conventional military operation, but was tied to the ideological and territorial goals of the Nazi regime. Populations considered enemies by the regime were subjected to executions, deportations, planned starvation, and other forms of persecution. Jewish communities were also targeted in mass killings carried out by special German units and local collaborators, making the Eastern Front one of the main stages of the genocide promoted by the Nazi regime.',
          },
          {
            type: 'paragraph',
            text: "The German advance began to run into increasing difficulties as supply lines stretched thinner. The enormous distances of Soviet territory made it difficult to transport fuel, ammunition, food, and equipment to the troops at the front. In addition, Soviet resistance grew more intense, while factors such as weather and road conditions further complicated operations. Germany's expectation of a quick victory did not materialize, and the war began taking on the characteristics of a prolonged conflict.",
          },
          {
            type: 'paragraph',
            text: 'By the end of 1941, German forces had reached the outskirts of Moscow, but met with much stronger Soviet resistance than expected. The German offensive lost momentum, and the Soviet Union managed to launch a counterattack that pushed the invading troops away from the capital. The failure to achieve a decisive victory before winter was an important sign that Germany would not be able to defeat the Soviet Union quickly. The war on the Eastern Front would then enter a new phase, increasingly grinding for both sides.',
          },
          {
            type: 'paragraph',
            text: 'Over the following four years, the Eastern Front would become the largest and bloodiest theater of operations in World War II. Battles such as Stalingrad, Kursk, and the final campaign to Berlin would transform the conflict and cause human losses on a gigantic scale. The overwhelming majority of German military losses occurred in the fight against the Soviet Union, while Soviet forces also suffered extraordinary casualties. From the resistance to the German advance in 1941, through the great Soviet counteroffensives, the Red Army would gradually seize the initiative and advance toward Germany.',
          },
          {
            type: 'paragraph',
            text: 'The German defeat on the Eastern Front was crucial to the outcome of World War II in Europe. Throughout the campaign, Germany lost an enormous share of its soldiers, equipment, and military capacity, while the Soviet Union managed to rebuild its forces and turn its industry into a gigantic war machine. When the Red Army reached Berlin in 1945, the war in Europe was coming to an end. The Eastern Front had ceased to be merely a German attempt to conquer Soviet territory and had become the main battlefield in the destruction of Nazi military power in Europe.',
          },
        ],
      },

      {
        id: 'stalingrado',
        label: 'Stalingrad, the Turning Point',
        image: WW2_IMG.stalingrado,
        imageAlt: 'Ruins of the city of Stalingrad during the battle',
        imageCredit: {
          photographer: 'Georgy Zelma',
          date: 'January 1943',
          location: 'Stalingrad, USSR (present-day Volgograd, Russia)',
        },
        blocks: [
          {
            type: 'heading',
            text: 'The battle that changed the course of the war',
          },
          {
            type: 'paragraph',
            text: "In 1942, after the failure of the German attempt to conquer Moscow the previous year, Adolf Hitler turned his attention to the south of the Soviet Union. The new German offensive had, among its main goals, reaching the oil fields of the Caucasus, essential to fueling the German war machine. At the same time, control of the Volga River would allow the Germans to cut off one of the main Soviet transport routes. Stalingrad, located on the river's banks, thus gained a strategic importance that went beyond its immediate military value.",
          },
          {
            type: 'paragraph',
            text: "German forces advanced during the summer of 1942 and reached the outskirts of Stalingrad. The city had become an important Soviet industrial center and also carried strong symbolic weight for bearing Joseph Stalin's name. German leadership believed that capturing the city would represent a great political and military victory, while the Soviets considered its defense essential to prevent Axis forces from consolidating their position in the south of the country.",
          },
          {
            type: 'paragraph',
            text: 'Facing the retreat of Soviet troops in 1942, Stalin issued Order No. 227, which prohibited withdrawal without express authorization. The order reflected the severity of the situation faced by the Red Army, which had lost enormous amounts of territory and suffered gigantic casualties since the start of the German invasion.',
          },
          {
            type: 'quote',
            text: 'Not one step back!',
            attribution: '(Joseph Stalin, Order No. 227)',
          },
          {
            type: 'paragraph',
            text: 'The battle for the city quickly turned into a war of attrition. German forces managed to occupy large parts of Stalingrad, but met Soviet resistance in practically every sector. Fighting took place among destroyed buildings, factories, streets, and improvised positions, often at very close range. The destruction of the urban infrastructure ended up creating obstacles for both attackers and defenders, turning the ruins of the city into defensive positions.',
          },
          {
            type: 'paragraph',
            text: 'While the urban fighting continued, the Soviet high command prepared an operation to attack the flanks of the German forces. Much of those areas was defended by Romanian, Hungarian, and Italian troops, allies of Germany, whose equipment and anti-tank capability were inferior to those of the main German formations. In November 1942, the Soviets launched Operation Uranus, a large offensive that struck Axis positions north and south of Stalingrad.',
          },
          {
            type: 'paragraph',
            text: 'The Soviet advance managed to break through the defensive lines and encircle the German forces inside and around the city. About 250,000 Axis soldiers were trapped in what became known as the Stalingrad pocket. Hitler refused to authorize a withdrawal and ordered the 6th Army to hold its position, hoping it could be supplied by air and later break out of the encirclement. In practice, the amount of supplies transported by German aircraft was insufficient to keep the encircled troops in adequate fighting condition.',
          },
          {
            type: 'paragraph',
            text: 'For weeks, the German soldiers remained isolated as Soviet forces tightened the encirclement. The lack of food, fuel, ammunition, and medicine progressively worsened the situation. At the same time, German attempts to break the encirclement from outside failed. The harsh winter and the exhaustion of the troops further increased the difficulties faced by the 6th Army.',
          },
          {
            type: 'paragraph',
            text: 'The Battle of Stalingrad, fought between August 1942 and February 1943, became one of the most brutal battles ever recorded. The city was practically destroyed by the fighting, and hundreds of thousands of soldiers and civilians died during the battle and its aftermath. The scale of the losses made Stalingrad one of the most well-known symbols of the brutality of the war on the Eastern Front.',
          },
          {
            type: 'paragraph',
            text: 'On February 2, 1943, the last major German forces inside Stalingrad surrendered. The capitulation of the 6th Army represented a military and symbolic defeat of enormous proportions for Nazi Germany. For the first time during the war, a major German formation had been completely encircled and destroyed after a long siege operation. Although Germany would still be able to fight for more than two years, its ability to maintain the strategic initiative on the Eastern Front had been deeply damaged.',
          },
          {
            type: 'paragraph',
            text: 'The Battle of Stalingrad is widely considered one of the main turning points of World War II on the Eastern Front. After it, the Red Army progressively moved from defense to major offensive operations, recovering occupied territories and advancing ever further to the west. The German defeat at Stalingrad showed that the Soviet Union had not only survived the invasion but also had the industrial, military, and human capacity to reverse the Nazi advance and carry the war onto German territory.',
          },
        ],
      },

      {
        id: 'marcha-berlim',
        label: 'The March to Berlin',
        image: WW2_IMG.reichstagFlag,
        imageAlt: 'Soviet flag raised over the Reichstag building',
        imageCredit: {
          photographer: 'Yevgeny Khaldei',
          date: 'May 2, 1945',
          location: 'Berlin, Germany',
        },
        blocks: [
          {
            type: 'paragraph',
            text: 'After winning the Battle of Kursk in 1943, considered the largest tank battle in history, the Red Army launched a series of major offensives that would permanently shift the balance of the war in Eastern Europe. The German defeat at Kursk prevented the Wehrmacht from regaining the strategic initiative on the Eastern Front and allowed Soviet forces to progressively move from defense to large-scale operations. From that point on, the German advance that began in 1941 would gradually be replaced by a long retreat toward German territory itself.',
          },
          {
            type: 'paragraph',
            text: 'In the following months, Soviet forces recaptured large areas previously occupied by the Germans. Important cities were recovered, while the Red Army advanced toward the borders of Eastern European countries. The pace of this advance varied according to German resistance and terrain conditions, but the general trend was clear: Germany was losing territory and resources while the Soviet Union increased its offensive capacity.',
          },
          {
            type: 'paragraph',
            text: "In 1944, the German situation became even more difficult. Operation Bagration, launched that June, destroyed a large part of Army Group Center and caused one of the greatest military defeats Germany suffered during the entire war. The Red Army advanced quickly through Belarus and reached the outskirts of Poland. At the same time, Soviet forces continued pressuring German positions in other regions of the Eastern Front, further reducing the space available for an organized retreat.",
          },
          {
            type: 'paragraph',
            text: 'The Soviet offensive also carried the war into territories previously occupied by the Axis. Romania, Bulgaria, Hungary, and other countries in the region came to face the advance of the Red Army directly. Romania, for example, abandoned its alliance with Germany in 1944 and switched sides, while Soviet forces continued advancing through southeastern Europe. Germany found itself increasingly isolated, fighting simultaneously against the Western Allies and the gigantic Soviet offensive in the east.',
          },
          {
            type: 'paragraph',
            text: 'By early 1945, the Red Army was already inside German territory. The Soviet offensive had pushed its troops to the Oder River, just a few dozen kilometers from Berlin. The German capital was surrounded by a network of defensive positions, but Germany no longer had the resources needed to stop the Soviet advance. Experienced troops had been lost in years of combat, while the young and the elderly were increasingly mobilized to defend the homeland.',
          },
          {
            type: 'paragraph',
            text: 'In April 1945, the Battle of Berlin began, one of the last major military operations of World War II in Europe. Hundreds of thousands of Soviet soldiers took part in the offensive, facing the German forces defending the capital. Fighting took place in different neighborhoods of the city and involved artillery, infantry, and armored vehicles. As Soviet troops advanced, German resistance dwindled and the political center of the Third Reich became increasingly isolated.',
          },
          {
            type: 'paragraph',
            text: 'While Berlin was being encircled, Adolf Hitler remained hidden in the Führerbunker, located beneath the Reich Chancellery. The situation inside the capital quickly became untenable. On April 30, 1945, Hitler died in the bunker, as Soviet forces were already advancing through the city center. A few days later, on May 2, the German forces defending Berlin surrendered, ending organized resistance in the capital.',
          },
          {
            type: 'paragraph',
            text: "On May 2, 1945, the iconic photograph of Soviet soldiers raising the flag over the Reichstag became one of the best-known symbols of Nazi Germany's defeat. The image, taken by photographer Yevgeny Khaldei, visually represented the capture of the capital of the Reich, although the photograph was later staged and retouched for propaganda purposes. Regardless of its alterations, the scene became one of the most recognized images of the end of World War II in Europe.",
          },
          {
            type: 'paragraph',
            text: 'The fall of Berlin marked the definitive collapse of the Nazi regime. On May 7, 1945, German representatives signed the unconditional surrender in Reims, France, and a second ceremony was held in Berlin the following day, with Soviet participation. The surrender took effect on May 8, a date known as Victory in Europe Day. In the Soviet Union and several countries of the former Soviet bloc, the celebration was officially held on May 9 due to the time difference.',
          },
          {
            type: 'paragraph',
            text: 'The human cost of the Eastern Front was extraordinary. The Soviet Union suffered around 27 million deaths, military and civilian, during World War II, the highest death toll of any country involved in the conflict. Millions of Soviet soldiers died in combat, while the civilian population faced occupation, famine, massacres, deportations, and the destruction of entire cities. On the German side, the Eastern Front also accounted for the majority of the military losses suffered by the Wehrmacht.',
          },
          {
            type: 'paragraph',
            text: "The Red Army's march to Berlin, therefore, was not just a sequence of military victories. It was the result of nearly four years of an extremely destructive war, which began with the German invasion of 1941 and was marked by some of the greatest battles in history. From Stalingrad and Kursk to the great offensives of 1944 and the fall of Berlin, the Soviet Union managed to turn an initially desperate situation into a campaign that ended with its troops occupying the capital of the country that had launched the invasion. The Soviet victory on the Eastern Front was thus one of the decisive factors in the defeat of Nazi Germany and the end of the war in Europe.",
          },
        ],
      },
    ],
  },

  // ============================================================
  // CHINA / NANQUIM
  // ============================================================
  {
    id: 'ww2-4',
    slug: 'china-o-massacre-de-nanquim',
    category: 'crimes-de-guerra',
    headline: 'China: the Nanjing Massacre and the Sino-Japanese War',
    subheadline:
      'In December 1937, the Chinese capital lived through weeks of extreme violence under Japanese occupation, one of the gravest episodes of World War II in Asia.',
    coverImage: WW2_IMG.zonaSeguranca,
    coverImageAlt:
      'Civilian refugees in the Nanjing Safety Zone',
    coverImageCredit: {
      photographer:
        'International Committee for the Nanjing Safety Zone',
      date: 'January 1938',
      location: 'Nanjing, China',
    },
    author: AUTHORS_EN.Jarvis,
    publishedAt: '2026-02-05',
    readingTimeMinutes: 11,
    isFeatured: true,
    tags: ['China', 'Nanjing Massacre', 'Sino-Japanese War'],

    topics: [
      {
        id: 'avanco-japones',
        label: 'The Japanese Advance on Nanjing',
        image: WW2_IMG.nanquimAvanco,
        imageAlt:
          'Japanese troops on the outskirts of Nanjing in December 1937',
        imageCredit: {
          photographer: 'Imperial Japanese Army Archive',
          date: 'December 1937',
          location: 'Nanjing, China',
        },
        blocks: [
          {
            type: 'paragraph',
            text: 'The Second Sino-Japanese War officially began in July 1937, more than two years before the German invasion of Poland. After months of intense fighting in the Battle of Shanghai, Japanese forces advanced rapidly toward Nanjing, then the capital of Nationalist China under the government of Chiang Kai-shek.',
          },
          {
            type: 'paragraph',
            text: 'Fearing the loss of his troops in a prolonged siege, Chiang Kai-shek ordered the withdrawal of most of the regular Chinese army from the city, leaving its defense to poorly prepared auxiliary troops. The city fell on December 13, 1937, and Japanese forces, commanded by General Iwane Matsui, entered meeting little organized resistance.',
          },
          {
            type: 'paragraph',
            text: 'The fall of Nanjing was followed by a period of extreme violence against the civilian population and Chinese prisoners of war. In the weeks following the occupation, mass executions, rapes, looting, and other crimes were committed by members of the Japanese forces. The episode would become internationally known as the Nanjing Massacre and would become one of the most controversial and documented events of the war in Asia.',
          },
          {
            type: 'paragraph',
            text: 'Estimates of the number of victims vary according to the criteria used by researchers, but organizations and historical studies point to tens or even hundreds of thousands of deaths. The violence affected both captured soldiers and civilians, including women, children, and the elderly. Accounts from foreign journalists, missionaries, and other foreigners who remained in the city during the occupation helped document the events.',
          },
          {
            type: 'paragraph',
            text: 'Before the arrival of Japanese troops, a group of foreigners had created the so-called Nanjing Safety Zone, intended to protect civilians who could not flee the city. Led by representatives of the international communities present in the region, the zone ended up sheltering hundreds of thousands of people. Even so, its capacity for protection was limited given the scale of the violence and the actions of the occupying troops.',
          },
          {
            type: 'paragraph',
            text: "The Nanjing Massacre later became one of the leading examples of the crimes committed during Japan's military expansion into China. The occupation and the violence against the civilian population helped deepen Chinese resistance and harden international perceptions of the Japanese campaign. The conflict, which had begun as a regional war, would continue expanding until it became a fundamental part of World War II in Asia and the Pacific.",
          },
        ],
      },

      {
        id: 'zona-seguranca',
        label: 'The Safety Zone and John Rabe',
        image: WW2_IMG.johnRabe,
        imageAlt:
          'Portrait of John Rabe, the German businessman who led the Nanjing Safety Zone',
        imageCredit: {
          photographer: 'Unidentified photographer',
          date: '1930s',
          location: 'Nanjing, China',
        },
        blocks: [
          {
            type: 'paragraph',
            text: 'Amid the violence, a group of about twenty foreigners who had remained in the city, among them missionaries, doctors, and businessmen, formed the International Committee for the Nanjing Safety Zone. Leading the group was John Rabe, a German Siemens businessman and, ironically, a member of the Nazi Party, who used his political credentials to negotiate with Japanese officers.',
          },
          {
            type: 'quote',
            text: 'There is a question of morality here... it is moving to see how these people believe in me.',
            attribution: '(John Rabe, in his diary)',
          },
          {
            type: 'paragraph',
            text: 'The Safety Zone sheltered between 200,000 and 250,000 Chinese civilians, protecting them from the worst of the violence around them. The area was established in a region of Nanjing where foreigners tried to concentrate the population seeking protection during the Japanese occupation. Although it could not completely prevent abuses, the zone offered shelter to an enormous number of people amid the chaos brought on by the fall of the city.',
          },
          {
            type: 'paragraph',
            text: "Rabe kept a detailed diary of events, recording episodes of violence and the hardships faced by civilians during the occupation. His records, later published, became one of the sources used by historians to reconstruct the events in Nanjing. Other members of the Committee also produced accounts and documents that helped preserve evidence about the period.",
          },
          {
            type: 'paragraph',
            text: "Rabe's position within the Nazi Party and his German nationality ended up giving him unexpected influence with Japanese authorities. He used his connections and credentials to try to intervene on behalf of civilians and pressure Japanese officers to respect the boundaries of the Safety Zone. His actions became one of the best-known examples of foreigners who remained in Nanjing and tried to protect the population during the occupation.",
          },
          {
            type: 'paragraph',
            text: 'Upon returning to Germany, Rabe tried to alert Nazi authorities to the crimes he had witnessed. However, his attempts to publicize the events met with strong resistance. He was interrogated by the Gestapo and prevented from publicly disclosing the content of his records, leaving part of his testimony restricted for years.',
          },
        ],
      },

      {
        id: 'seis-semanas',
        label: 'Six Weeks of Violence',
        image: WW2_IMG.nanquimAvanco,
        imageAlt:
          'Historical record from the period of the massacre in Nanjing',
        imageCredit: {
          photographer: 'Imperial Japanese Army Archive',
          date: 'December 1937',
          location: 'Nanjing, China',
        },
        blocks: [
          {
            type: 'heading',
            text: 'One of the gravest episodes of the war in Asia',
          },
          {
            type: 'paragraph',
            text: 'In the weeks following the fall of the city, Japanese troops carried out mass executions of prisoners of war and civilians, along with widespread looting, arson, and an extremely high number of cases of sexual violence against women and girls. The episode became known worldwide as the Nanjing Massacre, or the "Rape of Nanjing," becoming one of the gravest events of the war in Asia.',
          },
          {
            type: 'paragraph',
            text: 'The violence spread across different parts of the city and its surroundings, as thousands of civilians tried to find shelter or flee the occupied area. Prisoners of war were also subjected to executions and mistreatment, despite international norms establishing rules for the treatment of captured combatants. The absence of a civil authority capable of controlling the situation contributed to the rapid worsening of the scenario.',
          },
          {
            type: 'paragraph',
            text: 'Several foreigners who remained in Nanjing during the occupation recorded the events and helped preserve evidence of the violence. Diaries, letters, photographs, and accounts produced by missionaries, doctors, teachers, and other foreign residents would later serve as important sources for historians. Among those witnesses was John Rabe, a German businessman who took part in organizing the Nanjing Safety Zone and left records of the period.',
          },
          {
            type: 'paragraph',
            text: 'The exact number of victims remains, to this day, a subject of intense historiographical debate between China and Japan. The International Military Tribunal for the Far East, convened in Tokyo after the war, presented estimates of more than 200,000 dead. More recent academic research, considering different geographic and time frames, places the number of fatalities within a range from tens of thousands to figures close to 300,000, depending on the methodology used.',
          },
          {
            type: 'paragraph',
            text: 'The differences in estimates are mainly related to how the affected area is defined, the period analyzed, and the types of victims included in the calculations. Military records, administrative documents, testimonies, and demographic studies present differing information, leading historians to adopt different methodologies to calculate the death toll. These numerical discrepancies, however, do not mean that the occurrence of the violence itself is in doubt within academic historiography.',
          },
          {
            type: 'paragraph',
            text: 'Although the precise numbers continue to be debated by historians, the scale and severity of the violence against the civilian population of Nanjing are widely documented and recognized. The episode became one of the main symbols of the crimes committed during the Japanese occupation of China and continues to be remembered as a fundamental part of the history of the Second Sino-Japanese War. Decades later, the memory of the massacre remains sensitive and continues to influence relations and historical debates between China and Japan.',
          },
        ],
      },

      {
        id: 'responsabilizacao',
        label: 'Accountability and Memory',
        image: WW2_IMG.tribunalToquio,
        imageAlt:
          'Session of the International Military Tribunal for the Far East in Tokyo',
        imageCredit: {
          photographer: 'United States National Archives',
          date: '1946',
          location: 'Tokyo, Japan',
        },
        blocks: [
          {
            type: 'paragraph',
            text: 'After the war ended, General Iwane Matsui was tried by the International Military Tribunal for the Far East and convicted for failing to prevent the crimes committed by troops under his command, and was executed in 1948. Lieutenant General Hisao Tani, also associated with the operations in Nanjing, was tried separately by a Chinese tribunal in the city itself and likewise sentenced to death.',
          },
          {
            type: 'paragraph',
            text: 'The trials held after the war were part of a broader Allied effort to hold military and political authorities accountable for crimes committed during the conflict. In the case of Nanjing, holding Japanese officers accountable became an important matter for legally establishing responsibility for the events and preserving records of the crimes committed during the occupation.',
          },
          {
            type: 'paragraph',
            text: 'The Nanjing Massacre remains one of the most sensitive subjects in China-Japan relations to this day. While most historians, including respected Japanese researchers, acknowledge the historical validity of the massacre, the subject is still a target of revisionism among Japanese nationalist circles, which keeps the dispute over its memory alive.',
          },
          {
            type: 'paragraph',
            text: 'How the massacre is presented in school textbooks, political speeches, and memorial ceremonies remains a source of controversy between the two countries. For China, Nanjing holds a central place in the memory of resistance to the Japanese invasion and the suffering caused by the war. In Japan, on the other hand, there are differing interpretations of the scale of the events, although academic historiography broadly acknowledges that grave crimes were committed during the occupation.',
          },
          {
            type: 'paragraph',
            text: 'Today, the Nanjing Massacre Memorial Hall, in China, preserves survivor testimonies and historical documentation from the period. The site functions as a space for memory and research, gathering documents, photographs, and accounts related to the events of 1937. Decades after the end of the war, the preservation of this evidence continues to play an important role in the historical understanding of the massacre and in the memory of its victims.',
          },
        ],
      },
    ],
  },
]

export function getNewsTranslation(
  slug: string,
): Partial<NewsArticle> | undefined {
  const article = FEATURED_ARTICLES_EN.find(
    (item) => item.slug === slug,
  )

  if (!article) {
    return undefined
  }

  return article
}