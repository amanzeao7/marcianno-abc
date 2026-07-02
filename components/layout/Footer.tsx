import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/classes', label: 'Classes' },
  { href: '/coaches', label: 'Coaches' },
  { href: '/community', label: 'Community' },
  { href: '/contact', label: 'Contact' },
]

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer
      className="bg-[var(--color-bg)] border-t border-[var(--color-border)] pt-12 pb-8"
      role="contentinfo"
    >
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo + tagline */}
          <div>
            <Link href="/" aria-label="Marcianno ABC — Home">
              <Image
                src="/logos/MARCIANNO_ABC_LOGO_WHITE_RGB.png"
                alt="Marcianno ABC"
                width={160}
                height={44}
                className="h-[44px] w-auto object-contain mb-4"
              />
            </Link>
            <p className="font-body text-sm text-[var(--color-text2)] leading-relaxed max-w-[240px]">
              Building Strength. Building Community.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <p className="font-body font-semibold text-[0.75rem] uppercase tracking-[2px] text-[var(--color-text3)] mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-sm text-[var(--color-text2)] hover:text-[var(--color-text)] transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + socials */}
          <div>
            <p className="font-body font-semibold text-[0.75rem] uppercase tracking-[2px] text-[var(--color-text3)] mb-4">
              Find Us
            </p>
            <address className="not-italic">
              <p className="font-body text-sm text-[var(--color-text2)] leading-relaxed mb-3">
                2 Upper Wickham Lane<br />
                Welling, DA16 3HE
              </p>
              <div className="flex flex-col gap-1 mb-5">
                <a
                  href="tel:07872557398"
                  className="font-body text-sm text-[var(--color-text2)] hover:text-[var(--color-text)] transition-colors"
                >
                  07872 557398
                </a>
                <a
                  href="tel:07901557339"
                  className="font-body text-sm text-[var(--color-text2)] hover:text-[var(--color-text)] transition-colors"
                >
                  07901 557339
                </a>
              </div>
            </address>

            <div className="flex gap-3">
              <a
                href="https://instagram.com/marciannoabc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Marcianno ABC on Instagram"
                className="flex items-center justify-center w-10 h-10 border border-[var(--color-border)] text-[var(--color-text2)] hover:border-[var(--color-red)] hover:text-[var(--color-red)] transition-colors duration-200 focus:outline-2 focus:outline-[#D0231A] focus:outline-offset-2"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com/61571771549768"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Marcianno ABC on Facebook"
                className="flex items-center justify-center w-10 h-10 border border-[var(--color-border)] text-[var(--color-text2)] hover:border-[var(--color-red)] hover:text-[var(--color-red)] transition-colors duration-200 focus:outline-2 focus:outline-[#D0231A] focus:outline-offset-2"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] pt-6">
          <p className="font-body text-xs text-[var(--color-text3)] text-center">
            © 2026 Marcianno Bexley &amp; District ABC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
