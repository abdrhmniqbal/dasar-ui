import * as React from 'react'
import { ark } from '@ark-ui/react/factory'
import { IconLoader2 } from '@tabler/icons-react'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn, isElementWithAttr } from '@/lib/utils'

const buttonVariants = tv({
  base: [
    'items-center rounded-md cursor-pointer select-none appearance-none inline-flex font-medium isolate min-w-0 justify-center outline-none relative duration-[normal] transition-all whitespace-nowrap',
    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
    'disabled:pointer-events-none disabled:opacity-50',
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  ],
  variants: {
    variant: {
      primary:
        'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
      destructive:
        'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
      outline:
        'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
      secondary:
        'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
      ghost:
        'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
      xs: "h-8 min-w-8 text-xs px-3 gap-2 has-[>svg]:px-2 [&_svg:not([class*='size-'])]:size-3.5",
      md: 'h-10 min-w-10 text-sm px-4 gap-2 has-[>svg]:px-3',
      sm: 'h-9 min-w-9 text-sm gap-2 px-3.5 has-[>svg]:px-2.5',
      lg: "h-11 min-w-11 text-base px-4.5 gap-2 has-[>svg]:px-4 [&_svg:not([class*='size-'])]:size-4.5",
      xl: "h-12 min-w-12 text-base px-5 gap-2.5 has-[>svg]:px-4.5 [&_svg:not([class*='size-'])]:size-5",
    },
    iconOnly: {
      true: '',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  compoundVariants: [
    { size: 'xs', iconOnly: true, className: 'size-8' },
    { size: 'sm', iconOnly: true, className: 'size-9' },
    { size: 'md', iconOnly: true, className: 'size-10' },
    { size: 'lg', iconOnly: true, className: 'size-11' },
    { size: 'xl', iconOnly: true, className: 'size-12' },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    iconOnly: false,
  },
})

type ButtonProps = React.ComponentProps<typeof ark.button> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean
  }

function Button({
  className,
  variant,
  size,
  fullWidth,
  iconOnly,
  loading,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const childArray = React.Children.toArray(children)
  let content: React.ReactNode[] = childArray

  if (loading) {
    if (
      isElementWithAttr<{ 'data-part'?: string; className?: string }>(
        childArray[0],
        'data-part',
        'icon'
      )
    ) {
      const origCls = childArray[0].props.className ?? ''
      childArray[0] = (
        <IconLoader2
          key="loader"
          className={cn(origCls, 'animate-spin')}
          aria-hidden
        />
      )
    } else {
      childArray.unshift(
        <IconLoader2
          key="loader"
          className="animate-spin"
          aria-hidden
        />
      )
    }

    content = childArray
  }

  return (
    <ark.button
      data-scope="button"
      className={cn(
        buttonVariants({ variant, size, iconOnly, fullWidth, className })
      )}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </ark.button>
  )
}

export { Button, buttonVariants }
export type { ButtonProps }
