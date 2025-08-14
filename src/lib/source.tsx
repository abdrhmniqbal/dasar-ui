import { notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { loader } from 'fumadocs-core/source'
import { createClientLoader } from 'fumadocs-mdx/runtime/vite'
import { create, docs } from 'source-generated'

import { DocsTableOfContents } from '@/components/blocks/docs-toc'
import { mdxComponents } from '@/components/mdx-components'

export const source = loader({
  baseUrl: '/docs',
  source: await create.sourceAsync(docs.doc, docs.meta),
})

export const getPageBySlug = createServerFn({
  method: 'GET',
})
  .validator((slugs: string[]) => slugs)
  .handler(async ({ data: slugs }) => {
    const page = source.getPage(slugs)
    if (!page || !page.data) throw notFound()
    return {
      tree: source.pageTree as object,
      path: page.path,
      data: {
        url: page.url,
        title: page.data.title,
        description: page.data.description,
        links: page.data.links,
        structuredData: page.data.structuredData,
      },
    }
  })

export const tocLoader = createClientLoader(docs.doc, {
  id: 'docs-toc',
  async component({ toc }) {
    return (
      <>
        {toc?.length ? (
          <div className="no-scrollbar overflow-y-auto px-8">
            <DocsTableOfContents toc={toc} />
            <div className="h-12" />
          </div>
        ) : null}
      </>
    )
  },
})

export const mdxLoader = createClientLoader(docs.doc, {
  id: 'docs-mdx',
  async component({ default: MDX }) {
    return <MDX components={mdxComponents} />
  },
})
