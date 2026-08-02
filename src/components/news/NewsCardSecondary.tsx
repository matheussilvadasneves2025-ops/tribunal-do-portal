import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { NewsArticle } from '@/types/news'
import { CategoryBadge } from './CategoryBadge'
import { formatDate } from '@/lib/utils'

interface NewsCardSecondaryProps {
  article: NewsArticle
  index: number
}

export function NewsCardSecondary({ article, index }: NewsCardSecondaryProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group border-b border-[var(--color-line)] py-5 first:pt-0 last:border-0"
    >
      <Link
        to={`/materia/${article.slug}`}
        className="flex items-center gap-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)] focus-visible:outline-offset-4 rounded-sm"
        aria-label={`Ler matéria: ${article.headline}`}
      >
        <div className="flex-1">
          <CategoryBadge category={article.category} className="mb-2" />
          <h4 className="font-editorial text-base font-semibold leading-snug text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-gold)] md:text-lg">
            {article.headline}
          </h4>
          <div className="mt-2 font-ui text-xs text-[var(--color-ink-muted)]">
            {article.author.name} · {formatDate(article.publishedAt)}
          </div>
        </div>
        <div className="hidden h-20 w-28 shrink-0 overflow-hidden rounded-sm bg-[var(--color-paper-dark)] sm:block">
          <motion.img
            src={article.coverImage}
            alt={article.coverImageAlt}
            loading="lazy"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6 }}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>
    </motion.article>
  )
}
