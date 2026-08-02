import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      role="status"
      aria-label="Carregando conteúdo"
      className={cn(
        'animate-pulse rounded-md bg-[var(--color-line)]/60',
        className,
      )}
    />
  )
}
