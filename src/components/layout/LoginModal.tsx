import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { X, User, Lock, Mail, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useAuth } from '@/context/AuthContext'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const { signUp, logIn } = useAuth()

  const resetAndClose = () => {
    setEmail('')
    setPassword('')
    setError(null)
    onClose()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const result = mode === 'login' ? logIn(email, password) : signUp(email, password)
    if (!result.success) {
      setError(result.error ?? 'Não foi possível continuar.')
      return
    }
    resetAndClose()
  }

  const switchMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login')
    setError(null)
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={mode === 'login' ? 'Entrar na conta' : 'Criar conta'}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            className="fixed left-1/2 top-1/2 z-[101] max-h-[90vh] w-[min(400px,90vw)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md border border-[var(--color-line)] bg-[var(--color-paper)] p-8 shadow-2xl"
          >
            <button
              onClick={resetAndClose}
              aria-label="Fechar"
              className="absolute right-5 top-5 rounded-full p-1.5 text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-paper-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
            >
              <X size={18} />
            </button>

            <div className="mb-6 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-ink)]">
                <User size={22} className="text-[var(--color-paper)]" strokeWidth={1.5} />
              </div>
            </div>

            <h2 className="text-center font-editorial text-2xl font-bold text-[var(--color-ink)]">
              {mode === 'login' ? 'Bem-vindo de volta' : 'Criar sua conta'}
            </h2>
            <p className="mt-2 text-center font-ui text-sm text-[var(--color-ink-muted)]">
              {mode === 'login'
                ? 'Entre para acompanhar a cobertura completa.'
                : 'Cadastre-se para acompanhar esta edição.'}
            </p>

            <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="font-ui text-xs font-medium uppercase tracking-wide text-[var(--color-ink-muted)]">
                  E-mail
                </span>
                <div className="flex items-center gap-2 rounded-sm border border-[var(--color-line-strong)] px-3 py-2.5 transition-colors focus-within:border-[var(--color-gold)]">
                  <Mail size={16} className="text-[var(--color-ink-muted)]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full bg-transparent font-ui text-sm outline-none placeholder:text-[var(--color-ink-muted)]/60"
                  />
                </div>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="font-ui text-xs font-medium uppercase tracking-wide text-[var(--color-ink-muted)]">
                  Senha
                </span>
                <div className="flex items-center gap-2 rounded-sm border border-[var(--color-line-strong)] px-3 py-2.5 transition-colors focus-within:border-[var(--color-gold)]">
                  <Lock size={16} className="text-[var(--color-ink-muted)]" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="mínimo 6 caracteres"
                    className="w-full bg-transparent font-ui text-sm outline-none placeholder:text-[var(--color-ink-muted)]/60"
                  />
                </div>
              </label>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-2 rounded-sm bg-[var(--color-gold)]/10 px-3 py-2 text-[var(--color-gold)]"
                  >
                    <AlertCircle size={14} className="shrink-0" />
                    <span className="font-ui text-xs">{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <Button type="submit" className="mt-2 w-full">
                {mode === 'login' ? 'Entrar' : 'Criar conta'}
              </Button>
            </form>

            <p className="mt-6 text-center font-ui text-sm text-[var(--color-ink-muted)]">
              {mode === 'login' ? 'Ainda não tem conta?' : 'Já tem uma conta?'}{' '}
              <button
                onClick={switchMode}
                className="font-medium text-[var(--color-gold)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
              >
                {mode === 'login' ? 'Cadastre-se' : 'Entrar'}
              </button>
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  )
}
