import { GraduationCap, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "St Paul University Philippines",
    period: "2022 — Present",
    description:
      "Currently in 3rd year, focusing on software development, database management, and IT systems. Actively learning full-stack web development and modern technologies through coursework and personal projects.",
    achievements: ["Dean's List", "Active in Tech Club", "Project Showcase Participant"],
  },
]

const certifications = [
  "Google Cloud Associate Cloud Engineer",
  "Meta Front-End Developer Professional Certificate",
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Section Header */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 lg:sticky lg:top-24">
              <div className="h-px flex-1 bg-border lg:hidden" />
              <h2 className="text-sm font-semibold tracking-widest text-accent uppercase">
                Education
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Education Cards */}
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="bg-card/50 border-border/50 hover:border-accent/30 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary">
                        <GraduationCap className="h-6 w-6 text-accent" />
                      </div>
                      
                      <div className="space-y-3 flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-foreground">
                              {edu.degree}
                            </h3>
                            <p className="text-muted-foreground">
                              {edu.school}
                            </p>
                          </div>
                          <span className="text-sm font-mono text-muted-foreground">
                            {edu.period}
                          </span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement) => (
                            <span 
                              key={achievement}
                              className="inline-flex items-center gap-1.5 text-xs text-accent font-medium"
                            >
                              <Award className="h-3 w-3" />
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">
                Certifications
              </h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <span 
                    key={cert}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full text-sm text-muted-foreground font-medium"
                  >
                    <Award className="h-4 w-4 text-accent" />
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
