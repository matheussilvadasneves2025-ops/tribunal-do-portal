import { motion } from 'framer-motion'
import { CATEGORIES } from '@/constants/categories'

export function CategoryStrip() {
  return (
    <section className="border-y border-[var(--color-line)] bg-[var(--color-paper-dark)]">
      <div className="mx-auto max-w-7xl px-5 py-4 md:px-8">
        <div className="flex gap-6 overflow-x-auto">
          {CATEGORIES.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="shrink-0"
            >
              <span className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-gold)]">
                {category.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
