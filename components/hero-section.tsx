import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-mono text-sm tracking-wide">
                Hello, my name is
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
                Carl Baribad
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground text-balance">
                Full Stack Developer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I'm a passionate web developer focused on building clean, scalable solutions. 
              Currently a 3rd-year student at St Paul University Philippines, 
              constantly learning and creating projects that solve real-world problems.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="group">
                <Link href="#contact">
                  Get in touch
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                </Link>
              </Button>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" asChild className="h-10 w-10 rounded-full">
                  <Link href="https://github.com/lilciddump-pixel" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="h-10 w-10 rounded-full">
                  <Link href="mailto:cjbaribad@gmail.com">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 bg-accent/20 rounded-full blur-2xl" />
              <Avatar className="relative h-56 w-56 md:h-72 md:w-72 border-4 border-border shadow-2xl">
                <AvatarImage 
                  src="image.jpg" 
                  alt="Carl Baribad"
                />
                <AvatarFallback className="text-4xl font-bold bg-secondary text-secondary-foreground">
                  CB
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
