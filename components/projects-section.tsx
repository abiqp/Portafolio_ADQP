"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "TechStore - E-commerce de Tecnología",
      description:
        "Tienda online especializada en productos tecnológicos con catálogo completo, carrito de compras y proceso de compra completo.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KSecHyWQTIvflby25yldScdKlmc2GV.png",
      technologies: ["React", "TypeScript", "Bootstrap"],
      liveUrl: "https://tech-store-a7q4.netlify.app/",
    },
    {
      title: "Mini Tech - E-commerce Universal",
      description:
        "Catálogo moderno de productos diversos construido con Angular, consumiendo la API de DummyJSON con proceso de compra completo.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-C8Yv6Zc60Ay4lQPenPflZxasoIG6UZ.png",
      technologies: ["Angular", "TypeScript", "CSS"],
      liveUrl: "https://mini-tech-a7q12.netlify.app/",
    },
    {
      title: "PulseLink - App de Salud Integral",
      description:
        "Aplicación móvil para salud integral donde usuarios pueden ingresar síntomas, recibir recetas naturales y consultar con doctores especializados.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3Rg2JpTma3ZiAhoL4Y1tja5X4TGvnA.png",
      technologies: ["Figma", "UI/UX Design", "Prototipado"],
      liveUrl: "https://www.figma.com/proto/LLa4t5JMXWhvO5sPzwDRG8/App_Movil_Salud_Integral_Seguimiento?node-id=455-154&p=f&t=hYylOmiYAzYJNLea-1&scaling=scale-down&content-scaling=fixed&page-id=455%3A153&starting-point-node-id=455%3A154",
    },
    {
      title: "LOOK&VIDA - Catálogo de Belleza",
      description:
        "Catálogo en línea especializado en productos de belleza femenina con selección personalizada y múltiples marcas reconocidas.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WTLvVO1Zjriye1QuVXJDALKNME7Sz2.png",
      technologies: ["Figma", "UI/UX Design", "Prototipado"],
      liveUrl: "https://www.figma.com/proto/dTxmk5szc7GKUniIYg40S2/Proyecto-Venta-de-productos?node-id=188-3&p=f&t=vbXiuKt5tEM8V1y0-1&scaling=scale-down&content-scaling=fixed&page-id=187%3A2&starting-point-node-id=188%3A3",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-foreground mb-4">Mis Proyectos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades en desarrollo frontend y diseño UI/UX
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:border-accent/50 transition-all duration-300 bg-card">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-card-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => {
                      if (project.liveUrl && project.liveUrl !== "") {
                        window.open(project.liveUrl, "_blank")
                      } else {
                        alert("URL del demo no disponible aún. Puedes agregar el enlace en el código.")
                      }
                    }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
