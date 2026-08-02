import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useArticleOverlay } from '@/context/ArticleOverlayContext'
import { ArticleContent } from '@/components/news/ArticleContent'

export function ArticleOverlay() {
  const { expanded, close } = useArticleOverlay()
  const [showContent, setShowContent] = useState(false)
  const isClosingRef = useRef(false)

  useEffect(() => {
    if (expanded) isClosingRef.current = false
  }, [expanded])

  const handleClose = () => {
    isClosingRef.current = true
    setShowContent(false)
    close()
  }

  return (
    <AnimatePresence>
      {expanded && (
        <>
          {/* Véu de fundo que aprofunda a sensação de foco */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[85] bg-black/50"
          />

          <motion.div
            key={expanded.article.id}
            initial={{
              position: 'fixed',
              top: expanded.origin.top,
              left: expanded.origin.left,
              width: expanded.origin.width,
              height: expanded.origin.height,
              borderRadius: 10,
              zIndex: 90,
            }}
            animate={{
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              borderRadius: 0,
            }}
            exit={{
              top: expanded.origin.top,
              left: expanded.origin.left,
              width: expanded.origin.width,
              height: expanded.origin.height,
              borderRadius: 10,
            }}
            transition={{
              type: 'spring',
              stiffness: 190,
              damping: 26,
              mass: 1,
            }}
            onAnimationComplete={() => {
              if (!isClosingRef.current) setShowContent(true)
            }}
            className="overflow-y-auto bg-[var(--color-paper)] shadow-2xl"
          >
            <AnimatePresence>
              {showContent && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ArticleContent
                    article={expanded.article}
                    onBack={handleClose}
                    backLabel="Voltar para todas as notícias"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
