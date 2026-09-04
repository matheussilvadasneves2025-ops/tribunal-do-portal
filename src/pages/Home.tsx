import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Hero } from '@/components/layout/Hero'
import { CategoryStrip } from '@/components/news/CategoryStrip'
import { FeaturedNewsCard } from '@/components/news/FeaturedNewsCard'
import { NewsCardPlaceholder } from '@/components/news/NewsCardPlaceholder'
import { Skeleton } from '@/components/ui/Skeleton'
import { newsService } from '@/services/newsService'
import type { NewsArticle } from '@/types/news'
import { useT } from '@/i18n/ui'
import { useLanguage } from '@/context/LanguageContext'

const SECONDARY_PLACEHOLDER_COUNT = 5
const MORE_NEWS_PLACEHOLDER_COUNT = 6

export function Home() {
  const t = useT()
  const { language } = useLanguage()

  const [articles, setArticles] = useState<NewsArticle[] | null>(null)

  useEffect(() => {

  let active = true

  newsService.getFeaturedArticles(language).then((data) => {

    if (active) setArticles(data)

  })

  return () => {

    active = false

  }

}, [language])

  return (
    <>
      <Hero />
      <CategoryStrip />

      <main className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        {/* As 4 notícias principais, em destaque igual */}
        <section aria-label={t('allArticles')}>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {!articles
              ? Array.from({ length: 4 }).map((_, i) => <FeaturedSkeleton key={i} />)
              : articles.map((article, i) => (
                  <FeaturedNewsCard key={article.id} article={article} index={i} />
                ))}
          </div>
        </section>

        {/* Linha secundária de destaques, preparada para futuras matérias */}
        <section aria-label={t('alsoFeatured')} className="mt-20">
          <h2 className="mb-6 border-b border-[var(--color-line)] pb-3 font-ui text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
            {t('alsoFeatured')}
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: SECONDARY_PLACEHOLDER_COUNT }).map((_, i) => (
              <NewsCardPlaceholder key={`secondary-${i}`} index={i} />
            ))}
          </div>
        </section>

        {/* Introdução curta para o leitor + o resto das notícias */}
        <section aria-label={t('specialEdition')} className="mt-20 border-t border-[var(--color-line)] pt-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="font-ui text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
              {t('toTheReader')}
            </p>
            <p className="mt-4 font-editorial text-xl italic leading-relaxed text-[var(--color-ink-soft)] md:text-2xl">
              {t('readerNote')}
            </p>
          </motion.div>

          <div className="mt-14 flex items-end justify-between border-b border-[var(--color-line)] pb-4">
            <h2 className="font-editorial text-2xl font-bold text-[var(--color-ink)] md:text-3xl">
              {t('moreNews')}
            </h2>
            <Link
              to="/materias"
              className="group inline-flex items-center gap-1.5 font-ui text-sm font-medium text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-gold)]"
            >
              {t('seeAll')}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: MORE_NEWS_PLACEHOLDER_COUNT }).map((_, i) => (
              <NewsCardPlaceholder key={`more-${i}`} index={i} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

function FeaturedSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="aspect-[4/3] w-full" />
      <Skeleton className="h-3 w-16" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  )
}
