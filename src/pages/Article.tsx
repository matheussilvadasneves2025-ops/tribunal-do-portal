import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { newsService } from '@/services/newsService'
import type { NewsArticle } from '@/types/news'
import { ArticleContent } from '@/components/news/ArticleContent'
import { Skeleton } from '@/components/ui/Skeleton'
import { useLanguage } from '@/context/LanguageContext'

export function Article() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const { language } = useLanguage()
  const [article, setArticle] = useState<NewsArticle | null | undefined>(null)

  useEffect(() => {
    if (!slug) return
    let active = true
    setArticle(null)
    newsService.getArticleBySlug(slug, language).then((data) => {
      if (active) setArticle(data ?? undefined)
    })
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    return () => {
      active = false
    }
  }, [slug, language])

  if (article === undefined) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-24 text-center">
        <h1 className="font-editorial text-2xl font-bold text-[var(--color-ink)]">
          Matéria não encontrada
        </h1>
        <button
          onClick={() => navigate('/materias')}
          className="mt-6 font-ui text-sm font-medium text-[var(--color-gold)] hover:underline"
        >
          Voltar para todas as matérias
        </button>
      </div>
    )
  }

  if (article === null) {
    return <ArticleSkeleton />
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <ArticleContent article={article} onBack={() => navigate(-1)} />
    </motion.div>
  )
}

function ArticleSkeleton() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 md:px-8 md:py-16">
      <Skeleton className="h-4 w-16" />
      <Skeleton className="mt-6 h-10 w-full" />
      <Skeleton className="mt-3 h-10 w-3/4" />
      <Skeleton className="mt-6 h-5 w-full" />
      <Skeleton className="mt-2 h-5 w-2/3" />
      <Skeleton className="mt-10 aspect-[16/9] w-full" />
      <div className="mt-10 space-y-4">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-4/5" />
      </div>
    </div>
  )
}
