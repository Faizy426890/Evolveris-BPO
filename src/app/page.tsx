import Header from "./header"
import Hero from "./hero"
import StatsBar from "./stats-bar"
import SolutionsSection from "./solutions-section"
import PeopleTechSection from "./people-tech-section"
import IndustriesSection from "./industries-section"
import PerformanceSection from "./performance-section"
import CollectionRateSection from "./collection-rate-section"
import HowItWorksSection from "./how-it-works-section"
import TrustSection from "./trust-section"
import LanguagesSection from "./languages-section"
import ContactSection from "./contact-section"
import { SiteFooter } from "./site-footer"

export default function Page() {
  return (
    <main style={{ backgroundColor: "#f5f2ec" }}>
      <Header />
      <Hero />
      <StatsBar />
      <SolutionsSection />
      <PeopleTechSection />
      <IndustriesSection />
      <PerformanceSection />
      <CollectionRateSection />
      <HowItWorksSection />
      <TrustSection />
      <LanguagesSection />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
