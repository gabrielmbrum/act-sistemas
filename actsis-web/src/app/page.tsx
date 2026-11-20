import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      {/* Seção Hero Fullscreen com Parallax */}
      <HeroSection />

      {/* Seção Sobre Nós / Expertise com Métricas Animadas */}
      <AboutSection />

      {/* Próximas seções modulares:
          - ServiceGrid.tsx (Consultoria Protheus, APIs, Power BI, Fábrica)
          - ErpIntegrationFlow.tsx (Diagrama interativo Protheus ↔ APIs)
          - LeadForm.tsx / Contato
          - Footer.tsx
      */}
    </>
  );
}
