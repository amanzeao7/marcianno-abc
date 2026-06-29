import Link from 'next/link'

interface ButtonProps {
  variant?: 'primary' | 'outline'
  href?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
  'aria-busy'?: boolean
}

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  disabled = false,
  'aria-busy': ariaBusy,
}: ButtonProps) {
  const base =
    'inline-block font-display text-[1.1rem] tracking-[1.5px] px-8 py-[14px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D0231A] focus:ring-offset-2 cursor-pointer select-none'

  const variants = {
    primary: `
      bg-[#D0231A] text-[#F5F5F5] border-2 border-[#D0231A]
      hover:bg-[#B51E16] hover:border-[#B51E16]
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
    outline: `
      bg-transparent text-[#F5F5F5] border-2 border-[#F5F5F5]
      hover:border-[#D0231A] hover:text-[#D0231A]
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
  }

  const classes = `${base} ${variants[variant]} ${className}`.trim()

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-busy={ariaBusy}
      className={classes}
    >
      {children}
    </button>
  )
}
