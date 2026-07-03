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

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="WHO WE ARE"
              title="Why Marcianno?"
            />

            <p
              className="font-body text-base leading-relaxed mb-4"
              style={{ color: 'var(--color-text2)' }}
            >
              We're not just a boxing club — we're a community built on respect,
              discipline, and graft. Named after the great Rocky Marciano, we carry
              that champion spirit into everything we do.
            </p>
            <p
              className="font-body text-base leading-relaxed mb-10"
              style={{ color: 'var(--color-text2)' }}
            >
              Whether you're stepping into a gym for the first time or you've been
              in the game for years, you'll find your place here. Based in the heart
              of Welling, we're proud to serve Bexley and beyond.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-display text-3xl"
                    style={{ color: 'var(--color-red)', letterSpacing: '1px' }}
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
              className="relative w-full overflow-hidden rounded-sm"
              style={{ aspectRatio: '4/5' }}
            >
              <Image
                src="/images/marco1.jpg.jpeg"
                alt="Marcianno ABC boxing gym"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
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
