import Button from '../components/Button'
import FadeUp from '../components/FadeUp'

const requirements = [
  {
    title: 'Five Mandatory P&L Categories',
    detail: 'Operating, Investing, Financing, Income Tax, and Discontinued Operations.',
  },
  {
    title: 'Mandatory Subtotals',
    detail: 'Operating Profit and Profit Before Financing and Income Taxes must be presented natively.',
  },
  {
    title: 'Management Performance Measures',
    detail: 'Non-IFRS metrics must be disclosed with full IFRS reconciliation.',
  },
  {
    title: 'Disaggregation Restrictions',
    detail: '"Other" catch-all line items are now severely restricted; granular breakdowns are required.',
  },
]

const erpImpacts = [
  {
    title: 'Chart of Accounts',
    detail: 'Must support five-category classification at the transaction level.',
  },
  {
    title: 'Reporting Dimensions',
    detail: 'May need additional dimensions for disaggregation and reconciliations.',
  },
  {
    title: 'Consolidation Logic',
    detail: 'Must apply consistent IFRS 18 categorization across entities.',
  },
  {
    title: 'Comparative Data',
    detail: '2027 financials must include 2026 comparatives produced under IFRS 18.',
  },
  {
    title: 'ERP Configuration',
    detail: 'The ERP must produce the new subtotals and disclosures natively, not via spreadsheets.',
  },
]

const phase0Criteria = [
  'COA design includes IFRS 18 category mapping',
  'URS includes IFRS 18 reporting requirements',
  'ERP boundary diagram identifies IFRS 18 reporting location',
  'Vendor scorecards evaluate IFRS 18 native support',
]

function IFRS18() {
  return (
    <>
      <section className="section-shell flex min-h-[58svh] items-end py-20 pt-32 md:pt-36">
        <div>
          <FadeUp>
            <p className="kicker">IFRS 18 — ERP Readiness</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="mt-6 max-w-4xl">Mandatory January 1, 2027. Comparatives start now.</h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-7 max-w-3xl text-lg text-[var(--color-text-muted)]">
              IFRS 18 replaces IAS 1. Because 2027 financials must include comparative
              data, ERP systems must produce IFRS 18-compliant data throughout 2026.
              Configuration that doesn't support this will not survive the transition.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section-shell py-20">
        <FadeUp>
          <p className="kicker">Core Requirements</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-4 max-w-3xl">Four structural changes to financial reporting.</h2>
        </FadeUp>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {requirements.map((req, index) => (
            <FadeUp key={req.title} delay={0.06 + index * 0.04}>
              <article className="glass-panel h-full rounded-2xl p-6">
                <p className="font-heading text-2xl text-[var(--color-gold)]/80">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-lg text-[var(--color-white)]">{req.title}</h3>
                <p className="mt-3 text-sm text-[var(--color-text-muted)]">{req.detail}</p>
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
            <p className="kicker">What This Means for ERP</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 max-w-3xl">Five system-level implications.</h2>
          </FadeUp>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {erpImpacts.map((item, index) => (
              <FadeUp key={item.title} delay={0.05 + index * 0.04}>
                <article className="glass-panel h-full rounded-2xl p-6">
                  <h3 className="text-lg text-[var(--color-white)]">{item.title}</h3>
                  <div className="mt-3 h-px w-12 bg-[var(--color-gold)]/70" />
                  <p className="mt-4 text-sm text-[var(--color-text-muted)]">{item.detail}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <FadeUp>
          <p className="kicker">Why This Matters for Phase 0</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-4 max-w-3xl">IFRS 18 readiness is now a selection criterion.</h2>
        </FadeUp>

        <div className="glass-panel mt-10 rounded-3xl p-7 md:p-9">
          <ul className="timeline-dash grid gap-3 text-sm text-[var(--color-text)] md:grid-cols-2">
            {phase0Criteria.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell py-16 text-center md:py-20">
        <FadeUp>
          <Button to="/contact" variant="primary">
            Plan Your IFRS 18 Readiness
          </Button>
        </FadeUp>
      </section>
    </>
  )
}

export default IFRS18
