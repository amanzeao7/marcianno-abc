import { fights } from '@/lib/data'
import SectionHeader from '@/components/shared/SectionHeader'
import FightCard from '@/components/fights/FightCard'

export default function FightsSection() {
  return (
    <section className="py-20 px-[5%]" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          eyebrow="Our Fighters. Our Community. Our Pride."
          title="Upcoming Fights"
        />

        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2px',
          }}
        >
          {fights.map((fight) => (
            <FightCard key={`${fight.ourFighter}-${fight.date}`} fight={fight} />
          ))}
        </div>
      </div>
    </section>
  )
}
