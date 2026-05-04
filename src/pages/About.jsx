import Button from '../components/Button'
import FadeUp from '../components/FadeUp'

const credentials = [
  'FCA - Fellow Chartered Accountant',
  'FCMA - Fellow Cost & Management Accountant',
  'ERP Finance Transformation - 20+ years of enterprise delivery',
]

const platforms = ['SAP S/4HANA', 'Oracle NetSuite', 'Microsoft Dynamics 365', 'Odoo']
const industries = ['Manufacturing', 'SaaS', 'Retail', 'Professional Services']

function About() {
  return (
    <>
      <section className="section-shell flex min-h-[62svh] items-end justify-center py-20 pt-32 text-center md:pt-36">
        <div className="mx-auto">
          <p className="kicker">Leadership</p>
          <h1 className="mt-5 text-center">Sabbeen Sheikkh</h1>
          <p className="mt-5 text-center text-base uppercase tracking-[0.2em] text-[var(--color-gold)]">
            FCA · FCMA · ERP Finance Transformation Leader
          </p>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-10 pb-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
        <FadeUp>
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-3 rounded-[2.1rem] bg-[radial-gradient(60%_80%_at_30%_15%,rgba(201,174,115,0.18),transparent_60%)]"
              aria-hidden="true"
            />
            <div className="absolute -inset-2 rounded-[2rem] border border-[rgba(201,174,115,0.18)]" />
            <img
              src="/sabbeen-sheikkh.jpg"
              alt="Sabbeen Sheikkh portrait placeholder"
              loading="lazy"
              className="relative h-[520px] w-full rounded-[1.8rem] border border-[rgba(255,255,255,0.06)] object-cover"
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.05}>
          <div className="glass-panel rounded-[1.8rem] p-8 md:p-10">
            <p className="text-lg text-[var(--color-text-muted)]">
              Sabbeen leads ERP programs through a finance lens, helping organizations
              align system design with reporting integrity, control maturity, and
              executive decision-making needs.
            </p>
            <p className="mt-5 text-lg text-[var(--color-text-muted)]">
              The focus is practical: build ERP operating models that finance teams can
              rely on under pressure, during audit, and through growth.
            </p>

            <div className="mt-8">
              <p className="kicker">Credentials</p>
              <ul className="timeline-dash mt-4 space-y-2 text-sm">
                {credentials.map((credential) => (
                  <li key={credential}>{credential}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="kicker">ERP Platforms</p>
                <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                  {platforms.join(' · ')}
                </p>
              </div>
              <div>
                <p className="kicker">Industries</p>
                <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                  {industries.join(' · ')}
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </section>

      <section className="aurora-band relative py-24 md:py-32">
        <div className="section-shell">
          <div className="section-rule" aria-hidden="true" />
        </div>
        <div className="mx-auto mt-16 flex w-[min(1120px,92vw)] flex-col items-center justify-center text-center">
          <FadeUp className="flex w-full flex-col items-center text-center">
            <span className="font-heading text-6xl leading-none text-[var(--color-gold)]/40">“</span>
            <p className="mx-auto -mt-4 max-w-4xl text-center font-heading text-[clamp(2rem,4.5vw,4rem)] font-light leading-[1.12] text-[var(--color-white)]">
              ERP is not an IT project. It is a finance transformation. The system is
              only as good as the financial thinking behind it.
            </p>
            <p className="mt-8 text-center text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
              — Sabbeen Sheikkh
            </p>
          </FadeUp>
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
