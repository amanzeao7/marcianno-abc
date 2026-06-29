import HeroSection from '@/components/home/HeroSection'
import ClassesSection from '@/components/home/ClassesSection'
import ScheduleSection from '@/components/home/ScheduleSection'
import WhySection from '@/components/home/WhySection'
import FightsSection from '@/components/home/FightsSection'
import PricingSection from '@/components/home/PricingSection'
import ContactSection from '@/components/home/ContactSection'
import VideoSection from '@/components/fights/VideoSection'
import { videoEmbeds } from '@/lib/data'

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <HeroSection />
      <ClassesSection />
      <ScheduleSection />
      <WhySection />
      <FightsSection />
      <VideoSection embeds={videoEmbeds} />
      <PricingSection />
      <ContactSection />
    </main>
  )
}
