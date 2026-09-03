import { CATEGORY_LABELS, CATEGORY_LABELS_EN, CATEGORY_COLORS } from '@/constants/categories'
import type { NewsCategory } from '@/types/news'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/LanguageContext'

interface CategoryBadgeProps {
  category: NewsCategory
  className?: string
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  const { language } = useLanguage()
  return (
    <span
      style={{ color: CATEGORY_COLORS[category] }}
      className={cn(
        'inline-flex items-center font-ui text-[11px] font-semibold uppercase tracking-[0.14em]',
        className,
      )}
    >
      {language === 'en'
  ? CATEGORY_LABELS_EN[category] ?? category
  : CATEGORY_LABELS[category] ?? category}
    </span>
  )
}
