import { Fight } from '@/lib/types'

interface FightCardProps {
  fight: Fight
}

export default function FightCard({ fight }: FightCardProps) {
  const dateObj = new Date(fight.date)
  const formattedDate = fight.date // already a readable string from data.ts

  return (
    <article className="bg-[var(--color-bg3)] border border-[var(--color-border)] rounded-sm overflow-hidden transition-colors hover:border-[var(--color-red)]">
      {/* Date + Venue header */}
      <div className="bg-[var(--color-red)] px-5 py-3 flex items-center justify-between gap-2">
        <time
          dateTime={dateObj.toISOString().split('T')[0]}
          className="font-body font-semibold text-white text-sm"
        >
          {formattedDate}
        </time>
        <span className="font-body text-white text-xs opacity-80 text-right">
          {fight.venue}
        </span>
      </div>

      {/* Fight matchup */}
      <div className="px-5 py-6 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          {/* Our fighter */}
          <div className="flex-1">
            <p className="font-body text-[0.65rem] uppercase tracking-widest text-[var(--color-red)] mb-0.5">
              Marcianno ABC
            </p>
            <p className="font-display text-xl tracking-wide text-[var(--color-text)] leading-tight">
              {fight.ourFighter}
            </p>
          </div>

          {/* VS */}
          <span
            className="font-display text-2xl text-[var(--color-red)] shrink-0"
            aria-label="versus"
          >
            VS
          </span>

          {/* Opponent */}
          <div className="flex-1 text-right">
            <p className="font-body text-[0.65rem] uppercase tracking-widest text-[var(--color-text3)] mb-0.5">
              {fight.opponentClub}
            </p>
            <p className="font-display text-xl tracking-wide text-[var(--color-text)] leading-tight">
              {fight.opponent}
            </p>
          </div>
        </div>

        {/* Weight class */}
        <div className="border-t border-[var(--color-border)] pt-3 flex items-center justify-between">
          <span className="font-body text-xs uppercase tracking-widest text-[var(--color-text3)]">
            {fight.weightClass}
          </span>

          {/* Buy Tickets — only rendered when ticketUrl is set */}
          {fight.ticketUrl && (
            <a
              href={fight.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Buy tickets for ${fight.ourFighter} vs ${fight.opponent} (opens in new tab)`}
              className="font-display text-sm tracking-[1px] text-white bg-[var(--color-red)] hover:bg-[var(--color-red-hover)] px-4 py-2 rounded-sm transition-colors focus:outline-2 focus:outline-[var(--color-red)] focus:outline-offset-2 min-h-[44px] flex items-center"
            >
              BUY TICKETS
            </a>
          )}
          {!fight.ticketUrl && (
            <span className="font-body text-xs text-[var(--color-text3)] italic">
              Tickets TBC
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
