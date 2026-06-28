import { pricing } from '@/lib/data'
import { PricingTier } from '@/lib/types'
import SectionHeader from '@/components/shared/SectionHeader'
import Button from '@/components/shared/Button'

export default function PricingSection() {
  return (
    <section
      className="py-20 px-[5%]"
      style={{ background: 'var(--color-bg2)' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="Simple Pricing" title="No Contracts. No Fuss." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {pricing.map((tier) => (
            <PricingCard key={tier.label} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <article
      className="relative flex flex-col p-8"
      style={{
        background: 'var(--color-bg3)',
        border: tier.featured
          ? '1px solid var(--color-red)'
          : '1px solid var(--color-border)',
        borderTopWidth: tier.featured ? '3px' : '1px',
        borderTopColor: tier.featured ? 'var(--color-red)' : 'var(--color-border)',
      }}
    >
      {/* Featured badge */}
      {tier.featured && (
        <span
          className="absolute top-4 right-4 font-body font-semibold text-xs uppercase tracking-wider px-3 py-1"
          style={{
            background: 'var(--color-red)',
            color: 'var(--color-text)',
          }}
        >
          Most Popular
        </span>
      )}

      {/* Label */}
      <h3
        className="font-display text-2xl mb-2"
        style={{ color: 'var(--color-text)', letterSpacing: '1px' }}
      >
        {tier.label}
      </h3>

      {/* Price */}
      <div className="flex items-baseline gap-2 mb-2">
        <span
          className="font-display text-5xl"
          style={{
            color: tier.featured ? 'var(--color-red)' : 'var(--color-text)',
            letterSpacing: '1px',
          }}
        >
          {tier.amount}
        </span>
        <span
          className="font-body text-sm"
          style={{ color: 'var(--color-text3)' }}
        >
          / {tier.per}
        </span>
      </div>

      {/* Description */}
      <p
        className="font-body text-sm leading-relaxed mb-8 flex-1"
        style={{ color: 'var(--color-text2)' }}
      >
        {tier.description}
      </p>

      <Button href="/contact" variant={tier.featured ? 'primary' : 'outline'}>
        Get Started
      </Button>
    </article>
  )
}
