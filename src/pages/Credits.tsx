import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { CREDITS } from '@/constants/credits'
import { useLanguage } from '@/context/LanguageContext'
import { useT } from '@/i18n/ui'
import { getCreditTranslation } from '@/i18n/credits'

export function Credits() {
  const t = useT()
  const { language } = useLanguage()
  const [expandedRole, setExpandedRole] = useState<string | null>(null)

  return (
    <main className="mx-auto max-w-2xl px-5 py-20 md:px-8 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="font-ui text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
          {t('credits')}
        </p>
        <h1 className="mt-3 font-editorial text-3xl font-bold text-[var(--color-ink)] md:text-4xl">
          {t('acknowledgments')}
        </h1>
        <p className="mx-auto mt-4 max-w-md font-ui text-sm leading-relaxed text-[var(--color-ink-muted)]">
          {t('creditsIntro')}
        </p>
      </motion.div>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="mt-14 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]"
      >
        {CREDITS.map((credit) => {
  const translation = getCreditTranslation(credit.role)

  const displayCredit =
    language === 'en' && translation
      ? { ...credit, ...translation }
      : credit

  const isExpanded = expandedRole === credit.role
  const hasTeam = Boolean(displayCredit.team?.length)

          return (
            <motion.li
              key={credit.role}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              className="py-5"
            >
              <button
                onClick={() => hasTeam && setExpandedRole(isExpanded ? null : credit.role)}
                className={hasTeam ? 'flex w-full items-center justify-between text-left' : 'flex w-full items-center justify-between text-left cursor-default'}
                aria-expanded={hasTeam ? isExpanded : undefined}
              >
                <div>
                  <p className="font-editorial text-lg font-medium text-[var(--color-ink)]">
                    {displayCredit.name}
                  </p>
                  {displayCredit.note && (
                    <p className="font-ui text-xs text-[var(--color-ink-muted)]">{displayCredit.note}</p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-ui text-xs uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
                    {displayCredit.role}
                  </span>
                  {hasTeam && (
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-[var(--color-ink-muted)]"
                    >
                      <ChevronDown size={16} />
                    </motion.span>
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {hasTeam && isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 font-ui text-sm text-[var(--color-ink-muted)]">
                      {t('team')}: {displayCredit.team!.join(', ')}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          )
        })}
      </motion.ul>

      <p className="mt-14 text-center font-ui text-xs text-[var(--color-ink-muted)]">
        {t('creditsFooterNote')}
      </p>

      <p className="mt-3 text-center font-ui text-xs font-medium text-[var(--color-ink)]">
        {t('allRightsReserved')}
      </p>
    </main>
  )
}
