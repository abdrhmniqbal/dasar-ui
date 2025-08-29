import { Button } from '@/registry/minimal/ui/button/button'

export function Page() {
  return (
    <div className="flex gap-x-2">
      <Button>Click me</Button>
      <Button color="secondary">Click me</Button>
      <Button color="destructive">Click me</Button>
    </div>
  )
}
