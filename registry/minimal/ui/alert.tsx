import * as React from 'react'
import { ark } from '@ark-ui/react/factory'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

const alertVariants = tv({
  base: 'relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
  variants: {
    variant: {
      default: 'bg-card text-card-foreground',
      destructive:
        'text-destructive bg-card [&>svg]:text-current *:data-[part=description]:text-destructive/90',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof ark.div> & VariantProps<typeof alertVariants>) {
  return (
    <ark.div
      data-scope="alert"
      data-part="root"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({
  className,
  ...props
}: React.ComponentProps<typeof ark.h5>) {
  return (
    <ark.h5
      data-part="title"
      className={cn(
        'col-start-2 line-clamp-1 min-h-4 font-medium text-base tracking-tight',
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      data-part="description"
      className={cn(
        'text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed',
        className
      )}
      {...props}
    />
  )
}

Alert.Title = AlertTitle
Alert.Description = AlertDescription

export { Alert, AlertTitle, AlertDescription }
