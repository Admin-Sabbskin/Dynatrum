import { lazy } from 'react'

const routeLoaders = {
  '/': () => import('./pages/Home.jsx'),
  '/services': () => import('./pages/Services.jsx'),
  '/methodology': () => import('./pages/Methodology.jsx'),
  '/phase-0': () => import('./pages/Phase0.jsx'),
  '/case-studies': () => import('./pages/CaseStudies.jsx'),
  '/insights': () => import('./pages/Insights.jsx'),
  '/insights/ai-copilot': () => import('./pages/AICopilot.jsx'),
  '/insights/ifrs-18': () => import('./pages/IFRS18.jsx'),
  '/about': () => import('./pages/About.jsx'),
  '/contact': () => import('./pages/Contact.jsx'),
}

const preloadedRoutes = new Set()

function createLazyRoute(path) {
  const loader = routeLoaders[path]
  const LazyComponent = lazy(loader)
  LazyComponent.preload = loader
  return LazyComponent
}

export const HomePage = createLazyRoute('/')
export const ServicesPage = createLazyRoute('/services')
export const MethodologyPage = createLazyRoute('/methodology')
export const Phase0Page = createLazyRoute('/phase-0')
export const CaseStudiesPage = createLazyRoute('/case-studies')
export const InsightsPage = createLazyRoute('/insights')
export const AICopilotPage = createLazyRoute('/insights/ai-copilot')
export const IFRS18Page = createLazyRoute('/insights/ifrs-18')
export const AboutPage = createLazyRoute('/about')
export const ContactPage = createLazyRoute('/contact')

export function preloadRoute(path) {
  const loader = routeLoaders[path]
  if (!loader || preloadedRoutes.has(path)) {
    return Promise.resolve()
  }

  preloadedRoutes.add(path)
  return loader()
}

export const navigationRoutes = [
  { label: 'Services', to: '/services' },
  { label: 'Phase 0', to: '/phase-0' },
  { label: 'Methodology', to: '/methodology' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Insights', to: '/insights' },
  { label: 'About', to: '/about' },
]
