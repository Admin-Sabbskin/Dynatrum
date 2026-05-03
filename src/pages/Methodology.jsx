import { motion } from 'framer-motion'
import FadeUp from '../components/FadeUp'

const MotionDiv = motion.div

const phases = [
  {
    number: '01',
    name: 'Diagnose',
    description:
      'We begin by mapping your current finance process landscape and identifying operational pain points that impact reporting, close cycle, and control quality.',
    activities: [
      'Business analysis',
      'Pain point identification',
      'ERP readiness assessment',
    ],
    signal: 'Risk heatmap and control gaps documented.',
    metricLabel: 'Readiness confidence',
    metricValue: '68%',
  },
  {
    number: '02',
    name: 'Design',
    description:
      'With baseline clarity in place, we define requirements, architecture, and governance standards that align ERP capabilities with finance outcomes.',
    activities: [
      'Requirements mapping',
      'Solution architecture',
      'ERP selection and governance alignment',
    ],
    signal: 'Future-state model validated by finance leadership.',
    metricLabel: 'Design sign-off speed',
    metricValue: '2.1x',
  },
  {
    number: '03',
    name: 'Deploy',
    description:
      'Execution is managed through disciplined sprint milestones covering build, migration, testing, and validation gates before launch.',
    activities: [
      'System implementation',
      'Data migration',
      'Testing and validation',
    ],
    signal: 'Milestone board in control with clear ownership.',
    metricLabel: 'Delivery predictability',
    metricValue: '91%',
  },
  {
    number: '04',
    name: 'Stabilize',
    description:
      'Post go-live, we focus on adoption continuity, issue resolution, and practical enablement so teams can operate with confidence from day one.',
    activities: [
      'Go-live support',
      'Issue resolution',
      'User training and support',
    ],
    signal: 'Adoption and issue triage rhythm stabilized.',
    metricLabel: 'Go-live issue turnaround',
    metricValue: '48h',
  },
  {
    number: '05',
    name: 'Scale',
    description:
      'Once the foundation is stable, we optimize workflows, automate repetitive controls, and unlock advanced reporting for long-term enterprise value.',
    activities: [
      'Process optimization',
      'Automation enablement',
      'Advanced reporting and analytics',
    ],
    signal: 'Continuous optimization backlog activated.',
    metricLabel: 'Automation opportunity',
    metricValue: '+37%',
  },
]

function Methodology() {
  return (
    <>
      <section className="section-shell flex min-h-[58svh] items-end py-20 pt-32 md:pt-36">
        <div>
          <FadeUp>
            <h1 className="max-w-4xl">The five-phase framework.</h1>
          </FadeUp>
          <FadeUp delay={0.05}>
            <p className="mt-7 max-w-3xl text-lg text-[var(--color-text-muted)]">
              Every engagement follows the same disciplined structure - because ERP
              transformations fail when process is improvised.
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

      {phases.map((phase, index) => (
        <section key={phase.name} className="aurora-band relative">
          <div className="section-shell">
            <div className="section-rule" aria-hidden="true" />
          </div>
          <div className="section-shell py-20 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[210px_1fr] lg:gap-14">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <p className="font-heading text-7xl leading-none text-[var(--color-gold)]">
                  {phase.number}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.24em] text-[var(--color-gold)]">
                  {phase.name}
                </p>
                <div className="mt-4 h-px w-16 bg-[var(--color-gold)]/60" />
              </div>

              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
                <FadeUp>
                  <article>
                    <h2>{phase.name}</h2>
                    <p className="mt-7 max-w-3xl text-[var(--color-text-muted)]">{phase.description}</p>

                    <ul className="timeline-dash mt-8 space-y-3 text-sm">
                      {phase.activities.map((activity) => (
                        <li key={activity}>{activity}</li>
                      ))}
                    </ul>
                  </article>
                </FadeUp>

                <MotionDiv
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.32 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="card-hover glass-panel h-fit rounded-[1.5rem] p-6"
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
          </div>
        </section>
      ))}

      <section className="section-shell py-20 md:py-24">
        <FadeUp>
          <p className="kicker text-center">Flow Diagram</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mx-auto mt-4 max-w-4xl text-balance text-center">
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
              viewBox="0 0 1040 220"
              className="h-[220px] w-full min-w-[960px]"
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
                const x = 20 + index * 204
                return (
                  <g key={phase.name}>
                    <rect
                      x={x}
                      y="58"
                      width="168"
                      height="104"
                      rx="18"
                      fill="url(#phaseFill)"
                      stroke="rgba(201, 174, 115, 0.30)"
                      strokeWidth="1"
                    />
                    <text
                      x={x + 18}
                      y="94"
                      fill="#C4A96B"
                      fontSize="22"
                      fontFamily="Cormorant Garamond"
                    >
                      {phase.number}
                    </text>
                    <text
                      x={x + 18}
                      y="126"
                      fill="#F5F3EE"
                      fontSize="17"
                      fontFamily="DM Sans"
                    >
                      {phase.name}
                    </text>
                    <line
                      x1={x + 18}
                      y1="140"
                      x2={x + 60}
                      y2="140"
                      stroke="rgba(201,174,115,0.55)"
                      strokeWidth="1"
                    />

                    {index < phases.length - 1 ? (
                      <line
                        x1={x + 168}
                        y1="110"
                        x2={x + 204}
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
