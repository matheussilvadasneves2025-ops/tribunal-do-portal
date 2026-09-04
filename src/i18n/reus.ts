import type { ReuProfile } from '@/types/news'

export type DefendantTranslation = Partial<ReuProfile>

export const DEFENDANT_TRANSLATIONS: Record<
  string,
  DefendantTranslation
> = {
  'reu-alemanha': {
    characterRole: 'Main defendant in the trial.',
    bio: 'Hermann Göring was one of the main leaders of Nazi Germany and Adolf Hitler’s right-hand man. He commanded the Luftwaffe (German Air Force) and was one of the most powerful figures in the regime. At Nuremberg, he was the main defendant and was sentenced to death, but died before his execution.',
  },

  'reu-eua': {
    characterRole: 'Chief prosecutor for the prosecution.',
    bio: 'Robert H. Jackson was an American lawyer and judge who served as the Allies’ chief prosecutor at the Nuremberg Tribunal. Appointed by President Harry Truman, he led the prosecution against the main Nazi leaders. His work helped establish fundamental principles of international criminal law.',
  },
}

export function getDefendantTranslation(
  id: string,
): DefendantTranslation | undefined {
  return DEFENDANT_TRANSLATIONS[id]
}