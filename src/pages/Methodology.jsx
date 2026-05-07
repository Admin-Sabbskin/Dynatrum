import { motion } from 'framer-motion'
import FadeUp from '../components/FadeUp'

const MotionDiv = motion.div

const phases = [
  {
    number: '01',
    name: 'Initiating',
    description:
      'We define the business case, identify stakeholders, and establish governance — setting the boundaries before scope can drift.',
    activities: [
      'Business case definition',
      'Stakeholder identification',
      'Governance and charter setup',
    ],
    signal: 'Charter signed and stakeholder map locked.',
    metricLabel: 'Time to charter',
    metricValue: '<2 wks',
  },
  {
    number: '02',
    name: 'Planning',
    description:
      'We build the execution roadmap with WBS, resource allocation, schedule, and budget — the plan that every phase gate is measured against.',
    activities: [
      'WBS and schedule build-out',
      'Resource and budget allocation',
      'Risk and change-control plan',
    ],
    signal: 'Baseline plan approved across functions.',
    metricLabel: 'Plan baseline depth',
    metricValue: 'WBS L4',
  },
  {
    number: '03',
    name: 'Executing',
    description:
      'We deliver the work through sprint-based execution within Waterfall phase gates — hybrid agility without losing audit-grade control.',
    activities: [
      'Configuration and build sprints',
      'Data migration and integration',
      'UAT coordination and signoff',
    ],
    signal: 'Phase gates moving on plan with finance ownership.',
    metricLabel: 'Delivery predictability',
    metricValue: '91%',
  },
  {
    number: '04',
    name: 'Monitoring & Controlling',
    description:
      'We track progress against plan and manage scope through formal change control — so enhancements never become uncontrolled scope creep.',
    activities: [
      'Earned value tracking',
      'Formal change control board',
      'Risk and issue management',
    ],
    signal: 'Scope held; variance contained inside thresholds.',
    metricLabel: 'Scope variance',
    metricValue: '<5%',
  },
  {
    number: '05',
    name: 'Closing',
    description:
      'We close formally — handover, lessons learned, and a clean transition into hyper-care and ongoing support.',
    activities: [
      'Formal acceptance and handover',
      'Lessons learned and benefits review',
      'Transition to support and optimization',
    ],
    signal: 'Program closed cleanly with documented handover.',
    metricLabel: 'Hyper-care turnaround',
    metricValue: '48h',
  },
]

