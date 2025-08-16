import * as React from 'react'
import { ark } from '@ark-ui/react/factory'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

const badgeVariants = tv({
  base: "inline-flex items-center justify-center rounded-md text-xs border font-medium w-fit whitespace-nowrap shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  variants: {
    variant: {
      primary:
        'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
      secondary:
        'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
      destructive:
        'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
      outline:
        'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
    },
    size: {
      sm: "px-2 h-5 gap-1 [&_svg:not([class*='size-'])]:size-3",
      md: 'px-2.5 h-6 gap-1.5',
      lg: 'px-3 h-7 gap-1.5',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

function Badge({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ark.span> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  return (
    <ark.span
      data-scope="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
