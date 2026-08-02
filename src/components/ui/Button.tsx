import { motion } from 'framer-motion'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'ghost' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-ink-soft)]',
  ghost: 'bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-ink)]/5',
  outline:
    'bg-transparent border border-[var(--color-ink)]/25 text-[var(--color-ink)] hover:border-[var(--color-ink)]/60',
}

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5',
        'font-ui text-sm font-medium tracking-wide transition-colors duration-200',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)] focus-visible:outline-offset-2',
        VARIANT_STYLES[variant],
        className,
      )}
      {...(props as any)}
    >
      {children}
    </motion.button>
  )
}
