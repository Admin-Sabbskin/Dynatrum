import Button from '../components/Button'
import FadeUp from '../components/FadeUp'

const causes = [
  {
    title: 'Requirements shaped by vendors',
    detail: 'Not by the business. The system gets configured around what is easy to demo, not what the operation needs.',
  },
  {
    title: 'Nobody documented what actually happens',
    detail: 'Process reality is replaced with assumptions. Edge cases surface during UAT, not during design.',
  },
  {
    title: 'Scope was never properly bounded',
    detail: 'Without an ERP boundary diagram, scope creep becomes a certainty.',
  },
  {
    title: 'Team capacity never assessed',
    detail: 'The project either stalls or the day job breaks. Usually both.',
  },
  {
    title: 'TCO never calculated',
    detail: 'Only licensing is visible upfront. Implementation, training, and migration costs surface mid-program.',
  },
]

const deliverables = [
  {
    number: '01',
    title: 'Business Process Discovery Report',
    bullets: [
      'Current-state process maps by business function',
      'Pain points, root causes, improvement recommendations',
      'Controls and approvals baseline',
      'Gap analysis: spreadsheets and manual workarounds',
    ],
  },
  {
    number: '02',
    title: 'User Requirements Specification',
    bullets: [
      'Functional requirements in business language',
      'Must / Should / Could prioritization matrix',
      'Roles, permissions, and SoD considerations',
    ],
  },
  {
    number: '03',
    title: 'Key Functionality Objectives',
    bullets: [
      'Prioritized list that filters ERP candidates',
      'Linked directly to business outcomes',
    ],
  },
  {
    number: '04',
    title: 'Data Architecture Design',
    bullets: [
      'Target Chart of Accounts with required dimensions',
      'Reporting structure aligned to IFRS / GAAP',
    ],
  },
  {
    number: '05',
    title: 'ERP Boundary Diagram',
    bullets: [
      'What belongs in ERP vs. what stays elsewhere',
      'Integration architecture across the application landscape',
    ],
  },
  {
    number: '06',
    title: 'Selection Toolkit',
    bullets: [
      'Weighted evaluation scorecard',
      'Demo scripts built on real scenarios',
      'Evidence checklist for vendor responses',
    ],
  },
  {
    number: '07',
    title: 'Resource Capacity Assessment',
    bullets: [
      'Bandwidth analysis of key personnel',
      'Risk assessment for resource bottlenecks',
    ],
  },
  {
    number: '08',
    title: 'Total Cost of Ownership Analysis',
    bullets: [
      'Licensing, implementation, training, migration costs',
      'ROI framework and cashflow impact analysis',
    ],
  },
]

const engagement = [
  'Up to 4 stakeholder interviews (60–90 min each)',
  'Up to 4 workshops (60–90 min each)',
  'Weekly sponsor check-in',
  'Up to 3 vendor demos with structured scoring',
  'Executive readout and Phase 0 pack delivery',
]

function Phase0() {
  return (
    <>
      <section className="section-shell flex min-h-[58svh] items-end py-20 pt-32 md:pt-36">
        <div>
          <FadeUp>
            <p className="kicker">Phase 0 — The Dynatrum Difference</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="mt-6 max-w-4xl">De-risk ERP before it starts.</h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-7 max-w-3xl text-lg text-[var(--color-text-muted)]">
              Over 70% of ERP implementations fail to meet their original business case.
              The causes are predictable. Phase 0 is the control layer that defines scope,
              cost, and execution discipline before any vendor is selected.
            </p>
          </FadeUp>
          <FadeUp delay={0.14}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact" variant="primary">
                Start Phase 0
              </Button>
              <Button to="/methodology" variant="ghost">
                See Delivery Methodology
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-shell py-20">
        <FadeUp>
          <p className="kicker">Why Phase 0 Exists</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-4 max-w-3xl">The failure patterns are predictable.</h2>
        </FadeUp>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {causes.map((cause, index) => (
            <FadeUp key={cause.title} delay={0.06 + index * 0.04}>
              <article className="glass-panel h-full rounded-2xl p-6">
                <p className="font-heading text-2xl text-[var(--color-gold)]/80">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-lg text-[var(--color-white)]">{cause.title}</h3>
                <p className="mt-3 text-sm text-[var(--color-text-muted)]">{cause.detail}</p>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="aurora-band relative py-20">
        <div className="section-shell">
          <div className="section-rule" aria-hidden="true" />
        </div>
        <div className="section-shell">
          <FadeUp>
            <p className="kicker">What Phase 0 Produces</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 max-w-3xl">Eight artifacts. All system-agnostic. All yours to keep.</h2>
          </FadeUp>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {deliverables.map((d, index) => (
              <FadeUp key={d.title} delay={0.05 + index * 0.03}>
                <article className="card-hover glass-panel h-full rounded-2xl p-7">
                  <div className="flex items-baseline justify-between">
                    <p className="kicker">Deliverable {d.number}</p>
                    <span className="font-heading text-xl text-[var(--color-gold)]/70">
                      {d.number}
                    </span>
                  </div>
                  <h3 className="mt-4">{d.title}</h3>
                  <ul className="timeline-dash mt-5 space-y-2.5 text-sm text-[var(--color-text)]">
                    {d.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <FadeUp>
          <p className="kicker">Engagement Structure</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-4 max-w-3xl">Fixed-scope. Fixed-fee. 15–25 business days.</h2>
        </FadeUp>

        <div className="glass-panel mt-10 rounded-3xl p-7 md:p-9">
          <ul className="timeline-dash grid gap-3 text-sm text-[var(--color-text)] md:grid-cols-2">
            {engagement.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell py-20 md:py-24">
        <div className="section-rule" aria-hidden="true" />
        <div className="mt-16">
          <FadeUp>
            <p className="kicker">Next Step</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 max-w-3xl text-gradient-gold">Turn ERP from a risk into a controlled program.</h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">
              Start with a Phase 0 conversation. No obligation.
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

export default Phase0
