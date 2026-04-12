import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const appRef = useRef(null)

  useEffect(() => {
    const appElement = appRef.current
    if (!appElement) {
      return undefined
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const cleanupCallbacks = []
    let lenis = null

    if (!prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.1,
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.4,
        syncTouch: false,
      })

      const handleLenisScroll = () => {
        ScrollTrigger.update()
      }

      lenis.on('scroll', handleLenisScroll)

      const tickerCallback = (time) => {
        lenis.raf(time * 1000)
      }

      gsap.ticker.add(tickerCallback)
      gsap.ticker.lagSmoothing(0)

      cleanupCallbacks.push(() => {
        gsap.ticker.remove(tickerCallback)
        lenis.off('scroll', handleLenisScroll)
        lenis.destroy()
      })
    }

    const anchorLinks = appElement.querySelectorAll('a[href^="#"]')
    const anchorHandlers = []

    anchorLinks.forEach((link) => {
      const handler = (event) => {
        const targetId = link.getAttribute('href')
        if (!targetId || targetId === '#') {
          return
        }

        const targetElement = appElement.querySelector(targetId)
        if (!targetElement) {
          return
        }

        event.preventDefault()
        if (lenis) {
          lenis.scrollTo(targetElement, { offset: -92, duration: 1.15 })
          return
        }

        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }

      link.addEventListener('click', handler)
      anchorHandlers.push({ link, handler })
    })

    cleanupCallbacks.push(() => {
      anchorHandlers.forEach(({ link, handler }) => {
        link.removeEventListener('click', handler)
      })
    })

    const context = gsap.context(() => {
      if (prefersReducedMotion) {
        return
      }

      gsap.from('.hero-reveal', {
        opacity: 0,
        y: 36,
        duration: 1.15,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.12,
      })

      gsap.to('.hero-content', {
        yPercent: -18,
        opacity: 0,
        filter: 'blur(10px)',
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      const zoomScale = window.matchMedia('(max-width: 768px)').matches ? 18 : 24

      const zoomTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#zoom-section',
          start: 'top top',
          end: '+=3600',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      })

      zoomTimeline.to(
        '#zoom-element',
        {
          scale: zoomScale,
          opacity: 0,
          ease: 'power2.inOut',
          duration: 9,
        },
        0,
      )

      zoomTimeline.to(
        '#zoom-core-glow',
        {
          opacity: 1,
          scale: 11,
          duration: 7,
          ease: 'power2.out',
        },
        1.2,
      )

      zoomTimeline.to(
        '#zoom-overlay',
        {
          opacity: 1,
          duration: 2.5,
          ease: 'sine.inOut',
        },
        4,
      )

      zoomTimeline
        .fromTo(
          '#zoom-text-1',
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, duration: 1.1 },
          0.9,
        )
        .to('#zoom-text-1', { autoAlpha: 0, y: -28, duration: 1 }, 2.5)
        .fromTo(
          '#zoom-text-2',
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, duration: 1.1 },
          3.4,
        )
        .to('#zoom-text-2', { autoAlpha: 0, y: -28, duration: 1 }, 5.2)
        .fromTo(
          '#zoom-text-3',
          { autoAlpha: 0, y: 24, scale: 0.95 },
          { autoAlpha: 1, y: 0, scale: 1.06, duration: 1.3 },
          6.2,
        )
        .to('#zoom-text-3', { autoAlpha: 0, y: -24, scale: 1.15, duration: 1.4 }, 8.3)

      const scrubText = appElement.querySelector('#scrub-text')
      if (scrubText) {
        const sourceText =
          scrubText.dataset.sourceText ??
          scrubText.textContent?.trim().replace(/\s+/g, ' ') ??
          ''

        scrubText.dataset.sourceText = sourceText
        scrubText.textContent = ''

        const fragment = document.createDocumentFragment()
        sourceText.split(' ').forEach((word) => {
          const span = document.createElement('span')
          span.textContent = `${word} `
          span.className = 'scrub-word'
          span.style.color = '#2f333b'
          fragment.appendChild(span)
        })
        scrubText.appendChild(fragment)

        gsap.to('.scrub-word', {
          color: '#f4f8ff',
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: '#services',
            start: 'top 72%',
            end: 'bottom 44%',
            scrub: true,
          },
        })
      }

      const horizontalSection = appElement.querySelector('#methodology')
      const horizontalWrapper = appElement.querySelector('#horizontal-wrapper')

      if (horizontalSection && horizontalWrapper) {
        const getTravelDistance = () =>
          Math.max(0, horizontalWrapper.scrollWidth - window.innerWidth + 72)

        gsap.to(horizontalWrapper, {
          x: () => -getTravelDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: horizontalSection,
            start: 'top top',
            end: () => `+=${getTravelDistance() + window.innerHeight * 0.75}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
      }

      const cards = gsap.utils.toArray('.case-card')
      cards.forEach((card, index) => {
        if (index >= cards.length - 1) {
          return
        }

        gsap.to(card, {
          scale: 0.94,
          opacity: 0.56,
          transformOrigin: 'center top',
          ease: 'none',
          scrollTrigger: {
            trigger: cards[index + 1],
            start: 'top 76%',
            end: 'top 28%',
            scrub: true,
          },
        })
      })

      ScrollTrigger.refresh()
    }, appElement)

    cleanupCallbacks.push(() => context.revert())

    return () => {
      cleanupCallbacks.reverse().forEach((cleanup) => {
        cleanup()
      })
    }
  }, [])

  return (
    <div ref={appRef} className="app-shell min-h-screen text-slate-100">
      <div className="noise-overlay" />

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,#142437_0%,#090b10_55%,#060708_100%)]" />
        <div className="absolute -top-36 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[130px]" />
        <div className="absolute -bottom-44 right-[-10rem] h-[36rem] w-[36rem] rounded-full bg-blue-500/10 blur-[150px]" />
      </div>

      <nav className="fixed inset-x-0 top-0 z-50 px-3 py-3 md:px-6 md:py-5">
        <div className="top-blur-line mx-auto flex w-[min(1200px,96vw)] items-center justify-between rounded-full border border-white/10 px-5 py-3 md:px-7">
          <a
            href="#hero"
            className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/95"
          >
            Dynatrum
          </a>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition-colors hover:text-white">
              Services
            </a>
            <a href="#methodology" className="transition-colors hover:text-white">
              Methodology
            </a>
            <a href="#case-studies" className="transition-colors hover:text-white">
              Case Studies
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white px-5 py-2 text-sm font-medium text-black transition-transform duration-300 hover:scale-[1.03]"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      <main className="relative z-10 overflow-hidden">
        <section
          id="hero"
          className="relative flex min-h-[100svh] items-center justify-center px-4 pb-24 pt-28 md:px-8 md:pt-32"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_5%,rgba(133,197,255,0.2)_0%,rgba(6,7,8,0)_60%)]" />

          <div className="hero-content section-shell flex flex-col items-center text-center">
            <p className="hero-reveal mb-8 text-[10px] font-semibold uppercase tracking-[0.34em] text-sky-300/85 md:mb-10">
              Finance-led ERP consulting
            </p>
            <h1 className="hero-reveal max-w-6xl text-[clamp(2.35rem,8vw,6.5rem)] font-semibold leading-[1.04] tracking-[-0.03em]">
              Enterprise transformation,
              <span className="gradient-text block">governed by finance.</span>
            </h1>
            <p className="hero-reveal mt-7 max-w-2xl text-base font-light text-slate-300 md:mt-8 md:text-xl">
              A cinematic consulting experience built around controls, reliability, and
              outcomes that boards trust.
            </p>

            <div className="hero-reveal mt-10 grid w-full max-w-3xl grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-left sm:grid-cols-3 md:mt-14 md:p-6">
              <div className="border-b border-white/10 pb-3 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
                <p className="text-2xl font-semibold tracking-tight">200+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                  Finance workflows rebuilt
                </p>
              </div>
              <div className="border-b border-white/10 pb-3 sm:border-b-0 sm:border-r sm:pb-0 sm:px-4">
                <p className="text-2xl font-semibold tracking-tight">$500M+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                  Programs governed
                </p>
              </div>
              <div className="sm:pl-4">
                <p className="text-2xl font-semibold tracking-tight">3-Phase</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                  Execution architecture
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="zoom-section"
          className="relative z-20 flex h-[100svh] items-center justify-center overflow-hidden border-y border-white/5 bg-[#07090d]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(90%_120%_at_50%_45%,rgba(88,175,255,0.2)_0%,rgba(7,9,13,0.98)_60%)]" />

          <div
            id="zoom-overlay"
            className="pointer-events-none absolute inset-0 z-20 bg-black/45 opacity-0"
          />

          <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center px-4 text-center">
            <h2
              id="zoom-text-1"
              className="absolute w-[min(92vw,52rem)] text-3xl font-semibold tracking-tight text-white/95 opacity-0 drop-shadow-2xl md:text-6xl"
            >
              Assess process maturity.
            </h2>
            <h2
              id="zoom-text-2"
              className="absolute w-[min(92vw,52rem)] text-3xl font-semibold tracking-tight text-white/95 opacity-0 drop-shadow-2xl md:text-6xl"
            >
              Execute migrations flawlessly.
            </h2>
            <h2
              id="zoom-text-3"
              className="absolute w-[min(92vw,56rem)] text-4xl font-semibold tracking-tight text-sky-200 opacity-0 drop-shadow-2xl md:text-7xl"
            >
              Step into the new standard.
            </h2>
          </div>

          <div
            id="zoom-element"
            className="relative z-30 h-[190px] w-[300px] will-change-transform sm:h-[240px] sm:w-[390px] md:h-[340px] md:w-[560px]"
          >
            <div className="glass-panel relative flex h-full w-full flex-col gap-3 overflow-hidden rounded-[1.6rem] p-4 md:gap-5 md:rounded-[2rem] md:p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/75" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/75" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/75" />
                </div>
                <div className="h-3 w-20 rounded-full bg-white/10" />
              </div>

              <div className="grid h-full grid-cols-12 gap-3 md:gap-4">
                <div className="col-span-8 flex flex-col gap-3 rounded-xl border border-sky-300/20 bg-sky-400/10 p-3 md:p-4">
                  <div className="h-5 rounded bg-white/10" />
                  <div className="h-4 w-2/3 rounded bg-white/10" />
                  <div className="mt-auto h-6 w-1/2 rounded bg-sky-300/50" />
                </div>
                <div className="col-span-4 flex flex-col gap-3">
                  <div className="h-1/2 rounded-xl border border-white/10 bg-white/5" />
                  <div className="h-1/2 rounded-xl border border-white/10 bg-white/5" />
                </div>
              </div>

              <div
                id="zoom-core-glow"
                className="pointer-events-none absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 blur-[30px]"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/20 blur-[170px]" />
        </section>

        <section id="services" className="relative z-30 flex min-h-[95svh] items-center py-28 md:py-36">
          <div className="section-shell">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.26em] text-sky-300/80">
              Offerings
            </p>
            <p
              id="scrub-text"
              data-source-text="Four focused offerings designed to improve implementation reliability, financial control, and operational efficiency across your entire enterprise architecture."
              className="max-w-6xl text-[clamp(2rem,5vw,4.4rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-[#2f333b]"
            >
              Four focused offerings designed to improve implementation reliability,
              financial control, and operational efficiency across your entire enterprise
              architecture.
            </p>
          </div>
        </section>

        <section
          id="methodology"
          className="relative h-[100svh] overflow-hidden border-y border-white/10 bg-[linear-gradient(180deg,#0a0d12_0%,#090b10_100%)]"
        >
          <div className="section-shell relative z-20 pt-20 md:pt-24">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-sky-300/80">
              Methodology
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              The 5-step framework that keeps implementation quality under control.
            </h2>
          </div>

          <div className="absolute inset-x-0 bottom-[8vh] z-10">
            <div id="horizontal-wrapper" className="flex w-max items-stretch gap-6 pl-[6vw] pr-[24vw] md:gap-10">
              <article className="process-card glass-panel flex w-[80vw] min-h-[50svh] max-w-[420px] flex-shrink-0 flex-col justify-between rounded-[1.8rem] p-7 md:w-[42vw] md:min-h-[56vh] md:p-9 lg:w-[30vw]">
                <p className="text-6xl font-light text-white/20">01</p>
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight">Diagnose</h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-300">
                    Assess operations, controls, and system readiness to establish a factual
                    baseline.
                  </p>
                </div>
              </article>

              <article className="process-card glass-panel flex w-[80vw] min-h-[50svh] max-w-[420px] flex-shrink-0 flex-col justify-between rounded-[1.8rem] p-7 md:w-[42vw] md:min-h-[56vh] md:p-9 lg:w-[30vw]">
                <p className="text-6xl font-light text-white/20">02</p>
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight">Design</h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-300">
                    Define process requirements, target architecture, and finance governance
                    standards.
                  </p>
                </div>
              </article>

              <article className="process-card glass-panel flex w-[80vw] min-h-[50svh] max-w-[420px] flex-shrink-0 flex-col justify-between rounded-[1.8rem] border-sky-300/35 bg-sky-400/10 p-7 md:w-[42vw] md:min-h-[56vh] md:p-9 lg:w-[30vw]">
                <p className="text-6xl font-light text-sky-300/55">03</p>
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight text-sky-100">Deploy</h3>
                  <p className="mt-4 text-base leading-relaxed text-sky-100/80">
                    Execute implementation, migration, and testing with clear milestone
                    ownership.
                  </p>
                </div>
              </article>

              <article className="process-card glass-panel flex w-[80vw] min-h-[50svh] max-w-[420px] flex-shrink-0 flex-col justify-between rounded-[1.8rem] p-7 md:w-[42vw] md:min-h-[56vh] md:p-9 lg:w-[30vw]">
                <p className="text-6xl font-light text-white/20">04</p>
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight">Stabilize</h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-300">
                    Support go-live, resolve critical issues, and embed team adoption
                    workflows.
                  </p>
                </div>
              </article>

              <article className="process-card glass-panel flex w-[80vw] min-h-[50svh] max-w-[420px] flex-shrink-0 flex-col justify-between rounded-[1.8rem] p-7 md:w-[42vw] md:min-h-[56vh] md:p-9 lg:w-[30vw]">
                <p className="text-6xl font-light text-white/20">05</p>
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight">Scale</h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-300">
                    Optimize reporting, automation, and controls to sustain long-term ERP
                    value.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="case-studies" className="relative z-30 py-28 md:py-36">
          <div className="section-shell mb-16 text-center md:mb-20">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-sky-300/80">
              Outcomes
            </p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Proven in complex programs.
            </h2>
          </div>

          <div id="cards-container" className="section-shell max-w-[980px] pb-32">
            <article className="case-card glass-panel sticky top-[18vh] z-30 mb-14 rounded-[2rem] bg-[#12161d] p-7 md:p-12">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide">
                Manufacturing SME
              </span>
              <div className="mt-8 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
                <div>
                  <h3 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                    Month-end close cycle reduced drastically.
                  </h3>
                  <p className="mt-5 max-w-xl text-slate-300">
                    Delivered a finance-led NetSuite implementation with intercompany
                    workflows and controlled data migration.
                  </p>
                </div>
                <div className="flex flex-col gap-8 border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                  <div>
                    <p className="text-4xl font-semibold tracking-tight">3 Days</p>
                    <p className="mt-1 text-sm text-slate-400">Down from 18 days</p>
                  </div>
                  <div>
                    <p className="text-4xl font-semibold tracking-tight">72%</p>
                    <p className="mt-1 text-sm text-slate-400">Less manual reporting</p>
                  </div>
                </div>
              </div>
            </article>

            <article className="case-card glass-panel sticky top-[18vh] z-20 mb-14 rounded-[2rem] bg-[#151922] p-7 md:p-12">
              <span className="inline-flex rounded-full border border-sky-200/30 bg-sky-400/20 px-4 py-2 text-xs font-medium tracking-wide text-sky-100">
                SaaS Growth
              </span>
              <div className="mt-8 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
                <div>
                  <h3 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                    Aligned ERP reporting with board requirements.
                  </h3>
                  <p className="mt-5 max-w-xl text-slate-300">
                    Implemented ASC 606 workflows, standardized controls, and aligned
                    reporting with diligence requirements.
                  </p>
                </div>
                <div className="flex flex-col gap-8 border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                  <div>
                    <p className="text-4xl font-semibold tracking-tight">100%</p>
                    <p className="mt-1 text-sm text-slate-400">ASC 606 compliance</p>
                  </div>
                  <div>
                    <p className="text-4xl font-semibold tracking-tight">$18M</p>
                    <p className="mt-1 text-sm text-slate-400">Capital raised post-project</p>
                  </div>
                </div>
              </div>
            </article>

            <article className="case-card glass-panel sticky top-[18vh] z-10 rounded-[2rem] bg-[#19202b] p-7 md:p-12">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide">
                Professional Services
              </span>
              <div className="mt-8 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
                <div>
                  <h3 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                    Unified operations in Dynamics 365.
                  </h3>
                  <p className="mt-5 max-w-xl text-slate-300">
                    Automated project billing, AP workflows, and profitability dashboards to
                    consolidate 4 disparate systems.
                  </p>
                </div>
                <div className="flex flex-col gap-8 border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
                  <div>
                    <p className="text-4xl font-semibold tracking-tight">4 to 1</p>
                    <p className="mt-1 text-sm text-slate-400">Systems consolidated</p>
                  </div>
                  <div>
                    <p className="text-4xl font-semibold tracking-tight">50%</p>
                    <p className="mt-1 text-sm text-slate-400">Faster AP cycle</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <footer id="contact" className="relative z-30 border-t border-white/10 bg-black/70 py-20">
          <div className="section-shell flex flex-col items-center justify-between gap-10 text-center md:flex-row md:text-left">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-sky-300/80">
                Dynatrum
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Ready to transform your ERP program?
              </h2>
              <p className="mt-4 max-w-xl text-slate-300">
                Bring finance, operations, and systems into one disciplined delivery motion.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 md:items-end">
              <a
                href="#"
                className="rounded-full border border-white/20 bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-slate-200"
              >
                Book Consultation
              </a>
              <p className="text-sm text-slate-400">
                &copy; 2026 Dynatrum Consulting. Finance-led ERP consulting.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
