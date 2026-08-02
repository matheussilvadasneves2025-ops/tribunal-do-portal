import { useEffect, useState } from 'react'

const INTRO_SESSION_KEY = 'tribunal-portal:intro-shown'

/**
 * Controls whether the cinematic intro should play.
 * The intro plays once per browser session (sessionStorage),
 * and reappears naturally on a full page refresh.
 */
export function useIntroSession() {
  const [shouldShowIntro, setShouldShowIntro] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return sessionStorage.getItem(INTRO_SESSION_KEY) !== 'true'
  })

  useEffect(() => {
    if (shouldShowIntro) {
      sessionStorage.setItem(INTRO_SESSION_KEY, 'true')
    }
  }, [shouldShowIntro])

  const completeIntro = () => setShouldShowIntro(false)

  return { shouldShowIntro, completeIntro }
}
