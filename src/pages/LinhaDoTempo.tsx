import { motion } from 'framer-motion'
import { TIMELINE_EVENTS } from '@/constants/timeline'

export function LinhaDoTempo() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="font-ui text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
          Linha do Tempo
        </p>
        <h1 className="mt-3 font-editorial text-3xl font-bold text-[var(--color-ink)] md:text-4xl">
          O Julgamento em Nuremberg
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-ui text-sm leading-relaxed text-[var(--color-ink-muted)]">
          Os principais marcos do Tribunal Militar Internacional, de sua
          criação às execuções das sentenças.
        </p>
      </motion.div>

      <div className="relative mt-16 pl-8">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--color-line-strong)]" />

        {TIMELINE_EVENTS.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.05 * i }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--color-gold)] bg-[var(--color-paper)]" />
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-gold)]">
              {event.date}
            </p>
            <h3 className="mt-1 font-editorial text-xl font-semibold text-[var(--color-ink)]">
              {event.title}
            </h3>
            <p className="mt-2 font-ui text-sm leading-relaxed text-[var(--color-ink-muted)]">
              {event.description}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
