interface Props {
  label: string
  aspectClass?: string
}

export default function ImagePlaceholder({ label, aspectClass = 'aspect-[4/3]' }: Props) {
  return (
    <div
      className={`${aspectClass} w-full rounded border border-dashed border-[var(--color-border)] bg-[var(--color-bg3)] flex flex-col items-center justify-center gap-2`}
      role="img"
      aria-label={label}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-[var(--color-text3)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <p className="font-body text-sm text-[var(--color-text3)] text-center px-4">{label}</p>
    </div>
  )
}
