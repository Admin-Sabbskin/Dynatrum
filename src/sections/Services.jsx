import { motion } from 'framer-motion'

const MotionArticle = motion.article

const services = [
  {
    title: 'ERP Advisory',
    description:
      'Assess process maturity, define requirements, and select the right platform with finance-led governance.',
  },
  {
    title: 'ERP Implementation',
    description:
      'Execute configuration, migration, and testing through a controlled delivery model built for reliable go-live.',
  },
  {
    title: 'Finance Transformation',
    description:
      'Redesign chart of accounts, controls, and reporting workflows to improve close quality and audit readiness.',
  },
  {
    title: 'Custom ERP & Automation',
    description:
      'Build tailored workflows, integrations, and automation layers that remove manual effort across finance operations.',
  },
]

function Services() {
  return (
    <section id="services" className="border-b border-slate-200 bg-slate-50">
      <div className="section-shell section-space">
        <p className="section-kicker">Services</p>
        <h2 className="section-title">
          Core capabilities for finance-led ERP delivery.
        </h2>
        <p className="section-copy">
          Four focused offerings designed to improve implementation reliability,
          financial control, and operational efficiency.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <MotionArticle
              key={service.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
              whileHover={{ y: -2 }}
              className="card-surface p-8 transition-colors hover:border-slate-300"
            >
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
            </MotionArticle>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
