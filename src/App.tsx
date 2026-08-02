import { Suspense, lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CinematicIntro } from '@/components/intro/CinematicIntro'
import { useIntroSession } from '@/hooks/useIntroSession'
import { Skeleton } from '@/components/ui/Skeleton'
import { AuthProvider } from '@/context/AuthContext'
import { ArticleOverlayProvider } from '@/context/ArticleOverlayContext'
import { ArticleOverlay } from '@/components/news/ArticleOverlay'
import { ThemeProvider } from '@/context/ThemeContext'

const Home = lazy(() => import('@/pages/Home').then((m) => ({ default: m.Home })))
const Article = lazy(() => import('@/pages/Article').then((m) => ({ default: m.Article })))
const AllNews = lazy(() => import('@/pages/AllNews').then((m) => ({ default: m.AllNews })))
const Credits = lazy(() => import('@/pages/Credits').then((m) => ({ default: m.Credits })))
const NotFound = lazy(() => import('@/pages/NotFound').then((m) => ({ default: m.NotFound })))

function PageFallback() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="mt-6 h-64 w-full" />
    </div>
  )
}

function App() {
  const { shouldShowIntro, completeIntro } = useIntroSession()
  const location = useLocation()

  return (
    <ThemeProvider>
      <AuthProvider>
        <ArticleOverlayProvider>
          <div className="bg-paper-texture flex min-h-screen flex-col bg-[var(--color-paper)]">
            <AnimatePresence mode="wait">
              {shouldShowIntro && <CinematicIntro onComplete={completeIntro} />}
            </AnimatePresence>

            {!shouldShowIntro && (
              <>
                <Header />
                <div className="flex-1">
                  <Suspense fallback={<PageFallback />}>
                    <AnimatePresence mode="wait">
                      <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/materia/:slug" element={<Article />} />
                        <Route path="/materias" element={<AllNews />} />
                        <Route path="/creditos" element={<Credits />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </AnimatePresence>
                  </Suspense>
                </div>
                <Footer />
                <ArticleOverlay />
              </>
            )}
          </div>
        </ArticleOverlayProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
