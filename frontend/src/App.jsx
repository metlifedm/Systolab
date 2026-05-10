import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import LoadingScreen from '@/components/ui/LoadingScreen'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import PageTransition from '@/components/ui/PageTransition'
import Capabilities from './pages/Capabilities'
import VerifiedOutcomes from './pages/VerifiedOutcomes'
import Operators from './pages/Operators'
import Initiate from './pages/Initiate'

// Lazy load pages
const Interface = lazy(() => import('@/pages/Interface'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return children
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Suspense fallback={<div className="min-h-screen bg-[#0A0A0F]" />}>
              <Interface />
            </Suspense>
          </PageTransition>
        } />

        <Route path="/capabilities" element={
          <PageTransition>
            <Suspense fallback={<div className="min-h-screen bg-[#0A0A0F]" />}>
              <Capabilities />
            </Suspense>
          </PageTransition>
        } />

        <Route path="/verified-outcomes" element={
          <PageTransition>
            <Suspense fallback={<div className="min-h-screen bg-[#0A0A0F]" />}>
              <VerifiedOutcomes />
            </Suspense>
          </PageTransition>
        } />

        <Route path="/operators" element={
          <PageTransition>
            <Suspense fallback={<div className="min-h-screen bg-[#0A0A0F]" />}>
              <Operators />
            </Suspense>
          </PageTransition>
        } />

        <Route path="/initiate" element={
          <PageTransition>
            <Suspense fallback={<div className="min-h-screen bg-[#0A0A0F]" />}>
              <Initiate />
            </Suspense>
          </PageTransition>
        } />


      </Routes>
    </AnimatePresence>
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
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </LenisProvider>
    </Router>
  )
}