function Methodology() {
  return (
    <>
      <section className="section-shell flex min-h-[58svh] items-end py-20 pt-32 md:pt-36">
        <div>
          <FadeUp>
            <p className="kicker">PMP-Aligned Hybrid Delivery</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="mt-6 max-w-4xl">The five PMP process groups, executed as a hybrid program.</h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-7 max-w-3xl text-lg text-[var(--color-text-muted)]">
              ERP fails when execution is either too rigid or too loose. Our model combines
              Waterfall governance — phase gates, approvals, auditability — with Agile execution
              for iterative delivery and faster stakeholder alignment.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
              {phases.map((phase) => (
                <span
                  key={phase.number}
                  className="glass-soft rounded-full px-3.5 py-1.5"
                >
                  {phase.number} {phase.name}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {phases.map((phase) => (
        <section key={phase.name} className="aurora-band relative">
          <div className="section-shell">
            <div className="section-rule" aria-hidden="true" />
          </div>
          <div className="section-shell py-20 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12">
              <div>
                <FadeUp>
                  <p className="font-heading text-6xl leading-none text-[var(--color-gold)] md:text-7xl">
                    {phase.number}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.24em] text-[var(--color-gold)]">
                    {phase.name}
                  </p>
                  <div className="mt-4 h-px w-16 bg-[var(--color-gold)]/60" />
                </FadeUp>
                <FadeUp delay={0.05}>
                  <article>
                    <h2 className="mt-8">{phase.name}</h2>
                    <p className="mt-6 max-w-3xl text-[var(--color-text-muted)]">{phase.description}</p>

                    <ul className="timeline-dash mt-8 space-y-3 text-sm">
                      {phase.activities.map((activity) => (
                        <li key={activity}>{activity}</li>
                      ))}
                    </ul>
                  </article>
                </FadeUp>
              </div>

              <MotionDiv
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.32 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="card-hover glass-panel h-fit rounded-[1.5rem] p-6 lg:sticky lg:top-32"
              >
                <p className="kicker">Phase Signal</p>
                <p className="mt-4 text-sm text-[var(--color-text)]">{phase.signal}</p>

                <div className="gold-frost mt-6 rounded-xl p-4">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-gold)]">
                    {phase.metricLabel}
                  </p>
                  <p className="mt-2 font-heading text-4xl text-[var(--color-white)]">
                    {phase.metricValue}
                  </p>
                </div>

                <div className="mt-5 grid gap-2 text-[11px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                  <p className="glass-soft rounded-lg px-3 py-2">Finance ownership visible</p>
                  <p className="glass-soft rounded-lg px-3 py-2">Governance checkpoints active</p>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>
      ))}

      <section className="section-shell py-20 md:py-24">
        <FadeUp>
          <p className="kicker">Implementation Phases</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-4 max-w-4xl text-balance">
            Crawl. Walk. Run.
          </h2>
        </FadeUp>
        <FadeUp delay={0.08}>
          <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">
            Big-bang ERP rollouts are where programs go to die. We sequence value in three
            controlled waves so teams stabilize before scaling.
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="glass-panel flex h-full flex-col rounded-2xl p-7">
            <p className="kicker">Phase 1 · Crawl</p>
            <h3 className="mt-4">Core ERP first</h3>
            <p className="mt-3 flex-1 text-sm text-[var(--color-text-muted)]">GL, AP, AR, and the close cycle.</p>
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">Target: 3–4 months</p>
          </div>
          <div className="glass-panel flex h-full flex-col rounded-2xl p-7">
            <p className="kicker">Phase 2 · Walk</p>
            <h3 className="mt-4">Operational depth</h3>
            <p className="mt-3 flex-1 text-sm text-[var(--color-text-muted)]">Procurement and Inventory layered onto a stable core.</p>
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">Target: 2–3 months</p>
          </div>
          <div className="glass-panel flex h-full flex-col rounded-2xl p-7">
            <p className="kicker">Phase 3 · Run</p>
            <h3 className="mt-4">Advanced and optimized</h3>
            <p className="mt-3 flex-1 text-sm text-[var(--color-text-muted)]">Advanced modules, integrations, and BI optimization.</p>
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">Target: 2–4 months</p>
          </div>
        </div>
      </section>

      <section className="section-shell py-20 md:py-24">
        <FadeUp>
          <p className="kicker">Flow Diagram</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-4 max-w-4xl text-balance">
            Five phases, one continuous arc.
          </h2>
        </FadeUp>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="glass-panel mt-10 overflow-x-auto rounded-[1.8rem] p-6 md:p-10"
        >
            <svg
              viewBox="0 0 1140 220"
              className="h-[220px] w-full min-w-[820px]"
              role="img"
              aria-label="Five phase methodology diagram"
            >
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#C4A96B" />
                </marker>
                <linearGradient id="phaseFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.015)" />
                </linearGradient>
              </defs>

              {phases.map((phase, index) => {
                const rectW = 196
                const gap = 30
                const x = 20 + index * (rectW + gap)
                const labelLines = phase.name.includes('&')
                  ? phase.name.split(' & ')
                  : [phase.name]
                return (
                  <g key={phase.name}>
                    <rect
                      x={x}
                      y="54"
                      width={rectW}
                      height="112"
                      rx="18"
                      fill="url(#phaseFill)"
                      stroke="rgba(201, 174, 115, 0.30)"
                      strokeWidth="1"
                    />
                    <text
                      x={x + 20}
                      y="92"
                      fill="#C4A96B"
                      fontSize="22"
                      fontFamily="Cormorant Garamond"
                    >
                      {phase.number}
                    </text>
                    <text
                      x={x + 20}
                      y="122"
                      fill="#F5F3EE"
                      fontSize={labelLines.length > 1 ? 15 : 17}
                      fontFamily="DM Sans"
                    >
                      <tspan x={x + 20} dy="0">{labelLines[0]}{labelLines.length > 1 ? ' &' : ''}</tspan>
                      {labelLines.length > 1 ? (
                        <tspan x={x + 20} dy="18">{labelLines[1]}</tspan>
                      ) : null}
                    </text>
                    <line
                      x1={x + 20}
                      y1={labelLines.length > 1 ? 152 : 138}
                      x2={x + 62}
                      y2={labelLines.length > 1 ? 152 : 138}
                      stroke="rgba(201,174,115,0.55)"
                      strokeWidth="1"
                    />

                    {index < phases.length - 1 ? (
                      <line
                        x1={x + rectW}
                        y1="110"
                        x2={x + rectW + gap}
                        y2="110"
                        stroke="#C4A96B"
                        strokeWidth="1.4"
                        strokeDasharray="4 4"
                        markerEnd="url(#arrowhead)"
                      />
                    ) : null}
                  </g>
                )
              })}
            </svg>
          </MotionDiv>
      </section>
    </>
  )
}

export default Methodology
