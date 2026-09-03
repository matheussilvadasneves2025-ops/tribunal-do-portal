import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CATEGORIES, CATEGORY_LABELS_EN } from '@/constants/categories'
import { useLanguage } from '@/context/LanguageContext'
// Categorias que têm uma página própria em vez de lista de matérias
const CATEGORY_LINK_OVERRIDE: Record<string, string> = {
  'estrutura-tribunal': '/estrutura-do-tribunal',
}

export function CategoryStrip() {
  const { language } = useLanguage()

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
              <Link
                to={CATEGORY_LINK_OVERRIDE[category.id] ?? `/materias?categoria=${category.id}`}
                className="font-ui text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
              >
                {language === 'en' ? CATEGORY_LABELS_EN[category.id] : category.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
