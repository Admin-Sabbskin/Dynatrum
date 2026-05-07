import { Link } from 'react-router-dom'
import { navigationRoutes, preloadRoute } from '../routePreload'

const serviceLinks = [
  'ERP Advisory',
  'ERP Implementation',
  'Business Process Transformation',
  'Post-Go-Live Support',
]

const pageLinks = [...navigationRoutes, { label: 'Contact', to: '/contact' }]

function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[rgba(8,11,17,0.45)] backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(201,174,115,0.45),transparent)]" />
      <div className="section-shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <p className="font-heading text-4xl tracking-[0.16em] text-[var(--color-gold)]">
              DYNATRUM
            </p>
            <p className="mt-3 text-sm uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
              Enterprise ERP Consulting
            </p>
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">
              Oakville, Ontario, Canada
            </p>
          </div>

          <div>
            <p className="kicker">Pages</p>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-text-muted)]">
              {pageLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onMouseEnter={() => {
                      void preloadRoute(link.to)
                    }}
                    onFocus={() => {
                      void preloadRoute(link.to)
                    }}
                    className="transition-colors hover:text-[var(--color-text)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-text-muted)]">
              {serviceLinks.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-text-muted)]">
              <li>
                <a href="tel:+16475138192" className="transition-colors hover:text-[var(--color-text)]">
                  +1 647 513 8192
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@dynatrum.com"
                  className="transition-colors hover:text-[var(--color-text)]"
                >
                  hello@dynatrum.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--color-border)] pt-6 text-center text-sm text-[var(--color-text-muted)]">
          © 2026 Dynatrum. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
