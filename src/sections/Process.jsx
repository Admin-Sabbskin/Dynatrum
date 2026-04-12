import { motion } from 'framer-motion'

const MotionOl = motion.ol
const MotionLi = motion.li

const steps = [
  {
    name: 'Diagnose',
    detail: 'Assess operations, controls, and system readiness to establish a factual baseline.',
  },
  {
    name: 'Design',
    detail: 'Define process requirements, target architecture, and finance governance standards.',
  },
  {
    name: 'Deploy',
    detail: 'Execute implementation, migration, and testing with clear milestone ownership.',
  },
  {
    name: 'Stabilize',
    detail: 'Support go-live, resolve critical issues, and embed team adoption workflows.',
  },
  {
    name: 'Scale',
    detail: 'Optimize reporting, automation, and controls to sustain long-term ERP value.',
  },
]

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const stepVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
    },
  },
}

function Process() {
  return (
    <section id="process" className="border-b border-slate-200 bg-white">
      <div className="section-shell section-space">
        <p className="section-kicker">Methodology</p>
        <h2 className="section-title">
          ERP lifecycle built for control and execution.
        </h2>
        <p className="section-copy">
          A five-step framework that keeps transformation accountable from diagnostic
          assessment through scaled operations.
        </p>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute bottom-2 left-5 top-2 w-px bg-slate-200 lg:bottom-auto lg:left-10 lg:right-10 lg:top-5 lg:h-px lg:w-auto" />

          <MotionOl
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={timelineVariants}
            className="relative grid gap-9 lg:grid-cols-5 lg:gap-6"
          >
            {steps.map((step, index) => (
              <MotionLi
                key={step.name}
                variants={stepVariants}
                className="relative pl-14 lg:pl-0 lg:pt-14"
              >
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-xs font-semibold text-slate-700 lg:left-1/2 lg:-translate-x-1/2">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-base font-semibold text-slate-900 lg:text-center">{step.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 lg:text-center">{step.detail}</p>
              </MotionLi>
            ))}
          </MotionOl>
        </div>
      </div>
    </section>
  )
}

export default Process
