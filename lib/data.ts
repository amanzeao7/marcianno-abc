import { Class, ScheduleRow, Fight, Coach, PricingTier, VideoEmbed } from './types'

export const classes: Class[] = [
  {
    id: 'juniors',
    title: 'Juniors',
    audience: 'Ages 8–16',
    description: 'Discipline, confidence, and technique for young boxers in a safe, structured environment.',
    tag: 'Ages 8–16',
    icon: '🥊',
    schedule: 'Tuesdays 6:00 PM',
  },
  {
    id: 'seniors',
    title: 'Seniors',
    audience: '16+',
    description: 'Full boxing training — fitness, sparring, technical development. Push your limits.',
    tag: '16+',
    icon: '💪',
    schedule: 'Mon/Thu 6 PM · Tue 7:30 PM',
  },
  {
    id: 'womens',
    title: "Women's Boxing",
    audience: 'All levels',
    description: 'Empowering women through boxing. Self-defence, fitness, and a brilliant community.',
    tag: 'All Levels',
    icon: '👊',
    schedule: 'Wednesdays 6:00 PM',
  },
  {
    id: 'over40s',
    title: 'Over 40s',
    audience: '40+',
    description: "Never too late. Build fitness, learn to box, and join a community that gets it.",
    tag: '40+',
    icon: '🔥',
    schedule: 'Fridays 7:30 PM',
  },
  {
    id: 'beginners',
    title: 'Beginners',
    audience: 'All ages',
    description: "Zero experience needed. We'll take you from the basics to confidently holding your own.",
    tag: 'Drop In',
    icon: '⭐',
    schedule: 'General sessions',
  },
]

export const schedule: ScheduleRow[] = [
  { day: 'Monday',    time: '6:00–7:30pm', className: 'Juniors',          level: 'Ages 8–16'  },
  { day: 'Monday',    time: '7:30–9:00pm', className: "Women's Classes",  level: 'All Levels' },
  { day: 'Tuesday',   time: '6:00–7:30pm', className: 'Juniors',          level: 'Ages 8–16'  },
  { day: 'Tuesday',   time: '7:30–9:00pm', className: 'Seniors',          level: '16+'        },
  { day: 'Wednesday', time: '6:00–7:30pm', className: 'Juniors',          level: 'Ages 8–16'  },
  { day: 'Wednesday', time: '7:30–9:00pm', className: 'Seniors',          level: '16+'        },
  { day: 'Thursday',  time: '6:00–7:30pm', className: 'Juniors',          level: 'Ages 8–16'  },
  { day: 'Thursday',  time: '7:30–9:00pm', className: 'Seniors',          level: '16+'        },
  { day: 'Friday',    time: '6:00–7:30pm', className: 'Seniors',          level: '16+'        },
  { day: 'Friday',    time: '7:30–9:00pm', className: 'Over 40s Classes', level: '40+'        },
]

export const fights: Fight[] = [
  {
    date: '21 June 2026',
    venue: 'Bexley Leisure Centre',
    ourFighter: 'Marcus Webb',
    opponent: 'Deon Clarke',
    opponentClub: 'Woolwich ABC',
    weightClass: '65kg Amateur',
    ticketUrl: null,
    videoUrl: null,
  },
  {
    date: '21 June 2026',
    venue: 'Bexley Leisure Centre',
    ourFighter: 'Jade Thompson',
    opponent: 'Kezia Amos',
    opponentClub: 'Fitzroy Lodge',
    weightClass: "Women's 60kg",
    ticketUrl: null,
    videoUrl: null,
  },
  {
    date: '12 July 2026',
    venue: 'Charlton Athletic FC',
    ourFighter: 'Tyler Osei',
    opponent: 'Remi Lacoste',
    opponentClub: 'Repton ABC',
    weightClass: 'Junior 52kg',
    ticketUrl: null,
    videoUrl: null,
  },
]

