import { CATEGORY_LABELS, CATEGORY_COLORS } from '@/constants/categories'
import type { NewsCategory } from '@/types/news'
import { cn } from '@/lib/utils'

interface CategoryBadgeProps {
  category: NewsCategory
  className?: string
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  return (
    <span
      style={{ color: CATEGORY_COLORS[category] }}
      className={cn(
        'inline-flex items-center font-ui text-[11px] font-semibold uppercase tracking-[0.14em]',
        className,
      )}
    >
      {CATEGORY_LABELS[category] ?? category}
    </span>
  )
}
