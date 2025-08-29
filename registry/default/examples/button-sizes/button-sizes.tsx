import { Button } from '@/registry/minimal/ui/button/button'

export function Page() {
  return (
    <div className="flex gap-2 flex-col sm:flex-row">
      <Button size="xs">Click me</Button>
      <Button size="sm">Click me</Button>
      <Button>Click me</Button>
      <Button size="lg">Click me</Button>
      <Button size="xl">Click me</Button>
    </div>
  )
}
