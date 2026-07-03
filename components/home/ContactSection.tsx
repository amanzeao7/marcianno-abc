'use client'

import { useState } from 'react'
import SectionHeader from '@/components/shared/SectionHeader'
import Button from '@/components/shared/Button'

const contactDetails = {
  address: '2 Upper Wickham Lane, Welling, DA16 3HE',
  phones: ['07872 557298', '07901 557339'],
  instagram: 'https://instagram.com/marciannoabc',
  facebook: 'https://facebook.com/61571771549768',
  hours: [
    { days: 'Monday', time: '6:00 PM' },
    { days: 'Tuesday', time: '6:00 PM & 7:30 PM' },
    { days: 'Wednesday', time: '6:00 PM' },
    { days: 'Thursday', time: '6:00 PM & 7:30 PM' },
    { days: 'Friday', time: '7:30 PM (Over 40s)' },
  ],
}

const classOptions = [
  'Juniors (Ages 8–16)',
  'Seniors (16+)',
  "Women's Boxing",
  'Over 40s',
  'Beginners / Drop In',
  'General Enquiry',
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactSection() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setState('success')
        setForm({ name: '', email: '', interest: '', message: '' })
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  return (
    <section
      id="contact"
      className="py-20 px-[5%]"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Get In Touch" title="Find Us" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left — club info */}
          <div>
            {/* Address */}
            <div className="mb-8">
              <h3
                className="font-display text-lg mb-3"
                style={{ color: 'var(--color-red)', letterSpacing: '1px' }}
              >
                Address
              </h3>
              <address
                className="font-body text-base not-italic leading-relaxed"
                style={{ color: 'var(--color-text2)' }}
              >
                {contactDetails.address}
              </address>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <h3
                className="font-display text-lg mb-3"
                style={{ color: 'var(--color-red)', letterSpacing: '1px' }}
              >
                Phone
              </h3>
              {contactDetails.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="block font-body text-base transition-colors duration-150"
                  style={{ color: 'var(--color-text2)' }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = 'var(--color-text)')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = 'var(--color-text2)')
                  }
                >
                  {phone}
                </a>
              ))}
            </div>

            {/* Hours */}
            <div className="mb-8">
              <h3
                className="font-display text-lg mb-3"
                style={{ color: 'var(--color-red)', letterSpacing: '1px' }}
              >
                Training Hours
              </h3>
              <dl>
                {contactDetails.hours.map(({ days, time }) => (
                  <div
                    key={days}
                    className="flex justify-between py-1.5"
                    style={{ borderBottom: '1px solid var(--color-border)' }}
                  >
                    <dt
                      className="font-body font-semibold text-sm"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {days}
                    </dt>
                    <dd
                      className="font-body text-sm"
                      style={{ color: 'var(--color-text2)' }}
                    >
                      {time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Socials */}
            <div>
              <h3
                className="font-display text-lg mb-3"
                style={{ color: 'var(--color-red)', letterSpacing: '1px' }}
              >
                Follow Us
              </h3>
              <div className="flex gap-3">
                <SocialButton href={contactDetails.instagram} label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  Instagram
                </SocialButton>
                <SocialButton href={contactDetails.facebook} label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </SocialButton>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div>
            {state === 'success' ? (
              <div
                className="flex flex-col items-start justify-center h-full py-12"
                role="alert"
                aria-live="polite"
              >
                <div className="w-12 h-1 mb-6" style={{ background: 'var(--color-red)' }} />
                <h3
                  className="font-display text-3xl mb-3"
                  style={{ color: 'var(--color-text)', letterSpacing: '1px' }}
                >
                  Thanks!
                </h3>
                <p className="font-body text-base" style={{ color: 'var(--color-text2)' }}>
                  We'll be in touch soon. See you at the gym!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <FormField id="contact-name" label="Name">
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 transition-colors"
                    style={{
                      background: 'var(--color-bg3)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                    placeholder="Your name"
                  />
                </FormField>

                <FormField id="contact-email" label="Email">
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 transition-colors"
                    style={{
                      background: 'var(--color-bg3)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                    placeholder="your@email.com"
                  />
                </FormField>

                <FormField id="contact-class" label="Interested In">
                  <select
                    id="contact-class"
                    name="interest"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 transition-colors appearance-none"
                    style={{
                      background: 'var(--color-bg3)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                  >
                    <option value="">Select a class...</option>
                    {classOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField id="contact-message" label="Message">
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 transition-colors resize-none"
                    style={{
                      background: 'var(--color-bg3)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                    placeholder="Tell us a bit about yourself and what you're looking for..."
                  />
                </FormField>

                {state === 'error' && (
                  <p className="font-body text-sm" style={{ color: 'var(--color-red)' }}>
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <Button
                  variant="primary"
                  className="self-start"
                  disabled={state === 'loading'}
                  aria-busy={state === 'loading'}
                >
                  {state === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function FormField({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-body font-semibold text-xs uppercase tracking-wider"
        style={{ color: 'var(--color-text2)' }}
      >
        {label}
      </label>
      {children}
    </div>
  )
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Follow us on ${label}`}
      className="flex items-center gap-2 px-4 py-2 font-body font-semibold text-sm uppercase tracking-wider border transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1"
      style={{
        color: 'var(--color-text2)',
        borderColor: 'var(--color-border)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.color = 'var(--color-text)'
        el.style.borderColor = 'var(--color-red)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.color = 'var(--color-text2)'
        el.style.borderColor = 'var(--color-border)'
      }}
    >
      {children}
    </a>
  )
}
