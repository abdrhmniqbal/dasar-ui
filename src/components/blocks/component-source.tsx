import * as React from 'react'
import { createServerFn } from '@tanstack/react-start'

import { highlightCode } from '@/lib/highlight-code'
import { getRegistryItem } from '@/lib/registry'
import { cn } from '@/lib/utils'
import { CodeCollapsibleWrapper } from '@/components/blocks/code-collapsible-wrapper'
import { CopyButton } from '@/components/blocks/copy-button'
import { getIconForLanguageExtension } from '@/components/icons'

const getFileContent = createServerFn({
  method: 'GET',
})
  .validator((src: string) => src)
  .handler(async ({ data: src }) => {
    const fs = await import('node:fs/promises')
    const path = await import('node:path')
    const content = await fs.readFile(path.join(process.cwd(), src), 'utf-8')
    return { content }
  })

export function ComponentSource({
  name,
  src,
  title,
  language,
  collapsible = true,
  className,
}: React.ComponentProps<'div'> & {
  name?: string
  src?: string
  title?: string
  language?: string
  collapsible?: boolean
}) {
  const [code, setCode] = React.useState<string>()
  const [highlighted, setHighlighted] = React.useState<string>()

  React.useEffect(() => {
    let active = true

    async function load() {
      let codeResult: string | undefined

      if (name) {
        const item = await getRegistryItem({ data: name })
        codeResult = item?.files?.[0]?.content
      }

      if (src) {
        const file = await getFileContent({ data: src })
        codeResult = file.content
      }

      if (codeResult && active) {
        setCode(codeResult)
        const lang = language ?? title?.split('.').pop() ?? 'tsx'
        const highlightedCode = await highlightCode(codeResult, lang)
        if (active) setHighlighted(highlightedCode)
      }
    }

    load()
    return () => {
      active = false
    }
  }, [name, src, title, language])

  if (!code || !highlighted) return null

  const lang = language ?? title?.split('.').pop() ?? 'tsx'

  const content = (
    <ComponentCode
      code={code}
      highlightedCode={highlighted}
      language={lang}
      title={title}
    />
  )

  if (!collapsible) {
    return <div className={cn('relative', className)}>{content}</div>
  }

  return (
    <CodeCollapsibleWrapper className={className}>
      {content}
    </CodeCollapsibleWrapper>
  )
}

function ComponentCode({
  code,
  highlightedCode,
  language,
  title,
}: {
  code: string
  highlightedCode: string
  language: string
  title?: string
}) {
  return (
    <figure
      data-rehype-pretty-code-figure=""
      className="[&>pre]:max-h-96"
    >
      {title && (
        <figcaption
          data-rehype-pretty-code-title=""
          className="text-code-foreground [&_svg]:text-code-foreground flex items-center gap-2 [&_svg]:size-4 [&_svg]:opacity-70"
          data-language={language}
        >
          {getIconForLanguageExtension(language)}
          {title}
        </figcaption>
      )}
      <CopyButton value={code} />
      <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </figure>
  )
}
