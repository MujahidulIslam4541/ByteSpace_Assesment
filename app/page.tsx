import CreatorBenefits from "@/components/landing/CreatorBenefits"
import CtaSection from "@/components/landing/CtaSection"
import HeroSection from "@/components/landing/HeroSection"
import LearningPaths from "@/components/landing/LearningPaths"
import PlatformStats from "@/components/landing/PlatformStats"
import TestimonialsSection from "@/components/landing/TestimonialsSection"

export default function Page() {
  return (
    <div>
      <HeroSection />
      <LearningPaths />
      <PlatformStats/>
      <CreatorBenefits/>
      <CtaSection />
      <TestimonialsSection />
    </div>
  )
}
