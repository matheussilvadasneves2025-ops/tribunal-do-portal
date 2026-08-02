import { createContext, useContext, useState, type ReactNode } from 'react'
import type { NewsArticle } from '@/types/news'

export interface OverlayOrigin {
  top: number
  left: number
  width: number
  height: number
}

interface ExpandedState {
  article: NewsArticle
  origin: OverlayOrigin
}

interface ArticleOverlayContextValue {
  expanded: ExpandedState | null
  open: (article: NewsArticle, origin: OverlayOrigin) => void
  close: () => void
}

const ArticleOverlayContext = createContext<ArticleOverlayContextValue | null>(null)

export function ArticleOverlayProvider({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState<ExpandedState | null>(null)

  const open = (article: NewsArticle, origin: OverlayOrigin) => {
    document.body.style.overflow = 'hidden'
    setExpanded({ article, origin })
  }

  const close = () => {
    document.body.style.overflow = ''
    setExpanded(null)
  }

  return (
    <ArticleOverlayContext.Provider value={{ expanded, open, close }}>
      {children}
    </ArticleOverlayContext.Provider>
  )
}

export function useArticleOverlay() {
  const ctx = useContext(ArticleOverlayContext)
  if (!ctx) throw new Error('useArticleOverlay must be used within ArticleOverlayProvider')
  return ctx
}
