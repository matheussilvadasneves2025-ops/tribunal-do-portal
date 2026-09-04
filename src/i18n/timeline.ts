import type { TimelineEvent } from '@/types/news'

export type TimelineTranslation = Partial<TimelineEvent>

export const TIMELINE_TRANSLATIONS: Record<string, TimelineTranslation> = {
  'acordo-londres': {
    date: 'August 8, 1945',
    title: 'London Agreement',
    description:
      'The United States, Soviet Union, United Kingdom and France sign the agreement that creates the International Military Tribunal and defines the crimes to be prosecuted.',
  },

  abertura: {
    date: 'November 20, 1945',
    title: 'Opening of the Trial',
    description:
      'The inaugural session takes place in Nuremberg. The prosecution reads the indictment against the defendants for crimes against peace, war crimes and crimes against humanity.',
  },

  'caso-acusacao': {
    date: 'December 1945 – March 1946',
    title: 'Presentation of the Prosecution Evidence',
    description:
      'Captured documents, films and testimonies are used to reconstruct the chain of command behind policies of persecution and extermination.',
  },

  'caso-defesa': {
    date: 'March – July 1946',
    title: 'Presentation of the Defense',
    description:
      'Defense attorneys challenge the court’s jurisdiction and rely on the argument of obedience to superior orders.',
  },

  sentencas: {
    date: 'September 30 – October 1, 1946',
    title: 'Reading of the Sentences',
    description:
      'The tribunal delivers individual verdicts, including death sentences, life imprisonment, fixed-term sentences and several acquittals.',
  },

  execucoes: {
    date: 'October 16, 1946',
    title: 'Execution of the Sentences',
    description:
      'Those sentenced to death are executed at Nuremberg Prison, bringing the first phase of the trials to an end.',
  },
}

export function getTimelineTranslation(
  id: string,
): TimelineTranslation | undefined {
  return TIMELINE_TRANSLATIONS[id]
}