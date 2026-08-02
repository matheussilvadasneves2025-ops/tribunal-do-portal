import { motion } from 'framer-motion'
import { PLACEHOLDER_IMAGES, PLACEHOLDER_HEADLINES } from '@/constants/news'

interface NewsCardPlaceholderProps {
  index: number
}

export function NewsCardPlaceholder({ index }: NewsCardPlaceholderProps) {
  const image = PLACEHOLDER_IMAGES[index % PLACEHOLDER_IMAGES.length]
  const headline = PLACEHOLDER_HEADLINES[index % PLACEHOLDER_HEADLINES.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.05 }}
      className="flex cursor-default flex-col gap-3"
      aria-hidden="true"
    >
      <div className="aspect-[16/10] w-full overflow-hidden rounded-sm bg-[var(--color-paper-dark)]">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover grayscale-[15%] opacity-90"
        />
      </div>
      <h4 className="font-editorial text-base font-semibold leading-snug text-[var(--color-ink-soft)]">
        {headline}
      </h4>
    </motion.div>
  )
}
