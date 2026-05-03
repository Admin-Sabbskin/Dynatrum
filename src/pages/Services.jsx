import { motion } from 'framer-motion'
import Button from '../components/Button'
import FadeUp from '../components/FadeUp'

const MotionDiv = motion.div

const serviceBlocks = [
  {
    number: '01',
    title: 'ERP Advisory',
    description:
      'Start with clarity before investment. We assess process maturity, identify risk points, and define what a finance-ready ERP environment should look like for your business model.',
    deliverables: [
      'ERP recommendation report',
      'Vendor comparison matrix',
      'Implementation roadmap',
    ],
    platforms: 'Platform-independent advisory tailored to your finance priorities.',
    signal: 'Readiness and risk baseline established.',
    impact: 'Faster executive decisions before platform commitment.',
  },
  {
    number: '02',
    title: 'ERP Implementation',
    description:
      'Implementation is executed through controlled milestones across configuration, migration, testing, and launch. The approach keeps finance ownership visible from requirements to go-live signoff.',
    deliverables: [
      'Configured ERP system',
      'Migration logs',
      'UAT documentation',
    ],
    platforms: 'Platforms: SAP S/4HANA, Oracle NetSuite, Microsoft Dynamics 365, Odoo.',
    signal: 'Governed milestones with finance ownership.',
    impact: 'Reduced go-live surprises and cutover risk.',
  },
  {
    number: '03',
    title: 'Finance Transformation',
    description:
      'Technology alone does not fix finance operations. We redesign structures, policies, and controls so financial reporting, compliance, and leadership visibility improve together.',
    deliverables: [
      'Financial structure documentation',
      'Control frameworks',
      'Audit-ready reporting setup',
    ],
    platforms: 'Financial governance and reporting architecture aligned with ERP capabilities.',
    signal: 'Controls and reporting logic unified.',
    impact: 'Higher confidence in board and audit reporting.',
  },
  {
    number: '04',
    title: 'Post-Go-Live Support',
    description:
      'After launch, we help teams stabilize performance and refine workflows. Support focuses on measurable outcomes, adoption continuity, and the next layer of optimization.',
    deliverables: [
      'Performance reports',
      'Optimization plans',
      'Improvement logs',
    ],
    platforms: 'Continuous advisory for scaling operations and finance intelligence.',
    signal: 'Stability and optimization loop activated.',
    impact: 'Sustained value beyond initial launch.',
  },
]

function Services() {
  return (
    <>
      <section className="section-shell flex min-h-[58svh] items-end py-20 pt-32 md:pt-36">
        <div>
          <p className="kicker">Services</p>
          <h1 className="mt-6 max-w-4xl">Finance-led ERP, start to finish.</h1>
          <p className="mt-7 max-w-3xl text-lg text-[var(--color-text-muted)]">
            Structured offerings built around how finance teams actually operate -
            not just how ERP vendors want to sell.
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

      <section className="section-shell py-20 text-center md:py-24">
        <FadeUp>
          <h2 className="text-gradient-gold">Need a scoped ERP transformation plan?</h2>
        </FadeUp>
        <FadeUp delay={0.05}>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-muted)]">
            Start with a consultation and get a structured, finance-led next-step plan.
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <Button to="/contact" variant="primary" className="mt-8">
            Book Consultation
          </Button>
        </FadeUp>
      </section>
    </>
  )
}

export default Services
