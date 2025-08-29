'use client'

import { Link, useLocation } from '@tanstack/react-router'
import { Button } from '@/registry/minimal/ui/button/button'

import { cn } from '@/lib/utils'

export function MainNav({
  items,
  className,
  ...props
}: React.ComponentProps<'nav'> & {
  items: { href: string; label: string }[]
}) {
  const { pathname } = useLocation()

  return (
    <nav
      className={cn('items-center gap-0.5', className)}
      {...props}
    >
      {items.map((item) => (
        <Button
          key={item.href}
          appearance="ghost"
          asChild
          size="sm"
        >
          <Link
            to={item.href}
            className={cn(pathname === item.href && 'text-primary')}
          >
            {item.label}
          </Link>
        </Button>
      ))}
    </nav>
  )
}
