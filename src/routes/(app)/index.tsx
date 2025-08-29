import { Link, createFileRoute } from '@tanstack/react-router'
import { Button } from '@/registry/minimal/ui/button/button'
import Balancer from 'react-wrap-balancer'

import { siteConfig } from '@/lib/config'
import { Icons } from '@/components/icons'

export const Route = createFileRoute('/(app)/')({
  component: App,
})

function App() {
  return (
    <main
      id="main-content"
      className="max-w-2xl mx-auto flex-1 flex flex-col"
    >
      <section className="flex-1 flex flex-col items-center justify-center gap-4 ">
        <Button
          appearance="outline"
          size="sm"
          className="flex gap-2"
          asChild
        >
          <a
            href="https://discord.gg/"
            target="_blank"
            className="text-sm"
          >
            Discord Community
          </a>
        </Button>
        <h1 className="text-center animate-fade-up text-4xl font-extrabold tracking-tight  sm:text-5xl md:text-6xl lg:text-7xl">
          <Balancer>
            <span className="text-muted-foreground">Extend</span> your component
            library
          </Balancer>
        </h1>
        <span className="text-center animate-fade-up text-base text-muted-foreground sm:text-xl">
          <Balancer>{siteConfig.description}</Balancer>
        </span>
        <div className="animate-fade-up flex items-center gap-4">
          <Button
            appearance="ghost"
            asChild
          >
            <Link to="/">Get Started</Link>
          </Button>
          <Button
            className="gap-2"
            appearance="outline"
            asChild
          >
            <a
              target="_blank"
              href={siteConfig.links.github}
            >
              <span>GitHub</span>
              <Icons.gitHub
                data-slot="icon"
                className="fill-current"
              />
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}
