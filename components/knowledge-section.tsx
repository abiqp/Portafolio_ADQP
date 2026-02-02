export function KnowledgeSection() {
  const technologies = [
    { name: "Node.js", icon: "🟢" },
    { name: "HTML & CSS", icon: "🌐" },
    { name: "Python", icon: "🐍" },
    { name: "WooCommerce", icon: "🛒" },
    { name: "MySQL", icon: "🗄️" },
    { name: "Git", icon: "📝" },
    { name: "GitHub", icon: "🐙" },
    { name: "Figma", icon: "🎨" },
    { name: "Power BI", icon: "📊" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "WordPress", icon: "📰" },
    { name: "JavaScript", icon: "⚡" },
    { name: "ReactJs", icon: "⚛️" },
  ]

  return (
    <section id="conocimientos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Conocimientos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear experiencias digitales excepcionales
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-4 sm:p-6 border border-border hover:shadow-lg hover:scale-105 transition-all duration-300 text-center group"
            >
              <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {tech.icon}
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-foreground leading-tight">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
