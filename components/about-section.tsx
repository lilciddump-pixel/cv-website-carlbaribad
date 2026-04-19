
export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Section Header */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 lg:sticky lg:top-24">
              <div className="h-px flex-1 bg-border lg:hidden" />
              <h2 className="text-sm font-semibold tracking-widest text-accent uppercase">
                About
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I&apos;m a 3rd-year student at St Paul University Philippines with a passion 
                for web development and full-stack engineering. I enjoy building clean, 
                scalable solutions and am committed to continuous learning through 
                academic projects and personal coding initiatives.
              </p>
              
              <p>
                My focus is on mastering modern web technologies including React, Next.js, 
                and full-stack development. I&apos;ve worked on various{" "}
                <span className="text-foreground font-medium">academic projects</span> that 
                demonstrate my understanding of web development principles and best practices. 
                I&apos;m particularly interested in building user-friendly applications that 
                solve real-world problems.
              </p>

              <p>
                Through my studies and personal projects, I&apos;m developing expertise in 
                both frontend and backend technologies. I&apos;m eager to contribute to 
                meaningful projects and am always looking for opportunities to apply and 
                expand my knowledge in web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
