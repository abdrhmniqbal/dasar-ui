import { Outlet, createFileRoute } from '@tanstack/react-router'

import { SidebarProvider } from '@/components/ui/sidebar'
import { DocsSidebar } from '@/components/blocks/docs-sidebar'

export const Route = createFileRoute('/(app)/docs')({
  loader: async ({ context }) => {
    return {
      pageTree: context.pageTree,
    }
  },
  component: DocsLayout,
})

function DocsLayout() {
  const { pageTree } = Route.useLoaderData()
  return (
    <div className="container-wrapper flex flex-1 flex-col px-2">
      <SidebarProvider className="3xl:fixed:container 3xl:fixed:px-3 min-h-min flex-1 items-start px-0 [--sidebar-width:220px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)]">
        <DocsSidebar tree={pageTree} />
        <div className="h-full w-full">
          <Outlet />
        </div>
      </SidebarProvider>
    </div>
  )
}
