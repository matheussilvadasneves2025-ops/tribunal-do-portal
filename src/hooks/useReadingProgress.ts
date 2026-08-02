import { useEffect, useState, type RefObject } from 'react'

export function useReadingProgress(targetRef: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = targetRef.current
      if (!el) return

      const { top, height } = el.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const totalScrollable = height - viewportHeight

      if (totalScrollable <= 0) {
        setProgress(1)
        return
      }

      const scrolled = Math.min(Math.max(-top, 0), totalScrollable)
      setProgress(scrolled / totalScrollable)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [targetRef])

  return progress
}
