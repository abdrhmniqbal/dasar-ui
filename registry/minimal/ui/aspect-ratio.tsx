import * as React from 'react'
import { ark } from '@ark-ui/react/factory'

import { cn } from '@/lib/utils'

export interface AspectRatioProps extends React.ComponentProps<typeof ark.div> {
  ratio?: number
}

function AspectRatio({
  children,
  className,
  ratio = 1,
  style,
  ...props
}: AspectRatioProps) {
  return (
    <ark.div
      data-scope="aspect-ratio"
      style={{
        ...style,
        paddingBottom: `${(1 / ratio) * 100}%`,
      }}
      className={cn('relative w-full', className)}
      {...props}
    >
      <div
        className="absolute inset-0 size-full"
        data-part="content"
      >
        {children}
      </div>
    </ark.div>
  )
}

export { AspectRatio }
