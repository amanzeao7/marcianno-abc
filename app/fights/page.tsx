import { fights, videoEmbeds } from '@/lib/data'
import FightCard from '@/components/fights/FightCard'
import SectionHeader from '@/components/shared/SectionHeader'
import VideoSection from '@/components/fights/VideoSection'

export const metadata = {
  title: 'Upcoming Fights | Marcianno ABC',
  description:
    'See upcoming bouts from Marcianno Bexley & District ABC fighters. Buy tickets and support our team.',
}

export default function FightsPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Page Hero */}
      <section
        className="relative py-24 px-[5%] bg-[var(--color-bg2)] border-b border-[var(--color-border)]"
        aria-label="Fights page hero"
        style={{
          background:
            'linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg2) 100%)',
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <p className="font-body font-semibold text-[var(--color-red)] uppercase tracking-[3px] text-sm mb-3">
            IN THE RING
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] tracking-[2px] text-[var(--color-text)] leading-none">
            Upcoming Fights
          </h1>
          <div className="w-12 h-[3px] bg-[var(--color-red)] mt-4 mb-6" aria-hidden="true" />
          <p className="font-body text-[var(--color-text2)] text-lg max-w-xl">
            Come and support our fighters. Every bout, every round, every victory —
            built in the gym, proven in the ring.
          </p>
        </div>
      </section>

      {/* Fight Cards */}
      <section
        className="py-20 px-[5%] bg-[var(--color-bg)]"
        aria-labelledby="upcoming-fights-heading"
      >
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            eyebrow="BOUTS"
            title="On The Card"
            id="upcoming-fights-heading"
          />
          {fights.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {fights.map((fight, i) => (
                <FightCard key={i} fight={fight} />
              ))}
            </div>
          ) : (
            <p className="mt-10 font-body text-[var(--color-text2)] text-lg">
              No upcoming fights scheduled. Check back soon or follow us on Instagram for the latest.
            </p>
          )}
        </div>
      </section>

      {/* Video Section — placeholders until footage confirmed */}
      <VideoSection embeds={videoEmbeds} />

      {/* Results placeholder */}
      <section
        className="py-20 px-[5%] bg-[var(--color-bg2)]"
        aria-labelledby="results-heading"
      >
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            eyebrow="FIGHT RECORD"
            title="Results"
            id="results-heading"
          />
          <div className="mt-10 border border-[var(--color-border)] rounded-sm p-10 text-center">
            <p className="font-display text-3xl text-[var(--color-text3)] tracking-wide mb-4">
              Results coming soon...
            </p>
            <p className="font-body text-[var(--color-text2)]">
              For the latest results and fight updates, follow us on Instagram{' '}
              <a
                href="https://instagram.com/marciannoabc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-red)] underline underline-offset-4 hover:text-white transition-colors focus:outline-2 focus:outline-[var(--color-red)] focus:outline-offset-2"
                aria-label="Marcianno ABC Instagram profile (opens in new tab)"
              >
                @marciannoabc
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}