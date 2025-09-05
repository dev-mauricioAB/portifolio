import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import { I18nProviderClient } from "@/locales/client";
import { Locale } from "@/locales/models";
import SoftSkillsSection from "./components/SoftSkillsSection";

export default async function FrontendPortfolio({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <I18nProviderClient locale={locale}>
      <main className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <SoftSkillsSection />
        <ContactSection />
      </main>
    </I18nProviderClient>
  );
}
