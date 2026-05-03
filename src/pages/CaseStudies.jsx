import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Button from '../components/Button'
import FadeUp from '../components/FadeUp'

const MotionArticle = motion.article

const caseStudies = [
  {
    id: '01',
    industry: 'Manufacturing',
    challenge: 'Outgrown QuickBooks, multi-entity chaos, no audit trail.',
    solution: 'Oracle NetSuite implementation with custom financial structure.',
    result: '40% reduction in month-end close time',
    tags: ['NetSuite', 'Manufacturing', 'Finance Transformation'],
  },
  {
    id: '02',
    industry: 'SaaS / Technology',
    challenge: 'Investor due diligence required GAAP-compliant reporting.',
    solution:
      'Revenue recognition configuration plus chart of accounts redesign for governance.',
    result: 'Audit-ready financials in 8 weeks',
    tags: ['SAP', 'SaaS', 'Revenue Recognition'],
  },
  {
    id: '03',
    industry: 'Retail / eCommerce',
    challenge: 'Legacy system limitations, vendor end-of-life, scaling operations.',
    solution: 'Microsoft Dynamics 365 phased rollout with secure data migration.',
    result: 'Zero data loss migration across 5 legal entities',
    tags: ['Dynamics 365', 'Retail', 'Data Migration'],
  },
]

function CaseStudyCard({ study, index, total }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { amount: 0.55, margin: '-15% 0px -40% 0px' })
  const isLast = index === total - 1

  return (
    <MotionArticle
      ref={cardRef}
      className={`card-hover glass-panel rounded-[2rem] p-7 md:sticky md:p-10 ${isLast ? '' : 'md:mb-[18vh]'}`}
      style={{ top: `calc(6rem + ${index * 1.2}rem)`, zIndex: 30 - index }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.965, opacity: 0.8 }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <p className="kicker">Case Study {study.id}</p>
            <span className="h-px flex-1 max-w-[120px] bg-[var(--color-gold)]/40" />
          </div>
          <h2 className="mt-4 text-[clamp(1.8rem,3.8vw,2.8rem)]">{study.industry}</h2>

          <div className="mt-7 space-y-5 text-sm leading-7 text-[var(--color-text-muted)]">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">Challenge</p>
              <p className="mt-2 text-base text-[var(--color-text)]">{study.challenge}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">Solution</p>
              <p className="mt-2 text-base text-[var(--color-text)]">{study.solution}</p>
            </div>
          </div>
        </div>

        <div className="gold-frost flex flex-col justify-between rounded-2xl p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">Result</p>
            <p className="mt-4 font-heading text-[clamp(1.8rem,2.6vw,2.4rem)] font-light leading-[1.1] text-[var(--color-white)]">
              {study.result}
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="glass-soft rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </MotionArticle>
  )
}

function CaseStudies() {
  return (
    <>
      <section className="section-shell flex min-h-[58svh] items-end py-20 pt-32 md:pt-36">
        <div>
          <p className="kicker">Outcomes</p>
          <h1 className="mt-6 max-w-4xl">Transformations that moved the needle.</h1>
          <p className="mt-7 max-w-3xl text-lg text-[var(--color-text-muted)]">
            Three engagements, three platforms, three measurable outcomes — each
            engineered around how finance teams actually need to operate.
          </p>
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="section-rule" aria-hidden="true" />
        <div className="mt-14 space-y-6 md:space-y-0">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} total={caseStudies.length} />
          ))}
        </div>

        <FadeUp>
          <p className="mx-auto mt-16 max-w-3xl text-center text-sm text-[var(--color-text-muted)]">
            Case details presented are representative of engagements. Specific client
            details shared under NDA upon request.
          </p>
        </FadeUp>
      </section>

      <section className="section-shell py-16 text-center md:py-20">
        <FadeUp>
          <Button to="/contact" variant="primary">
            Discuss Your ERP Program
          </Button>
        </FadeUp>
      </section>
    </>
  )
}

export default CaseStudies
