import Button from '../components/Button'
import FadeUp from '../components/FadeUp'

const capabilities = [
  {
    title: 'Finance Agent',
    detail:
      'Analyzes financial performance, automates reconciliation, and surfaces anomalies in close cycles.',
  },
  {
    title: 'Sales Agent',
    detail:
      'Pulls CRM and Microsoft 365 context to recommend prioritized actions for sellers.',
  },
  {
    title: 'Supply Chain Intelligence',
    detail:
      'Predictive planning and automated decisioning across demand, inventory, and logistics.',
  },
  {
    title: 'Business Central Agents',
    detail:
      'Custom agents authored in natural language, scoped to specific business processes.',
  },
  {
    title: 'Work IQ Integration',
    detail:
      'Interact with D365 data directly from Teams, Outlook, and Power Apps.',
  },
]

const implications = [
  {
    title: 'Data quality is the gate',
    detail: 'Copilot is only as good as the data behind it. Master data and reporting structures matter more, not less.',
  },
  {
    title: 'Governance is non-negotiable',
    detail: 'AI requires permission structures, audit trails, and clear guardrails to be safe in finance and operations.',
  },
  {
    title: 'AI is not for workflow approvals',
    detail: 'Use it to assist decision-making, not replace controlled approval flows.',
  },
  {
    title: 'Cloud-first reality',
    detail: 'Wave 1 capabilities are cloud-based. On-prem strategies need re-evaluation.',
  },
]

const position = [
  'Use AI for pattern recognition, anomaly detection, and reporting',
  'Ensure AI is auditable and permission-aware',
  'Build AI adoption into change management',
  'Evaluate AI costs: Copilot licensing, agent credits, Azure consumption',
]

function AICopilot() {
  return (
    <>
      <section className="section-shell flex min-h-[58svh] items-end py-20 pt-32 md:pt-36">
        <div>
          <FadeUp>
            <p className="kicker">AI &amp; Copilot in ERP</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="mt-6 max-w-4xl">What's real in 2026.</h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-7 max-w-3xl text-lg text-[var(--color-text-muted)]">
              Microsoft Dynamics 365 Copilot has evolved from a chatbot into AI agents
              that can reason over live ERP data and execute within guardrails. The
              question is no longer if AI belongs in ERP &mdash; it's how to govern it.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section-shell py-20">
        <FadeUp>
          <p className="kicker">2026 Release Wave 1</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-4 max-w-3xl">From chatbot to agentic ERP.</h2>
        </FadeUp>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((cap, index) => (
            <FadeUp key={cap.title} delay={0.06 + index * 0.04}>
              <article className="glass-panel h-full rounded-2xl p-6">
                <p className="font-heading text-2xl text-[var(--color-gold)]/80">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-lg text-[var(--color-white)]">{cap.title}</h3>
                <p className="mt-3 text-sm text-[var(--color-text-muted)]">{cap.detail}</p>
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
            <p className="kicker">What This Means for ERP Selection</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 max-w-3xl">AI changes selection criteria.</h2>
          </FadeUp>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {implications.map((item, index) => (
              <FadeUp key={item.title} delay={0.05 + index * 0.04}>
                <article className="glass-panel h-full rounded-2xl p-7">
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
          <p className="kicker">Dynatrum's Position</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-4 max-w-3xl">AI readiness is part of every Phase 0.</h2>
        </FadeUp>

        <div className="glass-panel mt-10 rounded-3xl p-7 md:p-9">
          <ul className="timeline-dash grid gap-3 text-sm text-[var(--color-text)] md:grid-cols-2">
            {position.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell py-16 text-center md:py-20">
        <FadeUp>
          <Button to="/contact" variant="primary">
            Discuss AI Readiness
          </Button>
        </FadeUp>
      </section>
    </>
  )
}

export default AICopilot
