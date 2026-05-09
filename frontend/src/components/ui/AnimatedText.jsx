import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const wordVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export function AnimatedHeading({ text, className = '', highlightWords = [], delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  const words = text.split(' ')

  return (
    <h2
      ref={ref}
      className={`overflow-hidden ${className}`}
      style={{ perspective: '1000px' }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block mr-[0.25em] ${
            highlightWords.includes(word) ? 'text-gradient' : ''
          }`}
          variants={wordVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={i + delay * 10}
        >
          {word}
        </motion.span>
      ))}
    </h2>
  )
}

export function AnimatedParagraph({ text, className = '', delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <motion.p
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {text}
    </motion.p>
  )
}