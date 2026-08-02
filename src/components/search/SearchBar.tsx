import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { useDebouncedValue } from '@/hooks/useDebouncedValue'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { newsService } from '@/services/newsService'
import type { NewsArticle } from '@/types/news'
import { CategoryBadge } from '@/components/news/CategoryBadge'

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<NewsArticle[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const debouncedQuery = useDebouncedValue(query, 200)

  useOnClickOutside(containerRef, () => setIsFocused(false))

  useEffect(() => {
    let active = true
    if (!debouncedQuery.trim()) {
      setResults([])
      return
    }
    setIsSearching(true)
    newsService.searchArticles(debouncedQuery).then((found) => {
      if (active) {
        setResults(found)
        setIsSearching(false)
      }
    })
    return () => {
      active = false
    }
  }, [debouncedQuery])

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-xl">
      <div className="flex items-center gap-2.5 rounded-full border border-[var(--color-ink)]/15 bg-[var(--color-paper-dark)] px-4 py-2.5 transition-colors focus-within:border-[var(--color-gold)]">
        <Search size={17} strokeWidth={1.75} className="shrink-0 text-[var(--color-ink-muted)]" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Pesquisar por título... ex: Alemanha"
          aria-label="Pesquisar matérias pelo título"
          className="w-full bg-transparent font-ui text-sm text-[var(--color-ink)] outline-none placeholder:text-[var(--color-ink-muted)]"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            aria-label="Limpar pesquisa"
            className="shrink-0 text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-gold)]"
          >
            <X size={15} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isFocused && query.trim() && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-md border border-[var(--color-line)] bg-[var(--color-paper)] shadow-xl"
          >
            {isSearching ? (
              <p className="p-4 font-ui text-sm text-[var(--color-ink-muted)]">Buscando...</p>
            ) : results.length === 0 ? (
              <p className="p-4 font-ui text-sm text-[var(--color-ink-muted)]">
                Nenhum título encontrado para "{query}".
              </p>
            ) : (
              <ul>
                {results.map((article) => (
                  <li key={article.id} className="border-b border-[var(--color-line)] last:border-0">
                    <Link
                      to={`/materia/${article.slug}`}
                      onClick={() => setIsFocused(false)}
                      className="block px-4 py-3 transition-colors hover:bg-[var(--color-paper-dark)]"
                    >
                      <CategoryBadge category={article.category} className="mb-1" />
                      <p className="font-editorial text-sm font-medium text-[var(--color-ink)]">
                        {article.headline}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
