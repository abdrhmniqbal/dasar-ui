import { Outlet, createFileRoute } from '@tanstack/react-router'

import { getStarsCount } from '@/components/blocks/github-link'
import { SiteFooter } from '@/components/blocks/site-footer'
import { SiteHeader } from '@/components/blocks/site-header'

export const Route = createFileRoute('/(app)')({
  component: AppLayout,
  loader: async () => {
    const { stargazers_count } = await getStarsCount()
    return {
      stargazers_count: stargazers_count,
    }
  },
})

function AppLayout() {
  const { stargazers_count } = Route.useLoaderData()
  return (
    <div className="bg-background relative z-10 flex min-h-svh flex-col">
      <SiteHeader stargazers_count={stargazers_count} />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
