import { motion } from 'framer-motion'
import type { RefObject } from 'react'
import { useReadingProgress } from '@/hooks/useReadingProgress'

interface ReadingProgressBarProps {
  targetRef: RefObject<HTMLElement | null>
}

export function ReadingProgressBar({ targetRef }: ReadingProgressBarProps) {
  const progress = useReadingProgress(targetRef)

  return (
    <div
      className="fixed left-0 top-0 z-40 h-[3px] w-full bg-transparent"
      role="progressbar"
      aria-label="Progresso de leitura"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className="h-full bg-[var(--color-gold)]"
        style={{ scaleX: progress, transformOrigin: 'left' }}
      />
    </div>
  )
}
