import { motion } from 'framer-motion'

const MotionArticle = motion.article

const caseStudies = [
  {
    clientType: 'Manufacturing SME',
    problem:
      'Month-end close took 18 days across three entities, with consolidations managed in spreadsheets.',
    solution:
      'Delivered a finance-led NetSuite implementation with intercompany workflows, chart of accounts redesign, and controlled data migration.',
    outcome: [
      { metric: '18 -> 3 days', label: 'Month-end close cycle' },
      { metric: '72%', label: 'Less manual reporting' },
      { metric: 'Q1', label: 'Audit-ready post go-live' },
    ],
  },
  {
    clientType: 'SaaS Growth Company',
    problem:
      'Revenue recognition was fragmented across tools, creating risk during investor and audit reviews.',
    solution:
      'Implemented ASC 606 workflows, standardized controls, and aligned ERP reporting with board and diligence requirements.',
    outcome: [
      { metric: '100%', label: 'ASC 606 compliance' },
      { metric: '6 weeks', label: 'Transformation timeline' },
      { metric: '$18M', label: 'Capital raised post-project' },
    ],
  },
  {
    clientType: 'Professional Services Firm',
    problem:
      'Project billing and spend tracking lived in disconnected systems with limited margin visibility.',
    solution:
      'Unified operations in Dynamics 365 and automated project billing, AP workflows, and profitability dashboards.',
    outcome: [
      { metric: '4 -> 1', label: 'Systems consolidated' },
      { metric: '50%', label: 'Faster AP cycle time' },
      { metric: 'Real-time', label: 'Project margin reporting' },
    ],
  },
]

function CaseStudies() {
  return (
    <section id="case-studies" className="border-b border-slate-200 bg-slate-50">
      <div className="section-shell section-space">
        <p className="section-kicker">Case Studies</p>
        <h2 className="section-title">
          Proven outcomes in complex ERP programs.
        </h2>
        <p className="section-copy">
          Every engagement is measured against clear finance outcomes, implementation
          quality, and operational reliability.
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <MotionArticle
              key={study.clientType}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
              whileHover={{ y: -2 }}
              className="card-surface p-8 transition-colors hover:border-slate-300"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                {study.clientType}
              </p>

              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Problem
                  </h3>
                  <p className="mt-2">{study.problem}</p>
                </div>

                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Solution
                  </h3>
                  <p className="mt-2">{study.solution}</p>
                </div>
              </div>

              <div className="mt-7 border-t border-slate-200 pt-5">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Outcome
                </h3>
                <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {study.outcome.map((item) => (
                    <div key={item.label}>
                      <dt className="text-xl font-semibold tracking-tight text-slate-900">
                        {item.metric}
                      </dt>
                      <dd className="mt-1 text-xs text-slate-500">{item.label}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
