'use client'

import * as React from 'react'
import { ark } from '@ark-ui/react/factory'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

const labelVariants = tv({
  base: 'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
})

function Label({
  className,
  ...props
}: React.ComponentProps<typeof ark.label> &
  VariantProps<typeof labelVariants>) {
  return (
    <ark.label
      data-scope="label"
      className={cn(labelVariants(), className)}
      {...props}
    />
  )
}

export { Label, labelVariants }
