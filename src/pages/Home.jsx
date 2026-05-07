import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion'
import { useMemo, useRef } from 'react'
import Button from '../components/Button'
import FadeUp from '../components/FadeUp'

const MotionDiv = motion.div
const MotionP = motion.p
const MotionH1 = motion.h1
const MotionH2 = motion.h2
const MotionSpan = motion.span

function BrightenWord({ progress, range, children }) {
  const opacity = useTransform(progress, range, [0.14, 1])
  return (
    <MotionSpan className="bright-text-word" style={{ opacity }}>
      {children}
    </MotionSpan>
  )
}

function ScrollBrightenText({ text, className = '', progress }) {
  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text])
  // Compress all word fades into [start, end] of the section's progress so the
  // sentence is fully bright well before the section unpins (giving the user a
  // clear "completed" moment instead of unpinning mid-fade).
  const start = 0.08
  const end = 0.78
  const span = end - start
  return (
    <p className={className}>
      {words.map((word, index) => {
        const wordStart = start + (index / words.length) * span
        const wordEnd = Math.min(end, wordStart + span / Math.max(words.length - 1, 1) * 2.4)
        return (
          <BrightenWord key={`${word}-${index}`} progress={progress} range={[wordStart, wordEnd]}>
            {word}
          </BrightenWord>
        )
      })}
    </p>
  )
}

