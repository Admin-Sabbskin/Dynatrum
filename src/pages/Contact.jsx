import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import FadeUp from '../components/FadeUp'

const SERVICE_ID = 'TODO_SERVICE_ID'
const TEMPLATE_ID = 'TODO_TEMPLATE_ID'
const PUBLIC_KEY = 'TODO_PUBLIC_KEY'

function Contact() {
  const formRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formElement = formRef.current
    if (!formElement || !formElement.reportValidity()) {
      return
    }

    // Honeypot — bots fill every field; humans never see this one.
    const honeypot = String(formElement.website?.value ?? '').trim()
    if (honeypot) {
      // Silently drop without revealing detection.
      setStatus('success')
      setStatusMessage('Message sent! Sabbeen will be in touch within 24 hours.')
      formElement.reset()
      return
    }

    const email = String(formElement.user_email?.value ?? '').trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      setStatus('error')
      setStatusMessage('Please enter a valid email address.')
      return
    }

    const message = String(formElement.message?.value ?? '').trim()
    if (message.length > 4000) {
      setStatus('error')
      setStatusMessage('Message is too long. Please keep it under 4000 characters.')
      return
    }

    setIsSubmitting(true)
    setStatus('idle')
    setStatusMessage('')

    try {
      // TODO: Replace with actual EmailJS service ID, template ID, and public key.
      // SECURITY: In the EmailJS dashboard, restrict the public key to this site's
      // domain (Allow-list) and enable the built-in CAPTCHA / rate limit so the
      // public key can't be reused for spam from other origins.
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formElement, {
        publicKey: PUBLIC_KEY,
      })

      setStatus('success')
      setStatusMessage('Message sent! Sabbeen will be in touch within 24 hours.')
      formElement.reset()
    } catch {
      setStatus('error')
      setStatusMessage(
        'Something went wrong. Please email directly at sabbeensheikkh@yahoo.com',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="aurora-band relative pb-20 pt-32 md:pt-36">
      <div className="section-shell">
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeUp>
          <div className="glass-panel h-full rounded-[1.8rem] p-7 md:p-10">
            <p className="kicker">Contact</p>
            <h2 className="mt-4">Let's talk about your ERP needs.</h2>
            <p className="mt-6 text-[var(--color-text-muted)]">
              In this consultation, we review your current finance process landscape,
              identify ERP risk areas, and define practical next steps for
              implementation or transformation.
            </p>

            <div className="mt-10 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">Phone</p>
                <a href="tel:+16475138192" className="mt-1 block text-lg text-[var(--color-white)]">
                  +1 647 513 8192
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">Email</p>
                {/* TODO: update with custom domain email */}
                <a
                  href="mailto:sabbeensheikkh@yahoo.com"
                  className="mt-1 block text-lg text-[var(--color-white)]"
                >
                  sabbeensheikkh@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.05}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-panel rounded-[1.8rem] p-7 md:p-10"
            noValidate
          >
            {/* Honeypot — visually hidden, off-tab, ignored by humans */}
            <div
              aria-hidden="true"
              style={{ position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
            >
              <label>
                Website
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-field sm:col-span-2">
                <span>Full Name *</span>
                <input name="full_name" type="text" required maxLength={120} autoComplete="name" />
              </label>

              <label className="form-field sm:col-span-2">
                <span>Company Name *</span>
                <input name="company_name" type="text" required maxLength={160} autoComplete="organization" />
              </label>

              <label className="form-field">
                <span>Email Address *</span>
                <input name="user_email" type="email" required maxLength={254} autoComplete="email" />
              </label>

              <label className="form-field">
                <span>Phone Number</span>
                <input name="phone_number" type="tel" maxLength={32} autoComplete="tel" />
              </label>

              <label className="form-field">
                <span>Company Size *</span>
                <select name="company_size" required defaultValue="">
                  <option value="" disabled>
                    Select company size
                  </option>
                  <option value="Under 50">Under 50</option>
                  <option value="50-200">50-200</option>
                  <option value="200-1000">200-1000</option>
                  <option value="1000+">1000+</option>
                </select>
              </label>

              <label className="form-field">
                <span>Current ERP System *</span>
                <select name="current_erp" required defaultValue="">
                  <option value="" disabled>
                    Select ERP system
                  </option>
                  <option value="QuickBooks">QuickBooks</option>
                  <option value="Sage">Sage</option>
                  <option value="NetSuite">NetSuite</option>
                  <option value="SAP">SAP</option>
                  <option value="Dynamics">Dynamics</option>
                  <option value="Other">Other</option>
                  <option value="None">None</option>
                </select>
              </label>

              <label className="form-field sm:col-span-2">
                <span>Message *</span>
                <textarea
                  name="message"
                  required
                  rows="5"
                  maxLength={4000}
                  placeholder="Describe your ERP challenge or what you're looking to achieve..."
                />
              </label>
            </div>

            <button type="submit" disabled={isSubmitting} className="btn btn-primary mt-8 w-full sm:w-auto">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {statusMessage ? (
              <p
                className={`mt-4 text-sm ${
                  status === 'success' ? 'text-emerald-300' : 'text-rose-300'
                }`}
              >
                {statusMessage}
              </p>
            ) : null}
          </form>
        </FadeUp>
      </div>
      </div>
    </section>
  )
}

export default Contact
