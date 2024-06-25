import AboutSection from "@/sections/aboutSection";
import ContactSection from "@/sections/contactSection";
import HeroSection from "@/sections/heroSection";
import PaySection from "@/sections/paySection";
import PlansSection from "@/sections/plansSection";
import ServicesSection from "@/sections/servicesSection";
import ValuesSection from "@/sections/valuesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <ServicesSection /> */}
      <PlansSection />
      <PaySection/>
      <AboutSection />
      <ValuesSection />
      {/* <ContactSection /> */}
    </main>
  );
}
