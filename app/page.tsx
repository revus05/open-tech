import { HeroSection } from "@/components/sections/hero-section"
import { StatsSection } from "@/components/sections/stats-section"
import { ServicesOverview } from "@/components/sections/services-overview"
import { CTABanner } from "@/components/sections/cta-banner"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <CTABanner />
    </>
  )
}
