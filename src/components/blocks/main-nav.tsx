'use client'

import { Link, useLocation } from '@tanstack/react-router'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

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
          variant="ghost"
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
