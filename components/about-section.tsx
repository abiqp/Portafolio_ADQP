import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-foreground mb-4">Acerca de mí</h2>
          <p className="text-lg text-muted-foreground">Conoce algo sobre mi</p>
        </div>

        <Card className="bg-card shadow-lg max-w-3xl mx-auto">
          <CardContent className="pt-6">
            <p className="leading-relaxed text-base font-sans" style={{ color: "#2C3E50" }}>
              Ingeniera en Software con sólida formación en el diseño, desarrollo e implementación de aplicaciones web y
              móviles, experiencia en diseño de interfaces de usuario UI y en desarrollo Front End. Con aprendizaje en
              la gestión de bases de datos y con conocimiento en lenguajes de programación y frameworks. Capacidad para
              identificar errores en sistema en producción, mejorar procesos y comprometida con la entrega de
              soluciones, orientada al detalle, con habilidad en colaboración, trabajo en equipo y aportar conocimientos
              en las áreas requeridas como seguir creciendo y aprendiendo profesionalmente.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
