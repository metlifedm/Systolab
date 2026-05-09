import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    title: 'CEO, TechFlow AI',
    company: 'TechFlow AI',
    avatar: 'SC',
    rating: 5,
    text: 'APEX Digital transformed our entire growth operation. In 6 months, we scaled from $800K to $4.2M ARR. Their AI-powered strategy is unlike anything we\'d seen before. The team is world-class.',
    metric: '+425% ARR',
    industry: 'B2B SaaS',
  },
  {
    name: 'Marcus Rodriguez',
    title: 'Founder, EliteCommerce',
    company: 'EliteCommerce',
    avatar: 'MR',
    rating: 5,
    text: 'We tried 3 agencies before APEX. The difference is night and day. They think like scientists — every decision is data-backed. Our ROAS went from 2.1x to 8.7x. Absolutely transformative.',
    metric: '8.7x ROAS',
    industry: 'E-Commerce',
  },
  {
    name: 'Priya Sharma',
    title: 'CMO, Nexus Finance',
    company: 'Nexus Finance',
    avatar: 'PS',
    rating: 5,
    text: 'The sophistication of their approach is unmatched. Within 90 days, our cost-per-acquisition dropped 67% while lead quality skyrocketed. I recommend APEX to every growth-stage company I advise.',
    metric: '-67% CPA',
    industry: 'FinTech',
  },
  {
    name: 'James Wright',
    title: 'VP Growth, CloudCore',
    company: 'CloudCore',
    avatar: 'JW',
    rating: 5,
    text: 'From SEO to paid media to brand — they operate as a seamlessly integrated growth partner, not just a vendor. Pipeline grew 340% year-over-year. Best decision we\'ve made in 3 years.',
    metric: '+340% Pipeline',
    industry: 'Enterprise SaaS',
  },
]

export default function TestimonialSlider({ className = '' }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next])

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      filter: 'blur(4px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      filter: 'blur(4px)',
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    }),
  }

  const t = testimonials[current]

  return (
    <section ref={ref} className={`section-padding ${className}`}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(26, 74, 122, 0.12)',
              border: '1px solid rgba(26, 74, 122, 0.25)',
            }}
          >
            <Star size={12} style={{ color: '#D4AF37' }} fill="#D4AF37" />
            <span className="font-mono text-xs tracking-widest uppercase"
              style={{ color: 'rgba(26, 74, 122, 0.9)' }}>
              Client Testimonials
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Trusted by <span className="text-gradient">industry leaders</span>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="relative rounded-3xl p-8 lg:p-12 overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            {/* Background decoration */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(26, 74, 122, 0.4) 0%, transparent 70%)',
              }}
            />
            <Quote
              size={80}
              className="absolute top-8 right-8 opacity-5"
              style={{ color: '#1A4A7A' }}
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction}
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array(t.rating).fill(0).map((_, i) => (
                    <Star key={i} size={16} fill="#D4AF37" style={{ color: '#D4AF37' }} />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-xl lg:text-2xl font-display font-medium leading-relaxed mb-8 text-white">
                  "{t.text}"
                </blockquote>

                {/* Author + metric */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center font-display font-bold text-lg text-white"
                      style={{ background: 'linear-gradient(135deg, #1A4A7A, #2563EB)' }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-display font-semibold text-white">{t.name}</div>
                      <div className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        {t.title}
                      </div>
                      <div
                        className="text-xs font-mono mt-0.5"
                        style={{ color: 'rgba(26, 74, 122, 0.8)' }}
                      >
                        {t.industry}
                      </div>
                    </div>
                  </div>

                  {/* Metric highlight */}
                  <div
                    className="px-6 py-3 rounded-2xl"
                    style={{
                      background: 'rgba(44, 110, 73, 0.12)',
                      border: '1px solid rgba(44, 110, 73, 0.25)',
                    }}
                  >
                    <div className="font-display font-black text-2xl" style={{ color: '#2C6E49' }}>
                      {t.metric}
                    </div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                      Growth Achieved
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1)
                    setCurrent(i)
                  }}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    background: i === current
                      ? 'linear-gradient(90deg, #1A4A7A, #2563EB)'
                      : 'rgba(255, 255, 255, 0.15)',
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
                aria-label="Previous testimonial"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(26, 74, 122, 0.15)'
                  e.currentTarget.style.borderColor = 'rgba(26, 74, 122, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
                }}
              >
                <ChevronLeft size={20} style={{ color: 'rgba(255,255,255,0.6)' }} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #1A4A7A, #2563EB)',
                }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}