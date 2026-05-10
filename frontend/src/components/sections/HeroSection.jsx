import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Play, Zap, TrendingUp, Shield, Star } from 'lucide-react'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

const words = ['Dominate.', 'Scale.', 'Convert.', 'Grow.', 'Win.']

function TypewriterWord() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const word = words[index]
    let timeout
    if (paused) {
      timeout = setTimeout(() => { setPaused(false); setDeleting(true) }, 2000)
      return () => clearTimeout(timeout)
    }
    if (!deleting) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
      } else { setPaused(true) }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
      } else {
        setDeleting(false)
        setIndex((p) => (p + 1) % words.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, paused])

  return (
    <span
      className="inline-block"
      style={{
        background: 'linear-gradient(135deg, #1A4A7A, #2563EB)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {displayed}
      <span
        className="inline-block w-[3px] h-[0.8em] ml-1 align-middle rounded-full"
        style={{ background: '#1A4A7A', animation: 'blink 1s step-end infinite', verticalAlign: 'middle' }}
      />
    </span>
  )
}

function HeroCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let t = 0
    const dpr = window.devicePixelRatio || 1

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
    }

    resize()

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)
      t += 0.005

      const cx = w / 2
      const cy = h / 2

      // Rings
      const rings = [
        { r: 110, speed: 0.7, color: 'rgba(26,74,122,0.12)', dash: [6, 14] },
        { r: 148, speed: -0.45, color: 'rgba(44,110,73,0.08)', dash: [3, 18] },
        { r: 186, speed: 0.28, color: 'rgba(37,99,235,0.07)', dash: [10, 8] },
        { r: 224, speed: -0.18, color: 'rgba(26,74,122,0.05)', dash: [18, 10] },
      ]

      rings.forEach(({ r, speed, color, dash }) => {
        ctx.save()
        ctx.translate(cx, cy)
        ctx.rotate(t * speed)
        ctx.beginPath()
        ctx.setLineDash(dash)
        ctx.arc(0, 0, r, 0, Math.PI * 2)
        ctx.strokeStyle = color
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.restore()
      })

      // Center gradient
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 80)
      grad.addColorStop(0, 'rgba(26,74,122,0.08)')
      grad.addColorStop(1, 'transparent')
      ctx.beginPath()
      ctx.arc(cx, cy, 80, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.fill()

      // Dots on rings
      rings.forEach(({ r, speed }, idx) => {
        const angle = t * speed + (idx * Math.PI) / 2
        const px = cx + Math.cos(angle) * r
        const py = cy + Math.sin(angle) * r
        ctx.beginPath()
        ctx.arc(px, py, 3, 0, Math.PI * 2)
        ctx.fillStyle = idx % 2 === 0 ? 'rgba(26,74,122,0.7)' : 'rgba(44,110,73,0.6)'
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(px, py)
        ctx.strokeStyle = idx % 2 === 0 ? 'rgba(26,74,122,0.06)' : 'rgba(44,110,73,0.04)'
        ctx.lineWidth = 0.5
        ctx.setLineDash([])
        ctx.stroke()
      })

      // Trend line
      ctx.beginPath()
      const gW = w * 0.65
      const gX = cx - gW / 2
      const gY = cy + 20
      for (let i = 0; i <= 55; i++) {
        const x = gX + (i / 55) * gW
        const wave = Math.sin(i * 0.22 + t * 3) * 10
        const trend = (i / 55) * 28
        const y = gY - wave - trend
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      const lineGrad = ctx.createLinearGradient(gX, 0, gX + gW, 0)
      lineGrad.addColorStop(0, 'rgba(26,74,122,0.15)')
      lineGrad.addColorStop(0.5, 'rgba(37,99,235,0.45)')
      lineGrad.addColorStop(1, 'rgba(44,110,73,0.6)')
      ctx.strokeStyle = lineGrad
      ctx.lineWidth = 1.5
      ctx.setLineDash([])
      ctx.stroke()

      animId = requestAnimationFrame(draw)
    }

    draw()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    return () => { cancelAnimationFrame(animId); ro.disconnect() }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" aria-hidden="true" />
}

