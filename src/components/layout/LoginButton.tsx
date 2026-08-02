import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, LogOut } from 'lucide-react'
import { LoginModal } from './LoginModal'
import { useAuth } from '@/context/AuthContext'

export function LoginButton() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logOut } = useAuth()

  if (user) {
    const initials = user.email.slice(0, 2).toUpperCase()
    return (
      <div className="flex items-center gap-2 rounded-full border border-[var(--color-ink)]/15 py-1.5 pl-1.5 pr-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-gold)] font-ui text-[10px] font-bold text-white">
          {initials}
        </span>
        <span className="hidden max-w-[120px] truncate font-ui text-sm text-[var(--color-ink)] sm:inline">
          {user.email}
        </span>
        <button
          onClick={logOut}
          aria-label="Sair da conta"
          className="ml-1 flex h-6 w-6 items-center justify-center rounded-full text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-paper-dark)] hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
        >
          <LogOut size={13} />
        </button>
      </div>
    )
  }

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-label="Entrar ou criar conta"
        className="flex items-center gap-2 rounded-full border border-[var(--color-ink)]/15 py-1.5 pl-1.5 pr-4 font-ui text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-ink)] text-[var(--color-paper)]">
          <User size={14} strokeWidth={1.75} />
        </span>
        <span className="hidden sm:inline">Entrar</span>
      </motion.button>

      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
