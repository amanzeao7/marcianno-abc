import Image from 'next/image'
import Button from '@/components/shared/Button'

const stats = [
  { value: '5.0 ★', label: 'Google Rating' },
  { value: '5+', label: 'Classes/Week' },
  { value: 'All Ages', label: 'Welcome' },
  { value: 'Est.', label: 'Welling' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1400&q=80"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to right, rgba(13,13,13,0.97) 45%, rgba(13,13,13,0.4))',
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="max-w-[600px]">
            {/* Eyebrow */}
            <p
              className="font-body font-semibold text-[0.82rem] uppercase tracking-[3px] mb-4"
              style={{ color: 'var(--color-red)' }}
            >
              Welling · Bexley · Kent
            </p>

            {/* H1 */}
            <h1
              className="font-display leading-[0.95] mb-6"
              style={{
                fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                letterSpacing: '2px',
                color: 'var(--color-text)',
              }}
            >
              TRAIN HARD.{' '}
              <br />
              FIGHT SMART.{' '}
              <br />
              BUILD{' '}
              <span style={{ color: 'var(--color-red)' }}>COMMUNITY.</span>
            </h1>

            {/* Subtext */}
            <p
              className="font-body text-base lg:text-lg leading-relaxed mb-8 max-w-[440px]"
              style={{ color: 'var(--color-text2)' }}
            >
              Marcianno Bexley &amp; District ABC — a welcoming boxing club for
              all ages and abilities. Real coaching. Real community. Right here
              in Welling.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button href="/contact" variant="primary">
                Get Started
              </Button>
              <Button href="/classes" variant="outline">
                Our Classes
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-display text-2xl"
                    style={{ color: 'var(--color-text)', letterSpacing: '1px' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-body text-xs uppercase tracking-widest"
                    style={{ color: 'var(--color-text3)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
