import { useEffect, useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { NewsCard } from '@/components/news/NewsCard'
import { NewsCardPlaceholder } from '@/components/news/NewsCardPlaceholder'
import { SearchBar } from '@/components/search/SearchBar'
import { Skeleton } from '@/components/ui/Skeleton'
import { newsService } from '@/services/newsService'
import { PLACEHOLDER_COUNT } from '@/constants/news'
import { CATEGORIES, CATEGORY_LABELS_EN, CATEGORY_DESCRIPTIONS_EN } from '@/constants/categories'
import type { NewsArticle } from '@/types/news'
import { useT } from '@/i18n/ui'
import { useLanguage } from '@/context/LanguageContext'

export function AllNews() {
  const t = useT()
  const { language } = useLanguage()

  const [articles, setArticles] = useState<NewsArticle[] | null>(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const categoriaFiltro = searchParams.get('categoria')

  useEffect(() => {
    let active = true
    newsService.getAllArticles(language).then((data) => {
      if (active) setArticles(data)
    })
    return () => {
      active = false
    }
  }, [language])

  const categoriaAtiva = useMemo(
    () => CATEGORIES.find((c) => c.id === categoriaFiltro) ?? null,
    [categoriaFiltro],
  )

  const articlesFiltrados = useMemo(() => {
    if (!articles) return null
    if (!categoriaFiltro) return articles
    return articles.filter((a) => a.category === categoriaFiltro)
  }, [articles, categoriaFiltro])

  const limparFiltro = () => {
    setSearchParams({})
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 flex flex-col gap-4 border-b border-[var(--color-line)] pb-8 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="font-ui text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
            {categoriaAtiva
  ? language === 'en'
    ? CATEGORY_LABELS_EN[categoriaAtiva.id] ?? categoriaAtiva.label
    : categoriaAtiva.label
  : t('fullArchive')}
          </p>
          <h1 className="mt-2 font-editorial text-3xl font-bold text-[var(--color-ink)] md:text-4xl">
            {categoriaAtiva
  ? (language === 'en'
      ? CATEGORY_DESCRIPTIONS_EN[categoriaAtiva.id] ?? categoriaAtiva.description
      : categoriaAtiva.description)
  : t('allArticles')}
          </h1>
        </div>
        <div className="sm:hidden">
          <SearchBar />
        </div>
      </motion.div>

      {categoriaAtiva && (
        <button
          onClick={limparFiltro}
          className="mb-8 flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] px-4 py-1.5 font-ui text-xs uppercase tracking-[0.1em] text-[var(--color-ink-muted)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
        >
          <X size={13} />
          {t('clearCategoryFilter')}
        </button>
      )}

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {articlesFiltrados === null
          ? Array.from({ length: 6 }).map((_, i) => <GridSkeleton key={i} />)
          : articlesFiltrados.map((article) => <NewsCard key={article.id} article={article} />)}

        {!categoriaFiltro &&
          articlesFiltrados !== null &&
          Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <NewsCardPlaceholder key={`placeholder-${i}`} index={i} />
          ))}
      </div>

      {articlesFiltrados !== null && articlesFiltrados.length === 0 && (
        <div className="mt-10 flex flex-col items-center gap-4 py-16 text-center">
          <p className="font-ui text-sm text-[var(--color-ink-muted)]">
            {t('noArticlesInCategory')}
          </p>
          <Link
            to="/materias"
            className="font-ui text-sm font-medium text-[var(--color-gold)] hover:underline"
          >
            {t('seeAllArticles')}
          </Link>
        </div>
      )}
    </main>
  )
}

function GridSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="aspect-[16/10] w-full" />
      <Skeleton className="h-3 w-16" />
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  )
}
