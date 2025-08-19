"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-foreground mb-4">Contacto</h2>
          <p className="text-lg text-muted-foreground">Conectemos y dialoquemos sobre oportunidades profesionales</p>
        </div>

        <Card className="bg-card shadow-lg">
          <CardHeader>
            <CardTitle className="font-playfair text-xl text-card-foreground text-center">
              Información de contacto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                <Mail className="h-6 w-6 text-accent" />
                <div>
                  <p className="font-medium text-card-foreground">Email</p>
                  <a href="mailto:abigailquillupangui1@gmail.com" className="text-accent hover:text-accent/80 transition-colors">
                    abigailquillupangui1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                <Linkedin className="h-6 w-6 text-accent" />
                <div>
                  <p className="font-medium text-card-foreground">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/abigail-quillupangui-b6b214362/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    linkedin.com/in/abigail-quillupangui-b6b214362/
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
