import { Link, createFileRoute } from '@tanstack/react-router'
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
} from '@tabler/icons-react'
import { findNeighbour } from 'fumadocs-core/server'

import { seo } from '@/lib/seo'
import { getPageBySlug, getSource, mdxLoader, tocLoader } from '@/lib/source'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DocsCopyPage } from '@/components/blocks/docs-copy-page'

export const Route = createFileRoute('/(app)/docs/$')({
  loader: async ({ params }) => {
    const source = await getSource()
    const data = await getPageBySlug({ data: params._splat?.split('/') ?? [] })
    const neighbours = findNeighbour(source.pageTree, data.data.url)
    await tocLoader.preload(data.path)
    await mdxLoader.preload(data.path)
    return {
      ...data,
      neighbours,
    }
  },
  head: async ({ loaderData }) => {
    return {
      meta: [
        ...seo({
          title: loaderData?.data.title ?? 'Docs',
          description:
            loaderData?.data.description ?? 'Documentation for Dasar UI',
        }),
      ],
    }
  },
  component: DocPage,
})

function DocPage() {
  const { path, data, neighbours } = Route.useLoaderData()
  const TOC = tocLoader.getComponent(path)
  const MDX = mdxLoader.getComponent(path)

  return (
    <div
      data-slot="docs"
      className="flex items-stretch text-[1.05rem] sm:text-[15px] xl:w-full"
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="h-(--top-spacing) shrink-0" />
        <div className="mx-auto flex w-full max-w-2xl min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
                  {data.title}
                </h1>
                <div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
                  <DocsCopyPage page={JSON.stringify(data.structuredData)} />
                  {neighbours.previous && (
                    <Button
                      variant="secondary"
                      size="icon"
                      className="extend-touch-target ml-auto size-8 shadow-none md:size-7"
                      asChild
                    >
                      <Link to={neighbours.previous.url}>
                        <IconArrowLeft />
                        <span className="sr-only">Previous</span>
                      </Link>
                    </Button>
                  )}
                  {neighbours.next && (
                    <Button
                      variant="secondary"
                      size="icon"
                      className="extend-touch-target size-8 shadow-none md:size-7"
                      asChild
                    >
                      <Link to={neighbours.next.url}>
                        <span className="sr-only">Next</span>
                        <IconArrowRight />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              {data.description && (
                <p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
                  {data.description}
                </p>
              )}
            </div>
            {data.links ? (
              <div className="flex items-center space-x-2 pt-4">
                {data.links?.doc && (
                  <Badge
                    asChild
                    variant="secondary"
                  >
                    <Link
                      to={data.links.doc}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Docs <IconArrowUpRight />
                    </Link>
                  </Badge>
                )}
                {data.links?.api && (
                  <Badge
                    asChild
                    variant="secondary"
                  >
                    <Link
                      to={data.links.api}
                      target="_blank"
                      rel="noreferrer"
                    >
                      API Reference <IconArrowUpRight />
                    </Link>
                  </Badge>
                )}
              </div>
            ) : null}
          </div>
          <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
            <MDX />
          </div>
        </div>
        <div className="mx-auto hidden h-16 w-full max-w-2xl items-center gap-2 px-4 sm:flex md:px-0">
          {neighbours.previous && (
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="shadow-none"
            >
              <Link to={neighbours.previous.url}>
                <IconArrowLeft /> {neighbours.previous.name}
              </Link>
            </Button>
          )}
          {neighbours.next && (
            <Button
              variant="secondary"
              size="sm"
              className="ml-auto shadow-none"
              asChild
            >
              <Link to={neighbours.next.url}>
                {neighbours.next.name} <IconArrowRight />
              </Link>
            </Button>
          )}
        </div>
      </div>
      <div className="sticky top-[calc(var(--header-height)+1px)] z-30 ml-auto hidden h-[calc(100svh-var(--header-height)-var(--footer-height))] w-72 flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
        <div className="h-(--top-spacing) shrink-0" />
        <TOC />
      </div>
    </div>
  )
}
