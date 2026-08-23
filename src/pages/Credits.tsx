import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { CREDITS } from '@/constants/credits'

export function Credits() {
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
          Créditos
        </p>
        <h1 className="mt-3 font-editorial text-3xl font-bold text-[var(--color-ink)] md:text-4xl">
          Agradecimentos
        </h1>
        <p className="mx-auto mt-4 max-w-md font-ui text-sm leading-relaxed text-[var(--color-ink-muted)]">
          Este projeto é uma simulação acadêmica desenvolvida com fins
          educacionais, reconstruindo em formato jornalístico o Tribunal
          Militar Internacional de Nuremberg.
        </p>
      </motion.div>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="mt-14 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]"
      >
        {CREDITS.map((credit) => {
          const isExpanded = expandedRole === credit.role
          const hasTeam = Boolean(credit.team?.length)

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
                    {credit.name}
                  </p>
                  {credit.note && (
                    <p className="font-ui text-xs text-[var(--color-ink-muted)]">{credit.note}</p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-ui text-xs uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
                    {credit.role}
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
                      Equipe: {credit.team!.join(', ')}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          )
        })}
      </motion.ul>

      <p className="mt-14 text-center font-ui text-xs text-[var(--color-ink-muted)]">
        Seção preparada para futuras edições e novos colaboradores.
      </p>

      <p className="mt-3 text-center font-ui text-xs font-medium text-[var(--color-ink)]">
        Todos os direitos reservados a Matheus & Jarvis.
      </p>
    </main>
  )
}
