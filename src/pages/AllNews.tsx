import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { NewsCard } from '@/components/news/NewsCard'
import { NewsCardPlaceholder } from '@/components/news/NewsCardPlaceholder'
import { SearchBar } from '@/components/search/SearchBar'
import { Skeleton } from '@/components/ui/Skeleton'
import { newsService } from '@/services/newsService'
import { PLACEHOLDER_COUNT } from '@/constants/news'
import type { NewsArticle } from '@/types/news'

export function AllNews() {
  const [articles, setArticles] = useState<NewsArticle[] | null>(null)

  useEffect(() => {
    let active = true
    newsService.getAllArticles().then((data) => {
      if (active) setArticles(data)
    })
    return () => {
      active = false
    }
  }, [])

  return (
    <main className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 flex flex-col gap-4 border-b border-[var(--color-line)] pb-8 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p className="font-ui text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
            Arquivo Completo
          </p>
          <h1 className="mt-2 font-editorial text-3xl font-bold text-[var(--color-ink)] md:text-4xl">
            Todas as Matérias
          </h1>
        </div>
        <div className="sm:hidden">
          <SearchBar />
        </div>
      </motion.div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {articles === null
          ? Array.from({ length: 6 }).map((_, i) => <GridSkeleton key={i} />)
          : articles.map((article) => <NewsCard key={article.id} article={article} />)}

        {articles !== null &&
          Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <NewsCardPlaceholder key={`placeholder-${i}`} index={i} />
          ))}
      </div>
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
