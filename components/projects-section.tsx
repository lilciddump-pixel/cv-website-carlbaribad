import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const featuredProjects = [
  {
    title: "AI Agent Dev Setup",
    description:
      "A comprehensive setup guide and implementation for AI agent development. This project demonstrates best practices for initializing and configuring AI-powered development environments.",
    technologies: ["AI Agents", "Setup Guide", "Development Environment"],
    liveUrl: "",
    githubUrl: "https://github.com/lilciddump-pixel/ai-agent-dev-setup-carl-justine",
  },
  {
    title: "Next.js Boilerplate",
    description:
      "A modern, production-ready Next.js boilerplate template. Includes best practices, modern tooling, and a solid foundation for building scalable web applications with Next.js.",
    technologies: ["Next.js", "Boilerplate", "TypeScript"],
    liveUrl: "",
    githubUrl: "https://github.com/lilciddump-pixel/nextjs-boilerplate",
  },
]


export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Section Header */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 lg:sticky lg:top-24">
              <div className="h-px flex-1 bg-border lg:hidden" />
              <h2 className="text-sm font-semibold tracking-widest text-accent uppercase">
                Projects
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Featured Projects */}
            <div className="space-y-8">
              <h3 className="text-sm font-semibold text-muted-foreground">
                Academic Projects
              </h3>
              
              <div className="space-y-12">
                {featuredProjects.map((project, index) => (
                  <Card 
                    key={index} 
                    className="group bg-card/50 border-border/50 hover:border-accent/30 transition-all"
                  >
                    <CardContent className="p-6">
                      <CardHeader className="p-0 pb-4">
                        <h4 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                          {project.title}
                        </h4>
                      </CardHeader>
                      
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="secondary" 
                              className="font-mono text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                          <Button variant="ghost" size="sm" asChild className="h-8 px-3">
                            <Link 
                              href={project.githubUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Link>
                          </Button>
                          {project.liveUrl && (
                            <Button variant="ghost" size="sm" asChild className="h-8 px-3">
                              <Link 
                                href={project.liveUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Live
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
