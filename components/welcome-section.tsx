"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Code, Palette, Download } from "lucide-react"

export function WelcomeSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv.pdf"
    link.download = "CV-Abigail-Quillupangui.pdf"
    link.click()
  }

  return (
    <section id="welcome" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Transformo <span className="text-accent">ideas</span> en
            <br />
            experiencias <span className="text-primary">digitales únicas</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Diseño interfaces y desarrollo código que funciona. Cada pixel cuenta, cada interacción
            importa. Especializado en crear productos digitales que los usuarios quieran usar.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Code className="h-5 w-5 text-primary" />
            <span>Frontend Development</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-border"></div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Palette className="h-5 w-5 text-accent" />
            <span>UI/UX Design</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={scrollToProjects}
          >
            Ver mis proyectos
          </Button>
          <Button variant="outline" size="lg" onClick={downloadCV} className="flex items-center gap-2 bg-transparent">
            <Download className="h-4 w-4" />
            Descargar CV
          </Button>
        </div>

        <div className="mt-8 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  )
}