function FloatingBadge({ children, style = {} }) {
  return (
    <motion.div
      className="absolute hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-2xl"
      style={{
        background: 'rgba(255,255,255,0.95)',
        border: '1px solid #E5E5E5',
        boxShadow: '0 8px 24px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
        backdropFilter: 'blur(12px)',
        ...style,
      }}
      whileHover={{ scale: 1.04, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

export default function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 100])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#FFFFFF' }}
      aria-label="Hero"
    >
      <AnimatedBackground variant="hero" particleCount={45} />

      {/* Subtle top gradient accent */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(26,74,122,0.3), transparent)' }}
      />

      <motion.div
        className="relative z-10 container-custom pt-32 pb-20"
        style={{ y: smoothY, opacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">

          {/* LEFT */}
          <div className="flex flex-col items-start">
            {/* Status badge */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="tag-success">
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-green-500"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                Now Accepting Clients
              </div>
              <div
                className="flex items-center gap-1 px-3 py-1.5 rounded-full"
                style={{ background: '#F8F9FA', border: '1px solid #E5E5E5' }}
              >
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={11} fill="#F59E0B" style={{ color: '#F59E0B' }} />
                ))}
                <span className="text-xs ml-1 font-mono" style={{ color: '#8A8A8A' }}>5.0</span>
              </div>
            </motion.div>

            {/* Headline */}
            <div className="mb-8">
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-black leading-[1.05] tracking-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="block" style={{ color: '#1A1A1A' }}>We Make</span>
                <span className="block" style={{ color: '#1A1A1A' }}>Brands</span>
                <span className="block"><TypewriterWord /></span>
              </motion.h1>
            </div>

            {/* Subheading */}
            <motion.p
              className="text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
              style={{ color: '#5A5A5A' }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Elite AI-powered digital marketing for ambitious brands. We combine
              proprietary growth systems, elite operators, and verified data to
              deliver outcomes that industry leaders trust.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/initiate"
                className="btn-primary text-base px-8 py-4"
                style={{ boxShadow: '0 8px 24px rgba(26,74,122,0.3)' }}
              >
                <Zap size={18} />
                <span>Start Growing Today</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </Link>

              <Link
                to="/verified-outcomes"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300"
                style={{ color: '#5A5A5A', border: '1.5px solid #E5E5E5', background: '#F8F9FA' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(26,74,122,0.25)'
                  e.currentTarget.style.color = '#1A4A7A'
                  e.currentTarget.style.background = 'rgba(26,74,122,0.04)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E5E5'
                  e.currentTarget.style.color = '#5A5A5A'
                  e.currentTarget.style.background = '#F8F9FA'
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(26,74,122,0.08)' }}
                >
                  <Play size={12} fill="#1A4A7A" style={{ color: '#1A4A7A', marginLeft: 2 }} />
                </div>
                <span>See Verified Outcomes</span>
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              className="flex flex-wrap items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[
                { icon: Shield, text: 'SOC 2 Compliant' },
                { icon: TrendingUp, text: '847% Avg ROI' },
                { icon: Zap, text: 'AI-Native Since 2020' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={14} style={{ color: '#1A4A7A' }} />
                  <span className="text-sm font-medium" style={{ color: '#8A8A8A' }}>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — visual */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Outer halo */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(26,74,122,0.06) 0%, transparent 70%)',
                  animation: 'pulseSoft 4s ease-in-out infinite',
                }}
              />

              {/* Canvas area */}
              <div
                className="absolute inset-8 rounded-3xl overflow-hidden"
                style={{
                  background: '#F8F9FA',
                  border: '1px solid #E5E5E5',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                }}
              >
                <HeroCanvas />
              </div>

              {/* Center logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative w-24 h-24 rounded-3xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #1A4A7A, #2563EB)',
                    boxShadow: '0 12px 40px rgba(26,74,122,0.35), 0 4px 16px rgba(26,74,122,0.2)',
                  }}
                  animate={{
                    boxShadow: [
                      '0 12px 40px rgba(26,74,122,0.25), 0 4px 16px rgba(26,74,122,0.15)',
                      '0 16px 48px rgba(26,74,122,0.4), 0 6px 20px rgba(26,74,122,0.25)',
                      '0 12px 40px rgba(26,74,122,0.25), 0 4px 16px rgba(26,74,122,0.15)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-white font-display font-black text-5xl">A</span>
                </motion.div>
              </div>

              {/* Floating badges */}
              <FloatingBadge
                style={{ top: '8%', left: '-14%' }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(44,110,73,0.1)' }}>
                    <TrendingUp size={15} style={{ color: '#2C6E49' }} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm" style={{ color: '#1A1A1A' }}>+847%</div>
                    <div className="text-xs" style={{ color: '#8A8A8A' }}>Avg. ROI</div>
                  </div>
                </motion.div>
              </FloatingBadge>

              <FloatingBadge style={{ bottom: '12%', right: '-12%' }}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <div>
                    <div className="font-display font-bold text-sm" style={{ color: '#1A1A1A' }}>200+ Clients</div>
                    <div className="text-xs" style={{ color: '#8A8A8A' }}>Globally trusted</div>
                  </div>
                </motion.div>
              </FloatingBadge>

              <FloatingBadge style={{ bottom: '-4%', left: '8%' }}>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.9 }}
                  className="flex items-center gap-2"
                >
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <Star key={s} size={11} fill="#F59E0B" style={{ color: '#F59E0B' }} />
                    ))}
                  </div>
                  <span className="text-sm font-semibold" style={{ color: '#1A1A1A' }}>5.0 Rating</span>
                </motion.div>
              </FloatingBadge>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#B0B0B0' }}>
            Scroll
          </span>
          <div
            className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
            style={{ border: '1.5px solid #E5E5E5' }}
          >
            <motion.div
              className="w-1 h-2.5 rounded-full"
              style={{ background: '#1A4A7A' }}
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}