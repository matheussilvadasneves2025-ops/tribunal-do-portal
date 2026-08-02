import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, Clock } from 'lucide-react'
import type { NewsArticle } from '@/types/news'
import { CategoryBadge } from '@/components/news/CategoryBadge'
import { ArticleBody } from '@/components/news/ArticleBody'
import { ReadingProgressBar } from '@/components/news/ReadingProgressBar'
import { formatDate, cn } from '@/lib/utils'

interface ArticleContentProps {
  article: NewsArticle
  onBack: () => void
  backLabel?: string
}

export function ArticleContent({ article, onBack, backLabel = 'Voltar' }: ArticleContentProps) {
  const localRef = useRef<HTMLElement>(null)
  const [activeTopicIndex, setActiveTopicIndex] = useState(0)
  const activeTopic = article.topics[activeTopicIndex]

  return (
    <>
      <ReadingProgressBar targetRef={localRef} />

      <article ref={localRef} className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-16">
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 font-ui text-sm font-medium text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
        >
          <ArrowLeft size={16} />
          {backLabel}
        </button>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <CategoryBadge category={article.category} />
          <h1 className="mt-4 max-w-4xl text-balance font-editorial text-3xl font-bold leading-[1.1] text-[var(--color-ink)] md:text-5xl">
            {article.headline}
          </h1>
          <p className="mt-5 max-w-3xl font-ui text-lg leading-relaxed text-[var(--color-ink-muted)]">
            {article.subheadline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 border-y border-[var(--color-line)] py-4 font-ui text-sm text-[var(--color-ink-muted)]">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-ink)] font-ui text-xs font-semibold text-[var(--color-paper)]">
                {article.author.avatarInitials}
              </div>
              <div className="leading-tight">
                <p className="font-medium text-[var(--color-ink)]">{article.author.name}</p>
                <p className="text-xs">{article.author.role}</p>
              </div>
            </div>
            <span aria-hidden="true">·</span>
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} />
              {article.readingTimeMinutes} min de leitura
            </span>
          </div>
        </motion.div>

        {/* Barra de tópicos dentro da matéria */}
        <div
          role="tablist"
          aria-label="Tópicos da matéria"
          className="mt-8 flex gap-1 overflow-x-auto border-b border-[var(--color-line)]"
        >
          {article.topics.map((topic, i) => (
            <button
              key={topic.id}
              role="tab"
              aria-selected={i === activeTopicIndex}
              onClick={() => setActiveTopicIndex(i)}
              className={cn(
                'relative shrink-0 whitespace-nowrap px-4 py-3 font-ui text-sm font-medium transition-colors',
                i === activeTopicIndex
                  ? 'text-[var(--color-ink)]'
                  : 'text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]',
              )}
            >
              {topic.label}
              {i === activeTopicIndex && (
                <motion.span
                  layoutId={`topic-underline-${article.id}`}
                  className="absolute inset-x-2 -bottom-px h-[2px] bg-[var(--color-gold)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Texto à esquerda, imagem à direita */}
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTopic.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <ArticleBody blocks={activeTopic.blocks} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTopic.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-sm"
              >
                <img
                  src={activeTopic.image}
                  alt={activeTopic.imageAlt}
                  className="aspect-[4/5] w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <p className="mt-3 font-ui text-xs text-[var(--color-ink-muted)]">
              {activeTopic.label}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-2 border-t border-[var(--color-line)] pt-8">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--color-line-strong)] px-3 py-1 font-ui text-xs text-[var(--color-ink-muted)]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </>
  )
}
