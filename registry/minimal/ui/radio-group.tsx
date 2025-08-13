'use client'

import * as React from 'react'
import { labelVariants } from '@/registry/minimal/ui/label'
import { RadioGroup as RadioGroupPrimitive } from '@ark-ui/react/radio-group'

import { cn } from '@/lib/utils'

function RadioGroup({
  className,
  children,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-3', className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator />
      {children}
    </RadioGroupPrimitive.Root>
  )
}

function RadioGroupItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        'group flex items-center gap-3 data-[state=checked]:data-[part=indicator]:hidden',
        className
      )}
      {...props}
    >
      {/* <RadioGroupPrimitive.Indicator className="hidden items-center justify-center group-data-[state=checked]:flex">
        <IconCircle className="fill-primary size-2 mx-auto" />
      </RadioGroupPrimitive.Indicator> */}

      <RadioGroupPrimitive.ItemHiddenInput className="peer" />
      {children}
    </RadioGroupPrimitive.Item>
  )
}

function RadioGroupControl({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.ItemControl>) {
  return (
    <RadioGroupPrimitive.ItemControl
      className={cn(
        'border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
}

function RadioGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Label>) {
  return (
    <RadioGroupPrimitive.Label
      {...props}
      className={cn(labelVariants(), className)}
    />
  )
}

function RadioGroupItemText({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.ItemText>) {
  return (
    <RadioGroupPrimitive.ItemText
      {...props}
      className={cn(labelVariants(), className)}
    />
  )
}

RadioGroup.Item = RadioGroupItem
RadioGroup.Control = RadioGroupControl
RadioGroup.Label = RadioGroupLabel
RadioGroup.ItemText = RadioGroupItemText

export {
  RadioGroup,
  RadioGroupItem,
  RadioGroupControl,
  RadioGroupLabel,
  RadioGroupItemText,
}
