'use client'
import { classes } from '@/lib/data'
import SectionHeader from '@/components/shared/SectionHeader'

export default function ClassesSection() {
  return (
    <section
      className="py-20 px-[5%]"
      style={{ background: 'var(--color-bg2)' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader eyebrow="What We Offer" title="Find Your Class" />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '2px' }}
        >
          {classes.map((cls) => (
            <ClassCard key={cls.id} {...cls} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ClassCardProps {
  title: string
  description: string
  tag: string
  schedule: string
}

function ClassCard({ title, description, tag, schedule }: ClassCardProps) {
  return (
    <article
      className="group relative p-8 border-t-2 transition-all duration-300"
      style={{
        background: 'var(--color-bg3)',
        borderTopColor: 'transparent',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderTopColor = 'var(--color-red)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderTopColor = 'transparent'
      }}
    >
      {/* Tag */}
      <span
        className="inline-block font-body font-semibold text-xs uppercase tracking-[2px] mb-3 px-3 py-1 border"
        style={{
          color: 'var(--color-red)',
          borderColor: 'var(--color-red)',
        }}
      >
        {tag}
      </span>
      {/* Title */}
      <h3
        className="font-display text-2xl mb-3"
        style={{
          color: 'var(--color-text)',
          letterSpacing: '1px',
        }}
      >
        {title}
      </h3>
      {/* Description */}
      <p
        className="font-body text-sm leading-relaxed mb-4"
        style={{ color: 'var(--color-text2)' }}
      >
        {description}
      </p>
      {/* Schedule */}
      <p
        className="font-body text-xs uppercase tracking-wider"
        style={{ color: 'var(--color-text3)' }}
      >
        {schedule}
      </p>
    </article>
  )
}
