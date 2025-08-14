// import blocks from "@/registry/__blocks__.json"

import { Link } from '@tanstack/react-router'

import { siteConfig } from '@/lib/config'
import { type SourceType } from '@/lib/source'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CommandMenu } from '@/components/blocks/command-menu'
import { GitHubLink } from '@/components/blocks/github-link'
import { MainNav } from '@/components/blocks/main-nav'
import { MobileNav } from '@/components/blocks/mobile-nav'
import { ModeSwitcher } from '@/components/blocks/mode-switcher'
import { SiteConfig } from '@/components/blocks/site-config'
import { Icons } from '@/components/icons'

interface SiteHeaderProps {
  stargazers_count: number
  pageTree: SourceType['pageTree']
}

export function SiteHeader({ stargazers_count, pageTree }: SiteHeaderProps) {
  return (
    <header className="bg-background sticky top-0 z-50 w-full">
      <div className="container-wrapper 3xl:fixed:px-0 px-6">
        <div className="3xl:fixed:container flex h-(--header-height) items-center gap-2 **:data-[slot=separator]:!h-4">
          <MobileNav
            tree={pageTree}
            items={siteConfig.navItems}
            className="flex lg:hidden"
          />
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="hidden size-8 lg:flex"
          >
            <Link to="/">
              <Icons.logo className="size-5" />
              <span className="sr-only">{siteConfig.name}</span>
            </Link>
          </Button>
          <MainNav
            items={siteConfig.navItems}
            className="hidden lg:flex"
          />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
              <CommandMenu
                tree={pageTree}
                navItems={siteConfig.navItems}
              />
            </div>
            <Separator
              orientation="vertical"
              className="ml-2 hidden lg:block"
            />
            <GitHubLink stargazers_count={stargazers_count} />
            <Separator
              orientation="vertical"
              className="3xl:flex hidden"
            />
            <SiteConfig className="3xl:flex hidden" />
            <Separator orientation="vertical" />
            <ModeSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}
