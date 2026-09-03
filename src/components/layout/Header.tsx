import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { SearchBar } from '@/components/search/SearchBar'
import { Sidebar } from './Sidebar'
import { LoginButton } from './LoginButton'
import { LanguageToggle } from '@/components/ui/LanguageToggle'
import { SITE_NAME, SITE_TAGLINE, SITE_LOGO } from '@/constants/site'

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-30 border-b border-[var(--color-line)] bg-[var(--color-paper)]/95 backdrop-blur-md transition-shadow duration-300"
        style={isScrolled ? { boxShadow: '0 4px 20px -8px rgba(0,0,0,0.15)' } : undefined}
      >
        <motion.div
          animate={{ paddingTop: isScrolled ? 10 : 16, paddingBottom: isScrolled ? 10 : 16 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="mx-auto flex max-w-7xl items-center gap-6 px-6"
        >
          <button
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Abrir menu"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[var(--color-ink)] transition-colors hover:bg-[var(--color-paper-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
          >
            <Menu size={20} strokeWidth={1.75} />
          </button>

          <Link
            to="/"
            className="group flex shrink-0 items-center gap-2.5 leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)] focus-visible:outline-offset-4 rounded-sm"
          >
            <motion.img
              src={SITE_LOGO}
              alt=""
              whileHover={{ rotate: -6, scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="h-9 w-9 object-contain"
            />
            <span>
              <span className="block font-editorial text-lg font-bold tracking-tight text-[var(--color-ink)] md:text-xl">
                {SITE_NAME}
              </span>
              <span className="hidden font-ui text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-muted)] sm:block">
                {SITE_TAGLINE}
              </span>
            </span>
          </Link>

          <SearchBar />
          
          <div className="ml-auto flex shrink-0 items-center gap-3">
            <LanguageToggle />
            <LoginButton />
          </div>

          
        </motion.div>
      </motion.header>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  )
}
