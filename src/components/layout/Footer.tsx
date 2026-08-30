import { Link } from 'react-router-dom'
import { ScrollText } from 'lucide-react'
import { SITE_NAME, SITE_DESCRIPTION } from '@/constants/site'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--color-line)] bg-[var(--color-paper-dark)]">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <ScrollText size={20} strokeWidth={1.5} className="text-[var(--color-gold)]" />
              <span className="font-editorial text-lg font-bold text-[var(--color-ink)]">
                {SITE_NAME}
              </span>
            </div>
            <p className="mt-3 font-ui text-sm leading-relaxed text-[var(--color-ink-muted)]">
              {SITE_DESCRIPTION}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h5 className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink)]">
                Navegação
              </h5>
              <ul className="mt-4 space-y-2.5 font-ui text-sm text-[var(--color-ink-muted)]">
                <li><Link to="/" className="transition-colors hover:text-[var(--color-gold)]">Início</Link></li>
                <li><Link to="/materias" className="transition-colors hover:text-[var(--color-gold)]">Todas as Matérias</Link></li>
                <li><Link to="/creditos" className="transition-colors hover:text-[var(--color-gold)]">Créditos</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink)]">
                Sobre o Projeto
              </h5>
              <ul className="mt-4 space-y-2.5 font-ui text-sm text-[var(--color-ink-muted)]">
                <li>Trabalho estudantil</li>
                <li>Jornalismo simulado</li>
                <li>Fins pedagógicos</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--color-line)] pt-6">
          <p className="font-ui text-xs text-[var(--color-ink-muted)]">
            © 2025 {SITE_NAME}. Todos os fatos apresentados fazem parte
            de uma simulação acadêmica baseada em acontecimentos históricos.
          </p>
          <p className="mt-1 font-ui text-xs text-[var(--color-ink-muted)]">
            Todos os direitos reservados a Matheus & Jarvis.
          </p>
        </div>
      </div>
    </footer>
  )
}
