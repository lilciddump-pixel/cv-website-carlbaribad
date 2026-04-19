import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:alex@example.com",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer id="contact" className="py-20 md:py-32 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Section Header */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 lg:sticky lg:top-24">
              <div className="h-px flex-1 bg-border lg:hidden" />
              <h2 className="text-sm font-semibold tracking-widest text-accent uppercase">
                Contact
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* CTA */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Let&apos;s work together
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                I&apos;m currently open to new opportunities and always interested 
                in hearing about exciting projects. Whether you have a question 
                or just want to say hi, feel free to reach out!
              </p>
              
              <Button asChild size="lg" className="group">
                <Link href="cjbaribad@gmail.com">
                  Say Hello
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground">
                Find me online
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Button
                      key={link.name}
                      variant="secondary"
                      asChild
                      className="h-12 px-5 gap-2"
                    >
                      <Link 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Icon className="h-4 w-4" />
                        {link.name}
                      </Link>
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Designed & Built by Carl Baribad
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
