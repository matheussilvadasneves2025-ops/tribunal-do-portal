import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function NotFound() {
  return (
    <main className="mx-auto flex max-w-xl flex-col items-center px-5 py-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-editorial text-6xl font-bold text-[var(--color-gold)]">404</p>
        <h1 className="mt-4 font-editorial text-2xl font-bold text-[var(--color-ink)]">
          Documento não encontrado
        </h1>
        <p className="mt-3 font-ui text-sm text-[var(--color-ink-muted)]">
          Este arquivo pode ter sido perdido nos registros históricos.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block font-ui text-sm font-medium text-[var(--color-gold)] hover:underline"
        >
          Voltar para a página inicial
        </Link>
      </motion.div>
    </main>
  )
}
