import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigationRoutes, preloadRoute } from '../routePreload'
import Button from './Button'

const MotionDiv = motion.div

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-4 md:top-4">
      <div
        className={`nav-glass relative mx-auto w-[min(1180px,96vw)] rounded-[1.35rem] transition-all duration-300 ${
          isScrolled
            ? 'border-[rgba(255,255,255,0.28)] shadow-[0_20px_52px_rgba(0,0,0,0.36)]'
            : 'border-[rgba(255,255,255,0.16)] shadow-[0_12px_32px_rgba(0,0,0,0.24)]'
        }`}
      >
        <div className="flex h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:h-24 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-3 leading-none"
            onMouseEnter={() => {
              void preloadRoute('/')
            }}
            onFocus={() => {
              void preloadRoute('/')
            }}
            onClick={() => {
              setIsMenuOpen(false)
            }}
          >
            <img
              src="/favicon.png"
              alt="Dynatrum logo"
              className="h-11 w-11 object-contain sm:h-12 sm:w-12 lg:h-14 lg:w-14"
            />
            <span className="flex flex-col">
              <span className="font-heading text-[1.55rem] tracking-[0.18em] text-[var(--color-gold)] sm:text-[1.75rem] lg:text-[1.9rem]">
                DYNATRUM
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                Finance-Led ERP Consulting
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navigationRoutes.map((route) => (
              <NavLink
                key={route.to}
                to={route.to}
                onClick={() => {
                  setIsMenuOpen(false)
                }}
                onMouseEnter={() => {
                  void preloadRoute(route.to)
                }}
                onFocus={() => {
                  void preloadRoute(route.to)
                }}
                className={({ isActive }) =>
                  `rounded-full border px-3 py-1.5 text-sm transition-all duration-200 ${
                    isActive
                      ? 'border-[rgba(201,174,115,0.5)] bg-[rgba(201,174,115,0.16)] text-[var(--color-gold)] shadow-[0_0_0_1px_rgba(201,174,115,0.12)]'
                      : 'border-transparent text-[var(--color-text-muted)] hover:border-[rgba(240,244,250,0.24)] hover:bg-[rgba(255,255,255,0.08)] hover:text-[var(--color-text)]'
                  }`
                }
              >
                {route.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button to="/contact" variant="primary">
              Book Consultation
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-gold)] lg:hidden"
            aria-label="Open navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">Toggle menu</span>
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${
                  isMenuOpen ? 'translate-y-[5px] rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-[5px] h-px w-full bg-current transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 top-[10px] h-px w-full bg-current transition-transform duration-300 ${
                  isMenuOpen ? '-translate-y-[5px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen ? (
            <MotionDiv
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="absolute inset-x-0 top-full mt-3 overflow-hidden rounded-[1.15rem] border border-[rgba(240,244,250,0.2)] bg-[rgba(10,13,19,0.5)] shadow-[0_20px_44px_rgba(0,0,0,0.34)] supports-[backdrop-filter]:backdrop-blur-xl lg:hidden"
            >
              <nav className="px-4 py-5 sm:px-6" aria-label="Mobile navigation">
                <div className="flex flex-col gap-3">
                  {navigationRoutes.map((route) => (
                    <NavLink
                      key={route.to}
                      to={route.to}
                      onClick={() => {
                        setIsMenuOpen(false)
                      }}
                      onMouseEnter={() => {
                        void preloadRoute(route.to)
                      }}
                      className={({ isActive }) =>
                        `rounded-xl border px-3 py-2 text-sm uppercase tracking-[0.1em] transition-all duration-200 ${
                          isActive
                            ? 'border-[rgba(201,174,115,0.5)] bg-[rgba(201,174,115,0.14)] text-[var(--color-gold)]'
                            : 'border-transparent text-[var(--color-text-muted)] hover:border-[rgba(240,244,250,0.22)] hover:bg-[rgba(255,255,255,0.08)] hover:text-[var(--color-text)]'
                        }`
                      }
                    >
                      {route.label}
                    </NavLink>
                  ))}
                  <Button
                    to="/contact"
                    variant="primary"
                    className="mt-2 w-full justify-center"
                    onClick={() => {
                      setIsMenuOpen(false)
                    }}
                  >
                    Book Consultation
                  </Button>
                </div>
              </nav>
            </MotionDiv>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar
