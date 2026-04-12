import { Footer, Navbar } from '../components'
import { CTA, CaseStudies, Hero, Process, Services } from '../sections'

function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <CaseStudies />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
