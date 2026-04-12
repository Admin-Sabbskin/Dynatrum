import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sequenceText = [
  'Absolute financial control.',
  'Implementation precision at every milestone.',
  'A finance system built to scale.',
]

function ZoomSequence() {
  const sectionRef = useRef(null)
  const panelRef = useRef(null)
  const glowRef = useRef(null)
  const textRefs = useRef([])

  const setTextRef = (index) => (element) => {
    textRefs.current[index] = element
  }

  useLayoutEffect(() => {
    const section = sectionRef.current
    const panel = panelRef.current
    const glow = glowRef.current
    const texts = textRefs.current.filter(Boolean)

    if (!section || !panel || !glow || texts.length === 0) {
      return undefined
    }

    const media = gsap.matchMedia()
    const context = gsap.context(() => {
      media.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        gsap.set(texts, { autoAlpha: 0, y: 14 })

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=2400',
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        })

        timeline
          .to(
            panel,
            {
              scale: 8,
              autoAlpha: 0.08,
              ease: 'none',
              duration: 10,
            },
            0,
          )
          .to(
            glow,
            {
              scale: 2.4,
              autoAlpha: 0.68,
              ease: 'none',
              duration: 10,
            },
            0,
          )
          .to(texts[0], { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power2.out' }, 1)
          .to(texts[0], { autoAlpha: 0, y: -12, duration: 0.8, ease: 'power2.in' }, 3.1)
          .to(texts[1], { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power2.out' }, 3.7)
          .to(texts[1], { autoAlpha: 0, y: -12, duration: 0.8, ease: 'power2.in' }, 5.9)
          .to(texts[2], { autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out' }, 6.4)
          .to(texts[2], { autoAlpha: 0, y: -10, duration: 0.8, ease: 'power2.in' }, 9.1)
      })

      media.add('(max-width: 1023px), (prefers-reduced-motion: reduce)', () => {
        gsap.fromTo(
          panel,
          { autoAlpha: 0, y: 14, scale: 0.96 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 78%',
              once: true,
            },
          },
        )
      })
    }, section)

    return () => {
      media.revert()
      context.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] overflow-hidden border-b border-white/10 bg-slate-950"
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/20 blur-[110px]"
      />

      <div className="pointer-events-none absolute inset-0 z-20 hidden items-center justify-center lg:flex">
        {sequenceText.map((line, index) => (
          <p
            key={line}
            ref={setTextRef(index)}
            className="absolute max-w-4xl px-8 text-center text-4xl font-semibold tracking-tight text-white/95 xl:text-6xl"
          >
            {line}
          </p>
        ))}
      </div>

      <div className="section-shell relative z-10 flex h-full items-center justify-center">
        <div
          ref={panelRef}
          className="relative aspect-[16/10] w-[min(88vw,52rem)] rounded-[1.75rem] border border-white/15 bg-slate-900/95 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            </div>
            <div className="h-3 w-28 rounded bg-white/15" />
          </div>

          <div className="grid h-[calc(100%-2rem)] grid-cols-3 gap-3 sm:gap-4">
            <div className="col-span-2 rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4">
              <div className="h-full rounded-lg border border-white/10 bg-slate-800/70 p-3">
                <div className="h-4 w-3/5 rounded bg-amber-200/30" />
                <div className="mt-3 h-3 w-full rounded bg-white/15" />
                <div className="mt-2 h-3 w-4/5 rounded bg-white/15" />
                <div className="mt-2 h-3 w-2/3 rounded bg-white/15" />
                <div className="mt-5 grid grid-cols-3 gap-2">
                  <div className="h-14 rounded border border-amber-200/35 bg-amber-200/10" />
                  <div className="h-14 rounded border border-white/15 bg-white/5" />
                  <div className="h-14 rounded border border-white/15 bg-white/5" />
                </div>
              </div>
            </div>

            <div className="col-span-1 grid gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="h-3 w-3/4 rounded bg-white/20" />
                <div className="mt-2 h-8 rounded border border-white/15 bg-slate-800/70" />
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="h-3 w-2/3 rounded bg-white/20" />
                <div className="mt-2 h-8 rounded border border-amber-200/35 bg-amber-200/10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-shell pointer-events-none absolute inset-x-0 bottom-12 z-20 lg:hidden">
        <p className="max-w-sm text-sm leading-7 text-slate-300">
          Finance-grade control, reliable implementation, and scalable reporting from one
          unified ERP foundation.
        </p>
      </div>
    </section>
  )
}

export default ZoomSequence
