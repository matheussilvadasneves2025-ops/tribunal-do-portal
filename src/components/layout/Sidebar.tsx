import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, Home, Newspaper, Award, Landmark, Users, Info, Sun, Moon } from 'lucide-react'
import { CATEGORIES, CATEGORY_COLORS } from '@/constants/categories'
import { SITE_NAME } from '@/constants/site'
import { useTheme } from '@/context/ThemeContext'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const ACTIVE_LINKS = [
  { label: 'Início', to: '/', icon: Home },
  { label: 'Todas as Notícias', to: '/materias', icon: Newspaper },
  { label: 'Créditos', to: '/creditos', icon: Award },
]

const INACTIVE_ITEMS = [
  { label: 'Linha do Tempo do Julgamento', icon: Landmark },
  { label: 'Perfis dos Réus', icon: Users },
  { label: 'Sobre o Projeto', icon: Info },
]

function NavLinkItem({
  label,
  to,
  Icon,
  delay,
  onClose,
}: {
  label: string
  to: string
  Icon: typeof Home
  delay: number
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      <Link
        to={to}
        onClick={onClose}
        className="group relative flex items-center gap-3 border-b border-[var(--color-line)] py-4 font-editorial text-lg transition-colors hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
      >
        <Icon size={18} strokeWidth={1.75} />
        <span className="relative">
          {label}
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
        </span>
      </Link>
    </motion.div>
  )
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            className="fixed left-0 top-0 z-50 flex h-full w-[min(340px,88vw)] flex-col overflow-y-auto bg-[var(--color-paper)] p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <span className="font-editorial text-lg font-semibold">{SITE_NAME}</span>
              <button
                onClick={onClose}
                aria-label="Fechar menu"
                className="rounded-full p-2 transition-colors hover:bg-[var(--color-paper-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-1">
              {ACTIVE_LINKS.map((link, i) => (
                <NavLinkItem
                  key={link.to}
                  label={link.label}
                  to={link.to}
                  Icon={link.icon}
                  delay={0.08 + i * 0.05}
                  onClose={onClose}
                />
              ))}
            </nav>

            {/* Alternador de tema */}
            <div className="mt-8 border-b border-[var(--color-line)] pb-6">
              <p className="mb-3 font-ui text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
                Aparência
              </p>
              <button
                onClick={toggleTheme}
                className="flex w-full items-center justify-between rounded-sm border border-[var(--color-line-strong)] px-4 py-3 transition-colors hover:border-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
              >
                <span className="flex items-center gap-2.5 font-ui text-sm text-[var(--color-ink)]">
                  {theme === 'paper' ? (
                    <>
                      <Sun size={16} /> Papel Antigo (padrão)
                    </>
                  ) : (
                    <>
                      <Moon size={16} /> Tema Escuro
                    </>
                  )}
                </span>
                <motion.span
                  animate={{ x: theme === 'dark' ? 16 : 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  className="flex h-5 w-9 shrink-0 items-center rounded-full bg-[var(--color-ink)]/15 p-0.5"
                >
                  <motion.span
                    layout
                    className="h-4 w-4 rounded-full bg-[var(--color-gold)]"
                  />
                </motion.span>
              </button>
            </div>

            <div className="mt-6">
              <p className="mb-3 font-ui text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
                Em Breve
              </p>
              <div className="flex flex-col gap-1">
                {INACTIVE_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className="flex cursor-default items-center gap-3 py-2.5 font-ui text-sm text-[var(--color-ink-muted)]/70"
                  >
                    <item.icon size={16} strokeWidth={1.75} />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-3 font-ui text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
                Categorias
              </p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <span
                    key={category.id}
                    style={{ borderColor: CATEGORY_COLORS[category.id], color: CATEGORY_COLORS[category.id] }}
                    className="rounded-full border px-3 py-1 font-ui text-xs"
                  >
                    {category.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
