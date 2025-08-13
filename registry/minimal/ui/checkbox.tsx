'use client'

import * as React from 'react'
import { labelVariants } from '@/registry/minimal/ui/label'
import { Checkbox as CheckboxPrimitive } from '@ark-ui/react'
import { IconCheck, IconMinus } from '@tabler/icons-react'

import { cn } from '@/lib/utils'

function Checkbox({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      {...props}
      className={cn(
        'flex items-start gap-3 has-disabled:cursor-not-allowed',
        className
      )}
    >
      <CheckboxPrimitive.HiddenInput className="peer" />
      {children}
    </CheckboxPrimitive.Root>
  )
}

function CheckboxControl({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Control>) {
  return (
    <CheckboxPrimitive.Control
      {...props}
      className={cn(
        'border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary data-focus-visible:border-ring data-focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none data-focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className
      )}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current transition-none">
        <IconCheck className="size-3.5" />
      </CheckboxPrimitive.Indicator>
      <CheckboxPrimitive.Indicator
        className="flex items-center justify-center text-current transition-none"
        indeterminate
      >
        <IconMinus className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Control>
  )
}

function CheckboxLabel({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Label>) {
  return (
    <CheckboxPrimitive.Label
      {...props}
      className={cn(labelVariants(), className)}
    />
  )
}

function CheckboxGroup({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Group>) {
  return (
    <CheckboxPrimitive.Group
      {...props}
      className={cn('space-y-3', className)}
    />
  )
}

Checkbox.Control = CheckboxControl
Checkbox.Label = CheckboxLabel
Checkbox.Group = CheckboxGroup

export { Checkbox, CheckboxControl, CheckboxLabel, CheckboxGroup }
