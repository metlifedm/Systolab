import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X, ArrowRight, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Interface', path: '/' },
  { label: 'Capabilities', path: '/capabilities' },
  { label: 'Outcomes', path: '/verified-outcomes' },
  { label: 'Operators', path: '/operators' },
  { label: 'Infrastructure', path: '/infrastructure' },
]

function MagneticButton({ children, className, onClick }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'translate(0px, 0px)'
      ref.current.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
    }
  }

  const handleMouseEnter = () => {
    if (ref.current) {
      ref.current.style.transition = 'transform 0.1s ease'
    }
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={className}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('/')
  const location = useLocation()
  const { scrollY } = useScroll()

  useEffect(() => {
    setActiveLink(location.pathname)
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (y) => {
      setIsScrolled(y > 20)
    })
    return unsubscribe
  }, [scrollY])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        className="fixed top-0 inset-x-0 z-[100]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <motion.div
          className="mx-4 mt-4 rounded-2xl transition-all duration-500"
          animate={{
            background: isScrolled
              ? 'rgba(10, 10, 15, 0.85)'
              : 'rgba(10, 10, 15, 0.0)',
            borderColor: isScrolled
              ? 'rgba(255, 255, 255, 0.06)'
              : 'rgba(255, 255, 255, 0)',
            backdropFilter: isScrolled ? 'blur(30px)' : 'blur(0px)',
          }}
          style={{
            border: '1px solid',
            WebkitBackdropFilter: isScrolled ? 'blur(30px)' : 'blur(0px)',
          }}
        >
          <nav
            className="flex items-center justify-between px-6 py-3"
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group" aria-label="APEX Digital Home">
              <motion.div
                className="relative w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #1A4A7A, #2563EB)' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-white font-display font-black text-lg">A</span>
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, #1A4A7A, #2563EB)',
                    filter: 'blur(8px)',
                  }}
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <div>
                <span className="font-display font-bold text-white text-lg tracking-tight">
                  APEX
                </span>
                <span className="text-white/30 text-xs block leading-none tracking-widest font-mono uppercase">
                  Digital
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg group"
                  style={{
                    color: activeLink === link.path ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.55)',
                  }}
                >
                  {/* Active indicator */}
                  {activeLink === link.path && (
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'rgba(255, 255, 255, 0.06)' }}
                      layoutId="navActive"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10 group-hover:text-white transition-colors">
                    {link.label}
                  </span>
                  {/* Hover underline */}
                  <motion.div
                    className="absolute bottom-1 left-4 right-4 h-px rounded-full"
                    style={{ background: 'linear-gradient(90deg, #1A4A7A, #2563EB)' }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <MagneticButton>
                <Link
                  to="/initiate"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #1A4A7A, #2563EB)',
                    boxShadow: '0 0 20px rgba(26, 74, 122, 0.3)',
                  }}
                >
                  <Zap size={14} />
                  <span>Initiate</span>
                  <ArrowRight size={14} />
                </Link>
              </MagneticButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
              style={{ background: 'rgba(255, 255, 255, 0.05)' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} className="text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} className="text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </motion.div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[90] lg:hidden mobile-menu-overlay"
            style={{ background: 'rgba(10, 10, 15, 0.97)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background elements */}
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <motion.div
              className="absolute top-20 right-10 w-60 h-60 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(26, 74, 122, 0.3) 0%, transparent 70%)',
              }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative z-10 flex flex-col h-full pt-28 px-8 pb-10">
              {/* Nav links */}
              <nav className="flex flex-col gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={link.path}
                      className="flex items-center justify-between py-4 border-b group"
                      style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className="font-mono text-xs"
                          style={{ color: 'rgba(26, 74, 122, 0.8)' }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span
                          className="text-2xl font-display font-bold transition-colors group-hover:text-white"
                          style={{
                            color: activeLink === link.path
                              ? 'rgba(255,255,255,1)'
                              : 'rgba(255,255,255,0.4)',
                          }}
                        >
                          {link.label}
                        </span>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="text-white/30"
                      >
                        <ArrowRight size={20} />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="flex flex-col gap-4"
              >
                <Link
                  to="/initiate"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #1A4A7A, #2563EB)' }}
                >
                  <Zap size={16} />
                  <span>Start Your Project</span>
                  <ArrowRight size={16} />
                </Link>
                <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
                  © 2025 APEX Digital. All rights reserved.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}