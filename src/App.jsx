import { Suspense, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import {
  AboutPage,
  AICopilotPage,
  CaseStudiesPage,
  ContactPage,
  HomePage,
  IFRS18Page,
  InsightsPage,
  MethodologyPage,
  Phase0Page,
  ServicesPage,
  preloadRoute,
} from './routePreload'

const MotionDiv = motion.div

function RouteTransition({ children }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      {children}
    </MotionDiv>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <Suspense fallback={<div className="route-loader">Loading page...</div>}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route
              index
              element={
                <RouteTransition>
                  <HomePage />
                </RouteTransition>
              }
            />
            <Route
              path="/services"
              element={
                <RouteTransition>
                  <ServicesPage />
                </RouteTransition>
              }
            />
            <Route
              path="/methodology"
              element={
                <RouteTransition>
                  <MethodologyPage />
                </RouteTransition>
              }
            />
            <Route
              path="/phase-0"
              element={
                <RouteTransition>
                  <Phase0Page />
                </RouteTransition>
              }
            />
            <Route
              path="/case-studies"
              element={
                <RouteTransition>
                  <CaseStudiesPage />
                </RouteTransition>
              }
            />
            <Route
              path="/insights"
              element={
                <RouteTransition>
                  <InsightsPage />
                </RouteTransition>
              }
            />
            <Route
              path="/insights/ai-copilot"
              element={
                <RouteTransition>
                  <AICopilotPage />
                </RouteTransition>
              }
            />
            <Route
              path="/insights/ifrs-18"
              element={
                <RouteTransition>
                  <IFRS18Page />
                </RouteTransition>
              }
            />
            <Route
              path="/about"
              element={
                <RouteTransition>
                  <AboutPage />
                </RouteTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <RouteTransition>
                  <ContactPage />
                </RouteTransition>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}

function App() {
  useEffect(() => {
    const warmRoutes = ['/services', '/methodology', '/contact']

    const preloadWarmRoutes = () => {
      warmRoutes.forEach((routePath) => {
        void preloadRoute(routePath)
      })
    }

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(preloadWarmRoutes, { timeout: 1200 })
      return () => {
        if ('cancelIdleCallback' in window) {
          window.cancelIdleCallback(idleId)
        }
      }
    }

    const timerId = window.setTimeout(preloadWarmRoutes, 800)
    return () => window.clearTimeout(timerId)
  }, [])

  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
