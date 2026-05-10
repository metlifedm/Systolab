import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const integrations = [
  { category: 'CRM', tools: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho'], color: '#1A4A7A' },
  { category: 'Analytics', tools: ['GA4', 'Mixpanel', 'Amplitude', 'Heap'], color: '#2C6E49' },
  { category: 'Ad Platforms', tools: ['Google Ads', 'Meta Ads', 'LinkedIn', 'TikTok'], color: '#1A4A7A' },
  { category: 'Marketing Automation', tools: ['Marketo', 'Pardot', 'ActiveCampaign', 'Klaviyo'], color: '#2C6E49' },
  { category: 'E-Commerce', tools: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce'], color: '#1A4A7A' },
  { category: 'Data & BI', tools: ['Looker', 'Tableau', 'BigQuery', 'Snowflake'], color: '#2C6E49' },
]

export default function IntegrationsSection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      className="section-padding"
      style={{ background: 'linear-gradient(180deg,#0A0A0F,#0D0D15,#0A0A0F)' }}
    >
      <div className="container-custom">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(26,74,122,0.12)', border: '1px solid rgba(26,74,122,0.25)' }}
          >
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#1A4A7A' }}>
              50+ Integrations
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4">
            Connects with your
            <span className="text-gradient"> entire stack</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Native integrations with every major platform, plus custom API connectors for anything unique to your stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {integrations.map((cat, i) => (
            <motion.div
              key={cat.category}
              className="p-6 rounded-3xl"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, borderColor: `${cat.color}25` }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {cat.category}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {cat.tools.map((t) => (
                  <div
                    key={t}
                    className="px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Don't see your platform? We build custom connectors for any tool in your stack.{' '}
            <a href="#" className="underline" style={{ color: 'rgba(26,74,122,0.8)' }}>Ask us about it →</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}