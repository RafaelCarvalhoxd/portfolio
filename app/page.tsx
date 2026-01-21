import { HeroSection, AboutSection, ExperienceSection, SkillsSection, ContactSection } from "@/components/sections";
import { Navigation, MobileNavigation } from "@/components/features";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0 opacity-30" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.3 0.02 220) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="fixed top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow z-0" aria-hidden="true" />
      <div className="fixed bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-glow z-0" style={{ animationDelay: '1.5s' }} aria-hidden="true" />

      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-8">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[45%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <HeroSection />
              <Navigation />
            </div>
          </header>

          <main className="lg:w-[55%] lg:py-24 pb-24 lg:pb-0">
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ContactSection />
          </main>
        </div>
      </div>

      <MobileNavigation />

      <div className="pointer-events-none fixed inset-x-0 top-0 h-24 bg-gradient-to-b from-background via-background/80 to-transparent z-40" aria-hidden="true" />
    </div>
  );
}
