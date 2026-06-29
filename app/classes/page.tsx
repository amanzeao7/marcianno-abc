import Link from 'next/link'
import { classes, schedule } from '@/lib/data'
import SectionHeader from '@/components/shared/SectionHeader'
import Button from '@/components/shared/Button'
import {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Classes | Marcianno ABC',
  description:
    'Boxing classes for all ages and levels — Juniors, Seniors, Women&apos;s, Over 40s, and Beginners. See the full weekly schedule.',
}


export default function ClassesPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Page Hero */}
      <section
        className="relative py-24 px-[5%] bg-[var(--color-bg2)] border-b border-[var(--color-border)]"
        aria-label="Classes page hero"
        style={{
          background:
            'linear-gradient(135deg, var(--color-bg2) 0%, var(--color-bg) 100%)',
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <p className="font-body font-semibold text-[var(--color-red)] uppercase tracking-[3px] text-sm mb-3">
            WHAT WE OFFER
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] tracking-[2px] text-[var(--color-text)] leading-none">
            Find Your Class
          </h1>
          <div className="w-12 h-[3px] bg-[var(--color-red)] mt-4 mb-6" aria-hidden="true" />
          <p className="font-body text-[var(--color-text2)] text-lg max-w-xl">
            Boxing for every age, every level, every goal. Find the right class and come
            train with us.
          </p>
        </div>
      </section>

      {/* Class Cards — expanded */}
      <section
        className="py-20 px-[5%] bg-[var(--color-bg)]"
        aria-labelledby="class-cards-heading"
      >
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            eyebrow="OUR SESSIONS"
            title="Every Class, Every Level"
            id="class-cards-heading"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {classes.map((cls) => (
              <article
                key={cls.id}
                className="bg-[var(--color-bg3)] border border-[var(--color-border)] rounded-sm p-6 flex flex-col gap-3 group transition-colors hover:border-[var(--color-red)]"
              >
                <span className="text-3xl" aria-hidden="true">
                  {cls.icon}
                </span>
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-display text-2xl tracking-wide text-[var(--color-text)]">
                    {cls.title}
                  </h2>
                  <span className="font-body text-xs font-semibold uppercase tracking-widest text-[var(--color-red)] border border-[var(--color-red)] px-2 py-0.5 rounded-sm whitespace-nowrap">
                    {cls.tag}
                  </span>
                </div>
                <p className="font-body text-[var(--color-text2)] text-sm leading-relaxed">
                  {cls.description}
                </p>
                <div className="mt-auto pt-4 border-t border-[var(--color-border)]">
                  <p className="font-body text-xs uppercase tracking-widest text-[var(--color-text3)] mb-1">
                    When
                  </p>
                  <p className="font-body text-sm font-semibold text-[var(--color-text2)]">
                    {cls.schedule}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Full Schedule Table */}
      <section
        className="py-20 px-[5%] bg-[var(--color-bg2)]"
        aria-labelledby="schedule-heading"
      >
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            eyebrow="CLASSES MONDAY TO FRIDAY"
            title="Weekly Schedule"
            id="schedule-heading"
          />
          <div className="overflow-x-auto mt-10 rounded-sm border border-[var(--color-border)]" role="region" aria-label="Weekly training schedule">
            <table className="w-full min-w-[480px] border-collapse font-body text-sm">
              <thead>
                <tr className="bg-[var(--color-red)]">
                  <th scope="col" className="text-left px-5 py-4 font-semibold uppercase tracking-wider text-white text-xs">
                    Day
                  </th>
                  <th scope="col" className="text-left px-5 py-4 font-semibold uppercase tracking-wider text-white text-xs">
                    Time
                  </th>
                  <th scope="col" className="text-left px-5 py-4 font-semibold uppercase tracking-wider text-white text-xs">
                    Class
                  </th>
                  <th scope="col" className="text-left px-5 py-4 font-semibold uppercase tracking-wider text-white text-xs">
                    Level
                  </th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <tr
                    key={`${row.day}-${row.time}`}
                    className={`border-t border-[var(--color-border)] transition-colors hover:bg-[var(--color-bg3)] ${
                      i % 2 === 0 ? 'bg-[var(--color-bg2)]' : 'bg-[var(--color-bg)]'
                    }`}
                  >
                    <td className="px-5 py-4 font-semibold text-[var(--color-text)]">{row.day}</td>
                    <td className="px-5 py-4 text-[var(--color-red)] font-semibold">{row.time}</td>
                    <td className="px-5 py-4 text-[var(--color-text2)]">{row.className}</td>
                    <td className="px-5 py-4 text-[var(--color-text3)]">{row.level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-[5%] bg-[var(--color-bg)] text-center"
        aria-labelledby="classes-cta-heading"
      >
        <div className="max-w-[600px] mx-auto">
          <h2
            id="classes-cta-heading"
            className="font-display text-[clamp(2rem,5vw,3.5rem)] tracking-[2px] text-[var(--color-text)] mb-4"
          >
            Ready to Join?
          </h2>
          <p className="font-body text-[var(--color-text2)] text-lg mb-8">
            Your first session is free. No commitment, no pressure — just come down and
            see what we&apos;re about.
          </p>
          <Button href="/contact" variant="primary">
            Get In Touch
          </Button>
        </div>
      </section>
    </main>
  )
}
