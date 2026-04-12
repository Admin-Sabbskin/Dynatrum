import { motion } from 'framer-motion'

const MotionDiv = motion.div
const MotionP = motion.p
const MotionH1 = motion.h1
const MotionDl = motion.dl

const stats = [
  { value: '120+', label: 'ERP programs delivered' },
  { value: '98%', label: 'On-time go-live rate' },
  { value: '14+', label: 'Industries supported' },
  { value: '24h', label: 'Senior consultant response' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function Hero() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <MotionDiv
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="section-shell section-space pt-24 sm:pt-28 lg:pt-32"
      >
        <MotionP variants={itemVariants} className="section-kicker">
          Finance-led ERP consulting
        </MotionP>

        <MotionH1
          variants={itemVariants}
          className="mt-6 max-w-5xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl"
        >
          Enterprise ERP transformation,
          <span className="block">governed by finance.</span>
        </MotionH1>

        <MotionP
          variants={itemVariants}
          className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl"
        >
          Dynatrum helps leadership teams select and implement ERP systems with
          CPA-grade rigor, improving close performance, control quality, and board-level
          reporting confidence.
        </MotionP>

        <MotionDiv variants={itemVariants} className="mt-11 flex flex-wrap gap-3">
          <a href="#contact" className="btn-primary">
            Book Consultation
          </a>
          <a href="#services" className="btn-secondary">
            Explore Services
          </a>
        </MotionDiv>

        <MotionDl
          variants={itemVariants}
          className="mt-16 grid gap-8 border-t border-slate-200 pt-10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-3xl font-semibold tracking-tight text-slate-950">{stat.value}</dt>
              <dd className="mt-2 text-sm text-slate-500">{stat.label}</dd>
            </div>
          ))}
        </MotionDl>
      </MotionDiv>
    </section>
  )
}

export default Hero
