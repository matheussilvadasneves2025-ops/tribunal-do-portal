import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import type { NewsArticle } from '@/types/news'
import { CategoryBadge } from './CategoryBadge'
import { formatDate } from '@/lib/utils'
import { useArticleOverlay } from '@/context/ArticleOverlayContext'
import { useT } from '@/i18n/ui'

interface FeaturedNewsCardProps {
  article: NewsArticle
  index: number
}

export function FeaturedNewsCard({ article, index }: FeaturedNewsCardProps) {
  const t = useT()
  const cardRef = useRef<HTMLDivElement>(null)
  const { open } = useArticleOverlay()

  const handleOpen = () => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    open(article, {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    })
  }

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col"
    >
      <button
        onClick={handleOpen}
        className="flex h-full flex-col text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)] focus-visible:outline-offset-4 rounded-sm"
        aria-label={`${t('readArticle')}: ${article.headline}`}
      >
        <div className="relative overflow-hidden rounded-sm bg-[var(--color-paper-dark)]">
          <motion.div className="aspect-[4/3] w-full overflow-hidden" whileHover="hover">
            <motion.img
              src={article.coverImage}
              alt={article.coverImageAlt}
              loading={index === 0 ? 'eager' : 'lazy'}
              variants={{ hover: { scale: 1.07 } }}
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
            className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-paper)] text-[var(--color-ink)] shadow-lg"
          >
            <ArrowUpRight size={14} strokeWidth={2} />
          </motion.div>
        </div>

        <div className="flex flex-1 flex-col gap-2.5 pt-4">
          <CategoryBadge category={article.category} />

          <h3 className="font-editorial text-lg font-semibold leading-snug text-[var(--color-ink)] text-balance transition-colors duration-300 group-hover:text-[var(--color-gold)]">
            {article.headline}
          </h3>

          <p className="line-clamp-2 font-ui text-sm leading-relaxed text-[var(--color-ink-muted)]">
            {article.subheadline}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-2 font-ui text-xs text-[var(--color-ink-muted)]">
            <span className="font-medium text-[var(--color-ink-soft)]">
              {article.author.name}
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} />
              {article.readingTimeMinutes} {t('minRead')}
            </span>
          </div>
        </div>
      </button>
    </motion.article>
  )
}
