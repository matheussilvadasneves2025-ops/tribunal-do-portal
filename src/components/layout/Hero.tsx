import { motion } from 'framer-motion'
import { SITE_LOGO } from '@/constants/site'

const HEADLINE = 'O Tribunal que redefiniu a justiça internacional'

export function Hero() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)]">
      <div className="mx-auto flex max-w-7xl items-center gap-10 px-5 py-14 md:px-8 md:py-20">
        <div className="min-w-0 flex-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-ui text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]"
          >
            Edição Especial
          </motion.p>

          <h1 className="mt-4 max-w-3xl text-balance font-editorial text-4xl font-bold leading-[1.08] tracking-tight text-[var(--color-ink)] md:text-6xl">
            {HEADLINE.split(' ').map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block overflow-hidden align-top">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    duration: 0.6,
                    delay: 0.25 + wordIndex * 0.045,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
            style={{ transformOrigin: 'left' }}
            className="mt-6 h-px w-24 bg-[var(--color-gold)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-6 max-w-2xl font-ui text-base leading-relaxed text-[var(--color-ink-muted)] md:text-lg"
          >
            Acompanhe a cobertura especial sobre o Tribunal Militar Internacional
            de Nuremberg, com sessões, testemunhos, argumentos jurídicos e a
            repercussão de um processo que mudaria para sempre o direito
            internacional.
          </motion.p>
        </div>

        <motion.img
          src={SITE_LOGO}
          alt="Logo do Tribunal Distrital"
          initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="hidden h-40 w-40 shrink-0 object-contain opacity-90 lg:block xl:h-48 xl:w-48"
        />
      </div>
    </section>
  )
}
