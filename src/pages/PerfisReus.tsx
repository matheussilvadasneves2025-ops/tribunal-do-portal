import { motion } from 'framer-motion'

import { REUS_PROFILES } from '@/constants/reus'
import { useLanguage } from '@/context/LanguageContext'
import { useT } from '@/i18n/ui'
import { getDefendantTranslation } from '@/i18n/reus'

export function PerfisReus() {
    const t = useT()
  const { language } = useLanguage()
  return (
    <main className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="font-ui text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
          {t('defendantProfiles')}
        </p>
        <h1 className="mt-3 font-editorial text-3xl font-bold text-[var(--color-ink)] md:text-4xl">
          {t('faceToFace')}
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-ui text-sm leading-relaxed text-[var(--color-ink-muted)]">
          {t('defendantsIntro')}
        </p>
      </motion.div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        {REUS_PROFILES.map((reu, i) => {
  const translation = getDefendantTranslation(reu.id)

  const displayReu =
    language === 'en' && translation
      ? { ...reu, ...translation }
      : reu

  return (
          <motion.div
            key={reu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            className="overflow-hidden rounded-sm border border-[var(--color-line)] bg-[var(--color-paper-dark)]"
          >
            <div className="aspect-[3/4] w-full overflow-hidden bg-[var(--color-line)]">
              {/* Substitua o src abaixo pela foto do aluno caracterizado */}
              <img
                src={displayReu.photoPlaceholder}
                alt={`${displayReu.studentName} ${t('interprets')} ${displayReu.characterName}`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
            <div className="p-6">
              <p className="font-ui text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
                {displayReu.studentName} {t('interprets')}
              </p>
              <h2 className="mt-1 font-editorial text-2xl font-bold text-[var(--color-ink)]">
                {displayReu.characterName}
              </h2>
              <p className="mt-1 font-ui text-sm font-medium text-[var(--color-gold)]">
                {displayReu.characterRole}
              </p>
              <p className="mt-4 font-ui text-sm leading-relaxed text-[var(--color-ink-soft)]">
                {displayReu.bio}
              </p>
            </div>
                  </motion.div>
      )
    })}
      </div>

      <p className="mt-14 text-center font-ui text-xs text-[var(--color-ink-muted)]">
        {t('defendantsFooterNote')}
      </p>
    </main>
  )
}
