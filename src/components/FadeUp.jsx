import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const MotionDiv = motion.div

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <MotionDiv
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </MotionDiv>
  )
}

export default FadeUp
