import { Link } from 'react-router-dom'
import Button from '../components/Button'
import FadeUp from '../components/FadeUp'

const articles = [
  {
    number: '01',
    title: 'Why every ERP project needs a Phase 0',
    tag: 'Phase 0',
    summary:
      'Phase 0 is the control layer that defines scope, cost, and execution discipline before any vendor is selected.',
    to: '/phase-0',
    status: 'Read now',
  },
  {
    number: '02',
    title: 'The hidden cost of letting vendors run your requirements',
    tag: 'Selection',
    summary:
      'When vendors shape requirements, you optimize for the demo. Independent requirements protect the business case.',
    status: 'Coming Soon',
  },
  {
    number: '03',
    title: 'Crawl, Walk, Run: why phased rollouts win',
    tag: 'Implementation',
    summary:
      'Big-bang rollouts are where ERP programs go to die. Sequenced value delivery stabilizes adoption.',
    status: 'Coming Soon',
  },
  {
    number: '04',
    title: 'Your Chart of Accounts is the backbone of your ERP',
    tag: 'Process',
    summary:
      'COA design decisions made on day one will limit reporting flexibility for the next ten years.',
    status: 'Coming Soon',
  },
  {
    number: '05',
    title: 'D365 F&O vs Business Central',
    tag: 'Dynamics 365',
    summary:
      'A practical decision framework for choosing between D365 Finance & Operations and Business Central.',
    status: 'Coming Soon',
  },
  {
    number: '06',
    title: "AI in ERP: what's real in 2026",
    tag: 'AI + ERP',
    summary:
      'Microsoft Copilot has evolved into agentic ERP. Here is what is production-ready and what still requires governance.',
    to: '/insights/ai-copilot',
    status: 'Read now',
  },
  {
    number: '07',
    title: 'IFRS 18: ERP readiness by 2026',
    tag: 'IFRS 18',
    summary:
      'IFRS 18 is mandatory January 2027 — but comparatives mean ERPs must produce compliant data throughout 2026.',
    to: '/insights/ifrs-18',
    status: 'Read now',
  },
]

function Insights() {
  return (
    <>
      <section className="section-shell flex min-h-[58svh] items-end py-20 pt-32 md:pt-36">
        <div>
          <FadeUp>
            <p className="kicker">Insights</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="mt-6 max-w-4xl">Field notes on ERP, Phase 0, and finance transformation.</h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-7 max-w-3xl text-lg text-[var(--color-text-muted)]">
              Practical perspectives from the engagements we run &mdash; selection,
              implementation, controls, and the realities of AI in modern ERP.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="section-rule" aria-hidden="true" />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => {
            const isLive = Boolean(article.to)
            const Card = (
              <article
                className={`card-hover glass-panel h-full rounded-2xl p-7 ${
                  isLive ? 'cursor-pointer' : ''
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <p className="font-heading text-2xl text-[var(--color-gold)]/80">
                    {article.number}
                  </p>
                  <span className="rounded-full border border-[rgba(201,174,115,0.32)] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--color-gold)]">
                    {article.tag}
                  </span>
                </div>
                <h3 className="mt-5">{article.title}</h3>
                <p className="mt-4 text-sm text-[var(--color-text-muted)]">{article.summary}</p>
                <p
                  className={`mt-6 text-xs uppercase tracking-[0.18em] ${
                    isLive ? 'text-[var(--color-gold)]' : 'text-[var(--color-text-muted)]'
                  }`}
                >
                  {article.status} {isLive ? '→' : ''}
                </p>
              </article>
            )

            return (
              <FadeUp key={article.title} delay={0.05 + index * 0.04}>
                {isLive ? <Link to={article.to}>{Card}</Link> : Card}
              </FadeUp>
            )
          })}
        </div>
      </section>

      <section className="section-shell py-16 text-center md:py-20">
        <FadeUp>
          <h2 className="text-gradient-gold">Want a topic covered?</h2>
        </FadeUp>
        <FadeUp delay={0.05}>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-muted)]">
            Email us a question and we'll address it in an upcoming article.
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <Button to="/contact" variant="primary" className="mt-8">
            Get in Touch
          </Button>
        </FadeUp>
      </section>
    </>
  )
}

export default Insights
