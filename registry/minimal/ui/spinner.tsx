import { ark } from '@ark-ui/react/factory'
import { IconLoader2 } from '@tabler/icons-react'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

const spinnerVariants = tv({
  variants: {
    size: {
      xs: 'size-3',
      sm: 'size-4',
      md: 'size-6',
      lg: 'size-8',
      xl: 'size-12',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface SpinnerProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof spinnerVariants> {
  /**
   * For accessibility, it is important to add a fallback loading text.
   * This text will be visible to screen readers.
   * @default "Loading..."
   */
  label?: string
}

export function Spinner({
  size,
  className,
  label = 'Loading...',
  ...props
}: SpinnerProps) {
  return (
    <ark.div
      data-scope="spinner"
      className="inline-block"
      {...props}
    >
      <IconLoader2
        className={cn(
          spinnerVariants({
            size,
          }),
          'animate-spin',
          className
        )}
      />
      {label && <span className="sr-only">{label}</span>}
    </ark.div>
  )
}
