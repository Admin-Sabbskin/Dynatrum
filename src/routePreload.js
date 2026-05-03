import { lazy } from 'react'

const routeLoaders = {
  '/': () => import('./pages/Home.jsx'),
  '/services': () => import('./pages/Services.jsx'),
  '/methodology': () => import('./pages/Methodology.jsx'),
  '/case-studies': () => import('./pages/CaseStudies.jsx'),
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
export const CaseStudiesPage = createLazyRoute('/case-studies')
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
  { label: 'Methodology', to: '/methodology' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About', to: '/about' },
]
