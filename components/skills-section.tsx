import { 
  Code2, 
  Database, 
  Globe, 
  Layers, 
  Palette, 
  Server, 
  Smartphone, 
  Zap 
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Python", "Go", "REST APIs", "GraphQL"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "Expo", "Flutter", "iOS", "Android"],
  },
  {
    title: "Design",
    icon: Palette,
    skills: ["Figma", "UI/UX", "Prototyping", "Design Systems", "Accessibility"],
  },
  
  
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Section Header */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 lg:sticky lg:top-24">
              <div className="h-px flex-1 bg-border lg:hidden" />
              <h2 className="text-sm font-semibold tracking-widest text-accent uppercase">
                Skills
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((category) => {
                const Icon = category.icon
                return (
                  <Card 
                    key={category.title} 
                    className="group bg-card/50 hover:bg-card transition-colors border-border/50 hover:border-accent/30"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-base font-semibold">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary group-hover:bg-accent/10 transition-colors">
                          <Icon className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                        </div>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-1.5">
                        {category.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className="text-xs text-muted-foreground font-mono"
                          >
                            {skill}
                            {category.skills.indexOf(skill) < category.skills.length - 1 && (
                              <span className="text-border ml-1.5">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
