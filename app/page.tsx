import HeroSection from '@/components/home/HeroSection'
import ClassesSection from '@/components/home/ClassesSection'
import ScheduleSection from '@/components/home/ScheduleSection'
import WhySection from '@/components/home/WhySection'
import PricingSection from '@/components/home/PricingSection'
import ContactSection from '@/components/home/ContactSection'

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <HeroSection />
      <ClassesSection />
      <ScheduleSection />
      <WhySection />
      <PricingSection />
      <ContactSection />
    </main>
  )
}
