import { motion } from 'framer-motion'
import { TRIBUNAL_TREES } from '@/constants/tribunal-tree'
import { COUNTRY_PROFILES } from '@/constants/tribunal'
import { OrgChartTree } from '@/components/tribunal/OrgChartTree'

const TREE_LABELS = ['Corte', 'Alemanha · Eixo', 'Estados Unidos · Aliados']

export function EstruturaTribunal() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="font-ui text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
          Estrutura do Tribunal
        </p>
        <h1 className="mt-3 font-editorial text-3xl font-bold text-[var(--color-ink)] md:text-4xl">
          Quem é quem na simulação
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-ui text-sm leading-relaxed text-[var(--color-ink-muted)]">
          Os cargos abaixo foram definidos pela turma para a reconstituição
          teatral do Tribunal Militar Internacional, dividida entre as
          Potências do Eixo e as Potências Aliadas.
        </p>
      </motion.div>

      <div className="mt-16 flex flex-col gap-20">
        {TRIBUNAL_TREES.map((tree, i) => (
          <motion.section
            key={tree.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-6 text-center font-ui text-[11px] uppercase tracking-[0.16em] text-[var(--color-ink-muted)]">
              {TREE_LABELS[i]}
            </p>
            <OrgChartTree root={tree} />
          </motion.section>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="mt-24 text-center"
      >
        <p className="font-ui text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
          Além da Alemanha e dos EUA
        </p>
        <h2 className="mt-3 font-editorial text-2xl font-bold text-[var(--color-ink)] md:text-3xl">
          As demais nações do conflito
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-ui text-sm leading-relaxed text-[var(--color-ink-muted)]">
          A Segunda Guerra Mundial não se resumiu a dois países. Estas nações
          representam o restante do Eixo e dos Aliados, cada uma conectada a
          um dos grandes temas cobertos pelo portal.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {COUNTRY_PROFILES.map((country, i) => (
          <motion.div
            key={country.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.05 * i }}
            className="rounded-sm border border-[var(--color-line)] bg-[var(--color-paper-dark)] p-6"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">
                {country.flagEmoji}
              </span>
              <div>
                <h3 className="font-editorial text-lg font-semibold text-[var(--color-ink)]">
                  {country.country}
                </h3>
                <p className="font-ui text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
                  {country.role}
                </p>
              </div>
            </div>
            <p className="mt-4 font-ui text-sm leading-relaxed text-[var(--color-ink-soft)]">
              {country.summary}
            </p>
            <p className="mt-4 font-ui text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-gold)]">
              {country.relatedTheme}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