const servicePillars = [
  {
    title: 'ERP Advisory',
    description: 'Readiness assessments, vendor selection, and Phase 0 implementation roadmapping.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path d="M4 5h16v14H4z" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 9h8M8 13h5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: 'ERP Implementation',
    description: 'Configuration, migration, UAT coordination, and go-live execution.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M5 12h14M12 5l7 7-7 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Business Process Transformation',
    description: 'Process redesign, data architecture, and controls alignment across functions.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 8v8M9 11h6M9 14h6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: 'Post-Go-Live Support',
    description: 'Optimization, reporting improvements, and user adoption.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path d="M5 12l4 4 10-10" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 19h14" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
]

const methodologySteps = [
  { phase: 'Initiating', detail: 'Define the business case, identify stakeholders, establish governance.' },
  { phase: 'Planning', detail: 'Build the execution roadmap with WBS, resources, schedule, and budget.' },
  { phase: 'Executing', detail: 'Deliver work through sprint-based execution within Waterfall phase gates.' },
  { phase: 'Monitoring', detail: 'Track progress against plan and manage scope through formal change control.' },
  { phase: 'Closing', detail: 'Formal handover, lessons learned, and transition to support.' },
]

function Home() {
  const heroRef = useRef(null)
  const zoomRef = useRef(null)
  const brightenRef = useRef(null)

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroY = useTransform(heroProgress, [0, 1], [0, -80])

  const { scrollYProgress: zoomProgress } = useScroll({
    target: zoomRef,
    offset: ['start start', 'end end'],
  })

  // Cinematic flow (single timeline, no overlap):
  //   0.00 - 0.10  hero blur-text fades out (handled by hero scroll)
  //   0.00 - 0.18  Text A: "Assess process maturity." fades in
  //   0.18 - 0.30  Text A fades out
  //   0.30 - 0.46  Text B: "Execute migrations flawlessly." fades in
  //   0.46 - 0.58  Text B fades out
  //   0.58 - 0.74  Text C (highlight): "A finance-grade ERP." fades in & holds
  //   0.74 - 0.90  Text C fades out
  //   0.00 - 0.92  Desktop window scales 1 -> 22, slowly fades to 0 near end
  //   0.65 - 0.92  Background overlay darkens as we "fly into" the screen

  // Desktop window — Apple-style camera-into-screen
  const windowScale = useTransform(zoomProgress, [0, 0.92], [1, 22])
  const windowOpacity = useTransform(zoomProgress, [0, 0.55, 0.86, 0.92], [1, 1, 0.15, 0])
  const windowBlur = useTransform(zoomProgress, [0.55, 0.92], [0, 14])
  const windowFilter = useMotionTemplate`blur(${windowBlur}px)`
  const windowY = useTransform(zoomProgress, [0, 0.5, 0.92], [12, 0, -28])
  const overlayOpacity = useTransform(zoomProgress, [0.55, 0.92], [0, 0.85])

  // Inner screen glow — intensifies as we approach the screen
  const screenGlowOpacity = useTransform(zoomProgress, [0.35, 0.7, 0.92], [0, 0.55, 0])
  const bloomScale = useTransform(zoomProgress, [0.55, 0.92], [0.6, 4])
  const bloomOpacity = useTransform(zoomProgress, [0.55, 0.78, 0.92], [0, 0.4, 0])

  // HUD scaffolding around the window — fades in early, fades out as the
  // window starts engulfing the frame so it never fights with the zoom.
  const hudOpacity = useTransform(zoomProgress, [0, 0.06, 0.32, 0.5], [0, 1, 1, 0])
  const hudScale = useTransform(zoomProgress, [0, 0.5], [1, 1.18])

  // Glass shimmer — single sweep across the window early on
  const shimmerX = useTransform(zoomProgress, [0.04, 0.22], ['-120%', '120%'])
  const shimmerOpacity = useTransform(zoomProgress, [0.04, 0.1, 0.22], [0, 0.55, 0])

  // Light streaks during deep flight — radiate outward as we punch through
  const streakOpacity = useTransform(zoomProgress, [0.55, 0.7, 0.9], [0, 0.7, 0])
  const streakScale = useTransform(zoomProgress, [0.55, 0.92], [0.4, 2.6])

  // Phase progress bar — quiet timeline indicator at the bottom of the stage
  const phaseBarWidth = useTransform(zoomProgress, [0, 0.92], ['0%', '100%'])
  const phaseBarOpacity = useTransform(zoomProgress, [0, 0.04, 0.86, 0.92], [0, 1, 1, 0])

  // Live KPI tick inside the dashboard — fills as we scroll
  const liveKpiWidth = useTransform(zoomProgress, [0, 0.5], ['12%', '94%'])

  // Three sequential overlay messages
  const textAOpacity = useTransform(zoomProgress, [0.04, 0.12, 0.22, 0.3], [0, 1, 1, 0])
  const textAY = useTransform(zoomProgress, [0.04, 0.12, 0.22, 0.3], [22, 0, 0, -22])
  const textBOpacity = useTransform(zoomProgress, [0.32, 0.4, 0.5, 0.58], [0, 1, 1, 0])
  const textBY = useTransform(zoomProgress, [0.32, 0.4, 0.5, 0.58], [22, 0, 0, -22])
  const textCOpacity = useTransform(zoomProgress, [0.6, 0.7, 0.82, 0.9], [0, 1, 1, 0])
  const textCY = useTransform(zoomProgress, [0.6, 0.7, 0.82, 0.9], [22, 0, 0, -22])
  const textCScale = useTransform(zoomProgress, [0.6, 0.7, 0.9], [0.96, 1, 1.06])

  // Brighten text section — uses its own tall scroll range so the entire
  // sentence finishes brightening before the user can scroll past it.
  const { scrollYProgress: brightenProgress } = useScroll({
    target: brightenRef,
    offset: ['start start', 'end end'],
  })
  // After the sentence completes (~0.78), give it a subtle "settle" beat:
  // a faint scale breath + a thin gold underline + a quiet "Continue" hint.
  const brightenScale = useTransform(brightenProgress, [0.7, 0.85, 1], [1, 1.012, 1.012])
  const brightenLineWidth = useTransform(brightenProgress, [0.78, 0.94], ['0%', '38%'])
  const brightenLineOpacity = useTransform(brightenProgress, [0.78, 0.9], [0, 1])
  const continueOpacity = useTransform(brightenProgress, [0.88, 0.96], [0, 1])
  const continueY = useTransform(brightenProgress, [0.88, 0.96], [10, 0])

  return (
    <>
      <section ref={heroRef} className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-32">
        <div className="hero-radial" aria-hidden="true" />
        <div className="grain-layer" aria-hidden="true" />

        <MotionDiv style={{ y: heroY }} className="section-shell relative z-10 py-16 md:py-24">
          <MotionP
            className="kicker"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0 }}
          >
            ERP Transformation
          </MotionP>

          <MotionH1
            className="mt-6 max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            ERP programs don't fail in execution. They fail before they start.
          </MotionH1>

          <MotionP
            className="mt-8 max-w-3xl text-lg text-[var(--color-text-muted)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            We de-risk ERP before it starts &mdash; and execute it with cross-functional
            governance, hybrid agility, and audit-ready outcomes across every department
            that touches the system.
          </MotionP>

          <MotionDiv
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
          >
            <Button to="/phase-0" variant="primary">
              Start Phase 0
            </Button>
            <Button to="/methodology" variant="ghost">
              See How We De-Risk ERP
            </Button>
          </MotionDiv>

          <MotionDiv
            className="gold-frost mt-14 grid gap-4 rounded-3xl p-5 sm:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
          >
            <p className="text-sm text-[var(--color-text)]">200+ Entity Consolidations</p>
            <p className="text-sm text-[var(--color-text)]">25+ Countries Delivered</p>
            <p className="text-sm text-[var(--color-text)]">16+ Years ERP Leadership</p>
            <p className="text-sm text-[var(--color-text)]">5-Phase Proven Methodology</p>
          </MotionDiv>
        </MotionDiv>
      </section>

      <section ref={zoomRef} className="relative h-[420svh] md:h-[460svh]">
        <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden bg-[#07090d]">
          {/* Ambient base */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_120%_at_50%_45%,rgba(122,155,181,0.18)_0%,rgba(7,9,13,0.98)_60%)]"
            aria-hidden="true"
          />
          {/* Soft cinematic light bloom behind the window */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vw] w-[60vw] rounded-full bg-[rgba(201,174,115,0.10)] blur-[170px]"
            aria-hidden="true"
          />

          {/* HUD scaffolding around the window — corner brackets + telemetry labels */}
          <MotionDiv
            style={{ opacity: hudOpacity, scale: hudScale }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            <div className="relative h-[400px] w-[680px] sm:h-[440px] sm:w-[760px] md:h-[520px] md:w-[880px]">
              {/* Corner brackets */}
              <span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-[rgba(201,174,115,0.55)]" />
              <span className="absolute right-0 top-0 h-5 w-5 border-r border-t border-[rgba(201,174,115,0.55)]" />
              <span className="absolute left-0 bottom-0 h-5 w-5 border-l border-b border-[rgba(201,174,115,0.55)]" />
              <span className="absolute right-0 bottom-0 h-5 w-5 border-r border-b border-[rgba(201,174,115,0.55)]" />

              {/* Top-left telemetry */}
              <div className="absolute -top-8 left-0 flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-[rgba(201,174,115,0.7)]">
                <span className="h-px w-6 bg-[rgba(201,174,115,0.5)]" />
                <span>01 / Inside the System</span>
              </div>

              {/* Top-right scale indicator */}
              <div className="absolute -top-8 right-0 flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[rgba(255,255,255,0.4)]">
                <span>Scale 1.00×</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
              </div>

              {/* Bottom-left readout */}
              <div className="absolute -bottom-8 left-0 flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[rgba(255,255,255,0.4)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#28c840]" />
                <span>Live · Q3 Close</span>
              </div>

              {/* Bottom-right readout */}
              <div className="absolute -bottom-8 right-0 flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[rgba(255,255,255,0.4)]">
                <span>Variance −2.4%</span>
                <span className="h-px w-6 bg-[rgba(201,174,115,0.5)]" />
              </div>
            </div>
          </MotionDiv>

          {/* Light streaks radiating outward during deep flight */}
          <MotionDiv
            style={{ opacity: streakOpacity, scale: streakScale }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-[34] -translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            <div className="relative h-[60vw] w-[60vw]">
              {Array.from({ length: 14 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute left-1/2 top-1/2 block h-px w-[44%] origin-left bg-[linear-gradient(90deg,rgba(255,235,200,0.85),rgba(255,235,200,0))]"
                  style={{ transform: `rotate(${(360 / 14) * i}deg)` }}
                />
              ))}
            </div>
          </MotionDiv>

          {/* Bloom ring that erupts as we fly through the screen */}
          <MotionDiv
            style={{ scale: bloomScale, opacity: bloomOpacity }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-[35] -translate-x-1/2 -translate-y-1/2 h-[36vw] w-[36vw] rounded-full bg-[radial-gradient(circle,rgba(201,174,115,0.55)_0%,rgba(201,174,115,0)_60%)]"
            aria-hidden="true"
          />

          {/* Darkening overlay as we fly into the screen */}
          <MotionDiv
            style={{ opacity: overlayOpacity }}
            className="pointer-events-none absolute inset-0 z-40 bg-black"
            aria-hidden="true"
          />

          {/* Sequential text overlays */}
          <div className="pointer-events-none absolute inset-0 z-50 grid place-items-center px-6 text-center">
            <MotionH2
              style={{ opacity: textAOpacity, y: textAY }}
              className="absolute mx-auto block w-[min(92vw,56rem)] text-[clamp(1.9rem,4.8vw,4rem)] font-light leading-[1.08] text-[var(--color-white)]"
            >
              Every department, one system of truth.
            </MotionH2>

            <MotionH2
              style={{ opacity: textBOpacity, y: textBY }}
              className="absolute mx-auto block w-[min(92vw,56rem)] text-[clamp(1.9rem,4.8vw,4rem)] font-light leading-[1.08] text-[var(--color-white)]"
            >
              Controls move from spreadsheets into the system.
            </MotionH2>

            <MotionH2
              style={{ opacity: textCOpacity, y: textCY, scale: textCScale }}
              className="absolute mx-auto block w-[min(92vw,60rem)] text-[clamp(2.2rem,6vw,5rem)] font-light leading-[1.04]"
            >
              <span className="text-gradient-gold">A controlled ERP program.</span>
            </MotionH2>
          </div>

          {/* The zooming desktop window */}
          <MotionDiv
            style={{ scale: windowScale, opacity: windowOpacity, y: windowY, filter: windowFilter }}
            className="zoom-stage-window will-change-transform relative z-30 h-[220px] w-[340px] origin-center overflow-hidden rounded-[1.6rem] sm:h-[260px] sm:w-[420px] md:h-[360px] md:w-[600px] md:rounded-[2rem]"
          >
            {/* Window chrome */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/85" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/85" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/85" />
              </div>
              <div className="h-2 w-24 rounded-full bg-white/10" />
              <span className="h-2 w-2 rounded-full bg-white/10" />
            </div>

            {/* Dashboard body */}
            <div className="grid h-[calc(100%-2.6rem)] grid-cols-12 gap-2 p-3 md:gap-3 md:p-4">
              {/* Sidebar */}
              <div className="col-span-3 flex flex-col gap-2 rounded-lg border border-white/8 bg-white/[0.025] p-2">
                <div className="h-2 w-3/4 rounded bg-white/15" />
                <div className="h-2 w-1/2 rounded bg-white/10" />
                <div className="mt-1 h-2 w-2/3 rounded bg-white/10" />
                <div className="h-2 w-1/2 rounded bg-white/10" />
                <div className="mt-auto h-2 w-3/5 rounded bg-[var(--color-gold)]/60" />
              </div>

              {/* Main content */}
              <div className="col-span-6 flex flex-col gap-2 rounded-lg border border-white/8 bg-white/[0.04] p-3">
                <div className="flex items-baseline justify-between">
                  <div className="h-3 w-1/3 rounded bg-white/20" />
                  <div className="h-2 w-12 rounded bg-[var(--color-gold)]/60" />
                </div>
                {/* Bar chart */}
                <div className="mt-2 grid h-full grid-cols-7 items-end gap-1.5">
                  <div className="h-[35%] rounded-t bg-white/15" />
                  <div className="h-[55%] rounded-t bg-white/20" />
                  <div className="h-[42%] rounded-t bg-white/15" />
                  <div className="h-[68%] rounded-t bg-[var(--color-gold)]/65" />
                  <div className="h-[58%] rounded-t bg-white/20" />
                  <div className="h-[78%] rounded-t bg-[var(--color-gold)]/80" />
                  <div className="h-[88%] rounded-t bg-[var(--color-gold)]" />
                </div>
              </div>

              {/* Right column KPIs */}
              <div className="col-span-3 flex flex-col gap-2">
                <div className="flex-1 rounded-lg border border-white/8 bg-white/[0.04] p-2">
                  <div className="h-1.5 w-1/2 rounded bg-white/15" />
                  <div className="mt-2 h-3 w-2/3 rounded bg-white/30" />
                  <div className="mt-2 h-1 w-full rounded-full bg-white/10">
                    <div className="h-full w-[72%] rounded-full bg-[var(--color-gold)]" />
                  </div>
                </div>
                <div className="flex-1 rounded-lg border border-white/8 bg-white/[0.04] p-2">
                  <div className="h-1.5 w-1/2 rounded bg-white/15" />
                  <div className="mt-2 h-3 w-1/2 rounded bg-white/30" />
                  <div className="mt-2 h-1 w-full rounded-full bg-white/10">
                    <div className="h-full w-[54%] rounded-full bg-[var(--color-steel)]" />
                  </div>
                </div>
                <div className="flex-1 rounded-lg border border-white/8 bg-white/[0.04] p-2">
                  <div className="flex items-center justify-between">
                    <div className="h-1.5 w-1/2 rounded bg-white/15" />
                    <span className="h-1 w-1 animate-pulse rounded-full bg-[#28c840]" />
                  </div>
                  <div className="mt-2 h-3 w-3/5 rounded bg-white/30" />
                  <div className="mt-2 h-1 w-full rounded-full bg-white/10">
                    <MotionDiv
                      style={{ width: liveKpiWidth }}
                      className="h-full rounded-full bg-[var(--color-white)]/85"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Inner screen glow that ramps up as the camera approaches */}
            <MotionDiv
              style={{ opacity: screenGlowOpacity }}
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_55%,rgba(255,235,200,0.55)_0%,rgba(255,235,200,0)_70%)] mix-blend-screen"
              aria-hidden="true"
            />

            {/* Glass shimmer sweep across the window */}
            <MotionDiv
              style={{ x: shimmerX, opacity: shimmerOpacity }}
              className="pointer-events-none absolute inset-y-0 left-0 w-[55%] bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.18)_45%,rgba(255,255,255,0.42)_50%,rgba(255,255,255,0.18)_55%,transparent_100%)] mix-blend-screen"
              aria-hidden="true"
            />
          </MotionDiv>

          {/* Phase progress bar — quiet timeline at bottom of stage */}
          <MotionDiv
            style={{ opacity: phaseBarOpacity }}
            className="pointer-events-none absolute inset-x-0 bottom-10 z-[55] mx-auto flex w-[min(680px,80vw)] flex-col items-center gap-2"
            aria-hidden="true"
          >
            <div className="flex w-full items-center justify-between text-[9px] uppercase tracking-[0.36em] text-[rgba(255,255,255,0.35)]">
              <span>Vision</span>
              <span>Build</span>
              <span>Inside</span>
            </div>
            <div className="relative h-px w-full bg-white/10">
              <MotionDiv
                style={{ width: phaseBarWidth }}
                className="absolute inset-y-0 left-0 bg-[linear-gradient(90deg,rgba(201,174,115,0.2),rgba(201,174,115,0.95))]"
              />
            </div>
          </MotionDiv>
        </div>
      </section>

      <section ref={brightenRef} className="relative h-[320svh] md:h-[340svh]">
        <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_50%,rgba(201,174,115,0.08)_0%,rgba(9,11,16,0.98)_70%)]"
            aria-hidden="true"
          />
          <MotionDiv
            style={{ scale: brightenScale }}
            className="relative z-10 mx-auto flex w-[min(1120px,92vw)] flex-col items-center justify-center text-center"
          >
            <p className="kicker">The Outcome</p>
            <ScrollBrightenText
              progress={brightenProgress}
              className="mx-auto mt-8 max-w-5xl text-center font-heading text-[clamp(1.8rem,4.2vw,3.6rem)] font-light leading-[1.18] text-[var(--color-white)]"
              text="Teams stop firefighting. Controls move from spreadsheets into the system. ERP becomes a controlled program — predictable, defensible, and audit-ready."
            />
            <MotionDiv
              style={{ width: brightenLineWidth, opacity: brightenLineOpacity }}
              className="mt-10 h-px max-w-sm bg-[linear-gradient(90deg,transparent,rgba(201,174,115,0.85),transparent)]"
              aria-hidden="true"
            />
            <MotionDiv
              style={{ opacity: continueOpacity, y: continueY }}
              className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-[var(--color-text-muted)]"
              aria-hidden="true"
            >
              <span>Continue</span>
              <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden="true">
                <path d="M12 5v14M6 13l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      <section className="section-shell py-20">
        <FadeUp>
          <p className="kicker">The Reality</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-4 max-w-3xl">Why ERP programs fail.</h2>
        </FadeUp>
        <FadeUp delay={0.08}>
          <p className="mt-4 max-w-3xl text-[var(--color-text-muted)]">
            Over 70% of ERP initiatives fail to meet their original business case &mdash; not
            because of technology, but because of weak requirements, poor governance, and
            uncontrolled scope.
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            'Scope creep disguised as enhancements',
            'Weak requirements lead to endless redesign cycles',
            'Data migration and controls work underestimated',
            'Governance that doesn\u2019t hold',
            'Change fatigue across teams',
            'TCO never properly calculated upfront',
          ].map((item, index) => (
            <FadeUp key={item} delay={0.06 + index * 0.04}>
              <article className="glass-panel h-full rounded-2xl p-6">
                <p className="font-heading text-2xl text-[var(--color-gold)]/80">0{index + 1}</p>
                <p className="mt-3 text-sm text-[var(--color-text)]">{item}</p>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1}>
          <p className="mt-10 text-sm text-[var(--color-text-muted)]">
            &gt;70% of recently implemented ERP initiatives will fail to fully meet their
            original business-case goals. <span className="text-[var(--color-text)]/70">(Source: Industry research)</span>
          </p>
        </FadeUp>
      </section>

      <section className="aurora-band relative py-20">
        <div className="section-shell">
          <div className="section-rule" aria-hidden="true" />
        </div>
        <div className="section-shell">
          <FadeUp>
            <p className="kicker">Phase 0</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 max-w-3xl">Where ERP success is decided.</h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="mt-4 max-w-3xl text-[var(--color-text-muted)]">
              Phase 0 is not optional. It is the control layer that defines scope, cost, and
              execution discipline before any vendor is selected.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                step: 'Step 1',
                title: 'Discover',
                bullets: [
                  'Cross-functional process mapping (Finance, Ops, Procurement, IT)',
                  'Control gaps and pain points across all departments',
                  'Capacity, resource, and risk assessment',
                ],
                outcome: 'Clarity on current state and risk.',
              },
              {
                step: 'Step 2',
                title: 'Define',
                bullets: [
                  'URS + requirements matrix (Must / Should / Could)',
                  'ERP boundary clarity across all functions',
                  'Target data architecture + reporting structure',
                ],
                outcome: 'A clear, prioritized blueprint.',
              },
              {
                step: 'Step 3',
                title: 'Select',
                bullets: [
                  'Scripted demos (no vendor theatre)',
                  'Weighted scorecards across all stakeholder priorities',
                  'Implementation-ready scope pack',
                ],
                outcome: 'Confident, data-driven decision.',
              },
            ].map((phase, index) => (
              <FadeUp key={phase.title} delay={0.06 + index * 0.05}>
                <article className="glass-panel h-full rounded-2xl p-7">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">
                    {phase.step}
                  </p>
                  <h3 className="mt-3">{phase.title}</h3>
                  <ul className="timeline-dash mt-5 space-y-2.5 text-sm text-[var(--color-text)]">
                    {phase.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="gold-frost mt-6 rounded-xl p-3 text-xs text-[var(--color-text)]">
                    Outcome: {phase.outcome}
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.1}>
            <p className="mt-10 max-w-3xl text-[var(--color-text-muted)]">
              Phase 0 turns ERP from a risk into a controlled program.
            </p>
          </FadeUp>
          <FadeUp delay={0.12}>
            <div className="mt-6">
              <Button to="/phase-0" variant="ghost">
                Explore Phase 0 in Depth
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-shell py-20">
        <FadeUp>
          <p className="kicker">What We Do</p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-4 max-w-3xl">Four pillars of ERP transformation.</h2>
          <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">A vendor-independent, PMP-aligned operating model spanning advisory, implementation, process transformation, and post-go-live support.</p>
        </FadeUp>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {servicePillars.map((service, index) => (
            <FadeUp key={service.title} delay={0.08 + index * 0.05}>
              <article className="card-hover group glass-panel h-full rounded-2xl border-t-2 border-t-transparent p-6 transition-colors duration-300 hover:border-t-[var(--color-gold)]">
                <div className="text-[var(--color-gold)]">{service.icon}</div>
                <h3 className="mt-5">{service.title}</h3>
                <p className="mt-3 text-sm text-[var(--color-text-muted)]">{service.description}</p>
                <Button to="/services" variant="subtle" className="mt-6 text-xs">
                  Learn More →
                </Button>
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
            <p className="kicker">Our Process</p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-4 max-w-3xl">A PMP-aligned hybrid delivery model.</h2>
          </FadeUp>
          <FadeUp delay={0.08}>
            <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">Waterfall governance with Agile execution &mdash; phase gates that hold, sprints that move.</p>
          </FadeUp>

          <div className="glass-panel mt-10 rounded-3xl p-7 md:p-9">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {methodologySteps.map((step, index) => (
                <div key={step.phase} className="relative">
                  <p className="font-heading text-3xl text-[var(--color-gold)]">0{index + 1}</p>
                  <p className="mt-2 text-lg text-[var(--color-white)]">{step.phase}</p>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{step.detail}</p>
                  {index < methodologySteps.length - 1 ? (
                    <span className="hidden lg:block absolute right-[-0.9rem] top-5 h-px w-4 bg-[var(--color-gold-dim)]" />
                  ) : null}
                </div>
              ))}
              </div>
          </div>

          <FadeUp delay={0.1} className="mt-8">
            <Button to="/methodology" variant="ghost">
              See Full Methodology
            </Button>
          </FadeUp>
        </div>
      </section>

      <section className="section-shell py-20 md:py-24">
        <div className="glass-panel rounded-[2rem] p-8 text-center md:p-14">
          <FadeUp>
            <h2 className="text-gradient-gold">Turn ERP from a risk into a controlled program.</h2>
          </FadeUp>
          <FadeUp delay={0.05}>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-muted)]">
              30 minutes. No obligation. Start with a Phase 0 conversation.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Button to="/contact" variant="primary" className="mt-8">
              Get Started
            </Button>
          </FadeUp>
        </div>
      </section>
    </>
  )
}

export default Home
