import Image from 'next/image'
import SectionHeader from '@/components/shared/SectionHeader'

const stats = [
  { value: '5.0 ★', label: 'Google Rating' },
  { value: '5+', label: 'Classes/Week' },
  { value: 'All Ages', label: 'Welcome' },
]

export default function WhySection() {
  return (
    <section
      className="py-20 px-[5%]"
      style={{ background: 'var(--color-bg2)' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text side — first on mobile */}
          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="Why Marcianno ABC"
              title="Not Just a Gym. A Community."
            />

            <p
              className="font-body text-base leading-relaxed mb-4"
              style={{ color: 'var(--color-text2)' }}
            >
              We're a friendly, inclusive boxing club based in Welling, open to
              everyone — from complete beginners to experienced fighters. Whether
              you're here for fitness, competition, confidence, or community,
              there's a place for you at Marcianno ABC.
            </p>
            <p
              className="font-body text-base leading-relaxed mb-10"
              style={{ color: 'var(--color-text2)' }}
            >
              Our experienced coaches bring decades of competitive and community
              boxing experience. We believe boxing is for everyone — every age,
              every background, every goal.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-display text-3xl"
                    style={{
                      color: 'var(--color-red)',
                      letterSpacing: '1px',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-body text-xs uppercase tracking-widest mt-1"
                    style={{ color: 'var(--color-text3)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="order-2 lg:order-1">
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: '4/5' }}
            >
              <Image
                src="/images/2026-06-18_20_52_13.jpeg"
                alt="Marcianno ABC senior team seated on the boxing ring canvas"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle red-line accent */}
              <div
                className="absolute bottom-0 left-0 h-1 w-16"
                style={{ background: 'var(--color-red)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
