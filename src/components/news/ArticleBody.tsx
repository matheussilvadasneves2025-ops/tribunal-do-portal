import { motion } from 'framer-motion'
import type { ArticleBlock } from '@/types/news'

interface ArticleBodyProps {
  blocks: ArticleBlock[]
}

export function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          {renderBlock(block)}
        </motion.div>
      ))}
    </div>
  )
}

function renderBlock(block: ArticleBlock) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="font-editorial text-lg leading-[1.85] text-[var(--color-ink-soft)] md:text-xl">
          {block.text}
        </p>
      )
    case 'heading':
      return (
        <h2 className="mt-4 font-editorial text-2xl font-bold text-[var(--color-ink)] md:text-3xl">
          {block.text}
        </h2>
      )
    case 'quote':
      return (
        <blockquote className="border-l-2 border-[var(--color-gold)] py-1 pl-6">
          <p className="font-editorial text-xl italic leading-relaxed text-[var(--color-ink)] md:text-2xl">
            "{block.text}"
          </p>
          <cite className="mt-3 block font-ui text-sm not-italic text-[var(--color-ink-muted)]">
            — {block.attribution}
          </cite>
        </blockquote>
      )
    case 'highlight':
      return (
        <div className="rounded-sm border border-[var(--color-line-strong)] bg-[var(--color-paper-dark)] px-5 py-4">
          <p className="font-ui text-sm leading-relaxed text-[var(--color-ink-muted)]">
            {block.text}
          </p>
        </div>
      )
    default:
      return null
  }
}
