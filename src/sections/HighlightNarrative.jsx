import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const narrative =
  'Dynatrum replaces fragmented finance systems with a unified ERP architecture, giving leadership the confidence to report with precision, execute globally, and close faster without operational risk.'

const words = narrative.split(' ')

function HighlightNarrative() {
  const sectionRef = useRef(null)
  const wordRefs = useRef([])

  const setWordRef = (index) => (element) => {
    wordRefs.current[index] = element
  }

  useLayoutEffect(() => {
    const section = sectionRef.current
    const wordElements = wordRefs.current.filter(Boolean)

    if (!section || wordElements.length === 0) {
      return undefined
    }

    const media = gsap.matchMedia()
    const context = gsap.context(() => {
      media.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
        gsap.set(wordElements, { color: '#334155' })

        gsap.to(wordElements, {
          color: '#e2e8f0',
          stagger: 0.05,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 72%',
            end: 'bottom 44%',
            scrub: 1,
          },
        })
      })

      media.add('(max-width: 767px), (prefers-reduced-motion: reduce)', () => {
        gsap.set(wordElements, { color: '#64748b' })

        gsap.to(wordElements, {
          color: '#e2e8f0',
          stagger: 0.03,
          duration: 0.5,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            once: true,
          },
        })
      })
    }, section)

    return () => {
      media.revert()
      context.revert()
    }
  }, [])

  return (
    <section id="insights" ref={sectionRef} className="border-b border-white/10 bg-slate-950">
      <div className="section-shell section-space">
        <p className="section-kicker text-slate-500">Perspective</p>
        <p className="mt-8 max-w-5xl text-3xl font-semibold tracking-tight leading-tight sm:text-5xl lg:text-6xl">
          {words.map((word, index) => (
            <span key={`${word}-${index}`} ref={setWordRef(index)}>
              {word}{' '}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}

export default HighlightNarrative
