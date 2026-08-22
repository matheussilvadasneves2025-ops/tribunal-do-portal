import { motion } from 'framer-motion'
import { SITE_NAME, SITE_DESCRIPTION } from '@/constants/site'

export function SobreProjeto() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-20 md:px-8 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="font-ui text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
          Sobre o Projeto
        </p>
        <h1 className="mt-3 font-editorial text-3xl font-bold text-[var(--color-ink)] md:text-4xl">
          {SITE_NAME}
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="mt-12 flex flex-col gap-6"
      >
        <p className="font-editorial text-lg leading-[1.85] text-[var(--color-ink-soft)]">
          {SITE_DESCRIPTION}
        </p>
        <p className="font-editorial text-lg leading-[1.85] text-[var(--color-ink-soft)]">
          O projeto reconstrói, em formato de portal jornalístico, a
          reconstituição teatral do Tribunal Militar Internacional que julgou
          líderes da Alemanha nazista após a Segunda Guerra Mundial. Cada
          matéria, perfil e dado apresentado aqui integra uma simulação
          acadêmica com fins didáticos.
        </p>
        <div className="rounded-sm border border-[var(--color-line-strong)] bg-[var(--color-paper-dark)] px-5 py-4">
          <p className="font-ui text-sm leading-relaxed text-[var(--color-ink-muted)]">
            Nenhuma fala atribuída neste site a figuras históricas específicas
            é uma citação real, salvo quando explicitamente identificada como
            tal e devidamente creditada à fonte original.
          </p>
        </div>
      </motion.div>
    </main>
  )
}