export const coaches: Coach[] = [
  {
    name: 'Matt Brown',
    role: 'Head Boxing Coach',
    bio: "Matt is a Super-Featherweight Southern Area Champion with an outstanding amateur record of 144 bouts and 13 professional fights, including two British Title challenges. He brings elite-level experience to every session and has developed fighters from complete beginners to competitive amateurs and beyond. His coaching philosophy is built on solid fundamentals, smart tactics, and getting the best out of every individual.",
    credentials: [
      'Super-Featherweight Southern Area Champion',
      '2× British Title contender',
      '13 pro fights · 144 amateur bouts',
    ],
    photoUrl: null,
  },
  {
    name: 'Javal Stewart',
    role: 'Senior Coach & Community Mentor',
    bio: "Javal is the heart of the community side of Marcianno ABC. With ABA Level 1 and Level 2 qualifications and over five years of coaching experience, he has a particular talent for working with young people and those new to the sport. DBS-enhanced and trained as a youth mentor, Javal ensures the gym is a safe, welcoming space for everyone who walks through the door.",
    credentials: [
      'ABA Level 1 & 2 qualified',
      'DBS-enhanced',
      '5+ years coaching',
      'Youth mentor',
    ],
    photoUrl: null,
  },
  {
    name: 'Dean Marriot',
    role: 'Fitness Coach',
    bio: "Dean brings a high-performance football coaching background to Marcianno ABC, having spent years with Welling United where he contributed to three promotions and two titles. His strength and conditioning sessions are tough, purposeful, and always built around the demands of boxing. DBS checked and first aid trained.",
    credentials: [
      'Former football coach — Welling United',
      '3 promotions, 2 titles with Welling United',
      'DBS checked',
      'First aid trained',
    ],
    photoUrl: null,
  },
  {
    name: 'Keith Dorrington',
    role: 'Fitness Coach',
    bio: "Keith is a qualified personal trainer with an endurance sport background that speaks for itself — two marathons, five half-marathons, multiple Olympic and Sprint triathlons, and an Ironman finish. He knows what it takes to build fitness from the ground up and how to push people further than they thought possible, all within a structured, supportive environment.",
    credentials: [
      'Qualified Personal Trainer',
      '2 marathons · 5 half-marathons',
      'Olympic/Sprint triathlons · Ironman finisher',
    ],
    photoUrl: null,
  },
  {
    name: 'Tommy Ould',
    role: 'Boxing Coach',
    bio: "Tommy competed to a high level as an amateur, reaching the SE London Divisional Novice Final in 2009 across 13 bouts. Since gaining his Level 1 coaching qualification, he has focused his energy on the juniors programme, which he has run since 2018. His patience, technical knowledge, and understanding of young athletes make him a vital part of the coaching team.",
    credentials: [
      '13 amateur bouts',
      'SE London Divisional Novice Final 2009',
      'ABA Level 1 qualified',
      'Juniors coach since 2018',
    ],
    photoUrl: null,
  },
  {
    name: 'Charlie Blackmoore',
    role: 'Boxing Coach',
    bio: "Charlie holds an ABA Level 2 coaching qualification and brings a diverse martial arts background to the gym — two years of Karate and three years of Muay Thai have given him a broader perspective on striking, footwork, and distance management that he weaves into his boxing coaching. His sessions challenge technical thinking as much as physical output.",
    credentials: [
      'ABA Level 2 qualified',
      '2 years Karate background',
      '3 years Muay Thai background',
    ],
    photoUrl: null,
  },
  {
    name: 'Joshua McDavid',
    role: 'Boxing Coach',
    bio: "Joshua is the club's most decorated active competitor. He has worked through academy systems at Millwall, Crystal Palace, and Fulham, developing his athletic foundation at the highest youth level before turning to boxing. In 2026 he became the London Amateur Boxing Champion — a title that reflects his dedication, skill, and the standard he sets daily in training.",
    credentials: [
      'ABA Level 2 qualified',
      'Millwall · Crystal Palace · Fulham academies',
      '2026 London Amateur Boxing Champion',
    ],
    photoUrl: null,
  },
]

export const pricing: PricingTier[] = [
  {
    label: 'Drop In',
    amount: '£5',
    per: 'Per session',
    description: 'Rock up to any class. Flexible, affordable, and always welcoming.',
    featured: false,
  },
  {
    label: 'Monthly',
    amount: '£60',
    per: 'Per month',
    description: 'Unlimited training. Best value for regular members.',
    featured: true,
  },
]

// Video embeds — set embedUrl to a YouTube embed URL when footage is confirmed.
// YouTube embed format: https://www.youtube.com/embed/VIDEO_ID
// These render on both the Fights page and the homepage.
export const videoEmbeds: VideoEmbed[] = [
  {
    id: 'highlight-reel',
    title: 'Club Highlight Reel',
    embedUrl: null, // TODO: replace with YouTube embed URL when confirmed
    caption: 'Watch our fighters in action',
  },
  {
    id: 'fight-night',
    title: 'Fight Night — June 2026',
    embedUrl: null, // TODO: replace with fight night footage URL
    caption: 'Bexley Leisure Centre · 21 June 2026',
  },
]

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/images/junior-champs.jpeg',
    alt: 'Junior champions with their belts at Marcianno ABC',
    caption: 'Junior Champions',
  },
  {
    src: '/images/2026-06-18 20.52.09.jpg.jpeg',
    alt: 'Junior boxing team at Marcianno ABC',
    caption: 'Junior Team',
  },
  {
    src: '/images/2026-06-18 20.52.13.jpg.jpeg',
    alt: 'Senior boxing team at Marcianno ABC',
    caption: 'Senior Team',
  },
  {
    src: '/images/marco1.jpg.jpeg',
    alt: 'Marcianno ABC boxing gym',
    caption: 'The Gym',
  },
]
