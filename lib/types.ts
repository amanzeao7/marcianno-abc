export interface Class {
  id: string
  title: string
  audience: string
  description: string
  tag: string
  icon: string
  schedule: string
}

export interface ScheduleRow {
  day: string
  time: string
  className: string
  level: string
}

export interface Fight {
  date: string
  venue: string
  ourFighter: string
  opponent: string
  opponentClub: string
  weightClass: string
  result?: string
  ticketUrl: string | null
  videoUrl?: string | null // YouTube/Instagram embed URL — set when footage confirmed
}

export interface Coach {
  name: string
  role: string
  bio: string
  credentials: string[]
  photoUrl?: string | null // Sanity image URL — flows in via CMS
}

export interface PricingTier {
  label: string
  amount: string
  per: string
  description: string
  featured: boolean
}

export interface VideoEmbed {
  id: string
  title: string
  embedUrl: string | null // null = show placeholder; swap in real URL when available
  caption?: string
}
