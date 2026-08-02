import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Clock } from 'lucide-react'
import type { NewsArticle } from '@/types/news'
import { CategoryBadge } from './CategoryBadge'
import { formatDate } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface NewsCardProps {
  article: NewsArticle
  priority?: boolean
  className?: string
}

export function NewsCard({ article, priority = false, className }: NewsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('group relative', className)}
    >
      <Link
        to={`/materia/${article.slug}`}
        className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)] focus-visible:outline-offset-4 rounded-sm"
        aria-label={`Ler matéria: ${article.headline}`}
      >
        <div className="relative overflow-hidden rounded-sm bg-[var(--color-paper-dark)]">
          <motion.div
            className="aspect-[16/10] w-full overflow-hidden"
            whileHover="hover"
          >
            <motion.img
              src={article.coverImage}
              alt={article.coverImageAlt}
              loading={priority ? 'eager' : 'lazy'}
              variants={{ hover: { scale: 1.06 } }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"
          />
          <motion.div
            initial={{ y: 8, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-paper)] text-[var(--color-ink)] shadow-lg"
          >
            <ArrowUpRight size={16} strokeWidth={2} />
          </motion.div>
        </div>

        <div className="flex flex-1 flex-col gap-3 pt-5">
          <CategoryBadge category={article.category} />

          <h3 className="font-editorial text-xl font-semibold leading-snug text-[var(--color-ink)] text-balance transition-colors duration-300 group-hover:text-[var(--color-ink-soft)] md:text-2xl">
            {article.headline}
          </h3>

          <p className="line-clamp-2 font-ui text-sm leading-relaxed text-[var(--color-ink-muted)]">
            {article.subheadline}
          </p>

          <div className="mt-auto flex items-center gap-3 pt-2 font-ui text-xs text-[var(--color-ink-muted)]">
            <span className="font-medium text-[var(--color-ink-soft)]">
              {article.author.name}
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} />
              {article.readingTimeMinutes} min
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
