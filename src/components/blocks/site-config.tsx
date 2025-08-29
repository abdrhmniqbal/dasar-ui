'use client'

import * as React from 'react'
import { useLayout } from '@/hooks/use-layout'
import { Button } from '@/registry/minimal/ui/button/button'
import { GalleryHorizontalIcon } from 'lucide-react'

import { trackEvent } from '@/lib/events'
import { cn } from '@/lib/utils'

export function SiteConfig({ className }: React.ComponentProps<typeof Button>) {
  const { layout, setLayout } = useLayout()

  return (
    <Button
      appearance="ghost"
      iconOnly
      onClick={() => {
        const newLayout = layout === 'fixed' ? 'full' : 'fixed'
        setLayout(newLayout)
        trackEvent({
          name: 'set_layout',
          properties: { layout: newLayout },
        })
      }}
      className={cn('size-8', className)}
      title="Toggle layout"
    >
      <span className="sr-only">Toggle layout</span>
      <GalleryHorizontalIcon />
    </Button>
  )
}
