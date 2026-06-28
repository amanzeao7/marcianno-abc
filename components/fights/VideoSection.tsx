import SectionHeader from '@/components/shared/SectionHeader'
import { VideoEmbed } from '@/lib/types'

interface Props {
  embeds: VideoEmbed[]
}

export default function VideoSection({ embeds }: Props) {
  return (
    <section className="py-20 bg-[var(--color-bg2)] border-t border-[var(--color-border)]">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <SectionHeader eyebrow="WATCH US FIGHT" title="Fight Footage" id="videos" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {embeds.map((embed) => (
            <div key={embed.id} className="flex flex-col gap-3">
              {embed.embedUrl ? (
                <div className="relative w-full aspect-video rounded overflow-hidden border border-[var(--color-border)]">
                  <iframe
                    src={embed.embedUrl}
                    title={embed.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              ) : (
                <div
                  className="relative w-full aspect-video rounded border border-dashed border-[var(--color-border)] bg-[var(--color-bg3)] flex flex-col items-center justify-center gap-3"
                  role="img"
                  aria-label={`${embed.title} — video coming soon`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-[var(--color-text3)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="font-display text-lg text-[var(--color-text3)] tracking-wide">
                    {embed.title}
                  </p>
                  <p className="font-body text-xs text-[var(--color-text3)]">
                    Video coming soon
                  </p>
                </div>
              )}
              {embed.caption && (
                <p className="font-body text-sm text-[var(--color-text3)]">{embed.caption}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
