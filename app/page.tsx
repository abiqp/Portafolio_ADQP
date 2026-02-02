import { WelcomeSection } from "@/components/welcome-section"
import { AboutSection } from "@/components/about-section"
import { KnowledgeSection } from "@/components/knowledge-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <WelcomeSection />
      <AboutSection />
      <KnowledgeSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
