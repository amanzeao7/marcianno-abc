import Image from 'next/image'
import { coaches } from '@/lib/data'
import CoachCard from '@/components/coaches/CoachCard'
import SectionHeader from '@/components/shared/SectionHeader'

export const metadata = {
  title: 'Our Coaches | Marcianno ABC',
  description:
    'Meet the coaching team at Marcianno Bexley & District ABC — experienced, passionate, and dedicated to helping you reach your potential.',
}

export default function CoachesPage() {
  return (
    <main id="main-content">
      {/* Page Hero */}
      <section
        className="relative min-h-[50vh] flex items-end pb-16 px-[5%]"
        aria-label="Coaches page hero"
      >
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/2026-06-18 20.52.13.jpg.jpeg"
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(13,13,13,0.97) 45%, rgba(13,13,13,0.6))',
            }}
            aria-hidden="true"
          />
        </div>

        <div className="max-w-[1200px] mx-auto w-full">
          <p
            className="font-body font-semibold text-[var(--color-red)] uppercase tracking-[3px] text-sm mb-3"
            aria-label="Section eyebrow"
          >
            MEET THE TEAM
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] tracking-[2px] text-[var(--color-text)] leading-none">
            Our Coaches
          </h1>
          <div className="w-12 h-[3px] bg-[var(--color-red)] mt-4" aria-hidden="true" />
        </div>
      </section>

      {/* Coach Grid */}
      <section
        className="py-20 px-[5%] bg-[var(--color-bg)]"
        aria-labelledby="coaches-heading"
      >
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            eyebrow="THE CORNER TEAM"
            title="Experienced. Passionate. Dedicated."
            id="coaches-heading"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {coaches.map((coach) => (
              <CoachCard key={coach.name} coach={coach} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
