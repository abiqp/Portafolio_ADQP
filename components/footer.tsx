"use client"

import { Heart, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-background border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-foreground">
          <span>Hecho con</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
          <span>por ADQP</span>
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={scrollToTop}
            className="w-8 h-8 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors cursor-pointer"
            aria-label="Volver al inicio"
          >
            <ArrowUp className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className="text-foreground text-sm">© 2025 Todos los derechos reservados</div>
      </div>
    </footer>
  )
}
