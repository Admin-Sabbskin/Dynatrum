import Button from '../components/Button'
import FadeUp from '../components/FadeUp'

const teamAreas = [
  {
    name: 'ERP Advisory & Discovery',
    detail:
      'Leads Phase 0 engagements from requirements gathering through vendor selection, with structured demos and weighted scorecards.',
  },
  {
    name: 'ERP Implementation & Governance',
    detail:
      'Manages program delivery with PMP-certified project management, phase gate governance, and risk control.',
  },
  {
    name: 'Finance Systems & Data Architecture',
    detail:
      'Designs Chart of Accounts, reporting architectures, and consolidation models aligned to IFRS, GAAP, and SOX.',
  },
  {
    name: 'Business Process Transformation',
    detail:
      'Conducts cross-functional process redesign, controls assessment, and change management across all departments.',
  },
  {
    name: 'Compliance & Risk Management',
    detail:
      'Evaluates regulatory requirements, audit readiness, and internal control frameworks across multi-entity programs.',
  },
]

const principles = [
  {
    title: 'Vendor Independence',
    detail: 'We do not resell software or take commissions from ERP vendors.',
  },
  {
    title: 'PMP-Certified Discipline',
    detail:
      'Every engagement follows the five PMP process groups: Initiating, Planning, Executing, Monitoring & Controlling, and Closing.',
  },
  {
    title: 'Cross-Functional Authority',
    detail:
      'We treat ERP as an integrated operating system serving Finance, Operations, Procurement, IT, and Executive leadership.',
  },
  {
    title: 'Process First, Technology Second',
    detail: 'We improve business processes before locking them into software.',
  },
  {
    title: 'Artifacts You Own',
    detail: 'Every deliverable is system-agnostic and yours to keep.',
  },
]

const experienceStats = [
  { value: '16+', label: 'Years of combined ERP leadership' },
  { value: '200+', label: 'Entity consolidations delivered' },
  { value: '25+', label: 'Countries of delivery experience' },
  { value: '5–8', label: 'Concurrent workstreams managed' },
]

const platforms = [
  'Dynamics 365',
  'Oracle EBS',
  'SAP',
  'Hyperion',
  'Epicor',
  'Sage',
  'Acumatica',
]

const industries = [
  'Pharmaceutical',
  'Oil & Gas',
  'Manufacturing',
  'Construction',
  'Retail',
]

const standards = ['IFRS', 'GAAP', 'SOX', 'IFRS 18']

function About() {
  return (
    <>
      <section className="section-shell flex min-h-[58svh] items-end py-20 pt-32 md:pt-36">
        <div>
          <FadeUp>
            <p className="kicker">About Dynatrum</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="mt-6 max-w-4xl">A specialized enterprise ERP consulting firm.</h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-7 max-w-3xl text-lg text-[var(--color-text-muted)]">
              Dynatrum is built on vendor independence and PMP-certified project discipline.
              We are a structured team with complementary expertise across ERP advisory,
              implementation governance, business process transformation, finance systems,
              and data architecture.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section-shell pb-12">
        <FadeUp>
          <p className="kicker">Our Team</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-4 max-w-3xl">Five functional areas, one delivery engine.</h2>
        </FadeUp>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {teamAreas.map((area, index) => (
            <FadeUp key={area.name} delay={0.06 + index * 0.04}>
              <article className="card-hover glass-panel h-full rounded-2xl p-7">
                <p className="font-heading text-3xl text-[var(--color-gold)]">
                  0{index + 1}
                </p>
                <h3 className="mt-4">{area.name}</h3>
                <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                  {area.detail}
                </p>
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
            <p className="kicker">What Defines Dynatrum</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 max-w-3xl">Principles that shape every engagement.</h2>
          </FadeUp>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {principles.map((principle, index) => (
              <FadeUp key={principle.title} delay={0.06 + index * 0.04}>
                <article className="glass-panel h-full rounded-2xl p-7">
                  <h3 className="text-xl text-[var(--color-white)]">{principle.title}</h3>
                  <div className="mt-3 h-px w-12 bg-[var(--color-gold)]/70" />
                  <p className="mt-4 text-sm text-[var(--color-text-muted)]">
                    {principle.detail}
                  </p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <FadeUp>
          <p className="kicker">Our Experience</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-4 max-w-3xl">Multi-stream programs, multi-region delivery.</h2>
        </FadeUp>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experienceStats.map((stat) => (
            <div key={stat.label} className="gold-frost rounded-2xl p-6">
              <p className="font-heading text-5xl text-[var(--color-white)]">{stat.value}</p>
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="glass-panel rounded-2xl p-6">
            <p className="kicker">ERP Platforms</p>
            <p className="mt-3 text-sm text-[var(--color-text-muted)]">
              {platforms.join(' · ')}
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-6">
            <p className="kicker">Industries</p>
            <p className="mt-3 text-sm text-[var(--color-text-muted)]">
              {industries.join(' · ')}
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-6">
            <p className="kicker">Standards</p>
            <p className="mt-3 text-sm text-[var(--color-text-muted)]">
              {standards.join(' · ')}
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 text-center md:py-20">
        <FadeUp>
          <Button to="/contact" variant="primary">
            Start a Conversation
          </Button>
        </FadeUp>
      </section>
    </>
  )
}

export default About
