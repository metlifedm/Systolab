import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  ArrowRight, Twitter, Linkedin, Instagram, Youtube,
  Mail, Phone, MapPin, Zap, Shield, TrendingUp,
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

function FooterColumn({ title, links, delay }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <h4 className="font-display font-semibold text-xs tracking-widest uppercase mb-5"
        style={{ color: '#8A8A8A' }}>
        {title}
      </h4>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.path}
              className="text-sm group flex items-center gap-1 transition-colors duration-200"
              style={{ color: '#5A5A5A' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#1A4A7A' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#5A5A5A' }}
            >
              <span>{link.label}</span>
              <ArrowRight size={12}
                className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
                style={{ color: '#1A4A7A' }} />
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{ background: '#F8F9FA', borderColor: '#E5E5E5' }}
      role="contentinfo"
    >
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 container-custom">
        {/* CTA Banner */}
        <motion.div
          ref={ref}
          className="py-20 border-b"
          style={{ borderColor: '#E5E5E5' }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: '#2C6E49' }}>
                  Accepting New Clients
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-display font-black mb-4 leading-tight"
                style={{ color: '#1A1A1A' }}>
                Ready to dominate{' '}
                <span className="text-gradient">your market?</span>
              </h2>
              <p className="text-lg" style={{ color: '#5A5A5A' }}>
                Join 200+ industry leaders who've transformed their growth with APEX Digital's AI-powered strategies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/initiate" className="btn-primary">
                <Zap size={16} />
                <span>Begin Project</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/verified-outcomes" className="btn-secondary">
                View Results
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Main grid */}
        <div
          className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-b"
          style={{ borderColor: '#E5E5E5' }}
        >
          {/* Brand */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #1A4A7A, #2563EB)' }}
              >
                <span className="text-white font-display font-black text-xl">A</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl tracking-tight block"
                  style={{ color: '#1A1A1A' }}>APEX</span>
                <span className="text-xs tracking-widest font-mono uppercase"
                  style={{ color: '#8A8A8A' }}>Digital</span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed mb-7 max-w-xs" style={{ color: '#5A5A5A' }}>
              Elite AI-powered digital marketing agency. We build growth systems that dominate markets and deliver measurable results for ambitious companies.
            </p>

            <div className="flex flex-col gap-3 mb-7">
              {[
                { icon: Mail, text: 'hello@apexdigital.com' },
                { icon: Phone, text: '+1 (555) 000-0000' },
                { icon: MapPin, text: 'New York, NY · Remote Global' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(26,74,122,0.08)', border: '1px solid rgba(26,74,122,0.12)' }}
                  >
                    <Icon size={14} style={{ color: '#1A4A7A' }} />
                  </div>
                  <span className="text-sm" style={{ color: '#5A5A5A' }}>{text}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 group"
                  style={{ background: '#F1F3F5', border: '1px solid #E5E5E5' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(26,74,122,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(26,74,122,0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#F1F3F5'
                    e.currentTarget.style.borderColor = '#E5E5E5'
                  }}
                >
                  <Icon size={15} style={{ color: '#8A8A8A' }} />
                </a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([title, links], i) => (
            <FooterColumn key={title} title={title} links={links} delay={0.08 * (i + 1)} />
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: '#B0B0B0' }}>
            © {year} APEX Digital Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[{ icon: Shield, text: 'SOC 2 Certified' }, { icon: Zap, text: 'AI Certified' }, { icon: TrendingUp, text: 'Top 1% Growth' }].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5">
                <Icon size={12} style={{ color: '#1A4A7A' }} />
                <span className="text-xs" style={{ color: '#B0B0B0' }}>{text}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-xs transition-colors"
                style={{ color: '#B0B0B0' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#1A4A7A' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#B0B0B0' }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}