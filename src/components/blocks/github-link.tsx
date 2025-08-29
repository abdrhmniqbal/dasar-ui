import * as React from 'react'
import { Link } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { Button } from '@/registry/minimal/ui/button/button'

import { siteConfig } from '@/lib/config'
import { Skeleton } from '@/components/ui/skeleton'
import { Icons } from '@/components/icons'

interface GitHubLinkProps {
  stargazers_count: number
}

export function GitHubLink({ stargazers_count }: GitHubLinkProps) {
  return (
    <Button
      asChild
      size="sm"
      appearance="ghost"
      className="h-8 shadow-none"
    >
      <Link
        to={siteConfig.links.github}
        target="_blank"
        rel="noreferrer"
      >
        <Icons.gitHub />
        <React.Suspense fallback={<Skeleton className="h-4 w-8" />}>
          <StarsCount stargazers_count={stargazers_count} />
        </React.Suspense>
      </Link>
    </Button>
  )
}

export const getStarsCount = createServerFn({
  method: 'GET',
}).handler(async () => {
  const data = await fetch(
    'https://api.github.com/repos/abdrhmniqbal/dasar-ui',
    {
      headers: {
        'Cache-Control': 'public, s-maxage=1',
        'CDN-Cache-Control': 'public, s-maxage=60',
        'Vercel-CDN-Cache-Control': 'public, s-maxage=86400',
      },
    }
  )
  const json = await data.json()
  return {
    stargazers_count: json.stargazers_count as unknown as number,
  }
})

interface StarsCountProps {
  stargazers_count: number
}

export function StarsCount({ stargazers_count }: StarsCountProps) {
  return (
    <span className="text-muted-foreground w-8 text-xs tabular-nums">
      {stargazers_count
        ? stargazers_count >= 1000
          ? `${(stargazers_count / 1000).toFixed(1)}k`
          : stargazers_count.toLocaleString()
        : '0'}
    </span>
  )
}
