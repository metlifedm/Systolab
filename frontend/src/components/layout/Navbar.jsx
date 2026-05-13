<<<<<<< HEAD
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Interface', path: '/' },
  { label: 'Capabilities', path: '/capabilities' },
  { label: 'Outcomes', path: '/verified-outcomes' },
  { label: 'Operators', path: '/operators' },
  { label: 'Infrastructure', path: '/infrastructure' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        className="fixed top-0 inset-x-0 z-[100]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <div
          className="mx-3 sm:mx-6 mt-4 rounded-2xl transition-all duration-500"
          style={{
            background: isScrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0)',
            border: `1px solid ${isScrolled ? 'rgba(229,229,229,0.8)' : 'transparent'}`,
            backdropFilter: isScrolled ? 'blur(24px)' : 'none',
            WebkitBackdropFilter: isScrolled ? 'blur(24px)' : 'none',
            boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.04)' : 'none',
          }}
        >
          <nav
            className="flex items-center justify-between px-4 sm:px-6 py-3"
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group" aria-label="APEX Digital Home">
              <motion.div
                className="relative w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #1A4A7A, #2563EB)' }}
                whileHover={{ scale: 1.08, rotate: 4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-white font-display font-black text-lg leading-none">A</span>
              </motion.div>
              <div>
                <span className="font-display font-bold text-lg tracking-tight block leading-none"
                  style={{ color: '#1A1A1A' }}>
                  APEX
                </span>
                <span className="text-[10px] tracking-widest font-mono uppercase block leading-none mt-0.5"
                  style={{ color: '#8A8A8A' }}>
                  Digital
                </span>
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.path)
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200 group"
                    style={{ color: active ? '#1A4A7A' : '#5A5A5A' }}
                    onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = '#1A1A1A' }}
                    onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = '#5A5A5A' }}
                  >
                    {active && (
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        style={{ background: 'rgba(26,74,122,0.06)' }}
                        layoutId="navActive"
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                )
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link
                to="/initiate"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #1A4A7A, #2563EB)',
                  boxShadow: '0 4px 14px rgba(26,74,122,0.25)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(26,74,122,0.4)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(26,74,122,0.25)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <Zap size={14} />
                <span>Initiate</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
              style={{ background: '#F1F3F5', border: '1px solid #E5E5E5' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="close"
                    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                    <X size={20} style={{ color: '#1A1A1A' }} />
                  </motion.div>
                ) : (
                  <motion.div key="open"
                    initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                    <Menu size={20} style={{ color: '#1A1A1A' }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[90] lg:hidden"
            style={{ background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(20px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full pt-28 px-8 pb-10">
              <nav className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => {
                  const active = isActive(link.path)
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        to={link.path}
                        className="flex items-center justify-between py-4 border-b group"
                        style={{ borderColor: '#F0F0F0' }}
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs w-6"
                            style={{ color: 'rgba(26,74,122,0.5)' }}>
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span
                            className="text-2xl font-display font-bold transition-colors"
                            style={{ color: active ? '#1A4A7A' : '#B0B0B0' }}
                          >
                            {link.label}
                          </span>
                        </div>
                        <ArrowRight size={18}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: '#1A4A7A' }} />
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
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
                <p className="text-center text-xs" style={{ color: '#B0B0B0' }}>
                  © 2025 APEX Digital. All rights reserved.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
=======
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'

import Button from '../common/Button'

export default function Navbar() {

  const [open, setOpen] = useState(false)

  const navItems = [
    {
      label: 'Interface',
      path: '/',
    },

    {
      label: 'Capabilities',
      path: '/capabilities',
    },

    {
      label: 'Field Results',
      path: '/field-results',
    },

    {
      label: 'Operators',
      path: '/operators',
    },

    {
      label: 'Initiate',
      path: '/initiate',
    },

    {
      label: 'Infrastructure',
      path: '/infrastructure',
    },
  ]

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-slate-200/80
        bg-white/90
        backdrop-blur-xl
      "
    >
      <div className="container-custom">

        <div
          className="
            flex
            h-24
            items-center
            justify-between
          "
        >
          <Link
            to="/"
            className="flex items-center gap-4"
          >
            <div
              className="
                blue-gradient
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                text-2xl
                font-black
                text-white
                shadow-lg
              "
            >
              S
            </div>

            <div>
              <h2
                className="
                  text-3xl
                  font-black
                  tracking-tight
                  text-slate-950
                "
              >
                SYSTOLAB
              </h2>
            </div>
          </Link>

          <nav
            className="
              hidden
              items-center
              gap-10
              lg:flex
            "
          >
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `
                  relative
                  text-sm
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? 'text-blue-700'
                      : 'text-slate-700 hover:text-blue-700'
                  }
                `
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    {isActive && (
                      <span
                        className="
                          absolute
                          -bottom-3
                          left-0
                          h-[2px]
                          w-full
                          rounded-full
                          bg-blue-700
                        "
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button>
              Initiate Inquiry
              <ArrowRight size={18} />
            </Button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-200
              lg:hidden
            "
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div
            className="
              border-t
              border-slate-200
              py-8
              lg:hidden
            "
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `
                    text-lg
                    font-semibold

                    ${
                      isActive
                        ? 'text-blue-700'
                        : 'text-slate-700'
                    }
                  `
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="pt-4">
                <Button className="w-full justify-center">
                  Initiate Inquiry
                  <ArrowRight size={18} />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
>>>>>>> 3d107c19fb3dc36207c067ebbff8996db537e0ae
  )
}