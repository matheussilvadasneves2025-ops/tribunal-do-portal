import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, Home, Newspaper, Award, Landmark, Users, Info, Sun, Moon } from 'lucide-react'
import { CATEGORIES, CATEGORY_COLORS, CATEGORY_LABELS_EN } from '@/constants/categories'
import { SITE_NAME } from '@/constants/site'
import { useTheme } from '@/context/ThemeContext'
import { useT, type UIKey } from '@/i18n/ui'
import { useLanguage } from '@/context/LanguageContext'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const ACTIVE_LINKS = [
  { key: 'navHome', to: '/', icon: Home },
  { key: 'navAllNews', to: '/materias', icon: Newspaper },
  { key: 'navTimeline', to: '/linha-do-tempo', icon: Landmark },
  { key: 'navDefendants', to: '/perfis-dos-reus', icon: Users },
  { key: 'navStructure', to: '/estrutura-do-tribunal', icon: Users },
  { key: 'navAbout', to: '/sobre', icon: Info },
  { key: 'navCredits', to: '/creditos', icon: Award },
]

function NavLinkItem({
  labelKey,
  to,
  Icon,
  delay,
  onClose,
}: {
  labelKey: UIKey
  to: string
  Icon: typeof Home
  delay: number
  onClose: () => void
}) {
    const t = useT()
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
          {t(labelKey)}
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
        </span>
      </Link>
    </motion.div>
  )
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { theme, toggleTheme } = useTheme()
  const t = useT()
  const { language } = useLanguage()

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
            aria-label={t('navMenuLabel')}
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
                aria-label={t('closeMenu')}
                className="rounded-full p-2 transition-colors hover:bg-[var(--color-paper-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-1">
              {ACTIVE_LINKS.map((link, i) => (
                <NavLinkItem
                  key={link.to}
                  labelKey={link.key as UIKey}
                  to={link.to}
                  Icon={link.icon}
                  delay={0.06 + i * 0.04}
                  onClose={onClose}
                />
              ))}
            </nav>

            {/* Alternador de tema */}
            <div className="mt-8 border-b border-[var(--color-line)] pb-6">
              <p className="mb-3 font-ui text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
                {t('appearance')}
              </p>
              <button
                onClick={toggleTheme}
                className="flex w-full items-center justify-between rounded-sm border border-[var(--color-line-strong)] px-4 py-3 transition-colors hover:border-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
              >
                <span className="flex items-center gap-2.5 font-ui text-sm text-[var(--color-ink)]">
                  {theme === 'paper' ? (
                    <>
                      <Sun size={16} /> {t('themePaper')}
                    </>
                  ) : (
                    <>
                      <Moon size={16} /> {t('themeDark')}
                    </>
                  )}
                </span>
                <span className="flex h-5 w-9 shrink-0 items-center rounded-full bg-[var(--color-ink)]/15 p-0.5">
                  <motion.span
                    animate={{ x: theme === 'dark' ? 16 : 0 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                    className="h-4 w-4 rounded-full bg-[var(--color-gold)]"
                  />
                </span>
              </button>
            </div>

            <div className="mt-8">
              <p className="mb-3 font-ui text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
                {t('categories')}
              </p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <span
                    key={category.id}
                    style={{ borderColor: CATEGORY_COLORS[category.id], color: CATEGORY_COLORS[category.id] }}
                    className="rounded-full border px-3 py-1 font-ui text-xs"
                  >
                    {language === 'en' ? CATEGORY_LABELS_EN[category.id] : category.label}
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
