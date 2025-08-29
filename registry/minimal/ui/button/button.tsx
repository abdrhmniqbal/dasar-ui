import * as React from 'react'
import { ark } from '@ark-ui/react/factory'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

const buttonVariants = tv({
  base: [
    'items-center appearance-none rounded-md cursor-pointer inline-flex font-semibold isolate min-w-0 justify-center outline-none relative duration-[normal] transition-all whitespace-nowrap select-none align-middle',
    'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
    'disabled:pointer-events-none disabled:opacity-50',
    'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  ],
  variants: {
    appearance: {
      solid: 'shadow-xs',
      outline: 'border shadow-xs',
      soft: '',
      ghost: '',
      link: '',
    },
    color: {
      primary: '',
      secondary: '',
      destructive:
        'focus-visible:border-destructive focus-visible:ring-destructive/50',
    },
    size: {
      xs: "h-8 min-w-8 text-xs px-3 gap-x-2 has-[>svg]:px-2 [&_svg:not([class*='size-'])]:size-3.5",
      md: 'h-10 min-w-10 text-sm px-4 gap-x-2 has-[>svg]:px-3',
      sm: 'h-9 min-w-9 text-sm gap-x-2 px-3.5 has-[>svg]:px-2.5',
      lg: "h-11 min-w-11 text-base px-4.5 gap-x-2 has-[>svg]:px-4 [&_svg:not([class*='size-'])]:size-4.5",
      xl: "h-12 min-w-12 text-base px-5 gap-x-2.5 has-[>svg]:px-4.5 [&_svg:not([class*='size-'])]:size-5",
    },
    iconOnly: {
      true: '',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  compoundVariants: [
    //custom size for icon only
    { size: 'xs', iconOnly: true, className: 'size-8' },
    { size: 'sm', iconOnly: true, className: 'size-9' },
    { size: 'md', iconOnly: true, className: 'size-10' },
    { size: 'lg', iconOnly: true, className: 'size-11' },
    { size: 'xl', iconOnly: true, className: 'size-12' },

    //Solid Variant
    {
      appearance: 'solid',
      color: 'primary',
      className:
        'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
    },
    {
      appearance: 'solid',
      color: 'secondary',
      className:
        'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
    },
    {
      appearance: 'solid',
      color: 'destructive',
      className: 'bg-destructive text-white shadow-xs hover:bg-destructive/90',
    },

    //Outline Variant
    {
      appearance: 'outline',
      color: 'primary',
      className: 'text-primary border-primary hover:bg-primary/20',
    },
    {
      appearance: 'outline',
      color: 'secondary',
      className:
        'text-secondary-foreground border-secondary hover:bg-secondary/20',
    },
    {
      appearance: 'outline',
      color: 'destructive',
      className: 'text-destructive border-destructive hover:bg-destructive/20',
    },

    //Soft Variant
    {
      appearance: 'soft',
      color: 'primary',
      className: 'bg-primary/30 text-primary hover:bg-primary/20',
    },
    {
      appearance: 'soft',
      color: 'secondary',
      className:
        'bg-secondary/50 text-secondary-foreground hover:bg-secondary/20',
    },
    {
      appearance: 'soft',
      color: 'destructive',
      className: 'bg-destructive/20 text-destructive hover:bg-destructive/10',
    },

    //Ghost variant
    {
      appearance: 'ghost',
      color: 'primary',
      className: 'text-primary hover:bg-primary/20',
    },
    {
      appearance: 'ghost',
      color: 'secondary',
      className: 'text-secondary-foreground hover:bg-secondary/20',
    },
    {
      appearance: 'ghost',
      color: 'destructive',
      className: 'text-destructive hover:bg-destructive/20',
    },
  ],
  defaultVariants: {
    appearance: 'solid',
    color: 'primary',
    size: 'md',
    iconOnly: false,
    fullWidth: false,
  },
})

type ButtonProps = React.ComponentProps<typeof ark.button> &
  VariantProps<typeof buttonVariants>

function Button({
  className,
  appearance,
  color,
  size,
  fullWidth,
  iconOnly,
  children,
  ...props
}: ButtonProps) {
  return (
    <ark.button
      data-scope="button"
      className={cn(
        buttonVariants({
          appearance,
          color,
          size,
          iconOnly,
          fullWidth,
          className,
        })
      )}
      {...props}
    >
      {children}
    </ark.button>
  )
}

export { Button, buttonVariants }
export type { ButtonProps }
