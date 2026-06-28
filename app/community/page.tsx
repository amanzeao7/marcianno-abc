import Image from 'next/image'
import SectionHeader from '@/components/shared/SectionHeader'
import ImagePlaceholder from '@/components/community/ImagePlaceholder'

export const metadata = {
  title: 'Community | Marcianno ABC',
  description:
    'At the heart of our community — boxing that builds confidence, discipline, respect, and belonging. All ages, all backgrounds, all welcome.',
}

const stats = [
  { value: '5.0 ★', label: 'Google Rating' },
  { value: '5+', label: 'Classes Per Week' },
  { value: 'All Ages', label: 'Welcome Here' },
  { value: 'Est.', label: 'Welling, DA16' },
]

export default function CommunityPage() {
  return (
    <main id="main-content">
      {/* Full-bleed hero with junior team photo */}
      <section
        className="relative min-h-[70vh] flex items-end pb-16 px-[5%]"
        aria-label="Community page hero"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/2026-06-18 20.52.09.jpg.jpeg"
            alt="Junior boxing team at Marcianno ABC"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(13,13,13,0.97) 35%, rgba(13,13,13,0.45))',
            }}
            aria-hidden="true"
          />
        </div>

        <div className="max-w-[1200px] mx-auto w-full">
          <p className="font-body font-semibold text-[var(--color-red)] uppercase tracking-[3px] text-sm mb-3">
            WELLING · BEXLEY · KENT
          </p>
          <h1 className="font-display text-[clamp(2.8rem,7vw,5.5rem)] tracking-[2px] text-[var(--color-text)] leading-none max-w-3xl">
            At the Heart of Our Community
          </h1>
          <div className="w-12 h-[3px] bg-[var(--color-red)] mt-4" aria-hidden="true" />
        </div>
      </section>

      {/* Community Copy */}
      <section className="py-20 px-[5%] bg-[var(--color-bg)]" aria-labelledby="community-copy-heading">
        <div className="max-w-[760px] mx-auto">
          <SectionHeader eyebrow="WHO WE ARE" title="More Than a Gym" id="community-copy-heading" />

          <div className="mt-10 space-y-6 font-body text-[1.1rem] text-[var(--color-text2)] leading-relaxed">
            <p>
              Marcianno Bexley &amp; District ABC is more than a boxing club — it&apos;s a
              community built on shared effort, mutual respect, and a genuine belief that
              boxing changes lives. From the moment you walk through the door, you&apos;re
              part of something bigger than yourself.
            </p>
            <p>
              We welcome everyone. It doesn&apos;t matter where you&apos;re from, what
              your background is, or whether you&apos;ve ever laced up a pair of gloves
              before. Boxing is for everybody, and so is Marcianno ABC. Our members range
              from 8-year-old juniors finding their feet, to over-40s who&apos;ve
              discovered a new passion later in life.
            </p>
            <p>
              Boxing builds more than fitness. It builds confidence, discipline, and
              resilience. It teaches you to face adversity head-on — in the ring and out
              of it. Every session, every round, every small improvement adds up to
              something real. Our coaches have seen it happen hundreds of times, and it
              never gets old.
            </p>
            <p>
              Our community extends well beyond the gym walls. Members support each other
              at fights, celebrate each other&apos;s victories, and show up for each other
              through challenges. The relationships you build here are genuine — forged
              through hard work, sweat, and the shared experience of pushing your limits.
            </p>
            <p>
              Whether your goal is competition, fitness, personal development, or simply
              belonging to something worthwhile — you&apos;ll find it here. We
              don&apos;t just train fighters. We develop people.
            </p>
          </div>

          {/* Closing tagline */}
          <p className="mt-14 font-display text-[clamp(1.8rem,4vw,2.8rem)] text-[var(--color-red)] tracking-[2px] leading-tight">
            Train together. Grow together. Succeed together.
          </p>
        </div>
      </section>

      {/* Stats Strip */}
      <section
        className="py-12 px-[5%] bg-[var(--color-bg2)] border-y border-[var(--color-border)]"
        aria-label="Club statistics"
      >
        <div className="max-w-[1200px] mx-auto">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dt className="font-body text-xs uppercase tracking-[3px] text-[var(--color-text3)]">
                  {stat.label}
                </dt>
                <dd className="font-display text-4xl tracking-wide text-[var(--color-red)]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Action shots — placeholder until real photography arrives */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="max-w-[1200px] mx-auto px-[5%]">
          <p className="text-[var(--color-text3)] font-body text-xs uppercase tracking-[2px] mb-6">
            Photography coming soon
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative aspect-[4/3] w-full rounded overflow-hidden">
                   <Image
src="/images/junior-champs.jpeg"
alt="Junior champions with their belts at Marcianno ABC"
fill
className="object-cover object-top"
sizes="(max-width: 768px) 100vw, 33vw"
/>
            </div>
     
            <ImagePlaceholder label="Action shot — sparring" aspectClass="aspect-[3/4]" />
            <ImagePlaceholder label="Gym interior" aspectClass="aspect-[3/4]" />
          </div>
        </div>
      </section>

      {/* Senior team photo */}
      <section
        className="py-20 px-[5%] bg-[var(--color-bg)]"
        aria-label="Senior team photograph"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="relative w-full aspect-[16/7] rounded-sm overflow-hidden">
            <Image
              src="/images/2026-06-18 20.52.13.jpg.jpeg"
              alt="Senior boxing team at Marcianno ABC, seated on the ring canvas"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[rgba(13,13,13,0.5)] to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>
    </main>
  )
}