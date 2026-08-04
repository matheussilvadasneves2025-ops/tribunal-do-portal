import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SITE_NAME, SITE_LOGO } from '@/constants/site'

interface CinematicIntroProps {
  onComplete: () => void
}

type IntroStage =
  | 'black'
  | 'logo'
  | 'title'
  | 'edition'
  | 'subject'
  | 'disclaimer'
  | 'hold'
  | 'zoom'
  | 'done'

const STAGE_DURATIONS: Record<Exclude<IntroStage, 'done'>, number> = {
  black: 600,
  logo: 1900,
  title: 2000,
  edition: 900,
  subject: 1200,
  disclaimer: 1600,
  hold: 1000,
  zoom: 700,
}

const STAGE_ORDER: IntroStage[] = [
  'black',
  'logo',
  'title',
  'edition',
  'subject',
  'disclaimer',
  'hold',
  'zoom',
  'done',
]

export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [stage, setStage] = useState<IntroStage>('black')

  useEffect(() => {
    if (stage === 'done') {
      const finalDelay = setTimeout(onComplete, 550)
      return () => clearTimeout(finalDelay)
    }

    const currentIndex = STAGE_ORDER.indexOf(stage)
    const duration = STAGE_DURATIONS[stage as Exclude<IntroStage, 'done'>]
    const timeout = setTimeout(() => {
      setStage(STAGE_ORDER[currentIndex + 1])
    }, duration)

    return () => clearTimeout(timeout)
  }, [stage, onComplete])

  const handleSkip = () => setStage('done')

  const stageIndex = STAGE_ORDER.indexOf(stage)
  const isVisibleFrom = (key: IntroStage) => stageIndex >= STAGE_ORDER.indexOf(key)

  return (
    <motion.div
      key="intro"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[var(--color-dark-bg)] bg-noise"
      role="dialog"
      aria-label="Introdução cinematográfica"
    >
      {/* Varredura de luz sutil, só durante a revelação da logo */}
      <AnimatePresence>
        {stage === 'logo' && (
          <motion.div
            initial={{ x: '-120%', opacity: 0 }}
            animate={{ x: '120%', opacity: [0, 0.5, 0] }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
            className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-[var(--color-gold-soft)]/15 to-transparent"
          />
        )}
      </AnimatePresence>

      {/* Brilho radial atrás da logo, com pulsação contínua e suave */}
      <AnimatePresence>
        {(stage === 'logo' || stage === 'title' || stage === 'edition') && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: [1, 1.08, 1] }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: 'easeOut' },
              scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
            className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-[var(--color-gold-soft)]/10 blur-3xl"
          />
        )}
      </AnimatePresence>

      <motion.div
        animate={stage === 'zoom' ? { scale: 1.07 } : { scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col items-center px-6 text-center"
      >
        <AnimatePresence>
          {isVisibleFrom('logo') && (
            <motion.img
              src={SITE_LOGO}
              alt=""
              initial={{ opacity: 0, scale: 0.75, filter: 'brightness(2) invert(1)' }}
              animate={{ opacity: 0.95, scale: 1, filter: 'brightness(1.4) invert(1)' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 h-20 w-20 object-contain md:h-28 md:w-28"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isVisibleFrom('logo') && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
              className="mb-6 h-px w-20 bg-[var(--color-gold-soft)]"
            />
          )}
        </AnimatePresence>

        {isVisibleFrom('title') && (
          <TypewriterText
            key="masthead"
            text={SITE_NAME.toUpperCase()}
            className="font-editorial text-3xl font-bold tracking-[0.04em] text-[#f6f0e2] md:text-5xl"
          />
        )}

        <AnimatePresence>
          {isVisibleFrom('edition') && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-5 font-ui text-xs uppercase tracking-[0.35em] text-[var(--color-gold-soft)] md:text-sm"
            >
              Edição Especial
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isVisibleFrom('subject') && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-2 font-editorial text-lg italic text-[#f6f0e2]/85 md:text-xl"
            >
              Tribunal da Segunda Guerra Mundial
            </motion.p>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isVisibleFrom('disclaimer') && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="mt-8 max-w-md font-ui text-[11px] leading-relaxed text-[#f6f0e2]/50"
            >
              Todos os fatos apresentados neste jornal fazem parte de uma
              simulação acadêmica baseada em acontecimentos históricos.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 font-ui text-xs uppercase tracking-[0.14em] text-[#f6f0e2]/40 transition-colors hover:text-[#f6f0e2]/80 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#f6f0e2]/60"
      >
        Pular introdução →
      </button>
    </motion.div>
  )
}

function TypewriterText({ text, className }: { text: string; className?: string }) {
  return (
    <motion.h1 className={className} initial="hidden" animate="visible" aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 8, filter: 'blur(4px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { delay: i * 0.045, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="inline-block"
          aria-hidden="true"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
  )
}
