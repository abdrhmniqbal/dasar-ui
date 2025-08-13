'use client'

import * as React from 'react'
import { Avatar as AvatarPrimitive } from '@ark-ui/react'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

const avatarVariants = tv({
  base: "relative flex shrink-0 overflow-hidden rounded-full [&_svg:not([class*='size-'])]:size-4",
  variants: {
    size: {
      xs: 'size-8 text-xs',
      sm: 'size-9 text-sm',
      md: "size-10 text-base [&_svg:not([class*='size-'])]:size-5",
      lg: "size-11 text-lg [&_svg:not([class*='size-'])]:size-6",
      xl: "size-12 text-xl [&_svg:not([class*='size-'])]:size-7",
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

function Avatar({
  className,
  size,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> &
  VariantProps<typeof avatarVariants>) {
  return (
    <AvatarPrimitive.Root
      data-scope="avatar"
      className={cn(avatarVariants({ size }), className)}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-part="image"
      className={cn('aspect-square size-full', className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="fallback"
      className={cn(
        'bg-muted flex size-full items-center justify-center rounded-full',
        className
      )}
      {...props}
    />
  )
}

Avatar.Image = AvatarImage
Avatar.Fallback = AvatarFallback

export { Avatar, AvatarImage, AvatarFallback }
