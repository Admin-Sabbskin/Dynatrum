import { useEffect, useState } from 'react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        isScrolled
          ? 'border-slate-200 bg-white shadow-[0_1px_0_0_rgba(15,23,42,0.04)]'
          : 'border-transparent bg-white'
      }`}
    >
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#" className="text-[11px] font-semibold tracking-[0.18em] text-slate-950">
          DYNATRUM
        </a>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-9 text-[13px] font-medium text-slate-600">
            {links.map((link) => (
              <li key={link.href}>
                <a className="transition-colors hover:text-slate-950" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Open navigation</span>
          <div className="flex w-4 flex-col gap-1">
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-slate-200 bg-white md:hidden" aria-label="Mobile primary">
          <ul className="section-shell flex flex-col pb-5 text-sm font-medium text-slate-700">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2.5 transition-colors hover:text-slate-950"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar
