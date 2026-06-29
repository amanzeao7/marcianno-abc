import Image from 'next/image'
import { Coach } from '@/lib/types'

interface CoachCardProps {
  coach: Coach
}

export default function CoachCard({ coach }: CoachCardProps) {
  const isChampion = coach.name === 'Joshua McDavid'

  return (
    <article className="bg-[var(--color-bg3)] border border-[var(--color-border)] rounded-sm flex flex-col overflow-hidden transition-transform duration-200 hover:-translate-y-1 focus-within:outline-2 focus-within:outline-[var(--color-red)] focus-within:outline-offset-2">
      {/* Avatar */}
      <div className="relative bg-[var(--color-bg2)] flex items-center justify-center h-48">
        {coach.photoUrl ? (
          <Image
            src={coach.photoUrl}
            alt={`Photo of ${coach.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div
            className="w-24 h-24 rounded-full bg-[var(--color-border)] flex items-center justify-center"
            aria-hidden="true"
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="18" r="10" fill="#666" />
              <path d="M4 44c0-11.046 8.954-20 20-20s20 8.954 20 20" fill="#666" />
            </svg>
          </div>
        )}

        {/* Champion badge */}
        {isChampion && (
          <span className="absolute top-3 right-3 bg-[var(--color-red)] text-white font-body font-700 text-xs uppercase tracking-widest px-2 py-1 rounded-sm">
            🥇 2026 Champion
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="font-display text-2xl tracking-wide text-[var(--color-text)] leading-none">
          {coach.name}
        </h3>
        <p className="font-body font-600 text-[var(--color-red)] uppercase text-xs tracking-widest">
          {coach.role}
        </p>
        {coach.credentials && coach.credentials.length > 0 && (
          <ul className="mt-1 flex flex-col gap-1" aria-label="Credentials">
            {coach.credentials.map((cred, i) => (
              <li
                key={i}
                className="font-body text-sm text-[var(--color-text2)] flex items-start gap-2"
              >
                <span className="text-[var(--color-red)] mt-0.5" aria-hidden="true">·</span>
                {cred}
              </li>
            ))}
          </ul>
        )}
        {coach.bio && (
          <p className="font-body text-sm text-[var(--color-text2)] leading-relaxed mt-2">
            {coach.bio}
          </p>
        )}
      </div>
    </article>
  )
}
