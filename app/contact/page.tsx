'use client'

import { useState } from 'react'
import SectionHeader from '@/components/shared/SectionHeader'
import Button from '@/components/shared/Button'

// Metadata moved to a separate layout or generateMetadata server export —
// this file is 'use client' because of form state.

const HOURS = [
  { day: 'Monday', time: '6:00 PM – 8:00 PM' },
  { day: 'Tuesday', time: '6:00 PM – 9:00 PM' },
  { day: 'Wednesday', time: '6:00 PM – 8:00 PM' },
  { day: 'Thursday', time: '6:00 PM – 9:00 PM' },
  { day: 'Friday', time: '7:30 PM – 9:30 PM' },
  { day: 'Saturday – Sunday', time: 'Closed' },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setStatus('submitting')
    // Placeholder — Phase 5 wires up Resend API
    setTimeout(() => setStatus('success'), 800)
  }

  return (
    <main id="main-content">
      {/* Page Hero */}
      <section
        className="relative py-24 px-[5%] border-b border-[var(--color-border)]"
        aria-label="Contact page hero"
        style={{
          background:
            'linear-gradient(135deg, var(--color-bg2) 0%, var(--color-bg) 100%)',
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <p className="font-body font-semibold text-[var(--color-red)] uppercase tracking-[3px] text-sm mb-3">
            GET IN TOUCH
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] tracking-[2px] text-[var(--color-text)] leading-none">
            Contact &amp; Find Us
          </h1>
          <div className="w-12 h-[3px] bg-[var(--color-red)] mt-4 mb-6" aria-hidden="true" />
          <p className="font-body text-[var(--color-text2)] text-lg max-w-xl">
            Questions about joining? Want to watch a session first? Just get in touch —
            we&apos;re a friendly bunch.
          </p>
        </div>
      </section>

      {/* Map + Contact Details */}
      <section
        className="py-20 px-[5%] bg-[var(--color-bg)]"
        aria-labelledby="find-us-heading"
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div>
            <h2
              id="find-us-heading"
              className="font-display text-3xl tracking-wide text-[var(--color-text)] mb-6"
            >
              Find Us
            </h2>
            <div className="rounded-sm overflow-hidden border border-[var(--color-border)] w-full aspect-[4/3]">
              <iframe
                title="Marcianno ABC location — 2 Upper Wickham Lane, Welling, DA16 3HE"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.4540020684!2d0.10457!3d51.46557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8ab87c87c7b5f%3A0x0!2s2+Upper+Wickham+Ln%2C+Welling+DA16+3HE!5e0!3m2!1sen!2suk!4v1680000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact details + hours */}
          <div className="flex flex-col gap-8">
            {/* Details */}
            <div>
              <h2 className="font-display text-3xl tracking-wide text-[var(--color-text)] mb-6">
                Contact Details
              </h2>
              <address className="not-italic font-body text-[var(--color-text2)] flex flex-col gap-4 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--color-text3)] mb-1">Address</p>
                  <p>2 Upper Wickham Lane<br />Welling, DA16 3HE</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--color-text3)] mb-1">Phone</p>
                  <p>
                    <a
                      href="tel:07872557398"
                      className="hover:text-[var(--color-text)] transition-colors focus:outline-2 focus:outline-[var(--color-red)] focus:outline-offset-2"
                    >
                      07872 557398
                    </a>
                    {' · '}
                    <a
                      href="tel:07901557339"
                      className="hover:text-[var(--color-text)] transition-colors focus:outline-2 focus:outline-[var(--color-red)] focus:outline-offset-2"
                    >
                      07901 557339
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[var(--color-text3)] mb-1">Social</p>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/marciannoabc"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Marcianno ABC on Instagram (opens in new tab)"
                      className="text-[var(--color-text2)] hover:text-[var(--color-red)] transition-colors focus:outline-2 focus:outline-[var(--color-red)] focus:outline-offset-2"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://facebook.com/61571771549768"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Marcianno ABC on Facebook (opens in new tab)"
                      className="text-[var(--color-text2)] hover:text-[var(--color-red)] transition-colors focus:outline-2 focus:outline-[var(--color-red)] focus:outline-offset-2"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </address>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="font-display text-2xl tracking-wide text-[var(--color-text)] mb-4">
                Training Hours
              </h3>
              <dl className="font-body text-sm divide-y divide-[var(--color-border)]">
                {HOURS.map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex justify-between py-2 text-[var(--color-text2)]"
                  >
                    <dt className="font-semibold">{day}</dt>
                    <dd className={time === 'Closed' ? 'text-[var(--color-text3)]' : ''}>{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        className="py-20 px-[5%] bg-[var(--color-bg2)]"
        aria-labelledby="contact-form-heading"
      >
        <div className="max-w-[680px] mx-auto">
          <SectionHeader
            eyebrow="SEND A MESSAGE"
            title="Get In Touch"
            id="contact-form-heading"
          />

          {status === 'success' ? (
            <div
              role="status"
              aria-live="polite"
              className="mt-10 border border-[var(--color-red)] bg-[var(--color-bg3)] rounded-sm p-8 text-center"
            >
              <p className="font-display text-3xl text-[var(--color-text)] tracking-wide mb-2">
                Message Sent!
              </p>
              <p className="font-body text-[var(--color-text2)]">
                Thanks for getting in touch. We&apos;ll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <div className="mt-10 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-body text-xs uppercase tracking-widest text-[var(--color-text3)]"
                  >
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="bg-[var(--color-bg3)] border border-[var(--color-border)] rounded-sm px-4 py-3 font-body text-sm text-[var(--color-text)] placeholder:text-[var(--color-text3)] focus:outline-2 focus:outline-[var(--color-red)] focus:outline-offset-2 focus:border-[var(--color-red)] transition-colors min-h-[44px]"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-body text-xs uppercase tracking-widest text-[var(--color-text3)]"
                  >
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="bg-[var(--color-bg3)] border border-[var(--color-border)] rounded-sm px-4 py-3 font-body text-sm text-[var(--color-text)] placeholder:text-[var(--color-text3)] focus:outline-2 focus:outline-[var(--color-red)] focus:outline-offset-2 focus:border-[var(--color-red)] transition-colors min-h-[44px]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="font-body text-xs uppercase tracking-widest text-[var(--color-text3)]"
                >
                  Phone <span className="text-[var(--color-text3)] normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className="bg-[var(--color-bg3)] border border-[var(--color-border)] rounded-sm px-4 py-3 font-body text-sm text-[var(--color-text)] placeholder:text-[var(--color-text3)] focus:outline-2 focus:outline-[var(--color-red)] focus:outline-offset-2 focus:border-[var(--color-red)] transition-colors min-h-[44px]"
                  placeholder="07700 000000"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-body text-xs uppercase tracking-widest text-[var(--color-text3)]"
                >
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-[var(--color-bg3)] border border-[var(--color-border)] rounded-sm px-4 py-3 font-body text-sm text-[var(--color-text)] placeholder:text-[var(--color-text3)] focus:outline-2 focus:outline-[var(--color-red)] focus:outline-offset-2 focus:border-[var(--color-red)] transition-colors resize-y min-h-[120px]"
                  placeholder="Tell us a bit about yourself — which class interests you, any questions you have..."
                />
              </div>

              <div>
                <Button
                  onClick={handleSubmit}
                  variant="primary"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
              </div>

              {status === 'error' && (
                <p role="alert" className="font-body text-sm text-red-400">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
