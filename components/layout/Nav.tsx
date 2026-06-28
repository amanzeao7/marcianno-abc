'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Button from '@/components/shared/Button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/classes', label: 'Classes' },
  { href: '/#schedule', label: 'Schedule' },
  { href: '/coaches', label: 'Coaches' },
  { href: '/community', label: 'Community' },
  { href: '/fights', label: 'Fights' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        closeMenu()
        hamburgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen, closeMenu])

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !hamburgerRef.current?.contains(e.target as Node)
      ) {
        closeMenu()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen, closeMenu])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href.split('#')[0]) && href.split('#')[0] !== '/'
  }

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[300] focus:bg-[var(--color-red)] focus:text-white focus:px-4 focus:py-2 focus:font-body focus:font-semibold focus:text-sm"
      >
        Skip to main content
      </a>

      <header
        className="sticky top-0 z-[200] h-[62px] flex items-center backdrop-blur-md bg-[rgba(13,13,13,0.92)] border-b border-[var(--color-border)]"
        role="banner"
      >
        <div className="w-full max-w-[1200px] mx-auto px-[5%] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 focus:outline-2 focus:outline-[#D0231A] focus:outline-offset-2" aria-label="Marcianno ABC — Home">
            <Image
              src="/logos/MARCIANNO_ABC_LOGO_WHITE_RGB.png"
              alt="Marcianno ABC"
              width={140}
              height={38}
              priority
              className="h-[38px] w-auto object-contain"
            />
          </Link>

          {/* Desktop nav links */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-6"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-body font-semibold text-sm uppercase tracking-[1.5px] text-[var(--color-text2)] hover:text-[var(--color-text)] transition-colors duration-150"
                aria-current={isActive(href) ? 'page' : undefined}
                style={isActive(href) ? { color: 'var(--color-text)' } : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              className="hidden md:inline-block text-sm py-2.5 px-6"
            >
              Join Us
            </Button>

            {/* Hamburger */}
            <button
              ref={hamburgerRef}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-controls="mobile-menu"
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-2 focus:outline-[#D0231A] focus:outline-offset-2 rounded-sm"
            >
              <span
                className={`block w-6 h-[2px] bg-[var(--color-text)] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
              />
              <span
                className={`block w-6 h-[2px] bg-[var(--color-text)] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-6 h-[2px] bg-[var(--color-text)] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-[199] bg-[var(--color-bg)] flex flex-col justify-between px-[5%] py-10 transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Spacer for nav height */}
        <div className="h-[62px]" />

        <nav aria-label="Mobile navigation" className="flex flex-col gap-2 flex-1 justify-center">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className="font-display text-[2.6rem] tracking-[2px] text-[var(--color-text)] hover:text-[var(--color-red)] transition-colors duration-150 leading-tight"
              aria-current={isActive(href) ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="pb-6">
          <Button href="/contact" variant="primary" onClick={closeMenu} className="w-full text-center">
            Join Us
          </Button>
        </div>
      </div>
    </>
  )
}
