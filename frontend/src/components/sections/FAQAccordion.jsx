import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Plus, Minus } from 'lucide-react'

const defaultFAQs = [
  {
    q: 'How quickly will I see results?',
    a: 'Most clients see measurable improvements within the first 30 days. Significant revenue impact typically occurs within 60-90 days, depending on your industry and starting point. We set clear benchmarks from day one.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'We work across B2B SaaS, e-commerce, professional services, fintech, and consumer brands. Our AI-powered approach adapts to any industry vertical, with specialized playbooks for each sector.',
  },
  {
    q: 'How do you measure and report ROI?',
    a: 'We implement custom tracking dashboards that give you real-time visibility into every metric that matters. Monthly strategy reports, weekly performance updates, and 24/7 dashboard access are standard.',
  },
  {
    q: 'Do you require long-term contracts?',
    a: 'We operate on flexible engagement models. While we recommend 6-month minimum partnerships to see full impact, we offer month-to-month options for clients who prefer flexibility.',
  },
  {
    q: 'What makes APEX different from other agencies?',
    a: 'We\'re obsessively focused on outcomes, not activities. Our AI-integrated workflows, proprietary growth frameworks, and elite team of specialists deliver results that traditional agencies simply can\'t match.',
  },
  {
    q: 'Can you handle international campaigns?',
    a: 'Absolutely. We manage campaigns across 40+ countries with multi-language capabilities, regional audience targeting, and international SEO expertise. Global brands trust us to coordinate their worldwide presence.',
  },
]

function FAQItem({ question, answer, index, isOpen, onToggle }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: isOpen ? 'rgba(26, 74, 122, 0.08)' : 'rgba(255, 255, 255, 0.02)',
        border: `1px solid ${isOpen ? 'rgba(26, 74, 122, 0.25)' : 'rgba(255, 255, 255, 0.06)'}`,
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      <button
        className="w-full flex items-center justify-between p-6 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span
          className="font-display font-semibold text-base lg:text-lg pr-4 transition-colors"
          style={{ color: isOpen ? 'white' : 'rgba(255,255,255,0.75)' }}
        >
          {question}
        </span>
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: isOpen ? 'rgba(26, 74, 122, 0.3)' : 'rgba(255, 255, 255, 0.06)',
            border: `1px solid ${isOpen ? 'rgba(26, 74, 122, 0.4)' : 'rgba(255, 255, 255, 0.08)'}`,
          }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <Minus size={14} style={{ color: '#1A4A7A' }} />
            ) : (
              <Plus size={14} style={{ color: 'rgba(255,255,255,0.5)' }} />
            )}
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-6">
              <div
                className="h-px mb-4"
                style={{ background: 'rgba(26, 74, 122, 0.15)' }}
              />
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQAccordion({ faqs = defaultFAQs, title = 'Frequently Asked Questions', className = '' }) {
  const [openIndex, setOpenIndex] = useState(null)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className={`section-padding ${className}`}>
      <div className="container-custom">
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
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'rgba(26, 74, 122, 0.9)' }}>
              FAQ
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Everything you need to know before starting your journey with us.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              index={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}