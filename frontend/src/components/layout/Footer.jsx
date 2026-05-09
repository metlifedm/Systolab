import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  ArrowRight,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Zap,
  Shield,
  TrendingUp,
} from 'lucide-react'

const footerLinks = {
  Pages: [
    { label: 'Interface', path: '/' },
    { label: 'Capabilities', path: '/capabilities' },
    { label: 'Verified Outcomes', path: '/verified-outcomes' },
    { label: 'Operators', path: '/operators' },
    { label: 'Infrastructure', path: '/infrastructure' },
    { label: 'Initiate', path: '/initiate' },
  ],
  Services: [
    { label: 'AI Growth Strategy', path: '/capabilities' },
    { label: 'Performance Marketing', path: '/capabilities' },
    { label: 'Brand Architecture', path: '/capabilities' },
    { label: 'Content Systems', path: '/capabilities' },
    { label: 'SEO & Authority', path: '/capabilities' },
    { label: 'Conversion Optimization', path: '/capabilities' },
  ],
  Company: [
    { label: 'Our Story', path: '/operators' },
    { label: 'Case Studies', path: '/verified-outcomes' },
    { label: 'Testimonials', path: '/verified-outcomes' },
    { label: 'Tech Stack', path: '/infrastructure' },
    { label: 'Pricing', path: '/infrastructure' },
    { label: 'Get Started', path: '/initiate' },
  ],
}

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
]

const badges = [
  { icon: Shield, text: 'Verified Agency' },
  { icon: Zap, text: 'AI Certified' },
  { icon: TrendingUp, text: 'Top 1% Growth' },
]

function FooterColumn({ title, links, delay }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <h4 className="font-display font-semibold text-sm tracking-widest uppercase mb-6"
        style={{ color: 'rgba(255,255,255,0.3)' }}>
        {title}
      </h4>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.path}
              className="text-sm transition-all duration-200 group flex items-center gap-1"
              style={{ color: 'rgba(255,255,255,0.5)' }}
            >
              <span className="group-hover:text-white transition-colors">{link.label}</span>
              <ArrowRight
                size={12}
                className="opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0"
                style={{ color: '#1A4A7A' }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{
        background: 'linear-gradient(to bottom, #0A0A0F, #060609)',
        borderColor: 'rgba(255,255,255,0.04)',
      }}
      role="contentinfo"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(26, 74, 122, 0.3) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(44, 110, 73, 0.25) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 container-custom">
        {/* Top section - CTA Banner */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="py-20 border-b"
          style={{ borderColor: 'rgba(255,255,255,0.04)' }}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div
                className="flex items-center gap-2 mb-4"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: 'rgba(44, 110, 73, 0.8)' }}>
                  Accepting New Clients
                </span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 leading-tight">
                Ready to dominate
                <span className="text-gradient"> your market?</span>
              </h2>
              <p className="text-lg" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Join 200+ industry leaders who've transformed their growth with APEX Digital's AI-powered strategies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/initiate"
                className="btn-primary flex items-center gap-2 whitespace-nowrap"
              >
                <Zap size={16} />
                <span>Begin Project</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/verified-outcomes"
                className="btn-secondary flex items-center gap-2 whitespace-nowrap"
              >
                <span>View Results</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-b"
          style={{ borderColor: 'rgba(255,255,255,0.04)' }}>

          {/* Brand Column */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #1A4A7A, #2563EB)' }}
              >
                <span className="text-white font-display font-black text-xl">A</span>
              </div>
              <div>
                <span className="font-display font-bold text-white text-xl tracking-tight">APEX</span>
                <span className="block text-xs tracking-widest font-mono uppercase"
                  style={{ color: 'rgba(255,255,255,0.3)' }}>
                  Digital
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed mb-8 max-w-sm"
              style={{ color: 'rgba(255,255,255,0.4)' }}>
              Elite AI-powered digital marketing agency. We build growth systems that dominate markets, scale brands, and deliver measurable results for ambitious companies.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mb-8">
              {[
                { icon: Mail, text: 'hello@apexdigital.com' },
                { icon: Phone, text: '+1 (555) 000-0000' },
                { icon: MapPin, text: 'New York, NY · Remote Global' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(26, 74, 122, 0.15)', border: '1px solid rgba(26, 74, 122, 0.2)' }}
                  >
                    <Icon size={14} style={{ color: '#1A4A7A' }} />
                  </div>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 group"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(26, 74, 122, 0.2)'
                    e.currentTarget.style.borderColor = 'rgba(26, 74, 122, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                  }}
                >
                  <Icon size={16} style={{ color: 'rgba(255,255,255,0.5)' }} className="group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links], i) => (
            <FooterColumn
              key={title}
              title={title}
              links={links}
              delay={0.1 * (i + 1)}
            />
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © {year} APEX Digital Agency. All rights reserved. Built for dominance.
          </p>

          {/* Trust badges */}
          <div className="flex items-center gap-4">
            {badges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5">
                <Icon size={12} style={{ color: 'rgba(26, 74, 122, 0.8)' }} />
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>{text}</span>
              </div>
            ))}
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-4">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors"
                style={{ color: 'rgba(255,255,255,0.25)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.25)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}