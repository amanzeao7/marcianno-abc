interface Props {
  eyebrow: string
  title: string
  className?: string
  id?: string
}

export default function SectionHeader({ eyebrow, title, className, id }: Props) {
  return (
    <div className={className} id={id}>
      <p className="text-[var(--color-red)] font-body font-semibold uppercase tracking-[3px] text-[0.82rem] mb-2">
        {eyebrow}
      </p>
      <h2 className="font-display text-[clamp(2rem,4vw,3rem)] tracking-[2px] text-[var(--color-text)]">
        {title}
      </h2>
      <div className="w-12 h-[3px] bg-[var(--color-red)] mt-[14px] mb-[40px]" />
    </div>
  )
}
