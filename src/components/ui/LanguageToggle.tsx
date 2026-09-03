import { Languages } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      aria-label={language === 'pt' ? 'Mudar para inglês' : 'Switch to Portuguese'}
      className="flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] px-3 py-2 font-ui text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-ink)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
    >
      <Languages size={15} />

      <span>
        {language === 'pt' ? 'PT' : 'EN'}
      </span>
    </button>
  )
}