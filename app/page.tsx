import { AboutSection } from "@/components/sections/about-section";
import { AdvantagesSection } from "@/components/sections/advantages-section";
import { CategoriesSection } from "@/components/sections/categories-section";
import { ContactsSection } from "@/components/sections/contacts-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PopularSection } from "@/components/sections/popular-section";
import { VisitSection } from "@/components/sections/visit-section";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <CategoriesSection />
      <PopularSection />
      <VisitSection />
      <ContactsSection />
    </main>
  );
}
