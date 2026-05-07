import { motion } from 'framer-motion'
import Button from '../components/Button'
import FadeUp from '../components/FadeUp'

const MotionDiv = motion.div

const serviceBlocks = [
  {
    number: '01',
    title: 'ERP Advisory',
    description:
      'A fixed-fee Phase 0 diagnostic that produces a decision-grade package: business process discovery, user requirements specification, weighted vendor scorecards, and a clear ERP boundary diagram — before any vendor is selected.',
    deliverables: [
      'Business process discovery report',
      'User requirements specification',
      'Weighted vendor selection scorecard',
      'Implementation roadmap',
    ],
    platforms: 'Vendor-independent advisory — we never resell software or take vendor commissions.',
    signal: 'Scope, cost, and execution discipline locked before vendor selection.',
    impact: 'ERP turns from a risk into a controlled program.',
  },
  {
    number: '02',
    title: 'ERP Implementation',
    description:
      'PMP-certified delivery of configuration, data migration, UAT coordination, and go-live execution — governed by phase gates and executed in sprints.',
    deliverables: [
      'Configured ERP system',
      'Data migration logs and reconciliations',
      'UAT scripts and signoff records',
      'Cutover and go-live plan',
    ],
    platforms: 'Platforms: Dynamics 365, Oracle EBS, SAP, Hyperion, Epicor, Sage, Acumatica.',
    signal: 'Governed milestones with cross-functional ownership.',
    impact: 'Reduced go-live surprises and audit-ready cutover.',
  },
  {
    number: '03',
    title: 'Business Process Transformation',
    description:
      'Process redesign, data architecture, and controls alignment across Finance, Operations, Procurement, and IT — so the ERP encodes good processes, not legacy ones.',
    deliverables: [
      'Chart of Accounts design',
      'Reporting and consolidation architecture',
      'Controls and SoD framework',
      'IFRS / GAAP / IFRS 18 mapping',
    ],
    platforms: 'System-agnostic process and controls work — every artifact is yours to keep.',
    signal: 'Controls move from spreadsheets into the system.',
    impact: 'Higher confidence in board, audit, and regulatory reporting.',
  },
  {
    number: '04',
    title: 'Post-Go-Live Support',
    description:
      'Hyper-care, user training, optimization, and system health checks — so adoption sticks and the system keeps improving after launch.',
    deliverables: [
      'Hyper-care issue triage',
      'User training and adoption plan',
      'Optimization backlog',
      'System health checks',
    ],
    platforms: 'Continuous advisory for scaling operations and reporting.',
    signal: 'Stabilization and optimization loop activated.',
    impact: 'Sustained value beyond initial launch.',
  },
]

function Services() {
  return (
    <>
      <section className="section-shell flex min-h-[58svh] items-end py-20 pt-32 md:pt-36">
        <div>
          <p className="kicker">Services</p>
          <h1 className="mt-6 max-w-4xl">Four pillars of ERP transformation.</h1>
          <p className="mt-7 max-w-3xl text-lg text-[var(--color-text-muted)]">
            Vendor-independent, PMP-aligned offerings spanning advisory through optimization —
            built to de-risk ERP before it starts and execute it under audit-grade controls.
          </p>

          <div className="mt-8 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
            {serviceBlocks.map((service) => (
              <span
                key={service.number}
                className="glass-soft rounded-full px-3.5 py-1.5"
              >
                {service.number} {service.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      {serviceBlocks.map((service, index) => {
        const flipLayout = index % 2 === 1

        return (
          <section key={service.title} className="aurora-band relative">
            <div className="section-shell">
              <div className="section-rule" aria-hidden="true" />
            </div>
            <div className="section-shell py-20 md:py-24">
              <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <FadeUp className={flipLayout ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <p className="pointer-events-none absolute -top-10 -left-2 select-none font-heading text-[clamp(5rem,18vw,7.4rem)] leading-none text-[rgba(201,174,115,0.10)]">
                      {service.number}
                    </p>
                    <h2 className="relative">{service.title}</h2>
                    <div className="mt-5 h-px w-24 bg-[var(--color-gold)]/70" />
                    <p className="mt-7 text-[var(--color-text-muted)]">{service.description}</p>

                    <ul className="timeline-dash mt-7 space-y-3 text-sm text-[var(--color-text)]">
                      {service.deliverables.map((deliverable) => (
                        <li key={deliverable}>{deliverable}</li>
                      ))}
                    </ul>

                    <p className="mt-7 text-sm text-[var(--color-steel)]">{service.platforms}</p>
                  </div>
                </FadeUp>

                <MotionDiv
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 }}
                  className={flipLayout ? 'lg:order-1' : ''}
                >
                  <div className="card-hover glass-panel rounded-[1.8rem] p-7 md:p-9">
                    <div className="flex items-center justify-between">
                      <p className="kicker">Service Snapshot</p>
                      <span className="font-heading text-2xl text-[var(--color-gold)]/80">
                        {service.number}
                      </span>
                    </div>

                    <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {service.deliverables.map((deliverable) => (
                        <div
                          key={deliverable}
                          className="gold-frost rounded-xl px-4 py-3 text-sm text-[var(--color-text)]"
                        >
                          {deliverable}
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 grid gap-2.5 md:grid-cols-2">
                      <div className="glass-soft rounded-xl px-4 py-3">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-gold)]">
                          Service Signal
                        </p>
                        <p className="mt-2 text-sm text-[var(--color-text)]">{service.signal}</p>
                      </div>
                      <div className="glass-soft rounded-xl px-4 py-3">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-gold)]">
                          Expected Impact
                        </p>
                        <p className="mt-2 text-sm text-[var(--color-text)]">{service.impact}</p>
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              </div>
            </div>
          </section>
        )
      })}

      <section className="section-shell py-20 md:py-24">
        <div className="section-rule" aria-hidden="true" />
        <div className="mt-16">
          <FadeUp>
            <p className="kicker">Next Step</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 max-w-3xl text-gradient-gold">Need a scoped ERP transformation plan?</h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">
              Start with a Phase 0 conversation. 30 minutes. No obligation.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Button to="/contact" variant="primary" className="mt-8">
              Book Consultation
            </Button>
          </FadeUp>
        </div>
      </section>
    </>
  )
}

export default Services
