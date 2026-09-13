import Header from "./header"
import Hero from "./hero"
import StatsBar from "./stats-bar"
import AboutSection from "./about-section"
import HubsSection from "./hubs-section"
import SectorsSection from "./sectors-section"
import HowWeWorkSection from "./how-we-work-section"
import BaselineSection from "./baseline-section"
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
      <AboutSection />
      <HubsSection />
      <SectorsSection />
      <HowWeWorkSection />
      <BaselineSection />
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
