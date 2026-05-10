import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Plus, Minus } from 'lucide-react'

const defaultFAQs = [
  { q: 'How quickly will I see results?', a: 'Most clients see measurable improvements within the first 30 days. Significant revenue impact typically occurs within 60-90 days, depending on your industry and starting point.' },
  { q: 'What industries do you specialize in?', a: 'We work across B2B SaaS, e-commerce, professional services, fintech, and consumer brands. Our AI-powered approach adapts to any industry vertical.' },
  { q: 'How do you measure and report ROI?', a: 'We implement custom tracking dashboards giving real-time visibility into every metric. Monthly strategy reports, weekly performance updates, and 24/7 dashboard access are standard.' },
  { q: 'Do you require long-term contracts?', a: 'We operate on flexible engagement models. While we recommend 6-month minimum partnerships, we offer month-to-month options for clients who prefer flexibility.' },
  { q: 'What makes APEX different from other agencies?', a: 'We\'re obsessively focused on outcomes, not activities. Our AI-integrated workflows, proprietary growth frameworks, and elite team deliver results traditional agencies cannot match.' },
  { q: 'Can you handle international campaigns?', a: 'Absolutely. We manage campaigns across 40+ countries with multi-language capabilities and international SEO expertise.' },
]

function FAQItem({ question, answer, index, isOpen, onToggle }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: isOpen ? '#FFFFFF' : '#F8F9FA',
        border: `1px solid ${isOpen ? 'rgba(26,74,122,0.15)' : '#E5E5E5'}`,
        boxShadow: isOpen ? '0 4px 16px rgba(26,74,122,0.07)' : 'none',
      }}
    >
      <button
        className="w-full flex items-center justify-between p-6 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span
          className="font-display font-semibold text-base lg:text-lg pr-4"
          style={{ color: isOpen ? '#1A4A7A' : '#1A1A1A' }}
        >
          {question}
        </span>
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: isOpen ? 'rgba(26,74,122,0.1)' : '#F1F3F5',
            border: `1px solid ${isOpen ? 'rgba(26,74,122,0.2)' : '#E5E5E5'}`,
          }}
        >
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            {isOpen
              ? <Minus size={14} style={{ color: '#1A4A7A' }} />
              : <Plus size={14} style={{ color: '#5A5A5A' }} />
            }
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.33, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-6">
              <div className="h-px mb-4" style={{ background: 'rgba(26,74,122,0.08)' }} />
              <p className="text-sm leading-relaxed" style={{ color: '#5A5A5A' }}>{answer}</p>
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
    <section
      ref={ref}
      className={`section-padding ${className}`}
      style={{ background: '#FFFFFF' }}
    >
      <div className="container-custom">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="tag-accent mb-6">FAQ</div>
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4" style={{ color: '#1A1A1A' }}>
            {title}
          </h2>
          <p className="text-lg" style={{ color: '#5A5A5A' }}>
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