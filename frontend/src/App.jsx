import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import LoadingScreen from '@/components/ui/LoadingScreen'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import PageTransition from '@/components/ui/PageTransition'

const Interface = lazy(() => import('@/pages/Interface'))
const Capabilities = lazy(() => import('@/pages/Capabilities'))
const VerifiedOutcomes = lazy(() => import('@/pages/VerifiedOutcomes'))
const Operators = lazy(() => import('@/pages/Operators'))
const Initiate = lazy(() => import('@/pages/Initiate'))
const Infrastructure = lazy(() => import('@/pages/Infrastructure'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function LenisProvider({ children }) {
  useEffect(() => {
    let lenis
    let rafId

    async function initLenis() {
      try {
        const LenisModule = await import('lenis')
        const LenisClass = LenisModule.default || LenisModule.Lenis || LenisModule
        lenis = new LenisClass({
          duration: 1.4,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 0.8,
          touchMultiplier: 1.5,
        })

        function raf(time) {
          lenis.raf(time)
          rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)
      } catch (e) {
        console.warn('Lenis smooth scroll unavailable, using native scroll.', e)
      }
    }

    initLenis()

    return () => {
      cancelAnimationFrame(rafId)
      if (lenis) lenis.destroy()
    }
  }, [])

  return children
}

function PageLoader() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: '#0A0A0F' }}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #1A4A7A, #2563EB)' }}
        >
          <span className="text-white font-display font-black text-2xl">A</span>
        </div>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: '#1A4A7A',
                animation: `blink 1.2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Suspense fallback={<PageLoader />}>
                <Interface />
              </Suspense>
            </PageTransition>
          }
        />
        <Route
          path="/capabilities"
          element={
            <PageTransition>
              <Suspense fallback={<PageLoader />}>
                <Capabilities />
              </Suspense>
            </PageTransition>
          }
        />
        <Route
          path="/verified-outcomes"
          element={
            <PageTransition>
              <Suspense fallback={<PageLoader />}>
                <VerifiedOutcomes />
              </Suspense>
            </PageTransition>
          }
        />
        <Route
          path="/operators"
          element={
            <PageTransition>
              <Suspense fallback={<PageLoader />}>
                <Operators />
              </Suspense>
            </PageTransition>
          }
        />
        <Route
          path="/initiate"
          element={
            <PageTransition>
              <Suspense fallback={<PageLoader />}>
                <Initiate />
              </Suspense>
            </PageTransition>
          }
        />
        <Route
          path="/infrastructure"
          element={
            <PageTransition>
              <Suspense fallback={<PageLoader />}>
                <Infrastructure />
              </Suspense>
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center text-center px-6"
      style={{ background: '#0A0A0F' }}
    >
      <div>
        <div
          className="text-9xl font-display font-black mb-6"
          style={{
            background: 'linear-gradient(135deg, #1A4A7A, #2563EB)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          404
        </div>
        <h1 className="text-3xl font-display font-bold text-white mb-4">
          Page not found
        </h1>
        <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.45)' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white"
          style={{ background: 'linear-gradient(135deg, #1A4A7A, #2563EB)' }}
        >
          Return Home
        </a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <LenisProvider>
        <LoadingScreen />
        <ScrollProgress />
        <ScrollToTop />
        <Navbar />
        <main id="main-content" role="main">
          <AnimatedRoutes />
        </main>
        <Footer />
      </LenisProvider>
    </Router>
  )
}