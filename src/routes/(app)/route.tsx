import { Outlet, createFileRoute } from '@tanstack/react-router'

import { getSource } from '@/lib/source'
import { getStarsCount } from '@/components/blocks/github-link'
import { SiteFooter } from '@/components/blocks/site-footer'
import { SiteHeader } from '@/components/blocks/site-header'

export const Route = createFileRoute('/(app)')({
  beforeLoad: async () => {
    const source = await getSource()
    return {
      pageTree: source.pageTree,
    }
  },
  loader: async ({ context }) => {
    const { stargazers_count } = await getStarsCount()
    return {
      stargazers_count: stargazers_count,
      pageTree: context.pageTree,
    }
  },
  component: AppLayout,
})

function AppLayout() {
  const { stargazers_count, pageTree } = Route.useLoaderData()
  return (
    <div className="bg-background relative z-10 flex min-h-svh flex-col">
      <SiteHeader
        stargazers_count={stargazers_count}
        pageTree={pageTree}
      />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
